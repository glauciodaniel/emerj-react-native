import React, { useState } from 'react';
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
    {id:"1", text: "CURSOS", icon: "cursos.png", screen:"CoursesScreen"},
    {id:"2", text: "AÇÕES EDUCACIONAIS", icon: "acoesEducacionais.png", screen:"EducationalActionsScreen"},
    {id:"3", text: "Virtual EMERJ", icon: "virtualEmerj.png", screen:"VirtualEmerjScreen"},
    {id:"4", text: "ATENDIMENTO", icon: "atendimento.png", screen:"AttendanceScreen"}
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

const ButtonCustom = styled.TouchableOpacity`
background: #c0ccda;
border-bottom-width: 10px;
border-bottom-color: #b8977e;
flex-direction: row;
width: 100%;
align-items: center;
`

const Item = ({item, onPress}) => (  
            <ButtonCustom onPress={onPress}>
                <ImageFlatLinks source={require('../../assets/images/meusPontos.png')} />
                <TextFlatLinks>{item.text}</TextFlatLinks>
            </ButtonCustom>
);

export default function HomeItemsComponents (){
    const [selectedId, setSelectedId] = useState(null);

 const renderItem = ({item}:any)=>{
     return(
         <Item
         item={item}
         onPress={() => setSelectedId(item.id)}
        />
     )
     
 }
    
    return (
        <>
            <BackgroundContainer>
                <ContentItems>
                        <FlatListItems>
                            <FlatList
                            data={FlatLinks}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            extraData={selectedId}
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