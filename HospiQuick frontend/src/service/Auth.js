import axios from "axios";

class Auth{

    // base_uri = "http://localhost:8090/api/login";
    // base_uri="http://localhost:7500/auth-ms/login";
    base_uri="http://localhost:8080/api/auth/signin";

    authenticate(admin){
        return axios.post(this.base_uri,admin);
    }

}

export default new Auth();