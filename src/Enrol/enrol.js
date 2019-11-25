
    

   import React from 'react';
   import { Form,Input,Tooltip,Icon, Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';
   import {Link} from 'react-router-dom'
   var EnrolCss = require('./enrol.css');
  
  
   export default class EnrolPage extends React.Component{
      render(){
          return(
               <div className={EnrolCss.enrol}> 
                
                  <div className={EnrolCss.zc}>
                   <h3>注册</h3>
                   <Icon type="user"  className={EnrolCss.user}/>
                   <input type="text" ref={input=>this.input} className={EnrolCss.zhanghao} placeholder="请输入账号 "/>
                   <br/>

                   <Icon type="lock" className={EnrolCss.lock}/>
                   <input type="text" ref={input=>this.input} className={EnrolCss.mima} placeholder="请输入密码 "/>
                   <br/>

                   <Icon type="mail" className={EnrolCss.mail}/>
                   <input type="text" ref={input=>this.input} className={EnrolCss.youxiang} placeholder="请输入邮箱号 "/>
                   <br/>

                  
                  <input type="text" ref={input=>this.input} className={EnrolCss.nianling} placeholder="请输入您的年龄 "/>

                 <form action="" method="get" className={EnrolCss.gender}>
                   请选择您的性别：
                   <input name="sex" id="female" type="radio" value=""/>
                   <lable for="female">女</lable>
                   <input name="sex" id="male" type="radio" value=""/>
                   <lable for="male">男</lable>
                 </form>
                  
                  <Button shape="oval"  icon="" >确定
                   </Button>
                  </div>
                  <Link to="login" className={EnrolCss.return}>
                       <img src={require("./../Img/13.png")} height="50px" width="50px"/>
                   </Link>
              </div>
           )
      }
   }