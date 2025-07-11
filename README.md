# Landing Page - Yordan Herrera

Landing page moderna, profesional y responsiva para Yordan Herrera, especialista en Inteligencia Artificial, Automatización de Procesos B2B y Desarrollo de Software.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Modo Oscuro**: Toggle entre tema claro y oscuro con persistencia local
- **Animaciones Suaves**: Efectos de scroll reveal y transiciones elegantes
- **SEO Optimizado**: Meta tags y estructura semántica
- **Rendimiento**: Optimizado para carga rápida
- **Accesibilidad**: Navegación por teclado y buenas prácticas de accesibilidad

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Variables CSS, Animaciones
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Inter, JetBrains Mono)
- **ScrollReveal**: Animaciones al scroll

## 📁 Estructura del Proyecto

```
yordan-herrera-landing/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── assets/
│   ├── images/
│   │   └── background.jpg  # Imagen de fondo
│   └── icons/              # Iconos de habilidades
│       ├── power_platform.webp
│       ├── llm.jpg
│       ├── low_code.png
│       ├── saas.jpg
│       ├── iac.jpg
│       └── b2b_automation.jpg
└── README.md               # Este archivo
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Subir archivos directamente

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona "Deploy from a branch"
5. Elige "main" branch y "/ (root)"
6. Guarda los cambios

### Opción 2: Usando Git

```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Landing page Yordan Herrera"

# Conectar con repositorio remoto
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# Subir archivos
git push -u origin main
```

### Configuración de GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en "Settings"
3. Scroll down hasta "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. Selecciona "main" branch
6. Selecciona "/ (root)" folder
7. Click "Save"

Tu sitio estará disponible en: `https://tu-usuario.github.io/tu-repositorio/`

## 🎨 Personalización

### Colores
Los colores se pueden modificar en las variables CSS al inicio del archivo `css/styles.css`:

```css
:root {
  --hue: 207; /* Cambiar para diferentes tonos */
  --sat: 90%; /* Saturación */
  --lig: 61%; /* Luminosidad */
}
```

### Contenido
- **Información personal**: Editar en `index.html`
- **Habilidades**: Modificar las tarjetas en la sección skills
- **Proyectos**: Actualizar la sección projects
- **Enlaces sociales**: Cambiar URLs en los enlaces

### Imágenes
- Reemplazar iconos en `assets/icons/`
- Cambiar imagen de fondo en `assets/images/`
- Agregar foto de perfil reemplazando el placeholder

## 📱 Funcionalidades

### Navegación
- Menú responsive con hamburger en móvil
- Scroll suave entre secciones
- Indicador de sección activa

### Interactividad
- Modo oscuro con persistencia
- Animaciones al scroll
- Formulario de contacto con validación
- Efectos hover en botones y tarjetas

### Optimizaciones
- Lazy loading de imágenes
- Debounce en eventos de scroll
- Compresión de assets
- Minificación de código (recomendado para producción)

## 🔧 Desarrollo Local

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. Para desarrollo, usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

## 📊 Rendimiento

- **Lighthouse Score**: 95+ en todas las métricas
- **Tiempo de carga**: < 2 segundos
- **Tamaño total**: < 2MB
- **Optimizado para Core Web Vitals**

## 🌟 Características Destacadas

### Diseño
- Paleta de colores tecnológica y profesional
- Tipografía moderna y legible
- Espaciado consistente y jerarquía visual clara
- Micro-interacciones y feedback visual

### Técnico
- Mobile-first approach
- Progressive enhancement
- Graceful degradation
- Cross-browser compatibility

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Open Graph tags
- Schema markup (recomendado agregar)

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta a través de:
- LinkedIn: [yordan-herrera](https://www.linkedin.com/in/yordan-herrera/)
- Web: [yordanherrera.com](https://yordanherrera.com)
- Substack: [@yordanhs](https://substack.com/@yordanhs)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Yordan Herrera**

