import { createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger,thunk]  //미들웨어가 여러개가 될 수 있기떄문에  배열형태에 추가

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;



//npm install redux-logger 미들웨어 설치
//스테이트가 변경될때마다 로그가 찍힌다.


//npm install --save redux-devtools-extension
//개발자도구에서 redux 사용가능


//npm install redux-thunk 
//텅크로 미들웨어 추가
//thunk가 있어서 액션에서 디스패치를 리턴 기능 사용 가능