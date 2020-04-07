// import React from "react";
// import Card from './Card';
// import {robots} from './robots';
// const CardList = ()=>{
//     var cardComponent = robots.map((user,i)=>{
//        return (<Card 
//                 key={robots[i].id} 
//                 id = {robots[i].id} 
//                 name={robots[i].name} 
//                 email={robots[i].email} 
//             />);
//     })
//     return (
//         <div>
//             {cardComponent}
//         </div>
//     )
// }

// export default CardList;

import React from "react";
import Card from './Card';

const CardList = ({robots})=>{
    var cardComponent = robots.map((user,i)=>{
       return (<Card 
                key={robots[i].id} 
                id = {robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            />);
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;