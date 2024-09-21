import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrpaper className="section">
      <h2 className="common-heading">Services</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrpaper>
  );
};
const Wrpaper = styled.section`
padding : 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.container{
  max-width: 120rem;
}
.card{
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data{
    padding: 0 2rem;
  }
  h3{
    margin: 2 rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  .btn{
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%)
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;
    &:hover{
      background-color: #008000e6;
      color: #fff;
    }
  
  }
}
  figure{
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color:rgb(0, 153, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after{
    width: 100%;
  }
  &:hover img{
    transform: scale(1.2);
  }
  img{
    max-width: 90%
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear
  }
}
`;

export default Services;
