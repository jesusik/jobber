import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './welcome';
import Sign from './sign-in';
import Login from './log-in';
import Home from './home';
import Profile from './profile/profile';

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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>

      {/* <RouterProvider router={router} /> */}
    </MantineProvider>
  );
}
