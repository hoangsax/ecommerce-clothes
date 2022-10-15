import styled from 'styled-components'
import { Container, Row, Col } from "react-grid-system";
import Header from './Header';
import Footer from './Footer';
import Scrollbars from "react-scrollbars-custom";
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsPhoneVibrate } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {useState} from 'react'

const Checkout = () => {
    const location = useLocation()
    const { name, address, phone, lstCart } = location.state
    console.log("asadaf", lstCart)
    const [cod, setCod] = useState("bank");
    return (
        <div>
            <Header/>
            <TitleShipping>Shipping Address</TitleShipping>
                <Container fluid>
                    <Row>
                        <Col lg={8}>
                            <Line/>
                            <Row>
                                <Col lg={6}>
                                    <ContainField>
                                        <Key>
                                            <MdOutlineLocationOn size={25} color="#4272D0"/>
                                            <NameKey>Address:</NameKey>
                                        </Key>
                                        <Value>{address}</Value>
                                    </ContainField>
                                    <ContainField>
                                        <Key>
                                            <BsPhoneVibrate size={23} color="#4272D0"/>
                                            <NameKey>Phone:</NameKey>
                                        </Key>
                                        <Value>{phone}</Value>
                                    </ContainField>
                                    <ContainField>
                                        <Key>
                                            <BsPersonCircle size={21} color="#4272D0"/>
                                            <NameKey>Name:</NameKey>
                                        </Key>
                                        <Value>{name}</Value>
                                    </ContainField>
                                    <Line/>
                                    <ContainerInput>
                                        <NameInput>Enter discount code</NameInput>
                                        <Input type="text" />
                                    </ContainerInput>
                                    <ButtonDiscount>
                                        Apply Discount
                                    </ButtonDiscount>
                                </Col>
                                <Col  lg={6}>
                                    <ContainerInput>
                                        <NameInput>Payment methods</NameInput>
                                        <Selection id="cars" name="Bank" onChange={e =>setCod(e.target.value)}>
                                            <Option value="bank">Bank</Option>
                                            <Option value="delivery">Payment on delivery</Option>
                                        </Selection>
                                    </ContainerInput>
                                    {cod === "bank" && <ContainerInput>
                                        <NameInput>Bank</NameInput>
                                        <Selection id="cars" name="OCB">
                                            <Option value="OCB">OCB</Option>
                                            <Option value="ACB">ACB</Option>
                                            <Option value="TPBank">TPBank</Option>
                                            <Option value="SeABank">SeABank</Option>
                                            <Option value="Techcombank">Techcombank</Option>
                                            <Option value="HDBank">HDBank</Option>
                                            <Option value="Sacombank">Sacombank</Option>
                                        </Selection>
                                    </ContainerInput>}
                                    {cod === "bank" && <ContainerInput>
                                        <NameInput>Card Number</NameInput>
                                        <Input type="text" />
                                    </ContainerInput>}
                                    {cod === "bank" && <ContainerInput>
                                        <NameInput>Name on Card</NameInput>
                                        <Input type="text" />
                                    </ContainerInput>}
                                    <Row>
                                        <Col lg={8.5}>
                                            <Ship>Shipping</Ship>
                                        </Col>
                                        <Col lg={2.5}>
                                            <ValueShip>{(21000).toLocaleString()}</ValueShip>
                                            {/* <ValueShip>{document.getElementById("name").value}</ValueShip> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                           <ButtonPay>Pay {(12000000).toLocaleString()}</ButtonPay> 
                                        </Col>
                                        <Col md= {5}>
                                        <Link to="/cart" style={LinkStyle}>
                                        <ButtonBack>Back</ButtonBack>
                                        </Link>
                                            
                                        </Col>
                                    </Row>
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <ContainerSummary>
                            <TitleSummary>
                                Order Summary
                            </TitleSummary>
                            <br/>
                            <Line/>
                            <Scrollbars
                                // style={{ height: 350, marginTop: 30 }}
                                style={Scrollbarstyled}
                                noScrollX
                            >
                                {lstCart.map(product => (
                                    <StyleRow>
                                    <Row>
                                        <Col lg={3.5}>
                                            <ContainerImg> 
                                                <ImgProduct src={product.img} alt="Nothing"/>
                                            </ContainerImg>
                                        </Col>
                                        <Col lg={8.5}>
                                            <Describe>
                                                {product.name}
                                            </Describe>
                                            <Row>
                                                <Col lg={4}><QuanPrice>Qty: {product.quantity}</QuanPrice></Col>
                                                <Col lg={8}><QuanPrice>Price: {product.price.toLocaleString()}</QuanPrice></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </StyleRow>
                                ))}
                            </Scrollbars>    
                            </ContainerSummary>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
        </div>
    )
}
const TitleShipping = styled.div`
    font-weight: 600;
    font-size: 1.3rem;
    padding-left: 15px;
    margin-bottom: 8px;
    margin-top: 8px;
`
const Line = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;
`
const ContainField = styled.div `
`
const Key = styled.div`
    font-weight: 600;
    margin-top: 10px;
    display: flex;
    align-items: center;
`
const NameKey = styled.i`
    padding-left: 10px;
`
const Value = styled.div`
    /* background-color: yellow; */
    margin-top: 10px;
    padding-left: 20px;
    color: 	#AAAAAA;
    font-size: 85%;
`
const ContainerInput = styled.div`
    background-color: #F5F7FF;
    margin-bottom: 10px;
    border-top-right-radius: 15px;
    padding-top: 5px;
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
const Selection = styled.select`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: solid #CCCCCC 1px;
    padding-left: 2%; 
`


const ButtonDiscount = styled.button`
    border-radius: 20px;
    height: 35px;
    color: #0156FF;
    font-weight: 600;
    width: 100%;
    border: solid 1px #0156FF;
    cursor: pointer;
    transition: all .3s;
    :hover, :active {
        background-color: #4272D0;
        color: white;
    }
`
const ButtonPay = styled.button`
    background-color: #0156FF;
    border-radius: 20px;
    height: 35px;
    color: white;
    font-weight: 600;
    width: 100%;
    border: solid 1px #0156FF;
    cursor: pointer;
    transition: all .3s;
    :hover, :active {
        background-color: #4272D0;
        transform: scale(1.01);
    }
    margin-top: 10px;
`
const ButtonBack = styled.button`
    background-color: #FF0000;
    border-radius: 20px;
    height: 35px;
    color: white;
    font-weight: 600;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: all .3s;
    :hover, :active {
        transform: scale(1.01);
    }
    margin-top: 10px;
`
const Option = styled.option`
    /* background-color: red; */
    height: 10px;
    font-weight: 600;
` 
const Ship = styled.span`
    font-weight: 600;
    margin-bottom: 10px; 
    padding-right: 20px;
`
const ValueShip = styled.span`
    font-weight: 600;

`
const LinkStyle = {
    textDecoration: "none",
}
const ContainerSummary = styled.div`
    background-color: #F5F7FF;
    padding-top: 20px;
    padding-left: 20px;
    border-radius: 20px;
`
const TitleSummary = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
`
const Scrollbarstyled = {
    height: "40vh",
}
const ImgProduct = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
    margin-bottom: 20px;
`
const ContainerImg = styled.div`
    border: solid 1px;
    height: 80px;
    width: 80px;
    margin-bottom: 20px;
`
const Describe = styled.div`
    display: inline;
    height: 80px;
`
const QuanPrice = styled.div`
    font-weight: 600;
    margin-top: 30px;

`
const StyleRow = styled.div`
    cursor: pointer;
    :hover {
        background-color:#4272D0;
        /* background-color:#CAE5E8; */
        color: white;
    }
    padding-top: 20px;
    padding-left: 10px;
    border-radius: 10px;
    transition: all .3s;
`
export default Checkout;