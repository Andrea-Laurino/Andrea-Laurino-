import './skills.css';
import Card from 'react-bootstrap/Card';
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const Skills = () => {
	const { darkMode } = useDarkModeContext();

	return (
		<section className={darkMode ? 'bg-dark' : 'bg-light'} id="skills">
			<div className="titulo-skills">
				<h2>SKILLS</h2>
			</div>

			<div className="cards" style={{ height: '20rem' }}>
				{/* html */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\html5.png"
							className="card-img-top"
							alt="html5"
						></img>
						<Card.Title className="card-titulo">HTML5</Card.Title>
					</Card.Body>
				</Card>
				{/* css */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\css.png"
							className="card-img-top"
							alt="css"
						></img>
						<Card.Title className="card-titulo">CSS</Card.Title>
					</Card.Body>
				</Card>
				{/* bootstrap */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\bootstrap.png"
							className="card-img-top"
							alt="bootstrap"
						></img>
						<Card.Title className="card-titulo">BOOTSTRAP</Card.Title>
					</Card.Body>
				</Card>
				{/* js */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\javascript.png"
							className="card-img-top"
							alt="javascript"
						></img>
						<Card.Title className="card-titulo">JAVASCRIPT</Card.Title>
					</Card.Body>
				</Card>
			</div>

			<div className="cards" style={{ height: '20rem' }}>
				{/* react */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\react.png"
							className="card-img-top"
							alt="react"
						></img>
						<Card.Title className="card-titulo">REACT</Card.Title>
					</Card.Body>
				</Card>
				{/* material ui */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\material-ui.png"
							className="card-img-top"
							alt="Material UI"
						></img>
						<Card.Title className="card-titulo">MATERIAL-UI</Card.Title>
					</Card.Body>
				</Card>
				{/* git */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\git.png"
							className="card-img-top"
							alt="git"
						></img>
						<Card.Title className="card-titulo">GIT</Card.Title>
					</Card.Body>
				</Card>
				{/* github */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\github.png"
							className="card-img-top"
							alt="github"
						></img>
						<Card.Title className="card-titulo">GITHUB</Card.Title>
					</Card.Body>
				</Card>
			</div>

			<div className="cards" style={{ height: '20rem' }}>
				{/* ts */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\ts.png"
							className="card-img-top"
							alt="Tipescript"
						></img>
						<Card.Title className="card-titulo">TYPESCRIPT</Card.Title>
					</Card.Body>
				</Card>
				{/* angular */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\angular.png"
							className="card-img-top"
							alt="Angular 11"
						></img>
						<Card.Title className="card-titulo">ANGULAR</Card.Title>
					</Card.Body>
				</Card>
				{/* Node.js */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="/images/skills/node.png"
							className="card-img-top"
							alt="Node.js"
						></img>
						<Card.Title className="card-titulo">NODE.JS</Card.Title>
					</Card.Body>
				</Card>
				{/* MySQL */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\MySQL.png"
							className="card-img-top"
							alt="MySQL"
						></img>
						<Card.Title className="card-titulo">MySQL</Card.Title>
					</Card.Body>
				</Card>
			</div>
			<div className="cards" style={{ height: '20rem' }}>
				{/* visual */}
				<Card style={{ width: '16rem', height: '17rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\visual-studio-code.png"
							className="card-img-top"
							alt="Visual studio code"
						></img>
						<Card.Title className="card-titulo">VISUAL STUDIO CODE</Card.Title>
					</Card.Body>
				</Card>
				{/* chakra */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="\images\skills\chakraUI.png"
							className="card-img-top"
							alt="Chakra UI"
						></img>
						<Card.Title className="card-titulo">CHAKRA-UI</Card.Title>
					</Card.Body>
				</Card>
				{/* vercel */}
				<Card style={{ width: '16rem', height: '16rem', border: 'none' }}>
					<Card.Body>
						<img
							src="/images/skills/vercel.png"
							className="card-img-top"
							alt="Vercel"
						></img>
						<Card.Title className="card-titulo">VERCEL</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</section>
	);
};
