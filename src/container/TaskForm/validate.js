const validate = values => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'required';
  } else if (title.trim().length < 5) {
    errors.title = 'length must be greeter than 5';
  }
  return errors;
};

export default validate;
