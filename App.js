import React, {useState} from "react";

function Example() {
    const [count, setCount] = useState(0);
        return (
            <div>
                <p>You clicked {count}</p>
                <button onClick={() => setCount(count + 1)}>Push</button>
            </div>
        )
}
export default Example;