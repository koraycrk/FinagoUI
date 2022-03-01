import React, { Component } from 'react'
import axios from 'axios';

export default class UploadFiles extends Component{

state = {
    file : ''
};

componentDidMount = () => {
    const {file} = this.props;
    this.setState({ file })
};

uploadFile = ({target : {files}}) => {
    console.log(files[0]);
    let data = new FormData();
    data.append('file', files);


    axios.post("/api/employees/save-from-csv", data)
        .then(res => {console.log(res)})
};

render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group files color">
                        <label>Upload Your File </label>
                        <input type="file" onChange={this.uploadFile}/>
                    </div>
                </div>
            </div>
        </div>
    )
}}