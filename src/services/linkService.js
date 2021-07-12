import axios from "axios";

export default class LinkService{
    getLinks(candidateId){
        return axios.get("http://localhost:8080/api/candidatelinks/getAllByCandidateId?candidateId="+candidateId)

    }

    update(link){
        return axios.put("http://localhost:8080/api/candidatelinks/update",link)
    }

    add(link){
        return axios.post("http://localhost:8080/api/candidatelinks/add",link)
    }
}

