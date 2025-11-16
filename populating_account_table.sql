select * from [training].Account;

select * from [training].[User];

INSERT INTO [training].[Account]
(UserID, BankID, BranchID, AccountType, Currency, Balance, Status, CreatedDate, ModifiedDate, CreatedBy, ModifiedBy)
VALUES
(2, 1, 1, 'Savings', 'INR', 25000.00, 'Active', '2025-10-29 11:09:55.6066667', NULL, 'System', 'System'),

(3, 1, 1, 'Current', 'INR', 30000.00, 'Active', '2025-10-29 11:09:55.6066667', NULL, 'System', 'System'),

(6, 1, 1, 'Savings', 'INR', 15000.00, 'Active', '2025-10-31 07:26:24.3417822', NULL, 'System', 'System'),

(7, 1, 1, 'Savings', 'INR', 18000.00, 'Active', '2025-10-31 07:27:54.7894156', NULL, 'System', 'System'),

(8, 1, 1, 'Current', 'INR', 22000.00, 'Active', '2025-10-31 07:29:24.1938958', NULL, 'System', 'System'),

(9, 1, 1, 'Savings', 'INR', 17500.00, 'Active', '2025-10-31 07:30:21.2069890', NULL, 'System', 'System'),

(10, 1, 1, 'Savings', 'INR', 28000.00, 'Active', '2025-10-31 07:30:49.6483147', NULL, 'System', 'System');

