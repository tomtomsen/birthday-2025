import { Box, Button, Content } from "react-bulma-components";
import Page from "../../components/Page";
import { useDoneTasks } from "../../services/TaskService";

function Riddle1() {
    const {
        tasks,
        markTaskDone,
        doneTaskIds,
    } = useDoneTasks();

    const handleClick = () => {
        markTaskDone(tasks.riddle1);
    }
    return (
        <>
            <Page isChild={true}>
                <Content>
                    <p><strong>Rätsel #1</strong></p>
                    <p>
                        Versuche das Rätsel zu lösen.
                    </p>
                    <Content textAlign="center">
                        <Box>
                            <p>Von Magiern geflüstert, kaum gehört –<br/>
                            doch wer es kennt, bleibt ungestört.</p>
                        </Box>
                        <Button color="primary" onClick={() => handleClick()} disabled={doneTaskIds.has(tasks.riddle1)}>
                            Gelöst!
                        </Button>
                    </Content>
                </Content>
            </Page>
        </>
    )
}

export default Riddle1;