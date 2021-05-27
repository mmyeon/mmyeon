import styled, { css } from "styled-components";
import { COLORS } from "../../../styles/constant";
import { device } from "../../../device";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: repeating-linear-gradient(
    to right,
    ${COLORS.pastelBlue},
    ${COLORS.pastelBlue} 20px,
    rgba(25, 71, 229, 0.46) 20px,
    rgba(25, 71, 229, 0.46) 40px
  );

  box-sizing: border-box;
  padding: 0 2em;
  padding-top: 2em;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3em;
    background: repeating-linear-gradient(
      to right,
      ${COLORS.pastelBlue},
      ${COLORS.pastelBlue} 6em,
      rgba(25, 71, 229, 0.46) 6em,
      rgba(25, 71, 229, 0.46) 7em
    );
  }

  > .content {
    max-width: 100%;
    margin: 0 auto;

    @media ${device.tablet} {
      margin: 0;
    }

    > h1 {
      ${(props) => {
        if (props.isVisible)
          return css`
            opacity: 0;
            animation: reveal 1s forwards 0.25s;
          `;
      }}
    }

    > .btn-container {
      width: 100%;
      margin-top: 0.5em;

      @media ${device.tablet} {
        max-width: 80%;
        display: block;
        margin: 1em auto;
      }

      ${(props) => {
        if (props.isVisible)
          return css`
            > li:nth-child(1) {
              opacity: 0;
              animation: reveal 1s forwards 0.5s;
            }
            > li:nth-child(2) {
              opacity: 0;
              animation: reveal 1s forwards 0.75s;
            }
            > li:nth-child(3) {
              opacity: 0;
              animation: reveal 1s forwards 1s;
            }
          `;
      }}
    }
  }

  > img.jumping {
    width: 14em;
    display: block;
    margin: 0 auto;
    margin-top: 0.4em;
    transition: 0.3s;

    ${(props) => {
      if (props.isVisible)
        return css`
          opacity: 0;
          animation: shake 1s linear 1.25s forwards;
        `;
    }}

    @media ${device.tablet} {
      width: 20em;
      margin: 0;
      margin-left: 4em;
    }
  }

  @keyframes reveal {
    0% {
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes shake {
    0%,
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-0.4em);
    }
    20%,
    40%,
    60% {
      transform: translateY(0.4em);
    }
    80% {
      transform: translateY(0.3em);
    }
    90% {
      transform: translateY(-0.3em);
    }
  }
`;