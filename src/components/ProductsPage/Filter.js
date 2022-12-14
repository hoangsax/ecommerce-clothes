import { Slider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import CloseIcon from "@mui/icons-material/Close";

const Filter = (props) => {
  const minDistance = 1;
  function valuetext(value) {
    return `${value}°C`;
  }
  // const [value, setValue] = useState([500, 1500]);
  // const [ramFilter, setRamFilter] = useState([]);
  const targetRam = (ram) => {
    if (!props.ramFilter.includes(ram)) {
      props.setRamFilter([...props.ramFilter, ram]);
    } else {
      props.setRamFilter(props.ramFilter.filter((r) => r !== ram));
    }
  };
  const targetBrand = (brand) => {
    if (!props.brandsTaget.includes(brand.name)) {
      props.setBrandsTaget([...props.brandsTaget, brand.name]);
    } else {
      props.setBrandsTaget(
        props.brandsTaget.filter((brandName) => brandName !== brand.name)
      );
    }
  };
  const applyFilter = () => {
    props.setShow(0);
    props.applyFilter();
  };
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      props.setValue([
        Math.min(newValue[0], props.value[1] - minDistance),
        props.value[1],
      ]);
    } else {
      props.setValue([
        props.value[0],
        Math.max(newValue[1], props.value[0] + minDistance),
      ]);
    }
  };
  const changeMin = (e) => {
    props.setValue([e.target.value, props.value[1]]);
  };
  const changeMax = (e) => {
    props.setValue([props.value[0], e.target.value]);
  };

  return (
    <Container>
      <Row>
        <Title>
          <i class="fa fa-sliders" aria-hidden="true"></i> Filters
        </Title>
        {props.show === 1 && <CloseIcon onClick={() => props.setShow(0)} />}
      </Row>
      <Button
        type="transparent"
        text="Clear Filter"
        onClick={() => props.clearFilter()}
      />
      <TypeFilter>
        <i class="fa fa-align-left" aria-hidden="true"></i> Categories
      </TypeFilter>
      <Ram>
        <input
          type="checkbox"
          name="4gbram"
          id="4gbram"
          value="4GB"
          checked={props.ramFilter.includes("4GB")}
          onChange={() => targetRam("4GB")}
        />
        <label>
          <span>Uniform</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="8gbram"
          id="8gbram"
          value="8GB"
          checked={props.ramFilter.includes("8GB")}
          onChange={() => targetRam("8GB")}
        />
        <label>
          <span>Football</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="16gbram"
          id="16gbram"
          value="16GB"
          checked={props.ramFilter.includes("16GB")}
          onChange={() => targetRam("16GB")}
        />
        <label>
          <span>Others</span>
          <span></span>
        </label>
      </Ram>
      <TypeFilter>
        <i class="fa fa-align-left" aria-hidden="true"></i> Price
      </TypeFilter>
      <Slider
        style={{ width: "90%", margin: "0 5%" }}
        sx={{
          color: "black",
          "& .MuiSlider-thumb": {
            backgroundColor: "white",
            border: "1px solid #e1e1e1",
          },
        }}
        getAriaLabel={() => "Minimum distance"}
        value={props.value}
        max={3000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <Row>
        <p style={{ fontSize: "20px", color: "gray" }}>$</p>
        <Input
          type="text"
          value={props.value[0]}
          onChange={(e) => changeMin(e)}
        ></Input>
        <p style={{ fontSize: "24px", color: "gray" }}>-</p>
        <Input
          type="text"
          value={props.value[1]}
          onChange={(e) => changeMax(e)}
        ></Input>
      </Row>
      <TypeFilter>
        <i class="fa fa-align-left" aria-hidden="true"></i> Colors
      </TypeFilter>
      <Brands>
        {props.brands.map((brand, idx) => {
          return (
            // <Brand key={idx} className={props.brandsTaget.includes(brand.name) ? 'active':''} src={brand.img} alt='brand' id={brand.id} onClick={() => targetBrand(brand)}/>
            <ColorItem
              key={idx}
              color="#363636"
              className={props.brandsTaget.includes(brand.name) ? "active" : ""}
              onClick={() => targetBrand(brand)}
            />
          );
        })}
      </Brands>
      <TypeFilter>
        <i class="fa fa-align-left" aria-hidden="true"></i> Size
      </TypeFilter>
      <Ram>
        <input
          type="checkbox"
          name="4gbram"
          id="4gbram"
          value="4GB"
          checked={props.ramFilter.includes("4GB")}
          onChange={() => targetRam("4GB")}
        />
        <label>
          <span>S</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="8gbram"
          id="8gbram"
          value="8GB"
          checked={props.ramFilter.includes("8GB")}
          onChange={() => targetRam("8GB")}
        />
        <label>
          <span>M</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="16gbram"
          id="16gbram"
          value="16GB"
          checked={props.ramFilter.includes("16GB")}
          onChange={() => targetRam("16GB")}
        />
        <label>
          <span>L</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="16gbram"
          id="16gbram"
          value="16GB"
          checked={props.ramFilter.includes("16GB")}
          onChange={() => targetRam("16GB")}
        />
        <label>
          <span>XL</span>
          <span></span>
        </label>
      </Ram>
      <Ram>
        <input
          type="checkbox"
          name="16gbram"
          id="16gbram"
          value="16GB"
          checked={props.ramFilter.includes("16GB")}
          onChange={() => targetRam("16GB")}
        />
        <label>
          <span>XXL</span>
          <span></span>
        </label>
      </Ram>
      <br />
      <Button text="Apply Filter" onClick={applyFilter} />
    </Container>
  );
};

const ColorItem = styled.div`
  min-width: 20px;
  min-height: 20px;
  background-color: ${($props) => ($props.color ? $props.color : "black")};
  border-radius: 100%;
  cursor: pointer;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 70px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  height: 25px;
  padding: 5px;
`;
const Ram = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  & input {
    flex: 1;
    transform: scale(1.4);
  }
  & label {
    width: 85%;
    display: flex;
    justify-content: space-between;
  }
`;
const Brand = styled.img`
  width: 48%;
  margin: 1%;
  height: 60px;
  background-color: white;
  padding: 5px 10px;
  &.active {
    border: 1px solid #0156ff;
  }
  :hover {
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  @media (max-width: 768px) {
    width: 24%;
    margin: 0.5%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  }
`;
const Brands = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TypeFilter = styled.p`
  /* font-weight: bold; */
  margin: 10px 0;
  border-top: 1px solid #e5e5e5;
  padding-top: 10px;
  text-transform: uppercase;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* background-color: #F5F7FF; */
  background-color: white;
  border: 1px solid #e1e1e1;
  height: fit-content;
  @media (max-width: 768px) {
    background-color: white;
  }
`;

export default Filter;
