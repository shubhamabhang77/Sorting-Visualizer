import React from "react";

function bubbleSort(array){
    let temp, i, j;
    let length = array.length
    const animations = [];

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
            }
        }
    }
    return [array, animations];
}











export default bubbleSort;