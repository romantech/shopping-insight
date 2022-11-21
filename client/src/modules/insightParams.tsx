/* eslint-disable @typescript-eslint/default-param-last */
import dayjs from 'dayjs';

type InsightParamsAction = ReturnType<typeof setInsightParams>;

interface InsightParamsState {
  requiredParams: RequiredParams;
  optionalParams: OptionalParams;
}
// 파라미터 기본값
const initialState: InsightParamsState = {
  requiredParams: {
    startDate: dayjs().subtract(7, 'days').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
    timeUnit: 'date',
    category: '50000003',
    keyword: '',
  },
  optionalParams: {
    device: '',
    gender: '',
    ages: [],
  },
};

export const SET_INSIGHT_PARAMS = 'insightParams/SET_INSIGHT_PARAMS';

export const setInsightParams = (
  paramType: keyof InsightParamsState,
  paramKey: keyof RequestParams,
  payload: ValueType | Array<ValueType>,
) =>
  ({
    type: SET_INSIGHT_PARAMS,
    paramType,
    paramKey,
    payload,
  } as const);

export default function reducer(
  state = initialState,
  { type, paramType, paramKey, payload }: InsightParamsAction,
): InsightParamsState {
  switch (type) {
    case SET_INSIGHT_PARAMS:
      return {
        ...state,
        [paramType]: {
          ...state[paramType],
          [paramKey]: payload,
        },
      };
    default:
      return state;
  }
}
