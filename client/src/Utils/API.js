import axios from "axios";
import Value from "../components/dropdowndata"

export default {
    getCity: function() {
        return axios.get("https://api.teleport.org/api/cities/{?search}");
      },
      getBasicInfo: function() {
        return axios.get("https://api.teleport.org/api/cities/geonameid:5391959");
      },
      getUrbanarea: function() {
        return axios.get('https://api.teleport.org/api/urban_areas/slug:${Value}/');
      },
      // getQualityOfLife: function() {
      //   return axios.get('https://api.teleport.org/api/urban_areas/slug:'+ {Value} + '/scores/');
      // },
    
      // getUrbanPhotos: function() {
      //     return axios.get('https://api.teleport.org/api/urban_areas/slug:'+ {Value} +'/images/');
      // }
    }; 