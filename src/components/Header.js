import React from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/img/logo.png"

export default function Header() {

    return (
        <header>
            <a href="/"><img src={logo} alt="" /></a>
            <div className="upper">
                <div className="menu left">
                    <a href="/ilan-ver">kayıp hayvan ilanı ver</a>
                </div>
                <div className="menu right">
                    <span>iletişim</span>
                </div>
            </div>

            <div className="info">
                <a href="https://deprem.io" target={"_blank"}>
                    enkaz bildirimi ve daha fazla bilgi için <b>deprem.io</b>{" "}
                    adresini ziyaret edin.
                </a>
            </div>
            
            {/* <div className="error">
                    teknik aksaklıktan ötürü resimler gözükmüyor. yakında düzelir.
            </div> */}
            <br></br>
            {
                window.location.pathname != "/" && (<a href="/">ana menüye dön</a>)
            }
        </header>
    );
}
