import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { UserGroup } from './UserGroup/UserGroup';
import Classes from './ActionTool2.module.css';

export const ActionTool2 = (props) => {
    const style = ["btn-group pr-5", Classes.ActionTool2].join(' ');
    return (
        <div className={style}>
            <button className={"btn"}><UserGroup /></button>
            <button className={"btn"}>
                <div className={Classes.ActionTool2__Button}>Assign</div>
            </button>
            <button className={"btn"}><FontAwesomeIcon icon={faUserCircle} /></button>
        </div>
    );
}
