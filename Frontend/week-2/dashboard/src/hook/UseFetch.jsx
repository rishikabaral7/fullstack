import React from 'react'
import { useState } from 'react'
import {getUsers} from "../service/api";
import { useEffect } from 'react';

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const fetchData = async ()=>{
      try{
        setLoading(true);
        const data = await getUsers();
        setData(data);
      }
      catch(error){
        setError(error);
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {data, loading, error};
}

export default UseFetch