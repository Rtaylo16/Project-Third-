import axios from "axios";


export default {

  getCity: function() {
    return axios.get("https://api.teleport.org/api/cities/{?search}");
  },
  
  geturbanareas: function(){
    return axios.get("https://api.teleport.org/api/urban_areas/slug:")
  },

  getBasicInfo: function() {
    return axios.get("https://api.teleport.org/api/cities/geonameid:5391959");
  },
 
  
  getQualityOfLife: function() {
    return axios.get("https://api.teleport.org/api/urban_areas/slug:/scores/");
  },

  getUrbanPhotos: function() {
      return axios.get("https://api.teleport.org/api/urban_areas/slug:/images/");
  }
}; 