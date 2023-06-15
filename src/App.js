import { Admin, Resource } from 'react-admin'
import * as React from 'react';
import manga from './manga';
import userList from './components/userList';
import dataProvider from './dataProvider/dataProvider';
import { authProvider }  from './components/authProvider';


function App() {
  return <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
    <Resource name='manga' {...manga}/>
    <Resource name='user' list={userList}/>
  </Admin>
}

export default App;
