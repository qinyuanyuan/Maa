import React from 'react';
import { Link } from 'react-router-dom'
import { Timeline } from 'antd';

var BaseCss = require('./base.css');
export default class BasePage extends React.Component {
  render() {
    return (
      <div className={BaseCss.base}>
        <div className={BaseCss.title}>
          <Link to="/homepage">
            <img src={require("./../Img/13.png")} height="50px" width="50px" />
          </Link>
          <h1>手账基地</h1>
        </div>
        <div className={BaseCss.one}>
          <div>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>
            <border></border>
          </div>
          <div >
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>

          </div>
        </div>
        <div className={BaseCss.two}>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>

          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</h3>

        </div >
      </div>
    )
  }
}