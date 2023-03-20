import React, { useState } from "react";

import styles from "./Form.module.css";
// import styles from "./Cards.module.css";
import validation from "./validation";

export default function Form(props) {

    const [userData, setUserData] = useState({username: '', password:''});

    const [errors, setErrors] = useState({username: '', password: ''});


    const handleInputChange = (event) => {
        setUserData({
            ...userData, [event.target.name]: event.target.value
        });
        setErrors(
            validation({
                ...userData, [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" 
                    name='username' 
                    value={userData.username} 
                    onChange={handleInputChange}
                    className={errors.username && styles.warning}/> <br />
                {errors.username ? <span className={styles.danger}>{errors.username} </span>  : null}

                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="text" 
                    name='password' 
                    value={userData.password} 
                    onChange={handleInputChange}
                    className={errors.password && styles.warning} /> <br />
                    {errors.password ? <span className={styles.danger}>{errors.password} </span>  : null}
                
                <br /><br />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}