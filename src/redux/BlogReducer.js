import pic1 from "../img/inst shots (1).png"
import pic2 from "../img/inst shots (2).png"
import pic3 from "../img/inst shots (3).png"
import pic4 from "../img/inst shots (4).png"
import pic5 from "../img/inst shots (5).png"
import pic6 from "../img/inst shots (6).png"


const InitialState ={
    data :[
        {
            date:"March 2, 2023",
            header :"Feugiat pretium nibh",
            text: "Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic1
        },
        {
            date:"January 10, 2023",
            header :"Feugiat pretium nibh",
            text: "Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic2
        },
        {
            date:"april  7, 2023",
            header :"Feugiat pretium nibh",
            text: "Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic3
        },
        {
            date:"January 25, 2023",
            header :"Feugiat pretium nibh",
            text: "Feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Fermentum dui faucibus in ornare quam.  ",
            img :pic4
        },
    ],
    showForm:false,

  }

  const BlogReducer =(state = InitialState, action) =>{
    switch (action.type){
        case "SHOW-FORM":
        return {...state, showForm: !state.showForm}
        case "COMPLETE-FORM":
            console.log(action.obj);
        return {...state, data:[...state.data, {...action.obj}]}

        default: return state
    }
       
  }

  export default BlogReducer
