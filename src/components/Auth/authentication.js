const getToken = () => {
  if (localStorage.getItem("jwtoken")) {
    return JSON.parse(localStorage.getItem("jwtoken"));
  } else {
    return false;
  }
};

const getUser = () => {
  if (localStorage.getItem("data")) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};
const getId = () => {
  if (localStorage.getItem("userId")) {
    return JSON.parse(localStorage.getItem("userId"));
  } else {
    return false;
  }
};

const Logout = () => {
  localStorage.removeItem("jwtoken");
  localStorage.removeItem("data");
  localStorage.removeItem("userId");
};

export { getId, getUser, getToken, Logout };
