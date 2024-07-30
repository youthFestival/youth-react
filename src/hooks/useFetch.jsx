import { useState, useEffect } from "react";
import axios from "axios";

/**
 * 주어진 URL에서 데이터를 가져오는 커스텀 훅 (axios 사용)
 * @param url 데이터를 가져올 URL
 * @returns { data, loading, error } 데이터, 로딩 상태, 에러 정보
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// 사용법
// const { data, loading, error } = useFetch('https://api.example.com/data');
