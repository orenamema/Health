import React from 'react';
import Api from "../../utils/Api.js";
import Card from 'react-bootstrap/Card';
import {Form, Button} from 'react-bootstrap';


class DatatablePage extends React.Component {

  state = {
    data: [{"id": 1, "name": "Frank Sutton", "email": "frank.sutton@example.com", "dob": '1979-01-28', "notes": "No Problem", "picture": "https://randomuser.me/api/portraits/med/men/74.jpg"}
          ,{"id": 2, "name": "Philip Prescott", "email": "philip.prescott@example.com", "dob": '1983-01-02', "notes": "No Problem", "picture": "https://randomuser.me/api/portraits/med/men/34.jpg"}]
    
  };

  componentDidMount =()=>{

    Api.getPatient(localStorage.getItem('searchID')).then(json => {
        let data = [];
        json.forEach(item => data.push(item));
        this.setState({ data: data });
      })
      .catch(err => console.error(err));
    
  }

  handleChange (event) {
    var _ = this.state;
    _.data[0].notes = event.target.value;
    this.setState(_);
  }


  saveNotes(){
    Api.saveNotes(this.state.data[0].id, this.state.data[0].notes).then(function(){
      if (window.confirm('Note Updated! Go home?')) {
        window.location.href = "/";
      } else {
          // Do nothing!
      }
    });
  }

  deletePatient(){
    Api.deletePatient(this.state.data[0].id, this.state.data[0].notes);
  }

  render() {
    return (
      <div>
      {this.state.data.map((data_,index)=> (
        <Card className="text-center">
          <Card.Header>Patient</Card.Header>
          <Card.Body>
            <img src={data_.picture} className="img-fluid" class="rounded-circle" alt=""/>
            <Card.Title>{data_.name}</Card.Title>
            <Card.Text>
              Contact: {data_.email}<br/>
              DOB: {data_.dob}
            </Card.Text>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Visit Notes</Form.Label>
                <Form.Control as="textarea" rows="6" cols="6" placeholder="Enter Doctor Remarks" value={data_.notes} onChange={event => this.handleChange(event)} />
                <Form.Text className="text-muted">
                  Add notes concerning patient (last update {data_.updatedAt})
                </Form.Text>
              </Form.Group>
            </Form>


            <Button variant="primary" onClick={() => this.saveNotes()}>
              Submit &#8594;
            </Button>
            <br/><br/>
            <Button variant="danger" onClick={() => this.deletePatient()}>
              Delete &#215;
            </Button>
            <br/><br/>
            <Button variant="secondary" href="/"> &#8592; Back to all patients</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Oren Med Inc &#169;</Card.Footer>
        </Card>
      ))}
      </div>
    );

  }
  
};

export default DatatablePage;