import java.util.Arrays;

public class replaceElements {
    public int[] replaceElements(int[] arr) { 
        // Create a new array to store the result, initialized with -1
        final int[] result = new int[arr.length]; 
        Arrays.fill(result, -1); 
        // Initialize currentMax to -1, to keep track of the maximum element seen so far
        int currentMax = -1; 
        // Iterate through the input array in reverse order
        for(int i = arr.length -1; i >= 0; i-- ){ 
            // Set the current result element to the current maximum
            result[i] = currentMax; 
            // Update currentMax to be the maximum of the current element and the previous maximum
            currentMax = Math.max(currentMax, arr[i]); 
        } 
        // Return the resulting array
        return result; 
    } 

    public static void main(String[] args) {
        replaceElements solution = new replaceElements();
        int[] arr = {17, 18, 5, 4, 6, 1, 16};
        int[] result = solution.replaceElements(arr);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}