import React, { useState } from 'react';

function Count(props) {

    const [count, setCount] = useState(0);

    const AddItem = () => {
        // console.log("additem");
        if(count < 10){
            setCount(count + 1);
        }
    }
    
    const removeItem = () => {
        // console.log("removeitem");
        if(count > 0){
            setCount(count - 1);
        }

    }

    return (
        <div>
            <button type="button" onClick={() => removeItem()}>Remove</button>

        <input type="text" value={count.toLocaleString()}/>

            <button type="button" onClick={() => AddItem()}>Add</button>
        </div>
    );
}

export default Count;