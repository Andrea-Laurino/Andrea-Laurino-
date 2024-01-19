import './contacto.css';
import { useDarkModeContext } from '../../Context/DarkModeContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const serviceID = 'service_65s30z8';
const templateID = 'template_9819r49';
const publicKey = 'ncZucwaJNs9CbMSD7';

export const Contacto = () => {
	const { darkMode } = useDarkModeContext();
	const form = useRef();
	const [showScrollButton, setShowScrollButton] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
				Swal.fire('Enviado', 'Gracias por contactarme!', 'success');
				form.current.reset();
			},
			(error) => {
				console.log(error.text);
				Swal.fire('Inténtalo de nuevo', 'Error');
			}
		);
	};

	return (
		<section className={darkMode ? 'dark' : 'light'} id="contacto">
			<div className="title-contacto">
				<h2>CONTACT</h2>
			</div>

			<div id="formulario">
				<Form className="formulario" ref={form} onSubmit={sendEmail}>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" name="user_name" required />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Correo</Form.Label>
						<Form.Control type="email" name="user_email" required />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Mensaje</Form.Label>
						<Form.Control as="textarea" rows={3} name="message" required />
					</Form.Group>

					<Button id="button" variant="primary" type="submit" value="Send">
						Enviar
					</Button>
				</Form>
			</div>

			<div className="redes">
				<a href="https://github.com/Andrea-Laurino">
					<img src="/images/skills/github.png"></img>
				</a>
				<a href="https://www.linkedin.com/in/andrea-laurino/">
					<img src="/images/linkedin.png"></img>
				</a>
				<a href="https://wa.me/5491132160715">
					<img src="/images/whatsapp.png"></img>
				</a>
				<a href="https://t.me/+541132160715">
					<img src="/images/telegram.png"></img>
				</a>
			</div>

			<div className="scrollBtn">
				{/* Botón para subir al inicio */}
				{showScrollButton && (
					<button id="btnSubir" onClick={scrollToTop}>
						🔼 Inicio
					</button>
				)}
			</div>

			<div className="footer-contacto">
				<p>✨2023 | Desarrollado por Andrea Laurino.❤</p>
			</div>
		</section>
	);
};
