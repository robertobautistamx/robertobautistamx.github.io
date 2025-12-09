# Multiservicios Integrales - Sitio Web Oficial

> Soluciones profesionales en Refrigeración, Sistemas Informáticos y Electricidad

## 📋 Descripción

Sitio web moderno y responsivo para **Multiservicios Integrales**, una empresa de servicios profesionales ubicada en Tampico.

El sitio presenta:
- **Sección de Servicios** con detalles interactivos de tres áreas principales
- **Galería de proyectos** con trabajos realizados
- **Formulario de contacto** integrado con validación
- **Navegación con dropdown** dinámico para categorías de servicios
- **Página de Política de Privacidad** independiente
- **Iconos de redes sociales** en navbar y footer
- **Diseño completamente responsivo** para móvil, tablet y escritorio

---

## 🎨 Características Principales

### Servicios Destacados
1. **Refrigeración** - Instalación, mantenimiento y reparación de aire acondicionado
2. **Sistemas Informáticos** - Desarrollo web, soporte técnico y reparación de equipos
3. **Electricidad** - Instalaciones y mantenimiento eléctrico profesional

### Interactividad
- ✨ **Dropdown dinámico** en navbar con triángulo rotativo (funciona en desktop con hover y móvil con clic/tap)
- 🎯 Botones de acción para "Ver detalles" y "Solicitar cotización" con diseño minimalista
- 📱 Menú colapsable en dispositivos móviles
- 🔗 **Iconos de redes sociales** en navbar (escritorio) y dentro del menú (móvil)
- 🔐 Página de **Política de Privacidad** completa con información clara
- 🔗 Enlaces smooth scroll a todas las secciones

### Diseño
- 📐 Basado en Bootstrap 4
- 🎭 Paleta de colores profesional (azul gradiente y blanco)
- 🖼️ Efectos de hover suave en imágenes (zoom y saturación)
- ⚡ Animaciones optimizadas sin sacrificar rendimiento
- 🎨 Botones con sombras sutiles y efectos de elevación

---

## 🛠️ Tecnologías Utilizadas

```
Frontend:
- HTML5
- CSS3 (con Sass y gradientes)
- JavaScript (jQuery)
- Bootstrap 4

Librerías adicionales:
- Font Awesome 5 (iconos)
- Owl Carousel (galerías)
- Lightbox (visor de imágenes)
- Isotope (filtrado de galerías)
- Easing (animaciones suave)
```

---

## 📁 Estructura del Proyecto

```
c:\robertobautistamx.github.io/
├── index.html                 # Página principal
├── privacidad.html            # Página de Política de Privacidad
├── css/
│   ├── style.css             # Estilos compilados (Bootstrap)
│   ├── style.min.css         # Versión minificada
│   └── partials.css          # Estilos personalizados
├── js/
│   └── main.js               # Lógica de interactividad
├── partials/
│   ├── hero.html             # Sección hero/banner
│   ├── about.html            # Acerca de nosotros
│   ├── services.html         # Servicios detallados
│   ├── gallery.html          # Galería de proyectos
│   ├── social.html           # Sección de redes sociales
│   ├── contact.html          # Formulario de contacto
│   └── footer.html           # Pie de página
├── lib/                       # Librerías externas
├── img/                       # Imágenes y activos
└── mail/                      # Procesamiento de formularios
```

---

## 🚀 Cómo Usar

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/robertobautistamx/robertobautistamx.github.io.git
```

2. Navega al directorio:
```bash
cd robertobautistamx.github.io
```

3. Abre el archivo `index.html` en tu navegador o usa un servidor local

### Navegación en la Web

- **Inicio** - Sección principal con banner y llamada a la acción
- **Acerca de** - Información sobre la empresa y valores
- **Servicios** - Detalle interactivo de los tres servicios principales con dropdown en navbar
- **Proyectos** - Galería de trabajos realizados con filtros
- **Contacto** - Formulario para solicitar información o cotizaciones
- **Privacidad** - Enlace en footer a Política de Privacidad

---

## 📱 Responsividad

El sitio se adapta automáticamente a todos los tamaños de pantalla:
- 📱 Móvil (hasta 576px) - Menú colapsable, dropdown expandible
- 📲 Tablet (576px - 991px) - Interfaz optimizada
- 🖥️ Escritorio (992px en adelante) - Experiencia completa con hover effects

---

## 🔧 Características Técnicas Detalladas

### Navbar
- Barra de navegación fija con transparencia inicial
- Aparece con fade-in al scrollear 200px hacia abajo
- Logo responsivo con texto adaptado (completo en desktop, corto en móvil)
- Dropdown dinámico para "Servicios" con tres categorías:
  - Refrigeración
  - Sistemas Informáticos
  - Electricidad
- Triángulo rotativo que indica estado del dropdown (▼ cerrado, ▲ abierto)
- Comportamiento diferente en desktop (hover) y móvil (clic)
- Iconos de redes sociales (solo en desktop)
- Botón "Contactar" destacado con gradiente azul

### Servicios
- Tres secciones detalladas con layout alternado (imagen izquierda/derecha)
- Imágenes con efecto zoom suave al hover
- Descripción completa de cada servicio
- Dos botones de acción: "Ver detalles" (azul) y "Solicitar cotización" (outline)
- Secciones bien espaciadas con bordes delicados

### Galería
- Grid responsivo de proyectos realizados
- Filtros por categoría
- Zoom de imagen + ícono "+" en hover
- Modal lightbox para visualización completa
- Carrusel de proyectos con navegación

### Contacto
- Formulario integrado con validación básica
- Campos: Nombre, Email, Asunto, Mensaje
- Botón de envío con gradiente
- Procesamiento mediante Formspree
- Sección de redes sociales integrada arriba del formulario

### Footer
- Logo y descripción de servicios
- Horario de atención
- Iconos de redes sociales
- Información de contacto completa (dirección, email, teléfonos)
- Enlaces rápidos a todas las secciones
- Copyright y créditos de diseño

### Política de Privacidad
- Página HTML independiente (`privacidad.html`)
- Secciones claras sobre recopilación, uso y protección de datos
- Información sobre cookies
- Derechos del usuario
- Contacto directo para consultas
- Diseño consistente con el sitio principal

---

## 📄 Licencia

Este código es **privado**. No se permite su uso, copia, modificación ni distribución sin autorización expresa.