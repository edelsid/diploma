import { useState, useEffect } from "react";

export function useFetch(url, body) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!url) return;
        if (!body) response = await fetch(url);
        else {
          response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
          })
        }
        if (response.ok) {
          response.json().then(data => setData(data));
        } else {
          response.json().then(data => console.log(data));
        }
        } catch (err) {
          setError(true);
      }
    }
  fetchData()}, [url])

  return { data, error }
}