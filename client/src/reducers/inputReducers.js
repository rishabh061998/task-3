const initialData={
    list:[]
}


const toReducers=(state=initialData,action)=>{
switch(action.type){
    case "ADD":

    const {id,data}=action.payload;
    return{
        ...state,
        list:[
            ...state.list,
            {
               id:id,  
           data:data
        }]
    }

    case "DELETE":

      const newlist=state.list.filter((elem)=>elem.id !==action.id)
        return{
            ...state,
           list:newlist
        }

    default:return state
}
}

export default toReducers