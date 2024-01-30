import './sobreMi.css';
import Card from 'react-bootstrap/Card';
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const SobreMi = () => {
	const { darkMode } = useDarkModeContext();

	return (
		<section className={darkMode ? 'bg-dark' : 'bg-light'} id="sobre-mi">
			<div className="titulo-sobre-mi">
				<h2>SOBRE MI</h2>
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
							<Card.Text>
								¡Hola! Soy Andrea, una apasionada del cambio y la innovación. A
								mis 37 años, he transformado mi carrera de la salud, donde
								trabajé como Técnica de Laboratorio, hacia la programación.
								Actualmente, me encuentro inmersa en mi formación como
								Desarrolladora Front-End, graduada en Coderhouse.
							</Card.Text>
							<Card.Text>
								Como freelancer, he aplicado mis habilidades en diversos
								proyectos, pero mi enfoque está en continuar creciendo y
								colaborar en un entorno de empresa. Estoy constantemente
								aprendiendo nuevas técnicas, y actualmente, me estoy
								especializando en "Testing QA Manual". Mi fascinación por la
								calidad en el desarrollo me impulsa a buscar oportunidades en el
								área de Front-End o Testing, donde pueda aplicar mis
								conocimientos de MySQL y explorar frameworks y CSS frameworks.
							</Card.Text>
							<Card.Text>
								Mi objetivo es contribuir activamente al desarrollo de
								soluciones digitales, aprovechando mi experiencia en salud y mi
								nueva perspectiva como desarrolladora. Estoy entusiasmada por
								unirme a un equipo dinámico que valore la calidad y la
								innovación.
							</Card.Text>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</section>
	);
};
