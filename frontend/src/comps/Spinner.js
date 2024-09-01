import React from 'react';

const Spinner = () => {
  return (
    <>
    
      <style>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto; 
        }

        .spinner {
          width: 4rem;  
          height: 4rem; 
          border: 4px solid black;
          border-radius: 50%;
          background-color: #0284c7; 
          animation: ping 1s infinite; 
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      <div className='spinner-container'>
        <div className='spinner'></div>
      </div>
    </>
  );
};

export default Spinner;  
