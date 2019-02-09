import React from 'react';
import ReactDOM from 'react-dom';


const user={
    name: 'Stuart',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);


function luckyNumber(){
    return (Math.floor((Math.random()*1000))+1);
}

function greeting(props){
    const {name,luckyNumber}=props;
    return(
        <div className="container">
            <h1>Welcome {name}</h1>
            <h2 className="text-muted">Your lucky number is: {luckyNumber}</h2>
        </div>
    )
}