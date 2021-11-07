class calculator{
    constructor(prevNums,curNums){
        this.prevNums = prevNums
        this.curNums = curNums
        this.allClear()
    }

    allClear(){
        this.prevNum = ""
        this.curNum = ""
        this.operation = ""
    }

    delete(){
        this.curNum = this.curNum.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === "." && this.curNum.includes(".")) return
        this.curNum = this.curNum + number
    }

    chooseoperation(operator){
        if(this.curNum === '') return
        if(this.prevNum !==''){
            this.compute()
        }
        this.operation = operator
        this.prevNum = this.curNum
        
        this.curNum = ""
    }

    compute(){
        let computation;
        const prev = parseFloat(this.prevNum)
        const curr = parseFloat(this.curNum)
        if(isNaN(prev)||isNaN(curr))return
        switch(this.operation){
            case "Plus":
                computation = prev + curr

                break
            case "Minus":
                computation = prev - curr
                
                break
            case "Multi":
                computation = prev * curr
                
                break
            case "Divide":
                computation = prev / curr
                
                break    
            default:
                return
        }
        this.curNum = computation
        this.prevNum = ''
        this.operation = ''

    }

    updateDisplay(){
        this.curNums.innerHTML = this.curNum
        this.prevNums.innerHTML = `${this.prevNum} ${this.operation}`
    }

}


// selector
const numbers= document.getElementsByClassName('number')
const operators = document.getElementsByClassName("operator")
const allClr = document.getElementsByClassName("all-clear")[0]
const dlt = document.getElementsByClassName("delete")[0]
const eql = document.getElementsByClassName("equal")[0]
const currentNumber = document.getElementsByClassName("current")[0]
const preNumber = document.getElementsByClassName("pre")[0]
const prevNums = document.getElementsByClassName("pre")[0]
const curNums = document.getElementsByClassName("current")[0]
// class
const calci = new calculator(prevNums,curNums)  











// addEventListner
allClr.addEventListener("click",allCleared)
for(let num of numbers){
    num.addEventListener("click", Numbers)
}
for(let operator of operators){
    operator.addEventListener("click", operations)
}
eql.addEventListener("click", equall)

dlt.addEventListener("click", deleted)






// function
function allCleared(){
    calci.allClear()
    calci.updateDisplay()
}

function Numbers(e){
    calci.appendNumber(e.target.innerHTML)
    calci.updateDisplay()
}

function operations(e){
    calci.chooseoperation(e.target.innerHTML)
    calci.updateDisplay()
}

function equall( ){
    calci.compute()
    calci.updateDisplay()
}

function deleted( ){
    calci.delete()
    calci.updateDisplay()
}