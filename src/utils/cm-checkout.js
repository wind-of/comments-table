function checkCMForIssues({name, content, isEditing}) {
  const nameErrors = [];
  const cmErrors = [];

  // Comment's checkout
  content.split(' ').map(word => {
    word.length > 31 ? cmErrors.push(`There are too long word(s) in comment`) : '';
  });
  
  if(content.length > 256) {
    cmErrors.push('The comment is too long. Max - 256.')
  }

  if(content.length < 6) {
    cmErrors.push('The comment is too short. Min - 6.')
  }

  // Name's checkout
  if(isEditing === false) {
    if(name.length > 16){
      nameErrors.push('The name is too long. Limit is 16.')
    }
    
    if(name.length < 4) {
      nameErrors.push('The name is too short. Min. length - 4')
    }
  }

  if(isEditing === true) {
    return cmErrors.length > 0 ? {cmErrors} : 'Nice' 
  } else {
    return cmErrors.length > 0 || nameErrors.length > 0 ? {cmErrors, nameErrors} : 'Nice'
  }
}


export default checkCMForIssues;