import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/navBar';
import { Inicio } from './components/Inicio/inicio';
import { SobreMi } from './components/SobreMi/sobreMi';
import { Skills } from './components/Skills/skills';
import { Proyectos } from './components/Proyectos/proyectos';
import { Certificados } from './components/Certificados/certificados';
import { Contacto } from './components/Contacto/contacto';
import { DarkModeProvider } from '../src/Context/DarkModeContext';
import './App.css';

function App() {
	return (
		<>
			<DarkModeProvider>
				<NavBar />
				<Inicio />
				<SobreMi />
				<Skills />
				<Proyectos />
				<Certificados />
				<Contacto />
			</DarkModeProvider>
		</>
	);
}

export default App;
