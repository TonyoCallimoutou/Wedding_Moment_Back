Select * from events;

INSERT INTO Users (userId, email, userName, emailVerified, photoUrl) 
	VALUES
	('vEItJGl0NLO70u9vSfaFPaKUHjV2','email',"TestUser", true, "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg");
    
delete FROM users 
	WHERE userId = 't33TT2IYCgavOZPGF7OneiBfY1L2';
    
  
INSERT INTO Events (userId, name, presentationText, pictureUrl, eventDate) 
	VALUES
    ("t33TT2IYCgavOZPGF7OneiBfY1L2","Test", "Mariage Test", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F0%2Ffond?alt=media&token=3b8ff06c-a13b-46b2-aaa8-845f6142ce20", "2023-07-10");
    
SELECT *
FROM Events
WHERE eventId = 1 AND (isActivate = 1 OR userId= null);

INSERT INTO Users (userId, email, userName, emailVerified, photoUrl) 
	VALUES
	('0','no-email',"No Name", true, "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg");
    
UPDATE users 
	set photoUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg' 
    WHERE userId ='${userId}';
    
SELECT postId FROM UsersReactPosts 
	WHERE userId = "1";
    
INSERT INTO UsersReactPosts (userId, postId, reaction)
	VALUES
    ('1',1, 'like');
    
DELETE FROM UsersLikesPosts 
	WHERE userId = '1' AND postId = '1';
    
DELETE FROM users 
	WHERE userId = '1';
    

INSERT INTO Posts (userId, pictureUrl,countLike) 
	VALUES
    ('1','https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',2);

SELECT * FROM posts 
	NATURAL JOIN users;

select menuCategorie, menuDescription from Menus
	Where eventId = 2;
    
INSERT INTO Menus (eventId, menuCategorie, menuDescription) 
	VALUES
    (2,"Entrée",'Bli bla bla bla blabla'),
    (2,"Plat",'Bli bla bla bla blabla'),
    (2,"Dessert",'Bli bla bla bla blabla');

UPDATE posts 
	SET countReact = countReact + 1 
    WHERE postId = 2;
    
UPDATE posts 
	SET countReact = countReact - 1 
    WHERE postId = 2;
    
DELETE FROM posts 
	WHERE postId = 2;

INSERT INTO PlanTables (tableName, eventId) 
	VALUES
    ("Table 1",2),
    ("Table 2",2);
    
INSERT INTO Invites (planTableId, inviteName)
	VALUES
    (5,'Tonyo'),
    (5,'Jennifer'),
    (6,'Marc'),
    (6,'Flora');
    
DELETE FROM Invites 
	WHERE inviteId = 9;

Select * from PlanTables
	Where eventId = 2;
    
UPDATE invites 
	SET planTableId = 6
    WHERE inviteId = 9;
    
Select * from posts
	join UsersReactPosts on posts.postId = UsersReactPosts.postId
    where posts.userId = "1" ;
    
    

    
