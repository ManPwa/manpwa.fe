import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'

function App() {
  return <Admin dataProvider={restProvider('http://127.0.0.1:5001/api')}>
    <Resource name='manga' list={PostList}/>
  </Admin>
}

export default App;
