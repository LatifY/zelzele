import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Linkm({ title, link, className }) {
    return (
        <div className={"link " + className}>
            <a href={link} target={"_blank"}>
                <span className="title">{title}</span>
                <FontAwesomeIcon className="icon" icon={faLink} />
            </a>
        </div>
    );
}
