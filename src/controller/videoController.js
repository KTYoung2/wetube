//controller는 함수, router는 그 함수를 이용하는 입장이기 때문에 분리하는 것 
export const tranding = (req, res) => {
   const videos = [
     {
        title : "First Videos",
        rating : 5,
        comment : 2,
        createdAt : "2 miuntes ago",
        views : 60,
        id : 1
     },
     {
        title : "Second Videos",
        rating : 5,
        comment : 2,
        createdAt : "2 miuntes ago",
        views : 60,
        id : 1
     },
     {
        title : "Third Videos",
        rating : 5,
        comment : 2,
        createdAt : "2 miuntes ago",
        views : 60,
        id : 1
     },
    ];
    
   return res.render("home", {pageTitle : "Home" ,  videos});
    //pug 렌더링 render("view name");
};

export const see = (req, res) => 
    res.render("watch");

export const edit = (req, res) => 
     res.render("edit");

export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("DeleteVideo");

}

/** export -> 하나 이상의 함수를 공유하고 싶을 떄 */
