
function selectionSort(array){
    let i, temp, min_index, min_element, j;
    const animations = [];

    const length = array.length
    for(i = 0; i < length; i++){
        min_element = array[i]
        min_index = i
        for(j = i+1; j < length; j++){

            animations.push(['c', min_index, j])
            animations.push(['c', min_index, j])

            if(min_element > array[j]){
                min_element = array[j]
                min_index = j
            }
        }

        
        temp = array[min_index]
        array[min_index] = array[i]
        array[i] = temp
        
        animations.push(['s', i, min_index, array[i], array[min_index]])
        animations.push(['s', i, min_index])


    }
    return [array, animations];
}


export default selectionSort;