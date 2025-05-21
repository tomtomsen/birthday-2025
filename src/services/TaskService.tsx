import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
  } from "react";
  
  type DoneTaskContextType = {
    tasks: Record<string, string>;
    doneTaskIds: Set<string>;
    markTaskDone: (id: string) => void;
    resetDoneTask: () => void;
  };
  
  const STORAGE_KEY = "doneTasks";
  
  const DoneTaskContext = createContext<DoneTaskContextType | undefined>(undefined);
  
  export const DoneTaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [doneTaskIds, setDoneTaskIds] = useState<Set<string>>(new Set());
  
    // Load from localStorage on first render
    useEffect(() => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
    
          if (Array.isArray(parsed) && parsed.length > 0) {
            const u = new Set(parsed);
            setDoneTaskIds(u);
          }
        } catch (e) {
          console.error("Failed to parse done tasks from localStorage", e);
        }
      }
    }, []);

    // Save to localStorage whenever the set changes
    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(doneTaskIds)));
    }, [doneTaskIds]);
  
    const markTaskDone = useCallback((id: string) => {
      setDoneTaskIds(prev => {
        if (prev.has(id)) return prev;
        const updated = new Set(prev);
        updated.add(id);
        return updated;
      });
    }, []);

    const resetDoneTask = useCallback(() => {
      setDoneTaskIds(new Set());
      localStorage.removeItem(STORAGE_KEY);
    }, []);

    const tasks = {
      intro: 'intro',
      knight: 'knight',
      mistery_persion_1: 'mistery-persion-1',
      mistery_persion_2: 'mistery-persion-2',
      mistery_persion_3: 'mistery-persion-3',
      riddle1: 'riddle-1',
      riddle2: 'riddle-2',
      finish: 'finish',
    } as const;
  
    return (
      <DoneTaskContext.Provider value={{ doneTaskIds, markTaskDone, resetDoneTask, tasks }}>
        {children}
      </DoneTaskContext.Provider>
    );
  };
  
  export const useDoneTasks = (): DoneTaskContextType => {
    const context = useContext(DoneTaskContext);
    if (!context) throw new Error("useDoneTasks must be used within a DoneTaskProvider");
    return context;
  };
  