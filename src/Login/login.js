
import React from 'react';
import i001 from './../Img/bg001.png';
import {Link} from 'react-router-dom';
import {Button,input,message} from 'antd';

var LoginCss = require('./login.css');

export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
        // this.saveRef = ref => {this.refDom = ref};
        // this.handleClick = this.handleClick.bind(this);
        this.state={
            // username:'',
            // password:''
        }
    }
    handleClick(e) {
        const {clientWidth, clientHeight} = this.refDom;
        console.log('====================================');
        console.log(clientWidth, clientHeight, this.refDom);
        console.log('====================================');
      }
    changeValue = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login = ()=>{
           console.log(this.state.username)
           console.log(this.state.password)

        var xhr = new XMLHttpRequest()
        var data ={
            "usename":this.state.username,
            "password":this.state.password
        }
        xhr.open("get","/user/login")
        xhr.onreadystatechange=function(params){
            if(xhr.readyState==4){
               if(xhr.status==200){
                   message.info(xhr.respondeText)
                   console.log(xhr.respondeText)
                   var result = JSON.parse(xhr.respondeText)
                   if(result.state==3){
                       message.info("用户名或密码不能为空")
                   }else if(result.state==2){
                    message.info("用户名或密码错误")
                   }else if(result.state==1){
                       message.info("成功")
                       this.props.history.push("/homepage")
                   }
               }else{
                   message.info(xhr.status)
               }
            }
        }

        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data))

        //     if(this.state.username=="maa"&&this.state.password=="123456"){
        //        alert('登陆成功'); 
        //        window.localStorage.setItem("username","123456");
        //        window.localStorage.setItem("token","111111");
        //        window.location.href="homepage"
        //    }else{
        //        alert('登录失败');
        //    }
        //    console.log(window.localStorage.getItem("username"))
    }
    render(){
        return(
            <div ref={this.saveRef} onClick={this.handleClick} > Loading...</div>
        )
    }
    render(){
        return(
            <div className={LoginCss.stars}>
                <img src={i001} className={LoginCss.i001}></img>
                <div className={LoginCss.loginbox}>
                    <h1>Login</h1>
                    <div className={LoginCss.textbox}>
                        <input type="text"  name="username" id="username" placeholder="Username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
                    </div>
                    <div className={LoginCss.textbox}>
                        <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
                    </div>
                    {/* <Button onClick={()=>{window.location.href="homepage"} }className="r-button" >
                        <button onClick={this.login}>Sign in</button> 
                        </Button> */}
                        <button onClick={this.login}  className={LoginCss.sign}>Sign in</button> 
                        <Link to="/enrol">
                            <div className={LoginCss.register}>Sign up</div>
                        </Link>
                </div>
            </div>
        )
    }
}