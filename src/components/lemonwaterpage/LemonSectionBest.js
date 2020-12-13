import React, { useState, useEffect } from 'react';
import lemon3 from '../../images/lemon3.jpg';

const lemonbest = React.createRef();

const LemonSectionBest = ({ offsetY }) => {

    const [opacityCount, setOpacityCount] = useState(0);

    useEffect(()=>{
        if(lemonbest.current.offsetTop <= offsetY+500){
            const difference = (offsetY - lemonbest.current.offsetTop+500)/400;
            if(difference < 1 ){
                setOpacityCount(difference);
            } else {
                setOpacityCount(1);  
            }
        }
    },[offsetY]);

    const styles={opacity: `${opacityCount}`}
    
    return (
        <section className="lemon-section-best" ref={lemonbest} style={styles}>
            <div >
                <img className="lemon3" src={lemon3} alt="lemon"/>
            </div>
            <div className="lemon-section-best-text" >
               <h3>What Are the Best Lemons?</h3>
               <p >
                    <b>“Regular”</b> lemons: Yellow in colour and oblong lemons. Known as Eureka, Avalon or Bearss this is the “regular” lemon sold in most US and Canada supermarkets.
               </p>
               <p>
                    <b>Organic lemons:</b> Due to the cultivation without chemicals or pesticides, organic lemons are the best lemons in terms of health benefits from their rind, peelings and juice.
               </p>
               <p>
                   <b>Not Meyer lemon:</b> Meyer lemon is not true lemon but rather a hybrid of lemon and orange. It is more sweet and is often used for baking.
               </p>
               <p>
                   <b>Not bottled lemon juice:</b> Bottled lemon juice contains preservatives and barely any health benefits left.
               </p>
            </div>
        </section>
    )
}

export default LemonSectionBest
