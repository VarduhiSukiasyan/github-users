import React from 'react';

export default function RandomUsers({ users, onFavorite }) {
   
    return (
        <div>
            {users.map((item, index) => {
                return (
                    <div key={index}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center',
                            display: 'inline-block',
                        }}
                        onClick={() => onFavorite(item)}>
                        <img width='150px'
                            style={{
                                marginLeft: '75px',
                                marginRight: '75px',
                                justifyContent: 'flex'
                            }}
                            src={item.avatar_url}></img>
                        <h3>{item.login}</h3>
                    </div>
                )
            })}
        </div>
    )
}

