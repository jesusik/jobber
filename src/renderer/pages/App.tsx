import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './logIn/welcome';
import Sign from './logIn/sign-in';
import Login from './logIn/log-in';
import Home from './home';
import Profile from './profile/profile';
import Saved from './profile/saved';
import JobInfo from './components/jobInfo';
import ListOfJobs from './components/listOfJobs';

export default function App() {
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
          <Route path="/jobs/:companyId" element={<ListOfJobs />} />
        </Routes>
      </HashRouter>
    </MantineProvider>
  );
}
