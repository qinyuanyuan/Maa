import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
var DecorateCss = require('./decorate.css');
const ButtonGroup = Button.Group;
export default class DecoratePage extends React.Component {
    render() {
        return (
            <div className={DecorateCss.decorate}>
                <Link to="/homepage" >
                    <img src={require("./../Img/13.png")}
                        className={DecorateCss.return} />
                </Link>

                <div className={DecorateCss.header}>
                    {/* <Link to="/homepage" >
                        <img src={require("./../Img/13.png")}
                            className={DecorateCss.return} />
                    </Link> */}

                    <img src={require("./../Img/d1.png")} />
                    <h1>个性装扮</h1>
                    <ButtonGroup className={DecorateCss.choose}>
                        <Button type="primary">

                            推荐
      </Button>
                        <Button type="primary">
                            自定义

                        </Button>
                    </ButtonGroup>
                </div>
                <div className={DecorateCss.de1} >
                    <img src={require("./../Img/d2.png")} />
                </div>
                <div className={DecorateCss.de2} >
                    <img src={require("./../Img/d3.png")} />
                </div>

                <div className={DecorateCss.gu} >
                    <a type="" href="/" ><h3>古风</h3></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/古风/0a91c1c70b09e8ef.jpg")} /></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/古风/17f50140c1012e6c.jpg")} /></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/古风/6de78d1ef685a62a.jpg")} /></a>
                    <a type="" href="/"> <p className={DecorateCss.more}>查看更多>></p></a>
                </div>
                <div className={DecorateCss.de3} >
                    <img src={require("./../Img/d7.png")} />
                </div>
                <div className={DecorateCss.dong} >
                    <a type="" href="/" ><h3>动漫</h3></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/动漫/1d9590f2434eabf8.jpg")} /></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/动漫/2db64d899cc2184c.jpg")} /></a>
                    <a type="" href="/"> <img src={require("./../Img/风格/动漫/8ca379e06b3df572.jpg")} /></a>
                    <a type="" href="/"> <p className={DecorateCss.more}>查看更多>></p></a>
                </div>
                <div className={DecorateCss.de4}>
                    <img src={require("./../Img/d4.png")} />
                </div>
                <div className={DecorateCss.ideo} >
                    <a type="" href="/" ><h3>我的爱豆</h3></a>
                    <a type="" href="/"><img src={require("./../Img/风格/明星/1e9333795bde5439.jpg")} /></a>
                    <a type="" href="/"><img src={require("./../Img/风格/明星/1ff6dc50a7ef30c8.jpg")} /></a>
                    <a type="" href="/"><img src={require("./../Img/风格/明星/4bd0c2edcb062a36.jpg")} /></a>
                    <a type="" href="/"> <p className={DecorateCss.more}>查看更多>></p></a>
                </div>
                <div className={DecorateCss.de5}>
                    <img src={require("./../Img/d5.png")} />
                </div>
                <div className={DecorateCss.concise}>
                    <a type="" href="/" ><h3>简约</h3></a>
                    <a type="" href="/"> <img src={require("./../Img/mmm.jpg")} /></a>
                    <a type="" href="/"><img src={require("./../Img/nnn.jpg")} /></a>
                    <a type="" href="/"> <img src={require("./../Img/bbb.jpg")} /></a>
                    <a type="" href="/"> <p className={DecorateCss.more}>查看更多>></p></a>
                </div>


            </div>

        )
    }
}