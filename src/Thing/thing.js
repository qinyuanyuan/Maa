import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Drawer, Button, Input } from 'antd';
import TieZhipage from './tiezhi';

var ThingCss = require('./thing.css');
const { TextArea } = Input;
export default class ThingPage extends React.Component {
  //fetch请求后台数据
  constructor(props) {
    super(props);
    this.state = {}
  }
  changeValue = (e) => {
    this.setstate = ({
      [e.target.name]: e.target.value
    })
  }
  //增
  upload = () => {

    var data = {
      "thing": this.state.thing,
    }


    fetch("/article/write", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())

      .then(result => {
        if (result.state == 1) {
          console.log("添加成功")
          alert("        添加成功")
        } else if (result == 2) {
          console.log("内容不能空")
          alert("内容不能为空")
        }
      })
  }



  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={ThingCss.thing}>
        <div className={ThingCss.thingleft}>
          <img src={require("./../Img/bei3.jpeg")} />
          <img src={require("./../Img/bei2.jpeg")} />
          <img src={require("./../Img/bei4.jpeg")} />
          <h4>以下为VIP专属哦！</h4>
          <img src={require("./../Img/bei5.jpeg")} />
          <img src={require("./../Img/bei1.jpeg")} />
        </div>
        <div className={ThingCss.tiezhi}>
          <Button type="primary" onClick={this.showDrawer} className={ThingCss.tz}>
            打开我的小贴纸
                   </Button>
          <Drawer className={ThingCss.ct}
            title="我的小贴纸"
            placement="top"
            closable={true}
            onClose={this.onClose}
            destroyOnClose={true}
            visible={this.state.visible}
            width={200}
            height={500}
            keyboard={true}
          >

            <div className={ThingCss.img1}>
              <img src={require("./../Img/o.png")} />
              <img src={require("./../Img/a.png")} />
              <img src={require("./../Img/d.png")} />
              <img src={require("./../Img/i.png")} />
              <img src={require("./../Img/p.png")} />
            </div>
            <div className={ThingCss.img2}>
              <img src={require("./../Img/r.png")} />
              <img src={require("./../Img/w.png")} />
              <img src={require("./../Img/q.png")} />
              <img src={require("./../Img/k.png")} />
              <img src={require("./../Img/j.png")} />
            </div>
          </Drawer>
        </div>
        <div className={ThingCss.thingright}>
          <div className={ThingCss.thingtop}>
            <h2 className={ThingCss.header}>notebook</h2>
            <Link to="/homePage">
              <img src={require("./../Img/13.png")} />
            </Link>
          </div>
          <div className={ThingCss.thingauto}>

            <TextArea className={ThingCss.text1} rows={17} >
              <input type="text" name="thing" value={this.state.arrange} onChange={e => this.changeValue(e)}></input>
              </TextArea>
            {/* <Button  type="radius" className={ThingCss.Button}>ok</Button> */}
            <div className={ThingCss.thingauto1}>
              <a href="/" type=""> <img src={require("./../Img/fenxiang.jpg")} /></a>
              <button onClick={this.upload}>分享</button>
            </div>
            <div className={ThingCss.thingauto2}>
              <a href="/" type=""> <img src={require("./../Img/gongkai.jpg")} /></a>
              <button onClick={this.upload}>公开</button>
            </div>
            <div className={ThingCss.thingauto3}>
              <a href="/" type=""><img src={require("./../Img/gongkai.jpg")} /></a>
              <button onClick={this.upload}>不公开</button>
            </div>

          </div>

          <div className={ThingCss.right}>
            <img src={require("./../Img/1123.png")} />
          </div>
        </div>
      </div>
    )
  }
}