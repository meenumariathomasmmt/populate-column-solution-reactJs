import React, { Component } from 'react';
import Populate from './Populate'

class Screentwo extends Component {
  render() {
    return (
      <div>
        <Populate colone="C" coltwo="D" rowone="company id" rowtwo="company name" rowthree="comment"/>
      </div>
  
    );
  }
}

export default Screentwo;