import React from "react";
import yas from "../assets/img/yas.png"

export default function Footer() {
    return (
        <div className="footer">
            <img width={24} src={yas} alt="" />
            <a
                target="_blank"
                href="https://github.com/LatifY"
                className="footer-credit"
            >
                <div className="footer-credit-text">
                    <span className="footer-credit-text-name">
                        Latif Yılmaz
                    </span>
                    <br />
                    <span className="footer-credit-text-description">
                        Developer
                    </span>
                </div>
            </a>

            <div className="footer-copyright">
                <span className="footer-rights">
                    Bu site yardım amaçlı kurulmuş olup, herhangi bir maddi
                    kazanç gözetmemektedir. <br></br>
                    Sitede paylaşılan bilgiler yardımsever vatandaşların
                    birbirleri ile kolay şekilde iletişim kurabilmelerini
                    sağlamak adına depolanacaktır.
                </span>
                <br />
                <br />
                <span className="api">
                    Veritabanındaki tüm bilgiler <a target={"_blank"} href="https://yakinimibul.net/">yakinimibul.net üzerinde depolanmaktadır.</a>
                </span>
            </div>
        </div>
    );
}
