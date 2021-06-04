import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Edit from './editior/Editor'

import './App.css';

class App extends Component {
  state = {
    para: ''
  }


  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios.post('/create-pdf',this.state)
    .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'newPdf.pdf');
    })
  }


render() {
  return (
    <div className="container">
    
    {/* <Edit
      onChange={this.handleChange}
      name="para" 
    /> */}

<textarea 
 className="tinymce" 
 name="para"
 onChange={this.handleChange}> 
</textarea>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}
}

export default App;


{/* <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <textarea type="text"
          placeholder="Paragraph1"
          name="para1"
          onChange={this.handleChange} 
          rows="10"
          cols="20"          
          />
        <textarea type="text" 
          placeholder="Paragraph2" 
          name="para2" 
          onChange={this.handleChange} 
          rows="10"
          cols="20"
          /> */}

          // state = {
          //   name: '',
          //   para1: '',
          //   para2: '',
          // }