import React, { useEffect, useState } from 'react';

function FetchButton() {
  const handleQuery = () => {
    /*setLoading(true);
    let apiUrl = `https://opentdb.com/api.php?amount=50`;

    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`)
    }

    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
    }

    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`)
    }

    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
      });*/
  }

  return <button onClick={handleQuery}>Get Started!</button>;
}
export default FetchButton;