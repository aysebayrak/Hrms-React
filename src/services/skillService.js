import axios from "axios";

export default class SkillService{
    getSkills(candidateId){
        return axios.get("http://localhost:8080/api/candidateskills/getAllByCandidateId?candidateId="+candidateId)
    }

    update(skill){
        return axios.put("http://localhost:8080/api/candidateskills/update",skill)
    }
}