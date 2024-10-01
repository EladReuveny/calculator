const input = document.querySelector('input')
const deleteBtn = document.querySelector('.delete-btn')
const buttons = document.querySelectorAll('.btn')

deleteBtn.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1)
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonId = button.getAttribute('id')
        if (buttonId === 'clear-btn') {
            input.value = ''
        } else if (buttonId === 'result-btn') {
            try {
                const resultVal = eval(input.value)
                input.value = resultVal
                input.style.color = 'hsl(120, 100%, 51%)'
            } catch (e) {
                input.value = 'Syntax Error: Try again.'
                input.style.color = 'hsl(0, 89%, 67%)'
            }
        } else if (buttonId === 'parenthesis-btn') {
            if (input.value.lastIndexOf(')') >= input.value.lastIndexOf('('))
                input.value += '('
            else    
                input.value += ')'
        } else if (buttonId === 'plus-minus') {
            const currentValue = input.value

            if (currentValue !== '' && !isNaN(currentValue)) {
                if (currentValue.startsWith('-'))
                    input.value = currentValue.substring(1); 
                else
                    input.value = '-' + currentValue;
            } else
                input.value += '-'
        } else {
            input.value += button.textContent
        }
    })
})