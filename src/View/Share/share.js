import React from 'react';
import {Link} from 'react-router-dom';
import {Icon,Button} from 'antd'
var ShareCss = require('./share.css');
export default class SharePage extends React.Component{
    render(){
        return(
            <div className={ShareCss.share} > 
                 {/* Dialog contents */}
                 <h3>分享到</h3>
                 <Icon type="wechat" className={ShareCss.qq} />
                     <Icon type="qq"className={ShareCss.ww}/>
                     <Icon type="weibo-circle" className={ShareCss.ee}/>
                 <Link to="/view">
                     <Button icon="check"/>
                 </Link>
            </div>
        )
    }
}