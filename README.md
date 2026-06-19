# 🧩 React3PWA — NEXUS

PWA desarrollada como proyecto principal para la materia **Programación Web Avanzada** en la **Universidad Nacional del Comahue**. La aplicación permite explorar, buscar y gestionar un catálogo de hardware (NEXUS) conectando el frontend en React con una API REST en el backend vinculada a una base de datos PostgreSQL.

## 👥 Integrantes

| Nombre | Rol |
| :--- | :--- |
| Matías E. Bacsay | Project Manager |
| Mariano Infante | Developer |

---

## 🔗 Links

* 🖥️ [Repositorio del Frontend](https://github.com/MGIC12/React2PWA)
* 📋 [Tablero Kanban (GitHub Projects)](https://github.com/users/tebacs/projects/3)
* 🚀 [Deploy del Backend](https://react3-pwa.vercel.app/api/items)
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

**1 — Clonar el repositorio**
```bash
git clone https://github.com/Alejo4758/PWA_Backend.git
cd PWA_Backend
```

**2 — Instalar dependencias**
```bash
npm install
```

**3 — Configurar las variables de entorno**

Copiar el archivo de ejemplo y completar los valores:
```bash
cp .env.example .env
```

**4 — Ejecutar las migraciones**
```bash
npx prisma migrate dev
```

**5 — Ejecutar el seed**
```bash
npx prisma db seed
```

**6 — Levantar el servidor**
```bash
npm run dev
```

El servidor quedará corriendo en `http://localhost:3000`.


## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
DATABASE_URL=        # Connection string de PostgreSQL (Neon u otro proveedor)
PORT=3000            # Puerto en el que corre el servidor
FRONTEND_URL=        # URL del frontend (para configurar CORS)
```

> ⚠️ No subir el archivo `.env` al repositorio. Las credenciales se comparten por mensajería privada.


## 🗄️ Migraciones

Para crear y aplicar las migraciones de Prisma:

```bash
npx prisma migrate dev
```

Para regenerar el cliente de Prisma:

```bash
npx prisma generate
```


## 🌱 Seed

Para cargar los datos iniciales en la base de datos:

```bash
npx prisma db seed
```

Esto crea 32 registros de relojes de distintas marcas (Rolex, Omega, Longines, Cartier, Seiko, entre otras) con todos sus campos completos.

