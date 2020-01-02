import  React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,} from 'react-router-dom';
import {Button,Icon,Calendar,Avatar} from 'antd';
import HeaderPage from './../Header/header';
import PlanningPage from '../Planning/planning';
import LogoPage from '../Logo/logo';
import AimPage from '../Aim/aim';
var HomePageCss = require('./homepage.css');

export default class HomePage extends React.Component{
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
          "content":this.state.content,
       }
       //open连接
       xhr.open("post","/sign/write")
       //配置响应函数
       xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
             if(xhr.status==200){
               console.log(xhr.responseText)
               var result = JSON.parse(xhr.responseText)
               if(result.state==1){
                  alert("设置签名成功！")
               }
             }
          }
       }
       //发送数据
       xhr.setRequestHeader('content-type','application/json');
       xhr.send(JSON.stringify(data))
    }
    up = ()=>{
        //XHR
        var xhr = new XMLHttpRequest() 
        var data={
           "text":this.state.text,
        }
        //open连接
        xhr.open("post","/nnames/writing")
        //配置响应函数
        xhr.onreadystatechange=function(){
           if(xhr.readyState==4){
              if(xhr.status==200){
                console.log(xhr.responseText)
                var result = JSON.parse(xhr.responseText)
                if(result.state==1){
                   alert("设置昵称成功！")
                }
              }
           }
        }
        //发送数据
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data))
     }
    
    render(){

        return(
          
            <div className={HomePageCss.homepage}>
                <HeaderPage/>
                <div className={HomePageCss.lefttop}>
                    <div className={HomePageCss.touxiang}>
                        <Link to="/logo">
                            <Avatar shape="square" size={64} icon="user" />
                            {/* <a href="/logo" >+</a> */}
                        </Link>
                        <div onClick={this.up}>
                        <input type="text" ref={input=>this.input=input} maxlength="10" placeholder='昵称'name="text" value={this.state.text} onChange={e=>this.changeValue(e)}/> 
                        </div>
                    </div>
                    <div onClick={this.upload}>
                    <input type="text" ref={input=>this.input=input}  placeholder='留下你的签名......'name="content" value={this.state.content} onChange={e=>this.changeValue(e)} />   
                    </div>
                </div>
                <div className={HomePageCss.leftdown}>
                    <text>
                        <Link to="/aim" className={HomePageCss.aim}>
                            小目标&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Icon type="right" />
                        </Link>
                        <br></br>
                        <Link to="/decorate" className={HomePageCss.decorate}>
                            个性装扮&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Icon type="right" />
                        </Link>
                        {/* <Icon type=""/> */}
                        <br></br>
                        <Link to="/base"className={HomePageCss.base}>
                            手账基地&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Icon type="right" />
                        </Link>
                        <br></br>
                        <Link to="/vip"className={HomePageCss.vip}>
                            VIP充值&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Icon type="right" />
                        </Link>
                        <br></br>
                        <Link to="/login"className={HomePageCss.exit}>
                            退出登录&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Icon type="right" />
                        </Link>
                        <br></br>
                    </text>
                </div>
                {/* <div className={HomePageCss.righttop}>
                    <img src={require("./../Img/home1.jpg")} height="700px" width="1000px"/>
                </div> */}
                <div className={HomePageCss.tz}>
                    <Link to="/thing" className={HomePageCss.th}>记事</Link>
                    <Link to="/view"className={HomePageCss.vi}>查看</Link>
                    <BrowserRouter basename="planning">
                        <Link to="/planning"className={HomePageCss.pl}>规划</Link>
                        <Route path="/planning" component={PlanningPage}></Route>
                    </BrowserRouter>
                </div>  
            </div>
        )
    }
 }
