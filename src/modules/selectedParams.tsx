/* eslint-disable @typescript-eslint/default-param-last */
import moment from 'moment';

type SelectedParamsAction = ReturnType<typeof setParams>;

// 기본값
const initialState: RequestParams = {
  startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
  endDate: moment().format('YYYY-MM-DD'),
  timeUnit: 'date',
  category: '50000003',
  keyword: '',
  device: '',
  gender: '',
  ages: [],
};

export const SET_PARAMS = 'selectedParams/SET_PARAMS';

export const setParams = (
  key: keyof RequestParams,
  payload: ValueType | Array<ValueType>,
) =>
  ({
    type: SET_PARAMS,
    key,
    payload,
  } as const);

export default function reducer(
  state = initialState,
  { type, key, payload }: SelectedParamsAction,
): RequestParams {
  switch (type) {
    case SET_PARAMS:
      return {
        ...state,
        [key]: payload,
      };
    default:
      return state;
  }
}
