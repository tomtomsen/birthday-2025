import { Content } from "react-bulma-components";
import Page from "../../components/Page";
import { useDoneTasks } from "../../services/TaskService";
import ColorLock from "../../components/ColorLock";
import { useNavigate } from "react-router";
import { ROUTES } from "../../routes";

function Finish() {
    const {
        tasks,
        markTaskDone,
    } = useDoneTasks();

    const navigate = useNavigate();

    const handleSuccess = () => {
        markTaskDone(tasks.finish);
        navigate(ROUTES.dashboard)
    }
    return (
        <>
            <Page isChild={true}>
                <Content>
                    <p><strong>Fast geschafft!</strong></p>
                    <p>
                        Löse nun das letzte Rätsel und du bist fertig!
                    </p>                    
                </Content>

                <Content display="flex" justifyContent="center" alignItems="center">
                    <ColorLock solution={[
                        'orange',
                        'red',
                        'blue',
                        'green',
                        'white',
                        'red',
                        'orange',
                    ]} onSuccess={handleSuccess}/>
                </Content>
            </Page>
        </>
    )
}

export default Finish;