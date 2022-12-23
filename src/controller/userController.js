//controller는 함수, router는 그 함수를 이용하는 입장이기 때문에 분리하는 것 
export const join = (req, res) => res.send("Join"); 
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("See User");

/** export -> 하나 이상의 함수를 공유하고 싶을 떄 */