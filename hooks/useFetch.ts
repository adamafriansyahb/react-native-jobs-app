import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (endpoint: string, query: any) => {
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '228a363085msh715449bd6fc8f0bp109aa3jsn321027f983ba',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useFetch;
