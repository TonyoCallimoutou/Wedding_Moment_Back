drop database if exists weddingmoment;
create database weddingmoment;
use weddingmoment;

CREATE TABLE Users (
	userId VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL UNIQUE,
    userName VARCHAR(45) NOT NULL,
    photoUrl VARCHAR(255) NOT NULL,
    emailVerified boolean,
    PRIMARY KEY (UserId)
);

CREATE TABLE Events (
	eventId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL,
    name VARCHAR(45) NOT NULL,
    presentationText TEXT NOT NULL,
    presentationTextSize INT DEFAULT 96,
    presentationTextAlign VARCHAR(45) DEFAULT 'center',
    pictureUrl VARCHAR(255),
    PRIMARY KEY (eventId),
    FOREIGN KEY (userId) REFERENCES Users(userId) ON DELETE CASCADE
);

CREATE TABLE Menus (
	menuId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
    menuCategorie VARCHAR(45) NOT NULL,
    menuDescription VARCHAR(45) NOT NULL,
    PRIMARY KEY (menuId),
    FOREIGN KEY (eventId) REFERENCES Events (eventId) ON DELETE CASCADE
);

CREATE TABLE PlanTables (
	planTableId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
	tableName VARCHAR(45) NOT NULL,
    PRIMARY KEY (planTableId),
    FOREIGN KEY (eventId) REFERENCES Events (eventId) ON DELETE CASCADE
);

CREATE TABLE Invites (
	inviteId INT AUTO_INCREMENT NOT NULL,
    planTableId INT NOT NULL,
    inviteName VARCHAR(45) NOT NULL,
    PRIMARY KEY (inviteId),
    FOREIGN KEY (planTableId) REFERENCES PlanTables(planTableId) ON DELETE CASCADE
);

CREATE TABLE Posts (
	postId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL,
    eventId INT NOT NULL,
    pictureUrl VARCHAR(255) NOT NULL,
    pictureRatio FLOAT NOT NULL,
    countReact INT DEFAULT 0,
    publicationDate datetime DEFAULT NOW(),
    PRIMARY KEY (postId),
    FOREIGN KEY (eventId) REFERENCES Events(eventId) ON DELETE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

CREATE TABLE UsersReactPosts (
	userId VARCHAR(45) NOT NULL,
    postId INT NOT NULL,
    reaction VARCHAR(45) NOT NULL,
    PRIMARY KEY (userId, postId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
    FOREIGN KEY (postId) REFERENCES Posts(postId) ON DELETE CASCADE
);