import styled from 'styled-components'
import { Container, Row, Col } from "react-grid-system";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import Scrollbars from "react-scrollbars-custom";
import RowOfTable from './RowOfTable';
import {Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
const lstCart = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0upF_DooL0hjwus-eb9Xb2WKRwGTdAkJig&usqp=CAU",
        "des": "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
        "price": 13599000,
        "quantity": 1,
        "subtotal": 12543,
        "name": "MSI MEG Trident X 10SD-1012AU"
    },
    
] 

const Cart = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    return (
        <div> 
            <Header/>  
            <Container fluid>
                <Row>
                    <Col md={7.5}>
                        <Title>Shopping Cart</Title>
                            <Row style={RowHeader}>
                                <Col md={7}>
                                    Item
                                </Col>
                                <Col md={2}>
                                    Price
                                </Col>
                                <Col md={1}>
                                    Qty 
                                </Col>
                                <Col md={2}>
                                    SubTotal
                                </Col>
                            </Row>
                            <Line/>
                            <Scrollbars
                                // style={{ height: 350, marginTop: 30 }}
                                style={Scrollbarstyled}
                                noScrollX
                            >
                            {lstCart.map(product => (
                                <RowOfTable product={product}/>
                            ))}
                        </Scrollbars>              
                        <Row>
                            <Col sm={4}>
                                <ButtonContinue>Continue Shopping</ButtonContinue>
                            </Col>
                            <Col sm={8}>
                                <ButtonClear>Clear Shopping Cart</ButtonClear>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} style={ContainerSummary}>
                        <Title>Summary</Title>
                        <ContainerInput>
                            <NameInput>Name</NameInput>
                            <Input type="text" onChange={e => setName(e.target.value)} />
                        </ContainerInput>
                        <ContainerInput>
                            <NameInput>Phone Number</NameInput>
                            <Input type="text" onChange={e => setPhone(e.target.value)} />
                        </ContainerInput>
                        <ContainerInput>
                            <NameInput>Address</NameInput>
                            <Input type="text" onChange={e => setAddress(e.target.value)} />
                        </ContainerInput>
                        <Line/>
                        <Row>
                            <Col lg={8.5}>
                                <Ship>Shipping</Ship>
                            </Col>
                            <Col lg={2.5}>
                                <ValueShip>{(21000).toLocaleString()}</ValueShip>
                                {/* <ValueShip>{document.getElementById("name").value}</ValueShip> */}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg={8.5}>
                                <Ship>Order Total</Ship>
                            </Col>
                            <Col lg={2.5}>
                                <ValueShip>{(13245).toLocaleString()}</ValueShip>
                            </Col>
                        </Row>
                        <br />
                        <Link to="/checkout" style={LinkStyle} state={{ name: name, address: address, phone: phone, lstCart: lstCart }}>
                            {name !== "" && phone !== "" && address !== "" && <ButtonCheckout>  
                                Proceed to Checkout
                            </ButtonCheckout>}
                            {(name === "" || phone === "" || address === "") && <ButtonCheckout 
                                disabled    
                            >
                                Please fill all fields
                            </ButtonCheckout>}
                        </Link>
                        {/* <ButtonCheckout>      
                            <PayPalScriptProvider >
                                Checkout with 
                                <PayPalButtons
                                style={{ layout: "vertical" }}
                                fundingSource="paypal"
                                />
                            </PayPalScriptProvider>
                        </ButtonCheckout>     */}
                        {name !== "" && phone !== "" && address !== "" && <ButtonMultiple>
                            Checkout with Multiple Address
                        </ButtonMultiple>}    
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    )
}
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 15px;
`
const ButtonContinue = styled.button`
    border-radius: 20px;
    width: 160px;
    height: 30px;
    margin-top: 10px;
    transition: all 0.3s;
    border: solid #CCCCCC;
    :hover {
        background-color: #BBBBBB;
        cursor: pointer;
        /* transform: scale(1.01); */
    }
    padding-left: 10px;
    padding-right: 10px;
`
const ButtonClear = styled.button`
    border-radius: 20px;
    width: 160px;
    height: 30px;
    margin-top: 10px;
    color: white;
    background-color: #111111;
    transition: all .3s;
    border: solid #222222;
    :hover {
        background-color: #000000;
        cursor: pointer;
        /* transform: scale(1.01); */
    }
    padding-left: 10px;
    padding-right: 10px;
`
const Line = styled.hr`
    /* margin-top: 10px; */
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;

`
const ContainerInput = styled.div`
    background-color: #F5F7FF;
    margin-bottom: 10px;
`
const NameInput = styled.div`
    font-weight: 600;
    margin-bottom: 10px;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: solid #CCCCCC 1px;
    padding-left: 2%;
`
const Scrollbarstyled = {
    height: "47vh",
}

const RowHeader = {
    fontSide: "120%",
    fontWeight: "600",
    marginBottom: "10px",
}
const ContainerSummary = {
    backgroundColor: "#F5F7FF",
    // backgroundColor: "red",
    borderRadius: "10px",
    // boxShadow: "-5px 5px #444444",
}
const Ship = styled.span`
    font-weight: 600;
    margin-bottom: 10px; 
    padding-right: 20px;
`
const ValueShip = styled.span`
    font-weight: 600;

`
const ButtonCheckout = styled.button`
    border-radius: 20px;
    background-color: #0156FF;
    color: #FFFFFF;
    font-weight: 600;
    display: block;
    height: 40px;
    width: 100%;
    border: none;
    transition: all .5s;
    :hover, :active {
        background-color: #0043C8;
    }
    margin-bottom: 20px;
    cursor: pointer;
    :disabled {
        background-color: #444444;
    }
`
const ButtonMultiple = styled.button`
    border-radius: 20px;
    background-color: #FFB800;
    color: #FFFFFF;
    font-weight: 600;
    display: block;
    height: 40px;
    width: 100%;
    border: none;
    transition: all .5s;
    :hover, :active {
        background-color: #C0AC7B;
    }
    margin-bottom: 10px;
    cursor: pointer;
`
const LinkStyle = {
    textDecoration: "none",
}
export default Cart
