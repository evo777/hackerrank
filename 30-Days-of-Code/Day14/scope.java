import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
    private int[] elements;
    public int maximumDifference;

    // Add your code here

public Difference(int [] myElements)
{
this.elements = myElements;

}

public int computeDifference()
{

   int maxElement =elements[0];
   int minElement =elements[0];
   for(int k=1; k<this.elements.length; k++)
   {

     if(maxElement<Math.abs(elements[k]))
     {

       maxElement = elements[k];
     }
     if(minElement > Math.abs(elements[k]))
     {
       minElement = elements[k];
     }

   }

    maximumDifference = maxElement - minElement;

    return maximumDifference;
}


public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}