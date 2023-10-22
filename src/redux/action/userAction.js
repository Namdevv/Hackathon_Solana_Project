import { localUserServ } from "../../service/localUserServ";
import { userServ } from "../../service/userServ";
import { USER_LOGIN, USER_SIGNUP } from "../contant/userContant";

export const setLoginAction = (value) => {
  // value đến từ response axios
  return {
    type: USER_LOGIN,
    payload: value,
  };
};

export const setSignUpAction = (value) => {
  return {
      type : USER_SIGNUP,
      payload: value,
  }
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


export const setSignUpActionService = (value,onCompleted)=>{
  return(dispatch) => {
      userServ.postSignUp(value)
              .then((res) => {
          console.log(res);
          dispatch({
              type: USER_SIGNUP,
              payload: res.data.content,
          });
          localUserServ.set(res.data.content);
          onCompleted();
      }).catch((err) => {
          console.log(err);
      });
  }
}

// redux thunk ~  gọi api trong action
