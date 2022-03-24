import React, { useState } from 'react';

const useFetching = (cb) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    const fetching = async (...args) => {
      try {
        setIsLoading(true);
        await cb(...args);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    return [fetching, isLoading, error];
};

export default useFetching;