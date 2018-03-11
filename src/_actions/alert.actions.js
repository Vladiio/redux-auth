import { alertConstants } from '../_constants';

export const alertActions = {
  success,
  error,
  clear
};

const success = (message) => ({
  type: alertConstants.SUCCESS,
  message
});

const error = (message) => ({
  type: alertConstants.ERROR,
  message
});

const clear = () => ({
  type: alertConstants.CLEAR,
});