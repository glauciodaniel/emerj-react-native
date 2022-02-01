import React from 'react';
import { Text, View } from '../Themed';
import styled from 'styled-components';
import { Link } from '@react-navigation/native';
import { FlatList, Image } from 'react-native';
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
const FlatLinks = [
    {id:"0", text: "PONTOS", icon: "meusPontos.png", screen:"PointsScreen"},
    {id:"1", text: "CURSOS", icon: "training.svg", screen:"CoursesScreen"},
    {id:"2", text: "AÇÕES EDUCACIONAIS", icon: "training.svg", screen:"EducationalActionsScreen"},
    {id:"3", text: "Virtual EMERJ", icon: "training.svg", screen:"VirtualEmerjScreen"},
    {id:"4", text: "ATENDIMENTO", icon: "training.svg", screen:"AttendanceScreen"}
]

const ImageFlatLinks = styled.Image`
    width: 70px;
    height: 70px;
    margin-left: 20%;
`

const TextFlatLinks = styled.Text`
    font-size: 20;
    color: #333;
    margin-left: 10%;
`
const LinkFlat = styled.Button`
    display: flex;
    flex-direction: row;

`

const ButtonCustom = styled.View`
background: #c0ccda;
border-bottom-width: 10px;
border-bottom-color: #b8977e;
flex-direction: row;
width: 100%;
align-items: center;
`
function ButtonLink(props:any){
    const path = ``;

    return (

   
            <ButtonCustom>
                <ImageFlatLinks source={require('../../assets/images/meusPontos.png')} />
                <TextFlatLinks>texto{props.text}</TextFlatLinks>
            </ButtonCustom>

    )

}


export default function HomeItemsComponents (){
    return (
        <>
            <BackgroundContainer>
                <ContentItems>
                        <FlatListItems>
                            <FlatList
                            data={FlatLinks}
                            renderItem={ButtonLink}
                            keyExtractor={(item) => item.id}
                             />


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