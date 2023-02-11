import React from "react";
import logo from "../assets/img/logo.png"
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    let location = useLocation()
    return (
        <header>
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div className="upper">
                <div className="menu left">
                    <Link to={"/ilan-ver"}>kayıp hayvan ilanı ver</Link>
                </div>
                <div className="menu right">
                    <span><Link to={"/contact"}>iletişim</Link> </span>
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
                location.pathname != "/" && (<Link to={"/"}>ana menüye dön</Link>)
            }
        </header>
    );
}
