import { Box, Button, Content } from "react-bulma-components";
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
                        <Box>
                            <p>Ein Platz mit Blick, doch ohne Wort –<br/>
                            sie hält, was blüht, am hellsten Ort.</p>
                        </Box>
                        <Button color="primary" onClick={() => handleClick()} disabled={doneTaskIds.has(tasks.riddle2)}>
                            Gelöst!
                        </Button>
                    </Content>
                </Content>
            </Page>
        </>
    )
}

export default Riddle2;