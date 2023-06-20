import { Admin, Resource } from 'react-admin'
import { Route } from 'react-router-dom';
import * as React from 'react';
import manga from './manga';
import chapter from './chapter';
import image from './image';
import userList from './components/userList';
import dataProvider from './dataProvider/dataProvider';
import { authProvider }  from './components/authProvider';

import ChapterCreate from './chapter/chapterCreate';
import ImageCreate from './image/imageCreate';

function App() {
  return <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
    <Resource name='manga' {...manga}>
      <Route path=":mangaId/chapter" element={<ChapterCreate />} />
    </Resource>
    <Resource name='user' list={userList}/>
    <Resource name='chapter' {...chapter}>
      <Route path=":chapterId/image" element={<ImageCreate />} />
    </Resource>
    <Resource name='image' {...image}/>
  </Admin>
}

export default App;
