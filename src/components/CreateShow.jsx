import {useState} from "react";
import Header from "./Header";
import {NavBar} from "./NavBar";
import React from "react";

/*this.showName = showName;
        this.duration = duration;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.guestList = guestList;*/

const CreateShow = () => {
    const [showName, setShowName] = useState('');
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [guestList, setGuestList] = useState('');

    const createShow = async (shows) => {
        const results = await fetch(createShow, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(shows)
        });
        const data = await results.json();
        console.log(data);
        //setShowName(data.showName)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        document.querySelectorAll("showInput")

        const shows = {
            showName,
            duration,
            location,
            startDate,
            startTime,
            guestList
        };

        if (!showName || !duration || !location || !startDate || !startTime || !guestList) {
            return alert("Please fill out missing fields");
        }

        createShow(shows);
        setShowName('');
        setDuration('');
        setLocation('');
        setStartDate('');
        setStartTime('')
        setGuestList('');

        document.querySelectorAll("input").forEach((e) => {
            e.style.backgroundColor = "cornflowerblue";
        });
        alert("New Show created")

        return (
            <div>
                <Header/>
                <NavBar/>
                <div className='tableShows'>
                    <h2 className='showsText'>Here you can create a new show</h2>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label className='showsText'>ShowName</label>
                            <br/>
                            <input
                                type='text'
                                value={showName}
                                onChange={(e) => setShowName(e.target.value)}/>
                        </div>
                        <br/>/
                        <div>
                            <label className='showsText'>Duration</label>
                            <br/>
                            <input
                                type='text'
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}/>
                        </div>
                        <br/>/
                        <div>
                            <label className='showsText'>Location</label>
                            <br/>
                            <input
                                type='text'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}/>
                        </div>
                        <br/>/
                        <div>
                            <label className='showsText'>Startdate</label>
                            <br/>
                            <input
                                type='text'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}/>
                        </div>
                        <br/>/
                        <div>
                            <label className='showsText'>Start-time</label>
                            <br/>
                            <input
                                type='text'
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}/>
                        </div>
                        <br/>/
                        <div>
                            <label className='showsText'>Guest-List</label>
                            <br/>
                            <input
                                type='text'
                                value={guestList}
                                onChange={(e) => setGuestList(e.target.value)}/>
                        </div>
                        <br/>
                        b
                        <button className='btn-block' type='submit'>Create Show</button>
                    </form>
                </div>
                <footer/>
            </div>
        );
    }
}
export default CreateShow;