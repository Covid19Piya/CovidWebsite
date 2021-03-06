import firebase from 'firebase'

export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    var checkUser = null
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        checkUser = user.email
        
      }
    })

    let user = firebase.auth().currentUser;
    

    const firestore = getFirestore();
    firestore.collection('Patient').doc(project.id).collection("Case").add({
      Address: project.Address,
      Age: project.Age,
      Confirm: 'No',
      Help: project.Help,
      Name: project.Name,
      PhoneNumber1: project.PhoneNumber1,
      Request: '',
      Status: 'Waiting',
      gender: project.gender,
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });

    firestore.collection('Patient').doc(project.id).set({
      Address: project.Address,
      Age: project.Age,
      Confirm: 'No',
      Help: project.Help,
      Name: project.Name,
      PhoneNumber1: user.phoneNumber,
      Request: '',
      Status: 'waiting',
      gender: project.gender,
    })
  }
};