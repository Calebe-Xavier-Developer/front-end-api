import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background: linear-gradient(
  45deg
  , #fff, #b0f4ff, #fff);
box-shadow: inset -2px -37px 110px 8px rgba(255,255,255,1);
`;

export const Form = styled.form`
  width: 400px;
  min-height: 250px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    margin-top: 0;
    color: black;
    font-weight: bold;
    font-size: 16px;
    background-color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 80%;
    text-align: center;
  }
  input {
    flex: 1;
    margin-bottom: 15px;
    min-height: 40px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 80%;
    height: 50px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
    background: #effcff;
  }
  button {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #92f0ff;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 50%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;