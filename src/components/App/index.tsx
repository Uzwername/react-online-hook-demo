import React from 'react';
import styled from 'styled-components';
import useOnline from 'react-online-hook';
//
import logo from '@/assets/logo.svg';

const StyledApp = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ReturnValuesTableStyled = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
  thead {
    text-align: left;
    background-color: #62DAFB;
    color: #000;
    border-bottom: 1px solid #000;
  }
  th, td {
    border: 1px solid #62DAFB;
  }
  td {
    padding: 2px 10px;
    &.left {
      text-align: left;
    }
    &.spaced {
      padding: 6px 10px;
    }
  }
`;

const App = () => {
  const { isOnline, isAssumedStatus } = useOnline();

  return (
    <StyledApp>
      <header className="App-header">
        <h2>React { isOnline ? 'Online' : 'Offline' } Hook demo</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <ReturnValuesTableStyled>
          <thead>
            <tr>
              <td className="left">
                Name
              </td>
              <td>
                Value
              </td>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="left spaced">
              isOnline
            </td>
            <td>
              { isOnline.toString() }
            </td>
          </tr>
          <tr>
            <td className="left spaced">
              isAssumedStatus
            </td>
            <td>
              { isAssumedStatus.toString() }
            </td>
          </tr>
          </tbody>
        </ReturnValuesTableStyled>
      </header>
    </StyledApp>
  );
};

export default App;
