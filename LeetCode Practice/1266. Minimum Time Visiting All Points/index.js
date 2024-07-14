var minTimeToVisitAllPoints = function(points) {
    let res = 0;

    for (let i = 1; i < points.length; i++) {
        res += Math.max(Math.abs(points[i][0] - points[i - 1][0]), 
                       Math.abs(points[i][1] - points[i - 1][1]));

    }

    return res;
};



function minTimeToVisitAllPoints(points) {
    // Initialize the result variable to 0
    let res = 0;

    // Loop through each point in the array, starting from the second point
    for (let i = 1; i < points.length; i++) {
        // Calculate the absolute difference in x coordinates between consecutive points
        res += Math.max(Math.abs(points[i][0] - points[i - 1][0]), 
                        // Calculate the absolute difference in y coordinates between consecutive points
                        Math.abs(points[i][1] - points[i - 1][1]));

    }

    // Return the total time
    return res;
}