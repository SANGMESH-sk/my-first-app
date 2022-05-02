import React from "react";

function Newfunc()
{
    return <h1>nested component is function component</h1>;
}

export class HiComp extends React.Component
{
    render()
    {
        return <h1>this is nested class component <Newfunc/></h1>;
    }
}

export default HiComp;