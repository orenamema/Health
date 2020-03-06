// import axios from "axios";

export default{
    getPatients: function(){
        return fetch("http://localhost:3001/api/patients", {
            method: "GET",
          })
            .then(res => {return res.json();})
    },
    getPatient: function(id){
        return fetch(`http://localhost:3001/api/patients/${id}`, {
            method: "GET",
          })
            .then(res => {return res.json();})
    },    
    saveNotes: function(id, notes){
        return fetch(`http://localhost:3001/api/patients/${id}`, {
				  method: 'PUT', 
				  headers: {
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({"notes": notes}),
				}).then(res => {return res.json();})
    },
    createProfile: function(data){
        return fetch(`http://localhost:3001/api/patients/`, {
				  method: 'POST',
				  headers: {
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(data),
				}).then(res => {return res.json();})
    },
    deletePatient: function(id){
        return fetch(`http://localhost:3001/api/patients/${id}`, {
			method: "DELETE",           
          }).then(res => {return res.json();})
    },    

}
