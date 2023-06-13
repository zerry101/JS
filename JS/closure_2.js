const x=()=>{
    a=1;
    console.log(a+'x');
    const y=()=>{
        a=2;
        console.log(a+'y');
        const z=()=>{
            a=3;
            console.log(a+'z');
        }
    }
    y();

}

x();