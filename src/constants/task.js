const createRequestTypes = (base, act) =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});

const TASK_TYPE = {
  ...createRequestTypes('TASK', 'FETCH_TASK'),
  ...createRequestTypes('TASK', 'ADD_TASK'),
  ...createRequestTypes('TASK', 'UPDATE_TASK'),
  ...createRequestTypes('TASK', 'FILTER_TASK'),
  ...createRequestTypes('TASK', 'DELETE_TASK'),
  SET_TASK_EDITTING: 'SET_TASK_EDITTING'
};

export default TASK_TYPE;
