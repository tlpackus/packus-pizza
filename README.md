# _Packus Pizza Project/ Practice_

#### _-This Project was meant to demonstrate my knowledge of Constructors and Prototypes.-_

#### By _**Theron Packus**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Terminal_
* _Visual Studio Code_
* _JavaScript_
* _jQuery_
* _Dillinger_

## Description

_This website was built to take a users pizza order and give back a receipt with an expected total. To do this I'm going to demonstrate my knowledge of JavaScript's Constructors and Prototypes. The user should be able to enter their name, preferred size, and desired toppings for their pizza. Then once submitted, get a receipt back with their name, order, and the amount owed. Give it a try by acquiring the Installation Requirements and following the Setup instructions below_

## Installation Requirements
- Requires Visual Studio Code Installation
- Requires Terminal Installation
- Requires "Live Server" Extension in VSCode
- Requires Google Chrome

## Setup
- Click Code at the top right of the repository
- Copy that url
- Make a new directory in Terminal by typing "mkdir pizza"
- Change into that directory by entering "cd pizza"
- Clone the url into that directory using "git clone (paste url from repository)"
- Change into that cloned directory by entering "cd pizza"
- Type code . in terminal to open in VSCode
- Once in VSCode, make sure the explorer tab on the top left hand side of the window is selected
- Under "PIZZA" left click on index.html file
- Right click in the index HTML script
- Select "Open with Live Server" option
- This will open a Google Chrome Browser
- There you can see my webpage

## Tests
#### Describe: Pizza()
```
Test: "It should create an object called Pizza for taking name, toppings, size, and assign a start price"
Expect(let firstOrder = new Pizza("firstName", "cheese", "small").toEqual(Pizza {name: "firstName", topping: "cheese", size: "small", price: 3})
```
#### Describe: calcCost()
```
Test: "It should check the selected size and the selected toppings array length to sum the price"
Expect(Pizza.prototype.calcCost().toEqual)
```
#### Describe: mkReceipt()
```
Test: "It should take the customers name, selected
```
## Known Bugs

* _no bugs yet_
* _if you find any please email them to my email below and I'll get them fixed_

## License

[MIT](LICENSE.txt)

## Contact Information

_Theron Packus - tlpackus@gmail.com_