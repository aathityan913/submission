SELECT u.UserID, u.Email, r.RoleName
FROM training.[User] u
JOIN training.[Role] r ON u.RoleID = r.RoleID;

UPDATE training.[User]
SET RoleID = (
    SELECT RoleID FROM training.[Role] WHERE RoleName = 'Employee'
)
WHERE Email = 'employee@bank.com';

SELECT 
    u.UserID,
    u.Name,
    u.Email,
    r.RoleName
FROM [training].[User] AS u
INNER JOIN [training].[Role] AS r 
    ON u.RoleID = r.RoleID;

