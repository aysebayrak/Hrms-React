import axios from "axios"



export default class EmployeeService{  //çalışan
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }

}