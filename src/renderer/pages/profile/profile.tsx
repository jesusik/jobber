import '@mantine/core/styles.css';
import { MantineProvider, Center } from '@mantine/core';
import Header from '../components/header/header';
import ProfileSettings from '../components/profile/profile-settings';
// import ProfileInfo from '../components/profile/profile-info';

export default function Profile() {
  return (
    <MantineProvider>
      <div>
        <Header />
        <div style={{ margin: '40px' }}>
          <Center>
            <div className="container">
              <div className="row">
                <ProfileSettings />
              </div>
            </div>
          </Center>
        </div>
      </div>
    </MantineProvider>
  );
}
