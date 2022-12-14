import styled from 'styled-components';
import { colors, media } from '../../styles/variables';

export const Section = styled.section`
  margin-bottom: 50px;

  @media (${media.tablet}) {
    margin-bottom: 43px;
  }

  @media (${media.pc}) {
    margin-bottom: 87px;
  }
`;

export const Container = styled.div`
  @media (${media.tablet}) {
    display: grid;
    grid-template-columns: auto 696px auto;
    column-gap: 0px;
    margin-bottom: 50px;
  }

  @media (${media.pc}) {
    display: grid;
    grid-template-columns: auto 1214px auto;
    column-gap: 0px;
    margin-bottom: 100px;
  }
`;

export const Main = styled.div`
  @media (${media.tablet}) {
    display: flex;
  }

  @media (${media.pc}) {
  }
`;

export const Blue = styled.div`
  @media (${media.tablet}) {
    padding-right: 36px;
    background: linear-gradient(${colors.blue} 358px, ${colors.white} 175px);
  }

  @media (${media.pc}) {
    background: linear-gradient(${colors.blue} 514px, ${colors.white} 275px);
    padding: 0;
    padding: 0 50px 0 0;
  }
`;

export const Voldemort = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 12px);
`;

export const Figure = styled.figure`
  position: relative;
  padding-left: 12px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 100%;
    background: ${colors.blue};
    border-top: 1px solid ${colors.white};
  }

  @media (${media.tablet}) {
    padding-left: 36px;
    padding: 0;

    &::before {
      display: none;
    }
  }

  @media (${media.pc}) {
    padding: 0;

    &::before {
      display: none;
    }
  }
`;

export const ImageWrap = styled.figure`
  width: 100%;
  height: 100%;

  @media (${media.tablet}) {
    width: 308px;
    height: 433px;
  }

  @media (${media.pc}) {
    width: 444px;
    height: 624px;
  }
`;

export const Text = styled.div`
  position: relative;
  width: 100%;
  margin-top: -75px;
  padding-left: 12px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 100%;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }

  @media (${media.tablet}) {
    padding: 0;

    &::before {
      display: inline-block;
      width: 36px;
      display: none;
    }
  }

  @media (${media.pc}) {
    padding-left: 0;
    margin-top: -110px;

    &::before {
      display: none;
    }
  }
`;

export const TextWrap = styled.div`
  padding: 50px 88px 30px 20px;
  color: ${colors.white};
  background: ${colors.green};

  @media (${media.tablet}) {
    padding: 50px 46px 243px 46px;
  }

  @media (${media.pc}) {
    padding: 41px 65px 59px 65px;
  }
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 10px;

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    font-style: normal;
    margin-bottom: 18px;
  }
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 20px;

  @media (${media.tablet}) {
  }
  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    font-style: normal;
    padding-bottom: 0;
    margin-bottom: 11px;
  }
`;

export const FishText = styled.div`
  margin-left: 12px;
  background: ${colors.cyanGray};
  padding: 50px 20px;
  margin-bottom: 50px;

  @media (${media.tablet}) {
    position: relative;
    align-self: flex-end;
    padding: 70px 60px;
    margin: 0;

    &::after {
      display: none;
      content: '';
      position: absolute;
      right: -36px;
      bottom: 0;
      width: 100%;
      height: 71%;
      background: ${colors.darkOrange};
    }
  }
  @media (${media.pc}) {
    padding: 120px 114px 93px 115px;

    &::after {
      display: none;
    }
  }
`;

export const FishH2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (${media.tablet}) {
    margin-bottom: 17px;
  }

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const FishH3 = styled.h3`
  font-family: Mercury Text G2;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  color: ${colors.pink};
  margin-bottom: 30px;

  @media (${media.tablet}) {
    margin-bottom: 33px;
  }

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    font-style: normal;
    margin-bottom: 30px;
  }
`;

export const FishP = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  @media (${media.pc}) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Red = styled.div`
  @media (${media.tablet}) {
    padding-right: 36px;
    background: linear-gradient(to top, ${colors.darkOrange} 523px, ${colors.white} 175px);
  }

  @media (${media.pc}) {
    padding: 0;
    background: linear-gradient(to top, ${colors.darkOrange} 423px, ${colors.white} 275px);
  }
`;
