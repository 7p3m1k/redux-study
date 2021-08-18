import React from 'react'
import { connect } from 'react-redux';
import { addSubscriber } from '../redux';//index는 생략가능 매번 주소 넣기 귀찮으니까 index.js에 주소를 넣어줌

//rafce  <<  Subscribers함수 단축어

const Subscribers = ({count, addSubscriber}) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={()=> addSubscriber()}>구독하기 !</button>
    </div>
  )
}

const mapStateToProps = ({subscribers}) => {
  return {
    count: subscribers.count
  }
}

//mapDispatchToProps 는 함수형(1) 또는 오브젝트형(2)으로 할 수있다.

//1
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: ()=> dispatch(addSubscriber())
//   }
// }

//2
const mapDispatchToProps = {
  addSubscriber
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscribers)


