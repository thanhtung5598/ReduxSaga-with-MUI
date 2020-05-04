const createRequestTypes = (base, act) =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});

const TASK_TYPE = {
  ...createRequestTypes('TASK', 'FETCH_TASK')
};

export default TASK_TYPE;
