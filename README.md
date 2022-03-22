<div align="center">

#  ⚛️ Social-Media-DashBoard Project.



 Hi, I'm [Victor Henrique](https://github.com/victorhenriqu3/) this is my Social-Media-DashBoard Project.

 </div>

 <br>



# 🚀 Technologies

- [Styled-Components](https://styled-components.com/)

- [Typescript](https://www.typescriptlang.org/)

- [react-list-drag-and-drop](https://www.npmjs.com/package/react-list-drag-and-drop)

<br>

# 💻 Application Demo

<div align="center">

![Application Demo](https://media0.giphy.com/media/qxSFTpwceyPdDpRd7X/giphy.gif?cid=790b761131681a5416082a56e2e59f11a8cef10835ca2793&rid=giphy.gif&ct=g)

</div>


# 📦 *Feature Bonus*

A Bonus Feature realizada foi uma animação utilizando 3D com CSS para animar o efeito Flip Card.
localizada na seguinte Pull Request: [ Flip Cards Feature #5 ](https://github.com/victorhenriqu3/social-media-dashboard/pull/5)

<br>


#  📁 Folder Structure

- [`🗂️ Components`](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/Components) : Folder reserved to store the individual components like `ToggleButton`, `Back Flip Card`, `CardSocial`, `CardStats`, being the smallest part of each Container.


- [`🗂️ Containers`](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/Containers) : Reserved folder to store Macro Containers like `CardGridSocial`, `CardGridStats`, `HeaderDashBoard`. Containers work like each Section of the page, separating the responsibility of each part of the application.

- [ `🗂️ contexts` ](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/contexts/ThemeContext) :  Inside the Application is the folder responsible for dealing with ThemeContext, which will be responsible for sharing the data related to the theme selected by the user, among all components of the same component tree, without having to explicitly pass props between each level.

- [ `🗂️ hooks` ](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/hooks) : will be the folder responsible for creating the `useTheme` Hook responsible for creating the concept of State in relation to the user's choice and persisting this data in `LocalStorage`. 

- [`🗂️ Styles`](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/Styles) : will be the folder responsible for structuring and storing our `GlobalStyle`, in addition to separating the `Dark Theme` and `Light Theme` through Objects to be used in the Hook `useTheme`.

- [`🗂️ Utils`](https://github.com/victorhenriqu3/social-media-dashboard/tree/master/src/Utils) : will be the folder used to create useful functions such as IconSelect, to receive the icon corresponding to the Social Media, in addition to the StatsSelect, used in the BackFlipCard to display the Stats for each Social Media, in addition to having the `Data` folder containing the files Json with the information that will be displayed on the Cards(`SocialCard` ,`StatsCards` and `BackFlipCard`).

<br>

# 🔃 Pull Request History

The Project was started with `Create-React-App` with `Template` Typescript, after that I made the application cleaner so that only what would be used in the code remains.

The [First Feature](https://github.com/victorhenriqu3/social-media-dashboard/pull/1) implemented was the `Toggle Button` to change the Theme from Light to Dark, and thus make it interactive with the user's choice, this choice would be stored in `localStorage`. I implemented this functionality using `Styled-Components`, where I created a Global styling and also a ThemeContext to be able to deal with the theme's configuration, the project's color palette, both for Light Theme and Dark Theme, were defined as global variables in GlobalStyle, this variables will be used by useTheme, a Hook I created to handle changing the theme and storing it in localStorage.

The [Second Feature](https://github.com/victorhenriqu3/social-media-dashboard/pull/2) implemented was the creation of a Header to be able to separate the responsibility of each component within the App.tsx, and thus make it cleaner and more organized in order to maintain the code. That way I chose to separate each section (Header, CardSocial Grid and CardStats Grid) in Containers.

The [Third Feature](https://github.com/victorhenriqu3/social-media-dashboard/pull/3) was the creation of CardsSocial Components to display the number of followers/subscribers on each Social Media and CardStats to display the interaction statistics of each Social Media. The Grid Layout stayed with GridSocialCards and GridStatsCards for displaying cards with Display Grid, making the display responsive.

The [Fourth Feature](https://github.com/victorhenriqu3/social-media-dashboard/pull/4) implemented was the Drag and Drop of Cards, making the application interactive and user-friendly, the functionality was carried out with the react-dragndrop-list-layout library, as it was understood that it would be ideal for its simplicity in implementation and use, this way making code maintenance more intuitive. The functionality was implemented both in GridSocialCards and GridStatsCards, being similar to the implementation of the Toggle Button, persisting the data in localStorage and thus maintaining the ordering that the User chooses.

The [Fifth Functionality](https://github.com/victorhenriqu3/social-media-dashboard/pull/5) implemented was the Flip Card. This resource aimed to implement the `Flip Card` effect when clicking on the component, using a `3D animation` for this purpose.
I chose to implement it as follows: clicking on a CardSocial will display the Statistics of that Social Network.