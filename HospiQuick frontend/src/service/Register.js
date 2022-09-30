import axios from "axios";

class Register{
    // base_uri = "http://localhost:8090/api/login";
    // base_uri="http://localhost:7500/auth-ms/login";
    base_uri="http://localhost:8080/api/auth/signup";

    add(User){
        return axios.post(this.base_uri,User);
    }
}
export default new Register();