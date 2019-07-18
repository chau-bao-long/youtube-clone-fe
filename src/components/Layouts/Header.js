import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  faSearch,
  faBars,
  faVideo,
  faTh,
  faCommentDots,
  faEllipsisV,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import srcLogo from '../../assets/images/logo.png';

const Wrap = styled.header `
	height: 56px;
	display: flex;
	padding: 0 20px;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100%;
	background: #fff;
	box-shadow: 0px 0px 5px 0px #ccc;
`;

const HeaderLeft = styled.div `
	display: flex;
	align-items: center;
`;
const ShortMenu = styled.div `
	color: #606060;
	font-size: 24px;
	margin-right: 16px;
`;

const Logo = styled.div ``;

const LogoImage = styled.img `
	max-width: 100px;
`;

const SearchForm = styled.form `
	position: relative;
	flex: 1;
	text-align: center;
	padding: 0 20px;
	display: flex;
	justify-content: center;
`;
const InputSearch = styled.input `
	height: 32px;
	width: 100%;
	border: solid 1px #ccc;
	padding: 3px 10px;
	max-width: 560px;
	box-shadow: inset 0 1px 2px #eee;
  border-radius: 2px 0 0 2px;
`;
const ButtonSearch = styled.button `
	cursor: pointer;
	width: 65px;
	border-radius: 0 2px 2px 0;
	border: solid 1px #ccc;
	color: #606060;
	background: #f8f8f8;
`;
const HeaderSearch = styled.div `
`;

const HeaderRight = styled.div `
	display: flex;
	align-items: center;
	 margin-left: auto;
`;

const MenuButton = styled.a `
	display: block;
	cursor: pointer;
	color: #606060;
	padding: 15px;
	font-size: 18px;
	margin: 0 10px;
`;

const SignIn = styled(NavLink)`
	display: flex;
	cursor: pointer;
	padding: 10px 20px;
	text-transform: uppercase;
	color: #065fd4;
	border: solid 1px #065fd4;
	border-radius: 2px;
	font-size: 16px;
	align-items: center;

	svg {
		font-size: 24px;
		margin-right: 10px;
	}
`;

const Header = () => (<Wrap>
  <HeaderLeft>
    <ShortMenu>
      <FontAwesomeIcon icon={faBars}/>
    </ShortMenu>
    <Logo>
      <LogoImage src={srcLogo}/>
    </Logo>
  </HeaderLeft>
  <SearchForm>
    <InputSearch/>
    <ButtonSearch>
      <FontAwesomeIcon icon={faSearch}/>
    </ButtonSearch>
  </SearchForm>
  <HeaderRight>
    <MenuButton><FontAwesomeIcon icon={faVideo}/></MenuButton>
    <MenuButton><FontAwesomeIcon icon={faTh}/></MenuButton>
    <MenuButton><FontAwesomeIcon icon={faCommentDots}/></MenuButton>
    <MenuButton><FontAwesomeIcon icon={faEllipsisV}/></MenuButton>
    <SignIn to={`/login`}><FontAwesomeIcon icon={faUserCircle}/>Sign In</SignIn>
  </HeaderRight>
</Wrap>);

export default Header;
