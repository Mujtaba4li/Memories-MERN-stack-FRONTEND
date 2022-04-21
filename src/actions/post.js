import * as api from "../api";

// Action creator (are action that return actions)

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Post function
export const createPost = (post) => async (dispatch) => {
  try {
    const  {data}  = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//update function
 export const updatePost=(id,post)=>async (dispatch)=>{
   try {
     const {data}=await api.updatePost(id,post);
     dispatch({type:'UPDATE',payload:data});
     
   } catch (error) {
    console.log(error.message);
   }
 };

//  delete function 
export const deletePost=(id)=>async(dispatch)=>{
  try {
    await api.deletePost(id);
    dispatch({type:'DELETE',paload:id});
  } catch (error) {
    console.log(error.message);
  }
}

//like function

export const likePost=(id)=>async(dispatch)=>{
  try {
    const {data}=await api.likePost(id);
    dispatch({type:'UPDATE',payload:data});
    
  } catch (error) {
    console.log(error.message);
  }
}
