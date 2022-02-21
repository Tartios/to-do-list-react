import React from "react";

export default function SignUp () {
    return (
        <div>
            <h1>Регистрация</h1>
            <h2>Зарегистрируйтесь чтобы воспользоваться приложением</h2>
            <form action="submit">
                <label htmlFor="">Логин</label>
                <input type="text" id="name" />
                <label htmlFor="">Email</label>
                <input type="email" id="email" />
                <label htmlFor="">Пароль</label>
                <input type="text" id="password" />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}