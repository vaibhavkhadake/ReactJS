import React from 'react';

const Student = props =>{ 
    return (
        <div>
            <h1>Hello:{props.name}</h1>
            <h2>React:{props.rollnumber}</h2>
        </div>

    );
};


// function Student (props)  { 
//     return (
//         <div>
//             <h1>Hello:{props.name}</h1>
//             <h2>React:{props.rollnumber}</h2>
//         </div>

//     );
// };
export default Student;