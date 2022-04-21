const reducer=(posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            
            return action.payload;
        case 'CREATE':
            
            return [...posts,action.payload];
    
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post)=>post._id=== action.payload._id?action.payload:post);//if post.id equal to hei action.paylaod may to action.paylaod return kray wrna sirf post return kr dain ternatory operator
    
        case 'DELETE':
            
            return posts.filter((post)=>post._id!==action.payload);
    
        default:
            return posts;
    }
}

export default reducer;