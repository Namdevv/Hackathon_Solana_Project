export const localUserServ = {
  get: () => {
    let dataJson = localStorage.getItem("USER_INFOR");
    if (dataJson !== null) {
      return JSON.parse(dataJson);
    } else {
      return null; // or any other appropriate default value
    }
  },
  set: (userInfo) => {
    let dataJson = JSON.stringify(userInfo);
    localStorage.setItem("USER_INFOR", dataJson);
  },
  remove: () => {
    localStorage.removeItem("USER_INFOR");
  },
};
