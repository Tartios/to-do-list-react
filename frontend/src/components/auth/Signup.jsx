import React, { useState } from "react";

export default function SignUp () {
    const [data, setData] = useState({
       userName: "",
       email: "",
       password: "", 
    });

    const handleChange = (e) => {
        const { userName, value } = e.target;
        setData({
            ...data,
            [userName]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, email, password } = data;
        // handleSignUp(userName, email, password);
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <h2>Зарегистрируйтесь чтобы воспользоваться приложением</h2>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="userName">Логин</label>
                <input type="text" id="userName" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={handleChange} />
                <label htmlFor="password">Пароль</label>
                <input type="text" id="password" onChange={handleChange} />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}