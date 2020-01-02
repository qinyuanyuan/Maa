import React from 'react';
import { Link } from 'react-router-dom'
import { Calendar, Badge, Button, Message } from 'antd';

var DailyCss = require('./daily.css');
export default class DailyPage extends React.Component{
  //xhr
  constructor(props){
      super(props)
      this.state = {}
  }
changeValue = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
upload = () => {
    var xhr = new XMLHttpRequest()
    var data={
        "textString":this.state.textString,
    }
    xhr.open("post","/sc/addDaliySchedule")
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
        return(                               
            <div className={DailyCss.daily} >
             <div className={DailyCss.dailyafternoon}>
               <div className={DailyCss.img6}>
                <img src={require('./../Img/ssss.png')} />   
                </div>
                <div className={DailyCss.img7}>
                <img src={require('./../Img/ddddd.png')} className={DailyCss.ww} />
                <textarea cols="60" rows="10" name="textString" placeholder="写下你的安排吧！" value={this.state.textString} onChange={e => this.changeValue(e)}></textarea>
                </div>
                <div className={DailyCss.bu} onClick={this.upload}>
                    <Button  type="radius" icon="" >ok</Button>
                </div>
             </div>
            
             <div className={DailyCss.bo}>
               <Button style={{backgroundColor:'#F0F2F5'}} 
                      onClick={()=>{window.location.href="homepage"}}
                         className="r-button"
                >返回</Button>
                </div>
            </div>
        )
    }   
    }