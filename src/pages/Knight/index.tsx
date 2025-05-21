import { BoardProvider } from "./context/BoardContext";
import * as KnightInternal from "./Knight";

function Knight() {
  return (
    <>
        <BoardProvider>
            <KnightInternal.default />
        </BoardProvider>
    </>
  );
}

export default Knight;