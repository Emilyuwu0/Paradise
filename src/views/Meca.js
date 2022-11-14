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

						<a href={Pdf} download="Normativas-Mecas.pdf" class="text-sm HoverLinks">
							Todas las normativas aquí
						</a>

						<hr width="250px" />
						<div className="container-md">
							<h5>Conceptos Importantes</h5>

							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li>
									Sin importar el rango del Mecánico, el CLIENTE debe mantener el respeto, de lo contrario se le agregara a la BLACK LIST. (Pedir el DNI u obtener el nombre OOC)
									</li>
									<li>
									
Al llegar al taller se deberá mantener un orden de atención, ésta será por llegada y será OBLIGATORIO respetar la misma.
									</li>
									<li>Al CLIENTE se le cobrará por adelantado el servicio, se le realizará una Factura. Si el CLIENTE no paga la factura en el momento se le pondrá un STRIKE y se le ELIMINARÁ el vehículo por completo.</li>
									<li>En el momento en donde se solicita un MECÁNICO mediante un auxilio, este deberá ser redactado en 3ra persona y será OBLIGATORIO que este informe la calle en donde se ubica.</li>
									<li>SERÁ ESTRICTAMENTE OBLIGATORIO QUITARSE LA MÁSCARA AL ENTRAR AL TALLER.</li>
									<li>
									
 Sin importar el rango del Mecánico, el CLIENTE debe mantener el respeto, de lo contrario se le agregara a la BLACK LIST. (Pedir el DNI u obtener el nombre OOC)

									</li>
									<li>Al llegar al taller se deberá mantener un orden de atención, ésta será por llegada y será OBLIGATORIO respetar la misma.</li>
									<li>
                  Al CLIENTE se le cobrará por adelantado el servicio, se le realizará una Factura. Si el CLIENTE no paga la factura en el momento se le pondrá un STRIKE y se le ELIMINARÁ el vehículo por completo.
									</li>
									<li>En el momento en donde se solicita un MECÁNICO mediante un auxilio, este deberá ser redactado en 3ra persona y será OBLIGATORIO que este informe la calle en donde se ubica.
</li>{' '}
<li>SERÁ ESTRICTAMENTE OBLIGATORIO QUITARSE LA MÁSCARA AL ENTRAR AL TALLER.</li>
								</ul>
							</div>

							<h5>Normativa Oficial</h5>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ul className="textLeft">
									<li className="text-left">
									Llenar siempre y tener al dia la bitacora de cada integrante.
									</li>
									<li>
									Es OBLIGATORIO cumplir un mínimo de 12 hrs semanales. (Los horarios aumentan mientras el rango es más alto).
									</li>
									<li>
                  Deberán PORTAR el uniforme correspondiente a su rango
									</li>
									<li>
									Avisar que se encuentra en servicio o no.
									</li>
									<li>
									REDACTAR la factura antes de cualquier tuneo del vehículo que se presente. OBLIGACIONES DE RANGO TRABAJADOR EN ADELANTE AL ESTAR EN SERVICIO.
									</li>
									<li>
                  Tendrán que informar la disponibilidad de los mecánicos cada 30min.
									</li>
								
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
