import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => setData(response.data))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  }, [])

  return { data, error, isFetching };
}