import React from 'react';

const AppHeader = () => {
  return (
    <header className='p-1 pl-3'>
      <h2 className='text-center' onClick={() => window.location.reload()}>
        freeCodeCamp&nbsp;
        <i className='fab fa-free-code-camp fa-lg align-middle'/>
        &nbsp;leaderboard
      </h2>
    </header>
  );
}

export default AppHeader;
