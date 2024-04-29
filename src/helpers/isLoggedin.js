const isLoggedin = () => {
  if (localStorage.token) {
    return true;
  }
  return false;
};
export default isLoggedin;
