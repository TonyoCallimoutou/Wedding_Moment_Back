use weddingmoment;

INSERT INTO Users (userId, email, userName, emailVerified, photoUrl)
	VALUES
	('0','no-email',"No Name", true, "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6"),
    ('1','ingrid.callimoutou@plein_de_truc.com',"Ingrid Callimoutou", false,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6"),
    ('2','yolande.hoarau@gmail.com',"Yolande Hoarau", true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6"),
	('EaTEVVtMYDV7krGpLA9gjuLy18h1','test@email.com',"User", true, "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6"),
    ('6rzllHDKI9SIMZYUwhmjPkFiKyk2',"tcallimoutou@gmail.com","Tonyo Callimoutou",true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6"),
    ('WMRVN07MEfdRIJHkIbr0cwKm4oD3',"tonyo.callimoutou@hotmail.fr","Tonyo Callimoutou",true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6");

INSERT INTO Events (userId, presentationText, pictureUrl, eventDate, dateIncrement, eventCode)
	VALUES
    ("6rzllHDKI9SIMZYUwhmjPkFiKyk2", "Mariage Test", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2Ffond?alt=media&token=139864c9-d0d5-49c0-a322-693d74d6eda8", "2023-09-02", 1, "1020923"),
    ("2", "Mariage de Ingrid et Dimitri", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2Ffond?alt=media&token=139864c9-d0d5-49c0-a322-693d74d6eda8","2023-08-01",2, "2010823");

INSERT INTO Menus (eventId, menuCategorie, menuDescription)
	VALUES
    (1,"Entrée",'Bla bla bla bla blabla'),
    (1,"Plat",'Bla bla bla bla blabla'),
    (1,"Dessert",'Bla bla bla bla blabla');


INSERT INTO PlanTables (tableName, eventId)
	VALUES
    ("Table 1",1),
    ("Table 2",1),
    ("Table 3",1),
    ("Table 4",1);

INSERT INTO Invites (planTableId, inviteName)
	VALUES
    (1,'Tonyo'),
    (1,'Jennifer'),
    (1,'Marc'),
    (1,'Flora'),
    (2,'Yolande'),
    (2,'Sabine'),
    (2,'Maryvonne');

INSERT INTO Posts (userId, eventId, pictureUrl, pictureRatio ,countReact)
	VALUES
    ('1',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,2),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1),
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1);


INSERT INTO UsersReactPosts (userId, postId, reaction)
	VALUES
    ('1',1, 'like'),
    ('1',2, 'mdr'),
    ('2',1, 'what');
