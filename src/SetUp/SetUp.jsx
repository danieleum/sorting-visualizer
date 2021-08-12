import {Component} from 'react';
import './SetUp.css';
import * as sortBubble from '../Algorithm/bubbleSort.js';
import * as sortSelection from '../Algorithm/selectionSort.js';
import * as sortInsertion from '../Algorithm/insertionSort.js';
import * as sortMerge from '../Algorithm/mergeSort.js';

export default class SetUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.getArray();
  }

  reset() {
    this.getArray();
  }

  getArray() {
    let array = [];
    let num = 0;
    for (let i = 0; i < 100; i++) {
      num = getRandomNumber(5, 600);
      array.push(num);
    }
    this.setState({array});
  }

  doBubbleSort() {
    const animations = sortBubble.bubbleSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      let bars = document.getElementsByClassName("array-value");
      let change = (i % 4 < 2);
      if (change) {
        let [first, second] = animations[i];
        let firstBar = bars[first].style;
        let secondBar = bars[second].style;
        let color = i % 4 === 0 ? 'red' : 'aqua';
        setTimeout(() => {
          firstBar.backgroundColor = color;
          secondBar.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          let [barOneIdx, newHeight] = animations[i];
          let barOneStyle = bars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    
    }
  }

  doSelectionSort() {
    const animations = sortSelection.selectionSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      let bars = document.getElementsByClassName("array-value");
      let [first, second, min, min1, min2, j, j1, j2] = animations[i];

      if (min || j) {
        let firstBar = bars[first].style;
        let color;
        if ((j1 && !j2)) {
          color = 'red';
        } else if ((min && min1 && !min2)) {
          color = 'black';
        } else {
          color = 'aqua';
        }
        setTimeout(() => {
          firstBar.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          let barOneStyle = bars[first].style;
          barOneStyle.backgroundColor = 'aqua';
          barOneStyle.height = `${second}px`;
        }, i * 1);
      }
    }
  }

  doInsertionSort() {
    const animations = sortInsertion.insertionSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      let bars = document.getElementsByClassName("array-value");
      let [first, second, third, fourth, fifth, sixth, seventh, eighth] = animations[i];
      
      if (third || sixth) {
        let bar = bars[first].style;
        let color;
        if (third && fourth && !fifth) {
          color = "black";
        } else if (third && !fourth && fifth) {
          color = "aqua";
        } else if (sixth && seventh && !eighth) {
          color = "red";
        } else if (sixth && !seventh && eighth) {
          color = "aqua";
        }
        setTimeout(() => {
          bar.backgroundColor = color;
        }, i * 10);
        
      } else {
        /*
        overwrite the height here
        */
        setTimeout(() => {
          let bar = bars[first].style;
          bar.backgroundColor = "brown";
          bar.height = `${second}px`;
          bar.backgroundColor = "aqua";
        }, i * 10);
       
      }
    }
  }

  doMergeSort() {
    
    let grid = this.state.array;
    let animation = sortMerge.mergeSort(grid);
    
    for (let i = 0; i < animation.length; i++) {
      let bars = document.getElementsByClassName("array-value");
      let [first, second, third, fourth, fifth] = animation[i];
      
      let color;
      if (third) {
        let barOne = bars[first].style;
        let barTwo = bars[second].style;
        if (fourth && !fifth) {
          color = "red";
        }
        if (!fourth && fifth) {
          color = "aqua";
        }
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          let bar = bars[first].style;
          bar.height = `${second}px`;
        }, i * 10);
      }
    }
    
    
    
  }

  render() {
    const {array} = this.state;
    console.log(array);

    return (
      <div className="set">
        <div className='buttons'>
          <div className="reset"> 
            <button onClick={() => this.reset()}> Reset Array </button>
          </div>
          <div className="bubble-sort">
            <button onClick={() => this.doBubbleSort()}> Bubble Sort </button>
          </div>
          <div className="quick-sort">
            <button onClick={() => this.doSelectionSort()}> Selection Sort </button>
          </div>
          <div className="insertion-sort">
            <button onClick={() => this.doInsertionSort()}> Insertion Sort </button>
          </div>
          <div className="merge-sort">
            <button onClick={() => this.doMergeSort()}> Merge Sort </button>
          </div>
        </div>
        <div className="bars">
          {array.map((value, index) => (
            <div 
              className="array-value" 
              key={index} 
              style={{height: `${value}px`, backgroundColor: 'aqua'}}>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

/*
  Got the formula to get random numbers from "https://stackoverflow.com/questions/45175836/random-number-using-react-js"
*/
function getRandomNumber(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

/*
function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
*/



