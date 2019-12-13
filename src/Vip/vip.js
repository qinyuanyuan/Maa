import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import WeixinPage from '../Weixin/weixin';
import ZfbPage from '../Zhifubao/zfb';

var VIPCss = require('./vip.css');
export default class VipPage extends React.Component {
    render() {
        return (
            <div>
                <a type=" "href="/"><img src={require("./../Img/13.png")} height="50px" width="50px" /></a>
            <div className={VIPCss.all}>
                
                <div>
                    <ul><li className={VIPCss.VIP}>VIP &nbsp; 会员中心</li>
                        <li><a class={VIPCss.active} href="/homepage">主页</a></li>
                        <li><a href="/login">登录</a></li>
                    </ul>
                </div>
                <div className={VIPCss.rule}>
                    <div className={VIPCss.text}>
                        <p><h4>VIP成长规则体系</h4><br />vip成长，目前包括15个阶段，分别用VIP1至VIP5表示，具体成长阶段取决于【成长值】，对应关系如下：</p>
                        <table border="1" cellSpacing="0" >
                            <tr><td>VIP会员等级</td><td>VIP1</td><td>VIP2</td><td>VIP3</td><td>VIP4</td><td>VIP5</td></tr>
                            <tr><td>对应成长值</td><td>0</td><td>300</td><td>900</td><td>2700</td><td>5000</td></tr>
                        </table>
                    </div>
                    <div className={VIPCss.pay}>
                        <h5>会员购买</h5>
                        请选择会员类型<br />
                        <div className={VIPCss.t}>
                            <input type="button" value="8.00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1个月"></input>
                            <input type="button" value="22.00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3个月"></input>
                            <input type="button" value="90.00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;12个月"></input>
                        </div>
                        <BrowserRouter basename="vip">
                            <Link to="/weixin" className={VIPCss.pl}> <input type="radio" name="pt" />微信</Link>
                            <Link to="/zfb" className={VIPCss.pl}> <input type="radio" name="pt" />支付宝</Link>
                            <Route path="/weixin" component={WeixinPage}></Route>
                            <Route path="/zfb" component={ZfbPage}></Route>
                        </BrowserRouter>

                        <input className={VIPCss.p2} type="button" value="请按心情付款哦！"></input>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}