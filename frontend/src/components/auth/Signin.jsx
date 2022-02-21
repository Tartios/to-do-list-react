import React from "react";

export default function SignIn () {
    return (
        <div>
            <h1>Авторизация</h1>
            <h2>Введите логин и пароль чтобы войти</h2>
            <form action="submit">
                <label htmlFor="">Логин</label>
                <input type="text" id="name" />
                <label htmlFor="">Пароль</label>
                <input type="text" id="password" />
                <button>Войти</button>
                <p>Нет аккаунта? <a href="/signup">Зарегистрируйтесь</a></p>
            </form>
        </div>
    )
}