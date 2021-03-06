import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import logo from './../Logo/logo';
var AimCss = require('./aim.css');

const { TextArea } = Input;
export default class AimPage extends React.Component {

    render() {
        return (
            <div className={AimCss.aim}>
                <div className={AimCss.header}>
                    <Link to="/homepage" className={AimCss.comeback}>
                        <img src={require("./../Img/13.png")} height="50px" width="50px" />
                    </Link>

                    <h1>我的小目标</h1>
                </div>
                <div className={AimCss.xin} >


                    <h2>行程</h2>
                    <div className={AimCss.time}>
                        {/* <div className={AimCss.nian} > */}
                        <ul >
                            <span>
                                <li>
                                    <input type="text" size="4" />
                                    <h4>年</h4>
                                </li>
                                {/* </div> */}
                                {/* <div className={AimCss.yue} > */}
                                <li>
                                    <input type="text" size="4" />
                                    <h4>月</h4>
                                </li>
                                {/* </div> */}
                                {/* <div className={AimCss.ri} > */}
                                <li>
                                    <input type="text" size="4" />
                                    <h4>日</h4>
                                </li>
                                {/* </div> */}
                                {/* <div className={AimCss.shi} > */}
                                <li>
                                    <input type="text" size="4" />
                                    <h4>时</h4>
                                </li>
                            </span>
                        </ul>
                        {/* </div> */}
                    </div>
                </div>
                <TextArea className={AimCss.text1} rows={4} />

                <div className={AimCss.richeng} >

                    <h2>日程</h2>
                    <TextArea className={AimCss.text2} rows={4} />
                </div>

            </div>
        )
    }
}
// ReactDOM.render(<TextArea rows={4} />, mountNode);