import React, { useCallback, useEffect } from "react";

interface ApiCallResult {
  loading: boolean;
  error: string | null;
  result: [] | null;
}

const useApiCall = (url: string, method = "get", data: null | object) => {
  const [dataCalling, setDataCalling] = React.useState<ApiCallResult>({
    loading: false,
    error: null,
    result: null,
  });
  const apiCall = useCallback(async () => {
    setDataCalling({ loading: true, error: null, result: null });
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setDataCalling({ loading: false, error: null, result: result });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setDataCalling({ loading: false, error: errorMessage, result: null });
    }
  }, [url, method]);

  useEffect(() => {
    apiCall();
  }, [url, method, data, apiCall]);

  return [dataCalling.result, dataCalling.loading, dataCalling.error];
};

export default useApiCall;
