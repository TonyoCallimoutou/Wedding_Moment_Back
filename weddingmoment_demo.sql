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
	('WMRVN07MEfdRIJHkIbr0cwKm4oD3','Mariage\nde\nIngrid\net\nDimitri','https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2Ffond?alt=media&token=e4120bf5-aabb-4439-8b17-f954e5722c74','2023-10-04',1,'1041023'),
    ("2", "Mariage de Ingrid et Dimitri", "https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2Ffond?alt=media&token=139864c9-d0d5-49c0-a322-693d74d6eda8","2023-08-01",2, "2010823");




INSERT INTO Menus (eventId, menuCategorie, menuDescription)
	VALUES
    (1,'Entrée','Crème de navet caramélisé aux essences d\'érable'),
    (1,'Plat','Dinde farcie aux fruits sec et ses garnitures'),
    (1,'Dessert','Pièce montée des mariés\naccompagné de profiteroles glacées');


INSERT INTO PlanTables (tableName, eventId)
	VALUES
    ("Table 1",1),
    ("Table 2",1),
    ("Table 3",1),
    ("Table 4",1),
    ("Table 5",1),
    ("Table 6",1),
    ("Table 7",1),
    ("Table 8",1),
    ("Table 9",1),
    ("Table 10",1),
    ("Table 11",1),
    ("Table 12",1);

INSERT INTO Invites (planTableId, inviteName)
	VALUES
    (1,'Callimoutou Tonyo'),
    (1,'Callimoutou Yolande'),
    (1,'Hoarau Marc'),
    (1,'Hoarau Flora'),
    (1,'Hoarau Sabine'),
    (1,'Hoarau Didier'),
    (1,'Techer Maryvonne'),
	(2,'Callimoutou Fabrice'),
    (2,'Callimoutou Maeva'),
    (2,'Callimoutou Julien');

INSERT INTO POSTS 
	VALUES 
    (24,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F24?alt=media&token=c570b3d0-319f-496e-ac62-fe1a3725dcbe',0.5,1,'2023-10-03 19:00:19',0),
    (25,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F25?alt=media&token=00657f9f-6115-42c1-bc03-4a83086b2993',1,0,'2023-10-03 19:42:34',0),
    (26,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F26?alt=media&token=3c9caf63-e946-478f-95ed-2a17f7816e97',0.5,0,'2023-10-03 19:42:48',0),
    (27,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F27?alt=media&token=47b13390-4c7d-40ff-8159-6987772e6322',2,0,'2023-10-03 19:43:00',0),
    (28,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F28?alt=media&token=edac3a8c-92dc-4773-b71b-13bbca5ccbda',1,0,'2023-10-03 19:43:14',0),
    (29,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F29?alt=media&token=1f8932d7-68b5-46fe-92a2-05ed0fcf79b0',0.5,1,'2023-10-03 19:43:27',0),
    (30,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F30?alt=media&token=62ebfbda-2e61-4537-bf02-6c0326300001',2,1,'2023-10-03 19:43:38',0),
    (31,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F31?alt=media&token=03727636-e138-4565-b669-9908d570bd5a',1,1,'2023-10-03 19:43:50',0),
    (32,'WMRVN07MEfdRIJHkIbr0cwKm4oD3',1,'https://firebasestorage.googleapis.com/v0/b/projet-secret-a86d6.appspot.com/o/event%2F1%2FWMRVN07MEfdRIJHkIbr0cwKm4oD3%2F32?alt=media&token=caba053b-20ff-4242-bc3d-fa7b20f75fd1',1,1,'2023-10-03 19:44:01',0);

