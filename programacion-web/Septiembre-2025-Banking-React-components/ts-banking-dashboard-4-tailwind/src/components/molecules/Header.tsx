import { useState } from 'react';

import Button from '@/components/atoms/Button';
import DisplayText from '@/components/atoms/DisplayText';

import BankingLogo from '@/assets/icons/landmark.svg?react';
import HouseIcon from '@/assets/icons/house.svg?react';
import BellIcon from '@/assets/icons/bell.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import HeartIcon from '@/assets/icons/heart.svg?react';
import SettingsIcon from '@/assets/icons/settings.svg?react';
import HeadphonesIcon from '@/assets/icons/headphones.svg?react';

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
      <header className='border-b border-border bg-card'>
        <div className='header__container'>
          <div className='header__brand'>
            <BankingLogo className="header__icon" />
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
                  icon={<HouseIcon />}
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
                  icon={<BellIcon />}
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
                  icon={<SearchIcon />}
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
                  icon={<HeartIcon />}
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
                      <HeartIcon className="icon icon--purple" />
                      <span>Transferencias frecuentes</span>
                    </div>
                    <div className='alert-list__item'>
                      <HeartIcon className="icon icon--purple" />
                      <span>Beneficiarios habituales</span>
                    </div>
                    <div className='alert-list__item'>
                      <HeartIcon className="icon icon--purple" />
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
                  icon={<SettingsIcon />}
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
                  icon={<HeadphonesIcon />}
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
