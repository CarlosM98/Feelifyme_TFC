# Feelifyme — Registro y Visualización Emocional

**Feelifyme** es una aplicación web de bienestar emocional desarrollada como Trabajo de Fin de Ciclo (TFC). Permite a los usuarios registrar cómo se sienten día a día a través de una rueda de emociones interactiva y un calendario visual, fomentando el autoconocimiento y la inteligencia emocional.

---

## Tecnologías utilizadas

### Frontend
| Tecnología | Descripción |
|---|---|
| **React 18** + **Vite** | Framework de UI y bundler de desarrollo |
| **React Router DOM** | Enrutamiento cliente-side con rutas públicas y privadas |
| **ECharts for React** | Gráfico Sunburst interactivo para la rueda de emociones |
| **date-fns** | Manipulación y formateo de fechas para el calendario |
| **Axios** | Cliente HTTP para comunicación con la API Django |
| **CSS Vanilla** | Estilos con Media Queries para diseño responsive |

### Backend
| Tecnología | Descripción |
|---|---|
| **Django 5** | Framework web Python y gestión de la base de datos |
| **Django REST Framework** | Construcción de la API REST |
| **Simple JWT** | Autenticación basada en tokens JWT (access + refresh) |
| **SQLite** | Base de datos local para desarrollo |

---

## Estructura del proyecto

```
feelifyme/
├── backend/                        # Servidor Django
│   └── backFeelifyme/
│       ├── models.py               # Modelos: Emocion, RegistroEmocional...
│       ├── views.py                # Vistas API: árbol emociones, auth...
│       ├── serializers.py          # Serialización de datos
│       └── urls.py                 # Rutas de la API
│
└── frontend/                       # Cliente React
    └── src/
        ├── App.jsx                 # Enrutamiento principal (público / privado)
        ├── layouts/
        │   ├── LayoutApp.jsx       # Raíz: gestiona estado de sesión global
        │   ├── PublicLayout.jsx    # Layout páginas públicas
        │   └── PrivateLayout.jsx   # Layout con guardia de autenticación
        ├── pages/
        │   ├── public/             # Inicio, Login, Registro, Sobre nosotros...
        │   └── private/
        │       ├── MisEmociones.jsx        # Página del Calendario
        │       └── RegistroEmocion.jsx     # Página de registro con la Rueda
        └── componentes/
            ├── generales/          # Botones, Footer, Nav reutilizables
            ├── auth/               # Formularios de Login y Registro
            └── privada/
                └── mis_emociones/
                    ├── calendario/ # Componente Calendario + CasillaDia
                    └── rueda/      # Componente RuedaEmociones (Sunburst)
```

---

## Funcionalidades principales

- ** Autenticación con JWT:** Registro e inicio de sesión con tokens almacenados en `localStorage`. Las rutas privadas están protegidas mediante un guardia de rutas en React.
- ** Calendario interactivo:** Visualización mensual de los días del mes. Detecta el día actual, permite navegar entre meses y accede al registro diario.
- ** Rueda de Emociones (Sunburst):** Gráfico interactivo con 3 niveles jerárquicos de emociones (primarias, secundarias y terciarias). Soporta zoom táctil por rama para dispositivos móviles.
- ** Diseño Responsive:** Media queries adaptadas para tablets (768px) y móviles (480px), con drill-down interactivo en la rueda para pantallas táctiles pequeñas.

---

## Instalación y puesta en marcha

### Requisitos previos
- Python 3.11+
- Node.js 18+
- Git

### Backend (Django)

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate        # Windows
source venv/bin/activate        # macOS/Linux

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

El servidor arranca en `http://localhost:8000`

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

La aplicación arranca en `http://localhost:5173`

---

## Endpoints principales de la API

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/api/register/` | Registro de nuevo usuario |
| `POST` | `/api/token/` | Login → devuelve `access` y `refresh` JWT |
| `POST` | `/api/token/refresh/` | Refresca el token de acceso |
| `GET` | `/api/me/` | Datos del usuario autenticado |
| `GET` | `/api/emociones/arbol/` | Árbol jerárquico de emociones (JSON para ECharts) |

---

## Mejoras futuras previstas

- [ ] Migración de SQLite a **PostgreSQL** en producción
- [ ] Cambio de `localStorage` a **HttpOnly Cookies** para mayor seguridad en los tokens
- [ ] Página de **estadísticas y evolución emocional** con gráficos históricos
- [ ] **Internacionalización (i18n)** con `react-i18next` para expansión a otros idiomas
- [ ] Integración de modelos de **Inteligencia Artificial** para sugerencias personalizadas
- [ ] Despliegue en producción con **Vercel** (frontend) y **Railway/Render** (backend)

---

## Autor

**Carlos M.** — Desarrollo Web · TFC 2025/2026
