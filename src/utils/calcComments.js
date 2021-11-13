
export default function calcComments(comments){

       
    const sum =  comments.reduce((acc, val)=>{
       return val.replies ?  acc+ val.replies.length : acc ;   

     },0)
     return sum + comments.length
}