
#  JavaScript Midterm

## Instructions:  

Using the files contained in this zip file, implement solutions for the questions below.  Each question has a folder associated with it
containing the file where you will write your code, and a second file that contains the Jasmine tests relevant to that question.
               
Question folders are as follows:
1. first-duplicate
2. search
3. computer
4. async

All tests can be run by opening test.html in your browser.  If you want to comment out some tests to make it easier to focus on the question that you are
working on, you are more than welcome to do so.  Other than commenting, do not modify the tests in any way.               

1.  Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
    
    Example:
      For array = [2, 3, 3, 1, 5, 2], the output should be
      firstDuplicate(a) == 3.
    
    There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
    
    For array = [2, 4, 3, 5, 1], the output should be firstDuplicate(array) == -1.


2.  Given an array of names, write a function named search which takes two parameters: a list of names
    and a string to search for, and returns an array of all the names that contain the specified string.
    Your function should be case insensitive.

    function search(nameList, searchTerm) {...}
   
    Example:
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'B') => ['Bryce', 'Brett', 'Benjamin']
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'br') => ['Bryce', 'Brett']
       search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'bry') => ['Bryce']

    Hint:  You can get an all uppercase copy of a string by calling .toUpperCase(), or an all lowercase copy by calling .toLowerCase()


3.  Implement a class named 'Computer' with the following properties and functions:
      Properties:
        make: string
        model: string
        driveCapacity: number
        batteryPercent: number
        status: boolean (true = on, false = off)

      Functions:
        constructor() --> should take 3 arguments: make, model, capacity and set the arguments to their
                         respective properties of the computer class (this.make, this.model, this.driveCapacity)
        
        getBatteryPercent() --> should return a string value of the batteryPercent property followed by a percent symbol
        
        getStatus() --> should return the string value of the status property, 'ON' if the computer
                        is on, 'OFF' if the computer is off


4.  This last question has to do with two topics, debugging and asynchronous JavaScript. A big part of your time as a developer will be spent 
    debugging code; either your own or someone else's. A broken implementation of two asynchronous calls have been provided for you, along with
    some tests. Fix all the broken tests and make sure the ones that work still work.
