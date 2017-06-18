import React from 'react'
// import styled from 'styled-components';
import Select from 'react-select'
// import fetch from 'isomorphic-fetch';
import axios from 'axios'
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'
const API_KEY = 'AIzaSyAxJ7kpGRVQiBwuGejRsCiRetPUfD01J3Y'
class FormAutocomplete extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
      this.state = {
        startLocation: '',
        returnLocation: '',
        UI:{
          checkbox : 'activeReturn'
        }
      }
      this.onChange = this.onChange.bind(this);
      this.onChangeReturn = this.onChangeReturn.bind(this);
      this.showReturn = this.showReturn.bind(this);
  }
  onChange (value) {
    if(value !== null) {
      this.setState({
        startLocation: value
      });
    this.props.saveLocation([value.Code, 'pickUPLocation']);
  }else {
    this.setState({
      startLocation: ""
    });
    this.props.saveLocation(["", 'pickUPLocation']);
  }

	}
  onChangeReturn (valueReturn){
    this.setState({
      returnLocation: valueReturn,
    })
    this.props.saveLocation([valueReturn.Code, 'returnLocation']);

  }

	getCity (city) {

		if (!city) {
			return Promise.resolve({ options: [] });
		}
    var config = {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      }
    };

    let sentData = {
      method: 'GET',
      mode: 'cors',
      header: config,
      body: null
    };

    //console.log(fromAuto);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&region=GR&components=country:gr&language=gr&key=${API_KEY}`;
    return axios.get(url, sentData)
    .then(function (response) {
      console.log(response);
      var res = [];
      var result = response.data.predictions.map(function(obj) {
        var city = "";
        if (obj.description.indexOf(' ') === -1){
          city = obj.description;
        }
        else{
          // city =  obj.description.substr(0, obj.description.indexOf(','));
          if(obj.description.length > 26){
            city = obj.description.substr(0, 26) + "...";
          }else{
            city = obj.description.substr(0, 26);
          }
        }

        res.push({
          Code: obj.place_id,
          City: city
        });
      });
			return { options: res };
		});
	}

  showReturn(e , data){
    if( data.checked === true){
      this.setState({
        UI: {checkbox:''}
      })
    }else{
      this.setState({
        UI: {checkbox:'activeReturn'}
      })
    }
  }
  render() {
    const AsyncComponent = Select.Async;
    return (
          <Grid className='gridAutocomplete'>
            <Grid.Row centered>
              <div className="selectFormSearch">
                <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
                <AsyncComponent
        					value={this.state.startLocation}
                  // value=''
        					onChange={this.onChange}
        					valueKey="id" labelKey="City"
        					loadOptions={this.getCity}
                  className=""
                  clearable = {true}
                  placeholder = 'Where to pick up the car?'
                  />

              </div>
              <span id='spanPickUpLocation' className='out'>Select location</span>
            </Grid.Row>
            <Grid.Row centered id='return'>
              <div className={`selectFormSearch ${this.state.UI.checkbox}`} >
                <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
                <AsyncComponent
        					value={this.state.returnLocation}
        					onChange={this.onChangeReturn}
        					valueKey="id" labelKey="City"
        					loadOptions={this.getCity}
                  className=""
                  clearable = {true}
                  placeholder = 'Where will you deliver the car?'
                  />
              </div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Form.Field id='checkLocation'
                  control={Checkbox}
                  onClick={this.showReturn}
                  defaultChecked
                  label={<label className="spanWhite checkboxForm">Deliver to same location</label>}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
    );
  }
}

FormAutocomplete.propTypes = {

};

export default FormAutocomplete;
