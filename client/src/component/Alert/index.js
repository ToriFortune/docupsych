import React from 'react';
import './style.css';

export default function Alert(props) {
    return (
        <div className="notification animated fadeOut delay-2s">
            <h5>{props.heading}</h5>
            <p>{props.message}</p>
        </div>
    )
}