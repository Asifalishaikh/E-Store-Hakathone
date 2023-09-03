function fetchDate2() {
    return new Promise<any>((resolve, reject) =>{
        setTimeout(() => {
            resolve({ mame: "AB" })
        }, 5000);   
    })
}

const TimerFunc = async() => {
    let response2 = await fetchDate2();
    console.log(response2);
    return(
        <p>{response2.name} </p>
    )
    
}