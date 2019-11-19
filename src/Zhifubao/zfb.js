import React from 'react';
import {Link} from 'react-router-dom';
var ZfbCss = require('./zfb.css');
export default class ZfbPage extends React.Component{
    render(){
        return(
            <div className={ZfbCss.zfb}>
              <img src={require("./../Img/zfb.jpg")} height="200px" width="150px"/>
            </div>
        )
    }
}