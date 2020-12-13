import React, { useState, useEffect } from 'react';
import LemonTop from './lemonwaterpage/LemonTop';
import LemonSectionBenefits from './lemonwaterpage/LemonSectionBenefits';
import LemonSectionBest from './lemonwaterpage/LemonSectionBest';
import LemonSectionMake from './lemonwaterpage/LemonSectionMake';
import LemonBottom from './lemonwaterpage/LemonBottom';
// import LemonPics from './lemonwaterpage/LemonPics';

const Lemon = () => {
    const [offsetY, setOffsetY] = useState(0);
    const hendleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', hendleScroll);
        return (() => window.removeEventListener('scroll', hendleScroll));
    }, []);

    return (
        <div className="lemon"> 
           <LemonTop offsetY={offsetY} />
           <LemonSectionBenefits offsetY={offsetY}/>
           <LemonSectionBest offsetY={offsetY}/>
           <LemonSectionMake offsetY={offsetY}/>
           {/* <LemonPics /> */}
           <LemonBottom />
        </div>  
    )
}

export default Lemon;
