import React, { Component } from 'react';
import './App.css';
import { FormControl, Checkbox } from '@material-ui/core';
import Right from './right';
import Horizontal from './hrbar';
import Bars from './bar';
import Linear from './line';
import SelectInput from '@material-ui/core/Select/SelectInput';

class Left extends Component {
    
    constructor(props){
        super(props);
        this.state= {
               data:{
                    labels: ["Jan", "Feb", "Mar", "Apr" , "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    datasets:[
                        {
                            label: "Videos Made",
                            backgroundColor: "rgba(255, 0, 255, 0.75)",
                            data: [14,20,10,60,35]
                        },
                        {
                            label:" Subscriptions",
                            backgroundColor: "rgba(0, 255, 0, 0.75)",
                            data: [98,80,70,48,20]

                        }
                    ]},
                    subsscriptionValue:0,
                    videosValue : 0,
                    showLine: true,
                    showBar: false,
                    showHorizontalBar: false
            }
            }

    handleChangeVideos(event) {
        this.setState({videosValue: event.target.value}, ()=> {console.log(this.state.videosValue)});
    }

    handleChangeSubscription(event){
        this.setState({subsscriptionValue: event.target.value})
    }
            
    handleAddVideos(event) {
        const number = parseInt(this.state.videosValue);
        var newArray = this.state.data.datasets[0].data.concat(number);
        var newData = this.state.data.datasets
        newData[0].data = newArray;
        console.log(newData);
        this.setState({...this.state.data.datasets, newData})
    }   

    handleAddSubscriptions(event) {
        const number = parseInt(this.state.subsscriptionValue);
        var newArray = this.state.data.datasets[1].data.concat(number);
        var newData = this.state.data.datasets
        newData[1].data = newArray;
        console.log(newData);
        this.setState({...this.state.data.datasets, newData})
    }   

    renderTableData() {
        return this.state.data.datasets.map((element) => {
            return(this.testdata(element))
        })
    }

    testdata(element){
        return (
           <table>
              <thead>
                 <tr>
                    {element.data.map(col =>
                       <th key={col}>{col}</th>
                    )}
                 </tr>
              </thead>
           </table>
       );
     }

    
     renderTableLabels() {
        return this.state.data.datasets.map((element) => {
            return(this.testlabel(element))
        })
    }
     testlabel(element){
        return (
           <table>
              <thead>
                 <tr>
                   <th> {element.label}</th> 
                 </tr>
              </thead>
           </table>
       );
     }

    render(){

      return (
        <React.Fragment>
            <div className="split left">
                <h3> Select your template type </h3>
                <div>
                    <select onChange={(e) => {
                        if(e.target.value == "line"){
                            this.setState({showLine: true})
                            }

                        else if(e.target.value == "bar"){
                            this.setState({showBar: true})
                                     
                        }
                        else{
                            this.setState({showHorizontalBar: true})
                            
                        }
                    }}>
                    <option value="line">Line Graph</option>
                    <option value="bar">Bar Graph</option>
                    <option value="pie">Horizontal Bar</option>
                    </select>
                </div>
                <div>
                {this.state.showLine && <Linear 
                    data={this.state.data} />}

                {this.state.showBar && <Bars 
                    data={this.state.data} />}

                {this.state.showHorizontalBar && <Horizontal 
                    data={this.state.data} />}
                </div>
                
                
                <div>
                <h3> Videos and Subscriptions per Month </h3>
                    <table>
                        <tr>
                            <tr> {this.renderTableLabels()}
                                <td> {this.renderTableData()}</td>
                            </tr>
                        </tr>
                    </table>
                </div>

                <div>
                <br/>
                        <label>
                            Videos Made :  
                            <input type="text" value={this.state.value} onChange={(event) => this.handleChangeVideos(event)} />
                        </label>
                        <button onClick={() => this.handleAddVideos()}>Add</button>
                </div>

                <div>
                        <label>
                            Subscriptions : 
                            <input type="text" value={this.state.value} onChange={(event) => this.handleChangeSubscription(event)} />
                        </label>
                        <button onClick={() => this.handleAddSubscriptions()}>Add</button>
                </div>
            </div>
        </React.Fragment>
    );
}
}
export default Left;
  