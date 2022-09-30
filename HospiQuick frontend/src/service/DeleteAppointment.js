import axios from "axios";

class DeleteAppointment{

    deleteAppointments(uri)
    {
        return axios.delete(uri);
    }

}

export default new DeleteAppointment();