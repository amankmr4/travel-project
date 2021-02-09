/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    // Gets all books
    getPlaces: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getPlace: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deletePlace: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    savePlace: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
