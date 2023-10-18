INSERT INTO PlanTables (tableName, eventId)
VALUES
    ("Table 9",1);

UPDATE Invites
SET planTableId = CASE
                      WHEN inviteId = 59 THEN 8
                      WHEN inviteId = 66 THEN 9
                      WHEN inviteId = 67 THEN 9
                      WHEN inviteId = 68 THEN 9
                      WHEN inviteId = 69 THEN 9
                      WHEN inviteId = 76 THEN 9
                      WHEN inviteId = 77 THEN 9
                      WHEN inviteId = 78 THEN 9
                      WHEN inviteId = 79 THEN 9
                      else planTableId
    END;

Delete from invites where inviteId = 30;
    