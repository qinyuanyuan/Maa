import React from 'react';
import {Link} from 'react-router-dom'
var LogoCss=require("./logo.css")
export default class LogoPage extends React.Component{
    render(){
         return(
            <div className={LogoCss.xiangce}>
               <div className={LogoCss.header} >
                    <h1>自嗨头像</h1>
                    <img src={require("./../Img/mmmm.gif")}/>
               </div>
               <div className={LogoCss.image1} >
                    <h3>个性</h3>
                    <img src={require("./../Img/q1.jpg")}/>
                    <img src={require("./../Img/w1.png")}/>
                    <img src={require("./../Img/e1.jpg")}/>
                    <img src={require("./../Img/pp.jpg")}/>
                    <img src={require("./../Img/oo.jpg")}/>
                    <img src={require("./../Img/aa.jpg")}/>
                    <img src={require("./../Img/r1.jpg")}/>
                    <img src={require("./../Img/m1.jpg")}/>
               </div>
               <div className={LogoCss.image2}>
                     <h3>小清新</h3>
                     <img src={require("./../Img/u1.jpg")}/>
                     <img src={require("./../Img/i1.jpg")}/>
                     <img src={require("./../Img/o1.jpg")}/>
                     <img src={require("./../Img/p1.jpg")}/>
                     <img src={require("./../Img/a1.jpg")}/>
                     <img src={require("./../Img/s1.jpg")}/>
                     <img src={require("./../Img/d1.jpg")}/>
                     <img src={require("./../Img/n1.jpg")}/>
               </div>
               <div className={LogoCss.image3} >
                     <h3>卡哇伊๑ŐεŐ๑</h3>
                     <img src={require("./../Img/hh.jpg")}/>
                     <img src={require("./../Img/ss.jpg")}/>
                     <img src={require("./../Img/nn.jpg")}/>
                     <img src={require("./../Img/cc.jpg")}/>
                     <img src={require("./../Img/vv.jpg")}/>
                     <img src={require("./../Img/xx.jpg")}/>
                     <img src={require("./../Img/b1.jpg")}/>
                     <img src={require("./../Img/v1.jpg")}/>
               </div>
               <div className={LogoCss.image4} >
                   <h3>欧美</h3>
                   <img src={require("./../Img/o2.jpg")}/>
                   <img src={require("./../Img/o3.jpg")}/>
                   <img src={require("./../Img/o4.jpg")}/>
                   <img src={require("./../Img/o5.jpg")}/>
                   <img src={require("./../Img/o6.jpg")}/>
                   <img src={require("./../Img/o7.jpg")}/>
                   <img src={require("./../Img/o8.jpg")}/>
                   <img src={require("./../Img/o9.jpg")}/>
               </div>
               <div className={LogoCss.image5} >
                   <h3>二次元</h3>
                    <img src={require("./../Img/风格/动漫/1d9590f2434eabf8.jpg")}/>
                    <img src={require("./../Img/风格/动漫/2db64d899cc2184c.jpg")}/>
                    <img src={require("./../Img/风格/动漫/3c569ad2ad14e8bb.jpg")}/>
                    <img src={require("./../Img/风格/动漫/4c074213c89b5026.jpg")}/>
                    <img src={require("./../Img/风格/动漫/8ca379e06b3df572.jpg")}/>
                    <img src={require("./../Img/风格/动漫/17f7cf48728526f2.jpg")}/>
                    <img src={require("./../Img/风格/动漫/21c12326e47e62aa.jpg")}/>
                    <img src={require("./../Img/风格/动漫/24e47c54cb2f21e1.jpg")}/>
               </div>
               <div className={LogoCss.image6} >
                    <h3>情头</h3>
                    <img src={require("./../Img/q2.jpeg")}/>
                    <img src={require("./../Img/q3.jpeg")}/>
                    <img src={require("./../Img/q4.jpeg")}/>
                    <img src={require("./../Img/q5.jpeg")}/>
                    <img src={require("./../Img/jj.jpeg")}/>
                    <img src={require("./../Img/ll.jpeg")}/>
                    <img src={require("./../Img/ff.jpeg")}/>
                    <img src={require("./../Img/kk.jpeg")}/>
               </div>
               <div className={LogoCss.footer} >
                    <img src={require("./../Img/y1.png")}/>
               </div>
               <Link to="/homepage"className={LogoCss.return}  >
                    <img src={require("./../Img/r5.png")}/>
               </Link>
          </div>
         )
     }
}