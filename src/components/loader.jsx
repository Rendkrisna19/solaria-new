import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoSolaria from '../assets/Logo.png';

const LoaderOverly = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setHideLoader(true), 1000); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (hideLoader) return null;

  return (
    <StyledWrapper className={fadeOut ? 'fade-white' : ''}>
      <div className="loader">
        <img src={LogoSolaria} alt="Logo" className="logo" />
      </div>
    </StyledWrapper>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: background-color 1s ease-in-out;

  &.fade-white {
    background-color: white;
    opacity: 0;
    pointer-events: none;
  }

  .logo {
    width: 100px;
    height: 100px;
    animation: ${spin} 2s linear infinite;
  }
`;

export default LoaderOverly;
