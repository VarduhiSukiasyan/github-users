import React from 'react';

export default function Header({ title, value }) {
    return (
        <div>
            <div style = {{textAlign: 'center'}}>
                <h1>{title}{value}</h1>
            </div>
        </div>
    )
}