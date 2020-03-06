// import axios from "axios"

export default{
    getusers: function(){
        return fetch("https://randomuser.me/api/?results=50&nat=us", {
            method: "GET",
          })
            .then(res => {return res.json();})
    }

}
