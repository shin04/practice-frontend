import React, { useState, useEffect } from "react";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch("/posts");
    res
      .json()
      .then((res) => {
        setData(res);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
export default App;
