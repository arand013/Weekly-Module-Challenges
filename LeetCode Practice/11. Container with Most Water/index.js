/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    // Initiate the pointers and Max Area 
        let max_Area = 0;
        let left = 0;
        let right = height.length - 1; 
    
    // Loop both ends
        while( left < right){
    
    // Create temp area that mutiplies both pointers using the min of both pointers only 
    // Then compare area with max area and set it as new Max 
            let area = Math.min(height[left], height[right]) * (right - left) 
            max_Area = Math.max(max_Area, area)
    
    // As long as left pointer is still less than right increment else decrement
            if( height[left] < height[right] ){
                left++
            } else {
                right-- 
            }
        }
    
        return max_Area;  
    }; 