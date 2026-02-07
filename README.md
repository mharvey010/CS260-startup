# Reaction

[My Notes](notes.md)

Reaction is a game of testing your reaction time. Users log in and can start a game. A button is presented to the user and once the color of the button changes, they press the button. The application logs the time it took to press the button. The times are compared to other user's times which are displayed on a leaderboard. The user will also have the option to change the colors of the button.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Reaction is a simple game. Be faster than everyone else. Once you start the game, you are presented with a button on your screen with a color of your choice. Pay close attention, because as soon as the color changes, you need to press it as fast as you can. Log in and compete with other players for the number one spot as the fastest there is.

### Design

![Design image](reaction_rough_design.jpeg)

### Key features

- Real time leaderboard of all users on separate page
- Best time is saved
- User can change button colors
- Color combo suggestor

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - 4 HTML pages. Login page, game page, leaderboard page, and preferences/settings page.
- **CSS** - Simple and clean looking design. There will be an active timer for the game. Coloring and shaping of interactive objects.
- **React** - Controls for the game, navigating some UI elements, logging in page, and updating scores/times.
- **Service** - Backend server functionality for:
    - Storing scores
    - Pulling user settings
    - Retrieving high scores
    - Using the Lanyard API to grab a user's Discord presence. (API link: https://github.com/Phineas/lanyard)
- **DB/Login** - Storing user and their login info. Stores scores in database. A user must be logged in to see leaderboard.
- **WebSocket** - All users can see a public real time leaderboard displaying the best times. Updates as users improve their times.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.reactions.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Made 3 html pages: home page, game page, leaderboard page. They are fully completed.
- [x] **Proper HTML element usage** - Not sure how to describe what I did here, but I made sure I used all html tags properly
- [x] **Links** - Added menu links for all pages to interlink with one another.
- [x] **Text** - Every page has some sort of text to inform the user and help them to interact with the content.
- [x] **3rd party API placeholder** - Placed at the bottom of each page. Discord presence is displayed for user.
- [x] **Images** - Used an image for the reaction button
- [x] **Login placeholder** - Home page has a simple login.
- [x] **DB data placeholder** - All-time leaderboard available to users
- [x] **WebSocket placeholder** - live update feed on the leaderboard page

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - I mostly completed this part. I did not get to all pages.
- [x] **Use of a CSS framework** - I used a good selection of Bootstrap elements
- [ ] **All visual elements styled using CSS** - Not all visual elements had style added to them.
- [x] **Responsive to window resizing using flexbox and/or grid display** - All the elements should be capable of moving around with the window nicely.
- [x] **Use of a imported font** - Used the Titillium Web font off of google fonts. I used it as the main font for the website.
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - The only one I did not quite get to use was the ID selector, but there is usage of everything else.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Vite was installed correctly and everything deployed with it.
- [x] **Components** - Multiple items edited in all jsx files in order to be compatible with jsx react.
- [x] **Router** - React-router-dom works great. All navigable buttons link properly together using BrowserRouter.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
