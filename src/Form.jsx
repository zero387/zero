import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {

                code:'',
                email:'',
                pass:'', 
                
        }
    }
    codeInput=(value)=>{
        this.setState({
            code: value.target.value,
        })
    }

    emailInput=(value)=>{
        this.setState({
            email: value.target.value,
        })
    }

    passInput=(value)=>{
        this.setState({
            pass: value.target.value,
        })
    }
    checkBoxChange = (value) => {
            value.preventDefault();
       const {code}=this.state;
       if (!code || code.length < 8 || code.length > 16 || !code.startsWith('NV')){
         let error='';
            if (!code){
                console.log(this.state.code);
                error='Vui lòng nhập giá trị cho ô Code.';
            }else if (code.length<8 || code.length>16) {
                error='Độ dài của Code phải từ 8 đến 16 ký tự.';
            }else if (!code.startsWith('NV')) {
                error='Code phải bắt đầu từ "NV".';
            }
            alert(error);
       }
      };
  render() {
    console.log(this.state.code);
    console.log(this.state.email);
    console.log(this.state.pass);

    return (
      <>
      <form action = "">
        <label htmlFor="">Code</label><br></br>
        <input type="text" 
        onChange={(value)=>{this.codeInput(value)}}
        /><br></br>
        <label htmlFor="">Email</label><br></br>
        <input type="email" 
        onChange={(value)=>this.emailInput(value)}
        /><br></br>
        <label htmlFor="">password</label><br></br>
        <input type="password" 
        onChange={(value)=>this.passInput(value)}
        /><br></br>
        <input type="checkbox" 
        
        />
        <label htmlFor="" 
        >check me out</label><br></br>
        <button
        onChange={(value)=>this.checkBoxChange(value)}
        >Submit</button>
      </form>
      </>
    )
  }
}
/* của em khi ấn vào check me out thì khi mà ô input code nó trống
nhưng mà nó lại không hiện thông báo alert về việc vui lòng nhập giá trị cho ô code ạ */