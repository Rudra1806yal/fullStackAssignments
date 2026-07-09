import { useState } from "react";

function Counter() {
    const [count, SetCount] = useState(0);
    console.log(count);

    const handleAdd = () => {
        return SetCount(count + 1);
    };

    const handleReduce = () => {
        return SetCount(count - 1);
    };

    const handleReset = () => {
        return SetCount(0);
    };

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} disabled={count < 1}>Reduce</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;