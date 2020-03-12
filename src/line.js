import React, { Component } from 'react';
import './App.css';
import { FormControl } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';


class Linear extends Component {

    render(){
      return (
        <div className= "split right rightLine ">
                
                <div>
         <Line 
            options = {{
                responsive: true
            }}
            data= {this.props.data}
        />

       </div>
                
          </div>
      );
  }
  }
  
  export default Linear;
  