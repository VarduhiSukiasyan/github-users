import React from 'react';

import './FavoriteUsers.css';

export default function FavoriteUsers({ favUsers }) {
    return (
        <div className='fav-Users'>
            {favUsers.map((user, index) => {
                return (
                    <span key={index}>
                        <img width='100px'
                            src={user.avatar_url} />
                        {user.count} </span>
                )
            })}
        </div>
    )
}
