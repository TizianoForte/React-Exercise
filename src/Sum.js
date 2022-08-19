import React from "react";

export function Sum({numbers}) {
    return (
        <h1>
            The sum is: {numbers.reduce((tot, current) => {
                return tot + current;
            }, 0)
    }
        </h1>
    )
}

export default Sum