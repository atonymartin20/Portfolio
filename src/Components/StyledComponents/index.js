import styled from 'styled-components';
import HomepageImageBackground from '../../Images/HomepageImage.jpg';

const NavbarDiv = styled.div`
    width: 100%;
    background-color: transparent;
    height: 65px;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;

const HomepageDiv = styled.div`
    width: 100%;
    height: 2500px;
`;

const HomepageTopImg = styled.div`
    background-image: url(${HomepageImageBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
`;

const HomepageHeader = styled.header`
    box-sizing: border-box;
    text-align: center;
    background-color: rgba(43, 43, 43, 0.1);
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 100px 2.5%;
    text-shadow: 1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333;
    height: 600px;
    color: white;
    font-size: 3.5rem;
`;

export {
    NavbarDiv,
    HomepageDiv,
    HomepageTopImg,
    HomepageHeader,
}