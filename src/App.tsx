import React from 'react';
import { useQuery } from 'react-query';
import { counterFetcher } from './utils/fetcher';

function App() {
  const {
    data: counterValue,
    isFetching,
    isLoading,
    refetch,
  } = useQuery('counter', counterFetcher, {
    enabled: false,
    initialData: 0,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      console.log('success');
    },
  });

  const clickRefetchButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    refetch();
  };

  return (
    <div className="App">
      <>{counterValue}</>

      <p>
        {isFetching && <>fetching...</>}
        <br />
        {isLoading && <>loading...</>}
      </p>

      <button onClick={clickRefetchButton}>Refetch</button>
    </div>
  );
}

export default App;
