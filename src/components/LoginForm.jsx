import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const LoginForm = e => {

    const [user, setUser] = useContext(UserContext); 

    const handleLogin = e => {
        e.preventDefault()

        const {email, password, username} = e.target

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                setUser(user)

                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log(errorCode, errorMessage)
            });

    }

    return(
        <form onSubmit={handleLogin}>
            <input type="text" id="email" placeholder="email" />
            <input type="password" id="password" placeholder="password" />
            <input type="submit" />
        </form>
    )
}

export default LoginForm