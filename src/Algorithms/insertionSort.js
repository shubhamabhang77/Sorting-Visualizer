
function insertionSort(array, arrayBars){
    let temp, i, j;
    let length = array.length
    
    console.log(arrayBars[1])


    for(i = 1; i < length; i++){
        temp = array[i]
        for(j = i-1; j >= 0; j--){
            setTimeout(() => {
                arrayBars[i].style.backgroundColor = "red";
                arrayBars[j].style.backgroundColor = "red";
            }, 5)
            if(array[j+1] < array[j]){
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp;
                setTimeout(()=> {
                    arrayBars[i].style.backgroundColor = "black";
                    arrayBars[j].style.backgroundColor = "black";
                 }, 5)
            }
            else{
                setTimeout(() =>  {
                    arrayBars[i].style.backgroundColor = "#008CBA";
                    arrayBars[j].style.backgroundColor = "#008CBA";
                 }, 5)
                
    
                break
            }

        }
    }
    return array;
}


// function func(array, whole){
//     if(){
//         clearInterval();
//     }
// }







export default insertionSort;