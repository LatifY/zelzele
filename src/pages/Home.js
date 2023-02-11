import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Link from "../components/Linkm";
import Animal from "../components/Animal";

import harita from "../assets/img/harita.png";
import { data } from "../data";

import { db } from "../firebase";

export default function Home() {
    const [ads, setAds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [adsPerPage] = useState(12);

    useEffect(() => {
        const q = query(collection(db, "zelzele"), orderBy("createdAt", "desc"));

        onSnapshot(q, (snapshot) => {
            const datas = snapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

            setAds(
                datas.filter((d) => {
                    return d["active"] == true;
                })
            );
        });
    }, []);

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

    // const handleDownload = () => {
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i]["photo"] != "nophoto") {
    //             window.open(data[i]["photo"], '_blank');
    //         }
    //     }
    // };

    // function download(url, filename) {
    //     fetch(url)
    //       .then(response => response.blob())
    //       .then(blob => {
    //         const link = document.createElement("a");
    //         link.href = URL.createObjectURL(blob);
    //         link.download = filename;
    //         link.click();
    //     })
    //     .catch(console.error);
    //   }

    return (
        <>
            {console.log(ads)}
            <div class="kayip">
                <h1>Kayıp Hayvan İlanları</h1>
                <h2>Dostlarımızı unutmayalım ❤</h2>

                <div class="animals">
                    {currentAds.map((ad) => (
                        <Animal obj={ad} />
                    ))}
                </div>

                <div class="nav">
                    {pages.map((num) => (
                        <div
                            className={
                                "num " + (currentPage == num && "active")
                            }
                            onClick={() => paginate(num)}
                        >
                            <span>{num}</span>{" "}
                        </div>
                    ))}
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div class="diyorsaniz">
                <h1>Yararlı Linkler</h1>
                <div class="links">
                    <Link
                        className={"ahbap"}
                        title={"Ahbap Yardım"}
                        link="https://ahbap.org/bagisci-ol"
                    />
                    <Link
                        className={"afad"}
                        title={"Afad Yardım"}
                        link="https://www.afad.gov.tr/depremkampanyasi2"
                    />
                    <Link
                        className={"depremio"}
                        title={"deprem.io"}
                        link="https://deprem.io/"
                    />
                    <Link
                        title={"İBB Deprem Tahminleri"}
                        link="https://evimmusait.com/"
                    />
                    <Link
                        title={"Evim Müsait"}
                        link="https://evimmusait.com/"
                    />
                    <Link
                        title={"Yakınımı Bul"}
                        link="https://yakinimibul.net/"
                    />
                    <Link
                        title={"Afet Bilgi"}
                        link="https://www.afetbilgi.com/"
                    />
                    <Link title={"Afet Çözüm"} link="https://afetcozum.com/" />
                    <Link
                        title={"Deprem Yardımı"}
                        link="https://depremyardim.com/"
                    />
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div class="afet">
                <h1>İBB AFET HARİTASI</h1>
                <a
                    href="https://gisibb.maps.arcgis.com/apps/MapSeries/index.html?appid=b49d96adc42e439cbab407b4a27c30d8"
                    target={"_blank"}
                >
                    <img src={harita} alt="" />
                </a>
            </div>
        </>
    );
}
