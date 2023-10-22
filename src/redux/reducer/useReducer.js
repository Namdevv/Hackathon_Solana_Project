import { localUserServ } from "../../service/localUserServ";
import { USER_LOGIN } from "../contant/userContant";

const initialState = {
  userInfor: localUserServ.get(),
};

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return { ...state, userInfor: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
