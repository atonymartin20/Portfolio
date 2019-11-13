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

export {
    NavbarDiv,
    HomepageDiv,
    HomepageTopImg,
}