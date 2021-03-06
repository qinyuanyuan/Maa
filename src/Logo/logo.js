import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Upload, Input } from 'antd';
var LogoCss = require("./logo.css")
export default class LogoPage extends React.Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     changeValue = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     handleUpload = () => {
          var xhr = new XMLHttpRequest()
          var data = {
               "header":this.state.header
          }
          xhr.open("post", "/avatar/file")
          xhr.onreadystatechange = function () {
               if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                         var result = JSON.parse(xhr.responseText)
                         if (result.state == 2) {
                              alert("头像上传成功！")
                         }
                    }
               }
          }
          xhr.setRequestHeader('content-type', 'application/json');
          xhr.send(JSON.stringify(data))
     }
     render() {
          return (
               <div className={LogoCss.xiangce}>
                    <div className={LogoCss.header} >
                         <h1>自嗨头像</h1>
                         <img src={require("./../Img/mmmm.gif")} />
                         <Link to="/homepage" className={LogoCss.return}  >
                              <img src={require("./../Img/13.png")} />
                         </Link>
                    </div>
                    <div>
                         <div>
                              <Upload>
                                   {/* <Button className={LogoCss.chioce} name="header" value={this.state.header} onChange={e => this.changeValue(e)}>选择本地图片</Button> */}
                                   <p className={LogoCss.choice} name="header" value={this.state.header} onChange={e => this.changeValue(e)}>选择本地图片</p>
                              </Upload>
                         </div>
                         <Button style={{ marginTop: '5px', marginLeft: '13px' }}
                              onClick={this.handleUpload} className={LogoCss.enter}>确定</Button>
                    </div>
                    <div className={LogoCss.image1} >
                         <a type="" href="/"><h3>个性</h3></a>
                         <a type="" href="/"><img src={require("./../Img/q1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/w1.png")} /></a>
                         <a type="" href="/"><img src={require("./../Img/e1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/pp.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/oo.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/aa.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/r1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/m1.jpg")} /></a>
                    </div>
                    <div className={LogoCss.image2}>
                         <a type="" href="/"> <h3>小清新</h3></a>
                         <a type="" href="/"><img src={require("./../Img/u1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/i1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/p1.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/a1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/s1.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/d1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/n1.jpg")} /></a>
                    </div>
                    <div className={LogoCss.image3} >
                         <a type="" href="/"><h3>卡哇伊๑ŐεŐ๑</h3></a>
                         <a type="" href="/"><img src={require("./../Img/hh.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/ss.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/nn.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/cc.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/vv.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/xx.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/b1.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/v1.jpg")} /></a>
                    </div>
                    <div className={LogoCss.image4} >
                         <a type="" href="/"><h3>欧美</h3></a>
                         <a type="" href="/"><img src={require("./../Img/o2.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o3.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o4.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o5.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o6.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o7.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o8.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/o9.jpg")} /></a>
                    </div>
                    <div className={LogoCss.image5} >
                         <a type="" href="/"> <h3>二次元</h3></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/1d9590f2434eabf8.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/2db64d899cc2184c.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/3c569ad2ad14e8bb.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/风格/动漫/4c074213c89b5026.jpg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/风格/动漫/8ca379e06b3df572.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/17f7cf48728526f2.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/21c12326e47e62aa.jpg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/风格/动漫/24e47c54cb2f21e1.jpg")} /></a>
                    </div>
                    <div className={LogoCss.image6} >
                         <a type="" href="/"> <h3>情头</h3></a>
                         <a type="" href="/"> <img src={require("./../Img/q2.jpeg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/q3.jpeg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/q4.jpeg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/q5.jpeg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/jj.jpeg")} /></a>
                         <a type="" href="/"> <img src={require("./../Img/ll.jpeg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/ff.jpeg")} /></a>
                         <a type="" href="/"><img src={require("./../Img/kk.jpeg")} /></a>
                    </div>
                    <div className={LogoCss.footer} >
                         <img src={require("./../Img/y1.png")} />
                    </div>

               </div>
          )
     }
}