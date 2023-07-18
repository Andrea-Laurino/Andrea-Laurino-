import './inicio.css';
import 'animate.css';
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const Inicio = () => {
	const { darkMode } = useDarkModeContext();

	return (
		<section className={darkMode ? 'dark' : 'light'} id="inicio">
			<div className="inicio">
				<div className="portada">
					<h1 className="hola">Hola 👋,</h1>
					<h2 className="soy">Soy Andrea Laurino</h2>
					<h3 className="titulo"> Front-End Developer </h3>
				</div>
				<div className="img ">
					<img
						className="animate__animated animate__pulse animate__infinite"
						src="/images/Avatar.png"
					/>
				</div>
			</div>
		</section>
	);
};
