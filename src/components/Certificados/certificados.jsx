import Figure from 'react-bootstrap/Figure';
import { useDarkModeContext } from '../../Context/DarkModeContext';
import './certificados.css';

export const Certificados = () => {
	const { darkMode } = useDarkModeContext();
	return (
		<>
			<section className={darkMode ? 'bg-dark' : 'bg-light'} id="certificados">
				<div className="titulo-certificados">
					<h2>CERTIFICATES</h2>
					<Figure>
						<Figure.Image
							width={500}
							height={500}
							alt="Desarrollo Web"
							src="/images/certificados/desarrollo.jpg"
						/>
						<Figure.Image
							width={500}
							height={500}
							alt="JavaScript"
							src="/images/certificados/JavaScript.jpg"
						/>
						<Figure.Image
							width={500}
							height={500}
							alt="React Js"
							src="images/certificados/react.jpg"
						/>
						<Figure.Image
							width={500}
							height={500}
							alt="Front-End"
							src="/images/certificados/frontend.jpg"
						/>
					</Figure>
				</div>
			</section>
		</>
	);
};
