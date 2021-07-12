import axios from "axios";

export default class LanguageService{
    getLanguages(candidateId){
        return axios.get("http://localhost:8080/api/candidatelanguages/getAllByCandidateId?candidateId="+candidateId)
    }

    add(language){
        return axios.post("http://localhost:8080/api/candidatelanguages/add",language)
    }

    getLanguageList(){
        return axios.get("http://localhost:8080/api/candidatelanguages/getall")
    }

    update(language){
        return axios.put("http://localhost:8080/api/candidatelanguages/update",language)
    }

    
}