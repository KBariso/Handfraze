# Handfraze


## About Handfraze
Live Link: https://handfraze.herokuapp.com/


Handfraze is a clone of Handspeak, a resource to the American Sign Language (ASL) dictionary. Like Handspeak, Handfraze allows a resource for individuals who wish to learn basics of ASL providing basic phrases in video form from a certified national interpreter. Logged in users are able to create phrases with videos or create comments to phrases that have already been created.


### Technologies Used Backend:

- Python 
- Flask 
- Flaskwtf 
- WTForms 
- SQLAlchemy 
- PostgreSQL 
- Docker 
- Heroku


### Technologies Used Frontend:
- JavaScript 
- React 
- Redux 
- Styled Components


## Pages Displayed 

### Splash Page
As a logged in user, the home page will display a "Create A Phrase" button that redirects you to creating a phrase.
As a logged out user, you are still able to see phrases and navigate through the site. Creating a phrase or making a comment is not available or to be shown.
![image](https://user-images.githubusercontent.com/86331220/166985523-292ac803-9c75-437a-8355-4eb5a61fa480.png)


### Create a Phrase
As a logged in user, you are able to create a phrase by inputting a title, description, media url, and chosen category. If there is no media url given, it will be pre-populated.
![image](https://user-images.githubusercontent.com/86331220/166985813-c13d70d2-d630-4cef-bffa-4e989863a2dc.png)

### Single Phrase Page
Both logged in and logged out users are able to display a single phrase page. As a user, you will be able to comment on the given phrase. If you are the owner of the phrase, you are also able to edit that phrase.
![image](https://user-images.githubusercontent.com/86331220/155458084-c21f96c5-d661-4520-a9ab-eeb21aae1fac.png)




