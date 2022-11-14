import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import "../../index.css"
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'FACCIONES OFICIALES',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner ">
                <h4>LSPD</h4>
  
                <p className="text-sm mb-0">
             En Paradise contamos con un excelente cuerpo policial puesto a proteger y brindar un buen bienestar a la ciudad y sus ciudadanos las 24/7
              ,prestando su buen servicio teniendo en cuenta sus principios y valores eticos.                      </p>
               
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Cuerpo policial</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <Link to="lspd">Normativas.</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <h4>EMS</h4>
  
              
                  <p className="text-sm mb-0">
                    Nuestro cuerpo medico garantiza aseguramiento, el bienestar y la salud los ciudadanos en cualquier parte de la ciudad de Paradise puesto a prestar un servicio oportuno, integral y humanizado.
                      </p>
            
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Cuerpo medico</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <Link to="ems">Normativas.</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <h4>MECANICOS</h4>
           
                  <p className="text-sm mb-0">
                  El equipo de mecánicos esta dispuesto a proporcionar un buen servicio de mantenimiento automotriz en general, para todos los ciudadanos satisfaciendo sus necesidades y expectativas en el mejor tiempo posible.
                      </p>
             
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Equipo de mecánicos</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <Link to="meca">Normativas.</Link>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;