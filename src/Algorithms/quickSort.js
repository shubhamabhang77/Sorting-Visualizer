
export default function getQuickSortAnimations(array){
    const animations = [];
    const length = array.length
    quickSort(array, 0, length-1, animations);

    return [array, animations];
}



function quickSort(array, start, end, animations){
    let pIndex
    if(start < end){
        pIndex = partition(array, start, end, animations)
        quickSort(array, start, pIndex-1, animations)
        quickSort(array, pIndex+1, end, animations)
        
    }
}

function partition(array, start, end, animations){
    let i = 0
    let pivot = array[end]
    let temp
    let pIndex = start
    for(i = start; i < end; i++){
        animations.push(['c', i, pIndex, end])
        animations.push(['c', i, pIndex, end])

        if(array[i] < pivot){

            animations.push(['s', pIndex, i, array[i], array[pIndex]])
            animations.push(['s', pIndex, i])

            temp = array[i]
            array[i] = array[pIndex]
            array[pIndex] = temp
            pIndex++;
        }
    }

    animations.push(['s', end, pIndex, array[pIndex], array[end]])
    animations.push(['s', end, pIndex])

    temp = array[end]
    array[end] = array[pIndex]
    array[pIndex] = temp
    return pIndex
}




