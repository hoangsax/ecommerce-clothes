import styled from 'styled-components'
import { Row, Col } from "react-grid-system";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';

import React, { useState } from 'react';

const RowOfTable = (props) => {
    const [count, setCount] = useState(props.product.quantity);

    const incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);
    const Delete = () => {
        setCount(0)
    }
    if(count <= 0) {
        return <></> 
    }
    return (
        <div>
        <HoverRow>
        <Row style={RowTable}>
            <Col md={7}>
            <Row>
                <Col lg={2.5}>
                    <ContainerImg> 
                        <ImgProduct src={props.product.img} alt="Nothing"/>
                    </ContainerImg>
                </Col>
                <Col lg ={9.5}><Describe>{props.product.des}</Describe></Col>
            </Row>
            </Col>
            <Col md={2}>
                {props.product.price.toLocaleString()}
            </Col>
            <Col md={1.2}>
                <div style={ArrowIcon}>
                    {count}
                    <Arrow>
                        <ArrowUp>
                            <IoIosArrowDropup onClick={incrementCount}/>
                        </ArrowUp>
                        <ArrowDown>
                            <IoIosArrowDropdown onClick={decrementCount}/>
                        </ArrowDown>
                    </Arrow>
                </div>
            </Col>
            <Col md={1.8}>
                {props.product.subtotal.toLocaleString()}
            <Close>
                <AiOutlineCloseCircle size={18} color="#888888" onClick={Delete}/>
            </Close>
            </Col>
        </Row>
        </HoverRow>
        <Line/>
        </div>
    )
}
const ContainerImg = styled.div`
    border: solid 1px;
    height: 80px;
    width: 80px;
`
const Close = styled.div`
    position: absolute;
    right: 20px;
    top: 0;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: black;
        transform: scale(1.1);
    }
`
const Line = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;

`
const ImgProduct = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`
const Describe = styled.div`
    display: inline;
`
const HoverRow = styled.div`
    transition: all 0.3s;
    &:hover {
        background-color: #EEEEEE;
    }
    cursor: pointer;
`
const RowTable = {
    height: "100px",
    display: "flex",
    alignItems: "center",
}
const Arrow = styled.i`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    text-align: center;
    align-items: center;
    border-radius: 10px;
`
const ArrowIcon = {
    display: "flex",
    verticalAlign: "middle",   
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingLeft: "10px",
    paddingTop: "2px",
    paddingBottom: "2px",
    borderRadius: "10px",
}
const ArrowUp = styled.i`
    color: #A2A6B0;
    margin-bottom: 2px;
    cursor: "pointer";
    transition: all .3s;
    :hover {
        transform: scale(1.1);
        color: #E54646;
    }
`
const ArrowDown = styled.i`
    color: #A2A6B0;
    cursor: "pointer";
    transition: all .3s;
    :hover {
        transform: scale(1.1);
        color: #E54646;
    }
`

export default RowOfTable