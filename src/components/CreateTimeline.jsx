import React, {useState} from "react";
import {timelineCreate} from "../settings";
import Footer from "./Footer";
import Header from "./Header";
import {NavBar} from "./NavBar";
//husk tilbage knapper, onclick?
const CreateTimeline = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    let [username, setUsername] = useState("");
    const [startDate, setStartdate] = useState("");
    const [endDate, setEndDate] = useState("");

    const createTimeline = async (timeline) => {
        const res = await fetch(timelineCreate, {
            method: "POST",
            headers:{
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(timeline)
        });
        const data = await res.json();
        console.log(data);
        setUsername(data.username);
    };

    const onSubmit = (e) =>{
        e.preventDefault();

        document.querySelectorAll("timelineInput")

        const timeline = {
            description,
            username,
            startDate,
            endDate,
            name
        };


        if (!description|| !startDate || !endDate || !name){
            return alert(<h2>"Please enter the missing data"</h2>);
        }
        if (!username){
            return alert(<h2>There is no username</h2>)
        }

        createTimeline(timeline);

        setDescription("");
        setUsername("");
        setStartdate("");
        setEndDate("");
        setName("");

        document.querySelectorAll("input").forEach((e)=>{
            e.style.backgroundColor = "cornflowerblue";
        });
        alert(<h5>Du har lavet en ny timeline</h5>)
    }

    return (
        <div>
            <Header/>
            <NavBar/>
            <div className="tableTimeline">
                <h2 className="timelineText">Her kan du lave en ny timeline</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label className="timelineText">Navn</label>
                        <br/>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="timelineText">Beskrivelse</label>
                        <br/>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="timelineText">Start dato</label>
                        <br/>
                        <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartdate(e.target.value)}/>
                    </div>
                    <br/>
                    <div>
                        <label className="timelineText">Slut dato</label>
                        <br/>
                        <input
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                    <br/>
                    <button className="btn-default" type="submit"> Lav ny timeline </button>

                </form>
            </div>
            <Footer/>
        </div>


    );
}

export default CreateTimeline;
