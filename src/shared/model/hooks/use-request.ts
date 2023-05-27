import { useCallback, useState } from 'react';

import { Maybe } from 'shared/model/types/main.types';

type RequestFunction<RequestData, ResponseData> = (
  payload: RequestData
) => Promise<ResponseData>;

type Config<RequestData, ResponseData> = {
  isLoading: boolean;
  error: Maybe<string>;
  doRequest: (data: RequestData) => Promise<ResponseData | string>;
};

type UseRequestResult<RequestData, ResponseData> = [
  Maybe<ResponseData>,
  Config<RequestData, ResponseData>
];

const ERROR_MESSAGE = 'Something went wrong';

export const useRequest = <RequestData, ResponseData>(
  requestFunction: RequestFunction<RequestData, ResponseData>
): UseRequestResult<RequestData, ResponseData> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Maybe<string>>(null);
  const [data, setData] = useState<Maybe<ResponseData>>(null);

  const doRequest = useCallback(
    async (payload: RequestData) => {
      setError(null);
      setIsLoading(true);

      try {
        const response = await requestFunction(payload);
        setData(response);
        setIsLoading(false);

        return response;
      } catch (error) {
        setIsLoading(false);
        setData(null);
        setError(ERROR_MESSAGE);

        return Promise.reject(ERROR_MESSAGE);
      }
    },
    [requestFunction]
  );

  return [data, { isLoading, error, doRequest }];
};
