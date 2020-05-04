
function insertionSort(array, arrayBars){
    let temp, i, j;
    let length = array.length
    const animations = [];

    
    for(i = 1; i < length; i++){
        for(j = i-1; j >= 0; j--){
            
            animations.push(['c', j+1, j])
            animations.push(['c', j+1, j])

            if(array[j+1] < array[j]){
                animations.push(['s', j+1, j, array[j], array[j+1]])
                animations.push(['s', j+1, j])
            
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp;            
            }
            else{
                break
            }
        }
    }
    return [array, animations];
}



export default insertionSort;