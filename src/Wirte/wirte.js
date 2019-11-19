import React from 'react';
import {Link} from 'react-router-dom';
import {Icon,Button} from 'antd'
var WirteCss = require('./wirte.css');
export default class WirtePage extends React.Component{
    render(){
        return(
            <div className={WirteCss.wirte}>
                  <textarea  rows="4" cols="35"></textarea>
                  <Link to="/view">
                       <Button shape="oval" type="radius" icon="">确定</Button>
                  </Link>
                 
            </div>
        )
    }
}