#Task

Write a Person class with an instance variable, age, and a constructor that takes an integer, intialAge, as a parameter. The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as initialAge, the constructor should set age to 0 and print `Age is not valid, setting age to 0.`. In addition, you must write the following instance methods:

1. yearPasses() should increase the  instance variable by 1.
2. amIOld() should perform the following conditional actions:
  - If age < 13, print `You are young.`.
  - If age is greater than or equal to 13 and age is less than 18, print `You are a teenager.`.
  - Otherwise, print `You are old.`.