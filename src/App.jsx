import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: [
        495658456,
        904390432,
        489230432,
        489238952,
        489032894,
        432523523,
        545325253,
        532643646,
        623463246,
        634234235,
      ],
      inputValue:'',
      errorId:''
    };
  }
inputChange=(event)=>{
  
this.setState({
  inputValue:event.target.value,
  errorId:''
});
}
checkId = (event1) => {
  event.preventDefault(); // Ngăn chặn sự kiện mặc định của form

  if (this.state.id.includes(parseInt(this.state.inputValue, 10))) {
    this.setState({
      errorId: 'Id đã tồn tại'
    });
    alert='id da ton tai'
  } else {
    this.setState((prevState) => ({
      id: [...prevState.id, parseInt(this.state.inputValue, 10)],
      inputValue: '', // Reset trường nhập sau khi thêm thành công
      errorId: '' // Reset lỗi
    }));
    alert='id da duo'
  }
}

  render() {
    console.log(this.state.id, this.state.inputValue);
    return (
      <>
        <form action="">
          <label htmlFor="">Id của bạn</label><br></br>
          <input type="number"
          value={this.state.inputValue}
          onChange={(event)=>this.inputChange(event)}
          /><br></br>
          <input type="submit" value="Submit" 
            onClick={(event1)=>this.checkId(event1)}
          />
        </form>
      </>
    );
  }
}
