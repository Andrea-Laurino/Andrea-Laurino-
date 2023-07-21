import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDarkModeContext } from '../../Context/DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export const NavBar = () => {
	const [expanded, setExpanded] = useState(false);
	const { darkMode, toggleDarkMode } = useDarkModeContext();

	return (
		<section id="nav-bar" className={darkMode ? 'dark' : 'light'}>
			<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
				<div className="switch">
					<Form>
						<Form.Check
							type="switch"
							id="custom-switch"
							label={
								<>
									{darkMode ? (
										<FaMoon className="icon-moon" />
									) : (
										<FaSun className="icon-sun" />
									)}
								</>
							}
							className="custom-form-check"
							checked={darkMode}
							onChange={toggleDarkMode}
						/>
					</Form>
				</div>
				<Container>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						onClick={() => setExpanded(expanded ? false : 'expanded')}
					/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={() => setExpanded(false)} href="#inicio">
								Inicio
							</Nav.Link>
							<Nav.Link onClick={() => setExpanded(false)} href="#sobre-mi">
								About Me
							</Nav.Link>
							<Nav.Link onClick={() => setExpanded(false)} href="#skills">
								Skills
							</Nav.Link>
							<Nav.Link onClick={() => setExpanded(false)} href="#proyectos">
								Proyectos
							</Nav.Link>
							<Nav.Link onClick={() => setExpanded(false)} href="#certificados">
								Certificados
							</Nav.Link>
							<Nav.Link onClick={() => setExpanded(false)} href="#contacto">
								Contacto
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<img
					className="logoAndrea"
					src="/images/logoAndrea-removebg-preview.png"
					style={{ width: '9rem', height: '5rem' }}
					alt="Logo Andrea"
				/>
			</Navbar>
		</section>
	);
};
