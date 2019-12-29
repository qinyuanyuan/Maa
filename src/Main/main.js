import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker} from 'antd';
import moment from 'moment';
var MainCss = require('./main.css');

export default class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  commit = () => {
    var xhr = new XMLHttpRequest()
    var data={
      "beforetime":this.state.beforetime,
      "aftertime":this.state.aftertime,
      "text1":this.state.text1,
      "text2":this.state.text2,
      "text3":this.state.text3,
      "text4":this.state.text4,
    }
    xhr.open("post", "/in/addTtripItinerary")
    xhr.onreadystatechange = function () {
      if(xhr.readyState==4){
        if(xhr.status==200){
          var result = JSON.parse(xhr.responseText)
          if(result.state==2){
            alert("内容不能为空")
          }else if(result.state==1){
            alert("提交成功")
          }
        }
      }
    }
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(JSON.stringify(data))
  }
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
          <input type="text" size="20" name="beforetime" value={this.state.beforetime} onChange={e => this.changeValue(e)} placeholder='请输入时间,例如2000-01-01' />
        </div>
        <div className={MainCss.nian1}>
          <img src={require('./../Img/go4.png')} height="50px" width="50px" alt="" />
          <input type="text" size="20" name="aftertime" value={this.state.aftertime} onChange={e => this.changeValue(e)} placeholder='请输入时间,例如2000-01-01' />
        </div>
        <div className={MainCss.one}>
          <img src={require('./../Img/s.png')} className="" alt="" />
          <h4>one</h4>
          <textarea cols="50" rows="5" name="text1" value={this.state.text1} onChange={e => this.changeValue(e)} ></textarea>
        </div>
        <div className={MainCss.two}>
          <img src={require('./../Img/t.png')} className="" alt="" />
          <h4>two</h4>
          <textarea cols="50" rows="5" name="text2" value={this.state.text2} onChange={e => this.changeValue(e)}></textarea>
        </div>
        <div className={MainCss.footer}>
          <img src={require('./../Img/go2.png')} className={MainCss.img2} alt="" />
          <h5>one</h5>
          <div className={MainCss.three}>
            <img src={require('./../Img/u.png')} className="" alt="" />
          </div>
          <div className={MainCss.textarea}>
            <textarea cols="50" rows="5" name="text3" value={this.state.text3} onChange={e => this.changeValue(e)}></textarea>
          </div>
          <img className={MainCss.img1} src={require('./../Img/i.png')} alt="" />
          <h4>two</h4>
          <textarea cols="50" rows="5" name="text4" value={this.state.text4} onChange={e => this.changeValue(e)}></textarea>
        </div>
        <button onClick={this.commit} className={MainCss.sign}>提交</button>
      </div>
    )
  }
}