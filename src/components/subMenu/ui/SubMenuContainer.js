import React from 'react';
import {SubMenuList} from "../index";
import {getStaticData} from "../../../shared/static/data";

function SubMenuContainer(props) {
    const mainData = getStaticData.submenu['main']
    const libraryData = getStaticData.submenu['library']

    return (
        <>
            <SubMenuList data={mainData} />
            <SubMenuList data={libraryData} />
        </>
    );
}

export default SubMenuContainer;