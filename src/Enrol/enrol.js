import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, message, } from 'antd';
import { Link } from 'react-router-dom'
var EnrolCss = require('./enrol.css');


export default class EnrolPage extends React.Component {
     constructor(props){
        super(props);
        this.state={}
     }
    changeValue=(e)=>{
       this.setState({
          [e.target.name]:e.target.value
       })
    }
    upload = ()=>{
       //XHR
       var xhr = new XMLHttpRequest() 
       var data={
          "username":this.state.username,
          "password":this.state.password,
          "email":this.state.email,
          "age":this.state.age,
          "gender":this.state.gender
       }
       //open连接
       xhr.open("post","/user/register")
       //配置响应函数
       xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
             if(xhr.status==200){
               console.log(xhr.responseText)
               var result = JSON.parse(xhr.responseText)
               if(result.state==2){
                  alert("用户已存在")
               }else if(result.state==1){
                  alert("注册成功")
                  // this.props.history.push("/login")
               }
             }else{
                message.info(xhr.status)
             }
          }
       }
       //发送数据
       xhr.setRequestHeader('content-type','application/json');
       xhr.send(JSON.stringify(data))
    }

   render() {
      return (
        
            <div className={EnrolCss.enrol}>

               <div className={EnrolCss.zc}>
                  <h3>注册</h3>
                  <br />

                  <Icon type="user" className={EnrolCss.user} />
                  <input type="text" ref={input => this.input} className={EnrolCss.zhanghao} placeholder="请输入账号 " name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
                  <br />

                  <Icon type="lock" className={EnrolCss.lock} />
                  <input type="text" ref={input => this.input} className={EnrolCss.mima} placeholder="请输入密码 "  name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>
                  <br />

                  <Icon type="mail" className={EnrolCss.mail} />
                  <input type="text" ref={input => this.input} className={EnrolCss.youxiang} placeholder="请输入邮箱号 " name="email" value={this.state.email} onChange={e=>this.changeValue(e)} />
                  <br />


                  <input type="text" ref={input => this.input} className={EnrolCss.nianling} placeholder="请输入您的年龄 " name="age" value={this.state.age} onChange={e=>this.changeValue(e)} />

                  <form action="" method="get" className={EnrolCss.gender}  >
                     请选择您的性别：
                 <input name="sex" id="female" type="radio" value="" name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)} />
                     <lable for="female">女</lable>
                     <input name="sex" id="male" type="radio" value=""name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)} />
                     <lable for="male">男</lable>
                  </form>

                  <Button  onClick={this.upload}>注册
                 </Button>
               </div>
               <Link to="login" className={EnrolCss.return}>
                  <img src={require("./../Img/13.png")} height="50px" width="50px" />
               </Link>
            </div>
         
      )
   }
}