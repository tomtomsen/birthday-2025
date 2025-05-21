import { Link } from "react-router";
import Checkbox from "../../Checkbox";
import { useDoneTasks } from "../../../services/TaskService";
import { Button } from "react-bulma-components";

type ItemProps = {
    task: string;
    label: string;
    route: string;
}

function Item(props: ItemProps) {
    const { doneTaskIds } = useDoneTasks();

    return(
        <div>
            <Link to={props.route}>
                <Button color="primary" style={{textDecoration:"none", marginBlock: "5px"}} fullwidth justifyContent="flex-start" className="has-text-white">
                    <Checkbox checked={doneTaskIds.has(props.task)} readOnly>
                        {props.label}
                    </Checkbox>
                </Button>
            </Link>
        </div>
    )
}

export default Item;