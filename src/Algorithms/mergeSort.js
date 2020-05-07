
// function mergeSort(array, start, end, mainarray, animations){


//     if(start === end){
//         let temp = []
//         temp.push(array[start])
//         return temp;
//     }

//     let A = [];
//     let i, left= [], right = [];
    
//     let mid = Math.floor((end - start)/2)

//     console.log("shbuham")
//     [left, animations] = mergeSort(array, start, start+mid, mainarray, animations);
//     [right, animations] = mergeSort(array, start+mid+1, end, mainarray, animations);

//     A = doMerging(left, right, A, mainarray, start, end, animations);
//     return [A, animations];
// }



// function doMerging(left, right, A, mainarray, start, end, animations){
//     let i = 0, j = 0, k = 0;
//     let length_left = left.length
//     let length_right = right.length
//     while(i < length_left && j < length_right){
//         animations.push(['c', start+i, start+j])
//         animations.push(['c', start+i, start+j])
//         if(left[i] < right[j]){
//             A.push(left[i++])
//         }
//         else if (left[i] >= right[j]){
//             A.push(right[j++])
//             animations.push(['s', start+i, start+j])
//             animations.push(['s', start+i, start+j])
//         }
//     } 
//     while(i < length_left){
//         animations.push(['c', start+i, start+j])
//         animations.push(['c', start+i, start+j])
//         A.push(left[i++])
//     }
//     while(j < length_right){
//         animations.push(['c', start+i, start+j])
//         animations.push(['c', start+i, start+j])
//         A.push(right[j++])
//     }
//     return A;
// }

function getmergesortanimations(array){
    
    const animations = [];    

    if (array.length <= 1) {return}
    let secondarray = [];
    secondarray = array.slice()

    mergeSort(array, 0, array.length - 1, secondarray, animations)
    return [secondarray, animations];
}


function mergeSort(mainarray, start, end, array, animations){

    if(start >= end){return}
    
    let mid = Math.floor(start + (end - start)/2)
    mergeSort(array, start, mid, mainarray, animations);
    mergeSort(array, mid+1, end, mainarray, animations);

    doMerging(mainarray, start, mid, end, array, animations);

}


function doMerging(array, start, mid, end, mainarray, animations){
    let i = start
    let j = mid+1
    let k = start;

    while(i <= mid && j <= end){

        animations.push(['c', i, j])
        animations.push(['c', i, j])
        if(array[i] <= array[j]){
            animations.push(['s', k, array[i]])
            mainarray[k++] = array[i++]
        }
        else{
            animations.push(['s', k, array[j]])
            mainarray[k++] = array[j++]
        }
    } 
    while(i <= mid){
        animations.push(['c', i, i])
        animations.push(['c', i, i])
        animations.push(['s', k, array[i]])
        mainarray[k++] = array[i++]
    }
    while(j <= end){
        animations.push(['c', j, j])
        animations.push(['c', j, j])
        animations.push(['s', k, array[j]])
        mainarray[k++] = array[j++]
    }


}






export default getmergesortanimations;
