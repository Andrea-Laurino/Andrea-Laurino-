import './contacto.css';
import { useDarkModeContext } from '../../Context/DarkModeContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const Contacto = () => {
	const { darkMode } = useDarkModeContext();
	const form = useRef();

	let formulario = document.querySelector('.formulario');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_YOUR_SERVICE_ID,
				import.meta.env.VITE_YOUR_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_YOUR_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire('Enviado', 'Gracias por contactarme!', 'success');
					formulario.reset();
				},
				(error) => {
					console.log(error.text);
					Swal.fire('Intentalo de nuevo', 'Error');
				}
			);
	};

	return (
		<section className={darkMode ? 'dark' : 'light'} id="contacto">
			<div className="title-contacto">
				<h2>CONTACTO</h2>
			</div>

			<div id="formulario">
				<Form className="formulario" ref={form} onSubmit={sendEmail}>
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
					<img src="/images/github.png"></img>
				</a>
				<a href="https://www.linkedin.com/in/andrea-laurino/">
					<img src="/images/linkedin.png"></img>
				</a>
			</div>
		</section>
	);
};
