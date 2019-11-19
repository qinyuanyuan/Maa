import React from 'react';
import {Link} from 'react-router-dom';
var WeixinCss = require('./weixin.css');
export default class WeixinPage extends React.Component{
    render(){
        return(
            <div className={WeixinCss.weixin}>
                <img src={require("./../Img/weixin.jpg")}height="200px" width="150px"/>
                
            </div>
        )
    }
}