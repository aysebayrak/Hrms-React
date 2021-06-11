import axios from "axios";

export default class CandidateService{ //aday
    getCandidates(){
        return axios.get("http://localhost:8080/7api/candidates/getall")
    }
}