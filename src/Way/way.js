import React from 'react';
import logo from './../Logo/logo';
import {Link} from 'react-router-dom';
var WayCss = require('./way.css');

export default class WayPage extends React.Component{
    render(){
        return(
            <div className={WayCss.way}>
                <Link to="/vip">关闭</Link>
                <h3>请选择支付方式</h3>
                <h4>微信</h4>
                <img src={logo }className={WayCss.logo1} alt=""/>
                <h4>支付宝</h4>
                <img src={logo}className={WayCss.logo2} alt=""/>
            </div>
        )
    }
}