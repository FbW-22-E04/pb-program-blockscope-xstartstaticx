# On the block

#### 1. Updater
* Create a new variable and call it `determiner`
* Give `determiner` a random value between -100 and 100 (change it to experiment)
* Create a 2nd variable called `x`
* Depending on the value of `determiner`, assign a value to `x`. 
    - If `determiner` is less than 0, `x`'s value should be "Less than 0"
    - If `determiner` is greater or equal 0, `x`'s value should "Greater or equal to 0".

#### 2. New Variables 
* Create a new variable called `updater`
* Depending on the value of `determiner`
    * If determiner is greater or equal to 0
        * set `updater` to "Greater or equal to 0"
        * create another variable called `message`
        * assign a value of "Positive Integer" to `message`
        * print out `message` with this format "message: [value of message]". 
    * If determiner is less than 0, assign `updater`' the value "Less than 0".
* Print out the value of `updater` with this format "updater: [value of updater]".

* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

#### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example.


[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-program-blockscope/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-program-blockscope/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-program-blockscope/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run

[//]: # (autograding info end)