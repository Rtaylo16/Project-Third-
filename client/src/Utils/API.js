  
import axios from 'axios';

export default {
    getCities: function(){
        return axios.get('/api/cost')
    }
//     getBooks: function(title) {
//     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
//   },

//   getsavedbooks: function() {
//     return axios.get("/api/books/");
//   },
 
  
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};