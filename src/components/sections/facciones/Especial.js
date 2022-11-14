import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import '../../../index.css';

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const Especial = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Operaciones Especiales:',
		paragraph: ''
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
				<SectionHeader data={sectionHeader} className="center-content text-sm" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-right" data-reveal-delay="200">
							<div className="tiles-item-inner ">
								<p className="text-xs mb-0">
									Delitos de tráfico: Solo se procederá a multar en el lugar de los hechos, si sus
									multas superan los 50k y el agente lo considera oportuno se le podrá llevar a
									comisaria (lectura de derechos) para dejarle en los calabozos durante unos minutos
								</p>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<p className="text-sm mb-0">
								
Se pide que los servicios se pongan con sentido común, el tiempo en el calabozo es obligatorio pero los servicios varían en función de la cantidad y gravedad de los delitos.
								</p>
							</div>
						</div>

						<div className="tiles-item reveal-from-left" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<p className="text-sm mb-0">
								Delitos menores: Estos son los delitos que son penados con 5 minutos en el calabozo.								</p>
							</div>
						</div>

						<div className="tiles-item reveal-from-left" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<p className="text-sm mb-0">
								Delitos medios: Estos son los delitos que son penados con 10 minutos en el calabozo.								</p>
							</div>
						</div>
						<div className="tiles-item reveal-from-left" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<p className="text-sm mb-0">
								
								Delitos graves: Estos son los delitos que son penados con 20 minutos en el calabozo								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Especial.propTypes = propTypes;
Especial.defaultProps = defaultProps;

export default Especial;
