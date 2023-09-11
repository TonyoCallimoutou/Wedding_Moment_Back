drop database if exists weddingmoment;
drop database if exists weddingmomentarchive;
create database weddingmoment;
create database weddingmomentarchive;

CREATE TABLE weddingmoment.Users (
	userId VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL UNIQUE,
    userName VARCHAR(45) NOT NULL,
    photoUrl VARCHAR(255) NOT NULL,
    emailVerified boolean,
    PRIMARY KEY (UserId)
);

CREATE TABLE weddingmomentarchive.Users (
	userId VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL UNIQUE,
    userName VARCHAR(45) NOT NULL,
    photoUrl VARCHAR(255) NOT NULL,
    emailVerified boolean,
    PRIMARY KEY (UserId)
);

CREATE TABLE weddingmoment.Events (
	eventId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL UNIQUE,
    presentationText TEXT NOT NULL,
    presentationTextSize INT DEFAULT 96,
    presentationTextAlign VARCHAR(45) DEFAULT 'center',
    pictureUrl VARCHAR(255),
    eventDate DATE NOT NULL,
    dateIncrement INT NOT NULL,
    eventCode VARCHAR(45) NOT NULL UNIQUE,
    isActivate boolean default false,
    PRIMARY KEY (eventId),
    FOREIGN KEY (userId) REFERENCES Users(userId) ON DELETE CASCADE,
    UNIQUE KEY (eventDate, dateIncrement)
);

CREATE TABLE weddingmomentarchive.Events (
	eventId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL UNIQUE,
    presentationText TEXT NOT NULL,
    presentationTextSize INT DEFAULT 96,
    presentationTextAlign VARCHAR(45) DEFAULT 'center',
    pictureUrl VARCHAR(255),
    eventDate DATE NOT NULL,
    dateIncrement INT NOT NULL,
    eventCode VARCHAR(45) NOT NULL UNIQUE,
    isActivate boolean default false,
    PRIMARY KEY (eventId)
);

CREATE TABLE weddingmoment.Menus (
	menuId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
    menuCategorie VARCHAR(45) NOT NULL,
    menuDescription VARCHAR(255) NOT NULL,
    PRIMARY KEY (menuId),
    FOREIGN KEY (eventId) REFERENCES Events (eventId) ON DELETE CASCADE
);

CREATE TABLE weddingmomentarchive.Menus (
	menuId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
    menuCategorie VARCHAR(45) NOT NULL,
    menuDescription VARCHAR(45) NOT NULL,
    PRIMARY KEY (menuId)
);

CREATE TABLE weddingmoment.PlanTables (
	planTableId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
	tableName VARCHAR(45) NOT NULL,
    PRIMARY KEY (planTableId),
    FOREIGN KEY (eventId) REFERENCES Events (eventId) ON DELETE CASCADE
);

CREATE TABLE weddingmomentarchive.PlanTables (
	planTableId INT AUTO_INCREMENT NOT NULL,
    eventId INT NOT NULL,
	tableName VARCHAR(45) NOT NULL,
    PRIMARY KEY (planTableId)
);

CREATE TABLE weddingmoment.Invites (
	inviteId INT AUTO_INCREMENT NOT NULL,
    planTableId INT NOT NULL,
    inviteName VARCHAR(45) NOT NULL,
    PRIMARY KEY (inviteId),
    FOREIGN KEY (planTableId) REFERENCES PlanTables(planTableId) ON DELETE CASCADE
);
CREATE TABLE weddingmomentarchive.Invites (
	inviteId INT AUTO_INCREMENT NOT NULL,
    planTableId INT NOT NULL,
    inviteName VARCHAR(45) NOT NULL,
    PRIMARY KEY (inviteId)
);

