import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logoSrc from "./logo.png";
import smallLogoSrc from "./smallLogo.png";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineCloud,
  AiOutlineSync,
} from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { Avatar, Badge } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContextProvider";
const Container = styled.div`
  background-color: #121212;
  position: absolute;
  min-height: 100vh;
  z-index: 1000;
  width: 280px;
  color: white;
  & svg {
    cursor: pointer;
  }
  overflow: hidden;
  transition: all 0.5s;
  &.collapse {
    width: 60px;
  }
`;
const LogoContainer = styled.div`
  width: 130px;
  height: 100px;
  position: relative;
  cursor: pointer;
`;

const SmallLogoContainer = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
`;
const Body = styled.div`
  width: 280px;
`;
const Footer = styled.div``;
const NavItem = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #4a4a4a;
  min-height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #242424;
    cursor: pointer;
  }
  &#avatarItem:hover {
    background-color: #121212;
    cursor: default;
  }
`;

const SubItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background-color: #242424;
  }
`;
const SideBar = () => {
  const router = useRouter();
  const [isHiddenNavItem, setIsHiddenNavItem] = useState(false);
  const [isHiddenLogo, setIsHiddenLogo] = useState(false);
  const {
    userInfo: { username },
  } = useAuth();
  return (
    <Container className={isHiddenLogo ? "collapse" : ""}>
      {!isHiddenLogo && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1rem",
            borderBottom: "1px solid #4a4a4a",
          }}
        >
          <LogoContainer onClick={() => router.push("/")}>
            <Image
              src={logoSrc}
              alt="logoNav"
              objectFit="contain"
              layout="fill"
            />
          </LogoContainer>
          <AiOutlineArrowLeft size={20} onClick={() => setIsHiddenLogo(true)} />
          {/* <BsArrowRight /> */}
        </div>
      )}

      <Body>
        {isHiddenLogo && (
          <NavItem>
            <AiOutlineArrowRight
              size={20}
              onClick={() => setIsHiddenLogo(false)}
            />
          </NavItem>
        )}
        {isHiddenLogo && (
          <NavItem>
            <SmallLogoContainer>
              <Image
                src={smallLogoSrc}
                alt="smallLogo"
                objectFit="cover"
                layout="fill"
              />
            </SmallLogoContainer>
          </NavItem>
        )}

        <NavItem id="avatarItem">
          <div style={{ flexGrow: "1" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                // flexGrow: "1",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ bgcolor: "violet", width: 28, height: 28 }}
                style={{ cursor: isHiddenLogo && "pointer" }}
                onClick={() => {
                  if (isHiddenLogo) {
                    setIsHiddenNavItem(false);
                    setIsHiddenLogo(false);
                  }
                }}
              >
                {username}
              </Avatar>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <p style={{ marginRight: "auto" }}>{username}</p>
              {isHiddenNavItem && (
                <IoIosArrowDown onClick={() => setIsHiddenNavItem(false)} />
              )}
              {!isHiddenNavItem && (
                <IoIosArrowUp onClick={() => setIsHiddenNavItem(true)} />
              )}
            </div>
            <div
              hidden={isHiddenNavItem || isHiddenLogo}
              style={{
                marginTop: "0",
                marginLeft: "2.5rem",
                // background: "red",
              }}
            >
              <SubItem>
                <Badge color="secondary" variant="dot" invisible={false}>
                  <IoNotificationsOutline size={20} />
                </Badge>
                &nbsp; &nbsp;&nbsp; Notifications
              </SubItem>
              <SubItem>
                <BsBoxArrowInLeft size={20} />
                &nbsp; &nbsp;&nbsp; Log out
              </SubItem>
            </div>
          </div>
        </NavItem>
        <NavItem onClick={() => router.push("/")}>
          <div
            style={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AiOutlineCloud size={23} />
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <p style={{ marginRight: "auto", cursor: "pointer" }}>
              Patient data upload
            </p>
          </div>
        </NavItem>
        <NavItem onClick={() => router.push("/")}>
          <div
            style={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AiOutlineSync size={23} />
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <p style={{ marginRight: "auto", cursor: "pointer" }}>
              Process and results
            </p>
          </div>
        </NavItem>
      </Body>
      <Footer></Footer>
    </Container>
  );
};

export default SideBar;
