# Project 4

## Yummy Paw
Yummy Paw is the perfect home for cats and/or dogs lovers, here you can watch and share with the community trending clips, the most entertaining and funniest pet videos online. You will also be able to add comments on yor favorite videos to share some of your love. 
Let be filled with sweetness watching these beauties!

## MVP
- Users can register an account, log in and log out.
- Users can post, edit, or delete comments in any videos they like.
- Users can add URL videos of their pet to share with the community.

## Post-MVP
- Add a meme section related with cat and dogs.
- User can like a video, so It will show the most popular videos on the home page.
- Add user Profile page, where it shows all the post, comments and liked videos.

## Wireframes

### Home

![alt img](https://i.imgur.com/2U4N7rK.jpg)

### Categories

![alt img](https://i.imgur.com/pt1TMeg.jpg)

### Videos
![alt img](https://i.imgur.com/b4Pl7BQ.jpg)
![alt img](https://i.imgur.com/z5iku4N.jpg)

### Form and Footer

![alt img](https://i.imgur.com/cBm560Z.jpg)

### See more

![alt img](https://i.imgur.com/wpGzsoa.jpg)

## ERD
*Relation:*
- USER can have many COMMENTS
- USER can have many PET
- PET can have many COMMENTS

![alt text](https://i.imgur.com/OxZdlAb.jpg)


## Components Hierarchy

- React components 

```js
<app>
  <header>
    <nav>
      <userregister>
      <userlogin>
    </nav>
    <heroimg>
  </header>
  <main>
    <comments>
    <categories>
    <catsection>
    <dogsection>
    <postpet>
  </main>
  <footer>
    <contact>
    <hireus>
  </footer>
</app>
```
## Technologies

- Rails and React
- React-Router