CREATE TABLE weddingmoment.Posts (
	postId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL,
    eventId INT NOT NULL,
    pictureUrl VARCHAR(255) NOT NULL,
    pictureRatio FLOAT NOT NULL,
    countReact INT DEFAULT 0,
    publicationDate datetime DEFAULT NOW(),
    isReported boolean default false,
    PRIMARY KEY (postId),
    FOREIGN KEY (eventId) REFERENCES Events(eventId) ON DELETE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

CREATE TABLE weddingmomentarchive.Posts (
	postId INT AUTO_INCREMENT NOT NULL,
    userId VARCHAR(45) NOT NULL,
    eventId INT NOT NULL,
    pictureUrl VARCHAR(255) NOT NULL,
    pictureRatio FLOAT NOT NULL,
    countReact INT DEFAULT 0,
    publicationDate datetime DEFAULT NOW(),
    isReported boolean default false,
    PRIMARY KEY (postId)
);

CREATE TABLE weddingmoment.report (
	reportId INT AUTO_INCREMENT NOT NULL,
    postId INT NOT NULL,
    userId VARCHAR(45) NOT NULL,
    type VARCHAR(45) NOT NULL,
    reason VARCHAR(255) NOT NULL,
    PRIMARY KEY (reportId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
    FOREIGN KEY (postId) REFERENCES Posts(postId) ON DELETE CASCADE
);

CREATE TABLE weddingmoment.UsersReactPosts (
	userId VARCHAR(45) NOT NULL,
    postId INT NOT NULL,
    reaction VARCHAR(45) NOT NULL,
    PRIMARY KEY (userId, postId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE,
    FOREIGN KEY (postId) REFERENCES Posts(postId) ON DELETE CASCADE
);

use weddingmoment;

DELIMITER $$
CREATE TRIGGER Users_delete_trigger
	BEFORE DELETE ON weddingmoment.Users
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.Users(userId, email, userName, photoUrl, emailVerified)
        VALUES (old.userId, old.email, old.userName, old.photoUrl, emailVerified);

		DELETE FROM weddingmoment.Events WHERE weddingmoment.Events.userId = old.userId;
	END $$


DELIMITER $$
CREATE TRIGGER Event_delete_trigger
	BEFORE DELETE ON weddingmoment.Events
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.Events
        SELECT * from weddingmoment.Events
        WHERE weddingmoment.Events.eventId = old.eventId;

		DELETE FROM weddingmoment.Menus WHERE weddingmoment.Menus.eventId = old.eventId;
		DELETE FROM weddingmoment.PlanTables WHERE weddingmoment.PlanTables.eventId = old.eventId;
	END $$

DELIMITER $$
CREATE TRIGGER Menu_delete_trigger
	BEFORE DELETE ON weddingmoment.Menus
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.Menus
        SELECT * from weddingmoment.Menus
        WHERE weddingmoment.Menus.menuId = old.menuId;
	END $$

DELIMITER $$
CREATE TRIGGER PlanTable_delete_trigger
	BEFORE DELETE ON weddingmoment.PlanTables
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.PlanTables
        SELECT * from weddingmoment.PlanTables
        WHERE weddingmoment.PlanTables.planTableId = old.planTableId;

        DELETE FROM weddingmoment.Invites WHERE weddingmoment.Invites.planTableId = old.planTableId;
	END $$

DELIMITER $$
CREATE TRIGGER Posts_delete_trigger
	BEFORE DELETE ON weddingmoment.Posts
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.Posts
        SELECT * from weddingmoment.Posts
        WHERE weddingmoment.Posts.postId = old.postId;
	END $$

DELIMITER $$
CREATE TRIGGER Invite_delete_trigger
	BEFORE DELETE ON weddingmoment.Invites
	FOR EACH ROW
	BEGIN
		INSERT INTO weddingmomentarchive.Invites
        SELECT * from weddingmoment.Invites
        WHERE weddingmoment.Invites.inviteId = old.inviteId;
	END $$

DELIMITER $$
CREATE EVENT activate_event_schedule
	ON SCHEDULE EVERY 1 DAY
	STARTS CURRENT_TIMESTAMP + INTERVAL 1 DAY
	DO
	BEGIN
		UPDATE weddingmoment.events
		SET isActivate = CASE
			WHEN eventDate = CURDATE() OR eventDate = CURDATE() + INTERVAL 1 DAY
            THEN TRUE
			ELSE FALSE
		END;
	END $$

DELIMITER $$
CREATE TRIGGER activate_event
	BEFORE INSERT ON Events
	FOR EACH ROW
	BEGIN
    SET NEW.isActivate = CASE
        WHEN NEW.eventDate = CURDATE() OR NEW.eventDate = CURDATE() + INTERVAL 1 DAY
        THEN TRUE
        ELSE FALSE
    END;
END $$
    
DELIMITER $$
CREATE TRIGGER signale_posts
	BEFORE INSERT ON weddingmoment.report
	FOR EACH ROW
	BEGIN
		UPDATE weddingmoment.Posts
		set isReported = 1
		WHERE postId = NEW.postId;
END $$
    