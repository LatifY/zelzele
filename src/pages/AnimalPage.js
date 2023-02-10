import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import paw from "../assets/img/paw.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AnimalPage() {
    let { id } = useParams();
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] == id) {
            obj = data[i];
            break;
        }
    }

    return (
        <div className="animal-page">
            <LazyLoadImage src={obj.photo == "nophoto" ? paw : obj.photo} alt="" />
            <div class="info">
                <h1>Sevgili dostumuz, <span>{obj.name}</span></h1>
                <div className="text"><b>Sahibi:</b> {obj.owner}</div>
                <div className="text"><b>Yer:</b> {obj.city}</div>
                <div className="text"><b>Açıklama:</b> <br></br>{obj.description}</div>
                <div class="text"><b>İletişim:</b> {obj.contact}</div>
            </div>
        </div>
    );
}
