document.getElementById('generate').addEventListener('click', () => {
  event.preventDefault()

  let length = prompt('Enter between 8 and 128 characters')

  while (length < 8 || length > 128) {
    alert('Please enter requested character amount.')
    length = prompt('Enter between 8 and 128 characters')
  }

  let lowerCaseRes = confirm('Want password to have lowercase letters?')
  let upperCaseRes = confirm('Want password to have uppercase letters?')
  let numberRes = confirm('Want password to have numbers?')
  let specialRes = confirm('Want password to have special characters?')


  const lowerCase = `abcdefghijklmnopqrstuvwxyz`
  const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  const numberic = `1234567890`
  const special = `!@#$%&*`

  let tempPass = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*`
  let randomPass = ''

  if (lowerCaseRes) { tempPass += lowerCase }
  if (upperCaseRes) { tempPass += upperCase }
  if (numberRes) { tempPass += numberic }
  if (specialRes) { tempPass += special }

  for (let i = 0; i < length; i++) {
    randomPass += tempPass[Math.floor(Math.random() * tempPass.length)]
  }

  document.getElementById('password').textContent = randomPass
})