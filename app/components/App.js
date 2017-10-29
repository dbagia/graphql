import React from 'react';
import { Observable } from 'rxjs/Observable';
require('./App.css');
import {initiate} from './brackets.js'

/*export default () => <h1>Hello World</h1>;*/


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

    console.log(initiate())
    /*let observable = Observable.create(function subscribe(observer){
      let id = setInterval(()=>{
        observer.next('hi')
      },1000)
    });


    observable.subscribe((x)=>{
      console.log(x);
    })*/
  }
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

