# Game Page

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals) 
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Game Page lets users; upload their favorite games to the site, view other user's favorite games, and leave comments for others to see.

<br>

## MVP

- Connect back end Ruby server to the front end React se
- Users are able to register an account and sign in
- Users can view favorited, clickable game pictures on the main page
- Users can upload their own favorite games
- Users can leave comments a game for others to see

<br>

## Post MVP

- Let users change their passwords
- Add profile pages
- Add a search bar to lookup specific games

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | npm  |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

<img src="https://github.com/Obsidian609/tobecontinued/blob/main/assets/Screenshot (35).png" alt="Wireframe">

> <a href="https://whimsical.com/V6dYWhoD8YpwsHFnkWB14N">Whimsical</a>

#### Component Tree

<img src="https://github.com/Obsidian609/tobecontinued/blob/main/assets/Screenshot (38).png" alt="Component Tree">

> <a href="https://whimsical.com/DdqVP7k6gXAFa19fttDLqT">Component Tree</a>

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ GameImages.jsx
      |__ Footer.jsx
      |__ Nav.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ screens/
      |__ CommentsPage.jsx
      |__ MainPage.jsx
      |__ HomePage.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ gameimages.js
```

#### Component Breakdown

|  Component   |    Type    | Description                                                      |
| :----------: | :--------: | :--------------------------------------------------------------- |
|    Nav    | functional | _The nav will contain the title and current username_               |
|  GameImages  | class | _The GameImages component will render any images uploaded by the user._       |
|   Login    |   class    | _Will enable the user to login._      |
| Register | class | _Will let a new user make an account._                 |
|    Footer    | functional | _The footer will show the company name and a link to my github, linkedin, and youtube._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested |
| ------------------- | :------: | :------------: | :-----------: |
| Backend setup w/ Routes    |    H     |     10 hrs      |      hrs     |
| Frontend setup |    H     |     10 hrs      |      hrs     |
| Create CRUD Actions |    H     |     10 hrs      |      hrs     |
| Styling for each screen |    M     |     10 hrs      |      hrs     |
| TOTAL               |          |     40 hrs      |      hrs     |

<br>

### Server (Back End)

#### ERD Model

<img src="https://github.com/Obsidian609/tobecontinued/blob/main/assets/Screenshot (39).png" alt="ERD">

> <a href="https://drive.google.com/file/d/1objnch9mzVW8NMZ6QdCJhyT3PN8D8hqY/view?usp=sharing">ERD</a>

<br>

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
                