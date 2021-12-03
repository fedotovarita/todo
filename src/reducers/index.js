import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_UPDATE': {
      return action.payload.text;
    }
    case 'TASK_ADD': {
      return '';
    }
    default:
      return state;
  }
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      const { text } = action.payload;
      return [text, ...state];
    }
    case 'REMOVE_TASK': {
      const { id } = action.payload;
      const newState = [...state];
      newState.splice(id, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  text,
  tasks,
});