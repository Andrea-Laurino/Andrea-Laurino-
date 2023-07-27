import './proyectos.css';
import Card from 'react-bootstrap/Card';
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const Proyectos = () => {
	const { darkMode } = useDarkModeContext();

	return (
		<section className={darkMode ? 'bg-dark' : 'bg-light'} id="proyectos">
			<div className="titulo-proyectos">
				<h2>PROJECTS </h2>
			</div>

			<div className="cards" id="card-proyectos">
				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://e-r-translation.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/eR-Translation">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/ProyectoDesarrollo.png"
							className="card-img-top"
							alt="ER-Translation"
						></img>
						<Card.Title className="card-titulo">
							Proyecto final Desarrollo Web:
						</Card.Title>
						<Card.Title
							className="card-titulo"
							style={{ fontWeight: 400, fontStyle: 'italic' }}
						>
							ER-Translation
						</Card.Title>
						<Card.Text>
							En todo el proyecto es Responsive. Se aplico SEO, SASS, flex, Grid
							Y Bootstrap en distintas secciones del proyecto.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://js-44555-andrea-laurino.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/js-44555-AndreaLaurino">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/ProyectoJS.png"
							className="card-img-top"
							alt="Studio Chic"
						></img>
						<Card.Title className="card-titulo">
							Proyecto final JavaScript:
						</Card.Title>
						<Card.Title
							className="card-titulo"
							style={{ fontWeight: 400, fontStyle: 'italic' }}
						>
							Vivero BEL PAESSAGIO
						</Card.Title>
						<Card.Text>
							Es un ecommerce hecho con JavaScript puro, utilice un template de
							bootstrap para los estilos.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://react-js-51180-studio-chic.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/React-Js-51180-StudioChic">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/StudioChic.jpg"
							className="card-img-top"
							alt="Studio Chic"
						></img>
						<Card.Title className="card-titulo">
							Proyecto final React.js:
						</Card.Title>
						<Card.Title
							className="card-titulo"
							style={{ fontWeight: 400, fontStyle: 'italic' }}
						>
							Studio Chic
						</Card.Title>
						<Card.Text>
							Es un ecommerce hecho con React.js, Vite y Firebase (Auth,
							Firebase). Como framework de estilo utilice React-bootstrap.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className="cards" id="card-proyectos">
				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://juego-dino-rex.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/JuegoDinoRex">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/DinoChrome.png"
							className="card-img-top"
							alt="Clon de Instagram"
						></img>
						<Card.Title className="card-titulo">Juego Dino Chrome</Card.Title>
						<Card.Text>
							Este proyecto se realizo con javascript puro. El juego consiste en
							ayudar al dinosaurio a saltar y evitar obstáculos.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://clon-de-instagram.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/Clon-de-Instagram">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/laptopDevice-instagram.png"
							className="card-img-top"
							alt="Clon de Instagram"
						></img>
						<Card.Title className="card-titulo">Clon de Instagram</Card.Title>
						<Card.Text>
							En este proyecto esta realizado con React.js, Vite y Firebase
							(Auth, Firebase, Firestore). El proyecto es Responsive.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className="cards" id="card-proyectos">
				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="https://clon-de-spotify.vercel.app/">Web</a>
							<a href="https://github.com/Andrea-Laurino/Clon-de-Spotify">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem' }}
							src="/images/Proyectos/Clon-spotify.png"
							className="card-img-top"
							alt="Clon de Instagram"
						></img>
						<Card.Title className="card-titulo">Clon de Spotify</Card.Title>
						<Card.Text>
							Este proyecto se desarrollo utilizando HTML, CSS y JavaScript. El
							objetivo principal de este proyecto es recrear una interfaz de
							usuario (sin funcionalidad). El proyecto es Responsive.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
					<Card.Body>
						<div className="enlaces">
							<a href="#">Web</a>
							<a href="https://github.com/Andrea-Laurino/Coderhouse-Backend-55535">
								GitHub
							</a>
						</div>
						<img
							style={{ height: '15rem', width: '15rem' }}
							src="/images/Proyectos/proximamente.jpg"
							className="card-img-top"
							alt="Clon de Instagram"
						></img>
						<Card.Title className="card-titulo">Proximamente</Card.Title>
						<Card.Text>
							Este sera el proyecto final de mi curso de Backend que estoy
							realizando en este momento y finalizo en el mes de Diciembre.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</section>
	);
};
