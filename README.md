# React Password generator test task

## Installation:

Please checkout code from the Github repo:
https://github.com/oerbyy/pw-generator-test

<code>npm i <br>
npm start</code>

## Requirements (by client):

Create ‘Password generator’ component. 

Description
General component structure is: input(type text) where generated password will be stored. Copy button inside the input in order to copy generated password. Input(type range) for selecting character length for the password. Inputs(type checkbox) for selecting different password generator options:
- ‘Include Lowercase’
- ‘Include Uppercase’
- ‘Include Numbers’
- ‘Include Symbols’

At least on of the options above should be selected, so user can’t unselect all of them. By default ‘Include Lowercase’ is selected.

‘Generate’ button which triggers actual password generation.
Every time you click ‘Generate’ button - new password should be generated based on selected parameters.

Images for better understanding of what should be done:
https://prnt.sc/5aORmPCsZgA3 - default view
https://prnt.sc/X3LB_0lV52tr- generated password using ‘Lowercase’ and ‘Number’ filters + character length set to 10

Acceptance criteria:
1) All functionality from the description above is done
2) Use React hooks for internal component state(useState)
3) Use Functional component type
4) Ideally implement it using ‘React create app’ or any other way you prefer
5) Would be nice to add some ‘handy’ and ‘nice’ styling using SASS/SCSS
