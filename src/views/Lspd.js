import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Pdf from "../assets/pdf/Normativas-LSPD.pdf";
import Especial from "../components/sections/facciones/Especial"
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import "../index.css"

const propTypes = {
	...SectionProps.types
};

const defaultProps = {
	...SectionProps.defaults
};

const Lspd = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	return (
		<section {...props} className={outerClasses}>
			<Header />
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1 className="mt-0 reveal-from-bottom" data-reveal-delay="200">
							🚨LSPD🚨
						</h1>
         
            <a href={Pdf} download="Normativas-LSPD.pdf" class="text-sm HoverLinks">Todas las normativas aquí</a>

						<hr width="250px" />
						<div className="container-md">
							<h5>Conceptos Importantes</h5>

							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li className="text-left">
										Valorar la vida: Todos los agentes tiene que velar por la seguridad de todos los
										ciudadanos. Hasta poner su vida en peligro si hace falta. En caso de un atraco,
										lo más importante son los rehenes.
									</li>
									<li>Obediencia: Todos los agentes deben obedecer a las órdenes de su superior.</li>
									<li>
										Carácter: Todos los agentes deben tener un carácter educado, deben tener
										paciencia en todo momento. Deben tratar con respeto y educación tanto a los
										ciudadanos como a los detenidos y presos.
									</li>
								</ul>
							</div>

							<h5>Normativa Oficial</h5>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li className="text-left">
										Los policías siempre deben tratar con respeto a todos los jugadores, y nunca
										podrán ser corruptos, en el sentido de que no podrán cobrar de las bandas o de
										civiles, para darles información o armas.
									</li>
									<li>
										Siempre que un policía se salga de servicio, debe quitarse todas las armas del
										cuerpo, a excepción de la pistola.
									</li>
									<li>
										En caso de que un policía fuera de servicio vea un delito debe avisar a los
										policías que estén de servicio, pero no puede actuar como policía, mientras está
										fuera de servicio debe actuar como cualquier otro civil.
									</li>
									<li>
										Cuando un policía está de civil, si se le encuentra en una actividad ilegal,
										puede ser expulsado del cuerpo de policía o suspendido de empleo y sueldo
										temporalmente si no es un delito muy grabe o no se es reincidente.
									</li>
									<li>
										Todo Policía que sienta que su vida, la de un compañero o la de un civil corra
										peligro, tiene la libertad de abrir fuego.
									</li>
									<li>Está PROHIBIDO quedarse AFK en servicio.</li>
									<li>
										Está PROHIBIDO vender y portar material incautado a los civiles, todo lo
										requisado deberá ser entregado en comisaria al rango más alto.
									</li>
									<li>Está PROHIBIDO dejar vehículos del cuerpo policial abandonados.</li>

									<li>
										Todos los policías deben llevar el uniforme, equipamiento y vehículo
										correspondiente, no podrán usar otras vestimentas, vehículos y otros
										equipamientos.
									</li>

									<li>
										Está PROHIBIDO abrir fuego contra personas que están desarmadas o que se
										desconoce si está armada.
									</li>

									<li>
										Es obligatorio cerrar todas las puertas de comisaria, si eres el último en salir
										de servicio.
									</li>

									<li>
										Todos los policías pueden esposar a una persona si la situación lo requiere o
										tiene sospechas de una persona.
									</li>

									<li>Está totalmente PROHIBIDO ir a lugar de mafia.</li>
									<li>
										En las persecuciones sólo podrán realizar el disparo para detener el vehículo
										los copilotos de las patrullas o el conductor en caso de que el vehículo se
										encuentre parado.
									</li>
									<li>
										Cuando alguien sea detenido y se le imputen los delitos cometidos se deberá
										anotar el nombre y los delitos cometidos en el canal de discord #Registro
										Criminal.
									</li>
									<li>
										Si abandonas el cuerpo policial, para irte a una Banda o Mafia. Se realizará un
										CK Administrativamente
									</li>
								</ul>
							</div>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li>
										Artículo 1: Todos los policías tendrán que ir identificados con su DNI, y
										deberán indicar su numero de placa a cualquier ciudadano que se lo solicite.
									</li>
									<li>
										Artículo 2: Queda prohibido realizar acciones ilegales, trabajos para
										mafias/bandas o aceptar sobornos. Si se descubre será expulsado inmediatamente
										del cuerpo y se hará CK.
									</li>
									<li>
										Artículo 3: Un agente está en pleno derecho de solicitar a alguien que se
										identifique, y si genera sospechas podría ser cacheado siempre con previo aviso.
									</li>
									<li>
										Artículo 4: En caso de que un civil se niegue a ser arrestado y vaya desarmado,
										nunca se podrán utilizar armas de fuego contra él. Se podrán usar la porra o la
										pistola taser.
									</li>

									<li>
										Artículo 5: Ante la falta de respeto de un civil se procederá a darle 2 avisos,
										si este persiste se le detendrá leyendo sus derechos. En caso de que este usara
										la violencia, se podrá hacer uso del taser para defenderse y ante todo no abusar
										de él.
									</li>
									<li>
										Artículo 6: Queda prohibido no acometer una orden que venga de un superior,
										siempre y cuando no implique incumplir una normativa de la ciudad o de la
										policía.
									</li>
									<li>
										Artículo 7: No está permitido prestar el vehículo o material policial a otros
										compañeros, exceptuando altos cargos.
									</li>
									<li>
										Artículo 8: El uso de las armas está solo permitido en casos donde el rol ya
										esté abierto por la otra parte.
									</li>

									<li>
										Artículo 9: Aunque seas policía queda totalmente prohibido abusar de tu poder
										saltándote todas las normas de tráfico. Únicamente lo podrás hacer si estas en
										una urgencia o un robo.
									</li>
									<li>Artículo 10: Está prohibido llevar amigos o conocidos en coches oficiales.</li>
									<li>
										Artículo 11: Si mueres en un rol, no podrás volver, solo podrás procesar a los
										detenidos de ese mismo rol. Si mueres en un rol, ese rol termina para ti.
									</li>
									<li>
										Artículo 12: Fuera de servicio solo se podrá llevar lo reglamentario (pistola,
										linterna).
									</li>
									<li>
										Artículo 13: Al detener a 1 persona es importante quitarle las comunicaciones y
										si necesita 1 llamada, devolverle el teléfono en comisaría. No podemos
										arriesgarnos o que todo el cuerpo sea asaltado por no quitarle el móvil.
									</li>
									<li>
										Artículo 14: Antes de entrar en servicio se deberá entrar a la radio policial.
									</li>

									<li>Artículo 15: Solamente son legales, las armas blancas y pistolas.</li>
								
								</ul>
							</div>
             
              <div className="reveal-from-bottom" data-reveal-delay="600">
							<Especial/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

Lspd.propTypes = propTypes;
Lspd.defaultProps = defaultProps;

export default Lspd;
