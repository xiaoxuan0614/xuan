var fn=()=>{
    console.log(this)
}
var p={}
fn.bind(p)
fn()