import userConstans from '../_constants';

export const users = (
  state = {},
  action
) => {
  switch (action.type) {
    
    case userConstans.GETALL_REQUEST:
      return {
        isLoading: true
      };
    case userConstans.GETALL_SUCCESS:
      return {
        users: action.users,
        isLoaded: true
      };
    case userConstans.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
};