import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        const res = await axios.get(url)
        .then(res=> {
            setData(res.data)
            //console.log(dataRes)
        })
      };

    // const fetchData = async () => {
    //     const res = await fetch(url);
    //     const json = await res.json();
    //     setData(json)
    //     setLoading(false)
    // }

    useEffect(() => {
        fetchData()
    },[])

    return {data}
}

export default useFetch