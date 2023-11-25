const $input = document.getElementById("my_input")
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

$submit.addEventListener('click', (event) => {
    event.preventDefault()
    window.history.back()
    alert(JSON.stringify(payload))
})

const createCheckbox = (year, value) => {
    return `<label class="checkbox">
                    <input type="checkbox" class="checkbox-input" />
                    <span class = "checkmark"></span>
                    <span class = "money">${value}</span>
                    <span class = "year">${year}</span>
           </label>`
}

const calculateTax = (event) => {
    const payments = [

        {value: '78 000 рублей', year: 'в 1-ый год'},
        {value: '78 000 рублей', year: 'во 2-ой год'},
        {value: '78 000 рублей', year: 'в 3-ий год'},
        {value: '26 000 рублей', year: 'в 4-ый год'}

    ]

    const paymentsMarkup = payments.map((payment) => {
        return createCheckbox(payment.year, payment.value);
    })

    const checkbox = $checkboxesContainer.querySelectorAll('.checkbox')
    if (checkbox.length > 0) {
        return;
    }

    $checkboxesContainer.insertAdjacentHTML('beforeend', paymentsMarkup.join(''))
}

$calcButton.addEventListener('click', calculateTax)

$checkboxesContainer.addEventListener('click',(event) => {
        console.log("Checkbox is checked..");
    })

const invalidChars = ['e'];

$input.addEventListener('keydown', (event) => {
    if (invalidChars.includes(event.key)) {
        event.preventDefault();
    }
})