export const updateNewTaskText = (text) => ({
    type: 'TEXT_UPDATE',
    payload: {
      text,
    },
  });
  
  export const addTask = (text) => ({
    type: 'TASK_ADD',
    payload: {
      text,
    },
  });
  
  export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: {
      id,
    },
  });