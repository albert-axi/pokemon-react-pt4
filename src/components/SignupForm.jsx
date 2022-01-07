import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const SignupForm = () => {

    const handleSignup = e => {
        e.preventDefault()

        const {email, password, username} = e.target

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                // updateProfile(user, {
                //     displayName: username
                //   }).then((res) => {
                //     // Profile updated!
                //     console.log("Profile updated!", res)
                //   }).catch((error) => {
                //     // An error occurred
                //     console.log(error)
                //   });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <form onSubmit={handleSignup}>
            <input type="text" id="username" placeholder="username" />
            <input type="text" id="email" placeholder="email" />
            <input type="password" id="password" placeholder="password" />
            <input type="submit" />
        </form>
    )
}

export default SignupForm