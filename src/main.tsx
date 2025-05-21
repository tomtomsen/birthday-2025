import 'bulma/css/bulma.min.css';
import './styles/global.css';
import { ROUTES } from './routes';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { DoneTaskProvider } from './services/TaskService.tsx';
import * as pages from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DoneTaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<pages.Dashboard />} />
          <Route path={ROUTES.intro} element={<pages.Intro />} />
          <Route path={ROUTES.knight} element={<pages.Knight />} />
          <Route path={ROUTES.mistery_persion_1} element={<pages.Selin />} />
          <Route path={ROUTES.mistery_persion_2} element={<pages.Bianca />} />
          <Route path={ROUTES.mistery_persion_3} element={<pages.Christina />} />
          <Route path={ROUTES.riddle1} element={<pages.Riddle1 />} />
          <Route path={ROUTES.riddle2} element={<pages.Riddle2 />} />
          <Route path={ROUTES.finish} element={<pages.Finish />} />
        </Routes>
      </BrowserRouter>
    </DoneTaskProvider>
  </StrictMode>
)
