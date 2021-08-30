var addition = 0
var subtraction=0
var multiplication = 0
var division=0
function setup() {
  createCanvas(800,800);
  n1=createInput("").attribute("placeholder","Enter Number")
  n1.position(width/2-200,height/2-200)
  n2=createInput("").attribute("placeholder","Enter Number")
  n2.position(width/2+200,height/2-200)
  
  submit=createButton("Submit")
  submit.position(width/2,height/2-100)
  submit.mouseClicked(()=>{
    num1=Number(n1.value())
    num2=Number(n2.value())   
  })
  add=createButton("Add")
  add.position(width/2-100,height/2)
  add.mouseClicked(()=>{
    addition=num1+num2
    if(isNaN(addition)){
      alert("Do not enter letters")
    }
  })
  subtract=createButton("Subtract")
  subtract.position(width/2-50,height/2)
  subtract.mouseClicked(()=>{
    subtraction=num1-num2
    if(isNaN(subtraction)){
      alert("Do not enter letters")
    }
  })
  mult=createButton("Multiply")
  mult.position(width/2+25,height/2)
  mult.mouseClicked(()=>{
    multiplication=num1*num2
    if(isNaN(multiplication)){
      alert("Do not enter letters")
    }
  })
  div=createButton("Divide")
  div.position(width/2+100,height/2)
  div.mouseClicked(()=>{
    division=num1/num2
    if(isNaN(division)){
      alert("Do not enter letters")
    }
  })
}

function draw() {
  background(255,255,255);  
  text("The sum is "+addition,width/2,height/2+100)
  text("The answer is "+subtraction,width/2,height/2+150)
  text("The product is "+multiplication,width/2,height/2+200)
  text("The quotient is "+division,width/2,height/2+250)
  
  
}