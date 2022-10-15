import styled from "styled-components";
// // import { Container, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Carousel, Modal } from "react-bootstrap";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import "bootstrap/dist/css/bootstrap.css"; //bug do cai nay ne =====================
import { Rating, Breadcrumbs, Link, Typography } from "@mui/material";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "axios";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../store/reducers/numCartSlice";
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
    <div
      className="d-flex align-items-center"
      style={{ height: "566px", width: "735px" }}
    >
      <img
        // className="d-block w-100"
        src={props.src}
        alt="slide"
        style={{
          display: "block",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: "auto",
          // maxHeight: "566px",
          width: "auto",
          // height: "auto",
        }}
      />
    </div>
  );
  // </Carousel.Item>;
}
function Status(props) {
  if (props.amount > 0) {
    return (
      <div
        style={{
          color: "#78a962",
          fontSize: "18px",
          marginRight: "30px",
          fontWeight: "700",
        }}
      >
        <i className="fa fa-check-circle" aria-hidden="true"></i> in stock
      </div>
    );
  } else {
    return (
      <div
        style={{
          color: "#f00",
          fontSize: "18px",
          marginRight: "30px",
          fontWeight: "700",
        }}
      >
        <i className="fa fa-ban" aria-hidden="true"></i> out of stock
      </div>
    );
  }
}

