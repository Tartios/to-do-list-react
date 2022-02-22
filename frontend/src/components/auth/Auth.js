export const BASE_URL = 'http://localhost:3000'
//мне наверно не нужен для этого отдельный компонент, возможно стоит перенести в api
//и еще useHistory тут нужно сделать, урок регистрации в реакте
export const register = (userName, email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userName,
            email,
            password,
        })
    })
    .then(res => res.json())//пропустил здесь одну фазу, не понял нафига она
    .then((data) => {
        localStorage.setItem('token', data.token);//в место эта часть прописана в app.js 187 строка
    })
    .catch(err => console.log(err))
};

export const auth = (userName, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify({
            userName,
            password,
        })
    })
    .then(res => res.json())
    .then((data) => {
        if(data.jwt) {
            localStorage.setItem('jwt', data.jwt);
            return data
        } else {
            return
        }
    })
    .catch(err => console.log(err))
}