import styled from "styled-components";
// import { Container, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";
// import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';//bug do cai nay ne =====================
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TableRow(props) {
  return (
    <tr>
      <td style={{ color: "black", fontWeight: "500" }}>{props.field}</td>
      <td style={{ color: "#666666" }}>{props.value}</td>
    </tr>
  );
}
function CarouselImg(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "570px" }}>
      <img
        className="d-block w-100"
        src={props.src}
        alt="slide"
        style={{
          display: "block",
          maxWidth: "735px",
          maxHeight: "570px",
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
  // </Carousel.Item>;
}
// function Review(props) {
//   const review = props.review
//   return <div style={{ backgroundColor: 'gray', margin: '10px' }}>
//     <div>{review.username}</div>
//     <div>{review.comment}</div>
//     <div>{review.rate}</div>
//     <div>{review.datetime}</div>
//   </div>;
//   // </Carousel.Item>;
// }
const Detail = () => {
  const [tab, setTab] = useState(0);
  const reviews = [
    {
      username: "Janifer Lowrence",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      rate: 4,
      datetime: "30/09/2019",
    },
    {
      username: "An moi",
      comment: "như bu*i",
      rate: 1,
      datetime: "23/03/2022",
    },
  ];
  return (
    <div>
      <Header />
      <TabNav>
        <TabItem onClick={() => setTab(0)} bottomBar={tab === 0}>
          About Product
        </TabItem>
        <TabItem onClick={() => setTab(1)} bottomBar={tab === 1}>
          Specs
        </TabItem>
      </TabNav>
      <Content>
        <Tab>
          <Path>
            Home {">"} Laptop {">"} MSI
          </Path>

          <Name>Laptop LG Gram 2021 14ZD90P-G.AX51A5 </Name>

          <Rate>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating size="small" name="read-only" value={4} readOnly />
              <p
                style={{ fontSize: "13px", color: "#a6a6a6", margin: "0 2px" }}
              >
                Reviews (4)
              </p>
            </div>
            <Status>
              <i class="fa fa-check-circle" aria-hidden="true"></i> in stock
            </Status>
          </Rate>

          <TabContent display={tab === 0} style={{ position: "relative" }}>
            <div>
              <Field>Product code:</Field>
              <Value>14ZD90P-G.AX51A5</Value>
            </div>
            <div>
              <Field>Brand:</Field>
              <Value>LG</Value>
            </div>

            <Description>
              The metal chassis is built well and houses a comfortable keyboard
              and touchpad. Ports include USB-C, two USB-A, HDMI, 3.5mm audio,
              and an SD card reader. Wi-Fi 6 is included, but there's no
              Thunderbolt due to the AMD platform. Otherwise, this is a
              beautiful laptop that's available at a great price.
            </Description>

            <div style={{ position: "absolute", bottom: "0px" }}>
              <Price>
                <p className="oldPrice">
                  <s>{"$" + 499}</s>
                </p>
                <p className="price">
                  <b>{"$" + 399}</b>
                </p>
              </Price>

              <Button style={{ borderRadius: "20px", padding: "6px 20px" }}>
                Add to cart
              </Button>
            </div>
          </TabContent>

          <TabContent display={tab === 1}>
            <div style={{ width: "90%", maxHeight: "100%", margin: "0 auto" }}>
              <table class="table table-striped table-hover">
                {/* <thead>
                  <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                  </tr>
                </thead> */}
                <tbody>
                  <TableRow
                    field="CPU"
                    value="Intel Core i5-1135G7 2.4GHz up to 4.2GHz 8MB"
                  ></TableRow>
                  <TableRow
                    field="RAM"
                    value="8GB (4GBx2) LPDDR4X 4266MHz (Onboard)"
                  ></TableRow>
                  <TableRow
                    field="GPU"
                    value="Intel Iris Xe Graphics"
                  ></TableRow>
                  <TableRow field="OS" value="FreeDos"></TableRow>
                  <TableRow
                    field="Display"
                    value="14 WUXGA (1920x1200), 16:10, IPS, DCI-P3 99%"
                  ></TableRow>
                  <TableRow
                    field="Size"
                    value="313.4 x 215.2 x 16.8 mm"
                  ></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                </tbody>
              </table>
            </div>
          </TabContent>
        </Tab>
        <ImgTab>
          <Carousel variant="dark">
            <Carousel.Item>
              <CarouselImg src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"></CarouselImg>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg src="https://mayxaugiacao.com/wp-content/uploads/2022/02/top-laptop-dell-tot-nhat-2022.jpg"></CarouselImg>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg src="https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png"></CarouselImg>
            </Carousel.Item>
          </Carousel>
        </ImgTab>
      </Content>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h3 style={{ fontWeight: "bold", marginTop: "40px" }}>
          More Information
        </h3>
        <p style={{ margin: "20px 10px 0 40px" }}>
          The quality of SAMSUNG Meets the accessibility of chrome OS. Its
          all-new light and compact design lets you stream, work, create, and
          play on a fast, secure device designed to take everywhere. You can
          download and save content and work with others using Google suite.
          Built with long-lasting, battery and Gigabit Wi-Fi connectivity, The
          new Samsung Chromebook 4 brings speed and efficiency to any and every
          task or adventure.
        </p>
        <img
          style={{ margin: "20px 200px", maxWidth: "600px" }}
          src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
        ></img>

        <h3 style={{ fontWeight: "bold", marginTop: "40px" }}>Warranty</h3>
        <p style={{ margin: "20px 10px 0 40px" }}>1 years.</p>

        <OwlCarousel items={3}
          className="owl-theme"
          loop
          nav
          margin={8} >
          <div> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg" alt="image" /> </div>
          <div> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image" /> </div>
          <div> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
          <div> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image" /> </div>
          <div> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
          <div> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
        </OwlCarousel>

        <h3 style={{ fontWeight: 'bold', marginTop: '40px' }}>Customer reviews {'&'} ratings</h3>
        {/* 4.2 out of 5 */}
        {reviews.map((review) => {
          return (
            <Review>
              <div className="d-flex flex-row">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" />
                <div className="w-100">
                  <div className="username">{review.username}</div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <Rating
                        size="small"
                        name="read-only"
                        value={4}
                        readOnly
                      />
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#a6a6a6",
                          margin: "0 5px",
                        }}
                      >
                        {" "}
                        4.0{" "}
                      </p>
                    </div>
                    <div className="datetime">{review.datetime}</div>
                  </div>
                </div>
              </div>

              <div className="comment">{review.comment}</div>
            </Review>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding-left: 150px;
`;
const TabItem = styled.button`
  margin: 0px 20px;
  border: none;
  background: none;
  font-weight: bolder;
  border-bottom: ${(props) =>
    props.bottomBar === true ? "2px blue solid" : "none"};
`;
const Content = styled.div`
  border-top: 2px solid rgb(231 231 231);
  border-bottom: 2px solid rgb(231 231 231);
  width: 100%;
  min-height: 570px;
  display: flex;
  flex-direction: row;
`;
const Tab = styled.div`
  width: 50%;
  background-color: #f5f7ff;
  padding-left: 10%;
`;
const TabContent = styled.div`
  display: ${(props) => (props.display === true ? "block" : "none")};
  height: 420px;
  overflow: auto;
`;
const Status = styled.div`
  /* text-align: ${(props) => (props.display === 0 ? "left" : "right")}; */
  color: #78a962;
  font-size: 13px;
  margin-right: 30px;
`;
const Rate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Path = styled.p`
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 12px;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 28px;
  margin: 10px 30px 10px 0;
`;
const Field = styled.p`
  font-weight: 200;
  display: inline;
  font-size: 18px;
  line-height: 30px;
  margin-right: 20px;
`;
const Value = styled.p`
  font-weight: 900;
  display: inline;
`;
const Description = styled.p`
  margin: 20px 20px 0 0;
  font-weight: 20;
  font-size: 18px;
  text-align: justify;
`;
const Price = styled.div`
  align-self: flex-end;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
  .oldPrice {
    color: gray;
    font-size: 24px;
  }
  .price {
    font-size: 36px;
  }
`;
const ImgTab = styled.div`
  width: 50%;
  height: 570px;
`;
const Review = styled.div`
  background-color: #eaeaea;
  margin: 10px 10px 10px 30px;
  padding: 10px;
  border-radius: 10px;
  /* * {
    border: 1px red solid;
  } */
  img {
    border-radius: 50%;
    max-height: 50px;
    max-width: 50px;
    margin: 0 10px 10px 0;
  }
  .username {
    font-size: 24px;
    font-weight: bold;
  }
  .comment {
    margin: 5px 50px 10px 20px;
  }
  .datetime {
    font-style: italic;
  }
`;

export default Detail;
