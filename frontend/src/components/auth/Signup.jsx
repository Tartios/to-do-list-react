import React, { useState } from "react";

export default function SignUp ({ handleSignUp }) {
    const [data, setData] = useState({
       userName: "",
       email: "",
       password: "", 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, email, password } = data;
        handleSignUp(userName, email, password);
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <h2>Зарегистрируйтесь чтобы воспользоваться приложением</h2>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="userName">Логин</label>
                <input type="text" id="userName" name="userName" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}