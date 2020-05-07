import React from "react";
import "./Sorting.css";
import getmergesortanimations from "../Algorithms/mergeSort";
import bubbleSort from "../Algorithms/bubbleSort";
import insertionSort from "../Algorithms/insertionSort";
import getQuickSortAnimations from "../Algorithms/quickSort";
import selectionSort from "../Algorithms/selectionSort";
import Panel from "./Panel";
import Footer from "./Footer.js"



const COMPARISON_COLOR = "green"
const SWAP_COLOR = "red"
const ORIGINAL_COLOR = "#008CBA"
let ARRAY_SIZE = 200
let AUTOMATION_SPEED = 1
let flag = false

class Sorting extends React.Component{
    
    constructor(){
        super();
        this.state = {
            array: [],

        }; 
        this.resetArray = this.resetArray.bind(this)
        this.mergeSort = this.mergeSort.bind(this)
        this.quickSort = this.quickSort.bind(this)
        this.insertionSort = this.insertionSort.bind(this)
        this.bubbleSort = this.bubbleSort.bind(this)
        this.selectionSort = this.selectionSort.bind(this)
        this.getText = this.getText.bind(this)
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
        let arrayBars = document.getElementsByClassName("array-bar")
 
        const [sortedArray, animations] = getmergesortanimations(this.state.array)
        const testSortedArray = this.state.array.slice().sort((a, b) => a-b)
        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");

        const length = animations.length
        for(let i = 0; i < length; i++){
            const colorChange = (i % 3 !== 2)
            if(colorChange){
                const barOne = animations[i][1];
                const barTwo = animations[i][2];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = (i % 3 === 0) ? SWAP_COLOR : ORIGINAL_COLOR
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i*AUTOMATION_SPEED)
            }
            else{
                const barOne = animations[i][1];
                const barOneStyle = arrayBars[barOne].style;

                setTimeout(() => {
                    barOneStyle.height = animations[i][2] + 'px'
                }, i*AUTOMATION_SPEED)
            }
            if(i === (length-1)){
                setTimeout(() => {
                    this.setState({array: sortedArray})
                }, (i+1) * AUTOMATION_SPEED)
            }
        }

    }
    quickSort(){
        let arrayBars = document.getElementsByClassName("array-bar")
        const [sortedArray, animations] = getQuickSortAnimations(this.state.array)

        const testSortedArray = this.state.array.slice().sort((a,b) => a-b);

        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");


        const length = animations.length
        for(let i = 0; i < length; i++){
            const colorChange = (i % 2 === 0)
            const barOne = animations[i][1];
            const barTwo = animations[i][2];

            const barOneStyle = arrayBars[barOne].style;
            const barTwoStyle = arrayBars[barTwo].style;
            if(colorChange){
                if(animations[i][0] === 'c'){
                    const barThree = animations[i][3];
                    const barThreeStyle = arrayBars[barThree].style;

                    setTimeout(() => {
                        barOneStyle.backgroundColor = COMPARISON_COLOR  
                        barTwoStyle.backgroundColor = 'yellow'
                        barThreeStyle.backgroundColor = COMPARISON_COLOR
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
                    const barThree = animations[i][3];
                    const barThreeStyle = arrayBars[barThree].style;

                    setTimeout(() => {
                        barOneStyle.backgroundColor = ORIGINAL_COLOR
                        barTwoStyle.backgroundColor = ORIGINAL_COLOR
                        barThreeStyle.backgroundColor = ORIGINAL_COLOR
                    }, i * AUTOMATION_SPEED)
                }
                else if(animations[i][0] === 's'){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = ORIGINAL_COLOR
                        barTwoStyle.backgroundColor = ORIGINAL_COLOR
                    }, i * AUTOMATION_SPEED)
                }

            }
            if(i === (length-1)){
                setTimeout(() => {
                    this.setState({array: sortedArray})
                }, (i+1) * AUTOMATION_SPEED)
            }
        }
    }
    selectionSort(){
        let arrayBars = document.getElementsByClassName("array-bar")
        const testSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const [sortedArray, animations] = selectionSort(this.state.array, arrayBars);


        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");
        
        const length = animations.length
        for(let i = 0; i < length; i++){
            const colorChange = (i % 2 === 0)
            const barOne = animations[i][1];
            const barTwo = animations[i][2];
            const barOneStyle = arrayBars[barOne].style;
            const barTwoStyle = arrayBars[barTwo].style;
            
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
            if(i === (length-1)){
                setTimeout(() => {
                    this.setState({array: sortedArray})
                }, (i+1) * AUTOMATION_SPEED)
            }
        }

    }

    bubbleSort(){
        let arrayBars = document.getElementsByClassName("array-bar")
        const testSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const [sortedArray, animations] = bubbleSort(this.state.array, arrayBars);

        testingAlgorithm(testSortedArray, sortedArray) ? console.log("array is sorted properly") : console.log("array is not sorted properly");
        
        const length = animations.length
        for(let i = 0; i < length; i++){
            const colorChange = (i % 2 === 0)
            const barOne = animations[i][1];
            const barTwo = animations[i][2];
            const barOneStyle = arrayBars[barOne].style;
            const barTwoStyle = arrayBars[barTwo].style;
            
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
            if(i === (length-1)){
                setTimeout(() => {
                    this.setState({array: sortedArray})
                }, (i+1) * AUTOMATION_SPEED)
            }
        }
        
    }

    insertionSort(){
        let arrayBars = document.getElementsByClassName("array-bar")
        const testSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const [sortedArray, animations] = insertionSort(this.state.array, arrayBars);


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
            if(i === (length-1)){
                setTimeout(() => {
                    this.setState({array: sortedArray})
                }, (i+1) * AUTOMATION_SPEED)
            }
        }
    }

    getText(event){
        flag = true
        var x = document.getElementById("array-size").value
        var y = document.getElementById("speed").value
        if(isNaN(x)){
            alert('Please, Enter a number')
        }
        else if (x <= 400 & x >= 10){
            ARRAY_SIZE = Number(x)
            this.resetArray()
        }
        else{
            alert("Please, Enter Array Size a number between 10 and 1000")
        }
        if(isNaN(y)){
            alert('Please, Enter a number')

        }
        else if (y <= 2000 & y >= 1){
            AUTOMATION_SPEED = y
            this.resetArray()
        }
        else{
            alert("Please, Enter Automation Speed a number between 10 and 2000")
        }
    }
    

    render(){
        let x = document.getElementById("text")
        let tem, tem1;
        if(flag){
            tem = "The Array size is " + ARRAY_SIZE
            tem1 = "The Automation speed is " + AUTOMATION_SPEED
        }
        else{
            tem = "*Default size of Array is 200"
            tem1 = "*Default speed of Automation is 1"
        }
        return(
            <div>
                <div className="button-container">
                 <button id="button" float={"left"} onClick={this.resetArray}>Reset the Array</button>
                 <button id="button" onClick={this.mergeSort}>Merge Sort</button>
                 <button id="button" onClick={this.quickSort}>Quick Sort</button>
                 <button id="button" onClick={this.bubbleSort}>Bubble Sort</button>   
                 <button id="button" onClick={this.insertionSort}>Insertion Sort</button>
                 <button id="button" onClick={this.selectionSort}>Selection Sort</button>
                </div>
                <div className="second">
                    <div className="Panel" style={{float: "left"}}>
                        <label>Array Size:       </label><input type="text" id="array-size"></input><br></br>
                        <label>Automation Speed: </label><input type="text" id="speed"></input>
                        <button id="submit" onClick={this.getText}>Enter</button>
                        <p>{tem}<br></br>{tem1}</p>
                    </div>
                    <div className="array-container" id="whole" style={{float:"right"}}>
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
                

                
                
               <Footer></Footer>
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
