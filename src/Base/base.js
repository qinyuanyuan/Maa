import React from 'react';
import {Link} from 'react-router-dom'
var BaseCss = require('./base.css');
export default class BasePage extends React.Component{
    render(){
        return(
            <div className={BaseCss.base}>
                <div className={BaseCss.title}>
                   <h1>我的手账基地</h1>
                   <Link to="/homepage">
                       <img src={require('./../Img/222.png')} alt="" height="50px" width="50px"/> 
                   </Link>
                 </div>
                <div  className={BaseCss.one}>
                 <div>
                   <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>
                   <img src={require('./../Img/bbbb.jpg')}/>
                 </div>
                 <div >
                   <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>
                 <img src={require('./../Img/lllll.png')}/>
                 </div>
                 </div>
                 <div className={BaseCss.two}>
                      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>
                      <img src={require('./../Img/vvvv.jpg')}/>
                      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>
                      <img src={require('./../Img/pppp.png')}/>
                 </div >
                 <div  className={BaseCss.three}>
                    <img src={require('./../Img/aaaaa.png')}/>
                  </div>
             </div>
        )
    }
}