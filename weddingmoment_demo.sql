use weddingmoment;

INSERT INTO Users (userId, email, userName, emailVerified, photoUrl)
	VALUES
    ('6rzllHDKI9SIMZYUwhmjPkFiKyk2',"tcallimoutou@gmail.com","Tonyo Callimoutou",true,"https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/users%2F0?alt=media&token=da247115-af2f-466d-b4e7-526d1860bec6");

INSERT INTO Events (userId, presentationText, pictureUrl, eventDate, dateIncrement, eventCode)
	VALUES 
	('6rzllHDKI9SIMZYUwhmjPkFiKyk2','Mariage\nde\nIngrid\net\nDimitri','https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2Ffond?alt=media&token=e4120bf5-aabb-4439-8b17-f954e5722c74','2023-10-27',1,'1271023');


INSERT INTO Menus (eventId, menuCategorie, menuDescription)
	VALUES
    (1,'Appéritifs','Accras de morue\nCrevette et pomme de terre\nCroustillant de songe\nMini-Pizza aux légumes\nNem aux légumes\nQuiche au thon'),
    (1,'Buffet Froid','Brochettes de poulet\nGratin de chouchou\nSalade de la mer\nSalade du chef\nTomate Mozza\nVindaye de thon'),
    (1,'Buffet Chaud','Cabris Massale\nSauté de poissons\nPoulet Croustillant');


INSERT INTO PlanTables (tableName, eventId)
	VALUES
    ("Table 1",1),
    ("Table 2",1),
    ("Table 3",1),
    ("Table 4",1),
    ("Table 5",1),
    ("Table 6",1),
    ("Table 7",1),
    ("Table 8",1);

INSERT INTO Invites (planTableId, inviteName)
	VALUES
(1, "Yolande"),
(1, "Thierry"),
(1, "Keylia"),
(1, "Maryvonne"),
(1, "Dominique"),
(1, "Sabine"),
(1, "Didier"),
(1, "Fabrice"),
(1, "Marylin"),
(1, "Mael"),
(1, "Clea"),
(2, "Eleonor"),
(2, "Daniel"),
(2, "Irene"),
(2, "Joelle"),
(2, "Cleo"),
(2, "Germain"),
(2, "Michelle"),
(2, "Lucas"),
(3, "Josiane"),
(3, "Fabrice"),
(3, "Maeva"),
(3, "Djulyan"),
(3, "Julien"),
(3, "Danielle"),
(3, "Jean-Paul"),
(3, "Regis"),
(3, "Jennifer"),
(3, "Morgan"),
(3, "Rafael"),
(4, "Tonyo"),
(4, "Jennifer"),
(4, "Flora"),
(4, "Gilles"),
(4, "Marc"),
(4, "Aicha"),
(4, "Kamilla"),
(4, "Audrey"),
(4, "Loanne"),
(5, "Cyril"),
(5, "Magalie"),
(5, "Romain"),
(5, "Gauthier"),
(5, "Aniel"),
(5, "Dominique"),
(5, "Anais"),
(5, "Murielle"),
(5, "Teddy"),
(5, "Jules"),
(6, "Davy"),
(6, "Laurie"),
(6, "Steven"),
(6, "Caroline"),
(6, "Channel"),
(6, "Nila"),
(6, "Anaelle"),
(6, "Vincent"),
(6, "Elena"),
(6, "Thony"),
(7, "Amandine"),
(7, "Valery"),
(7, "Christelle"),
(7, "Eddy"),
(7, "Angelica"),
(7, "Thierry"),
(7, "Kim"),
(7, "Leila"),
(7, "Kersley"),
(7, "Shayley"),
(8, "Julien"),
(8, "Gaelle"),
(8, "Romain"),
(8, "Caroline"),
(8, "Coralie"),
(8, "Regis"),
(8, "Henri"),
(8, "Helene"),
(8, "Jean-Claude"),
(8, "Valerie");

