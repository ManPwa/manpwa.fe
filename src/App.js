import { Admin, Resource } from 'react-admin'
import { stringify } from 'query-string';
import mangaList from './components/mangaList'
import userList from './components/userList'
import { authProvider }  from './components/authProvider';
import { fetchUtils } from 'ra-core';
const dataProvider = {
  getList: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify(params.filter),
      };
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/${resource}?${stringify(query)}`;

      return fetchUtils.fetchJson(url).then(({ headers, json }) => ({
          data: json.map(resource => ({ ...resource, id: resource._id }) ),
          total: parseInt(headers.get('content-range').split('/').pop(), 10),
      }));
  },
  getOne: (resource, params) =>
      fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}/${params.id}`).then(({ json }) => (
           { ...json, id: json._id }
      )),

  getMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids }),
      };
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/${resource}?${stringify(query)}`;
      return fetchUtils.fetchJson(url).then(({ json }) => ({ 
           data: json.map(resource => ({ ...resource, id: resource._id }) ),
      }));
  },

  getManyReference: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify({
              ...params.filter,
              [params.target]: params.id,
          }),
      };
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/${resource}?${stringify(query)}`;

      return fetchUtils.fetchJson(url).then(({ headers, json }) => ({
           data: json.map(resource => ({ ...resource, id: resource._id }) ),
          total: parseInt(headers.get('content-range').split('/').pop(), 10),
      }));
  },

  update: (resource, params) =>
      fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}/${params.id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
      }).then(({ json }) => (
           { ...json, id: json._id }
      )),

  updateMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids}),
      };
      return fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}?${stringify(query)}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
      fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}`, {
          method: 'POST',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({
           data: { ...params.data, id: json._id },
      })),

  delete: (resource, params) =>
      fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}/${params.id}`, {
          method: 'DELETE',
      }).then(({ json }) => (
           { ...json, id: json._id }
      )),

  deleteMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids}),
      };
      return fetchUtils.fetchJson(`${process.env.REACT_APP_API_BASE_URL}/api/${resource}?${stringify(query)}`, {
          method: 'DELETE',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
  }
};

function App() {
  
  return <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
    <Resource name='manga' list={mangaList}/>
    <Resource name='user' list={userList}/>
  </Admin>
}

export default App;
