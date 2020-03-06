import React from 'react';
import Api from "../../utils/Api.js";
import Card from 'react-bootstrap/Card';
import { Form, Button} from 'react-bootstrap';


class DatatablePage extends React.Component {

  state = {
    data: [{ "name": "Fist Last", "email": "first.last@example.com", "dob": 'YYYY-MM-DD', "notes": "Doctor Remark", "picture": "https://randomuser.me/api/portraits/men/74.jpg"}]
    
  };

  handleChange_notes (event) {
    var _ = this.state;
    _.data[0].notes = event.target.value;
    this.setState(_);
  }
  handleChange_name (event) {
    var _ = this.state;
    _.data[0].name = event.target.value;
    this.setState(_);
  }  
  handleChange_dob (event) {
    var _ = this.state;
    _.data[0].dob = event.target.value;
    this.setState(_);
  }    
  handleChange_picture (event) {
    var _ = this.state;
    _.data[0].picture = event.target.value;
    this.setState(_);
  }   
  handleChange_email (event) {
    var _ = this.state;
    _.data[0].email = event.target.value;
    this.setState(_);
  }   

  createProfile(){
    Api.createProfile(this.state.data[0]).then(function(){
      if (window.confirm('Profile Created! Go home?')) {
        window.location.href = "/";
      } else {
          // Do nothing!
      }
    });
  }


  render() {
    return (
      <div>
      {this.state.data.map((data_,index)=> (
        <Card className="text-center">
          <Card.Header>Add Patient Data</Card.Header>
          <Card.Body>
            <Card.Title>Input Data</Card.Title>
            <br/>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control as="textarea" placeholder="First Last" onChange={event => this.handleChange_name(event)} />
              </Form.Group>
              <Form.Group controlId="formBasicDOB">
                <Form.Label>Patient DOB</Form.Label>
                <Form.Control as="textarea" placeholder="YYYY-MM-DD" placonChange={event => this.handleChange_dob(event)} />
              </Form.Group>   
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Patient Email</Form.Label>
                <Form.Control type="email" placeholder="first.last@example.com" onChange={event => this.handleChange_email(event)} />
              </Form.Group>    
              <Form.Group controlId="formBasicPicture">
                <Form.Label>Patient Picture</Form.Label>
                <Form.Control as="textarea" placeholder="https://randomuser.me/api/portraits/men/74.jpg" onChange={event => this.handleChange_picture(event)} />
              </Form.Group>                                        
              <Form.Group controlId="formBasicNotes">
                <Form.Label>Visit Notes</Form.Label>
                <Form.Control as="textarea" rows="6" cols="6" placeholder="Enter Doctor Remarks" value={data_.notes} onChange={event => this.handleChange_notes(event)} />
                <Form.Text className="text-muted">
                  Add notes concerning patient (last update {data_.updatedAt})
                </Form.Text>
              </Form.Group>
            </Form>


            <Button variant="primary" onClick={() => this.createProfile()}>
              Submit &#8594;
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