# **Prueba técnica de una empresa de banking para puesto de desarrolladora web**

# Introducción

¡Enhorabuena por llegar hasta aquí\! 🌟  
Tu presencia en este proceso demuestra que posees las habilidades y la determinación que valoramos en nuestro equipo.

Nuestro equipo está emocionado por encontrar a una experta frontend que nos ayude a alcanzar nuevas alturas. Creemos que podrías ser esa persona que estamos buscando para construir juntas el futuro de nuestros productos..

Filosofía de la prueba:

- Queremos conocer tu forma única de abordar los desafíos.  
- Respetamos tu tiempo y tu vida personal (máximo 4 horas)  
- No existe una única respuesta correcta: valoramos tu creatividad y criterio.

# Objetivo

El objetivo de la prueba es evaluar tu capacidad para desarrollar componentes reutilizables mediante **atomic design**. Queremos ver tu capacidad para crear componentes que sean:

- **Reutilizables**: Desarrollados siguiendo los principios de atomic design.  
- **Legibles**: Código limpio y bien estructurado.  
- **Funcionales**: Que cumplan con los estándares de calidad que esperamos.  
- **Inclusivos**: Fáciles de usar y entender para todas las personas.

# Requisitos técnicos

Deberás crear una estructura de componentes siguiendo atomic design:

**Átomos (Atoms)**

- Componente **Button** altamente configurable.  
  - Configuración flexible: Debe soportar icono solo, texto solo, o icono \+ texto  
  - Posicionamiento de iconos: Icono a la izquierda o derecha del texto  
  - Definición de estado: Recibir props para definir si está deshabilitado o no.  
  - Uso de iconos: puedes utilizar los iconos de Figma, Font Awesome o una palabra en mayúsculas como placeholder.  
- Componente **DisplayText** para mostrar contenido dinámico.  
  - Contenido dinámico: Recibe y muestra texto mediante props  
  - Flexibilidad: Preparado para diferentes tipos de contenido

**Moléculas/Organismos**

- Componente **Header** que integre los átomos de forma cohesiva.  
  - Integración coherente: Combina Button y DisplayText de forma armoniosa 6 veces para implementar las siguientes acciones:  
    - Botón de inicio: Permanece deshabilitado (sin acción) para futuras funcionalidades  
    - Botón de notificaciones: "Ver notificaciones"  
    - Botón de búsqueda: "Buscar contenido"  
    - Botón de favoritos: "Mis favoritos"  
    - Botón de configuración: "Ajustes avanzados"  
    - Botón de soporte: "Contactar con soporte"  
  - Comportamiento interactivo: Cada botón debe mostrar a la derecha su texto correspondiente al hacer clic.

**Libertad creativa**

- Iconografía: Usa los iconos que prefieras (Figma, Font Awesome, o placeholders textuales)  
- Tecnologías: React como base, libertad para elegir librerías adicionales  
- Estilo: Implementa un diseño funcional y coherente que refleje tu criterio

# Resultado esperado

## **Entregable principal \***

Un repositorio de GitHub que contenga:

- **Código fuente** completo y bien organizado  
- **README** detallado con instrucciones de instalación y ejecución

## **Aspectos que valoramos especialmente**

- **Estructura clara**: Organización siguiendo atomic design  
- **Reutilización**: Componentes verdaderamente modulares  
- **Legibilidad**: Código limpio que invite a la colaboración  
- **Props bien tipadas**: Interfaces claras y documentadas  
- **Gestión de eventos**: Manejo correcto de interacciones de usuario  
- **Atención a la experiencia de usuario**: Interfaz pensada para las personas que la usarán  
- **Gestión del tiempo**: Priorización inteligente dentro del límite de 4 horas  
- **Documentación**: Capacidad de comunicar tu proceso y decisiones

\* NOTAS DE ADALAB:

- **No tenéis que enviar a Adalab ningún resultado** ni ningún repositorio. Esta sección de “Resultado esperado” es muy común en los enunciados de pruebas técnicas.  
- No se trata de perfección, sino de demostrar tu forma de pensar, tu capacidad de resolver problemas y tu potencial para crecer junto a nosotras. ¡Estamos emocionadas de ver lo que puedes crear\!  
- **¡Confía en ti misma y demuestra de qué eres capaz\!** 💪✨