import axios from "axios";

export default class ExperienceService{
    getJobExperiences(candidateId){
        return axios.get("http://localhost:8080/api/candidateexperiences/getAllByCandidateId?candidateId=" +candidateId)
    }

    update(experience){
        return axios.put("http://localhost:8080/api/candidateexperiences/update",experience)
    }
}