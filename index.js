let data = fetch("https://jsonplaceholder.typicode.com/users");
data.then((res)=>{
    return res.json
}).then((read)=>{
    console.log(read)
})


