/* eslint-disable @typescript-eslint/default-param-last */

type InsightDataAction =
  | ReturnType<typeof getDataRequest>
  | ReturnType<typeof getDataSuccess>
  | ReturnType<typeof getDataFailed>;

interface InsightDataState {
  loading: boolean;
  error: Error | null;
  response: Result[];
}

// 기본값
const initialState: InsightDataState = {
  loading: false,
  error: null,
  response: [],
};

export const GET_DATA_REQUEST = 'insightData/GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'insightData/GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'insightData/GET_DATA_FAILED';

export const getDataRequest = (payload: RequestParams) =>
  ({ type: GET_DATA_REQUEST, payload } as const);
export const getDataSuccess = (payload: InsightResponse) =>
  ({ type: GET_DATA_SUCCESS, payload } as const);
export const getDataFailed = (payload: Error) =>
  ({ type: GET_DATA_FAILED, payload } as const);

export default function reducer(
  state = initialState,
  action: InsightDataAction,
): InsightDataState {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        response: action.payload.results,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
