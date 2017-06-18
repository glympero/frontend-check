/**
 * Created by glympero on 18/06/2017.
 */
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { SET_LOADING_TRUE, LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, SET_LOADING_FALSE } from './constants'
import { loadCars, carsLoaded, commentsSucces, loadingFalse, resetState } from './actions'
import { browserHistory } from 'react-router'

import request from '../../utils/request'
import { makeSelectCars } from './selectors'


export function* getAPI(){
  const cars = yield select(makeSelectCars())

  const requestURL = `https://simplybook.herokuapp.com/fe/search`
  //const requestURL = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"${location}")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;


  var spanPickUpLocation = document.getElementById('spanPickUpLocation')
  var spanPickUpDate = document.getElementById('spanPickUpDate')
  var spandPickUpTime = document.getElementById('spanPickUpTime')
  var spanReturnDate = document.getElementById('spanreturnDate')
  var spanReturnTime = document.getElementById('spanreturnTime')

  if (cars.pickUPLocation==''){
    yield put(loadingFalse())
    spanPickUpLocation.classList.remove("out")
    spanPickUpLocation.classList.add("validation")
  }else{
    spanPickUpLocation.classList.add("out")
    spanPickUpLocation.classList.remove("validation")
  }
  if (cars.pickUpDate==''){
    yield put(loadingFalse())
    spanPickUpDate.classList.remove("out")
    spanPickUpDate.classList.add("validation")
  }else{
    spanPickUpDate.classList.add("out")
    spanPickUpDate.classList.remove("validation")
  }
  if (cars.pickupTime==''){
    yield put(loadingFalse())
    spandPickUpTime.classList.remove("out")
    spandPickUpTime.classList.add("validationTime")
  }else{
    spandPickUpTime.classList.add("out")
    spandPickUpTime.classList.remove("validationTime")
  }
  if (cars.returnDate==''){
    yield put(loadingFalse())
    spanReturnDate.classList.remove("out")
    spanReturnDate.classList.add("validation")
  }else{
    spanReturnDate.classList.add("out")
    spanReturnDate.classList.remove("validation")
  }

  if (cars.returnTime==''){
    yield put(loadingFalse())
    spanReturnTime.classList.remove("out")
    spanReturnTime.classList.add("validationTime")
  }else{
    spanReturnTime.classList.add("out")
    spanReturnTime.classList.remove("validationTime")

    try {
      const getcar = yield call(request, requestURL, {
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'X-Header-Auth':'3SjqbK7bpU#h95ht7HQECT52%$B#%zc45QjB5@wgAN&@f5en98eX&YCa8QzwCpf^5DsGwNASZQ3WwdCccq2@@$'
        }
        // body:JSON.stringify({
        //   "pickUPLocation": cars.pickUPLocation,
        //   "returnLocation": cars.returnLocation,
        //   "pickUPDateTime": cars.pickUpDate+cars.pickupTime,
        //   "returnDateTime": cars.returnDate+cars.returnTime,
        //   "SpecialEquip":"0"
        // })
      },)
      if(getcar.source){
        yield put(loadingFalse())
      }
      else{
        try{
          console.log(getcar);
          var datos=Object.keys(cars)
          datos.map((item)=>{ put(resetState(item)) })
        }
        catch(error){
          console.log(error);
        }
        yield put(carsLoaded(getcar))
        browserHistory.push('/available')
      }

    }catch(err){
      console.log(err);
    }
  }
}
export function* getAPIComments(){

  const requestURL = `http://localhost:8000/commentsApi/`

  try{
    const getcomment = yield call(request, requestURL)
    yield put(commentsSucces(getcomment))
  }catch(err){
    console.log(err);
  }
}

// Individual exports for testing
export function* getCars() {
  const watcher = yield takeLatest(SET_LOADING_TRUE, getAPI)
  // See example in containers/HomePage/sagas.js
}

export function* getComments(){
  const watcher = yield takeLatest(LOAD_COMMENTS, getAPIComments)
  yield take(LOAD_COMMENTS_SUCCESS)
  yield cancel(watcher)
}

// All sagas to be loaded
export default [
  getCars,
];
