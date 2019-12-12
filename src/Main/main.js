import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';
var MainCss = require('./main.css');

export default class MainPage extends React.Component {
  render() {
    return (
      <div className={MainCss.main}>
        {/* <div className={MainCss.rq}>
          <RangePicker dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '20%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
          />
        </div> */}
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
          <input type="text" size="4" />
          <h4>年</h4>
        </div>
        <div className={MainCss.yue}>
          <input type="text" size="4" />
          <h4>月</h4>
        </div>
        <div className={MainCss.ri}>
          <input type="text" size="4" />
          <h4>日</h4>
        </div>
        <div className={MainCss.shi}>
          <input type="text" size="4" />
          <h4>时</h4>
        </div>
        <div className={MainCss.nian1}>
          <img src={require('./../Img/go4.png')} height="50px" width="50px" alt="" />
          <input type="text" size="4" />
          <h4>年</h4>
        </div>
        <div className={MainCss.yue1}>
          <input type="text" size="4" />
          <h4>月</h4>
        </div>
        <div className={MainCss.ri1}>
          <input type="text" size="4" />
          <h4>日</h4>
        </div>
        <div className={MainCss.shi1}>
          <input type="text" size="4" />
          <h4>时</h4>
        </div>
        <div className={MainCss.one}>
          <img src={require('./../Img/s.png')} className="" alt="" />
          <h4>one</h4>
          <input type="text" />
          <textarea cols="53" rows="5"></textarea>
        </div>
        <div className={MainCss.two}>
          <img src={require('./../Img/t.png')} className="" alt="" />
          <h4>two</h4>
          <input type="text" />
          <textarea cols="53" rows="5"></textarea>
        </div>
        <div className={MainCss.footer}>
          <img src={require('./../Img/go2.png')} className={MainCss.img2} alt="" />
          <h5>one</h5>
          <div className={MainCss.three}>
            <img src={require('./../Img/u.png')} className="" alt="" />
          </div>
          <div className={MainCss.text}>
            <input type="text" />
          </div>
          <div className={MainCss.textarea}>
            <textarea cols="53" rows="5"></textarea>
          </div>
          <img className={MainCss.img1} src={require('./../Img/i.png')} alt="" />
          <h4>two</h4>
          <input type="text" />
          <textarea cols="53" rows="5"></textarea>
        </div>
      </div>
    )
  }
}