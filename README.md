## MV Coding Challenge

Language: React js.

URL: https://mv-coding-challenge.herokuapp.com/#/

Website homepage includes header and list topic. And create post page can create a topic.

## Homepage

### Header 

 - On the left is the go home button.
 - On the right is the create post button.

### List topic
 - List of many card item. And just show 20 items with the heighest vote.
 - Card item:
   + Arrow Up: have color blue and click will up vote.
   + Arrow Down: have color pink and click will up down vote.

## Creaste post page
- Input title is required. When input title have value, button post remove disabled.
- When click button post, will create a topic and go to homepage.

## Hows and whys of your implementation and the assumptions you are making.
- In a project i had used redux, redux-thunk, react-router, bootstrap and material-ui.
 + bootstrap and material-ui: user interface development.
 + redux and redux-thunk: manage state and execute actions. actions are create post, vote up, vote down. 
 + react-router: React Router keeps your UI in sync with the URL.
