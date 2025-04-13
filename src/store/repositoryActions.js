import { repositoryActions } from './repositorySlice';
import { googleAPI } from '../api/api';

export const getRepositories = ({ perPage }) => {
  return async (dispatch) => {
    dispatch(repositoryActions.setState({ key: ['error', 'loading'], data: [null, true] }));

    try {
      const response = await googleAPI.get(`repos?per_page=${perPage}`);

      if (response.status !== 200) {
        throw new Error('Failed to fetch');
      }

      dispatch(repositoryActions.setState({ key: 'items', data: response.data }));
    } catch (error) {
      dispatch(repositoryActions.setState({ key: 'error', data: error.message }));
      throw error;
    } finally {
      dispatch(repositoryActions.setState({ key: 'loading', data: false }));
    }
  };
};
