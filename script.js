function getTip(event){
    let bill = document.getElementById('bill-input').value
    let percentage = Number(event.target.value * 0.01)
    let amountOfPeople = Number(document.getElementById('number-of-people').value)

    if(bill.includes(',')){
        bill = bill.replace(',', '.')
    }
    bill = Number(bill)

    if(bill == "" || bill <= 0){
        alert("The value of the bill can't be zero")
    }else if(amountOfPeople == "" || amountOfPeople <= 0){
        alert("The number of people can't be zero")
    }else{
        let tipValue = Math.round(((bill * percentage) / amountOfPeople) * 100) / 100
        let tipOutput = document.getElementById('output-tip')
        tipOutput.innerHTML = `$${tipValue}`

        let totalValue = Math.round((bill / amountOfPeople + tipValue) * 100) / 100
        let totalOutput = document.getElementById('output-total')
        totalOutput.innerHTML = `$${totalValue}`
    }
}

function resetCalculator(){
    let form = document.getElementById('calculator-form').reset()
    let tipOutput = document.getElementById('output-tip')
    let totalOutput = document.getElementById('output-total')
    tipOutput.innerHTML = `$0.00`
    totalOutput.innerHTML = `$0.00`
}