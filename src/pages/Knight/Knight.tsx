import 'bulma/css/bulma.min.css';
import { useDoneTasks } from '../../services/TaskService';
import { useState } from 'react';
import Board from './Board';
import Page from '../../components/Page';
import { Box, Content } from 'react-bulma-components';

function Knight() {
  const {
    markTaskDone,
    doneTaskIds,
    tasks,
  } = useDoneTasks();

  const [isDone, setDone] = useState(doneTaskIds.has(tasks.knight));

  const handleDone = () => {
    markTaskDone(tasks.knight);
    setDone(true);
  }

  return (
    <>
      <Page isChild>
        <Content>
          <p><strong>Das Springer-Problem!</strong></p>
          <p>Bei diesem Rätsel dreht sich alles um den Springer aus dem Schachspiel. Die Aufgabe: Finde einen Weg, bei dem der Springer jedes Feld auf dem Spielbrett genau einmal betritt – ohne ein Feld zweimal zu besuchen.</p>
          <p>Du kannst dir merken: Der Springer bewegt sich in einem „L“ – also zwei Felder in eine Richtung und dann eins im rechten Winkel.</p>
          <p>Klingt einfach? Vielleicht auf den ersten Blick! Viel Spaß beim Tüfteln und Ausprobieren.</p>
        </Content>
        
        {isDone && (
          <Box style={{backgroundColor: 'var(--color-red)'}}>
            <Content textAlign='center'>
              <p>Super! Du hast das Rätsel gelöst. 🎉</p>
              <p>Jetzt kannst du dich auf die Suche nach dem nächsten Rätsel machen.</p>
            </Content>
          </Box>
        )}
        {!isDone && (
          <Content alignItems='center'><Board onDone={handleDone} /></Content>
        )}
      </Page>
    </>
  )
}

export default Knight
