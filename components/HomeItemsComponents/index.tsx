import React from 'react';
import { Text, View } from '../Themed';
import styled from 'styled-components';

const BackgroundContainer = styled.View`
    height: 100%;
    width: 100%;
    background: #1e2d3eee;
    position: relative;
`
const ImageBackground = styled.Image`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
`

const ContentItems = styled.View`
position: absolute;
width: 100%;
min-height: 100%;
`

export default function HomeItemsComponents (){
    return (
        <>
            <BackgroundContainer>
                <ContentItems>
                    <Text>Home</Text>
                </ContentItems>
                <ImageBackground source={require('../../assets/images/background.jpg')}/>
            </BackgroundContainer>
        </>
    )
}