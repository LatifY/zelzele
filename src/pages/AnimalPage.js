import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import paw from "../assets/img/paw.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { onSnapshot, collection } from "@firebase/firestore";
import { db } from "../firebase";

export default function AnimalPage() {
    let { id } = useParams();
    const [obj, setObj] = useState({});

    onSnapshot(collection(db, "zelzele"), (snapshot) => {
        snapshot.docs.map((doc) => {
            if (doc.id == id) {
                setObj(doc.data());
            }
        });
    });

    return (
        <div className="animal-page">
            <LazyLoadImage
                src={obj.photo == "nophoto" ? paw : obj.photo}
                alt=""
            />
            <div class="info">
                <h1>
                    Sevgili dostumuz, <span>{obj.name}</span>
                </h1>
                <div className="text">
                    <b>Sahibi:</b> {obj.owner}
                </div>
                <div className="text">
                    <b>Yer:</b> {obj.city}
                </div>
                <div className="text">
                    <b>Açıklama:</b> <br></br>
                    {obj.description}
                </div>
                <div class="text">
                    <b>İletişim:</b> {obj.contact}
                </div>
            </div>
        </div>
    );
}
