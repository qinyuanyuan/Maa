import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';
var MainCss = require('./main.css');

export default class MainPage extends React.Component {
  render() {
    return (
      <div className={MainCss.main}>
        <div className={MainCss.header}>
          <img src={require('./../Img/go1.png')} className="" alt="" />
          <h2>旅途行程</h2>
        </div>
        <div className={MainCss.return} >
          <Link to="/homepage" >
            <img src={require('./../Img/go3.png')} height="60px" width="60px" className="" alt="" />
          </Link>
        </div>
        <div className={MainCss.nian}>
          <input type="text" size="20" placeholder='请输入时间,例如2000-01-01'/>
        </div>
        <div className={MainCss.nian1}>
          <img src={require('./../Img/go4.png')} height="50px" width="50px" alt="" />
          <input type="text" size="20" placeholder='请输入时间,例如2000-01-01' />
        </div>
        <div className={MainCss.one}>
          <img src={require('./../Img/s.png')} className="" alt="" />
          <h4>one</h4>
          <textarea cols="50" rows="5"></textarea>
        </div>
        <div className={MainCss.two}>
          <img src={require('./../Img/t.png')} className="" alt="" />
          <h4>two</h4>
          <textarea cols="50" rows="5"></textarea>
        </div>
        <div className={MainCss.footer}>
          <img src={require('./../Img/go2.png')} className={MainCss.img2} alt="" />
          <h5>one</h5>
          <div className={MainCss.three}>
            <img src={require('./../Img/u.png')} className="" alt="" />
          </div>
          <div className={MainCss.textarea}>
            <textarea cols="50" rows="5"></textarea>
          </div>
          <img className={MainCss.img1} src={require('./../Img/i.png')} alt="" />
          <h4>two</h4>
          <textarea cols="50" rows="5"></textarea>
        </div>
        <button onClick={this.login}  className={MainCss.sign}>提交</button> 
      </div>
    )
  }
}