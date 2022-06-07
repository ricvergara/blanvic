import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile, mobileM } from '../responsive';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px", width: "100vw" })};
    ${mobileM({ height: "60px", width: "100vw" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
    ${mobileM({ padding: "10px 0px" })};
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
    ${mobileM({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;    
    ${mobile({ marginLeft: "5px" })};
    ${mobileM({ marginLeft: "5px" })};

`;

const Lelf = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Input = styled.input`
    border: none;
    width: 20vw;
    ${mobileM({ width: "30vw" })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    margin-left: 5px;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
    ${mobileM({ fontSize: "24px" })};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center" })};
    ${mobileM({ flex: "2", justifyContent: "center" })};
`;

const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px" })};
        ${mobileM({ fontSize: "12px", marginLeft: "10px" })};
`;


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Lelf>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Lelf>
                <Center>
                    <Link to="/"  style={{ textDecoration: 'none', color: 'black' }}>
                        <Logo>
                            Blanvic.
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SING IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar