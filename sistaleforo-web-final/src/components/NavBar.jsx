'use client'

import React, { useState } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { useUserContext } from '../context/UserContext'
import PageLink from './PageLink'
import AnchorLink from './AnchorLink'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUserContext() // Cambiado aquí

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  Inicio
                </PageLink>
              </NavItem>
              {user.username && (
                <>
                  <NavItem>
                    <PageLink href="" className="nav-link" testId="navbar-csr">
                      Crear artículo
                    </PageLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!user.username && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/login"
                    className="btn btn-primary btn-margin mr-1"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Iniciar sesión
                  </AnchorLink>
                  <AnchorLink
                    href="/register"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Regístrarse
                  </AnchorLink>
                </NavItem>
              )}
              {user.username && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <p>{user.username}</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink href="/" icon="power-off" testId="navbar-logout-desktop">
                        Cerrar sesión
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
