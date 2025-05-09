import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <MDBFooter bgColor="light" className="text-center text-lg-start">
        <section className="border-top">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <Link className="navbar-brand" to="/">
                  <img
                    src="./logo.png"
                    alt=""
                    width="58"
                    height="26"
                    className="d-inline-block align-text-top"
                  />
                  <span
                    className="logo-name"
                    style={{
                      fontWeight: "400 !important",
                      fontSize: "1.5rem",
                      color: "black",
                    }}
                  >
                    &nbsp;Grade Guru
                  </span>
                </Link>
                <p className="my-4 p-logo">
                  Easily calculate your SGPA and CGPA with accuracy. Our
                  platform also tells you the exact SGPA you need to achieve a
                  perfect 9-pointer score.
                  <br /> Simplifying your grading journey—one click at a time!
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/formula">Formula</Link>
                </p>
                {/* <p>
                  <Link to="/report">Report</Link>
                </p> */}
                <p>
                  <Link
                    to="https://github.com/Shubham2917/NIET-Grade-Guru"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="5" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact Developer
                </h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Shubham Yadav, NIET, Greater Noida, India
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <MdOutlineMail /> &nbsp; shu940229@gmail.com
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <AiOutlineLinkedin /> &nbsp;
                  <Link
                    to="https://www.linkedin.com/in/shubham-yadav-a5379a296"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <FaGithubSquare /> &nbsp;
                  <Link to="https://github.com/Shubham2917" target="_blank">
                    GitHub
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright : All Rights Reserved
        </div>
      </MDBFooter>
    </FooterStyle>
  );
}

const FooterStyle = styled.section`
  @media (max-width: 768px) {
    .p-logo {
      font-size: 0.85rem;
    }
  }
`;
