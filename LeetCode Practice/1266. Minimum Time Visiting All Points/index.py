class Solution(object):
    def minTimeToVisitAllPoints(self, points):
        result = 0

        for i in range(1, len(points)):
            result += max(abs(points[i][0] - points[i - 1][0]), 
                         abs(points[i][1] - points[i - 1][1]))

        return result
        
        """
        :type points: List[List[int]]
        :rtype: int
        """
        
def minTimeToVisitAllPoints(self, points):
    # Initialize the result variable
    res = 0

    # Iterate over the points, starting from the second point
    for i in range(1, len(points)):
        # Calculate the absolute difference in x and y coordinates between consecutive points
        # The issue was here: missing closing parenthesis
        res += max(abs(points[i][0] - points[i - 1][0]),  # <--- Missing parenthesis here
                   abs(points[i][1] - points[i - 1][1]))

    # Return the total time
    return res
