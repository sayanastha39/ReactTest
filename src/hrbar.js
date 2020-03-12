
import React, { Component } from 'react';
import './App.css';
import {HorizontalBar} from 'react-chartjs-2';
import { height } from '@material-ui/system';

class Horizontal extends Component {
    render(){
      return (
        <div className= "split right rightHorizontalBar">
                <div>
                        <div>
                            <HorizontalBar data={this.props.data}/>
                        </div>
                </div>   
          </div>
      );
  }
  }
  export default Horizontal;
  