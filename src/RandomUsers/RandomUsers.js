import React from 'react';

import './RandomUsers.css';

export default function RandomUsers({ users, onFavorite, favoriteUsers }) {

    return (
        <div >
            {users.map((item, index) => {
                return (
                    <div className='Random-users'
                        key={index}
                        onClick={() => onFavorite(item, index)}>
                        <img className='Random-img'
                            src = {item.avatar_url}
                            id = {favoriteUsers.find(favoriteUser => favoriteUser.id === item.id) ? 'border' : ''}
                        ></img>
                        <h3>{item.login}</h3>
                    </div>
                )
            })}
        </div>
    )
}
