import React from 'react'
import paw from "../assets/img/paw.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from "../assets/img/placeholder.png";


export default function Animal({ obj }) {
  return (
    <a href={"/" + obj["id"]} className='animal'>
        <div class="images">
            <img src={obj.photo == "nophoto" ? paw : obj.photo} alt="" />
        </div>
        <div class="info">
            <div class="name">{obj.name}</div>
            <br></br>
            <div class="sahip"><b>Sahip Adı:</b> {obj.owner}</div>
            <div class="location"><b>Yer: </b> {obj.city}</div>
            <div class="description"><b>Açıklama: </b> {obj.description}</div>
            <br></br>
            <div class="contact"><a href={'tel:' + obj.contact}>{obj.contact}</a> &nbsp; <FontAwesomeIcon color='#a3a3a3a3' icon={faPhone}/></div>
        </div>
    </a>
  )
}
