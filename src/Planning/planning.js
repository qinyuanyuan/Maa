import React from 'react';
import {Link} from 'react-router-dom';
var PlanningCss = require('./planning.css');
export default class PlanningPage extends React.Component{
    render(){
        return(
            <div className={PlanningCss.planning}>
                <a href="/main">行程</a>
                <br></br>
                <br></br>
                <a href="/daily">日程</a>
                
            </div>
        )
    }
}