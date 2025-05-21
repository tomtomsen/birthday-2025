import { Button, Content, Image } from "react-bulma-components";
import Page from "../../components/Page";
import { useDoneTasks } from "../../services/TaskService";

function Riddle2() {
    const {
        tasks,
        markTaskDone,
        doneTaskIds,
    } = useDoneTasks();

    const handleClick = () => {
        markTaskDone(tasks.riddle2);
    }
    return (
        <>
            <Page isChild={true}>
                <Content>
                    <p><strong>Rätsel #2</strong></p>
                    <p>
                        Versuche das Rätsel zu lösen.
                    </p>
                    <Content textAlign="center">
                        <Image src="/riddle2.jpg" alt="Rätsel 2" size={"square"}  rounded/>
                        <Button 
                            color="primary" 
                            onClick={() => handleClick()} 
                            disabled={doneTaskIds.has(tasks.riddle2)}
                        >
                            Gelöst!
                        </Button>
                    </Content>
                </Content>
            </Page>
        </>
    )
}

export default Riddle2;