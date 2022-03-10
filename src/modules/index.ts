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
};

const rootReducer = combineReducers({ selectedParams, insightData });

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

// Saga 실행 과정
// 1)Action Dispatch 2)Saga 미들웨어 실행(takeLatest) 3)비동기 통신(yield call)
// 4)통신 성공/실패에 따라 상응하는 액션 Dispatch(yield put) 5)상태 업데이트
export function* rootSaga(): Generator {
  yield all([insightDataSaga()]);
  // yield all : 미들웨어가 여러 이펙트를 병렬로 실행하고 모두 완료할 때까지 기다리도록 지시하는 이펙트
}
