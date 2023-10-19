export const localUserServ = {
    get: () => {
      let dataJson = localStorage.getItem("USER_INFOR");
      return JSON.parse(dataJson);
      //  return null || object
      // null, undefined, "",false,NaN,0 => falsy
    },
    set: (userInfo) => {
      let dataJson = JSON.stringify(userInfo);
      localStorage.setItem("USER_INFOR", dataJson);
    },
    remove: () => {
      localStorage.removeItem("USER_INFOR");
    },
  };
  