import React from "react";
import Api from "../components/Api";
import Records from "./Record";
import Searchbar from "./Searchbar"

class Datastore extends React.Component {
    state = {
        employees:[]
    }
    componentDidMount =()=>{
        let userdata = []
        let employeedata = ""
        Api.getusers().then(results=>{
            // console.log (results.data.results)
            for(let i=0; i<results.data.results.length; i++){
                 employeedata= {
                    name: results.data.results[i].name.first,
                    email: results.data.results[i].email,
                    image: results.data.results[i].picture.large,
                    phone: results.data.results[i].phone,
                    DOB: results.data.results[i].dob.date,
                }
                console.log (employeedata)
                userdata.push(employeedata)
            }
            this.setState({
                employees:userdata
            },() =>{ 
            console.log(this.state.employees)
            })
        })
    }
    searchemp=(empname) =>{
        var employeesrec=this.state.employees
        var found = false
        var searchdata = []
        for(let i=0; i<employeesrec.length; i++){
            if (empname.toLowerCase() == employeesrec[i].name.toLowerCase()){
                found = true
                searchdata.push(employeesrec[i])
            }
        }
        if (found){
            this.setState({
                employees:searchdata
            })
        }
        else{
            this.setState({
                employees:[{
                    name: "employee not found"
                }]
            })
        }
    }
    render(){
        var rec = this.state.employees
        return(
<div>
<h1>
  
</h1>
    <Searchbar
        searchemp={this.searchemp}
        />
   {rec.map((data, i) => ( 

        <Records
        name = {data.name}
        email = {data.email}
        image = {data.image}
        phone = {data.phone}
        DOB = {data.DOB}
        key={i}
        />


        ))}

        </div>
        )
    }
}
export default Datastore;