import React, { Component } from 'react';
import Populate from './Populate'

class Screenone extends Component {
  render() {
    return (
      <div>
        <Populate colone="A" coltwo="B" rowone="name" rowtwo="id" rowthree="DOB"/>
      </div>
  
    );
  }
}

export default Screenone;
