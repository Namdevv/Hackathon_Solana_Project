import { localUserServ } from "../../service/localService";
import { userServ } from "../../service/userService";
import { USER_LOGIN } from "../contant/userContant";

export const setLoginAction = (value) => {
  // value đến từ response axios
  return {
    type: USER_LOGIN,
    payload: value,
  };
};
export const setLoginActionService = (value, onCompleted) => {
  // value đến thẻ form của antd
  return (dispatch) => {
    userServ
      .postLogin(value)
      .then((res) => {
        dispatch({
          type: USER_LOGIN,
          payload: res.data.content,
        });
        localUserServ.set(res.data.content);
        onCompleted();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// redux thunk ~  gọi api trong action
