import  React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,} from 'react-router-dom';
import LogoPage from '../Logo/logo';

export default class HomePage extends React.Component{
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
                   <input type="text" ref={input=>this.input=input} maxlength="10" placeholder='昵称'/> 
                    </div>
                    <div className={HomePageCss.qiandao}>
                        <a>打卡</a>
                    <Button shape="oval" type="radius" icon=""></Button>
                    </div>
                    <input type="text" ref={input=>this.input=input}  placeholder='留下你的签名......'/>    
                </div>
                <div className={HomePageCss.leftdown}>
                    <text>
                <Link to="/aim" className={HomePageCss.aim}>我的小目标
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Icon type="right" /></Link>
                <br></br>
                <Link to="/decorate" className={HomePageCss.decorate}>个性装扮
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Icon type="right" /></Link>
                <Icon type=""/>
                <br></br>
                <Link to="/base"className={HomePageCss.base}>我的手账基地
                &nbsp; &nbsp; &nbsp; &nbsp;<Icon type="right" /></Link>
                <br></br>
                <Link to="/vip"className={HomePageCss.vip}>VIP充值
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Icon type="right" /></Link>
                <br></br>
                </text>
                </div>
                <div className={HomePageCss.righttop}>
                    <img src={require("./../Img/home1.jpg")} height="700px" width="1000px"/>
                </div>
                  <div className={HomePageCss.tz}>
                        <Button style={{backgroundColor:'#F0F2F5'}} 
                             onClick={()=>{window.location.href="login"}}
                             className={HomePageCss.bo}                         
                             >退出登录</Button>
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
