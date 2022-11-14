import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Pdf from '../assets/pdf/Normativas-LSPD.pdf';
import Especial from '../components/sections/facciones/Especial';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../index.css';

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
							EMS
						</h1>

						<a href={Pdf} download="Normativas-Ems.pdf" class="text-sm HoverLinks">
							Todas las normativas aquí
						</a>

						<hr width="250px" />
						<div className="container-md">
							<h5>Conceptos Importantes</h5>

							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li>
										Cada integrante del equipo médico deberá avisar cuando entra y sale de servicio
										a través de la nube. ( Cargo, Nombre entra o sale de servicio )
									</li>
									<li>
										El equipo médico no se dirigirá a los avisos en los que su intervención no sea
										segura. ( Ubicación podría ser zona segura?)
									</li>
									<li>Única arma permitida a poseer: Taser</li>
									<li>Toda persona que sea inactiva, se le echará del cuerpo médico.</li>
									<li>Respetar siempre a los superiores y a lo que estos dispongan.</li>
									<li>
										Mantener una actitud de profesionalismo y respeto total hacia la ciudadanía en
										general y fundamentalmente hacia las fuerzas del orden.
									</li>
									<li>Solo se podrá acudir a un llamado en zona roja con acompañamiento policial.</li>
									<li>
										Llevar suficiente alimento encima es esencial. Debemos de siempre disponer de
										alimento tanto para nosotros como para cualquier paciente.
									</li>
									<li>Se deberá respetar la vestimenta acorde al rango</li>{' '}
								</ul>
							</div>

							<h5>Normativa Oficial</h5>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li className="text-left">
										Un ciudadano que quiera acceder a la EMS deberá estar desempleado desde el
										momento de su postulación hasta el cumplimiento de las oposiciones.
									</li>
									<li>
										Entrada y salida de servicio: Cuando abandonemos el servicio y seamos los
										últimos en hacerlo deberemos mandar un aviso a los ciudadanos. También cuando
										entremos de servicio. Se deberá permanecer un mínimo de 30 minutos de servicio
										cada vez que se entre. Aquel que se conectase para atender a un amigo o algo en
										concreto podría ser penado.
									</li>
									<li>
										Es OBLIGATORIO utilizar el uniforme al ingreso del servicio, de otro modo es
										ilegal portar el uniforme, material médico y vender este fuera de servicio.
									</li>
									<li>
										La constante comunicación con nuestros compañeros y los distintos servicios de
										emergencia es esencial por ello todo el equipo medico debe permanecer en la
										radio.
									</li>
									<li>
										El equipo médico no debe apoyar a ninguna mafia o bando que considere, debe ser
										neutral, ante todo. Tampoco puede ser médico personal de nadie.
									</li>
									<li>
										Si vas a una emergencia en una zona que no es segura, deberás preguntar siempre
										antes de ir, si puedes acudir sin poner en peligro tu vida. En cuanto algún
										civil lo confirme podremos actuar. .
									</li>
									<li>
										Estando en servicio se deberá brindar asistencia médica a todas las personas
										siempre y cuando no le falten el respeto al cuerpo médico. En caso de haber
										discriminación, insultos y/o violencia física-verbal, el cuerpo médico puede
										optar por retirarse al sentirse amenazado.
									</li>
									<li>Está PROHIBIDO dejar vehículos del cuerpo policial abandonados.</li>

									<li>
										Todos los policías deben llevar el uniforme, equipamiento y vehículo
										correspondiente, no podrán usar otras vestimentas, vehículos y otros
										equipamientos.
									</li>

									<li>
										El equipo médico solo podrá llevar civiles en la ambulancia, única y
										exclusivamente si vamos de camino al hospital o si se tiene que hacer un rol
										dentro del mismo.
									</li>

									<li>
										Siempre tiene que permanecer un miembro del cuerpo medico en el hospital
										dependiendo de cuantos se encuentren en servicio de lo contrario si un solo
										miembro está en servicio este debe cumplir u labor únicamente y/o atender
										alertas en el hospital.
									</li>
								</ul>
							</div>
							<h5>Consideraciones</h5>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li>
										Cada integrante del equipo médico deberá avisar cuando entra y sale de servicio
										a través de la nube. ( Cargo, Nombre entra o sale de servicio )
									</li>
									<li>
										El equipo médico no se dirigirá a los avisos en los que su intervención no sea
										segura. ( Ubicación podría ser zona segura?)
									</li>
									<li>Única arma permitida a poseer: Taser</li>
									<li>Toda persona que sea inactiva, se le echará del cuerpo médico.</li>
									<li>Respetar siempre a los superiores y a lo que estos dispongan.</li>
									<li>
										Mantener una actitud de profesionalismo y respeto total hacia la ciudadanía en
										general y fundamentalmente hacia las fuerzas del orden.
									</li>

									<li>Solo se podrá acudir a un llamado en zona roja con acompañamiento policial.</li>
									<li>
										Llevar suficiente alimento encima es esencial. Debemos de siempre disponer de
										alimento tanto para nosotros como para cualquier paciente.
									</li>
									<li>Se deberá respetar la vestimenta acorde al rango</li>
								</ul>
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
