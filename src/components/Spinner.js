import React from 'react'
import ninja from './ninja.gif';

const Spinner = () =>{
    return (
      <div className="text-center">
        <img src={ninja} alt="loading" height="125" width="125" />      
        </div>
    )
}


export default Spinner
