import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";
import {STYLES} from "../../constants/constants";

function Card(props) {
    const {card} = props

    const cardData = useMemo(() => {
        return {
            'title': card?.title || '',
            'videoSrc': card?.video_src || ''
        }
    }, [card])

    return (
        <CardContainer>
            <VideoBox>
                <ReactPlayer
                    url={cardData['videoSrc']}
                    playing={false}
                    loop={false}
                    controls={false}
                    width={'100%'}
                    height={'100%'}
                    playsinline
                    style={{
                        borderRadius: '5px'
                    }}
                    config={{
                        youtube: {
                            playerVars: { controls: 1, showinfo: 0 }
                        },
                    }}

                />
            </VideoBox>

            <TitleVideo>
                {cardData['title']}
            </TitleVideo>

        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 100%;
    max-width: calc(100% / 6 - 16px);
    height: auto;
    
    margin-bottom: 20px;
    
    display: block;
    
    @media screen and (max-width: ${STYLES.MEDIA.MinXS}px) {
        max-width: calc(100% / 5 - 16px);
    }
    
    @media screen and (max-width: ${STYLES.MEDIA.MinLG}px) {
       max-width: calc(100% / 4 - 16px);
    }
    
    @media screen and (max-width: ${STYLES.MEDIA.MinMD}px) {
       max-width: calc(100% / 3 - 16px);
    }
    
    @media screen and (max-width: ${STYLES.MEDIA.MinSM}px) {
       max-width: calc(100% / 2 - 16px);
    }
`

const VideoBox = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 10px;
    
    overflow: hidden;
`

const TitleVideo = styled.h3`
    margin-top: 15px;
    font-size: 14px;
    fon-weight: 500;
`

export default Card;