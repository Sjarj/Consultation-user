import { USER_SELECTED } from '../actions';

export default (state, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return action.payload;
  }
  return state;
};
