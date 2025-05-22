import { useDoneTasks } from "../../services/TaskService";
import { ROUTES } from "../../routes";
import Item from "./Item";

function TaskList() {
    const { tasks } = useDoneTasks();

    const items = [
        { task: tasks.intro, label: "Einleitung", route: ROUTES.intro },
        { task: tasks.knight, label: 'Hop, hop, hop', route: ROUTES.knight },
        { task: tasks.mistery_persion_1, label: 'Geheimnisvolle Person #1', route: ROUTES.mistery_persion_1 },
        { task: tasks.riddle1, label: 'Rätsel #1', route: ROUTES.riddle1 },
        { task: tasks.mistery_persion_2, label: 'Geheimnisvolle Person #2', route: ROUTES.mistery_persion_2 },
        { task: tasks.riddle2, label: 'Rätsel #2', route: ROUTES.riddle2 },
        { task: tasks.mistery_persion_3, label: 'Geheimnisvolle Person #3', route: ROUTES.mistery_persion_3 },
        { task: tasks.finish, label: 'Das Finale', route: ROUTES.finish },
    ]

    return (
        <>
            <div>
                {items.map((item) => (
                    <Item task={item.task} label={item.label} route={item.route} key={item.task} />
                ))}
            </div>
        </>
    );
}

export default TaskList;