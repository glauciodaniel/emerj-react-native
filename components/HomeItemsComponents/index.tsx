import React from 'react';
import { Text, View } from '../Themed';
import styled from 'styled-components';
import { Link } from '@react-navigation/native';
import { Image } from 'react-native';
import Card from '../Card';

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
    position: absolute;
    z-index: 0;
`

const ContentItems = styled.View`
position: absolute;
width: 100%;
height: 100%;
flex-direction: row;
align-items: flex-end;
`
const FlatListItems = styled.View`
width: 60%;
height: 450px;
background-color: rgba(255,255,255,0.5);
`

const IconsItems = styled.View`
width: 35%;
height: 450px;
background-color: rgba(255,255,255,0.4);
margin-left: 2%;
`
const Flatlinks = [
    {text: "PONTOS", icon: "meusPontos.png", screen:"PointsScreen"},
    {text: "CURSOS", icon: "training.svg", screen:"CoursesScreen"},
    {text: "AÇÕES EDUCACIONAIS", icon: "training.svg", screen:"EducationalActionsScreen"},
    {text: "Virtual EMERJ", icon: "training.svg", screen:"VirtualEmerjScreen"},
    {text: "ATENDIMENTO", icon: "training.svg", screen:"AttendanceScreen"}
]

function ButtonLink(props:any){
    const path = ``;

    return (
        <Link to={{screen: props.screen }}>
            <Image source={require('../../assets/images/meusPontos.png')} />
            {props.text}
        </Link>
    )

}


export default function HomeItemsComponents (){
    return (
        <>
            <BackgroundContainer>
                <ContentItems>
                        <FlatListItems>
                            <Text>FlatList</Text>
                        </FlatListItems>
                        <IconsItems>
                            <Card />
                        </IconsItems>
                </ContentItems>
                {/* <ImageBackground source={require('../../assets/images/background.jpg')}/> */}
            </BackgroundContainer>
        </>
    )
}