import { Icon } from '@material-ui/core';
import { Close, Favorite, FlashOn, Replay, Star } from '@material-ui/icons';
import React from 'react';

import "./swipe-button.css";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <Icon className="swipeButtons__repeat">
                <Replay fontSize="large" />
            </Icon>
            <Icon className="swipeButtons__left">
                <Close fontSize="large" />
            </Icon>
            <Icon className="swipeButtons__star">
                <Star fontSize="large" />
            </Icon>
            <Icon className="swipeButtons__right">
                <Favorite fontSize="large" />
            </Icon>
            <Icon className="swipeButtons__lightning">
                <FlashOn fontSize="large" />
            </Icon>
        </div>
    )
}

export default SwipeButtons
