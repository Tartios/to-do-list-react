import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn () {

    const [data, setData] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = data;
        // handleSignIn(userName, password);
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <h2>Введите логин и пароль чтобы войти</h2>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="userName">Логин</label>
                <input type="text" id="userName" onChange={handleChange} />
                <label htmlFor="password">Пароль</label>
                <input type="text" id="password" onChange={handleChange} />
                <button>Войти</button>
                <p>Нет аккаунта? <Link to="/signup">Зарегистрируйтесь</Link></p>
            </form>
        </div>
    )
}