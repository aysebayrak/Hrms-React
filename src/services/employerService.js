import axios from "axios"

export default class EmployerService{  //iş veren
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}