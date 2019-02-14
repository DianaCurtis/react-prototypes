import React from 'react';


export default (props) => {
    console.log('Movie Info',props.info);

    const {info}=props;

    return (
        <div>
            <h3>{info['im:name'].label}</h3>
            <img src={info['im:image'][2].label} alt=""/>
            <p>{info['summary'].label}</p>
        </div>
    )
}
