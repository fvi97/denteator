import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import {
  useInputs,
  Captions,
  FormBody,
  ComboboxMulti,
  RadioControl,
  RadioOption,
  Input, withFormContextAndTheme,
} from 'react-emotion-multi-step-form';
import css from './SectionHero.css';
// import MultiStep from 'react-multistep/react-multistep';
// import StepOne from './stepOne';
// import StepTwo from './stepTwo';

import turismoDentalMain from '../../assets/Turismo-dental-bucharest.jpg';
import dentist01 from '../../assets/dentist-01.png';
import services1 from '../../assets/services-icon-1.png';
import services2 from '../../assets/services-icon-2.png';
import services3 from '../../assets/services-icon-3.png';
import services4 from '../../assets/services-icon-4.png';
import services5 from '../../assets/services-icon-5.png';
import services6 from '../../assets/services-icon-6.png';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  const welcome_container = classNames(css.et_pb_section, css.et_pb_section_0, css.et_pb_with_background, css.et_section_regular);
  const welcome_row = classNames(css.et_pb_row, css.et_pb_row_0);
  const welcome_column = classNames(css.et_pb_column, css.et_pb_column_1_2, css.et_pb_column_7, css.et_pb_css_mix_blend_mode_passthrough);
  const welcome_module = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_0, css.et_pb_bg_layout_light, css.et_pb_text_align_center, css.et_had_animation);
  const welcome_image_container = classNames(css.et_pb_module, css.et_pb_image, css.et_pb_image_0, css.et_animated, css.et_had_animation);
  const welcome_button = classNames(css.et_pb_button_module_wrapper, css.et_pb_button_0_wrapper, css.et_pb_button_alignment_center, css.et_pb_module, css.et_had_animation);
  const welcome_empty = classNames(css.et_pb_column, css.et_pb_column_1_2, css.et_pb_column_1, css.et_pb_css_mix_blend_mode_passthrough, css.et_last_child, css.et_pb_column_empty);

  const socials_container = classNames(css.et_pb_section, css.et_pb_section_1, css.et_pb_with_background, css.et_section_regular);
  const socials_row = classNames(css.et_pb_row, css.et_pb_row_1, css.et_had_animation);
  const socials_column = classNames(css.et_pb_column, css.et_pb_column_1_3, css.et_pb_column_6, css.et_pb_css_mix_blend_mode_passthrough);
  const socials_module = classNames(css.et_pb_module, css.et_pb_blurb, css.et_pb_blurb_2, css.et_pb_bg_layout_dark, css.et_pb_text_align_left, css.et_pb_blurb_position_left);
  const socials_image = classNames(css.et_pb_animation_off, css.et_pb_icon);

  const section_regular = classNames(css.et_pb_section, css.et_pb_section_2, css.et_section_regular);
  const column_passthrough = classNames(css.et_pb_column, css.et_pb_column_1_2, css.et_pb_column_6, css.et_pb_css_mix_blend_mode_passthrough);
  const image_container = classNames(css.et_pb_module, css.et_pb_image, css.et_pb_image_1);
  const text_container = classNames(css.et_pb_column, css.et_pb_column_1_2, css.et_pb_column_6, css.et_pb_css_mix_blend_mode_passthrough, css.et_lst_child);
  const text_inner_container = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_1, css.et_pb_bg_layout_light, css.et_pb_text_align_left);

  const widgets_container = classNames(css.et_pb_section, css.et_pb_section_3, css.et_section_regular, css.section_has_divider, css.et_pb_top_divider);
  const row_container = classNames(css.et_pb_row, css.et_pb_row_3);
  const column_container = classNames(css.et_pb_column, css.et_pb_column_1_3, css.et_pb_column_7, css.et_pb_css_mix_blend_mode_passthrough);
  const inner_column_container = classNames(css.et_pb_module, css.et_pb_blurb, css.et_pb_blurb_3, css.et_pb_bg_layout_light, css.et_pb_text_align_left, css.et_pb_blurb_position_left);
  const widget_image = classNames(css.et_pb_animation_off, css.et_pb_icon);

  const services_container = classNames(css.et_pb_section, css.et_pb_section_4, css.et_section_regular);
  const services_row = classNames(css.et_pb_row, css.et_pb_row_4, css.et_pb_gutters1);
  const services_column = classNames(css.et_pb_column, css.et_pb_column_4_4, css.et_pb_column_7, css.et_pb_css_mix_blend_mode_passthrough);
  const services_header = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_2, css.et_pb_bg_layout_light, css.et_pb_text_align_left);
  const service_subcontainer = classNames(css.et_pb_row, css.et_pb_row_5, css.et_pb_gutters1, css.et_pb_row_6col, css.margin_top_100);
  const service_subcolumn = classNames(css.et_pb_column, css.et_pb_column_1_6, css.et_pb_column_7, css.et_pb_css_mix_blend_mode_passthrough, css.et_pb_column_services);
  const service_submodule_first = classNames(css.et_pb_module, css.et_pb_blurb, css.et_pb_blurb_6, css.et_pb_bg_layout_light, css.et_pb_text_align_left, css.et_pb_blurb_position_top);
  const service_submodule_rest = classNames(css.et_pb_module, css.et_pb_blurb, css.et_pb_blurb_7, css.et_pb_bg_layout_light, css.et_pb_text_align_left, css.et_pb_blurb_position_top);
  const service_subtext = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_3, css.et_pb_bg_layout_light, css.et_pb_text_align_center);

  const services_list_container = classNames(css.et_pb_section, css.et_pb_section_5, css.et_pb_with_background, css.et_section_regular);
  const services_list_row = classNames(css.et_pb_row, css.et_pb_row_6, css.et_pb_gutters4);
  const services_list_column = classNames(css.et_pb_column, css.et_pb_column_4_4, css.et_pb_column_6, css.et_pb_css_mix_blend_mode_passthrough, css.et_last_child);
  const services_list_header = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_9, css.et_pb_bg_layout_light, css.et_pb_text_align_left);
  const services_list_text = classNames(css.et_pb_module, css.et_pb_text, css.et_pb_text_10, css.et_pb_bg_layout_light, css.et_pb_text_align_left);

  // const steps = [
  //   {name: 'StepOne', component: <StepOne/>},
  //   {name: 'StepTwo', component: <StepTwo/>}
  // ];

  const handleSubmit = data => {
    console.log(data);
    // const history = useHistory();
    //
    // function handleClick() {
    //   history.push("/home");
    // }

  };

  // const options = ['Arts & Entertainment', 'Industry', 'Innovation & Tech', 'Life'];
  return (
    <div className={classes}>
      {/*<div className={css.heroContent}>*/}
      {/*  <h1 className={css.heroMainTitle}>*/}
      {/*    <FormattedMessage id="SectionHero.title" />*/}
      {/*  </h1>*/}
      {/*  <h2 className={css.heroSubTitle}>*/}
      {/*    <FormattedMessage id="SectionHero.subTitle" />*/}
      {/*  </h2>*/}
      {/*  <NamedLink*/}
      {/*    name="SearchPage"*/}
      {/*    to={{*/}
      {/*      search:*/}
      {/*        'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',*/}
      {/*    }}*/}
      {/*    className={css.heroButton}*/}
      {/*  >*/}
      {/*    <FormattedMessage id="SectionHero.browseButton" />*/}
      {/*  </NamedLink>*/}
      {/*</div>*/}

      {/*Welcome message START*/}
      <div className={welcome_container}>
        <div className={welcome_row}>
          <div className={welcome_column}>
            <div className={welcome_module}>
              <div className={css.et_pb_text_inner}><h1>Turismo dental en Bucharest, Rumanía</h1>
                <h2><span><strong>Ahorra hasta un 75%</strong></span> en
                  tratamientos dentales, viaja y conoce una de las ciudades que se está convirtiendo
                  en un centro Europe de <span><strong>servicios odontológicos</strong></span>
                </h2></div>
            </div>
            <div className={welcome_button}>
              {/*<a className="et_pb_button et_pb_button_0 et_hover_enabled et_pb_bg_layout_light"*/}
              {/*   href="">¡Más información!</a>*/}
              <NamedLink
                name="SearchPage"
                to={{
                  search:
                    'address=Finland&bounds=70.0922932%2C31.5870999%2C59.693623%2C20.456500199999937',
                }}
                className={css.heroButton}
              >
                <FormattedMessage id="SectionHero.browseButton" />
              </NamedLink>
            </div>
            <div className={welcome_image_container}>
              <span className={css.et_pb_image_wrap}><img className={css.welcome_image}
                src={dentist01}
                sizes="((min-width: 0px) and (max-width: 480px)) 480px, (min-width: 481px) 800px, 100vw"/></span>
            </div>
          </div>
          {/*<div className={css.landing_page_form}>*/}
          {/*  <h1>*/}
          {/*    Questionnaire*/}
          {/*  </h1>*/}
          {/*  <Captions callToActionText="Get Browsing!" />*/}
          {/*  <FormBody height={200} initialFocus={false} submitText="Browse Clinics" submitWidth={250} onSubmit={handleSubmit}>*/}
          {/*    <RadioControl height={200}*/}
          {/*      name="location"*/}
          {/*      caption="Where does it hurt you?"*/}
          {/*      validationRules={{ required: 'Please select an option' }}*/}
          {/*    >*/}
          {/*      <RadioOption className={css.test} value="Left Side" />*/}
          {/*      <RadioOption value="Front of Teeth" />*/}
          {/*      <RadioOption value="Right Side" />*/}
          {/*    </RadioControl>*/}
          {/*    <RadioControl height={200}*/}
          {/*      name="intensity"*/}
          {/*      caption="How bad does it hurt?"*/}
          {/*      validationRules={{ required: 'Please select an option' }}*/}
          {/*    >*/}
          {/*      <RadioOption value="Barely Feel It" />*/}
          {/*      <RadioOption value="Medium" />*/}
          {/*      <RadioOption value="Bad" />*/}
          {/*    </RadioControl>*/}
          {/*    <RadioControl height={200}*/}
          {/*      name="past appointments"*/}
          {/*      caption="How long has it been since your last dentist appointment?"*/}
          {/*      validationRules={{ required: 'Please select a frequency' }}*/}
          {/*    >*/}
          {/*      <RadioOption value="<6 months" />*/}
          {/*      <RadioOption value="6-12 months" />*/}
          {/*      <RadioOption value=">12 months" />*/}
          {/*    </RadioControl>*/}
          {/*  </FormBody>*/}
          {/*</div>*/}
          <div className={welcome_empty}>
          </div>
        </div>
      </div>
      {/*Welcome message END*/}
      {/*Socials START*/}
      <div className={socials_container}>
        <div className={socials_row}>
          <div className={socials_column}>
            <div className={socials_module}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={socials_image}></span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h4 className={css.et_pb_module_header}><span>Llámanos</span></h4>
                  <div className={css.et_pb_blurb_description}><p>(394) 288-2168</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={socials_column}>
            <div className={socials_module}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={socials_image}></span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h4 className={css.et_pb_module_header}><span>WhatsApp</span></h4>
                  <div className={css.et_pb_blurb_description}><p>1234 Divi St. #100 San francisco,
                    CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={socials_column}>
            <div className={socials_module}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={socials_image}></span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h4 className={css.et_pb_module_header}><span>Email Us</span></h4>
                  <div className={css.et_pb_blurb_description}><p>hello@denteator.com</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Socials END*/}
      {/*Picture+Description START*/}
      <div className={section_regular}>
        <div className={css.et_pb_row}>
          <div className={column_passthrough}>
            <div className={image_container}>
              <span className={css.et_pb_image_wrap}><div className={css.box_shadow_overlay}></div>
                <img
                src={turismoDentalMain}
                sizes="((min-width: 0px) and (max-width: 480px)) 480px, ((min-width: 481px) and (max-width: 980px)) 980px, ((min-width: 981px) and (max-width: 1280px)) 1280px, (min-width: 1281px) 1325px, 100vw"/></span>
            </div>
          </div>
          <div className={text_container}>
            <div className={text_inner_container}>
              <div className={css.et_pb_text_inner}><h2>¿Por qué Bucharest es tu elección?</h2>
                <p><strong>Bucarest</strong> es una de la ciudades donde se ha desarrollado más el
                  turismo dental. Varias clínicas dentales han invertido en medios e instalaciones
                  para ofrecer <strong>servicios y cuidados de alta gama</strong> a
                  los clientes de toda Europa.</p>
                <p>El alto precio de la atención ontológica en países como España, hace que muchas
                  personas se planteen el viaje a otros lugares.</p>
                <p>La novedad consiste en <strong>combinar el tratamiento odontológico o dental con
                  el turismo</strong>, haciendo un poco menos dura la ya de por si difícil visita al
                  dentista. La posibilidad de visitar Bucarest y otras zonas de Rumanía como
                  Transilvania, Maramures, o el Delta del Danubio. A esto se unen precios mucho más
                  bajos que los de la sanidad privada española hacen que muchas personas se decidan
                  a viajar a Rumanía.</p>
                <p>El personal odontológico en Rumanía es de gran calidad y las instalaciones
                  también. La cercanía de la lengua, sobre tod para los rumanos hace que la
                  atención se pueda hacer en español. Así, algunos cirujanos hablan español y pueden
                  informar a los clientes sin las barreras de la lengua. El transporte es asequible
                  gracias a las nuevas compañías aéreas de bajo coste y los precios del alojamiento
                  y la comida también son muy asequibles en Bucarest.</p></div>
            </div>
          </div>
        </div>
      </div>
      {/*Picture+Description END*/}
      {/*Widgets START*/}
      <div className={widgets_container}>
        <div className={css.et_pb_top_inside_divider}></div>
        <div className={row_container}>
          <div className={column_container}>
            <div className={inner_column_container}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={widget_image}>*/}
                    {/*</span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h3 className={css.et_pb_module_header}><span>Ahorra hasta un 75%</span></h3>
                  <div className={css.et_pb_blurb_description}><p>Tratamientos dentales y servicios
                    odontológicos de alta gama a precios exponencialmente menores que en España.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={column_container}>
            <div className={inner_column_container}>
                <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={widget_image}></span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h3 className={css.et_pb_module_header}><span>Haz turismo</span></h3>
                  <div className={css.et_pb_blurb_description}><p>Miles de personas están optando por
                    este sistema que les permite viajar, conocer y disfrutar, a la par que consiguen
                    un tratamiento óptimo.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className={column_container}>
            <div className={inner_column_container}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}>
                  <span className={css.et_pb_image_wrap}>
                    {/*<span className={widget_image}></span>*/}
                  </span>
                </div>
                <div className={css.et_pb_blurb_container}>
                  <h3 className={css.et_pb_module_header}><span>Todo incluído</span></h3>
                  <div className={css.et_pb_blurb_description}><p>Vamos a conocerte y hacer que no
                    tengas que ocuparte de nada, nos encargaremos de la clínica, los vuelos, hotel,
                    traslado, etc.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Widgets END*/}
      {/*Services Pictures START*/}
      <div className={services_container}>
        <div className={services_row}>
          <div className={services_column}>
            <div className={services_header}>
              <div className={css.et_pb_text_inner}><h2>Nuestros servicios</h2></div>
            </div>
          </div>
        </div>
        <div className={service_subcontainer}>
          <div className={service_subcolumn}>
            <div className={service_submodule_first}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services6}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Chequeos generales</h4></div>
            </div>
          </div>
          <div className={service_subcolumn}>
            <div className={service_submodule_rest}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services4}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Implantes dentales</h4></div>
            </div>
          </div>
          <div className={service_subcolumn}>
            <div className={service_submodule_rest}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services1}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Restauración</h4></div>
            </div>
          </div>
          <div className={service_subcolumn}>
            <div className={service_submodule_rest}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services3}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Estética dental</h4></div>
            </div>
          </div>
          <div className={service_subcolumn}>
            <div className={service_submodule_rest}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services5}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Blanqueamiento</h4></div>
            </div>
          </div>
          <div className={service_subcolumn}>
            <div className={service_submodule_rest}>
              <div className={css.et_pb_blurb_content}>
                <div className={css.et_pb_main_blurb_image}><span className={css.et_pb_image_wrap}><img
                  src={services2}
                  sizes="(max-width: 56px) 100vw, 56px"
                  className={css.et_pb_animation_top}/></span></div>
                <div className={css.et_pb_blurb_container}>
                </div>
              </div>
            </div>
            <div className={service_subtext}>
              <div className={css.et_pb_text_inner}><h4>Caries</h4></div>
            </div>
          </div>
        </div>

      </div>
      {/*Services Pictures END*/}
      {/*Services Text START*/}
      <div className={services_list_container}>
        <div className={services_list_row}>
          <div className={services_list_column}>
            <div className={services_list_header}>
              <div className={css.et_pb_text_inner}><h2>Nuestros servicios</h2></div>
            </div>


            <div className={services_list_text}>
              <div className={css.et_pb_text_inner}><h3>Clínica dental de referencia mudnial</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.</p></div>
            </div>
            <div className={services_list_text}>
              <div className={css.et_pb_text_inner}><h3>Tickets de avión</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.</p></div>
            </div>
            <div className={services_list_text}>
              <div className={css.et_pb_text_inner}><h3>Hotel y traslados</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.</p></div>
            </div>
          </div>
        </div>
      </div>
      {/*Services Text END*/}

    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default withFormContextAndTheme(SectionHero);
