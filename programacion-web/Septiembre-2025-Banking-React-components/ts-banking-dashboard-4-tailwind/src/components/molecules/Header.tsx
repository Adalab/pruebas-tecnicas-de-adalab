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
      <header className='border-b border-border border bg-card'>
        <div className='container my-0 mx-auto px-6 py-4'>
          <div className='flex items-center gap-3'>
            <BankingLogo className="h-8 w-8 text-primary" />
            <h1 className='text-2xl font-bold text-foreground'>Banking</h1>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-6 py-8'>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
                <Button
                  text='Inicio'
                  icon={<HouseIcon />}
                  disabled
                  id='inicio'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='px-6'>
              {openedSections.includes('inicio') && (
                <DisplayText
                  title='Panel Principal'
                  className='content__title--muted'>
                  <div className='text-sm text-muted-foreground leading-relaxed'>
                    Accede a tu panel principal donde podrás ver un resumen
                    completo de todas tus cuentas bancarias, movimientos
                    recientes y estado financiero general.
                  </div>
                  <div className='text-sm text-muted-foreground leading-relaxed mt-3'>
                    Esta sección te proporciona una vista panorámica de tu
                    situación financiera actual con gráficos interactivos y
                    métricas clave para una mejor gestión de tus finanzas.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
                <Button
                  text='Ver notificaciones'
                  icon={<BellIcon />}
                  className='button--blue'
                  id='notificaciones'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='px-6'>
              {openedSections.includes('notificaciones') && (
                <DisplayText
                  title='Centro de Alertas'
                  className='content__title--blue'>
                  <div className='space-y-2 text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                      <span>Nuevas transferencias recibidas</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span>Actualizaciones de seguridad</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                      <span>Recordatorios de pagos</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                      <span>Ofertas personalizadas</span>
                    </div>
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
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
            <article className='px-6'>
              {openedSections.includes('buscar') && (
                <DisplayText
                  title='Búsqueda Avanzada'
                  className='content__title--green'>
                  <div className='text-sm text-muted-foreground leading-relaxed'>
                    Utiliza nuestro potente motor de búsqueda para encontrar
                    cualquier transacción, documento o información específica en
                    tu historial bancario de forma rápida y eficiente.
                  </div>
                  <div className='text-sm text-muted-foreground leading-relaxed mt-3'>
                    Incluye filtros avanzados por fecha, cantidad, tipo de
                    operación y categoría para resultados más precisos y
                    personalizados según tus necesidades.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
                <Button
                  icon={<HeartIcon />}
                  className='button--purple'
                  id='accesos'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='px-6'>
              {openedSections.includes('accesos') && (
                <DisplayText
                  title='Accesos Rápidos'
                  className='content__title--purple'>
                  <div className='space-y-2 text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <HeartIcon className="h-4 w-4 text-purple-400" />
                      <span>Transferencias frecuentes</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <HeartIcon className="h-4 w-4 text-purple-400" />
                      <span>Beneficiarios habituales</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <HeartIcon className="h-4 w-4 text-purple-400" />
                      <span>Productos favoritos</span>
                    </div>
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
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
            <article className='px-6'>
              {openedSections.includes('ajustes') && (
                <DisplayText
                  title='Configuración del Sistema'
                  className='content__title--orange'>
                  <div className='text-sm text-muted-foreground leading-relaxed'>
                    Personaliza tu experiencia bancaria con opciones avanzadas
                    de configuración. Ajusta preferencias de notificaciones,
                    límites de transacciones y configuraciones de seguridad.
                  </div>
                  <div className='text-sm text-muted-foreground leading-relaxed mt-3'>
                    Incluye gestión de dispositivos autorizados, configuración
                    de autenticación de dos factores y personalización de la
                    interfaz según tus preferencias de uso.
                  </div>
                </DisplayText>
              )}
            </article>
          </li>
          <li className='text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border hover:bg-accent/50 transition-colors'>
            <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
              <div className='flex items-center justify-between'>
                <Button
                  text='Contactar con soporte'
                  icon={<HeadphonesIcon />}
                  className='button--red'
                  id='asistencia'
                  onClick={handleClickSectionButton}
                />
              </div>
            </div>
            <article className='px-6'>
              {openedSections.includes('asistencia') && (
                <DisplayText
                  title='Asistencia 24/7'
                  className='content__title--red'>
                  <div className='space-y-2 text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span>Chat en vivo disponible</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                      <span>Soporte telefónico 24/7</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                      <span>Centro de ayuda online</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
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
