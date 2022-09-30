 export const add=(data)=>{
    return{
        type:"ADD",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteT=(id)=>{
    return {
        type:"DELETE",
        id
    }
}

