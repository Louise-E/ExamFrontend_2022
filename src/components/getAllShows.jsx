/*
import React, {useState} from "react";

const URL = "https://louise-cph.dk/progEksamen/api/show/all";
//const [state, setState] = useState('');

function urlFunction() {
    fetch(URL)
        .then(handleHttpErrors)
        .then(data => console.log(data.name))
        .catch(error => {
            if (error.status) {
                error.fullError.then(e => console.log(e.msg))
            } else {
                console.log("Network Error")
            }
        });
}

function handleHttpErrors(response) {
    if (!response.ok) {
        return Promise.reject({status: response.status, fullError: response.json()})
    }
}

const showTable = document.querySelector('#allShowsTable');
getAllShows('tableAllShows')

function getAllShows(DOMElement) {
    return fetch(URL + "/all")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const allData = data.all;
            const showsInList = document.querySelector('#getShowTable');
            for (let shows of allData) {
                let tableRow = DOMElement.insertRow(0);
                let cell0 = tableRow.insertCell(0);
                let cell1 = tableRow.insertCell(1);
                let cell2 = tableRow.insertCell(2);
                let cell3 = tableRow.insertCell(3);
                let cell4 = tableRow.insertCell(4);
                let cell5 = tableRow.insertCell(5);
                let cell6 = tableRow.insertCell(5);

                cell0.innerHTML = shows.showId;
                cell1.innerHTML = shows.showName;
                cell2.innerHTML = shows.duration;
                cell3.innerHTML = shows.location;
                cell4.innerHTML = shows.startDate;
                cell5.innerHTML = shows.startTime;
                cell6.innerHTML = shows.guestList;

            }
        })
}

const GetAllShows = ({props}) => {
    return (
        <div id="tableAllShows">
            <h2>Here are all available shows</h2>

        </div>
    )
//Lav liste, brug GET allShows user api - ligger i settings
}
export default getAllShows;*/
