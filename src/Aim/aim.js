import React from 'react';
import {Link} from 'react-router-dom'
import logo from './../Logo/logo';
var AimCss = require('./aim.css');


export default class AimPage extends React.Component{
    render(){
        return(
            <div className={AimCss.aim}> 
                <div className={AimCss.header}>
                   <Link to="/homepage" className={AimCss.png}>
                        <img src={require("./../Img/rrrrr.png")}/>
                   </Link>
                <img src={require("./../Img/aim1.png")} className={AimCss.img}/>
                <h1>我的小目标</h1>
                 </div>
              <div className={AimCss.xin} >
                  <img src={require("./../Img/6d3e330d2de899ec64dc0729d7b458aa1.png" )}/>
                   <h2>行程</h2>
                   <div className={AimCss.nian} >
                        <input type="text" size="4"/>
                        <h4>年</h4>
                    </div>
                    <div className={AimCss.yue} >
                       <input type="text" size="4"/>
                        <h4>月</h4>
                    </div>
                    <div className={AimCss.ri} >
                      <input type="text" size="4"/>
                       <h4>日</h4>
                    </div>
                    <div className={AimCss.shi} >
                        <input type="text" size="4"/>
                        <h4>时</h4>
                    </div>
                    <div className={AimCss.div3} ></div>
              </div>
              <div className={AimCss.richeng} >
                   <img src={require("./../Img/ric1.png")}/>
                   <h2>日程</h2>
                   <div className={AimCss.div1}></div>
              </div> 
              <div className={AimCss.footer} >
                 <img src={require("./../Img/foot1.png")}/>
              </div>    
        </div>
        )
    }
}