import axios from "axios"

export default  class JobPostingService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobpostings/add",values)
    }
}