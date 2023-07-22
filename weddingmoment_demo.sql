use weddingmoment;

INSERT INTO Users (userId, email, userName, emailVerified, photoUrl)
	VALUES
	('0','no-email',"No Name", true, "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2FplosjeHZj5Xy9KSXmbKrZ1VfO9I2?alt=media&token=5a6f2f4f-f297-41c8-b3c2-381284936752"),
    ('1','ingrid.callimoutou@plein_de_truc.com',"Ingrid Callimoutou", false,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2FplosjeHZj5Xy9KSXmbKrZ1VfO9I2?alt=media&token=5a6f2f4f-f297-41c8-b3c2-381284936752"),
    ('2','yolande.hoarau@gmail.com',"Yolande Hoarau", true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2FplosjeHZj5Xy9KSXmbKrZ1VfO9I2?alt=media&token=5a6f2f4f-f297-41c8-b3c2-381284936752"),
	('EaTEVVtMYDV7krGpLA9gjuLy18h1','test@email.com',"User", true, "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2FplosjeHZj5Xy9KSXmbKrZ1VfO9I2?alt=media&token=5a6f2f4f-f297-41c8-b3c2-381284936752"),
    ('t33TT2IYCgavOZPGF7OneiBfY1L2',"tcallimoutou@gmail.com","Tonyo Callimoutou",true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2FplosjeHZj5Xy9KSXmbKrZ1VfO9I2?alt=media&token=5a6f2f4f-f297-41c8-b3c2-381284936752");

INSERT INTO Events (userId, presentationText, pictureUrl, eventDate, dateIncrement, eventCode)
	VALUES
    ("t33TT2IYCgavOZPGF7OneiBfY1L2", "Mariage Test", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F0%2Ffond?alt=media&token=3b8ff06c-a13b-46b2-aaa8-845f6142ce20", "2023-07-22", 1, "1220723"),
    ("2", "Mariage de Ingrid et Dimitri", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F0%2Ffond?alt=media&token=3b8ff06c-a13b-46b2-aaa8-845f6142ce20","2023-07-21",1, "1210723");

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
    ('2',1,'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',1,1);


INSERT INTO UsersReactPosts (userId, postId, reaction)
	VALUES
    ('1',1, 'like'),
    ('1',2, 'mdr'),
    ('2',1, 'what');
