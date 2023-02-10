import React from "react";
import { Navigate } from "react-router-dom";

export default function Header() {

    return (
        <header>
                <h1><a href="/">zelzele</a></h1>

            <div className="upper">
                <div className="menu left">
                    <a href="https://yakinimibul.net/kayip-hayvan-bildir.html">kayıp hayvan ilanı ver</a>
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
            <br></br>
            {
                window.location.pathname != "/" && (<a href="/">ana menüye dön</a>)
            }
        </header>
    );
}
