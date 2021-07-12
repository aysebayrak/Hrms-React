import axios from "axios";

export default class ImageService{
    getImages(candidateId){
        return axios.get("http://localhost:8080/api/candidateimages/getByCandidateId?candidateId="+candidateId)
    }
}