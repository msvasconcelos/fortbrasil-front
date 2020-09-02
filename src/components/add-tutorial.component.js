import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddInstitution extends Component {
  constructor(props) {
    super(props);
    this.onChangeInstitution = this.onChangeInstitution.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.saveInstitution = this.saveInstitution.bind(this);
    this.newInstitution = this.newInstitution.bind(this);

    this.state = {
      institution: "",
      location: "", 
      //published: false,

      submitted: false
    };
  }

  onChangeInstitution(e) {
    this.setState({
      institution: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  saveInstitution() {
    var data = {
      institution: this.state.institution,
      location: this.state.location
    };
    
    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          institution: response.data.institution,
          location: response.data.location,
          //published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newInstitution() {
    this.setState({
      institution: "",
      location: "",
      //published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newInstitution}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="institution">Estabelecimento</label>
              <input
                type="text"
                className="form-control"
                id="institution"
                required
                value={this.state.institution}
                onChange={this.onChangeInstitution}
                name="institution"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Localização</label>
              <input
                type="text"
                className="form-control"
                id="location"
                required
                value={this.state.location}
                onChange={this.onChangeLocation}
                name="location"
              />
            </div>

            <button onClick={this.saveInstitution} className="btn btn-success">
              Adicionar
            </button>
          </div>
        )}
      </div>
    );
  }
}
