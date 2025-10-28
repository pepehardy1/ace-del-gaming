# 🚀 Guía para Subir tu Página Web a GitHub Pages

## 📋 PASO A PASO COMPLETO

### **1. Crear cuenta en GitHub (si no tienes)**
- Ve a https://github.com
- Haz clic en "Sign up"
- Crea tu cuenta gratuita

### **2. Crear nuevo repositorio**
- Una vez logueado, haz clic en "New repository" (botón verde)
- Nombre del repositorio: `ace-del-gaming` (o el que prefieras)
- ✅ Marca "Public" (gratis)
- ✅ Marca "Add a README file"
- Haz clic en "Create repository"

### **3. Subir tus archivos**
Tienes dos opciones:

#### **OPCIÓN A: Subida directa por web (MÁS FÁCIL)**
1. En tu repositorio recién creado, haz clic en "uploading an existing file"
2. Arrastra TODOS estos archivos a la ventana:
   - index.html
   - styles.css
   - script.js
   - fondo75.jpg
   - messi.jpg
   - Starfield.jpg
   - Cyberpunk_2077_box_art.jpg
   - gohan.jpeg
   - gohanchatbot.jpeg
   - Portgas-D-Ace.jpg

3. En "Commit changes" escribe: "Subir página web Ace Del Gaming"
4. Haz clic en "Commit changes"

#### **OPCIÓN B: Con Git (más técnico)**
```bash
# En tu carpeta del proyecto:
git init
git add .
git commit -m "Primera versión de Ace Del Gaming"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ace-del-gaming.git
git push -u origin main
```

### **4. Activar GitHub Pages**
1. En tu repositorio, ve a "Settings" (pestaña superior)
2. Baja hasta encontrar "Pages" en el menú lateral izquierdo
3. En "Source" selecciona "Deploy from a branch"
4. En "Branch" selecciona "main"
5. En "Folder" deja "/ (root)"
6. Haz clic en "Save"

### **5. ¡Tu dominio está listo!**
- Tu página estará en: `https://TU-USUARIO.github.io/ace-del-gaming`
- Puede tardar 5-10 minutos en estar disponible

## 🌟 VENTAJAS DE GITHUB PAGES
- ✅ **Completamente GRATIS**
- ✅ **Dominio incluido** (.github.io)
- ✅ **HTTPS automático** (seguro)
- ✅ **Actualizaciones automáticas** cuando cambies código
- ✅ **Sin límites de tráfico** (para uso normal)
- ✅ **Backup automático** de tu código

## 🔧 ACTUALIZACIONES FUTURAS
Para actualizar tu página:
1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo que quieres editar
3. Haz clic en el lápiz (Edit)
4. Haz tus cambios
5. Haz "Commit changes"
6. ¡Los cambios aparecen automáticamente en tu página!

## 🎯 CONSEJOS ADICIONALES
- Usa nombres descriptivos en tus commits
- Haz backup de tus archivos localmente
- Puedes conectar un dominio personalizado después
- GitHub Pages es perfecto para páginas estáticas como la tuya

## 🚨 ARCHIVOS IMPORTANTES QUE DEBES SUBIR:
✅ index.html (página principal)
✅ styles.css (estilos)
✅ script.js (funcionalidad)
✅ TODAS las imágenes (.jpg, .jpeg)

¡Tu página web gaming estará online en minutos!