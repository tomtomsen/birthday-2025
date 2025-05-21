import { Content, Image } from "react-bulma-components";
import Page from "../../components/Page";
import TaskList from "../../components/TaskList";
import { useDoneTasks } from "../../services/TaskService";

function Dashboard() {
        const {
            tasks,
            doneTaskIds,
        } = useDoneTasks();

    return (
        <>
            <Page>
                {doneTaskIds.has(tasks.finish) && (
                    <>
                        <Content textAlign="center">
                            <Image src="/cake.png" alt="Birthday Cake" size="128x128" className="is-inline-block" />
                        </Content>
                        <Content>
                            <p>Du hast es geschafft!<br/>
                            Alle Rätsel gelöst, jedes Geheimnis entschlüsselt, jede Spur gefunden – und am Ende führt alles zu diesem Moment:</p>

                            <p><strong>Herzlichen Glückwunsch, mein Schatz!</strong></p>

                            <p>Heute ist nicht irgendein Tag – heute feiern wir <em>dich</em>.<br/>
                            Dein Lächeln, dein Herz, deine Stärke, deine Art, die Welt ein kleines Stück heller zu machen.<br/>
                            </p>

                            <p>Denn genauso wie du dich durch jedes Rätsel gearbeitet hast,<br/>
                            arbeitest du dich auch durch mein Herz –
                            mit Geduld, mit Liebe, mit einem Funkeln in den Augen, das mich jedes Mal aufs Neue verzaubert.</p>

                            <p>Ich bin so unendlich dankbar, dass es dich gibt.<br/>
                            Dass ich dich lieben darf.<br/>
                            Und dass du heute Geburtstag hast –<br/>
                            denn was für ein Glück, dass die Welt an diesem Tag ein so wundervoller Mensch geschenkt wurde.</p>

                            <p><strong>Alles Liebe zum Geburtstag, mein Sonnenschein.</strong><br/>
                            Ich liebe dich – heute, morgen und für alle Zeit.</p>

                            <p>Dein Markus</p>
                        </Content>
                    </>
                )}
                {!doneTaskIds.has(tasks.finish) && (
                    <>
                    <Content textAlign="center">
                        <Image src="/cake.png" alt="Birthday Cake" size="128x128" className="is-inline-block" />
                        <p>
                            Alles Gute zu deinem 38. Geburtstag!
                        </p>
                    </Content>

                    <TaskList />
                    </>
                )}
            </Page>
        </>
    )
}

export default Dashboard;