import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom'
import HomePage from './HomePage/homepage';
import AimPage from './Aim/aim';
import LoginPage from './Login/login';
import DecoratePage from './Decorate/decorate';
import BasePage from './Base/base';
import VipPage from './Vip/vip';
import EnrolPage from './Enrol/enrol';
import MainPage from './Main/main';
import DailyPage from './Daily/daily';
import CustomPage from './Custom/custom';
import ViewPage from './View/view';
import ThingPage from './Thing/thing';
import LogoPage from './Logo/logo';


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                    <BrowserRouter basename='react-example'> 
                    <Switch>
                    <Route path="/" exact component={LoginPage}></Route>
                    <Route path="/homepage" component={HomePage}></Route>
                    <Route path="/login"  component={LoginPage}></Route>
                    <Route path="/aim"  component={AimPage}></Route>
                    <Route path="/decorate" component={DecoratePage}></Route>
                    <Route path="/base" component={BasePage}></Route>
                    <Route path="/VIP" component={VipPage}></Route>
                    {/* <Route path="/establish" component={EstablishPage}></Route> */}
                    <Route path="/enrol"  component={EnrolPage}></Route>
                    <Route path="/main" component={MainPage}></Route>
                    <Route path="/daily" component={() =>(<DailyPage />)}></Route>
                    <Route path="/custom" component={CustomPage}></Route>
                    <Route path="/view" component={ViewPage}></Route>
                    <Route path="/thing" component={ThingPage}></Route>
                    <Route path="/logo" component={LogoPage}></Route>

                    </Switch> 
                </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
