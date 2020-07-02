import axios from "axios";

export default {
    getCity: function() {
        return axios.get("https://api.teleport.org/api/cities/{?search}");
      },
      getBasicInfo: function() {
        return axios.get("https://api.teleport.org/api/cities/geonameid:5391959");
      },
      getQualityOfLife: function() {
        return axios.get("https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/");
      },
    
      getUrbanPhotos: function() {
          return axios.get("https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/");
      }
    }; 