import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PingLunPage from '../PingLun/pinglun';
import WirtePage from '../Wirte/wirte';
import SharePage from './Share/share';

var ViewCss = require('./view.css');
export default class ViewPage extends React.Component {
  render() {
    return (
      <div className={ViewCss.view}>
        <Link to="/homepage" > <img src={require("./../Img/13.png")} height="50px" width="50px" /></Link>
        <div className={ViewCss.auto} >
          {/* <div className={ViewCss.aa}>
            <div className={ViewCss.bb}>
              <Icon type="left" className={ViewCss.ee} />
            </div>
          </div> */}
          <img src={require("./../Img/y.png")} className={ViewCss.sun} />
          <div className={ViewCss.autotop} >


            <div className={ViewCss.mine} >
              <ul>
                <li>
                  <a type="" href="/"> <img src={require("./../Img/m.png")} className={ViewCss.good} />
                    <h3>赞一个</h3></a>
                </li>

                <li>
                  <a type="" href="/"><img src={require("./../Img/n.png")} className={ViewCss.share}/>
                    <h3>分享</h3>
                  </a>
                </li>
                <li>
                  {/* <img src={require("./../Img/g.png")}/> */}
                  <a type="" href="/">
                    {/* <Icon type="right" /> */}

                    <img src={require("./../Img/b.png")} className={ViewCss.form} />
                    <h3>评论</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={ViewCss.cc}>
          {/* <div className={ViewCss.dd}>
            <Icon type="right" className={ViewCss.ff} />
          </div> */}
        </div>
        {/* <BrowserRouter basename="view">
          <Link to="/pinglun" className={ViewCss.pl}>查看全部评论</Link>
          <Route path="/pinglun" component={PingLunPage}></Route>
          <Link to="/wirte" className={ViewCss.pm}>
            <img src={require("./../Img/b.png")} />

          </Link>
          <Route path="/wirte" component={WirtePage}></Route>
          <Link to="/share" className={ViewCss.ps}>
            <img src={require("./../Img/n.png")} />
          </Link>
          <Route path="/share" component={SharePage}></Route>
        </BrowserRouter> */}
        {/* <div className={ViewCss.pa}>
          <img src={require("./../Img/qq.png")} />
        </div> */}
      </div>
    )
  }
}