import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd'
var PingLunCss = require('./pinglun.css');
export default class PingLunPage extends React.Component{
    render(){
        return(
            <div className={PingLunCss.pinglun}>
                          <div className={PingLunCss.pinglun1} >
                           <div className={PingLunCss.touxiang1}></div>
                           <div className={PingLunCss.div1}></div>
                              <textarea rows="4" cols="35"></textarea>
                           </div>
                           <div className={PingLunCss.pinglun2}>
                             <a></a>
                             <p></p>
                              {/* <div className={PingLunCss.touxaing2}></div> */}
                              {/* <div className={PingLunCss.div2}></div> */}
                                <textarea rows="4" cols="35"></textarea>
                           </div>
                           <div className={PingLunCss.pinglun3} >
                             <a></a>
                              <p></p>
                        {/* <div className={PingLunCss.touxaing3}></div>
                        <div className={PingLunCss.div3}></div> */}
                              <textarea rows="4" cols="35"></textarea>
                              </div>  
                      <Link to="/view">
                      <Icon type="close-circle"  className={PingLunCss.close} />   
                      </Link>   
            </div>
        )
    }
}