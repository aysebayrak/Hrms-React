import axios from "axios";

export default class FavoriteService{
    add(favorite){
        return axios.post("http://localhost:8080/api/favorite/add",favorite)
    }
    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/favorite/getByCandidateId?id="+id)
    }

    deleteFavorites(id){
        return axios.delete("http://localhost:8080/api/favorite/deleteById?id="+id)
    }
}