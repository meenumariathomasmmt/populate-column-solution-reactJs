import React, { Component } from 'react';

class Populate extends Component {
    constructor(props){
        super(props);
        this.state={
            field1:'value1',
            field2:'value2',
            field3:'value3'
        }
    }
    methodChangefirst(event){ 
        this.setState({
            field1:event.target.value
        }, (previousState) => {
            //console.log(this.state.field1);        
        })        
    }
    methodChangesecond(event){ 
        this.setState({
            field2:event.target.value
        }, (previousState) => {
            //console.log(this.state.field2);        
        })            
    }
    methodChangethird(event){ 
        this.setState({
            field3:event.target.value
        }, (previousState) => {
            //console.log(this.state.field3);        
        })        
    }
    handleSubmit(event){
        event.preventDefault();
        document.getElementById("pop1").innerHTML = this.state.field1;
        document.getElementById("pop2").innerHTML = this.state.field2;
        document.getElementById("pop3").innerHTML = this.state.field3;
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-sm-6">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <table className="table">
                            <thead>
                            <th>{this.props.colone}</th>
                            <th>{this.props.coltwo}</th>
                        </thead>
                        <tr>
                            <td>
                                <label>{this.props.rowone}</label>
                                <input type="text" value={this.state.field1} placeholder="Enter value here" className="form-control"  onChange={this.methodChangefirst.bind(this)}/>
                            </td>
                            <td id="pop1"></td>
                        </tr>
                        <tr>
                            <td>
                                <label>{this.props.rowtwo}</label>
                                <input type="text" value={this.state.field2} placeholder="Enter value here" className="form-control" onChange={this.methodChangesecond.bind(this)}/>
                            </td>
                            <td id="pop2"></td>
                        </tr>
                        <tr>
                            <td>
                                <label>{this.props.rowthree}</label>
                                <input type="text" value={this.state.field3} placeholder="Enter value here" className="form-control" onChange={this.methodChangethird.bind(this)}/>
                            </td>
                            <td id="pop3"></td>
                        </tr>
                    </table>
                    <button type="submit" className="btn btn-success">Populate</button>
                </form>
            </div>
            <div className="col-sm-6"></div>
         </div>
    </div>
        )
    }
}


export default Populate;