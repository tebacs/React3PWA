import prisma from "../lib/prisma";

async function main() {
  const itemsData = [
    {
      name: "NVIDIA GeForce RTX 4090",
      category: "GPU",
      image:
        "https://www.lanacion.com.ar/resizer/v2/una-geforce-rtx-4090-de-E3DDUG6RSRAUHK443NGLQPJJLQ.jpg?auth=bf59ebec8a5b4552ee67c650b182df44dcafcf391c2b416178c87b8dbfaf0e72&width=1200&height=800&quality=70&smart=true",
      shortDescription:
        "El rendimiento gráfico definitivo impulsado por inteligencia artificial.",
      fullDescription:
        "La tarjeta gráfica más potente jamás creada para gamers y creadores. La NVIDIA GeForce RTX 4090 ofrece un salto cuántico en rendimiento, eficiencia y gráficos impulsados por IA gracias a la arquitectura Ada Lovelace.",
      technicalSpecs:
        "24 GB GDDR6X, 16384 CUDA Cores, DLSS 3, Ray Tracing Gen 3",
    },
    {
      name: "AMD Radeon RX 7900 XTX",
      category: "GPU",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrMTsjy7KXb8kdSMUA1ZjZjO7MDlMopSPHQ&s",
      shortDescription:
        "La respuesta de AMD para el gaming 4K sin compromisos.",
      fullDescription:
        "Una monstruosidad de VRAM y rendimiento rasterizado bruto, ideal para los que no dependen del Ray Tracing pesado y buscan fuerza bruta.",
      technicalSpecs: "24 GB GDDR6, Arquitectura RDNA 3, 355W, DisplayPort 2.1",
    },
    {
      name: "NVIDIA GeForce RTX 4080 Super",
      category: "GPU",
      image:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-rtx-4080-super-og-1200x630.jpg",
      shortDescription:
        "Rendimiento 4K premium con eficiencia energética superior.",
      fullDescription:
        "Sustituye a la 4080 original ofreciendo más núcleos y memoria más rápida, dominando el gaming extremo con tecnologías exclusivas de la serie 40.",
      technicalSpecs: "16 GB GDDR6X, 10240 CUDA Cores, 320W, DLSS 3.5",
    },
    {
      name: "AMD Radeon RX 7800 XT",
      category: "GPU",
      image:
        "https://dlcdnwebimgs.asus.com/files/media/b8a6b725-cb41-434e-ab93-7de2ea277508/v1/img/amd/amd-1.jpg",
      shortDescription:
        "Excelente relación calidad-rendimiento en la gama media-alta.",
      fullDescription:
        "Domina el terreno de los monitores 1440p superando a su competencia directa en rendimiento puro sin disparar el consumo eléctrico.",
      technicalSpecs: "16 GB GDDR6, RDNA 3, 263W TDP, FSR 3",
    },
    {
      name: "NVIDIA GeForce RTX 4070 Ti Super",
      category: "GPU",
      image:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4070-4070ti/geforce-rtx-4070-super-og-1200x630.jpg",
      shortDescription:
        "El punto dulce perfecto para monitores 1440p de altos Hz.",
      fullDescription:
        "Con el aumento a 16GB de VRAM, esta tarjeta está preparada para el futuro de las texturas de ultra resolución y cargas pesadas de trabajo.",
      technicalSpecs: "16 GB GDDR6X, 8448 CUDA Cores, 285W, AV1 Encode",
    },
    {
      name: "Intel Arc A770",
      category: "GPU",
      image:
        "https://hardzone.es/app/uploads-hardzone.es/2023/06/tarjeta-grafica-intel-arc-a770-limited-editon-16-gb.jpg",
      shortDescription:
        "El tercer contendiente en el mercado gráfico con gran memoria.",
      fullDescription:
        "16GB de VRAM y excelentes capacidades de codificación AV1, una joya oculta para creadores de contenido multimedia.",
      technicalSpecs: "16 GB GDDR6, Xe HPG, AV1 Encode, 225W",
    },
    {
      name: "NVIDIA GeForce RTX 4060",
      category: "GPU",
      image: "https://i.blogs.es/9d8ed5/img_1115/450_1000.webp",
      shortDescription: "Acceso económico a las tecnologías RTX y DLSS 3.",
      fullDescription:
        "Consumo eléctrico minúsculo y un rendimiento brillante para 1080p, ideal para chasis compactos SFF y fuentes de poder limitadas.",
      technicalSpecs: "8 GB GDDR6, 3072 CUDA Cores, 115W, PCIe 4.0 x8",
    },
    {
      name: "AMD Ryzen 9 7950X",
      category: "CPU",
      image:
        "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-9-7900x-og.jpg",
      shortDescription: "Procesador de 16 núcleos para máximo rendimiento.",
      fullDescription:
        "El procesador ideal para entusiastas y creadores de contenido, ofreciendo velocidades extremas y eficiencia gracias a la arquitectura Zen 4.",
      technicalSpecs: "16 Núcleos, 32 Hilos, 5.7 GHz Max Boost, AM5, 170W TDP",
    },
    {
      name: "Intel Core i9-14900K",
      category: "CPU",
      image:
        "https://www.hd-tecnologia.com/imagenes/articulos/2023/10/Se-filtra-el-rendimiento-del-Intel-Core-i9-14900K-es-hasta-un-2-mas-rapido-que-el-Ryzen-9-7950X3D-en-juegos.jpg",
      shortDescription: "Potencia extrema con 24 núcleos para gaming de élite.",
      fullDescription:
        "Lidera la tabla de rendimiento con altísimas frecuencias de reloj, ideal para mover los motores gráficos más exigentes de la actualidad.",
      technicalSpecs: "24 Núcleos (8P+16E), 32 Hilos, 6.0 GHz, LGA 1700",
    },
    {
      name: "AMD Ryzen 7 7800X3D",
      category: "CPU",
      image:
        "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7800x3d-og.jpg",
      shortDescription: "El rey indiscutido del gaming gracias al 3D V-Cache.",
      fullDescription:
        "Con una caché L3 masiva, este procesador destruye los cuellos de botella en resoluciones 1080p y 1440p, superando a chips mucho más caros.",
      technicalSpecs: "8 Núcleos, 16 Hilos, 96MB L3 Cache, AM5",
    },
    {
      name: "Intel Core i7-14700K",
      category: "CPU",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_755279-MLA91488671052_092025-O.webp",
      shortDescription: "Equilibrio perfecto entre productividad y juegos.",
      fullDescription:
        "Ofrece un rendimiento multinúcleo brutal para renderizado 3D y edición de video sin descuidar los FPS en juegos AAA.",
      technicalSpecs: "20 Núcleos (8P+12E), 28 Hilos, 5.6 GHz, LGA 1700",
    },
    {
      name: "AMD Ryzen 5 7600X",
      category: "CPU",
      image:
        "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-7600x-og.jpg",
      shortDescription: "La puerta de entrada ideal a la nueva plataforma AM5.",
      fullDescription:
        "Rendimiento asombroso de 6 núcleos que compite mano a mano con la gama alta de generaciones anteriores de procesadores.",
      technicalSpecs: "6 Núcleos, 12 Hilos, 5.3 GHz, AM5, PCIe 5.0",
    },
    {
      name: "Intel Core i5-13600K",
      category: "CPU",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_626863-MLA99940520563_112025-O.webp",
      shortDescription:
        "El campeón del rendimiento equilibrado en la serie 13.",
      fullDescription:
        "Insuperable en su rango, ideal para armar setups extremadamente equilibrados combinados con tarjetas gráficas modernas.",
      technicalSpecs: "14 Núcleos (6P+8E), 20 Hilos, 5.1 GHz, 125W Base TDP",
    },
    {
      name: "AMD Ryzen 9 7900X",
      category: "CPU",
      image:
        "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-9-7900x-og.jpg",
      shortDescription: "12 núcleos de puro poder de cómputo multitarea.",
      fullDescription:
        "Perfecto para streamers que necesitan codificar video de altísima calidad en tiempo real sin perder fluidez en su juego principal.",
      technicalSpecs: "12 Núcleos, 24 Hilos, 5.6 GHz, 170W TDP, AM5",
    },
    {
      name: "ASUS ROG Crosshair X670E Hero",
      category: "MOTHERBOARD",
      image:
        "https://dlcdnwebimgs.asus.com/files/media/0CBC145C-59B8-4B51-BF1A-DA0749FA1522/v1/img/spec/immersion.jpg",
      shortDescription: "Placa madre premium AM5 para overclocker extremos.",
      fullDescription:
        "Fases de poder masivas, puertos PCIe 5.0 para las gráficas del futuro y un diseño térmico que no tiene rival en el mercado actual.",
      technicalSpecs:
        "Socket AM5, DDR5, Wi-Fi 6E, 18+2 Fases de poder, PCIe 5.0",
    },
    {
      name: "MSI MAG B650 Tomahawk WiFi",
      category: "MOTHERBOARD",
      image:
        "https://hyperpc.ae/images/catalog/hardware/motherboards/am5/msi/mag-b650-tomahawk/msi-mag-b650-tomahawk.jpg",
      shortDescription: "Durabilidad militar y conectividad impecable.",
      fullDescription:
        "La opción sensata y robusta para armar un equipo Ryzen serie 7000 sin gastar de más en características extremas que no usarás.",
      technicalSpecs: "Socket AM5, DDR5 6400+, Wi-Fi 6E, ATX Form Factor",
    },
    {
      name: "Gigabyte Z790 AORUS Elite AX",
      category: "MOTHERBOARD",
      image:
        "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2181/innergigabyteimages/ULTRADURABLE.jpg",
      shortDescription:
        "La casa perfecta para procesadores Intel K de 14va Gen.",
      fullDescription:
        "Maneja las temperaturas de los Core i7 e i9 sin transpirar, acompañado de una BIOS extremadamente intuitiva y conectividad rápida.",
      technicalSpecs: "LGA 1700, DDR5, PCIe 5.0 x16, 2.5GbE LAN, Q-Flash Plus",
    },
    {
      name: "ASUS ROG Strix B760-A Gaming WiFi",
      category: "MOTHERBOARD",
      image:
        "https://hyperpc.ae/images/catalog/hardware/motherboards/1700/asus/rog-strix-b760-a-gaming/asus-rog-strix-b760a-gaming-alt.jpg",
      shortDescription:
        "Estética blanca impecable para Intel de última generación.",
      fullDescription:
        "Destaca en cualquier gabinete con cristal templado. Rendimiento sólido y estable sin la necesidad de hacer overclocking manual.",
      technicalSpecs: "LGA 1700, DDR5, Diseño Blanco/Plata, Aura Sync RGB",
    },
    {
      name: "ASRock B650I Lightning WiFi",
      category: "MOTHERBOARD",
      image:
        "https://www.alternate-b2b.es/p/1200x630/8/9/ASRock_B650I_Lightning_WiFi__Placa_base@@100019398_32.jpg",
      shortDescription: "Poder concentrado en formato Mini-ITX.",
      fullDescription:
        "No te dejes engañar por su tamaño reducido; soporta procesadores de gama alta para computadoras de formato pequeño (SFF) sin estrangulamiento térmico.",
      technicalSpecs: "AM5, Mini-ITX, DDR5, Phantom Gaming, Wi-Fi 6E",
    },
    {
      name: "Corsair Vengeance RGB 32GB DDR5",
      category: "RAM",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_635469-MLA100069358319_122025-O.webp",
      shortDescription: "Velocidad de 6000MHz y sincronización RGB impecable.",
      fullDescription:
        "El punto óptimo para los procesadores modernos, asegurando el mejor rendimiento de cuadros mínimos en juegos competitivos.",
      technicalSpecs:
        "32GB (2x16GB), DDR5-6000, CL30, Soporte Intel XMP y AMD EXPO",
    },
    {
      name: "G.Skill Trident Z5 Neo 64GB DDR5",
      category: "RAM",
      image:
        "https://files.pccasegear.com/UserFiles/F5-5600J2834F16GX2-TZ5NR-gskill-trident-z5-neo-rgb-32gb-2x16gb-5600mhz-cl28-ddr5-expo-ftr5.jpg",
      shortDescription:
        "Capacidad extrema para edición de video 4K y diseño 3D.",
      fullDescription:
        "Optimizadas específicamente para plataformas AMD, ofreciendo estabilidad total y sin compromisos en cargas de trabajo profesionales y pesadas.",
      technicalSpecs: "64GB (2x32GB), DDR5-6000, CL30, Perfil de memoria EXPO",
    },
    {
      name: "Kingston FURY Beast 16GB DDR4",
      category: "RAM",
      image:
        "https://nimavi.com/wp-content/uploads/2021/09/Kingston-Fury-Beast-16Gb-3200-04.jpg",
      shortDescription:
        "Actualización confiable para plataformas AM4 y LGA1700.",
      fullDescription:
        "Memoria de bajo perfil y alta compatibilidad que funciona perfectamente en cualquier sistema sin requerir configuraciones complejas en la BIOS.",
      technicalSpecs: "16GB (2x8GB), DDR4-3200, CL16, Disipador Low Profile",
    },
    {
      name: "TeamGroup T-Force Delta RGB 32GB DDR5",
      category: "RAM",
      image:
        "https://ae01.alicdn.com/kf/Sa55d078e4ad740a78cd15ec672ba9d39j.jpg",
      shortDescription: "Estética blanca agresiva y gran ancho de banda.",
      fullDescription:
        "Iluminación de ángulo ultra ancho de 120° para destacar el interior de tu PC mientras mantienes frecuencias altísimas de transferencia.",
      technicalSpecs:
        "32GB (2x16GB), DDR5-6400, CL32, Disipador Térmico Blanco",
    },
    {
      name: "Crucial Pro 64GB DDR5",
      category: "RAM",
      image:
        "https://www.club386.com/wp-content/uploads/2025/07/crucial-ddr5-pro-memory-deal-jul-25.jpg",
      shortDescription: "Para estaciones de trabajo donde el RGB no importa.",
      fullDescription:
        "Diseño sobrio, oscuro y elegante, enfocado al 100% en la estabilidad pura para programación, compilación de código y bases de datos.",
      technicalSpecs: "64GB (2x32GB), DDR5-5600, CL46, Disipador Negro Mate",
    },
    {
      name: "Samsung 990 PRO 2TB",
      category: "STORAGE",
      image:
        "https://hyperpc.ae/images/catalog/hardware/ssd/samsung/990_pro/samsung-990-pro.jpg",
      shortDescription:
        "El SSD M.2 NVMe más rápido para el usuario entusiasta.",
      fullDescription:
        "Lleva la interfaz PCIe 4.0 al absoluto límite de su capacidad, asegurando tiempos de carga casi inexistentes en el sistema operativo y juegos.",
      technicalSpecs:
        "2TB, M.2 2280, PCIe Gen4, 7450 MB/s Velocidad de Lectura",
    },
    {
      name: "WD_BLACK SN850X 1TB",
      category: "STORAGE",
      image:
        "https://www.muycomputer.com/wp-content/uploads/2022/05/WD_Black_SN850X.jpg",
      shortDescription: "Optimizado oficialmente para PS5 y PC Master Race.",
      fullDescription:
        "Incluye soporte opcional para disipador de calor y el Game Mode 2.0 exclusivo para gestionar texturas visuales pesadas mucho más rápido.",
      technicalSpecs: "1TB, PCIe 4.0, 7300 MB/s, Caché SLC Dinámica Mejorada",
    },
    {
      name: "Crucial T700 2TB Gen5",
      category: "STORAGE",
      image: "https://img.pccasegear.com/images/CT2000T700SSD5-ftr1.jpg",
      shortDescription: "Rendimiento Gen5 absurdo superando los 12,000 MB/s.",
      fullDescription:
        "Preparado para la próxima década de procesamiento de datos, requiere disipación activa rigurosa o una placa madre con escudo térmico masivo.",
      technicalSpecs:
        "2TB, PCIe 5.0 x4, 12,400 MB/s Lectura Secuencial, 3D NAND",
    },
    {
      name: "Kingston KC3000 1TB",
      category: "STORAGE",
      image: "https://i.ytimg.com/vi/zMunpcyuGrM/maxresdefault.jpg",
      shortDescription: "Fiabilidad extrema y velocidad a un precio increíble.",
      fullDescription:
        "Usa el aclamado controlador Phison E18 para ofrecer un rendimiento top-tier sin el recargo comercial típico de las marcas premium.",
      technicalSpecs:
        "1TB, M.2 NVMe Gen4, 7000 MB/s Lectura, Disipador de Grafeno",
    },
    {
      name: "Seagate FireCuda 530 4TB",
      category: "STORAGE",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/617493cced89b4cde24d1792/FireCuda-530-with-heatsink-/0x0.jpg?format=jpg&width=480",
      shortDescription:
        "Almacenamiento masivo para bibliotecas de juegos pesadas.",
      fullDescription:
        "Con una durabilidad récord de TBW (Terabytes escritos), nunca tendrás que preocuparte por desinstalar un juego o aplicación grande de nuevo.",
      technicalSpecs:
        "4TB, PCIe 4.0, 7300 MB/s, Resistencia Extrema de Escritura",
    },
    {
      name: "Corsair RM1000x",
      category: "PSU",
      image:
        "https://s3.wasabisys.com/labs-web-static-assets/product-admin/1738869393801-Hero.png",
      shortDescription: "Potencia silenciosa con certificación dorada.",
      fullDescription:
        "El estándar definitivo para alimentar tarjetas gráficas de gama alta modernas, construido exclusivamente con condensadores japoneses de 105°C.",
      technicalSpecs: "1000W, 80 PLUS Gold, Totalmente Modular, Modo Zero RPM",
    },
    {
      name: "EVGA SuperNOVA 850 G6",
      category: "PSU",
      image:
        "https://images10.newegg.com/BizIntell/item/17/438/17-438-212/EVGA%20Power%20Supply-220-G6-0850-X1-a7.jpg",
      shortDescription:
        "La fuente más recomendada para configuraciones Mid-High.",
      fullDescription:
        "Compacta y ultra estable, previene micro-cortes y protege tus componentes valiosos de peligrosos picos de tensión en la red eléctrica.",
      technicalSpecs: "850W, 80 PLUS Gold, OVP/UVP/OCP/SCP, Formato ATX",
    },
    {
      name: "Seasonic FOCUS GX-750",
      category: "PSU",
      image:
        "https://s3.wasabisys.com/labs-web-static-assets/product-admin/1732825089064-Seasonic::Focus%20GX-750%20ATX%203::Focus%20GX-750%20ATX%203(2024).png",
      shortDescription:
        "Fiabilidad insuperable del fabricante de fuentes líder.",
      fullDescription:
        "Con una garantía de primera línea, es literalmente el único componente de alimentación que vas a necesitar adquirir durante toda una década.",
      technicalSpecs:
        "750W, 80 PLUS Gold, Modular, Garantía Directa de 10 años",
    },
    {
      name: "be quiet! Dark Power 13 1000W",
      category: "PSU",
      image:
        "https://thumbor.4gamers.com.tw/uFUjSyA66FvtkDSkHfsqoBw3o4s=/filters:watermark(https://img.4gamers.com.tw/default-image/4gamers_watermark_20190925.png,-5,-3,0,17):format(jpeg):quality(90)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder%2Fimages%2FJackson%2FADV%2FBQ%E9%9B%BB%E4%BE%9B%2F2023-04-117302078.jpg%3FversionId%3DYnNVmM1E2yq_JjFAzo1hxgmo8Y7EdPN5",
      shortDescription:
        "Eficiencia Titanium y acústica prácticamente inaudible.",
      fullDescription:
        "Diseño sin cables cruzados internos para un flujo de aire perfecto, y un ventilador patentado silencioso incluso a carga máxima de sistema.",
      technicalSpecs:
        "1000W, 80 PLUS Titanium, Certificado ATX 3.0, Cable PCIe 5.0",
    },
    {
      name: "ASUS ROG Thor 1200W",
      category: "PSU",
      image:
        "https://dlcdnwebimgs.asus.com/files/media/1b52780a-7f15-4b6e-944a-b01c76798698/v1/img/aura/aura-sync.png",
      shortDescription:
        "Poder absoluto visualizado en pantalla OLED integrada.",
      fullDescription:
        "Muestra el consumo eléctrico en vatios en tiempo real en su panel lateral, ideal para gabinetes con la ventana de fuente expuesta.",
      technicalSpecs:
        "1200W, 80 PLUS Platinum, Pantalla OLED, Soporte Aura Sync",
    },
    {
      name: "NZXT Kraken Elite 360",
      category: "COOLING",
      image:
        "https://www.tensorscience.com/images_webp_jpeg/cover-foto-nzxt-kraken-elite-rgb-360-aio-liquid-cooler-black-16.jpeg",
      shortDescription:
        "Refrigeración líquida premium con pantalla LCD fluida.",
      fullDescription:
        "Personaliza tu setup mostrando animaciones GIF, información térmica de sensores o integraciones web directamente sobre el bloque del procesador.",
      technicalSpecs:
        'AIO 360mm, Pantalla 2.36" LCD a 60Hz, Bomba Asetek Gen 7',
    },
    {
      name: "Corsair iCUE H150i Elite Capellix",
      category: "COOLING",
      image:
        "https://media.ldlc.com/bo/images/fiches/ventilateur_processeur/Corsair/corsair_icue_h150i_elite_capellix_xt_001.jpg",
      shortDescription: "Iluminación deslumbrante y poder de disipación top.",
      fullDescription:
        "Control total y sincronizado del ecosistema a través del poderoso software iCUE, acompañado de eficientes ventiladores de levitación magnética.",
      technicalSpecs:
        "AIO 360mm, LEDs Capellix ultra brillantes, Hub iCUE Commander Incluido",
    },
    {
      name: "Noctua NH-D15 chromax.black",
      category: "COOLING",
      image: "https://i.ytimg.com/vi/I44dm3WcsGc/maxresdefault.jpg",
      shortDescription:
        "El legendario disipador por aire que vence a los líquidos.",
      fullDescription:
        "Su diseño de doble torre gigante garantiza temperaturas bajísimas y fiabilidad de por vida (al no contar con piezas mecánicas como bombas que puedan fallar).",
      technicalSpecs:
        "Doble Torre, 6 Heatpipes de cobre, 2x Ventiladores NF-A15 PWM, Negro total",
    },
    {
      name: "Arctic Liquid Freezer III 360",
      category: "COOLING",
      image:
        "https://www.arctic.de/media/6c/78/d4/1707470128/Liquid_Freezer_III_360_Black_Out-of_the-box.jpg",
      shortDescription:
        "El campeón absoluto calidad-precio en refrigeración líquida.",
      fullDescription:
        "Radiador más grueso que el estándar del mercado e incluye un pequeño ventilador VRM exclusivo diseñado para enfriar las fases de poder alrededor de la motherboard.",
      technicalSpecs:
        "AIO 360mm, Radiador 38mm grosor, Ventilador VRM activo en bomba",
    },
    {
      name: "Cooler Master Hyper 212 Halo",
      category: "COOLING",
      image:
        "https://media.ldlc.com/bo/images/fiches/ventilateur_processeur/cooler-master/cooler_master_hyper212_halo_black.jpg",
      shortDescription:
        "La leyenda económica renovada ahora con RGB direccionable.",
      fullDescription:
        "Perfecto para procesadores i5 o Ryzen 5, reemplazando el ruidoso disipador de stock con estilo y mucha mayor eficiencia térmica.",
      technicalSpecs:
        "Refrigeración por Aire, 4 Heatpipes, Ventilador MF120 Halo, Tapa de Aluminio",
    },
    {
      name: "Lian Li O11 Dynamic EVO",
      category: "CASE",
      image:
        "https://i.redd.it/new-build-011-dynamic-evo-xl-v0-to4qwue1zv9c1.jpg?width=3024&format=pjpg&auto=webp&s=caed19a62bbd7e239551f790f6f4ce01ee0cedec",
      shortDescription:
        "El chasis panorámico tipo acuario más imitado de la historia.",
      fullDescription:
        "Su innovadora estructura modular permite invertir todo el diseño interno para montarlo en el lado izquierdo o derecho de tu escritorio con visión ininterrumpida.",
      technicalSpecs:
        "Gabinete Dual Chamber, Vidrio Templado Frontal/Lateral, Diseño Reversible",
    },
    {
      name: "Fractal Design North",
      category: "CASE",
      image: "https://i.ytimg.com/vi/K0zj8sEsSK0/maxresdefault.jpg",
      shortDescription:
        "Elegancia natural minimalista con un frente de madera auténtica.",
      fullDescription:
        "Rompe con la saturada estética 'Gamer' tradicional y se integra de forma perfectamente natural en salas de estar o estudios modernos de diseño y trabajo.",
      technicalSpecs:
        "Formato Mid-Tower, Barras Frontales de Nogal/Roble, Lateral de Malla o Vidrio",
    },
    {
      name: "NZXT H9 Flow",
      category: "CASE",
      image: "https://i.ytimg.com/vi/dUnp1r57U3s/maxresdefault.jpg",
      shortDescription:
        "Flujo de aire masivo sin pilares frontales obstructivos.",
      fullDescription:
        "Combina el deslumbrante diseño panorámico sin marco con una parte superior y panel lateral derecho totalmente perforados para lograr un enfriamiento brutal.",
      technicalSpecs:
        "Dual Chamber, Vidrio sin costuras visibles, Capacidad para 10 ventiladores",
    },
    {
      name: "Corsair 4000D Airflow",
      category: "CASE",
      image:
        "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Cases/base-4000d-airflow-config/Gallery/4000D_AF_BLACK_21.webp",
      shortDescription:
        "El estándar de oro de la industria para armados accesibles.",
      fullDescription:
        "Incluye el brillante sistema de gestión de cables RapidRoute y un panel frontal optimizado en acero para mantener bajas las temperaturas operativas de cualquier sistema.",
      technicalSpecs:
        "Mid-Tower, Frontal de Malla Triangulada, Soporte E-ATX, 2x 120mm Fans Incluidos",
    },
    {
      name: "HYTE Y60",
      category: "CASE",
      image: "https://i.redd.it/a3l2f4xt4wmb1.jpg",
      shortDescription:
        "Diseño panorámico de 3 piezas de cristal que rompe todos los esquemas.",
      fullDescription:
        "Pensado desde cero exclusivamente para montar la tarjeta gráfica pesada en posición vertical, creando una vitrina inigualable para los componentes de tu PC.",
      technicalSpecs:
        "Cristal panorámico lateral de 3 vías, Riser PCIe 4.0 Premium Incluido",
    },
    {
      name: "Phanteks NV7",
      category: "CASE",
      image:
        "https://hyperpc.ae/images/catalog/hardware/cases/phanteks/nv7/phanteks-nv7-black.jpg",
      shortDescription:
        "Diseñado para exhibir sistemas complejos sin cables a la vista.",
      fullDescription:
        "Cuenta con una cubierta trasera que oculta mágicamente los cables de los periféricos, logrando el armado más limpio posible en un escritorio de cristal.",
      technicalSpecs:
        "Full-Tower, Vidrio Templado Contiguo, Soporta placa E-ATX y 12 ventiladores",
    },
    {
      name: 'Samsung Odyssey G9 49"',
      category: "MONITOR",
      image:
        "https://i.blogs.es/5b75cc/captura-de-pantalla-2023-06-13-a-las-10.41.03/650_1200.jpeg",
      shortDescription:
        "Inmersión total curva equivalente a dos monitores 1440p.",
      fullDescription:
        "La pantalla ultra-ancha definitiva que te envuelve por completo. Ideal para simuladores de vuelo y carreras que demandan visión periférica extrema.",
      technicalSpecs:
        "49 Pulgadas Super Ultra-Wide, Curva 1000R, 240Hz, Panel VA 1ms",
    },
    {
      name: "LG UltraGear 27GR95QE-B",
      category: "MONITOR",
      image:
        "https://elchapuzasinformatico.com/wp-content/uploads/2022/11/LG-UltraGear-27GR95QE-B.jpg",
      shortDescription:
        "La perfección de los negros puros gracias al panel OLED.",
      fullDescription:
        "Tiempos de respuesta de 0.03ms que hacen que el desenfoque de movimiento sea cosa del pasado, ofreciendo contraste infinito y colores vibrantes.",
      technicalSpecs:
        "27 Pulgadas, OLED, Resolución 1440p, 240Hz, HDR10, G-Sync Compatible",
    },
    {
      name: "ASUS ROG Swift PG259QN",
      category: "MONITOR",
      image:
        "https://dlcdnimgs.asus.com/websites/global/products/4m1eid3wpo5mvxra/images/bg-display-m.jpg",
      shortDescription:
        "Diseñado exclusivamente para el gaming e-sports competitivo.",
      fullDescription:
        "La latencia más baja posible del mercado gracias a la tecnología NVIDIA Reflex integrada, permitiendo reacciones superhumanas en shooters tácticos.",
      technicalSpecs:
        "24.5 Pulgadas, Panel Fast IPS, 1080p, 360Hz Reales, Analizador Reflex",
    },
    {
      name: "Keychron Q1 Pro",
      category: "PERIPHERAL",
      image: "https://media.mmorpg.com/images/heroes/posts/127202.jpg",
      shortDescription:
        "Teclado mecánico custom de aluminio y conexión inalámbrica.",
      fullDescription:
        "El puente perfecto entre los teclados comerciales y el hobby custom. Chasis de aluminio CNC masivo y teclas PBT de doble disparo de fábrica.",
      technicalSpecs:
        "Distribución 75%, Cuerpo Aluminio CNC, Hot-Swappable, Bluetooth, QMK/VIA",
    },
    {
      name: "Logitech G Pro X Superlight 2",
      category: "PERIPHERAL",
      image:
        "https://img.asmedia.epimg.net/resizer/v2/OAVHVO4K7BDXTDUNL2VFEPJRNU.jpg?auth=a9e920231a1dc74e1f513d19c549b85956ba1dca32f215d88044685abbbd3d53&width=360&height=203&smart=true",
      shortDescription: "El mouse predilecto de los jugadores profesionales.",
      fullDescription:
        "Evolución del mouse más icónico de la última década, ahora con interruptores híbridos óptico-mecánicos y un peso absurdo de tan solo 60 gramos.",
      technicalSpecs:
        "60 Gramos, Sensor Hero 2 (32K DPI), Switches Lightforce Híbridos",
    },
  ];

  await prisma.item.createMany({
    data: itemsData,
  });

  console.log("Items creados: ", itemsData);

  // const item = await prisma.item.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log("Item deleted: ", item);

  const allItems = await prisma.item.findMany();

  console.log("Todos los items: ", JSON.stringify(allItems, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
