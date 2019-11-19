import React from 'react';
import {Link} from 'react-router-dom'
var DecorateCss = require('./decorate.css');
export default class DecoratePage extends React.Component{
    render(){
        return(
            <div className={DecorateCss.decorate}>
                
         <div className={DecorateCss.header}>
                    <Link to="/homepage" className={DecorateCss.return}>
                     <img src={require("./../Img/lll.png")}/>
                    </Link>
            <img src={require("./../Img/d1.png")}/>
         <h1>个性装扮</h1>
       </div>
       <div className={DecorateCss.de1} >
            <img src={require("./../Img/d2.png")}/>
       </div>
       <div className={DecorateCss.de2} >
            <img src={require("./../Img/d3.png")}/>
       </div>
       
       <div className={DecorateCss.gu} >
           <h3>古风</h3>
           <img src={require("./../Img/风格/古风/0a91c1c70b09e8ef.jpg")}/>
           <img src={require("./../Img/风格/古风/17f50140c1012e6c.jpg")}/>
           <img src={require("./../Img/风格/古风/6de78d1ef685a62a.jpg")}/>
       </div>
       <div className={DecorateCss.de3} >
            <img src={require("./../Img/d7.png")}/>
       </div>
       <div className={DecorateCss.dong} >
           <h3>动漫</h3>
           <img src={require("./../Img/风格/动漫/1d9590f2434eabf8.jpg")}/>
           <img src={require("./../Img/风格/动漫/2db64d899cc2184c.jpg")}/>
           <img src={require("./../Img/风格/动漫/8ca379e06b3df572.jpg")}/>
       </div>
       <div className={DecorateCss.de4}>
           <img src={require("./../Img/d4.png")}/>
       </div>
       <div className={DecorateCss.ideo} >
           <h3>我的爱豆</h3>
           <img src={require("./../Img/风格/明星/1e9333795bde5439.jpg")}/>
           <img src={require("./../Img/风格/明星/1ff6dc50a7ef30c8.jpg")}/>
           <img src={require("./../Img/风格/明星/4bd0c2edcb062a36.jpg")}/> 
       </div> 
       <div className={DecorateCss.de5}>
           <img src={require("./../Img/d5.png")}/>
       </div>
       <div className={DecorateCss.concise}>
           <h3>简约</h3>
           <img src={require("./../Img/mmm.jpg")}/>
           <img src={require("./../Img/nnn.jpg")}/>
           <img src={require("./../Img/bbb.jpg")}/>  
       </div>
       <div className={DecorateCss.zs}>
           <img src={require("./../Img/ppp.png")}/>
       </div>
    
    </div>

        )
    }
}