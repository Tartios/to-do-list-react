export default class Api {
    constructor(options) {
        this.url = options;
    }
    getToDo() {
        return fetch(`${this.url}/`, {
            headers: {
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
        console.log(toDo);
        return fetch(`${this.url}/${toDo._id}`, {
            method: 'PUT',
            headers: {
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

    deleteToDo(toDoId) {
        return fetch(`${this.url}/${toDoId}`, {
            method: 'DELETE',
            headers: {
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