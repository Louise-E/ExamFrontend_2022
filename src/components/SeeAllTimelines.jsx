import React from "react";
import {timelineAllForUser} from "../settings";
import data from "bootstrap/js/src/dom/data";

const timelineTable = document.querySelector('#allTimelinesTable');
getAllTimelines('tableAllTimelines');

function getAllTimelines(userName){
    return fetch({timelineAllForUser + userName}){
        .then(function (response){
        return response.json();
    })
            .then(function (data){
            const allData = data.all;
            const timelinesInList = document.querySelector('#getAllTimelines');
            for (let timelines of allData){
                let tr = userName.insertRow(0);
                let c0 = tr.insertCell(0);
                let c1 = tr.insertCell(1);
                let c2 = tr.insertCell(2);
                let c3 = tr.insertCell(3);
                let c4 = tr.insertCell(4);

                c0.innerHTML = timelines.id;
                c1.innerHTML = timelines.name;
                c2.innerHTML = timelines.description;
                c3.innerHTML = timelines.startDate;
                c4.innerHTML = timelines.endDate;
            }
        })
}
}
const SeeAllTimelines = ({props}) => {
    return (
        <div id="tableAllTimelines">
            <h2>Her kan du se alle dine timelines</h2>

        </div>
    )
//Lav liste, brug GET allTimelines user api - ligger i settings, id - name - description - startdate - enddate
}

export default SeeAllTimelines;