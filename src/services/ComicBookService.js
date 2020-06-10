
const server = "https://comicstack.herokuapp.com/api";

const createComicBook = (userId, comicBook) =>
    fetch(server + "/users/" + userId + "/collection", {
        method: 'POST',
        body: JSON.stringify(comicBook),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteComicBook = (userId, comicBookId) =>
    fetch(server + "/users/" + userId + "/collection/" + comicBookId, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findComicBookById = (userId, comicBookId) =>
    fetch(server + "/users/" + userId + "/collection/" + comicBookId)
        .then(response => response.json())

const findComicBooksForUser = (userId) =>
    fetch(server + "/users/" + userId + "/collection")
        .then(response => response.json())

const findComicBooksForUserSorted = (userId, sortBy) =>
    fetch(server + "/users/" + userId + "/collection?sort=" + sortBy)
        .then(response => response.json())

const findComicBooksForUserSortedSearch = (userId, sortBy, resource, query) =>
    fetch(server + "/users/" + userId + "/collection?sort=" + sortBy + "&resource=" + resource + "&query=" + query)
        .then(response => response.json())

export default {
    createComicBook,
    deleteComicBook,
    findComicBookById,
    findComicBooksForUser,
    findComicBooksForUserSorted,
    findComicBooksForUserSortedSearch
}