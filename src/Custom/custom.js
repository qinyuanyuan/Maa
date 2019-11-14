import React from 'react';
import {Link} from 'react-router-dom'
var CustomCss = require('./custom.css');
export default class CustomPage extends React.Component{
    render(){
        return(
            <div className={CustomCss.custom}>
                  <div className={CustomCss.thingleft}>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <h4>VIP</h4>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/> 
                   </div> 
                    <div className={CustomCss.thingtop}>
                    <Link to="/homePage">返回主页面</Link>
                     </div>
                <div className={CustomCss.thingauto}>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <h3>分享</h3>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <h3>公开</h3>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <h3>不公开</h3>
                </div>
                <div className={CustomCss.thingright}>
                    <h3>小贴纸</h3>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/> 
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                    <img src={require('./../Img/tim.jpg')} className="" alt=""/>
                </div>

            </div>
        )
    }
}