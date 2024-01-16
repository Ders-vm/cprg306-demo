import Heading from "./heading.js";

export default function Page() {
    let a = 1;
    let b = 2;
    let c = a + b;


    return (
        <main>
        <Heading />
        <p>{a} + {b} = {c}</p>
        <p>Week 2</p>
        </main>
    );
    }