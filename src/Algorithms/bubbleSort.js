import React from "react";

function bubbleSort(array){
    let temp, i, j;
    let length = array.length
    const animations = [];
    let flag = 0
    for(i = 0; i < length-1; i++){
        for(j = 0; j < length-(i+1); j++){
            
            animations.push(['c', j+1, j])
            animations.push(['c', j+1, j])

            if(array[j+1] < array[j]){

                animations.push(['s', j+1, j, array[j], array[j+1]])
                animations.push(['s', j+1, j])
                
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp;
                flag = 1            
            }
        }
        if (flag === 0){
            break
        }
    }
    return [array, animations];
}











export default bubbleSort;