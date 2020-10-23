import React, { useState, useEffect } from "react";
import DataTable from "./components/DataTable/index"
import PostForm from "./components/PostForm/index"

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  const [isDataShown, setShown] = useState(false);

  async function fetchData() {
    const res = await fetch("/posts");
    res
      .json()
      .then((res) => {
        setData(res);
        setShown(true);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isDataShown ? <DataTable data={data} />
        : null}
      <PostForm />
    </div>
  );
};
export default App;