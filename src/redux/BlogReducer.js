import pic1 from "../img/inst shots (1).png"
import pic2 from "../img/inst shots (2).png"
import pic3 from "../img/inst shots (3).png"
// import pic4 from "../img/inst shots (4).png"


const InitialState ={
    data :[
        {
            date:"March 2, 2023",
            header :"Feugiat pretium nibh",
            text: "Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic1,
            id:1
        },
        {
            date:"January 10, 2023",
            header :"Feugiat pretium nibh",
            text: "Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic2,
            id:2
        },
        {
            date:"april  7, 2023",
            header :"Feugiat pretium nibh",
            text: "Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic3,
            id:3
        },
        {
            date:"January 25, 2023",
            header :"Feugiat pretium nibh",
            text: "Itaque earum rerum hic tenetur a sapiente delectus, consectetur adipiscing elit, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :"",
            id:4
        },
    ],
    showForm: false,
    fildsIsFill: false,
    showAllBlog: false,
    blogReadMoreId:0
  }

  const BlogReducer =(state = InitialState, action) =>{
    switch (action.type){
        case "SHOW-FORM":
            return {...state, showForm: !state.showForm}
        case "COMPLETE-FORM":
            console.log(state.data);
            return {...state, data:[...state.data, {...action.obj,id:state.data.length+1}]}
        case "FILL-ALL-FIELDS":
            return {...state, fildsIsFill:!state.fildsIsFill}
        case "SHOW-ALL-BLOG":
            return {...state, showAllBlog:!state.showAllBlog}
        case "BLOG_ID":
            return {...state, blogReadMoreId:action.id}

        default: return state
    }
       
  }

  export default BlogReducer
