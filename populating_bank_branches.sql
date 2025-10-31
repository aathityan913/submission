INSERT INTO training.Branch
    (BankID, BranchName, Location, IFSCCode, CreatedDate, ModifiedDate, CreatedBy, ModifiedBy)
VALUES
    (2, 'Chennai Main Branch', 'Chennai - T Nagar', 'TEST0005678', GETDATE(), GETDATE(), 'System', 'System'),
    (3, 'Delhi Connaught Branch', 'New Delhi - Connaught Place', 'TEST0009876', GETDATE(), GETDATE(), 'System', 'System'),
    (4, 'Bangalore Koramangala Branch', 'Bangalore - Koramangala', 'TEST0003333', GETDATE(), GETDATE(), 'System', 'System');

Select*from training.Bank;

select*from training.Branch;

INSERT INTO training.Bank 
    (BankName, Headquarters, EstablishedYear, CreatedDate, ModifiedDate, CreatedBy, ModifiedBy)
VALUES
    ('HDFC Bank', 'Mumbai', 1994, GETDATE(), GETDATE(), 'System', 'System'),
    ('ICICI Bank', 'Chennai', 1995, GETDATE(), GETDATE(), 'System', 'System'),
    ('Axis Bank', 'Delhi', 1993, GETDATE(), GETDATE(), 'System', 'System');

INSERT INTO training.Branch
    (BankID, BranchName, Location, IFSCCode, CreatedDate, ModifiedDate, CreatedBy, ModifiedBy)
VALUES
    (2, 'HDFC Branch - Pune', 'Pune', 'HDFC0001', GETDATE(), GETDATE(), 'System', 'System'),
    (3, 'ICICI Branch - Coimbatore', 'Coimbatore', 'ICICI0001', GETDATE(), GETDATE(), 'System', 'System'),
    (4, 'Axis Branch - Noida', 'Noida', 'AXIS0001', GETDATE(), GETDATE(), 'System', 'System');
SELECT * FROM training.[User];

SELECT * FROM training.[Role];
SELECT * FROM training.[Account];

SELECT UserID, Name, Email, RoleID
FROM training.[User];

SELECT * FROM training.[UserRole];
