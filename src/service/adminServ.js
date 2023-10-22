import { https } from "./config"

export const adminServ = {
    getUserList: () =>{
       return https.get("/api");
    },

    deleteUser: (taiKhoan)=>{
        return https.delete(`/api=${taiKhoan}`)
    },
    getSearchUser: (keywork) => {
        return https.get(`/api=${keywork}`)
    }
}