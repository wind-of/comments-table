function checkCommentForIssues(comment) {
  const errors = new Array();
  const {name, content, id} = comment;


  if (content === '') {
    errors.push('empty-comment')
  } else {
    content.split(' ').map(word => {
      word.length > 31 ? errors.push(`too-long-word`) : '';
    });
  }
  
  if(!comment.isEditing) {
    if(name === '') {
      errors.push('empty-name')
    } else  if (name.length > 16){
      errors.push('too-long-name')
    }
  }
  
  return errors.length > 0 ? errors : 'Success'; 
}


export default {
  checkCommentForIssues
};