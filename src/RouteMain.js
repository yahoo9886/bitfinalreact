import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {header} from './Component/header';
import Follow from './Component/main/follow/FollowBody';
import {list} from './Component/main/mainlist'
import {mypage} from './Component/main/mypage'
import {LoginMain,LoginSignup} from './Component/login'

class RouteMain extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={LoginMain}/>
                <Route exact path="/login/signup" component={LoginSignup}/>
                <Route path="/main" component={header}/>
                <Route exact path="/main" component={list}/>
<<<<<<< HEAD
                <Route path="/main/mypage" component={mypage}/>
=======
                <Route exact path="/main/mypage" component={mypage}/>
                <Route exact path="/main/modal" component={Follow}/>
>>>>>>> 3do
            </div>
        );
    }
}
/* <Route exact path="/main/mypage" component={mypage}/> */
// <Route path="/Home" component={Menu}/></div>
/* <Route exact path="/" component={header}/> */
export default RouteMain;