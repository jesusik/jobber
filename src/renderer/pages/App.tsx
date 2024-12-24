import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './log-in/welcome';
import Sign from './log-in/sign-in';
import Login from './log-in/log-in';
import Home from './employee/home';

export default function App() {
  // const router = createBrowserRouter([
  //   { path: '/', element: <Welcome /> },
  //   { path: '/sign-in', element: <Sign /> },
  //   { path: '/log-in', element: <Login /> },
  //   { path: '/home', element: <Home /> },
  // ]);

  return (
    <MantineProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>

      {/* <RouterProvider router={router} /> */}
    </MantineProvider>
  );
}
