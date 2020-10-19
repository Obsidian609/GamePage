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
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

GamePage lets you view other user's favorite games and leave comments of your own for others to see.

<br>

## MVP

> Connect back end Ruby server to the 
> Users are able to register an account and sign in
> Users can view favorited, clickable game pictures on the main page
> Users can upload their own favorite games and leave comments under games for others to see

## Post MVP

> Let users change their passwords
> Add profile pages
> Add a search bar to lookup specific games

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

<img src="https://github.com/Obsidian609/tobecontinued/blob/main/assets/Screenshot(35).png" alt="Wireframe">

> <a href="https://whimsical.com/V6dYWhoD8YpwsHFnkWB14N">Whimsical</a>

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

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

<img src="https://github.com/Obsidian609/tobecontinued/blob/main/assets/Screenshot(36).png" alt="ERD">

> <a href="https://drive.google.com/file/d/1objnch9mzVW8NMZ6QdCJhyT3PN8D8hqY/view?usp=sharing">draw.io ERD</a>

<br>

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
                