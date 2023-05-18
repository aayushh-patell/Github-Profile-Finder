import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';

import '../styles/profile.css';

function Profile() {
    const [userInfo, setUserInfo] = useState({});
    const [userRepoInfo, setUserRepoInfo] = useState([]);

    const location = useLocation();
    const state = location.state;

    axios.get(`https://api.github.com/users/${state.searchTerm}`).then(res => {
        setUserInfo(res.data);
    });

    axios.get(`https://api.github.com/users/${state.searchTerm}/repos`).then(res => {
        setUserRepoInfo(res.data);
    });


    return (

        <div>
            <div className='userContainer'>
                <img src={userInfo.avatar_url}/>

                <h1>{userInfo.name}</h1>
                <div className='numStats'>
                    <div>
                        <h2>{userInfo.public_repos}</h2>
                        <h6>Repositories</h6>
                    </div>

                    <div>
                        <h2>{userInfo.followers}</h2>
                        <h6>Followers</h6>
                    </div>

                    <div>
                        <h2>{userInfo.following}</h2>
                        <h6>Following</h6>
                    </div>
                </div>
                    {
                        userInfo.url ? <a className='link extra-round' href={userInfo.html_url}>Visit my GitHub</a>: <></>
                    }
            </div>
            <div className="repos-container">
                <h3>My Repositories</h3>
                {
                    userRepoInfo.map(repo => {
                    return (<div className='repo-container'>
                        <h2 onClick={() => {window.location.href = repo.html_url}}>{repo.name}</h2>
                        <h6>{repo.description}</h6>
                    </div>)})
                }
            </div>
        </div>
    );
}

export default Profile;