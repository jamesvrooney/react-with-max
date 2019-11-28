import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am a person and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;