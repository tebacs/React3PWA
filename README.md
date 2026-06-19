# 🧩 React3PWA — NEXUS

PWA desarrollada como proyecto principal para la materia **Programación Web Avanzada** en la **Universidad Nacional del Comahue**. La aplicación permite explorar, buscar y gestionar un catálogo de hardware (NEXUS) conectando el frontend en React con una API REST en el backend vinculada a una base de datos PostgreSQL.

## 👥 Integrantes

| Nombre | Rol |
| :--- | :--- |
| Matías E. Bacsay | Developer |
| Mariano Infante | Developer |

---

## 🔗 Links

* 🖥️ [Repositorio del Frontend](https://github.com/MGIC12/React2PWA)
* 📋 [Tablero Kanban (GitHub Projects)](REEMPLAZAR_CON_LINK_DEL_TABLERO)
* 🚀 [Deploy del Backend](REEMPLAZAR_CON_LINK_DEL_DEPLOY_BACKEND)
* 🌐 [Deploy del Frontend](https://pwa-react2-bacinstu.netlify.app)

---

## 📖 Descripción de la aplicación

Aca va la descripción detallada de tu app... NEXUS es una plataforma de comparación y catálogo de hardware que permite a los usuarios interactuar con componentes, ver especificaciones técnicas y gestionar el inventario de manera eficiente.

---

## ⏰ Entidad principal — Item

La entidad principal del proyecto es `Item`, que representa una pieza del catálogo.

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | Int | Identificador único autoincremental |
| `name` | String | Nombre del ítem / componente |
| `category` | String | Categoría del hardware |
| `image` | String | URL de la imagen del ítem |
| `shortDescription` | String | Descripción corta del ítem |
| `fullDescription` | String | Descripción completa y detallada |
| `technicalSpechs` | String | Especificaciones técnicas de hardware |

---

## ⚙️ Instalación y ejecución local

### Requisitos previos

* Node.js v18 o superior
* npm
* PostgreSQL (o acceso a una base de datos en Neon)

### Pasos

#### 1 — Clonar el repositorio
```bash
git clone [https://github.com/MGIC12/React2PWA.git](https://github.com/MGIC12/React2PWA.git)
cd React2PWA
