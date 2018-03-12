import { userConstants } from '../_constants';

export const users = (
  state = {},
  action
) => {
  switch (action.type) {
    
    case userConstants.GETALL_REQUEST:
      return {
        isLoading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        users: action.users,
        isLoaded: true
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
};