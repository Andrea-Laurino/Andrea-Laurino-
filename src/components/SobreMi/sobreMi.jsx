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
				<Card style={{ width: '100rem', height: '48rem', border: 'none' }}>
					<Card.Body>
						<Card.Title className="card-titulo">¿Quien Soy?</Card.Title>
						<Card.Text className="description-card">
							Mi nombre es Andrea, tengo 36 años. Desde hace 1 año, he estado
							estudiando de Programación Web Full Stack. Actualmente, me
							encuentro cursando el curso de Programación Backend en Coderhouse.
							Además, complemento mi aprendizaje con cursos gratuitos,
							centrándome en temas como bases de datos MySQL, TypeScript y
							Angular. Soy una persona que valora la precisión y la atención a
							los detalles. Me esfuerzo por entregar soluciones de alta calidad
							y asegurarme de que mi código sea eficiente. Siempre busco mejorar
							y optimizar mis soluciones, y aprender de mis errores para crecer
							como profesional.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</section>
	);
};
