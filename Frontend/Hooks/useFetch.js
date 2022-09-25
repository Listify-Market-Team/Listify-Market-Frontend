import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[])
}

export default useFetch