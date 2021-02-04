import React,{Component} from 'react';
import './mypage.css';
import { Link } from 'react-router-dom';
import Mypage_list from './mypage_list';

class mypage extends Component{
    render(){
        return(
            <div className="mypage_container">
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            <img src="http://placehold.it/300" alt="프로필사진" />
                        </div>
                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>Imgeon_ny</h1>
                                <Link exact to="/" >프로필편집</Link>
                            </div>
                            <div className="profile_information">
                                <div>게시물 : 1</div>
                                <div>팔로우 : 2</div>
                                <div>팔로워 : 3</div>
                            </div>
                            <div className="profile_introduce">
                                소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글2222
                            </div>
                        </div>
                    </div>
                </div>
                <Mypage_list/>
            </div>
        )
    }
}

export default mypage;