import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
  const [result, setResult] = useState();
  const [errorReq, setErrorReq] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
      setResult(response);
      setLoading(false);
    })
    .catch((error) => {
      setErrorReq(error);
      setLoading(false);
    })
  }, [])
  return {
    data: result,
    error: errorReq,
    loading: loading
  }
}
