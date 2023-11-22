const $input = document.getElementById("my-input")
const $buttons= document.getElementById("buttons")
const $form= document.getElementById("form")
const $submit= document.getElementById("submit")
const $calcButton= document.getElementById("calcbutton")
const $checkboxesContainer= document.getElementById("checkboxes")


const payload = {
    salary: '',
    payment: [],
    type: 'payment'
}


const onInputChange = (event) => {
    payload.salary = event.target.value
}

$input.addEventListener('change', onInputChange)


$buttons.addEventListener('click', (event) => {
    payload.type = event.target.dataset.type
    console.log(payload)
})


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    window.history.back()
    alert(JSON.stringify(payload))
})

const createCheckbox = (year, value) => {
    return `<label>
                  <input name='payments' type="checkbox" class="checkbox"/>
                  <span>${value}</span>
                  <span>${year}</span>
             </label>`
}
const calculateTax = (event) => {
    // TODO:
    const payments = [{year: 1, value: 1000} , {year: 2, value: 1000}]

    const paymentsMarkup = payments.map((payment) => {
        return createCheckbox(payment.year, payment.value);
    })

    $checkboxesContainer.insertAdjacentHTML('beforeend', paymentsMarkup.join(''))

}


$calcButton.addEventListener('click', calculateTax)

$checkboxesContainer.addEventListener('click',(event) => {
    // TODO:
})