setTimeout(()=>{
    window.location.href = '/about'
    console.log('hi')
},3000)

for(let i=3;i>=0;i--){
    setTimeout(()=>{
        document.getElementById('count').innerText = i
    },1000)
}