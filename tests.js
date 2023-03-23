const maxArea = (height)=>{
    //we define 2 pointers going inside and the result var
    let start = 0
    let end = height.length -1
    let result = 0

    while(start < end){
        //we calculate the smaller side
        let smallestSide = Math.min(height[start], height[end])
        //we calculate the area b * h ((base end - start) * height)
        let area = (end - start) * smallestSide
        //we store the highest area
        if( area > result) result = area
        //we move the smallest pointer
        if( height[start] > height[end]) end --
        else start ++
    }
    return result
}
console.log(maxArea([4,3,2,1,4]))
