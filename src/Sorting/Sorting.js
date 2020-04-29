import React from "react";
import "./Sorting.css";
import mergeSort from "../Algorithms/mergeSort";
import bubbleSort from "../Algorithms/bubbleSort";
import insertionSort from "../Algorithms/insertionSort";
import quickSort from "../Algorithms/quickSort";

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
        this.changeArray = this.changeArray.bind(this)
    }
    

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        let i = 200;
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
        const sortedArray = insertionSort(this.state.array, arrayBars);
        
        
        console.log(sortedArray)

        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");
        
        // for(let i = 0; i < 200; i++){
        //     setTimeout(() =>{ 
        //         console.log("shubham")
        //         const len = animations[i].length;
        //         for(let j = 0; j < len; j++){
        //             const index1 = animations[i][j][1];
        //             const index2 = animations[i][j][2];

        //             if(animations[i][j][0] === 'c'){
        //                 arrayBars[index1].style.backgroundColor = "red"
        //                 arrayBars[animations[i][j][2]].style.backgroundColor = "red"
        //                 arrayBars[index1].style.backgroundColor = "#008CBA"
        //                 arrayBars[index2].style.backgroundColor = "#008CBA"
        //             }
        //             else if(animations[i][j][0] === 's'){
        //                 arrayBars[index1].style.backgroundColor = "black"
        //                 arrayBars[index2].style.backgroundColor = "black"
        //                 arrayBars[index1].style.height = this.state.array[index1]
        //                 arrayBars[index2].style.height = this.state.array[index2]
        //                 arrayBars[index1].style.backgroundColor = "#008CBA"
        //                 arrayBars[index2].style.backgroundColor = "#008CBA"
                            

        //             }
        //         }
        //     }, 5000)
        // }

        console.log("done")
    }

    changeArray(){
        const temp = [];
        for(let i = 0; i < 200; i++){
            temp.push(i)
            this.setState({array: temp})
        }
    }
    render(){

        let arrayBars = document.getElementsByClassName("array-bars")
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