# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar tu landing page en GitHub Pages paso a paso.

## 📋 Requisitos Previos

- Cuenta de GitHub
- Archivos del proyecto descargados
- Navegador web

## 🔧 Método 1: Subida Directa (Recomendado para principiantes)

### Paso 1: Crear Repositorio
1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Click en el botón verde "New" o "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Nombra tu repositorio (ej: `yordan-herrera-portfolio`)
5. Asegúrate de que sea **público**
6. **NO** marques "Add a README file"
7. Click "Create repository"

### Paso 2: Subir Archivos
1. En la página del repositorio recién creado, click "uploading an existing file"
2. Arrastra todos los archivos del proyecto a la zona de subida:
   - `index.html`
   - Carpeta `css/` con `styles.css`
   - Carpeta `js/` con `script.js`
   - Carpeta `assets/` con todas las imágenes e iconos
   - `README.md`
   - `DEPLOYMENT.md`

3. Escribe un mensaje de commit: "Initial commit: Landing page"
4. Click "Commit changes"

### Paso 3: Activar GitHub Pages
1. Ve a la pestaña "Settings" de tu repositorio
2. Scroll down hasta encontrar "Pages" en el menú lateral
3. En "Source", selecciona "Deploy from a branch"
4. En "Branch", selecciona "main"
5. En "Folder", deja seleccionado "/ (root)"
6. Click "Save"

### Paso 4: Acceder a tu Sitio
- GitHub te mostrará la URL de tu sitio
- Será algo como: `https://tu-usuario.github.io/yordan-herrera-portfolio/`
- El despliegue puede tomar 5-10 minutos

## 💻 Método 2: Usando Git (Para usuarios avanzados)

### Paso 1: Instalar Git
- Windows: Descarga desde [git-scm.com](https://git-scm.com/)
- Mac: `brew install git` o descarga desde el sitio oficial
- Linux: `sudo apt install git` (Ubuntu/Debian)

### Paso 2: Configurar Git (primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 3: Crear Repositorio en GitHub
1. Sigue los pasos 1-7 del Método 1
2. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/yordan-herrera-portfolio.git`)

### Paso 4: Comandos Git
```bash
# Navegar a la carpeta del proyecto
cd ruta/a/yordan-herrera-landing

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Landing page Yordan Herrera"

# Conectar con repositorio remoto
git remote add origin https://github.com/tu-usuario/yordan-herrera-portfolio.git

# Subir archivos
git push -u origin main
```

### Paso 5: Activar GitHub Pages
Sigue los pasos 3-4 del Método 1.

## 🔄 Actualizaciones Futuras

### Método Directo
1. Ve a tu repositorio en GitHub
2. Navega al archivo que quieres editar
3. Click en el ícono del lápiz (Edit)
4. Haz los cambios necesarios
5. Scroll down, escribe un mensaje de commit
6. Click "Commit changes"

### Método Git
```bash
# Hacer cambios en los archivos localmente
# Luego:

git add .
git commit -m "Descripción de los cambios"
git push
```

## 🎨 Personalización Rápida

### Cambiar Información Personal
Edita `index.html` y busca:
- `<h1 class="home__title">Yordan Herrera</h1>`
- Secciones de biografía y contacto
- Enlaces sociales

### Cambiar Colores
Edita `css/styles.css` y modifica:
```css
:root {
  --hue: 207; /* Cambiar número para diferentes colores */
}
```

### Agregar Foto de Perfil
1. Sube tu foto a `assets/images/profile.jpg`
2. En `index.html`, reemplaza:
```html
<div class="home__profile-placeholder">
    <i class="fas fa-user"></i>
</div>
```
Por:
```html
<img src="assets/images/profile.jpg" alt="Yordan Herrera" class="home__profile-img">
```

## 🔍 Verificación del Despliegue

### Checklist Post-Despliegue
- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se muestran
- [ ] Los enlaces funcionan
- [ ] El modo oscuro funciona
- [ ] La navegación móvil funciona
- [ ] El formulario de contacto responde

### Herramientas de Verificación
1. **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/)
2. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com/)
3. **Responsive Design Checker**: [responsivedesignchecker.com](https://responsivedesignchecker.com/)

## 🐛 Solución de Problemas Comunes

### El sitio no carga
- Verifica que `index.html` esté en la raíz del repositorio
- Asegúrate de que el repositorio sea público
- Espera 5-10 minutos después de activar Pages

### Las imágenes no se muestran
- Verifica que las rutas en el HTML sean correctas
- Asegúrate de que las imágenes estén en la carpeta `assets/`
- Revisa que los nombres de archivo coincidan exactamente

### Los estilos no se aplican
- Verifica que `css/styles.css` esté en la ubicación correcta
- Revisa la ruta en el `<link>` del HTML
- Limpia la caché del navegador (Ctrl+F5)

### JavaScript no funciona
- Abre las herramientas de desarrollador (F12)
- Revisa la consola por errores
- Verifica que `js/script.js` esté en la ubicación correcta

## 📞 Soporte Adicional

Si encuentras problemas:

1. **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
2. **Comunidad GitHub**: [github.community](https://github.community/)
3. **Stack Overflow**: Busca "github pages" + tu problema específico

## 🎯 Próximos Pasos Recomendados

1. **Dominio Personalizado**: Configura un dominio propio
2. **Analytics**: Agrega Google Analytics
3. **SEO**: Implementa Schema markup
4. **Performance**: Optimiza imágenes y minifica código
5. **Accesibilidad**: Realiza auditoría de accesibilidad

---

¡Felicidades! Tu landing page ya está en línea 🎉

