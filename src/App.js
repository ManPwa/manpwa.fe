import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import mangaList from './components/mangaList'
import userList from './components/userList'
import { authProvider }  from './components/authProvider';

function App() {
  return <Admin dataProvider={restProvider(`${process.env.REACT_APP_API_BASE_URL}/api`)} authProvider={authProvider} requireAuth>
    <Resource name='manga' list={mangaList}/>
    <Resource name='user' list={userList}/>
  </Admin>
}

export default App;
