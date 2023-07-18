import './sobreMi.css';
import Card from 'react-bootstrap/Card';
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const SobreMi = () => {
	const { darkMode } = useDarkModeContext();

	return (
		<section className={darkMode ? 'bg-dark' : 'bg-light'} id="sobre-mi">
			<div className="titulo-sobre-mi">
				<h2>About Me</h2>
			</div>

			<div className="cv">
				<a id="cv" href="/docs/Cv.pdf" download="cv">
					Curriculum Vitae
				</a>
			</div>

			<div className="cards">
				<Card style={{ width: '90rem', height: '55rem', border: 'none' }}>
					<Card.Body>
						<Card.Title className="card-titulo">¿Quien Soy?</Card.Title>
						<Card.Text>
							Mi nombre es Andrea y tengo 36 años. Desde hace 1 año, me he
							estado dedicando al estudio de programación web Full Stack.
							Actualmente, me encuentro en la etapa final de mi carrera, y estoy
							cursando el último curso de Programación Backend en Coderhouse.
							Además, complemento mi aprendizaje con cursos gratuitos,
							centrándome en temas como bases de datos MySQL, TypeScript y
							Next.js. Soy una persona que valora la precisión y la atención a
							los detalles en mi trabajo como programadora. Me esfuerzo por
							entregar soluciones de alta calidad y asegurarme de que mi código
							sea eficiente. Siempre busco mejorar y optimizar mis soluciones, y
							aprender de mis errores para crecer como profesional.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</section>
	);
};
