
import React from 'react';
import i001 from './../Img/bg001.png';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

var LoginCss = require('./login.css');
export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login = e=>{
           console.log(this.state.username)
           console.log(this.state.password)
           if(this.state.username=="黄子韬"&&this.state.password=="123456"){
               alert('登陆成功');
               window.localStorage.setItem("username","123456");
               window.localStorage.setItem("token","111111");
               window.location.href="homepage"
           }else{
               alert('登录失败');
           }
           console.log(window.localStorage.getItem("username"))
    }
    render(){
        return(
            <div className={LoginCss.stars}>
                <img src={i001} className={LoginCss.i001}></img>
                <div className={LoginCss.loginbox}>
                    <h1>Login</h1>
                    <div className={LoginCss.textbox}>
                        <input type="text"  name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.changeValue}/>
                    </div>
                    <div className={LoginCss.textbox}>
                        <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.changeValue}/>
                    </div>
                    {/* <Button onClick={()=>{window.location.href="homepage"} }className="r-button" >
                        <button onClick={this.login}>Sign in</button> 
                        </Button> */}
                        <button onClick={this.login}  className={LoginCss.sign}>Sign in</button> 
                        {/* <Link to="/homepage"  className={LoginCss.sign}>Sign in</Link> */}
                        {/* "<button  className={LoginCss.btn}>Sign in</button>" */}
                        <Link to="/enrol" className={LoginCss.enrol}>注册</Link>

                </div>
            </div>
        )
    }
}