import { useState } from 'react';

import Button from '@/components/atoms/Button';
import DisplayText from '@/components/atoms/DisplayText';

export default function Header() {
  const [openedSections, setOpenedSections] = useState<string[]>([]);

  const handleClickSectionButton = (sectionId: string) => {
    if (openedSections.includes(sectionId)) {
      setOpenedSections(openedSections.filter((it) => it !== sectionId));
    } else {
      setOpenedSections([...openedSections, sectionId]);
    }
  };

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__brand'>
            <svg className='header__icon'>
              <use
                href='/assets/icons/bank.svg'
                width='100%'
                height='100%'></use>
            </svg>
            <h1 className='header__title'>Banking</h1>
          </div>
        </div>
      </header>
      <main className='main'>
        <ul className='main__grid'>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  text='Inicio'
                  icon='assets/icons/house.svg'
                  disabled
                  id='inicio'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('inicio') && (
                <DisplayText
                  title='Panel Principal'
                  className='content__title--muted'>
                  <div className='content__description'>
                    Accede a tu panel principal donde podrás ver un resumen
                    completo de todas tus cuentas bancarias, movimientos
                    recientes y estado financiero general.
                  </div>
                  <div className='content__description content__description--margin-top'>
                    Esta sección te proporciona una vista panorámica de tu
                    situación financiera actual con gráficos interactivos y
                    métricas clave para una mejor gestión de tus finanzas.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  text='Ver notificaciones'
                  icon='assets/icons/bell.svg'
                  className='button--blue'
                  id='notificaciones'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('notificaciones') && (
                <DisplayText
                  title='Centro de Alertas'
                  className='content__title--blue'>
                  <div className='alert-list'>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--blue'></div>
                      <span>Nuevas transferencias recibidas</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--green'></div>
                      <span>Actualizaciones de seguridad</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--orange'></div>
                      <span>Recordatorios de pagos</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--purple'></div>
                      <span>Ofertas personalizadas</span>
                    </div>
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  text='Buscar contenido'
                  icon='assets/icons/search.svg'
                  className='button--green'
                  textAlign='left'
                  id='buscar'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('buscar') && (
                <DisplayText
                  title='Búsqueda Avanzada'
                  className='content__title--green'>
                  <div className='content__description'>
                    Utiliza nuestro potente motor de búsqueda para encontrar
                    cualquier transacción, documento o información específica en
                    tu historial bancario de forma rápida y eficiente.
                  </div>
                  <div className='content__description content__description--margin-top'>
                    Incluye filtros avanzados por fecha, cantidad, tipo de
                    operación y categoría para resultados más precisos y
                    personalizados según tus necesidades.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  icon='assets/icons/heart.svg'
                  className='button--purple'
                  id='accesos'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('accesos') && (
                <DisplayText
                  title='Accesos Rápidos'
                  className='content__title--purple'>
                  <div className='alert-list'>
                    <div className='alert-list__item'>
                      <svg className='icon icon--purple'>
                        <use
                          href='assets/icons/heart.svg'
                          width='100%'
                          height='100%'></use>
                      </svg>
                      <span>Transferencias frecuentes</span>
                    </div>
                    <div className='alert-list__item'>
                      <svg className='icon icon--purple'>
                        <use
                          href='assets/icons/heart.svg'
                          width='100%'
                          height='100%'></use>
                      </svg>
                      <span>Beneficiarios habituales</span>
                    </div>
                    <div className='alert-list__item'>
                      <svg className='icon icon--purple'>
                        <use
                          href='assets/icons/heart.svg'
                          width='100%'
                          height='100%'></use>
                      </svg>
                      <span>Productos favoritos</span>
                    </div>
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  text='Ajustes avanzados'
                  icon='assets/icons/settings.svg'
                  className='button--orange'
                  textAlign='left'
                  id='ajustes'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('ajustes') && (
                <DisplayText
                  title='Configuración del Sistema'
                  className='content__title--orange'>
                  <div className='content__description'>
                    Personaliza tu experiencia bancaria con opciones avanzadas
                    de configuración. Ajusta preferencias de notificaciones,
                    límites de transacciones y configuraciones de seguridad.
                  </div>
                  <div className='content__description content__description--margin-top'>
                    Incluye gestión de dispositivos autorizados, configuración
                    de autenticación de dos factores y personalización de la
                    interfaz según tus preferencias de uso.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='card'>
            <div className='card__header'>
              <div className='card__header-content'>
                <Button
                  text='Contactar con soporte'
                  icon='assets/icons/headphones.svg'
                  className='button--red'
                  id='asistencia'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='card__content'>
              {openedSections.includes('asistencia') && (
                <DisplayText
                  title='Asistencia 24/7'
                  className='content__title--red'>
                  <div className='alert-list'>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--green'></div>
                      <span>Chat en vivo disponible</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--blue'></div>
                      <span>Soporte telefónico 24/7</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--orange'></div>
                      <span>Centro de ayuda online</span>
                    </div>
                    <div className='alert-list__item'>
                      <div className='alert-list__indicator alert-list__indicator--purple'></div>
                      <span>Tickets de soporte técnico</span>
                    </div>
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
        </ul>
      </main>
    </>
  );
}
