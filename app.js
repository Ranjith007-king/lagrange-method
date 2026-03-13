function createInputs(){

let n = document.getElementById("points").value
let container = document.getElementById("inputs")

container.innerHTML = ""

for(let i=0;i<n;i++)
{

container.innerHTML += 
`
<div>
x${i}: <input type="number" id="x${i}">
y${i}: <input type="number" id="y${i}">
</div>
`

}

}

function calculate(){

let n = document.getElementById("points").value
let x = []
let y = []

for(let i=0;i<n;i++)
{
x[i] = parseFloat(document.getElementById("x"+i).value)
y[i] = parseFloat(document.getElementById("y"+i).value)
}

let xp = parseFloat(document.getElementById("valueX").value)

let yp = 0

for(let i=0;i<n;i++)
{
let p = 1

for(let j=0;j<n;j++)
{
if(i != j)
{
p = p * (xp - x[j])/(x[i] - x[j])
}
}

yp = yp + p * y[i]

}

document.getElementById("result").innerHTML =
"Interpolated Value = " + yp

}