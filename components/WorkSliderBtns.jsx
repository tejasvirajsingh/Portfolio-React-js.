import React from "react";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={`${containerStyles}`}>
            <button
                className={`${btnStyles} cursor-pointer`}
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button
                className={`${btnStyles} cursor-pointer`}
                onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
