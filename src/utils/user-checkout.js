const UserCheckout = {
  signingIn(user) {
    console.log(user)
  },
  signingUp({email, password, repeatedPassword}) {
    const passwordErrors = [];
    const emailErrors = [];
    const symbols =  ['!', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

    function areThereExtraCharacter() {
      const checkForSymbols = email.split('').map(letter => symbols.includes(letter)) 

      return checkForSymbols.includes(true)
    }

    // Email checkout
    if(email === '') 
      emailErrors.push(`E-mail can't to be empty.`) 
    else if(email.indexOf('@') === -1) 
      emailErrors.push(`Incorrect E-mail. There aren't the '@'-character.`)
    else if(areThereExtraCharacter())
      emailErrors.push('Incorrect E-mail.')
    else{
      const [emailAddress, emailDomen] = email.split('@');
      if(email.split('@').length > 2)
        emailErrors.push(`Incorrect E-mail. This may contain only 1 character "@"`);

      if(emailAddress === "") 
        emailErrors.push(`Email's address can't to be empty.`);
      else if(emailAddress.split('').includes('.')) 
        emailErrors.push(`Incorrect E-mail. There are '.'-character in left part.`);

      if(emailDomen === '') 
        emailErrors.push(`Email's domen can't to be empty.`)
      else {
        if(emailDomen.split('').includes('.')) {
          if(emailDomen.split('.')[0] === '' || emailDomen.split('.')[1] === '') 
            emailErrors.push(`Incorrect E-mail. The right part should have characters before and after the '.'-character `)
        } else {
          emailErrors.push(`Incorrect E-mail. The right part haven't the "."-character`)
        }
      }
    }
    
    // Passwords checkout
    if(password === '') passwordErrors.push('You should enter your password.')
    else if(password !== repeatedPassword) passwordErrors.push('Passwords should match.')


    // FINALLY
    if(passwordErrors.length === 0 || emailErrors.length === 0) 
      return {emailErrors, passwordErrors}
      
    return 'Nice'
  }
}

export default UserCheckout