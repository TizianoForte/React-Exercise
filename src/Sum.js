import React from "react";

export function Sum({numbers=[11,6,4]}) {
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