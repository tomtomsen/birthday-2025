import 'bulma/css/bulma.min.css';
import 'bulma-checkbox/css/main.min.css';
import { Button, Content } from 'react-bulma-components'
import { useDoneTasks } from '../../services/TaskService';
import "./Intro.css";
import Page from '../../components/Page';

function Intro() {
  const { doneTaskIds, markTaskDone, tasks } = useDoneTasks();

  const handleClick = () => {
    markTaskDone(tasks.intro);
  }

  return (
    <>
      <Page isChild>

        <Content>
          <p>
            <strong>Willkommen zur Geburtstags-Schnitzeljagd! 🎉</strong>
          </p>
          <p>
            Auch in diesem Jahr habe ich mir wieder etwas Besonderes für dich ausgedacht: eine kleine Schnitzeljagd, an deren Ende – sofern du alle Rätsel erfolgreich knackst – dein Geburtstagsgeschenk auf dich wartet.
          </p>
          <p>Anders als in den letzten Jahren gibt es diesmal keine feste Reihenfolge. Du kannst die Rätsel in beliebiger Reihenfolge lösen – ganz wie es dir gefällt.</p>
          <p>Ich wünsche dir viel Spaß beim Knobeln, Entdecken und Rätseln.</p>
          <p>Mit viel Liebe gestaltet,<br />
          dein Markus</p>
          
          <Button 
            color="primary" 
            onClick={() => handleClick()} 
            className={doneTaskIds.has(tasks.intro) ? 'done' : ''}
          >
            Alles klar!
          </Button>
        </Content>
      </Page>
    </>
  )
}

export default Intro
