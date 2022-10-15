import styled from 'styled-components'
import { Container, Row, Col } from "react-grid-system";

const User = {
    "username": "Long",
    "password": "123456",
    "fname": "Nguyen",
    "lname": "Long",
    "email": "Nothing@gmail.com",
    "phone": "0984046827",
    "url_avt": "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg",
    "birthday": "2001-01-01",
}
export default function Password () {
    return (
        <div>
            <Title>Change Password</Title>
            <Line/>
            <Container>
                <Row>
                    <ColStyled lg={4}>
                        <ContainerImg> 
                            <ImgProduct src={User.url_avt} alt="UserImage"/>
                        </ContainerImg>
                    </ColStyled>
                    <Col>
                        <ContainerInput>
                            <Row>
                                <Col lg={3}><NameInput>Password</NameInput></Col>
                                <Col lg={9}><Input type="text" placeholder="Your current password"/></Col>
                            </Row>
                        </ContainerInput>
                        <ContainerInput>
                            <Row>
                                <Col lg={3}><NameInput>New PW</NameInput></Col>
                                <Col lg={9}><Input type="text" placeholder="Your new password"/></Col>
                            </Row>
                        </ContainerInput>
                        <ContainerInput>
                            <Row>
                                <Col lg={3}><NameInput>Confirm PW</NameInput></Col>
                                <Col lg={9}><Input type="text" placeholder="Confirm yours new password"/></Col>
                            </Row>
                        </ContainerInput>
                        <ButtonSave>Confirm</ButtonSave>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

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
    border-radius: 50%;
`
const ContainerImg = styled.div`
    border: solid 1px;
    height: 15vw;
    width: 15vw;
    border-radius: 50%;
    border: none;
`

const ContainerInput = styled.div`
    /* background-color: #F5F7FF; */
    margin-bottom: 5px;
    border-top-right-radius: 15px;
    padding-top: 5px;
`
const NameInput = styled.span`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 90%;
    height: 40px;
    line-height: 40px;
    
    /* background-color: red; */
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: solid #CCCCCC 1px;
    padding-left: 2%;
`
const ColStyled = styled(Col)`
    /* background-color: red; */
`
const ButtonSave = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 10px;
    border: none;
    float: right;
    margin-top: 20px;
    background-color: #0156FF;
    font-weight: 600;
    color: white;
    transition: all .3s;
    :hover {
        background-color: #00369F;
    }
    cursor: pointer;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 104%;
`