import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import selectedParams from './selectedParams';
import insightData from './insightData';
import insightDataSaga from './saga/insightDataSaga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['selectedParams', 'insightData'],
  // blacklist: [], // 블랙리스트에 있는 항목을 제외하고 모두 포함
};

const rootReducer = combineReducers({ selectedParams, insightData });

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

// Saga 실행 과정
// ⑴Action Dispatch ⑵Saga 미들웨어 실행(takeLatest) ⑶비동기 통신(yield call)
// ⑷통신 성공/실패에 따라 상응하는 액션 Dispatch(yield put) ⑸상태 업데이트
export function* rootSaga(): Generator {
  yield all([insightDataSaga()]); // effect 등록
}

/**
 * Thunk vs Saga
 * 공통점 : dispatch() 메서드를 통해 store 로 향하는 액션을 가로채는 미들웨어
 * Thunk : 액션 생성자가 함수를 반환하고, 해당 함수내에서 비동기 작업 진행(const fetch = (params) => (dispatch) => {...})
 * Saga : ES6의 제너레이터 문법을 이용하며, Dispatch 하는 액션을 감지하는 리스너 형태로 동작
 */
