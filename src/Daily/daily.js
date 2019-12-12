import React from 'react';
import { Link } from 'react-router-dom'
import { Calendar, Badge, Button } from 'antd';

var DailyCss = require('./daily.css');
export default class DailyPage extends React.Component {
    render() {
        return (
            <div className={DailyCss.daily}>
                <div className={DailyCss.dailymorning}>
                    <div className={DailyCss.img1}>
                        <img src={require('./../Img/ssss.png')} />
                        <h3>morning</h3>
                    </div>
                    <div className={DailyCss.img2}>
                        <img src={require('./../Img/zzzz.png')} className={DailyCss.qq} />
                        <textarea cols="30" rows="5" placeholder="写下你的安排吧！"></textarea>
                    </div>
                </div>
                <div className={DailyCss.dailyafternoon}>
                    <div className={DailyCss.img6}>
                        <img src={require('./../Img/ssss.png')} />
                        <h3>afternoon</h3>
                    </div>
                    <div className={DailyCss.img7}>
                        <img src={require('./../Img/ddddd.png')} className={DailyCss.ww} />
                        <textarea cols="30" rows="5" placeholder="写下你的安排吧！"></textarea>
                    </div>

                </div>
                <div className={DailyCss.dailynight}>
                    <div className={DailyCss.image1}>
                        <img src={require('./../Img/ssss.png')} />
                        <h3>evening</h3>
                    </div>
                    <div className={DailyCss.image2}>
                        <img src={require('./../Img/gggg.png')} className={DailyCss.rr} />
                        <textarea cols="30" rows="5" placeholder="写下你的安排吧！">
                        </textarea>
                    </div>
                </div>
                <div className={DailyCss.bu}>
                    <Button shape="oval" type="radius" icon="">ok</Button>
                </div>
                <div className={DailyCss.bo}>
                    <Button style={{ backgroundColor: '#F0F2F5' }} onClick={() => { window.location.href = "homepage" }} className="r-button">返回</Button>
                </div>
            </div>
        )
    }
}