import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  width: 96px;
  padding: 22px 0;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenu = styled.ul`
  list-style: none;

  li + li {
    margin-top: 16px;
  }
`;

export const LogoutButton = styled.button`
  width: 52px;
  height: 52px;

  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke-width: 2.8px;
  }

  :hover {
    background: #17d6eb;
  }
`;

export const Nav = styled(NavLink)<{ hasUnread?: boolean }>`
  display: block;
  width: 52px;
  height: 52px;
  border: 0;
  background: #12afcb;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.2s;

  position: relative;

  ${({ hasUnread }) =>
    hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 14px;
        top: 16px;
        width: 8px;
        height: 8px;
        background: #ffd666;
        border-radius: 50%;
      }
    `}

  svg {
    color: #fff;
  }

  &.active {
    background: #ffd666;

    svg {
      color: #0089a5;
    }
  }
`;
