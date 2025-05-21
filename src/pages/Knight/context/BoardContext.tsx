import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    useMemo,
} from "react";

type Position = number;

type BoardContextType = {
    size: number;
    currentPosition: Position | null;
    usedPositions: Set<Position>;
    allowedPositions: Set<Position>;
    resetPositions: () => void;
    moveKnight: (position: Position) => void;
    isDone: boolean;
};

const STORAGE_KEY = "knightPositions";

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const SIZE = 5;

    const [usedPositions, setUsedPositions] = useState<Set<Position>>(new Set());
    const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                if (Array.isArray(parsed) && parsed.length > 0) {
                    const u = new Set(parsed);
                    setUsedPositions(u);
                }
            } catch (e) {
                console.error("Failed to parse knight positions from localStorage", e);
            }
        }
        
    }, []);

    // Save to localStorage whenever the set changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(usedPositions)));
    }, [usedPositions]);

    const allowedPositions = useMemo(() => {
        const positions = new Set<Position>();
        if (currentPosition !== null) {
            const row = Math.floor(currentPosition / SIZE);
            const col = currentPosition % SIZE;
            const moves = [
                [row + 2, col + 1],
                [row + 2, col - 1],
                [row - 2, col + 1],
                [row - 2, col - 1],
                [row + 1, col + 2],
                [row + 1, col - 2],
                [row - 1, col + 2],
                [row - 1, col - 2],
            ];
            for (const [r, c] of moves) {
                if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
                    positions.add(r * SIZE + c);
                }
            }
        }
        return positions;
    }, [currentPosition]);

    const moveKnight = useCallback((position: Position) => {
        console.log("moveKnight", position, usedPositions);
    
        if (currentPosition !== null && !allowedPositions.has(position)) {
            console.log('Move blocked: not an allowed position');
            return;
        }
    
        if (usedPositions.has(position)) {
            console.log('Move blocked: already used');
            return;
        }
    
        setCurrentPosition(position);
        setUsedPositions(prev => {
            const updated = new Set(prev);
            updated.add(position);
            return updated;
        });
    }, [allowedPositions, usedPositions, currentPosition]);

    const resetPositions = useCallback(() => {
        setCurrentPosition(null);
        setUsedPositions(new Set());
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    const isDone = useMemo(() => {
        return usedPositions.size === SIZE * SIZE;
    }, [usedPositions]);

    return (
        <BoardContext.Provider value={{ 
            size: SIZE, 
            currentPosition, 
            allowedPositions, 
            usedPositions, 
            moveKnight, 
            resetPositions,
            isDone,
        }}>
            {children}
        </BoardContext.Provider>
    );
};

export const useBoard = (): BoardContextType => {
    const context = useContext(BoardContext);
    if (!context) throw new Error("useDoneTasks must be used within a BoardProvider");
    return context;
};
