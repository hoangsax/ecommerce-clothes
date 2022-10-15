import React from 'react'
import styled from 'styled-components'
import images from '../images'

const Orders = (props) => {
  return (
    <>
      <NavOrders>
        <TypeOrders className={props.target==='all'?'active':''} onClick={()=>props.changeTypeOrders('all')}>
          All
        </TypeOrders>
        <TypeOrders className={props.target==='delivering'?'active':''} onClick={()=>props.changeTypeOrders('delivering')}>
          Delivering
        </TypeOrders>
        <TypeOrders className={props.target==='delivered'?'active':''} onClick={()=>props.changeTypeOrders('delivered')}>
          Delivered
        </TypeOrders>
        <TypeOrders className={props.target==='cancelled'?'active':''} onClick={()=>props.changeTypeOrders('cancelled')}>
          Cancelled
        </TypeOrders>
      </NavOrders>
      <Hr color='#b8b8b8'/>
      <Order>
        <Item>
          <Image>
            <img src={images.item1} alt="item" style={{width:'100%',height:'100%'}}/>
          </Image>
          <Desc>
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </Desc>
          <Price>$4,000.00</Price>
          <Qty>3</Qty>
          <Price fw='bold'>$12.000.00</Price>
        </Item>
        <Item>
          <Image>
            <img src={images.lap1} alt="item" style={{width:'100%',height:'100%'}}/>
          </Image>
          <Desc>
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </Desc>
          <Price>$4,349.00</Price>
          <Qty>1</Qty>
          <Price fw='bold'>$4,349.00</Price>
        </Item>
        <p style={{textAlign:'right'}}>Delivery cost: $5</p>
        <Total>
          <p className='time'>Date: 1/1/2020 - 02:30 PM</p>
          <p className='total'>Total: $16,354.00</p>
        </Total>
      </Order>
      <Order>
        <Item>
          <Image>
            <img src={images.item1} alt="item" style={{width:'100%',height:'100%'}}/>
          </Image>
          <Desc>
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </Desc>
          <Price>$4,000.00</Price>
          <Qty>3</Qty>
          <Price fw='bold'>$12.000.00</Price>
        </Item>
        <Item>
          <Image>
            <img src={images.lap1} alt="item" style={{width:'100%',height:'100%'}}/>
          </Image>
          <Desc>
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </Desc>
          <Price>$4,349.00</Price>
          <Qty>1</Qty>
          <Price fw='bold'>$4,349.00</Price>
        </Item>
        <p style={{textAlign:'right'}}>Delivery cost: $5</p>
        <Total>
          <p className='time'>Date: 1/1/2020 - 02:30 PM</p>
          <p className='total'>Total: $16,354.00</p>
        </Total>
      </Order>
    </>
  )
}

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .time {
    color: gray;
  }
  .total {
    font-weight: bold;
    font-size: 20px;
  }
`
const Qty = styled.div`
  width: 5%;
  text-align: center;
  background-color: #F5F7FF;
  height: fit-content;
  margin: 0 auto;
  padding: 10px 0;
  border-radius: 5px;
`
const Price = styled.p`
  font-weight: ${props=>props.fw?props.fw:''};
  width: 20%;
  padding: 10px 0;
  text-align: center;
`
const Desc = styled.p`
  width: 37%;
  margin-left: 3%;
  padding-top: 10px;
`
const Image = styled.div`
  width: 10%;
`
const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`
const Order = styled.div`
  margin-top: 10px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const TypeOrders = styled.div`
  color: gray;
  text-align: center;
  padding: 5px 10px;
  width: 150px;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid #0156FF;
  }
`
const NavOrders = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Hr = styled.hr`
  border: 0;
  height: 0.2px;
  background-image: -webkit-linear-gradient(#d6d6d6, #d6d6d6, #d6d6d6);
`

export default Orders