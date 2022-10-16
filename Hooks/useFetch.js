import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get(url).then((res) => {
      setLoading(false);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
