import { Api, responseData } from './index';

export const listsApi = {
  getLists: () => Api.get('/lists').then(responseData),
  postList: (list) => Api.post('/lists', list).then(responseData),
  getListById: (id) => Api.get(`/lists/details/${id}`).then(responseData),
  deleteListById: (id) => Api.delete(`/lists/delete/${id}`).then(responseData),
};
