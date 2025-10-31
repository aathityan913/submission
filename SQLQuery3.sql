INSERT INTO training.[User] (Name, Contact, Email, PasswordHash, RoleID, Status, CreatedDate, CreatedBy)
VALUES
('AdminUser', '9999999999', 'admin@bank.com', 'admin123', 1, 'Active', GETDATE(), 'system'),
('EmployeeUser', '8888888888', 'employee@bank.com', 'emp123', 2, 'Active', GETDATE(), 'system'),
('CustomerOne', '7777777777', 'cust1@bank.com', 'cust123', 3, 'Active', GETDATE(), 'system'),
('CustomerTwo', '6666666666', 'cust2@bank.com', 'cust456', 3, 'Active', GETDATE(), 'system');
