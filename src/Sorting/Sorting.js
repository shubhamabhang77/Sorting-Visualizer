import React from "react";
import "./Sorting.css";
import mergeSort from "../Algorithms/mergeSort";
import bubbleSort from "../Algorithms/bubbleSort";
import insertionSort from "../Algorithms/insertionSort.jsx";
import quickSort from "../Algorithms/quickSort";

const COMPARISON_COLOR = "green"
const SWAP_COLOR = "red"
const ORIGINAL_COLOR = "#008CBA"
const AUTOMATION_SPEED = 2
const ARRAY_SIZE = 100

class Sorting extends React.Component{
    
    constructor(){
        super();
        this.state = {
            array: []
        }; 
        this.resetArray = this.resetArray.bind(this)
        this.mergeSort = this.mergeSort.bind(this)
        this.quickSort = this.quickSort.bind(this)
        this.insertionSort = this.insertionSort.bind(this)
        this.bubbleSort = this.bubbleSort.bind(this)
    }
    

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        let i = ARRAY_SIZE;
        while(i--){
            array.push(randomIntFromInterval(5, 500))
        }
        this.setState({array})
    }
    mergeSort(){
        console.log(this.state.array)
        const sortedArray = mergeSort(this.state.array)
    }
    quickSort(){
        const sortedArray = quickSort(this.state.array)
    }
    bubbleSort(){
        const sortedArray = bubbleSort(this.state.array)
    }
    insertionSort(){
        let arrayBars = document.getElementsByClassName("array-bar")
        const testSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const [sortedArray, animations] = insertionSort(this.state.array, arrayBars);

        console.log(sortedArray)

        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");
        
        const length = animations.length
        for(let i = 0; i < length; i++){
            const colorChange = (i % 2 === 0)
            const barOne = animations[i][1];
            const barTwo = animations[i][2];
            const barOneStyle = arrayBars[barOne].style
            const barTwoStyle = arrayBars[barTwo].style
            
            if(colorChange){
                if(animations[i][0] === 'c'){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = COMPARISON_COLOR
                        barTwoStyle.backgroundColor = COMPARISON_COLOR
                    }, i * AUTOMATION_SPEED)
                }
                else if(animations[i][0] === 's'){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = SWAP_COLOR
                        barTwoStyle.backgroundColor = SWAP_COLOR
                        barOneStyle.height = animations[i][3] + 'px'
                        barTwoStyle.height = animations[i][4] + 'px'
                    }, i * AUTOMATION_SPEED)

                }
            }
            else {
                if(animations[i][0] === 'c'){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = ORIGINAL_COLOR
                        barTwoStyle.backgroundColor = ORIGINAL_COLOR
                    }, i * AUTOMATION_SPEED)
                }
                else if(animations[i][0] === 's'){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = ORIGINAL_COLOR
                        barTwoStyle.backgroundColor = ORIGINAL_COLOR
                    }, i * AUTOMATION_SPEED)
                }
            }
        }
    }


    render(){

        return(
            <div>
                <div className="button-container">
                 <button id="button" onClick={this.resetArray}>reset the array</button>
                 <button id="button" onClick={this.mergeSort}>Merge Sort</button>
                 <button id="button" onClick={this.quickSort}>Quick Sort</button>
                 <button id="button" onClick={this.bubbleSort}>Bubble Sort</button>   
                 <button id="button" onClick={this.insertionSort}>Insertion Sort</button>
                </div>
                


                <div className="array-container" id="whole">
                    {this.state.array.map((value, id) => (
                        <div
                            className="array-bar" 
                            id="element"
                            key={id} 
                            style={{height: value}}
                        >
                        </div>
                    ))}
                </div>
                
               
            </div>
        )
    }
}


function randomIntFromInterval(min, max){
    return Math.floor(Math.random() *  (max - min + 1) + min);
}


function testingAlgorithm(array1, array2){
    let i;
    if(array1.length === array2.length){
        for(i = 0; i < array1.length; i++){
            if(array1[i] !== array2[i]){
                return false
            }
        }
        if(i === array1.length){
            return true;
        }
    }
    else{
        return false
    }
}

export default Sorting;