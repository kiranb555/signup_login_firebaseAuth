import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCHOSbbjHZwmEMrNr9HOlAMlEVniHl8Mxs",
  authDomain: "http://localhost:3000",
  projectId: "login-signup-85427",
  messageingSenderId: "803974560214"
};

const fire = firebase.initializeApp(config);

export default fire;
