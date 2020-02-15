import React from 'react';

export default function FavoriteUsers({ favUsers }) {
    return (
        <div>
            {favUsers.map((user, index) => {
                return (
                    <span key={index}
                        style={{
                            marginLeft: '75px',
                            marginRight: '75px',
                            justifyContent: 'flex'
                        }}>
                        <img width='100px'
                            src={user.avatar_url} />
                        {user.count} </span>
                )
            })}
        </div>
    )
}

