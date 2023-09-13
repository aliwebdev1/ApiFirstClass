function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => showData(json))
}

function showData(data) {
    const div = document.getElementById('div');
    div.innerText = data.title;

}

