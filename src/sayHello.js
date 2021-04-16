import React from 'react';

const sayHello = () =>{
    console.log('Hello!')
};



function Hello(){
    return(
        <div>
            <h3>This is the Hello component...</h3>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}


export default Hello;