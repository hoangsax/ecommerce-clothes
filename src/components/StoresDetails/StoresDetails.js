import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let data = [];
const StoresDetails = (props) => {
    let navigate = useNavigate();
    const [num, setNum] = useState(20);
    const [currPage, setcurrPage] = useState(1);
    const [detail, setdetail] = useState({
        id: 1,
        name: "Rick & Morty T-shirt",
        name_detail: "See our top-picks for jean jackets that are oversized, distressed, and downright cool.",
        img_cover: "https://cf.shopee.vn/file/520da097555edc0f286bb11b08eff168",
    });
    const [countPage, setcountPage] = useState(0);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [isFirst, setIsFirst] = useState(true);
    const getProductPerPage = (products) => {
        const indexLast = currPage * num;
        const indexFirst = indexLast - num;
        setdetail(products.slice(indexFirst, indexLast));
    };
    useEffect(() => {
        const fetchProducts = async () => {
            if (isFirst) {
                const res = await axios.get(
                    "http://localhost/ecommerce/backend/api/product/read.php"
                );
                data = res.data.data.filter((p) => p.isDisabled === 0);
                setcountPage(Math.ceil(data.length / num));
                setfilteredProducts(data);
            }
            const indexLast = currPage * num;
            const indexFirst = indexLast - num;
            const pds = filteredProducts.slice(indexFirst, indexLast);
            // setproducts(pds);
        };
        fetchProducts();
        setIsFirst(false);
    }, [currPage, num, filteredProducts, isFirst]);

    return (
        <>
            <Header
                setfilteredProducts={setfilteredProducts}
                getProductPerPage={getProductPerPage}
                setcountPage={setcountPage}
                num={num}
                data={data}
                setcurrPage={setcurrPage}
            />
            <Container>
                <Description>
                    <Logo>
                        <img src={detail.img_cover} style={{ height: '100%', width: '100%' }} alt="" />
                    </Logo>
                    <StoreDes>
                        <StoreName> {detail.name} </StoreName>
                        <StoreNameDetail> {detail.name_detail} </StoreNameDetail>
                    </StoreDes>
                    <SendDesign>
                        <SendButton onClick={() => navigate('/stores/' + detail.id + '/design')}>SEND DESIGN</SendButton>
                    </SendDesign>
                </Description>
            </Container>
            <Footer />
        </>
    );
};

const SendButton = styled.button`
    height: 70px;
    width: 250px;
    background-color: #000;
    color: #fff;
`

const SendDesign = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 35%;
    margin: auto 0;
`;

const StoreNameDetail = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #B6B6B6;
`;

const StoreName = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
`;

const StoreDes = styled.div`
    width: 50%;
    margin: auto 0;
`;

const Logo = styled.div`
    height: 150px;
    width: 15%;
    overflow: hidden;
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    height: 160px;
    width: 100%;
    margin: 10px;
    border-bottom: 1px solid #000;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 100%;
      margin: 0;
    }
  `;

export default StoresDetails;
