import React, { useState, useEffect } from "react"
import "./tinder-card.css";
import TinderCard from "react-tinder-card";
import { data } from "../data";
import axios from "../config/axios"
import SwipeButtons from "./SwipeButtons";


const TinderCards = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get("http://localhost:8081/tinder/cards");
            setPeople(req.data);
        }
        fetchData()
        console.log('sddsd')
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!!");
    }

    return (
        <div className="tinder-cards">
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard
                        infinite
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div>
                            <div style={{
                                backgroundImage: `url(${person.imgUrl
                                    })`
                            }}
                                className="card"
                            >
                                <div className="card__id">
                                    <h2>{person.name}</h2>
                                    <h3>24 Tahun</h3>
                                </div>
                            </div>
                        </div>


                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
