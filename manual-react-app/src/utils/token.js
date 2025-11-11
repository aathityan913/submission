// utils/token.js
export const isTokenValid = (tokenObj) => {
    if (!tokenObj || !tokenObj.token) return false;
    return Date.now() < tokenObj.expiry;
  };
  