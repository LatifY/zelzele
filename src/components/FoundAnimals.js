import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Link from "../components/Linkm";
import { db } from "../firebase";
import FoundAnimal from "./FoundAnimal";

export default function FoundAnimals() {
    const [ads, setAds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [adsPerPage] = useState(12);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const q = query(
            collection(db, "found"),
            orderBy("createdAt", "desc")
        );

        onSnapshot(q, (snapshot) => {
            const datas = snapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

            let filteredData = datas.filter((d) => {
                return d["active"] == true;
            });

            if (search != "") {
                filteredData = filteredData.filter(d => {
                    return d["name"].toLowerCase().includes(search.toLowerCase()) ||
                      d["city"].toLowerCase().includes(search.toLowerCase());
                  })
            }

            setAds(filteredData);
        });
    }, [search]);

    const indexOfLastPost = currentPage * adsPerPage;
    const indexOfFirstPost = indexOfLastPost - adsPerPage;
    const currentAds = ads.slice(indexOfFirstPost, indexOfLastPost);
    const pageCount = Math.floor(ads.length / adsPerPage) + 1;
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div class="kayip">
            <h1>Bulunan Hayvan İlanları</h1>
            <h2>Çevrede bulunan dostlarımız ❤</h2>

            <div class="filter">
                <label for="filter">Filtre</label>
                <br></br>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="filter"
                    type="text"
                    placeholder="Hayvan adı / Şehir"
                />
            </div>

            <div class="animals">
                {currentAds.map((ad) => (
                    <FoundAnimal obj={ad} />
                ))}
            </div>

            <div class="nav">
                {pages.map((num) => (
                    <div
                        className={"num " + (currentPage == num && "active")}
                        onClick={() => paginate(num)}
                    >
                        <span>{num}</span>{" "}
                    </div>
                ))}
            </div>
        </div>
    );
}
