function areThereExtraCharacter(arr) {
  const symbols =  ['!', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

  const checkForSymbols = arr.split('').map(letter => symbols.includes(letter)) 

  return checkForSymbols.includes(true)
}


function checkPasswordForIssues(password, repeatedPassword) {
  const passwordErrors = [];
  if(password === '') {
    passwordErrors.push('You should enter your password.')
  }
  else if(password.length < 6) {
    passwordErrors.push('Password is too short. Min. length - 6') 
  }
  else if(password.length > 16) {
    passwordErrors.push('Password is too long. The limit is 16.')
  }
  else if(repeatedPassword && password !== repeatedPassword) {
    passwordErrors.push('Passwords should match.')
  }

  return passwordErrors
}


function checkEmailForIssues(email) {
  const emailIssues = [];
  
  if(email === '') {
    emailIssues.push(`E-mail can't to be empty.`) 
  } 
  
  else if (email.indexOf('@') === -1) {
    emailIssues.push(`Incorrect E-mail. There aren't the '@'-character.`)
  }

  else if(areThereExtraCharacter(email)) {
    emailIssues.push('Incorrect E-mail.')
  }


  else{
    const [emailAddress, emailDomen] = email.split('@');

    if(email.split('@').length > 2) {
      emailIssues.push(`Incorrect E-mail. This may contain only 1 character "@"`)
    }


    if(emailAddress === "") {
      emailIssues.push(`Email's address can't to be empty.`)
    }
    else if(emailAddress.split('').includes('.')) {
      emailIssues.push(`Incorrect E-mail. There are '.'-character in left part.`);
    }


    if(emailDomen === '') {
      emailIssues.push(`Email's domen can't to be empty.`)
    }
    else {
      if(emailDomen.split('').includes('.') === false) {
        emailIssues.push(`Incorrect E-mail. The right part haven't the "."-character`)
      }
      else if(emailDomen.split('.')[0] === '' || emailDomen.split('.')[1] === '') {
        emailIssues.push(`Incorrect E-mail. The right part should have characters before and after the '.'-character `)
      }
    }
  }

  return emailIssues;
}


const AuthFormCheckout = {
  signingIn({email, password}) {
    const emailErrors = checkEmailForIssues(email);
    const passwordErrors = checkPasswordForIssues(password);

    return emailErrors.length === 0 || passwordErrors.length === 0 ? 'Nice' : {emailErrors, passwordErrors};
  },
  signingUp({email, password, repeatedPassword}) {
    const emailErrors = checkEmailForIssues(email);
    const passwordErrors = checkPasswordForIssues(password, repeatedPassword);

    return emailErrors.length === 0 || passwordErrors.length === 0 ? 'Nice' : {emailErrors, passwordErrors};
  }
}

export default AuthFormCheckout