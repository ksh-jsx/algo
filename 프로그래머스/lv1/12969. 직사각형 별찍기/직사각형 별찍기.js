process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const arr = Array.from(Array(b), ()=> Array(a).fill('*'))
    
    const str = arr.map(e=>e.join(""))
    console.log(str.join("\n"))
});