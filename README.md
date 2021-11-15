This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It contains everything needed to get started on our take-home challenge


In the project directory
first run
### `npm install`

then run
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

I used the available basic react app provided to create a search function for data provided through CSV files

functionality
1.  This function allows any amount of parameters provided through input fields
2.  limited input(rating, price, distance) fileds have pop up messages when values provided are out of bounds
3.  function will retun a maximum of 5 results and if no values are provided will return top 5 results based on provided "Best match" criteria of the whole list
4.  results are sorted by Best Match criteria holding an "and" relationship.


testing
1. provided only partial string matches for names (case in sensitive) and output was in line with expectations
2. provided more then one parameter and output was in line with expectations


Assumptions 
1. to create a function that will filter and sort through data provided and output results to fornt end to be manipulated.
2. time and space complexity were not accounted for in implementing this function due to the smaller size of data
3. Papaparse was used to extract data from files into workable arrays resulting in a no database function
4. parsing data to a database and then extracting from the databse would be ideal but not specified nor implemented
5. react state can be used to change, store and pass parameters to the function


