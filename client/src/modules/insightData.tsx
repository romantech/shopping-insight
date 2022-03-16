/* eslint-disable @typescript-eslint/default-param-last */
// duck 패턴

type InsightDataAction =
  | ReturnType<typeof getInsightDataRequest>
  | ReturnType<typeof getInsightDataSuccess>
  | ReturnType<typeof getInsightDataFailed>;

interface InsightDataState {
  loading: boolean;
  error: Error | null;
  rawData: InsightResponse | null;
  renderData: RenderData;
}

interface ResponsePayload {
  data: InsightResponse;
  computedData: {
    category: Category;
    metrics: Metric[];
    groups: Ages[];
  };
}

const initialState: InsightDataState = {
  loading: false,
  error: null,
  rawData: null,
  renderData: {
    category: null,
    groups: [],
    metrics: [],
  },
};

export const GET_INSIGHT_DATA_REQUEST = 'insightData/GET_INSIGHT_DATA_REQUEST';
export const GET_INSIGHT_DATA_SUCCESS = 'insightData/GET_INSIGHT_DATA_SUCCESS';
export const GET_INSIGHT_DATA_FAILED = 'insightData/GET_INSIGHT_DATA_FAILED';

export const getInsightDataRequest = (payload: RequestParams) =>
  ({ type: GET_INSIGHT_DATA_REQUEST, payload } as const);
export const getInsightDataSuccess = (payload: ResponsePayload) =>
  ({ type: GET_INSIGHT_DATA_SUCCESS, payload } as const);
export const getInsightDataFailed = (payload: Error) =>
  ({ type: GET_INSIGHT_DATA_FAILED, payload } as const);

export default function reducer(
  state = initialState,
  { type, payload }: InsightDataAction,
): InsightDataState {
  switch (type) {
    case GET_INSIGHT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_INSIGHT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        rawData: payload.data,
        renderData: payload.computedData,
      };
    case GET_INSIGHT_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