const Detail = () => {
  const dispatch = useDispatch();
  // const search = useLocation().search;
  // const id = new URLSearchParams(search).get('id');
  let { product_id } = useParams();
  let navigate = useNavigate();
  let sampleCarousel = [
    "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
    // "https://mayxaugiacao.com/wp-content/uploads/2022/02/top-laptop-dell-tot-nhat-2022.jpg",
    // "https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png",
    // "https://product.hstatic.net/1000233206/product/lg_gram_2021_16z90p-g.ah73a5-4_2e805f4b5f6b4cd4be72510dbc729944_master.png",
    "https://innovavietnam.vn/wp-content/uploads/poster-561x800.jpg",
  ];
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [comment, setComment] = useState([]);
  const [ratingStar, setRatingStar] = useState(4);
  const [ratingInfo, setRatingInfo] = useState({});
  const [userComment, setUserComment] = useState("");
  const [similarProduct, setSimilarProduct] = useState([]);
  // let similarProduct;
  const spec_field = [
    "name",
    "product_code",
    "brand",
    "cpu",
    "ram",
    "gpu",
    "os",
    "screen",
    "size",
    "battery",
  ];
  const displayField = {
    name: "Name",
    product_code: "Product Code",
    brand: "Brand",
    cpu: "CPU",
    ram: "RAM",
    gpu: "GPU",
    os: "Operating System",
    screen: "Screen Size",
    size: "Assembled Product Dimensions (L x W x H)",
    battery: "Battery",
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    if (sessionStorage.getItem("user_id")) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };
  const handleRating = async () => {
    var today = new Date();
    // let datetime = today.getFullYear() + ':' + today.getMonth() + ':' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let data = {
      product_id: product_id,
      user_id: sessionStorage.getItem("user_id"),
      comment: userComment,
      rate: ratingStar,
      // "datetime": datetime
    };
    console.log("data feedback: ", data);
    await axios
      .post("http://localhost/ecommerce/backend/api/comment/create.php", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === 0) {
          swal("Fail!", "Comment fail !", "error");
        } else if (response.data.message === 1) {
          swal("Completely!", "Comment success", "success");
        }
      });
    getComment();

    let data_updateRating = {
      product_id: product_id,
      rating: Math.floor(
        (ratingInfo.total_rating + ratingStar) / (ratingInfo.num_reviewer + 1)
      ),
      num_reviewer: ratingInfo.num_reviewer + 1,
    };
    updateRating(data_updateRating);
    let _rating = {
      total_rating: ratingInfo.total_rating + ratingStar,
      num_reviewer: ratingInfo.num_reviewer + 1,
    };
    setRatingInfo(_rating);

    handleClose();
  };
  const updateRating = async (data_updateRating) => {
    console.log("update rating: ", data_updateRating);
    await axios
      .post(
        "http://localhost/ecommerce/backend/api/product/updateRating.php",
        data_updateRating
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  const handleClick = (url) => {
    navigate(url);
  };
  const handleAddToCart = async () => {
    if (!sessionStorage.getItem("user_id")) {
      navigate("/login");
      return;
    }
    let data = {
      product_id: product_id,
      user_id: sessionStorage.getItem("user_id"),
      amount: count,
    };
    console.log("data addToCart: ", data);
    await axios
      .post("http://localhost/ecommerce/backend/api/cart/addToCart.php", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === 0) {
          swal("Fail!", "Add to cart fail !", "error");
        } else if (response.data.message === 1) {
          dispatch(addCart(product_id));
          swal("Completely!", "Add to cart success", "success");
        }
      });
  };
  const getComment = async () => {
    const res_comment = await axios.get(
      "http://localhost/ecommerce/backend/api/comment/read_single.php?product_id=" +
        String(product_id)
    );
    console.log("comment: ", res_comment.data);
    let total_rating = res_comment.data.reduce((a, b) => {
      return a + parseInt(b.rate);
    }, 0);
    let _rating = {
      total_rating: total_rating,
      num_reviewer: res_comment.data.length,
    };
    console.log("ratingInfo: ", _rating);
    setComment(res_comment.data);
    setRatingInfo(_rating);
  };
  const getUser = async () => {
    const user = await axios.get(
      "http://localhost/ecommerce/backend/api/user/getUser.php?user_id=" +
        sessionStorage.getItem("user_id")
    );
    console.log("user: ", user.data.data[0]);
    setUser(user.data.data[0]);
  };
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "http://localhost/ecommerce/backend/api/product/read_single.php?id=" +
          String(product_id)
      );
      const res_img = await axios.get(
        "http://localhost/ecommerce/backend/api/imgProduct/read_single.php?id=" +
          String(product_id)
      );
      let _product = res.data;
      // console.log("product", _product)
      // _product["listImg"] = sampleCarousel;
      _product["listImg"] = res_img.data;
      console.log("product", _product);
      setProduct(_product);

      getComment();
      getUser();

      const res_similarProduct = await axios.get(
        "http://localhost/ecommerce/backend/api/product/read.php"
      );
      console.log("similarProduct: ", res_similarProduct.data.data);
      // similarProduct = res_similarProduct.data.data;
      setSimilarProduct(res_similarProduct.data.data);
    };
    window.scrollTo(0, 0);
    getData();
  }, []);

  // tab is about product or specs
  const [tab, setTab] = useState(0);
  const options = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    // dots: false,
    autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      200: {
        items: 1,
      },
      360: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 5,
      },
      800: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
  };

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count >= product.amount) {
      setCount(product.amount);
      console.log("not enough amount");
    } else {
      setCount(count + 1);
    }
  };
  let decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

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
          <Breadcrumbs
            separator="›"
            maxItems={3}
            aria-label="breadcrumb"
            style={{ margin: "10px 0 0px 0" }}
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Laptop
            </Link>
            <Typography color="text.primary">{product.brand}</Typography>
          </Breadcrumbs>

          <Name>{product.name}</Name>

          <Rate>
            <div className="d-flex flex-row align-items-center">
              <Rating
                size="small"
                name="read-only"
                value={parseInt(
                  ratingInfo.total_rating / ratingInfo.num_reviewer
                )}
                readOnly
              />
              <p
                style={{ fontSize: "13px", color: "#a6a6a6", margin: "0 2px" }}
              >
                Reviews ({ratingInfo.num_reviewer})
              </p>
            </div>
            <Status amount={product.amount}>
              {/* {() => {
                if (product.amount)
                  return (
                    <i className="fa fa-check-circle" aria-hidden="true">in stock {product.amount}</i>
                  );
              }} */}
            </Status>
          </Rate>

          <TabContent isDisplay={tab === 0} style={{}}>
            <div>
              <Field>Product code:</Field>
              <Value>{product.product_code}</Value>
            </div>
            <div>
              <Field>Brand:</Field>
              <Value>{product.brand}</Value>
            </div>

            <Description>{product.description}</Description>

            {/* <div style={{ height: '200px' }}></div> */}

            {/* price and  */}
            <div style={{ bottom: "0px" }}>
              <Price>
                <p className="oldPrice">
                  <s>{"$" + product.old_price}</s>
                </p>
                <p className="price">
                  <b>{"$" + product.price}</b>
                </p>
              </Price>

              {/* <input type="number" /> */}
              <div
                className="d-flex flex-row align-items-center"
                style={{ margin: "5px" }}
              >
                <Input className="d-flex flex-row align-items-center">
                  <div style={{ minWidth: "35px", textAlign: "center" }}>
                    {count}
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <MdKeyboardArrowUp onClick={incrementCount} />
                    <MdKeyboardArrowDown onClick={decrementCount} />
                  </div>
                </Input>

                <Button
                  disabled={parseInt(product.amount) < 1}
                  style={{ borderRadius: "20px", padding: "6px 20px" }}
                  onClick={handleAddToCart}
                >
                  {/* Add to cart */}
                  {parseInt(product.amount) > 0
                    ? "Add to cart"
                    : "Out of stock"}
                </Button>
                <p style={{ margin: "0px 20px" }}>
                  {parseInt(product.amount)}{" "}
                  {parseInt(product.amount) > 1 ? "items" : "item"} left
                </p>
              </div>
            </div>
          </TabContent>

          <TabContent isDisplay={tab === 1}>
            <div
              style={{
                height: "400px",
                overflow: "auto",
                width: "90%",
                margin: "0 auto",
              }}
            >
              <table className="table table-striped table-hover">
                <tbody style={{ verticalAlign: "middle", overflow: "auto" }}>
                  {spec_field.map((field, index) => {
                    return (
                      <TableRow
                        key={index}
                        field={displayField[field]}
                        value={product[field]}
                      ></TableRow>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabContent>
        </Tab>

        <ImgTab>
          <Carousel
            variant="dark"
            style={{ height: "100%" }}
            className="d-flex align-items-center"
          >
            {product.listImg?.map((img, index) => {
              return (
                <Carousel.Item key={index}>
                  <CarouselImg src={img.url}></CarouselImg>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </ImgTab>
      </Content>

      <Features>
        <h2>Features</h2>
      </Features>

      <InforRow>
        <InforDiv2>
          <InforText>
            <h3>Power, speed, {"&"} style</h3>
            <p>
              Running Chrome OS with up to an AMD Ryzen™ 7 3700C processor and
              integrated AMD Radeon™ graphics, the ThinkPad C13 Yoga Chromebook
              Enterprise delivers powerful performance in a sleek and durable
              aluminum chassis. Bootup takes seconds and once an employee logs
              in, the device becomes unique to that user. Plus, unlike your
              typical ThinkPad, this laptop comes in Abyss Blue—adding a bit of
              flair to worker style.
            </p>
          </InforText>
          <InforText>
            <h3>Perfectly mobile</h3>
            <p>
              Weighing just 1.50kg / 3.3lbs., the ThinkPad C13 Yoga Chromebook
              Enterprise is designed for desk-free employees. With all-day
              battery life, this device can keep up with a full day’s worth of
              innovative ideas. But when you do need more juice, plug it in for
              just 60 minutes and Rapid Charge* will yield up to 80%.
            </p>
          </InforText>
        </InforDiv2>
        <InforDiv2>
          <div>
            <img
              alt="a sample pic"
              src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTE4OTg1fGltYWdlL2pwZWd8aDk0L2g0MC8xMTI1NjcyMTU3MTg3MC5qcGd8MzgzZTkxNWI3NDk1YzdhM2ZmY2ZiYjQ0MjNhMmQ5Y2MxMTdlOTYxNWY0YzdhN2ZhZjU4NzNkMjFhNmI5YzRhYQ/bWFzdGVyfH.jpg"
            ></img>
          </div>
        </InforDiv2>
      </InforRow>

      <InforRow>
        <InforDiv2>
          <div>
            <img
              alt="a sample pic"
              src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTY0NDc0fGltYWdlL2pwZWd8aDA3L2hkOS8xMTI1NjcyMTgwMTI0Ni5qcGd8ZjFjNTQwNGM1ODAyOTdmMDUyZDQ2NDdlN2E1YWE4Nzg3NmM5NjQ1YTEzODcxMjVjMGZjOWVlMTViODBmZDAwMw/bWFzdGVyfH.jpg"
            ></img>
          </div>
        </InforDiv2>
        <InforDiv2>
          <InforText>
            <h3>Create, collaborate {"&"} repeat</h3>
            <p>
              Chromebooks are well known for making content creation and
              collaboration easy—and the ThinkPad C13 Yoga Chromebook Enterprise
              is no exception. It’s built for creating, editing, and sharing
              content. With a touchscreen and 360 degree hinge, it functions as
              a 2 in 1 laptop. So you can type, take notes with the optional
              garaged USI pen, or video-conference. There’s also an optional 5MP
              world-facing camera.
            </p>
          </InforText>
          <InforText>
            <h3>Refined elegance</h3>
            <p>
              Narrow bezels frame the display—an FHD IPS touchscreen model with
              a 72% color gamut—providing a larger screen to bezel ratio. So
              whether the ThinkPad C13 Yoga Chromebook Enterprise is running a
              conference call, streaming a video, or building a presentation,
              this 2-in-1 device looks great.
            </p>
          </InforText>
        </InforDiv2>
      </InforRow>

      <InforRow>
        <InforDiv2>
          <InforText>
            <h3>Seamless security</h3>
            <p>
              ThinkShield combined with Chrome Enterprise equals an unbeatable
              combination for security. Our built-in security suite boasts a
              number of physical and biometric security features, like a webcam
              privacy shutter, the proprietary Google H1 TPM chip, and an
              optional touch fingerprint reader. Chrome Enterprise keeps your
              business safe with seamless updates and protection against
              evolving threats. Plus, each device includes a Kensington lock
              slot so it can be tethered when needed.
            </p>
          </InforText>
        </InforDiv2>
        <InforDiv2>
          <div>
            <img
              alt="a sample pic"
              src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTgyMDMyfGltYWdlL2pwZWd8aDNjL2hlOS8xMTEyMTUzMDAxMTY3OC5qcGd8ZjMxMmZjYWMyZjc1MjMzMGI4MTFlZmZmODI4MTg4NjNkNzBmZTdlOTdhYzI1NDYyMjFjZjc2YzY1MTNhOTI0MA/bWFzdGVyfH.jpg"
            ></img>
          </div>
        </InforDiv2>
      </InforRow>

      <Features>
        <h2>Similar products</h2>
      </Features>

      <div style={{ width: "80%", margin: "0 auto" }}>
        <SimilarProduct>
          <OwlCarousel
            {...options}
            // items={6}
            className="owl-theme"
            // loop
            // nav
            margin={18}
          >
            {similarProduct?.map((product, index) => {
              return (
                <SimilarItem
                  key={index}
                  onClick={() =>
                    handleClick("/detail/" + String(product.product_id))
                  }
                >
                  <div className="img d-flex flex-row">
                    <img
                      src={product.img_cover}
                      style={{ margin: "0 auto", width: "auto" }}
                      alt="similar product"
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <Rating
                      size="small"
                      name="read-only"
                      value={parseInt(product.rating)}
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
                      {product.rating}{" "}
                    </p>
                  </div>
                  <div className="name">{product.name}</div>
                  <p
                    className="price"
                    style={{ color: "gray", margin: "0 0 0 5%" }}
                  >
                    <s>{"$" + product.old_price}</s>
                  </p>
                  <p
                    className="price"
                    style={{ fontSize: "20px", margin: "0 0 0 5%" }}
                  >
                    <b>{"$" + product.price}</b>
                  </p>
                </SimilarItem>
              );
            })}
          </OwlCarousel>
        </SimilarProduct>
      </div>

      <Features>
        <h2>Customer reviews {"&"} ratings</h2>
        <Button variant="primary" onClick={handleShow}>
          Add Feedback
        </Button>
      </Features>

      <div style={{ width: "70%", margin: "0 auto" }}>
        {comment.map((review, index) => {
          return (
            <Review key={index}>
              <div className="d-flex flex-row">
                <img src={review.url_avt} alt="laptop" />
                <div className="w-100">
                  <div className="username">
                    {review.fName + " " + review.lName}
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <Rating
                        size="small"
                        name="read-only"
                        value={parseInt(review.rate)}
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
                        {review.rate}{" "}
                      </p>
                    </div>
                    <div className="datetime">{review.datetime}</div>
                  </div>
                  <div className="comment">{review.comment}</div>
                </div>
              </div>
            </Review>
          );
        })}
      </div>

      <Footer />

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RatingStar>
            <Star
              className="fa fa-star"
              onClick={() => setRatingStar(1)}
              checked={ratingStar >= 1}
            ></Star>
            <Star
              className="fa fa-star"
              onClick={() => setRatingStar(2)}
              checked={ratingStar >= 2}
            ></Star>
            <Star
              className="fa fa-star"
              onClick={() => setRatingStar(3)}
              checked={ratingStar >= 3}
            ></Star>
            <Star
              className="fa fa-star"
              onClick={() => setRatingStar(4)}
              checked={ratingStar >= 4}
            ></Star>
            <Star
              className="fa fa-star"
              onClick={() => setRatingStar(5)}
              checked={ratingStar >= 5}
            ></Star>
          </RatingStar>

          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Add feedback..."
                onChange={(event) => setUserComment(event.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRating}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const RatingStar = styled.div`
  margin: 0px 0px 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Star = styled.span`
  font-size: 40px;
  color: ${(props) => (props.checked === true ? "orange" : "none")};
`;
const Features = styled.div`
  width: 80%;
  margin: 30px auto 20px auto;
  border-bottom: 1px #ccc solid;
  padding-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-size: 32px;
    line-height: 39px;
    font-weight: normal;
  }
`;
const InforRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const InforDiv2 = styled.div`
  max-width: 35%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const InforText = styled.div`
  margin: 10px 0px;
  h3 {
    font-size: 24px;
    line-height: 24px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
  }
  p {
    text-align: justify;
    color: #555;
    font-size: 16px;
    line-height: 22px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
  }
`;

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding-left: 4vw;

  position: sticky;
  top: 0;
  z-index: 1071;
  background-color: white;
  border-bottom: 2px solid rgb(231 231 231);
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
  border-bottom: 2px solid rgb(231 231 231);
  width: 100%;
  height: 570px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Tab = styled.div`
  width: 50%;
  background-color: #f5f7ff;
  padding-left: 10%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TabContent = styled.div`
  display: ${(props) => (props.isDisplay === true ? "block" : "none")};
  /* min-height: 420px; */
  /* height: 100%; */
  overflow: auto;
`;
const Rate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  @media (max-width: 768px) {
    display: none;
    width: 100%;
    margin: 30px 0;
  }
`;
const Review = styled.div`
  /* background-color: #eaeaea; */
  margin: 10px 10px 20px 30px;
  padding: 10px;
  /* border-radius: 10px; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-top: 10px gray solid;
  border-right: 10px #ccc solid;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

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
    margin: 5px 50px 10px 0px;
  }
  .datetime {
    font-style: italic;
  }
`;
const SimilarProduct = styled.div`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
const SimilarItem = styled.div`
  height: 250px;
  margin-bottom: 5px;
  /* border: solid 2px gray; */
  /* border-radius: 10px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  /* padding-left: 4px; */
  .img {
    height: 45%;
    /* border: solid 1px red; */
  }
  .name {
    font-size: 12px;
    height: 20%;
    overflow: hidden;
    margin-left: 5%;
  }
  .price {
    margin-left: 5%;
  }
  /* :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  } */
`;

const Input = styled.div`
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 3px;
  box-shadow: 0px 4px 4px gray;
  margin-right: 30px;
`;

export default Detail;
