// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

// Starting correct way to document Git commits.

class MultiplicatorUnitFailure extends Error {}
// Created the function MultiplicatorUnitFailure which is the parent to Error.

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// Created the function reliableMultiply which will take to variables (a,b).
function reliableMultiply(a, b) 
{
  while (true)// Created a while loop so as long as the statement inside the loop is (true) it will keep runing the loop. 
  {
    try// Added a try tag to return the (a,b) back to primitiveMultiply.
    {
      return primitiveMultiply(a, b);
    } catch (exception)// Added a catch exception inside the while loop so if there is something inside the (a,b) it will do whatever is in the catch.
    {
      if (!(exception instanceof MultiplicatorUnitFailure))// Added an if statement so if there is an exception inside of MultiplicatorUnitFailure.
      {
        throw exception;
      }
    }
  }
}
