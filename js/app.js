const cardForm = document.getElementById("cardForm")

const cardName =  document.getElementById("card_name")
const cardNumber =  document.getElementById("card_number")
const cardDateMonth = document.getElementById("card_date_month")
const cardDateYear = document.getElementById("card_date_year")
const cardCVC = document.getElementById("card_cvc")

const isRequired = (val) => val === '' ? false : true

const isNumber  = (val) => {
    const re = new RegExp("^[0-9]*\d*$")
    return re.test(val)
}

const showError = (input, message, isInputGroup) => {
    let inputParent 

    if(isInputGroup){
        inputParent = input.parentElement.parentElement
    }else {
        inputParent = input.parentElement
    }
    input.classList.add('has-error')
    inputParent.classList.add('error')
    inputParent.querySelector('small').textContent = message
    
}

const showSuccess = (input, isInputGroup) => {
    let inputParent 

    if(isInputGroup){
        inputParent = input.parentElement.parentElement
    }else {
        inputParent = input.parentElement
    }
    input.classList.remove('has-error')
    let hasError = inputParent.getElementsByClassName('has-error').length
    if(hasError === 0){
        inputParent.classList.remove('error')
        inputParent.querySelector('small').textContent = ""
    }
}

cardForm.addEventListener('submit',function(e) {
    e.preventDefault()
    const name = cardName.value.trim()
    const number  = cardNumber.value.trim()
    const month  = cardDateMonth.value.trim()
    const year  = cardDateYear.value.trim()
    const cvc  = cardCVC.value.trim()

    let isValidName, 
        isValidNumber,
        isValidMonth,
        isValidYear,
        isValidCVC = false

    if(!isRequired(name)){
        showError(cardName,"Can't be blank", false)
        isValidName = false
    }else {
        showSuccess(cardName, false)
        isValidName = true
    }

    if(!isRequired(number)){
        showError(cardNumber,"Can't be blank", false) 
        isValidNumber = false
    }else if(!isNumber(number)){
        showError(cardNumber,"Wrong format, number only", false)
        isValidNumber = false
    }else{
        showSuccess(cardNumber, false)
        isValidNumber = true
    }

    if(!isRequired(month)){
        showError(cardDateMonth,"Can't be blank", true)
        isValidMonth = false
    } else if(!isNumber(month)){
            showError(cardDateMonth,"Wrong format, number only", true)
            isValidMonth = false
    }else {
        showSuccess(cardDateMonth, true)
        isValidMonth = true
    }

    if(!isRequired(year)){
        showError(cardDateYear,"Cant't be blank", true)
        isValidYear = false
    } else if(!isNumber(year)){
        showError(cardDateYear,"Wrong format, number only", true)
        isValidYear = false
    }else {
        showSuccess(cardDateYear,true)
        isValidYear = true
    }
    

    if(!isRequired(cvc)) {
        showError(cardCVC,"Cant't be blank", false)
        isValidCVC = false
    } else if(!isNumber(cvc)) {
        showError(cardCVC,"Wrong format, number only", false)
        isValidCVC = false
    } else {
        showSuccess(cardCVC, false)
        isValidCVC = true
    }
    
    if(isValidName && isValidNumber && isValidMonth && isValidYear && isValidCVC){
        this.submit()
    }
    
})