let videos = [
    {
       title : "First Videos",
       rating : 5,
       comment : 2,
       createdAt : "2 miuntes ago",
       views : 1,
       id : 1,
    },
    {
       title : "Second Videos",
       rating : 5,
       comment : 2,
       createdAt : "2 miuntes ago",
       views : 60,
       id : 2,
    },
    {
       title : "Third Videos",
       rating : 5,
       comment : 2,
       createdAt : "2 miuntes ago",
       views : 60,
       id : 3,
    },
   ];


//controller는 함수, router는 그 함수를 이용하는 입장이기 때문에 분리하는 것 
export const tranding = (req, res) => {
   return res.render("home", {pageTitle : "Home" ,  videos});
    //pug 렌더링 render("view name");
};

export const watch = (req, res) => {
   const { id } = req.params;
   const video = videos[id - 1];
   return res.render("watch", {pageTitle : `Watching ${video.title}`, video});
};

export const getEdit = (req, res) => {
   const { id } = req.params;
   const video = videos[id - 1];
   return res.render("edit", {pageTitle :`Editing: ${video.title}`, video});
}; 

export const postEdit = (req, res) => {
   const { id } = req.params;
   const { title } = req.body;
   videos[id - 1].title = title;
   return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("DeleteVideo");

};

/** export -> 하나 이상의 함수를 공유하고 싶을 떄 */
