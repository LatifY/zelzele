import React, { useState } from "react";
import { storage } from "../firebase";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { phone } from "phone";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import { db } from "../firebase";
import { collection } from "@firebase/firestore";
import { Link } from "react-router-dom";


export default function Ad() {
    const [owner, setOwner] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [photo, setPhoto] = useState(null);
    const [ip, setIP] = useState("");

    const [disabled, setDisabled] = useState(false);

    const [url, setURL] = useState("");

    // function delay(time) {
    //   return new Promise(resolve => setTimeout(resolve, time));
    // }

    // async function testadd() {
    //   console.log("zazazaza")
    //   let b = data.reverse()
    //   for(let i = 0; i < data.length; i++){
    //     let a = b[i]
    //     addDoc(collection(db, "zelzele"), {
    //       owner: a["owner"],
    //       name: a["name"],
    //       city: a["city"],
    //       description: a["description"],
    //       contact: a["contact"],
    //       photo: a["photo"],
    //       active: true,
    //       createdAt: Date.now()
    //   });

    //     await delay(500)
    //   }
    // }

  //   async function getData(){
  //     const res = await axios('http://www.geoplugin.net/json.gp');
  //     return res;
  //  }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(disabled){
          return null
        }


        setDisabled(true);
        if (!isValid()) {
            toast.error("Formdaki hataları lütfen düzeltin.");
            setDisabled(false);
            return false;
        }


        if (photo != null) {
          if(photo.size > 5242880){
            toast.error("Dosya boyutu 5 MB'den fazla olamaz.")
            setDisabled(false);
            return false
          }
            const imageRef = ref(storage, uuidv4());
            uploadBytes(imageRef, photo)
                .then(() => {
                    getDownloadURL(imageRef)
                        .then((url) => {
                            setURL(url);
                            addAndFinish(url);
                        })
                        .catch((err) => {
                            console.log(err.message, "image url error");
                            toast.error(
                                "Sunucu kaynaklı bir hata meydana geldi."
                            );
                            return false;
                        });
                })
                .catch((err) => {
                    console.log(err.message, "upload bytes error");

                    toast.error("Sunucu kaynaklı bir hata meydana geldi.");
                    return false;
                });
        } 
        else {
            addAndFinish("");
        }

        setDisabled(false);
    };

    const formReset = () => {
      setOwner("");
      setName("");
      setCity("");
      setDescription("");
      setContact("");
      setPhoto(null);
      setURL("");
    }

    const addAndFinish = (urll) => {
        toast.success(
            "İlan başarıyla sisteme kaydedildi. İncelendikten sonra yayına alınacaktır."
        );
        addDoc(collection(db, "zelzele"), {
            owner: owner,
            name: name,
            city: city,
            description: description,
            contact: "+90 " + contact,
            photo: urll != "" ? urll : "nophoto",
            active: false,
            createdAt: Date.now(),
        });

        formReset();
    };

    const isValid = () => {
        if (owner.length > 25 || owner.length == 0 || owner == null) {
            return false;
        }
        if (name.length > 20 || name.length == 0 || name == null) {
            return false;
        }
        if (city.length > 20 || city.length == 0 || city == null) {
            return false;
        }
        if (description.length > 500) {
            return false;
        }
        if (contact.length != 10 || contact.length == 0 || contact == null) {
            return false;
        }
        if (!phone("+90 " + contact)) {
            return false;
        }
        return true;
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    return (
        <>
            <br></br>
            <div className="ad">
                <h1>
                    Kayıp Hayvan İlanı Ver{" "}
                    <span className="smallinfo">(* alanlar zorunludur)</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <label className="label" for="owner">
                        Adınız (*)
                    </label>
                    <input
                        required
                        maxLength={25}
                        className="input"
                        name="owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        id="owner"
                        type="text"
                    />

                    <label className="label" for="name">
                        Hayvan Adı (*){" "}
                        <span className="smallinfo">
                            (nasıl sesleniyorsunuz)
                        </span>
                    </label>
                    <input
                        required
                        maxLength={20}
                        className="input"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        type="text"
                    />

                    <label className="label" for="city">
                        Şehir (*)
                    </label>
                    <input
                        required
                        maxLength={20}
                        className="input"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="city"
                        type="text"
                    />

                    <label className="label" for="description">
                        Açıklama
                    </label>
                    <textarea
                        maxLength={500}
                        className="input"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                    />

                    <label className="label" for="contact">
                        Telefon Numarası{" "}
                        <span className="smallinfo">(+90 veya 0 koymayın)</span>
                    </label>
                    <input
                        required
                        className="input"
                        placeholder="555 555 55 55"
                        maxLength={10}
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        id="contact"
                        type={"tel"}
                    />

                    <label className="label" for="photo">
                        Fotoğraf Yükle
                    </label>
                    <input
                        accept="image/*"
                        type="file"
                        id="photo"
                        onChange={handleImageChange}
                        onSubmit={(e) => (e.target.value = null)}
                    />
                    
                    <span className="kvkk-info">bu formu doldurarak KVKK metnimizi kabul etmiş olursunuz.</span>
                    

                    <input
                        className="send"
                        disabled={disabled}
                        value="Gönder"
                        type="submit"
                    />

                </form>
            </div>
        </>
    );
}
