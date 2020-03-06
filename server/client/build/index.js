import React from 'react';
import Api from "../../utils/Api.js";

class DatatablePage extends React.Component {

  state = {
    columns: [
      {
        label: 'Picture',
        field: 'picture',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Notes',
        field: 'notes',
        sort: 'asc',
        width: 300
      }
    ],
    rows: [{"id": 1, "name": "Frank Sutton", "email": "frank.sutton@example.com", "dob": '1979-01-28', "notes": "No Problem", "picture": "https://randomuser.me/api/portraits/med/men/74.jpg"}
          ,{"id": 2, "name": "Philip Prescott", "email": "philip.prescott@example.com", "dob": '1983-01-02', "notes": "No Problem", "picture": "https://randomuser.me/api/portraits/med/men/34.jpg"}]
    
  };

  componentDidMount =()=>{

    Api.getPatients().then(json => {
        console.log("on top row");
        let rows = [];
        json.forEach(item => rows.push({
          name: item.name,
          id: item.id,
          email: item.email,
          notes: item.notes,
          dob: item.dob,
          picture: [<img src={item.picture} className="img-fluid" class="rounded-circle" alt=""/>]
        }));
        this.setState({ rows });
        console.log(rows);
      })
      .catch(err => console.error(err));
    
  }

  render() {
    return (
    <h1>PROFILE PAGE</h1>
    );

  }
  
};

export default DatatablePage;