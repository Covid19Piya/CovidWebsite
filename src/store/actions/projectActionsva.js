import firebase from 'firebase'

export const createProjectva = (projectva) => {
  return (dispatch, getState, {getFirestore}) => {
    var checkUser = null

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        checkUser = user.email
        console.log(checkUser)
      }
    })

    const firestore = getFirestore();
    
    firestore.collection('PostDonate').add({
      address: projectva.Location,
      detail: projectva.Description,    
      fileName : projectva.fileName,
      fileType: projectva.fileType,
      name: projectva.Name,
      other: projectva.Other,
      phoneNumber: projectva.PhoneNumber2,
      timestamp: "",
      topic: projectva.Title,
      url: projectva.url,
      id: projectva.id,

    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};