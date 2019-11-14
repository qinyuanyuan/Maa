import React from 'react';
import {Button,Icon,} from 'antd'
import {Link} from 'react-router-dom'
var EnrolCss = require('./enrol.css');


export default class EnrolPage extends React.Component{
    render(){
        return(
            <div className={EnrolCss.enrol}> 
              <img src={require("./../Img/注册1.jpg")} height="600px" width="1309"/>
                <div className={EnrolCss.zc}>
                <h3>注册</h3>
                <Icon type="user"  className={EnrolCss.user}/>
                <input type="text" ref={input=>this.input} className={EnrolCss.zhanghao} placeholder="请输入账号 "/>
                <Icon type="lock" className={EnrolCss.lock}/>
                <input type="text" ref={input=>this.input} className={EnrolCss.mima} placeholder="请输入密码 "/>
                <Icon type="unlock" className={EnrolCss.unlock}/>
                <input type="text" ref={input=>this.input} className={EnrolCss.mima1} placeholder="请再次输入密码 "/>
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
