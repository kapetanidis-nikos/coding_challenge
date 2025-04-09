import { repositoryActions } from './repositorySlice';
import { googleAPI } from '../api/api';

export const getRepositories = ({ perPage }) => {
  return async (dispatch) => {
    try {
      dispatch(repositoryActions.setState({ key: 'loading', data: true }));
      const response = await googleAPI.get(`repos?per_page=${perPage}`);

      if (response.status !== 200) {
        throw new Error('Failed to fetch');
      }

      dispatch(
        repositoryActions.setState({ key: 'items', data: response.data }),
      );
      dispatch(repositoryActions.setState({ key: 'loading', data: false }));
    } catch (error) {
      dispatch(
        repositoryActions.setState({ key: 'error', data: error.message }),
      );
      throw error;
    }
  };
};
