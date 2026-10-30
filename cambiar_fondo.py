from PIL import Image
import numpy as np

# Abrir la imagen
img = Image.open('public/ecosistema-diagram.jpg')
img_array = np.array(img)

# Color de fondo actual del flyer (azul oscuro)
# Color de fondo de la página (dark mode)
old_color = np.array([13, 43, 78])    # RGB del azul actual
new_color = np.array([15, 23, 42])    # RGB del dark mode de la página

# Tolerancia para detectar el fondo
tolerance = 40

# Crear máscara del fondo
mask = np.all(np.abs(img_array[:,:,:3].astype(int) - old_color) < tolerance, axis=2)

# Reemplazar el fondo
img_array[mask] = new_color

# Guardar como PNG
result = Image.fromarray(img_array)
result.save('public/ecosistema-diagram-darkbg.png', 'PNG')
print('✅ Listo! Archivo guardado como: public/ecosistema-diagram-darkbg.png')