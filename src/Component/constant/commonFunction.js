const validateEmail = (email) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email?.match(pattern);
};

export {validateEmail}