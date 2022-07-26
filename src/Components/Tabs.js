import React, { useState }from 'react';
/* eslint-disable */

function Tabs({onAllListClick,onCompletedListClick,onActiveListClick}) {
  const [filterStatus,setFilterStatus] = useState(false);
  return (
    <>
    <button 
    type="button" 
    aria-pressed="false" 
    className="tabs"
    onClick={onAllListClick}
  
    >
          Show all tasks
        </button>
       
        <button 
        type="button" 
        aria-pressed="false" 
        className="tabs"
        onClick={onActiveListClick}
        >
          Show Active tasks
        </button>
        
        <button 
        type="button"
        aria-pressed="false"
        className="tabs"
        onClick={onCompletedListClick}
        >
         Show Completed tasks
        </button>
    </>
  )
}

export default Tabs
