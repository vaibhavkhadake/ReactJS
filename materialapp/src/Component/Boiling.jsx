import React from 'react';

function Boiling(props)
{
if(props.celcious>=100)
{
    return <p> Water is boiled </p>
}
return <p> Water is not boiled </p>

}
export default Boiling;