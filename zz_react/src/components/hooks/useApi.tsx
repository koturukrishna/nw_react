import axios from "axios";
import { useCallback, useState } from "react";

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

function useApi<T = unknown>() {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const makeRequest = useCallback(
    async (url: string, method: string, data?: unknown) => {
      setResponse({ data: null, loading: true, error: null });
      try {
        const res = await axios({ url, method, data });
        setResponse({ data: res.data, loading: false, error: null });
      } catch (err: unknown) {
        let errorMessage = "Something went wrong";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        setResponse({
          data: null,
          loading: false,
          error: errorMessage,
        });
      }
    },
    []
  );

  return { ...response, makeRequest };
}

export default useApi;
