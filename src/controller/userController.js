//controller는 함수, router는 그 함수를 이용하는 입장이기 때문에 분리하는 것 
export const join = (req, res) => res.send("Join"); 
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
