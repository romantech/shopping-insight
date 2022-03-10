import { call, put, takeLatest } from 'redux-saga/effects';

import api from 'api/index';
import { AxiosResponse } from 'axios';
import {
  GET_DATA_REQUEST,
  getDataFailed,
  getDataSuccess,
} from '../insightData';

interface GetInsightData {
  type: string; // 액션 타입
  payload: RequestParams;
}

function* getInsightData(action: GetInsightData) {
  try {
    // yield all[call(...), call(...)] -> 병렬 처리 promise.all 과 동일. 프로미스가 하나라도 거절되면 모두 거절.
    // yield call(func, funcParams1, funcParams2) : 결과 반환할 때까지 대기(동기 실행)
    // 첫번째 파라미터엔 Promise 반환 함수, 두번째 파라미터엔 해당 함수에 들어갈 인자
    const { data }: AxiosResponse = yield call(
      api.shoppingInsightKeywordAge,
      action.payload,
    );

    yield put(getDataSuccess(data)); // API 호출 성공 시 action dispatch
  } catch (err) {
    yield put(getDataFailed(err as Error)); // API 호출 실패 시 action dispatch
  }
}
export default function* insightDataSaga(): Generator {
  yield takeLatest(GET_DATA_REQUEST, getInsightData);
  // yield takeLatest(...) : 가장 마지막(최신) 실행된 액션에 대해서만 핸들러를 실행
  // 이전 액션을 처리하는 동안 동일 타입의 새로운 액션이 dispatch 되면 기존 작업 무시하고 새로운 작업 시작
  // 첫번째 인자(액션 객체)가 들어오면, 두번째 인자(함수) 실행
}
