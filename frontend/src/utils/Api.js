export default class Api {
    constructor(options) {
        this.url = options;
    }
    getToDo() {
        return fetch(`${this.url}/`, {
            headers: {
                // authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
      
            method: "GET",
        })
        .then((res) => {
            return res.json();
        })
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((err) => {
        //     console.log('Ошибка', err);
        // });
    }

    postToDo(data) {
        return fetch(`${this.url}/`, {
            method: 'POST',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                toDo: data,
                creator: 'Sergey'
            })
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    }

    putToDo(toDo) {
        return fetch(`${this.url}/${toDo._id}`, {
            method: 'PUT',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toDo: toDo,
            })
        })
            .then(res => res.json())
            // .then((data) => {
            //     console.log(data);
            // })
            .catch(err => console.log(err))
    }
    
    completeToDo(toDo) {
        return fetch(`${this.url}/completed/${toDo._id}`, {
            method: 'PUT',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: true,
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    deleteToDo(toDoId) {
        return fetch(`${this.url}/${toDoId}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: toDoId,
            })
        })
        .then(res => {
            res.json();
        })
        .catch(err => console.log(err))
    }
}