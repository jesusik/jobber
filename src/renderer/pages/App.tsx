import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './logIn/welcome';
import Sign from './logIn/sign-in';
import Login from './logIn/log-in';
import Home from './home';
import Profile from './profile/profile';
import Saved from './profile/saved';
import JobInfo from './components/jobInfo';

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
          <Route path="/saved" element={<Saved />} />
          <Route path="/job/:id" element={<JobInfo />} />
        </Routes>
      </HashRouter>

      {/* <RouterProvider router={router} /> */}
    </MantineProvider>
  );
}
