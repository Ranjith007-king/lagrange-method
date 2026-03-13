function generateInputs(){

let n=document.getElementById("numPoints").value
let area=document.getElementById("tableArea")

let table="<table>"
table+="<tr><th>x</th><th>f(x)</th></tr>"

for(let i=0;i<n;i++)
{
table+=`<tr>
<td><input id="x${i}"></td>
<td><input id="y${i}"></td>
</tr>`
}

table+="</table>"

area.innerHTML=table

}


function calculate(){

let n=document.getElementById("numPoints").value
let xp=parseFloat(document.getElementById("xp").value)

let x=[]
let y=[]

for(let i=0;i<n;i++)
{
x[i]=parseFloat(document.getElementById("x"+i).value)
y[i]=parseFloat(document.getElementById("y"+i).value)
}

let yp=0
let steps=""

for(let i=0;i<n;i++)
{

let Li=1
let formula=""

for(let j=0;j<n;j++)
{

if(i!=j)
{
Li*=((xp-x[j])/(x[i]-x[j]))

formula+=`((${xp}-${x[j]})/(${x[i]}-${x[j]}))`
}

}

let term=Li*y[i]

steps+=`
<div class="iteration">
<h3>L${i}(x)</h3>
<p>${formula}</p>
<p>L${i} = ${Li.toFixed(6)}</p>
<p>Term = L${i} × f(x${i}) = ${Li.toFixed(6)} × ${y[i]} = ${term.toFixed(6)}</p>
</div>
`

yp+=term

}

showResult(steps,yp)

}


function showResult(steps,answer){

let newPage=window.open("","_blank")

newPage.document.write(`

<html>

<head>
<title>Lagrange Result</title>
<link rel="stylesheet" href="style.css">
</head>

<body class="resultPage">

<h1>Lagrange Interpolation Result</h1>

<h2>Iteration Steps</h2>

${steps}

<div class="final">
Final Interpolated Value = ${answer}
</div>

</body>

</html>

`)

}
