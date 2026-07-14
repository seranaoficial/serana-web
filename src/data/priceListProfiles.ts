import type { Product } from '../store/useCartStore';

export type PriceListProfile = Partial<Pick<Product,
  | 'name'
  | 'price'
  | 'description'
  | 'category'
  | 'benefits'
  | 'healthBenefit'
  | 'observation'
  | 'portions'
  | 'ingredients'
  | 'variantes'
  | 'variants'
>>;

export const PRICE_LIST_PROFILES: Record<string, PriceListProfile> = {
  "ensalada-almendras": {
    "name": "Ensalada de almendras caramelizadas",
    "price": 34900,
    "description": "Contiene grasas saludables y proteinas, ideal para dias activos o personas que necesitan energia.",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Proteína",
      "Energía"
    ],
    "healthBenefit": "Contiene grasas saludables y proteinas, ideal para dias activos o personas que necesitan energia.",
    "observation": "Contiene alergenos, viene acomapañada de vinagreta de miel y balsamico y su topping es queso ricotta",
    "portions": 3,
    "ingredients": [
      "cogollo europeo",
      "rucula",
      "queso ricota",
      "oregano",
      "pimienta negra recien molida",
      "cebolla chalota remojada",
      "almendras peladas caramelizadas",
      "miel de abejas",
      "mix tomate cherry",
      "uva importada",
      "vinagreta de miel y balsamico"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 34900
      },
      {
        "label": "250 gr",
        "price": 23900
      }
    ]
  },
  "ensalada-quinoa": {
    "name": "Ensalada de quinoa",
    "price": 37900,
    "description": "Contiene la proteina vegetal mas completa: quinoa. ademas aporta fibra y probioticos (su vinagreta)",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Fibra",
      "Proteína"
    ],
    "healthBenefit": "Contiene la proteina vegetal mas completa: quinoa. ademas aporta fibra y probioticos (su vinagreta)",
    "observation": "Contiene proteina vegetal, acompañada de una mayo griega de ajo y su topping es queso feta",
    "portions": 3,
    "ingredients": [
      "mezclum",
      "rucula",
      "frutos secos mix",
      "quinoa cocida",
      "cebolla puerro tostada",
      "tomate uvalina",
      "mayonesa griega de ajo",
      "queso feta",
      "zanahoria"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 37900
      },
      {
        "label": "250 gr",
        "price": 25900
      }
    ]
  },
  "ensalada-italiana": {
    "name": "Ensalada italiana",
    "price": 36900,
    "description": "Es una ensalada alta en proteina, te da energia sostenida y sacia tu apetito por horas, como una cena normal.",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Proteína",
      "Energía"
    ],
    "healthBenefit": "Es una ensalada alta en proteina, te da energia sostenida y sacia tu apetito por horas, como una cena normal.",
    "observation": "Contiene proteina animal de alta calidad, acompañada de pesto y su topping es queso mozarella dibufala cigiliene",
    "portions": 3,
    "ingredients": [
      "rucula",
      "mix tomate uvalina",
      "pasta corta cocida",
      "aceituna",
      "burrata",
      "pepino mediterraneo",
      "cebolla chalota",
      "pesto",
      "mortadela italiana"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 36900
      },
      {
        "label": "250 gr",
        "price": 23900
      }
    ]
  },
  "ensalada-serana": {
    "name": "Ensalada serana",
    "price": 29900,
    "description": "Alto en antioxidantes buena fuente de fibra y es un balance entre lo dulce y lo salado.",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Fibra",
      "Antioxidante"
    ],
    "healthBenefit": "Alto en antioxidantes buena fuente de fibra y es un balance entre lo dulce y lo salado.",
    "observation": "Acompañada de una vingreta de fresa y menta y sus toppings son el queso parmessano y los croutones",
    "portions": 3,
    "ingredients": [
      "rucula",
      "queso parmessano",
      "crotones",
      "mix tomate cherry",
      "uva importada",
      "fresa",
      "cebolla puerro tostada",
      "pepino europeo",
      "vinagreta de fresa y menta",
      "Zanahoria"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 29900
      },
      {
        "label": "250 gr",
        "price": 19000
      }
    ]
  },
  "ensalada-baby": {
    "name": "Ensalada baby",
    "price": 31900,
    "description": "Es alta en fibra y micronutrientes, una ensalada ultra limpia y funcional. contiene antioxidantes diversos.",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Fibra",
      "Antioxidante"
    ],
    "healthBenefit": "Es alta en fibra y micronutrientes, una ensalada ultra limpia y funcional. contiene antioxidantes diversos.",
    "observation": "Acompañada de un hummus cremoso y balanceado",
    "portions": 3,
    "ingredients": [
      "zanahoria baby",
      "mazorquita baby",
      "palmitos",
      "mix tomate cherry",
      "cebolla chalota remojada",
      "pepino mediterraneo",
      "espinaca bogotana",
      "brotes",
      "hummus"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 31900
      },
      {
        "label": "250 gr",
        "price": 24900
      }
    ]
  },
  "ensalada-sandia-feta": {
    "name": "Ensalada de sandia y feta",
    "price": 31900,
    "description": "Contiene electrolitos que hidratan tu cuerpo porfundamente. ademas es digestiva.",
    "category": "ensaladas-gourmet",
    "benefits": [
      "Digestiva",
      "Hidratante"
    ],
    "healthBenefit": "Contiene electrolitos que hidratan tu cuerpo porfundamente. ademas es digestiva.",
    "observation": "Acompañada de una vinagreta fresca de naranja y cilantro y su topping es el queso feta",
    "portions": 3,
    "ingredients": [
      "sandia baby",
      "queso feta",
      "pepino mediterrraneo",
      "menta",
      "vinagreta de naranja y cilantro",
      "garbanzo crocante"
    ],
    "variants": [
      {
        "label": "450 gr",
        "price": 31900
      },
      {
        "label": "250 gr",
        "price": 21900
      }
    ]
  },
  "ensalada-cesar": {
    "name": "Ensalada cesar",
    "price": 26900,
    "description": "Es una ensalada que te da alta saciedad, es el equilibrio entre frescura y densidad nutricional.",
    "category": "ensaladas-tradicionales",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Es una ensalada que te da alta saciedad, es el equilibrio entre frescura y densidad nutricional.",
    "observation": "Acompañada de una salsa cesar especiada y sus toppings son el queso parmessano y los croutones",
    "portions": 3,
    "ingredients": [
      "cogollo europeo",
      "queso parmessano",
      "crotones",
      "crujiente de garbanzos",
      "brotes microgreen",
      "salsa cesar",
      "maicitos",
      "tomate perla"
    ],
    "variants": [
      {
        "label": "300 gr",
        "price": 26900
      },
      {
        "label": "125 gr",
        "price": 16500
      }
    ]
  },
  "ensalada-primavera": {
    "name": "Ensalada primavera",
    "price": 19900,
    "description": "Es una ensalada hidratante, digestiva y ligera. con aporte de vitaminas y antioxidantes.",
    "category": "ensaladas-tradicionales",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Hidratante"
    ],
    "healthBenefit": "Es una ensalada hidratante, digestiva y ligera. con aporte de vitaminas y antioxidantes.",
    "observation": "vinagreta de mostaza y miel y su topping es el puerro caramelizado",
    "portions": 4,
    "ingredients": [
      "pepino sin semilla",
      "tomate san marzano sin semilla",
      "mango tommy",
      "cebolla puerro tostada",
      "cilantro",
      "hierbabuena",
      "vinagreta de mostaza y miel"
    ],
    "variants": [
      {
        "label": "500 gr",
        "price": 19900
      },
      {
        "label": "250 gr",
        "price": 15500
      }
    ]
  },
  "verduras-saltear": {
    "name": "Verduras para saltear",
    "price": 13900,
    "description": "Es alta en fibra, limpia tu sistema digestivo y mejora tu funcion intestinal. es un detox natural.",
    "category": "ensaladas-tradicionales",
    "benefits": [
      "Fibra",
      "Digestiva",
      "Detox"
    ],
    "healthBenefit": "Es alta en fibra, limpia tu sistema digestivo y mejora tu funcion intestinal. es un detox natural.",
    "observation": "no tiene toppings ni contiene alergenos",
    "portions": 4,
    "ingredients": [
      "zucchini",
      "zanahoria",
      "apio",
      "brocoli",
      "cebolla roja",
      "cebolla puerro",
      "Pimentón"
    ],
    "variants": [
      {
        "label": "500 gr",
        "price": 13900
      },
      {
        "label": "250 gr",
        "price": 9000
      }
    ]
  },
  "pico-de-gallo": {
    "name": "Pico de gallo",
    "price": 14900,
    "description": "Es digestiva y antiinflamatoria",
    "category": "ensaladas-tradicionales",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es digestiva y antiinflamatoria",
    "observation": "no tiene toppings ni contiene alergenos",
    "portions": 4,
    "ingredients": [
      "tomate de aliño",
      "cebolla blanca",
      "cilantro"
    ],
    "variants": [
      {
        "label": "500 gr",
        "price": 14900
      },
      {
        "label": "250 gr",
        "price": 9900
      }
    ]
  },
  "ceviche-mango": {
    "name": "Ceviche de mango",
    "price": 14900,
    "description": "Es una ensalada que su alto contenido de vitamina c lo conviertne en una ensalada detox y beneficiosa para el sistema inmune.",
    "category": "ensaladas-tradicionales",
    "benefits": [
      "Vitamina C",
      "Sistema inmune",
      "Detox"
    ],
    "healthBenefit": "Es una ensalada que su alto contenido de vitamina c lo conviertne en una ensalada detox y beneficiosa para el sistema inmune.",
    "observation": "su topping es limon entero y salpimienta.",
    "portions": 4,
    "ingredients": [
      "mango tommy",
      "cebolla morada",
      "aji dulce",
      "pimenton",
      "cilantro",
      "ajo",
      "limon tahiti",
      "Pimienta",
      "sal"
    ],
    "variants": [
      {
        "label": "500 gr",
        "price": 14900
      },
      {
        "label": "250 gr",
        "price": 9900
      }
    ]
  },
  "salsa-cesar": {
    "name": "Salsa cesar",
    "price": 26900,
    "description": "Excelente fuente de grasas buenas y proteina, util para sacear y complementar tus comidas.",
    "category": "salsas",
    "benefits": [
      "Proteína"
    ],
    "healthBenefit": "Excelente fuente de grasas buenas y proteina, util para sacear y complementar tus comidas.",
    "observation": "Contiene trazos de huevo, posible alergeno. es una salsa balanceada y especiada ideal para ensaladas frescas",
    "portions": 10
  },
  "vinagreta-mostaza-miel": {
    "name": "Vinagreta de mostaza y miel",
    "price": 26900,
    "description": "Perfecta combinacion para tu activacion metabolica y energia rapida. un preentreno ligero",
    "category": "salsas",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Perfecta combinacion para tu activacion metabolica y energia rapida. un preentreno ligero",
    "observation": "Contiene semillas de chia",
    "portions": 10
  },
  "pesto": {
    "name": "Pesto",
    "price": 33900,
    "description": "Una de las salsas mas completas nutricionalmente, te aporta grasas saludables, proteina y calcio.",
    "category": "salsas",
    "benefits": [
      "Proteína"
    ],
    "healthBenefit": "Una de las salsas mas completas nutricionalmente, te aporta grasas saludables, proteina y calcio.",
    "observation": "Contiene trazos de nueces (posible alergeno)",
    "portions": 10
  },
  "mayonesa-griega": {
    "name": "Mayonesa griega de ajo",
    "price": 27900,
    "description": "La salsa mas proteica de la lista. con proteinas, probioticos y digestiva.",
    "category": "salsas",
    "benefits": [
      "Proteína",
      "Digestiva"
    ],
    "healthBenefit": "La salsa mas proteica de la lista. con proteinas, probioticos y digestiva.",
    "observation": "Contiene lacteos (posible alergeno)",
    "portions": 10
  },
  "vinagreta-fresa-menta": {
    "name": "Vinagreta de fresa y menta",
    "price": 22900,
    "description": "Una salsa con alta carga antioxidante y muy fresca",
    "category": "salsas",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Una salsa con alta carga antioxidante y muy fresca",
    "observation": "Es una vinagreta balaceada y dulce (contiene azucar)",
    "portions": 10
  },
  "vinagreta-miel-balsamico": {
    "name": "Vinagreta de miel y balsamico",
    "price": 29900,
    "description": "Te brinda proteccion cardiovascular, y regula tu glucosa. con energia natural.",
    "category": "salsas",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Te brinda proteccion cardiovascular, y regula tu glucosa. con energia natural.",
    "observation": "Es una vinagreta balanceada, entre dulce y acida",
    "portions": 10
  },
  "vinagreta-naranja-cilantro": {
    "name": "Vinagreta de naranja y cilantro",
    "price": 21900,
    "description": "Una vinagreta altisima en vitamina C, tiene efecto detox natural y refuerza tu sistema inmune.",
    "category": "salsas",
    "benefits": [
      "Vitamina C",
      "Sistema inmune",
      "Detox"
    ],
    "healthBenefit": "Una vinagreta altisima en vitamina C, tiene efecto detox natural y refuerza tu sistema inmune.",
    "observation": "es una vinagreta fresca y frutal",
    "portions": 10
  },
  "hummus": {
    "name": "Hummus",
    "price": 21900,
    "description": "Una salsa con proteina vegetal de alta calidad, te aporta fibra y regula el azucar en sangre.",
    "category": "salsas",
    "benefits": [
      "Fibra",
      "Proteína"
    ],
    "healthBenefit": "Una salsa con proteina vegetal de alta calidad, te aporta fibra y regula el azucar en sangre.",
    "observation": "es una salsa clasica cremosa, ideal para acompañar carbohidratos (pan, pasta)",
    "portions": 10
  },
  "chimichurri": {
    "name": "Chimichurri",
    "price": 26900,
    "description": "Tiene poder antiinflamatorio, y mejora la digestion de proteinas, por eso es ideal para acompañar carnes.",
    "category": "salsas",
    "benefits": [
      "Proteína",
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Tiene poder antiinflamatorio, y mejora la digestion de proteinas, por eso es ideal para acompañar carnes.",
    "observation": "Contiene pimienta (posible alergeno)",
    "portions": 10
  },
  "crema-tomate": {
    "name": "Crema de tomate",
    "price": 18900,
    "description": "Poderoso antioxidante, proteje el corazon y la piel. baja en calorias y rica en nutrientes.",
    "category": "sopas",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Poderoso antioxidante, proteje el corazon y la piel. baja en calorias y rica en nutrientes.",
    "portions": 4,
    "ingredients": [
      "tomate san marzano",
      "cebolla blanca",
      "albahaca",
      "ajo",
      "pimienta negra en grano"
    ]
  },
  "crema-auyama": {
    "name": "Crema de auyama",
    "price": 12900,
    "description": "Fortalece la vision y el sistema inmune, tiene un efecto antiinflamatorio y de recuperacion de energia.",
    "category": "sopas",
    "benefits": [
      "Antiinflamatoria",
      "Energía",
      "Sistema inmune"
    ],
    "healthBenefit": "Fortalece la vision y el sistema inmune, tiene un efecto antiinflamatorio y de recuperacion de energia.",
    "portions": 4,
    "ingredients": [
      "ahuyama",
      "zanahoria",
      "apio",
      "cebolla blanca",
      "pimenton",
      "pimienta blanca entera",
      "ajo"
    ]
  },
  "crema-hongos": {
    "name": "Crema de hongos",
    "price": 26900,
    "description": "Rica en nutrientes que ayudan al sistema nervioso y fortalecimiento cerebral. te aporta enfoque mental.",
    "category": "sopas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Rica en nutrientes que ayudan al sistema nervioso y fortalecimiento cerebral. te aporta enfoque mental.",
    "portions": 4,
    "ingredients": [
      "champiñon",
      "crimini",
      "cebolla larga",
      "cebolla blanca",
      "cebolla puerro",
      "papa criolla",
      "ajo",
      "pimienta negra",
      "pimienta verde"
    ]
  },
  "crema-verduras": {
    "name": "Crema de verduras",
    "price": 13900,
    "description": "Es alta en fibra y ayuda a la limpieza intestinal. aporta nutrientes completos para la salud en general.",
    "category": "sopas",
    "benefits": [
      "Fibra"
    ],
    "healthBenefit": "Es alta en fibra y ayuda a la limpieza intestinal. aporta nutrientes completos para la salud en general.",
    "portions": 4,
    "ingredients": [
      "ahuyama",
      "zanahoria",
      "apio",
      "cebolla morada",
      "cebolla puerro",
      "espinaca",
      "ajo",
      "pimienta blanca",
      "pimienta verde"
    ]
  },
  "sancocho": {
    "name": "Sancocho",
    "price": 13900,
    "description": "Aporta alta densidad energetica, alto en carbohidratos complejosy minerales escenciales, ayuda a la recuperacion muscular y es hidratante.",
    "category": "sopas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Aporta alta densidad energetica, alto en carbohidratos complejosy minerales escenciales, ayuda a la recuperacion muscular y es hidratante.",
    "portions": 4,
    "ingredients": [
      "papa capira",
      "papa criolla",
      "yuca",
      "arracacha",
      "platano verde",
      "mazorca",
      "cilantro",
      "ajo",
      "zanahoria",
      "cebolla blanca",
      "cebolla larga"
    ]
  },
  "frijoles": {
    "name": "Frijoles",
    "price": 18900,
    "description": "Es una sopa con proteina vegetal de calidad, con altos niveles de fibra y te aporta energia sostenida.",
    "category": "sopas",
    "benefits": [
      "Fibra",
      "Proteína",
      "Energía"
    ],
    "healthBenefit": "Es una sopa con proteina vegetal de calidad, con altos niveles de fibra y te aporta energia sostenida.",
    "portions": 4,
    "ingredients": [
      "frijol verde",
      "ahuyama",
      "cebola blanca",
      "platano verde",
      "ajo",
      "zanahoria",
      "cebolla larga",
      "pico de gallo"
    ]
  },
  "jugo-verde": {
    "name": "Jugo verde x 5",
    "price": 18900,
    "description": "Es un batido detox natural, y alcanilizante (reduce inflamacion), contiene fibra y clorofila, ideal para hacer ayunos y bajar de peso.",
    "category": "bebidas",
    "benefits": [
      "Fibra",
      "Detox"
    ],
    "healthBenefit": "Es un batido detox natural, y alcanilizante (reduce inflamacion), contiene fibra y clorofila, ideal para hacer ayunos y bajar de peso.",
    "portions": 5,
    "ingredients": [
      "pepino",
      "apio",
      "piña",
      "menta",
      "espinaca"
    ]
  },
  "batido-circulacion": {
    "name": "Batido circulacion x5",
    "price": 18900,
    "description": "Mejora la circulacuion sanguinea, es un preentreno natural y ayuda a mejorar la resistencia fisica.",
    "category": "bebidas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Mejora la circulacuion sanguinea, es un preentreno natural y ayuda a mejorar la resistencia fisica.",
    "portions": 5,
    "ingredients": [
      "remolacha",
      "zanahoria",
      "curcuma raiz",
      "mora"
    ]
  },
  "batido-detox": {
    "name": "Batido detox antiestres X5",
    "price": 18900,
    "description": "Tiene un efecto calmante, disminuye la sensacion de pesadez y es perfecto para el estres, ansiedad y mala digestion.",
    "category": "bebidas",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Tiene un efecto calmante, disminuye la sensacion de pesadez y es perfecto para el estres, ansiedad y mala digestion.",
    "portions": 5,
    "ingredients": [
      "papaya",
      "piña",
      "pepino",
      "jengibre"
    ]
  },
  "shot-metabolico": {
    "name": "Shot metabolico x6",
    "price": 48900,
    "description": "Acelera el metabolismo como activador total, activa tu sistema digestivo en ayunas. es perfecto para perder grasa.",
    "category": "bebidas",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Acelera el metabolismo como activador total, activa tu sistema digestivo en ayunas. es perfecto para perder grasa.",
    "portions": 6,
    "ingredients": [
      "manzana verde",
      "limon tahiti",
      "jengibre",
      "vinagre de manzana",
      "miel",
      "canela en polvo",
      "Agua"
    ]
  },
  "shot-serenidad": {
    "name": "Shot serenidad x6",
    "price": 49500,
    "description": "Es un shot antiestres, regula el sistema nervioso y mejora el estado de animo, funciona como \"pausa emocional\"",
    "category": "bebidas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Es un shot antiestres, regula el sistema nervioso y mejora el estado de animo, funciona como \"pausa emocional\"",
    "portions": 6,
    "ingredients": [
      "Maracuya",
      "mango tommy maduro",
      "menta",
      "limon tahiti",
      "miel",
      "curcuma",
      "agua",
      "pimienta"
    ]
  },
  "shot-concentracion": {
    "name": "Shot concentración X6",
    "price": 59500,
    "description": "Mejora el enfoque mental, aumenta la claridad cogntiva, contiene energia limpia a traves del matcha.",
    "category": "bebidas",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Mejora el enfoque mental, aumenta la claridad cogntiva, contiene energia limpia a traves del matcha.",
    "portions": 6,
    "ingredients": [
      "Arandanos",
      "Uva isabella",
      "espinaca criolla",
      "limon tahiti",
      "te matcha",
      "agua"
    ]
  },
  "shot-antiinflamatorio": {
    "name": "Shot antiinflamatorio X6",
    "price": 49500,
    "description": "Es una defensa total para tu cuerpo, potente antiinflamatorio, refuerza tu sistema inmune y reduce el dolor y la fatiga.",
    "category": "bebidas",
    "benefits": [
      "Antiinflamatoria",
      "Sistema inmune"
    ],
    "healthBenefit": "Es una defensa total para tu cuerpo, potente antiinflamatorio, refuerza tu sistema inmune y reduce el dolor y la fatiga.",
    "portions": 6,
    "ingredients": [
      "jengibre",
      "curcuma",
      "naranja",
      "limon tahiti",
      "miel pura",
      "pimienta negra",
      "vinagre de manzana",
      "agua"
    ]
  },
  "shot-muscular": {
    "name": "Shot muscular X6",
    "price": 44500,
    "description": "Mejora el flujo sanguineo, es un energizante natural ademas de que es un poderoso antiinflamatorio.",
    "category": "bebidas",
    "benefits": [
      "Antiinflamatoria"
    ],
    "healthBenefit": "Mejora el flujo sanguineo, es un energizante natural ademas de que es un poderoso antiinflamatorio.",
    "portions": 6,
    "ingredients": [
      "naranja",
      "limon tahiti",
      "jengibre",
      "miel",
      "remolacha",
      "curcuma",
      "pimienta negra",
      "canela en polvo",
      "agua"
    ]
  },
  "shot-piel": {
    "name": "Shot piel perfecta X6",
    "price": 35900,
    "description": "Es un antioxidante para la piel y reduce el envejecimieno prematuro. Hidratacion celular profunda.",
    "category": "bebidas",
    "benefits": [
      "Antioxidante",
      "Hidratante"
    ],
    "healthBenefit": "Es un antioxidante para la piel y reduce el envejecimieno prematuro. Hidratacion celular profunda.",
    "portions": 6,
    "ingredients": [
      "zanahoria",
      "papaya",
      "naranja",
      "limon",
      "agua",
      "vinagre de manzana"
    ]
  },
  "jugo-naranja": {
    "name": "Jugo de naranja x6",
    "price": 39900,
    "description": "Contiene Vitamina C y es refrescante.",
    "category": "bebidas",
    "benefits": [
      "Vitamina C"
    ],
    "healthBenefit": "Contiene Vitamina C y es refrescante.",
    "portions": 6,
    "ingredients": [
      "Naranja valencia firme y fresca dulce y recien exprimida, sin conservantes."
    ]
  },
  "mango-picado": {
    "name": "Mango picado",
    "price": 13900,
    "description": "Ayuda al sistema inmune por su alto contenido de vitamina C y apoya la salud digestiva.",
    "category": "frutas-picadas",
    "benefits": [
      "Digestiva",
      "Vitamina C",
      "Sistema inmune"
    ],
    "observation": "",
    "healthBenefit": "Ayuda al sistema inmune por su alto contenido de vitamina C y apoya la salud digestiva.",
    "variantes": {
      "corte": ["cubos", "bastones"],
      "maduracion": ["verde", "pintón", "maduro"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13900
      },
      {
        "label": "250 gr",
        "price": 9000
      }
    ]
  },
  "mora": {
    "name": "Mora destallada",
    "price": 15500,
    "description": "Posee alto contenido de antioxidantes y proteje el cerebro. Ademas ayuda a la regulacion de azucar en sangre.",
    "category": "frutas-picadas",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Posee alto contenido de antioxidantes y proteje el cerebro. Ademas ayuda a la regulacion de azucar en sangre.",
    "observation": "Entera, lavada, desinfectada y desjohada",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 15500
      },
      {
        "label": "250 gr",
        "price": 10000
      }
    ]
  },
  "pina": {
    "name": "Piña picada",
    "price": 16900,
    "description": "Es diuretica, digestiva y tiene poderes antiinflamatorios, es ideal para despues de comidas.",
    "category": "frutas-picadas",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es diuretica, digestiva y tiene poderes antiinflamatorios, es ideal para despues de comidas.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 16900
      },
      {
        "label": "250 gr",
        "price": 9500
      }
    ]
  },
  "fresa": {
    "name": "Fresa picada",
    "price": 18900,
    "description": "Contiene vitamina C (colageno) ademas de ser una fruta con alto contenido de agua y es un antioxidante natural.",
    "category": "frutas-picadas",
    "benefits": [
      "Antioxidante",
      "Vitamina C"
    ],
    "healthBenefit": "Contiene vitamina C (colageno) ademas de ser una fruta con alto contenido de agua y es un antioxidante natural.",
    "variantes": {
      "corte": ["cuartos", "tajadas", "mitades", "enteras"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 18900
      },
      {
        "label": "250 gr",
        "price": 12900
      }
    ]
  },
  "sandia-baby": {
    "name": "Sandia baby picada",
    "price": 15500,
    "description": "Alta hidratacion, contiene elecrolitos naturales y recupera tus musculos, ideal para el post ejercicio.",
    "category": "frutas-picadas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Alta hidratacion, contiene elecrolitos naturales y recupera tus musculos, ideal para el post ejercicio.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 15500
      },
      {
        "label": "250 gr",
        "price": 9000
      }
    ]
  },
  "kiwi": {
    "name": "Kiwi picado",
    "price": 26000,
    "description": "Altisima en vitamina C, ideal para despues de las comidas ya que mejora la absorcion de nutrientesy contiene enzimas digestivas.",
    "category": "frutas-picadas",
    "benefits": [
      "Digestiva",
      "Vitamina C"
    ],
    "healthBenefit": "Altisima en vitamina C, ideal para despues de las comidas ya que mejora la absorcion de nutrientesy contiene enzimas digestivas.",
    "observation": "viene en rodajas predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 26000
      },
      {
        "label": "250 gr",
        "price": 16000
      }
    ]
  },
  "coco": {
    "name": "Coco picado",
    "price": 26900,
    "description": "Es una grasa saludable, es energia rapida sin picos fuertes y ayuda a la proteccion cerebral.",
    "category": "frutas-picadas",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Es una grasa saludable, es energia rapida sin picos fuertes y ayuda a la proteccion cerebral.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 26900
      },
      {
        "label": "250 gr",
        "price": 16900
      }
    ]
  },
  "uva-importada": {
    "name": "Uva importada destallada",
    "price": 29900,
    "description": "Contiene Resveratrol (un poderoso antienvejecimiento) y mejora la salud cardiovascular",
    "category": "frutas-picadas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Contiene Resveratrol (un poderoso antienvejecimiento) y mejora la salud cardiovascular",
    "observation": "vienen enteras y destalladas",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 29900
      },
      {
        "label": "250 gr",
        "price": 16900
      }
    ]
  },
  "melon": {
    "name": "Melon picado",
    "price": 17900,
    "description": "Es hidratante, bajo en calorias y contiene vitamina A y C, es ideal para seguir dietas bajas en calorias.",
    "category": "frutas-picadas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Es hidratante, bajo en calorias y contiene vitamina A y C, es ideal para seguir dietas bajas en calorias.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 17900
      },
      {
        "label": "250 gr",
        "price": 10000
      }
    ]
  },
  "guayaba-manzana": {
    "name": "Guayaba manzana picada",
    "price": 16900,
    "description": "Muy alta en vitamina C, contiene fibra que proteje tu microbiota y regula tu sistema digestivo",
    "category": "frutas-picadas",
    "benefits": [
      "Fibra",
      "Digestiva",
      "Vitamina C"
    ],
    "healthBenefit": "Muy alta en vitamina C, contiene fibra que proteje tu microbiota y regula tu sistema digestivo",
    "observation": "viene en rodajas predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 16900
      },
      {
        "label": "250 gr",
        "price": 10000
      }
    ]
  },
  "guayaba-pera-picada": {
    "name": "Guayaba pera picada",
    "price": 13000,
    "description": "Muy alta en vitamina C, contiene fibra que proteje tu microbiota y regula tu sistema digestivo",
    "category": "frutas-picadas",
    "benefits": [
      "Fibra",
      "Digestiva",
      "Vitamina C"
    ],
    "healthBenefit": "Muy alta en vitamina C, contiene fibra que proteje tu microbiota y regula tu sistema digestivo",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "uchuva": {
    "name": "Uchuva descapachada",
    "price": 17900,
    "description": "Contiene altos niveles de antioxidantes, proteje tus celulas y aporta a tu sistema inmune.",
    "category": "frutas-picadas",
    "benefits": [
      "Antioxidante",
      "Sistema inmune"
    ],
    "healthBenefit": "Contiene altos niveles de antioxidantes, proteje tus celulas y aporta a tu sistema inmune.",
    "observation": "vienen enteras y descapachadas",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 17900
      },
      {
        "label": "250 gr",
        "price": 11900
      }
    ]
  },
  "papaya-picada": {
    "name": "Papaya picada",
    "price": 13500,
    "description": "Es digestiva y antiinflamatoria, gracias a la papaina. mejora el transito digestivo y reduce inflamacion.",
    "category": "frutas-picadas",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es digestiva y antiinflamatoria, gracias a la papaina. mejora el transito digestivo y reduce inflamacion.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13500
      },
      {
        "label": "250 gr",
        "price": 8500
      }
    ]
  },
  "baby-bowl-amarillos": {
    "name": "Bowl Frutos Amarillos",
    "price": 9000,
    "description": "Es alta en vitamina C y apoya el sistema inmune. es un desayuno perfecto o snack energetico.",
    "category": "frutas-picadas",
    "benefits": [
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es alta en vitamina C y apoya el sistema inmune. es un desayuno perfecto o snack energetico.",
    "observation": "",
    "portions": 2,
    "variants": [
      { "label": "500GR", "price": 13500 },
      { "label": "250GR", "price": 8500 }
    ]
  },
  "baby-bowl-berry": {
    "name": "Bowl Berry Mix",
    "price": 33000,
    "description": "Alta carga antioxidante, apoyo antienvejecimiento, y bajo idice glucemico.",
    "category": "frutas-picadas",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Alta carga antioxidante, apoyo antienvejecimiento, y bajo idice glucemico.",
    "observation": "",
    "portions": 2,
    "variants": [
      { "label": "500GR", "price": 14500 },
      { "label": "250GR", "price": 9000 }
    ]
  },
  "espinaca-criolla-deshojada-x300-gr": {
    "name": "Espinaca criolla deshojada x300 gr",
    "price": 10900,
    "description": "Es otro superalimento, rica en herro, mejora la energia y es antioxidante.",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante",
      "Energía"
    ],
    "healthBenefit": "Es otro superalimento, rica en herro, mejora la energia y es antioxidante.",
    "observation": "ya lavada, desinfectada y deshojada (unica presentacion)",
    "portions": 5
  },
  "zucchini-picado": {
    "name": "Zuchini verde picado",
    "price": 12000,
    "description": "Aporta hidratacion celular, bajo en calorias asi que es ideal para etapa de definicion o bajar de peso.",
    "category": "verduras-picadas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Aporta hidratacion celular, bajo en calorias asi que es ideal para etapa de definicion o bajar de peso.",
    "variantes": {
      "corte": ["julianas", "rodajas", "cubos", "bastones"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "zuchini": {
    "name": "Zuchini amarillo picado",
    "price": 12000,
    "description": "Aporta hidratacion celular, bajo en calorias asi que es ideal para etapa de definicion o bajar de peso.",
    "category": "verduras-picadas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Aporta hidratacion celular, bajo en calorias asi que es ideal para etapa de definicion o bajar de peso.",
    "variantes": {
      "corte": ["julianas", "rodajas", "cubos", "bastones"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "pimenton-picado": {
    "name": "Pimenton picado",
    "price": 16500,
    "description": "Es el alimento con mayor contenido de vitamina C, poderoso para el sistema inmune y la piel.",
    "category": "verduras-picadas",
    "benefits": [
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es el alimento con mayor contenido de vitamina C, poderoso para el sistema inmune y la piel.",
    "variantes": {
      "corte": ["julianas", "rodajas", "cubos", "bastones"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 16500
      },
      {
        "label": "250 gr",
        "price": 10000
      }
    ]
  },
  "cebolla-blanca-picada": {
    "name": "Cebolla blanca picada",
    "price": 12900,
    "description": "Antibacteriana natural, mejora la salud intestinal y proteje el sistema inmune.",
    "category": "verduras-picadas",
    "benefits": [
      "Sistema inmune"
    ],
    "healthBenefit": "Antibacteriana natural, mejora la salud intestinal y proteje el sistema inmune.",
    "variantes": {
      "corte": ["julianas", "rodajas", "cubos"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12900
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "cebolla-roja": {
    "name": "Cebolla roja picada",
    "price": 13900,
    "description": "Contiene mas antioxidantes que la cebolla blanca, mejora la salud cardiovascular y es antiinflamatoria.",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Contiene mas antioxidantes que la cebolla blanca, mejora la salud cardiovascular y es antiinflamatoria.",
    "variantes": {
      "corte": ["julianas", "rodajas", "cubos"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13900
      },
      {
        "label": "250 gr",
        "price": 9900
      }
    ]
  },
  "cebolla-puerro": {
    "name": "Cebolla puerro picada",
    "price": 17900,
    "description": "Rica en fibra probiotica, mejora la bicrobiota intestinal y apoya a sistema inmune",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Sistema inmune"
    ],
    "healthBenefit": "Rica en fibra probiotica, mejora la bicrobiota intestinal y apoya a sistema inmune",
    "observation": "",
    "variantes": {
      "corte": ["media lunas", "julianas"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 17900
      },
      {
        "label": "250 gr",
        "price": 10900
      }
    ]
  },
  "cebolla-larga": {
    "name": "Cebolla larga picada",
    "price": 14900,
    "description": "Estimula el sistema inmune y mejora la digestion, ademas contiene vitamina K",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva",
      "Sistema inmune"
    ],
    "healthBenefit": "Estimula el sistema inmune y mejora la digestion, ademas contiene vitamina K",
    "observation": "finamente picada",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 14900
      },
      {
        "label": "250 gr",
        "price": 9900
      }
    ]
  },
  "habichuela": {
    "name": "Habichuela picada",
    "price": 13500,
    "description": "Regula el transito intestinal, es rica en fibra y ayuda a controlar el azucar en sangre.",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra"
    ],
    "healthBenefit": "Regula el transito intestinal, es rica en fibra y ayuda a controlar el azucar en sangre.",
    "observation": "",
    "variantes": {
      "corte": ["finamente picados", "en bastones"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13500
      },
      {
        "label": "250 gr",
        "price": 9000
      }
    ]
  },
  "rabano": {
    "name": "Rabano picado",
    "price": 13500,
    "description": "Es un desintoxicante natural del higado, ayuda aumentar la resistencia fisica.",
    "category": "verduras-picadas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Es un desintoxicante natural del higado, ayuda aumentar la resistencia fisica.",
    "observation": "viene en rodajas predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13500
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "auyama": {
    "name": "Auyama picada",
    "price": 12900,
    "description": "Rica en betacarotenos (salud visual y la piel) ademas regula la digestion.",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Rica en betacarotenos (salud visual y la piel) ademas regula la digestion.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12900
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "remolacha": {
    "name": "Remolacha picada",
    "price": 13900,
    "description": "Mejora la circulacion (oxido nitrico) aumenta la resistencia fisica y es un desintoxicante hepatico.",
    "category": "verduras-picadas",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Mejora la circulacion (oxido nitrico) aumenta la resistencia fisica y es un desintoxicante hepatico.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13900
      },
      {
        "label": "250 gr",
        "price": 9500
      }
    ]
  },
  "tomate-de-alino": {
    "name": "Tomate de aliño picado",
    "price": 14900,
    "description": "Contiene licopeno (potente antioxidante) protege el corazon y es antiinflamatorio",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Contiene licopeno (potente antioxidante) protege el corazon y es antiinflamatorio",
    "observation": "",
    "variantes": {
      "corte": ["rodajas", "cubos"],
      "maduracion": ["verde", "pintón", "maduro"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 14900
      },
      {
        "label": "250 gr",
        "price": 10900
      }
    ]
  },
  "tomate-cherry": {
    "name": "Tomate cherry",
    "price": 20900,
    "description": "Contiene mayor concentracion de antioxidantes que el tomate de aliño, protege la piel y las celulas.",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Contiene mayor concentracion de antioxidantes que el tomate de aliño, protege la piel y las celulas.",
    "observation": "vienen enteros",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 20900
      },
      {
        "label": "250 gr",
        "price": 13900
      }
    ]
  },
  "tomate-uvalina": {
    "name": "Tomate uvalina",
    "price": 22900,
    "description": "Es mas alto en vitamina c que los dos anteriores, mejora el sistema inmune ademas es ligero y digestivo.",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es mas alto en vitamina c que los dos anteriores, mejora el sistema inmune ademas es ligero y digestivo.",
    "observation": "vienen enteros",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 22900
      },
      {
        "label": "250 gr",
        "price": 14900
      }
    ]
  },
  "repollo-blanco-morado": {
    "name": "Repollo blanco/morado picado",
    "price": 12000,
    "description": "Es un desintoxicante natural del higado, es alto en fibra y rico en antioxidantes (sobretodo el morado).",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Antioxidante"
    ],
    "healthBenefit": "Es un desintoxicante natural del higado, es alto en fibra y rico en antioxidantes (sobretodo el morado).",
    "observation": "",
    "variantes": {
      "corte": ["juliana finas", "rayada"],
      "tipo": ["blanco", "morado"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "apio": {
    "name": "Apio picado",
    "price": 12000,
    "description": "Es un diuretico natural, refuerza el sistema inmune y es alto en fibra, funciona como DETOX",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Sistema inmune",
      "Detox"
    ],
    "healthBenefit": "Es un diuretico natural, refuerza el sistema inmune y es alto en fibra, funciona como DETOX",
    "observation": "",
    "variantes": {
      "corte": ["media lunas", "bastones", "cubos"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "brocoli": {
    "name": "Brocoli destallado",
    "price": 17900,
    "description": "Es un superalimento: anticancerigeno, refuerza el sistema inmune y es alto en fibra.",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Sistema inmune"
    ],
    "healthBenefit": "Es un superalimento: anticancerigeno, refuerza el sistema inmune y es alto en fibra.",
    "observation": "viene en arboles medianos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 17900
      },
      {
        "label": "250 gr",
        "price": 10000
      }
    ]
  },
  "pepino": {
    "name": "Pepino picado",
    "price": 12900,
    "description": "Contiene mucha agua: aporta hidratacion celular, desinflama y mejora la piel.",
    "category": "verduras-picadas",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Contiene mucha agua: aporta hidratacion celular, desinflama y mejora la piel.",
    "observation": "",
    "variantes": {
      "corte": ["rodajas", "cubos", "media luna"],
      "extra": ["Con cáscara", "Sin cáscara"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12900
      },
      {
        "label": "250 gr",
        "price": 8900
      }
    ]
  },
  "penca-sabila": {
    "name": "Penca sabila picada",
    "price": 12900,
    "description": "Regenera la mucosa intestinal, es un relajante natural y mejora la digestion.",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Regenera la mucosa intestinal, es un relajante natural y mejora la digestion.",
    "observation": "viene en cubos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12900
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "yuca-pelada-desvenada": {
    "name": "Yuca pelada desvenada",
    "price": 13500,
    "description": "Es fuente de energia limpia, es libre de gluten y mejora la digestion.",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva",
      "Energía"
    ],
    "healthBenefit": "Es fuente de energia limpia, es libre de gluten y mejora la digestion.",
    "observation": "viene en trozos en mitades y sin vena predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 13500
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "lechuga-hidroponica-deshojada-x-300-gr": {
    "name": "Lechuga hidroponica deshojada x 300 gr",
    "price": 8900,
    "description": "Es rica en agua y fibra ademas de ser un relajante natural.",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra"
    ],
    "healthBenefit": "Es rica en agua y fibra ademas de ser un relajante natural.",
    "observation": "ya lavada, desinfectada y deshojada (unica presentacion)",
    "portions": 2
  },
  "zanahoria": {
    "name": "Zanahoria picada",
    "price": 12000,
    "description": "Contiene betacarotenos: Salud de la piel y vision. es antioxidante y mejora el sistema inmune.",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante",
      "Sistema inmune"
    ],
    "healthBenefit": "Contiene betacarotenos: Salud de la piel y vision. es antioxidante y mejora el sistema inmune.",
    "observation": "",
    "variantes": {
      "corte": ["rodajas", "cubos", "julianas", "bastones", "rayada"]
    },
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 12000
      },
      {
        "label": "250 gr",
        "price": 8000
      }
    ]
  },
  "lechuga-batavia-deshojada-x-300-gr": {
    "name": "Lechuga batavia deshojada x 300 gr",
    "price": 6500,
    "description": "Es una fibra suave facil de digerir. mejora el transito intestinal y mejora la hidratacion celular.",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Hidratante"
    ],
    "healthBenefit": "Es una fibra suave facil de digerir. mejora el transito intestinal y mejora la hidratacion celular.",
    "observation": "ya lavada, desinfectada y deshojada (unica presentacion)",
    "portions": 5
  },
  "perejil-x-200-gr": {
    "name": "Perejil lavado x 200 gr",
    "price": 4000,
    "description": "Es un desintoxicante natural para los riñones. Es rico en vitamina C y hierro ademas de ser un antiinflamatorio natural.",
    "category": "verduras-picadas",
    "benefits": [
      "Antiinflamatoria",
      "Vitamina C"
    ],
    "healthBenefit": "Es un desintoxicante natural para los riñones. Es rico en vitamina C y hierro ademas de ser un antiinflamatorio natural.",
    "observation": "ya lavado, desinfectado y centrifugado (unica presentacion)",
    "portions": 8
  },
  "mezclum": {
    "name": "Mezclum organico lavado x 250 gr",
    "price": 24500,
    "description": "Contiene Antioxidantes variados, fuente de hierro y clorofila que mejora la salud digestiva.",
    "category": "verduras-picadas",
    "benefits": [
      "Antioxidante",
      "Digestiva"
    ],
    "healthBenefit": "Contiene Antioxidantes variados, fuente de hierro y clorofila que mejora la salud digestiva.",
    "observation": "ya lavado, desinfectado y centrifugado (unica presentacion)",
    "portions": 8
  },
  "coliflor": {
    "name": "Coliflor destallado",
    "price": 18900,
    "description": "Es rico en fibra y proteina, ademas regula las hormonas y es un poderoso desintoxicante hepatico.",
    "category": "verduras-picadas",
    "benefits": [
      "Fibra",
      "Proteína"
    ],
    "healthBenefit": "Es rico en fibra y proteina, ademas regula las hormonas y es un poderoso desintoxicante hepatico.",
    "observation": "viene en arboles medianos predeterminadamente",
    "portions": 4,
    "variants": [
      {
        "label": "500 gr",
        "price": 18900
      },
      {
        "label": "250 gr",
        "price": 10900
      }
    ]
  },
  "cilantro-lavado-x-200-gr": {
    "name": "cilantro lavado x 200 gr",
    "price": 5500,
    "description": "Elimina metales pesados, es antibacteriano y mejora la digestion. ideal para un detox profundo.",
    "category": "verduras-picadas",
    "benefits": [
      "Digestiva",
      "Detox"
    ],
    "healthBenefit": "Elimina metales pesados, es antibacteriano y mejora la digestion. ideal para un detox profundo.",
    "observation": "ya lavado, desinfectado y centrifugado (unica presentacion)",
    "portions": 10
  },
  "manzana-libra": {
    "name": "Manzana und",
    "price": 3900,
    "description": "Es rica en fibra, favorece la salud intestinal y mejordigestion. ademas es perfecta para el control de peso.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva"
    ],
    "healthBenefit": "Es rica en fibra, favorece la salud intestinal y mejordigestion. ademas es perfecta para el control de peso.",
    "observation": "",
    "portions": 1,
    "ingredients": [
      "presentacion und"
    ],
    "variantes": {
      "tipo": [
        "Verde",
        "Roja"
      ]
    }
  },
  "pera-libra": {
    "name": "Pera und",
    "price": 3900,
    "description": "Alta en fibra, mejora el transito intestinal ademas es hidratante y baja en calorias.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Hidratante"
    ],
    "healthBenefit": "Alta en fibra, mejora el transito intestinal ademas es hidratante y baja en calorias.",
    "portions": 1,
    "ingredients": [
      "presentacion und"
    ]
  },
  "banano-x-1-5-kg": {
    "name": "Banano x 1,5 kg",
    "price": 9000,
    "description": "Alto en potasio perfecto para la recuperacion muscular, reduce la fatiga y es fuente rapida de energia.",
    "category": "mercado-fresco",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Alto en potasio perfecto para la recuperacion muscular, reduce la fatiga y es fuente rapida de energia.",
    "observation": "se entregan pintones por racimos pequeños de 1,5 kg",
    "portions": 12,
    "ingredients": [
      "presentacion racimo x 1,5 kg"
    ]
  },
  "limon-libra": {
    "name": "Limón",
    "price": 4900,
    "description": "Es alto en vitamina C, perfecta para proteger el sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es alto en vitamina C, perfecta para proteger el sistema inmune.",
    "portions": 8,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "granadilla": {
    "name": "Granadilla",
    "price": 12900,
    "description": "Rica en fibra, mejora la digestion y es un relajante natural.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva"
    ],
    "healthBenefit": "Rica en fibra, mejora la digestion y es un relajante natural.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "mango-libra": {
    "name": "Mango",
    "price": 3500,
    "description": "Alto en vitamina A y C, mejora el sistema inmune y la piel.",
    "category": "mercado-fresco",
    "benefits": [
      "Sistema inmune"
    ],
    "healthBenefit": "Alto en vitamina A y C, mejora el sistema inmune y la piel.",
    "observation": "",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ],
    "variantes": {
      "maduracion": [
        "verde",
        "pintón",
        "maduro"
      ]
    }
  },
  "coco-libra": {
    "name": "Coco",
    "price": 11500,
    "description": "Son grasas saludables, hidratante y mejora el metabolismo.",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Son grasas saludables, hidratante y mejora el metabolismo.",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "lulo": {
    "name": "Lulo",
    "price": 5900,
    "description": "Muy alto en vitamina C, es antioxidante y refuerza el sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Muy alto en vitamina C, es antioxidante y refuerza el sistema inmune.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "kiwi-libra": {
    "name": "Kiwi",
    "price": 18000,
    "description": "Altisimo en vitamina C, refuerza las defensas y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Vitamina C"
    ],
    "healthBenefit": "Altisimo en vitamina C, refuerza las defensas y mejora la digestion.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "durazno": {
    "name": "Durazno",
    "price": 8900,
    "description": "Es gidratante, y rico en antioxidantes.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Es gidratante, y rico en antioxidantes.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "pitahaya": {
    "name": "Pitahaya",
    "price": 14900,
    "description": "Rica en fibra, regula la digestion y es antioxidante.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Antioxidante",
      "Digestiva"
    ],
    "healthBenefit": "Rica en fibra, regula la digestion y es antioxidante.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "mandarina": {
    "name": "Mandarina",
    "price": 7400,
    "description": "Contiene vitamina C, es hidratante y mejora el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Contiene vitamina C, es hidratante y mejora el sistema inmune",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "fresa-libra": {
    "name": "Fresa",
    "price": 17900,
    "description": "Es un potente antioxidante, mejora la piel y es antiinflamatoria.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es un potente antioxidante, mejora la piel y es antiinflamatoria.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "guayaba-pera": {
    "name": "Guayaba pera",
    "price": 4200,
    "description": "Es muy alta en vitamina C, mejora el sistema inmune y contiene fibra.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es muy alta en vitamina C, mejora el sistema inmune y contiene fibra.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "guayaba-manzana-libra": {
    "name": "Guayaba manzana",
    "price": 6900,
    "description": "Es rica en antioxidantes, mejora la digestion y apoya al sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Sistema inmune"
    ],
    "healthBenefit": "Es rica en antioxidantes, mejora la digestion y apoya al sistema inmune.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "aguacate-hass": {
    "name": "Aguacate hass",
    "price": 7900,
    "description": "Contiene grasas saludables, mejora la salud cardiovascular y aumenta la saciedad.",
    "category": "mercado-fresco",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Contiene grasas saludables, mejora la salud cardiovascular y aumenta la saciedad.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "sandia-baby-libra": {
    "name": "Sandía baby und 1,5 kg",
    "price": 11900,
    "description": "Es hidratacion extrema, es diuretica y refrescante.",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Es hidratacion extrema, es diuretica y refrescante.",
    "observation": "la fruta se entrega entera por unidad y madura",
    "portions": 1,
    "ingredients": [
      "presentacion und x 1,5 kg"
    ]
  },
  "tomate-arbol": {
    "name": "Tomate de árbol",
    "price": 5900,
    "description": "Es alto en antioxidantes, mejora la salud cardiovascular y regula el colesterol.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Es alto en antioxidantes, mejora la salud cardiovascular y regula el colesterol.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "papaya-maradol": {
    "name": "Papaya maradol und 1,5 kg",
    "price": 11900,
    "description": "Contiene enzimas digestivas (papaina) mejora la digestion y es antiinflamatoria.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Contiene enzimas digestivas (papaina) mejora la digestion y es antiinflamatoria.",
    "observation": "",
    "portions": 1,
    "ingredients": [
      "presentacion und x 1,5 kg"
    ]
  },
  "melon-und-1-5-kg": {
    "name": "Melón und 1,5 kg",
    "price": 18500,
    "description": "Es hidratante, ligero y bajo en calorias.",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Es hidratante, ligero y bajo en calorias.",
    "observation": "la fruta se entrega entera por unidad y madura",
    "portions": 1,
    "ingredients": [
      "presentacion und x 1,5 kg"
    ]
  },
  "guanabana-und-2-2-kg": {
    "name": "Guanábana und 2,2 kg",
    "price": 22900,
    "description": "Es un antioxidante potente, refuerza el sistema inmune y es un relajante natural.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Sistema inmune"
    ],
    "healthBenefit": "Es un antioxidante potente, refuerza el sistema inmune y es un relajante natural.",
    "observation": "la fruta se entrega entera por unidad y pintona",
    "portions": 1,
    "ingredients": [
      "presentacion und x 2,2 kg"
    ]
  },
  "mangostino": {
    "name": "Mangostino",
    "price": 28000,
    "description": "Es riquisimo en antioxidantes, antiinflamatorio y mejora el sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria",
      "Sistema inmune"
    ],
    "healthBenefit": "Es riquisimo en antioxidantes, antiinflamatorio y mejora el sistema inmune.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "rambutan": {
    "name": "Rambután",
    "price": 25000,
    "description": "Rico en vitamina C, es energia natural y mejora el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Vitamina C",
      "Energía",
      "Sistema inmune"
    ],
    "healthBenefit": "Rico en vitamina C, es energia natural y mejora el sistema inmune",
    "portions": 8,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "arandanos": {
    "name": "Arándanos x125",
    "price": 16600,
    "description": "Es un potente antioxidante, mejora la memoria y proteje el sistema cardiovascular.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Es un potente antioxidante, mejora la memoria y proteje el sistema cardiovascular.",
    "portions": 1,
    "ingredients": [
      "presentacion x 125 gr"
    ]
  },
  "frambuesa": {
    "name": "Frambuesa x125",
    "price": 32000,
    "description": "Es rica en fibra, antioxidante y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Antioxidante",
      "Digestiva"
    ],
    "healthBenefit": "Es rica en fibra, antioxidante y mejora la digestion.",
    "portions": 1,
    "ingredients": [
      "presentacion x 125 gr"
    ]
  },
  "maracuya": {
    "name": "Maracuyá",
    "price": 5300,
    "description": "Es una paciflora natural, te relaja ademas de que mejora el sueño y es antioxidante.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Es una paciflora natural, te relaja ademas de que mejora el sueño y es antioxidante.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "naranja-libra": {
    "name": "Naranja",
    "price": 2900,
    "description": "Contiene vitamina C, es hidratante y mejora el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Contiene vitamina C, es hidratante y mejora el sistema inmune",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "aguacate-papelillo": {
    "name": "Aguacate papelillo",
    "price": 14500,
    "description": "Es una grasa saludable, te aporta energia sostenida y apoya la salud cardiovascular.",
    "category": "mercado-fresco",
    "benefits": [
      "Energía"
    ],
    "healthBenefit": "Es una grasa saludable, te aporta energia sostenida y apoya la salud cardiovascular.",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "papa-capira": {
    "name": "papa capira",
    "price": 3500,
    "description": "Contiene carbohidratos complejos y es fuente de energia, aporta potasio y te genera saciedad.",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante",
      "Energía"
    ],
    "healthBenefit": "Contiene carbohidratos complejos y es fuente de energia, aporta potasio y te genera saciedad.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "papa-criolla": {
    "name": "papa criolla",
    "price": 5900,
    "description": "Es rica en antioxidantes, contiene energia aun mas limpia y es mas ligera, recomendado para dietas",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Energía"
    ],
    "healthBenefit": "Es rica en antioxidantes, contiene energia aun mas limpia y es mas ligera, recomendado para dietas",
    "portions": 6,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "papa-nevada": {
    "name": "papa nevada",
    "price": 4900,
    "description": "Contiene carbohidratos complejos y es fuente de energia, aporta potasio y te genera saciedad.",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante",
      "Energía"
    ],
    "healthBenefit": "Contiene carbohidratos complejos y es fuente de energia, aporta potasio y te genera saciedad.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "frijol-rojo": {
    "name": "frijol rojo",
    "price": 12900,
    "description": "Es proteina vegetal, alta en fibra y regula el azucar en sangre.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Proteína"
    ],
    "healthBenefit": "Es proteina vegetal, alta en fibra y regula el azucar en sangre.",
    "portions": 5,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "guineo": {
    "name": "guineo",
    "price": 3000,
    "description": "Es fuente de potasio para el mejoramiento de la funcion muscular. es energia rapida y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Energía"
    ],
    "healthBenefit": "Es fuente de potasio para el mejoramiento de la funcion muscular. es energia rapida y mejora la digestion.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "platano": {
    "name": "platano",
    "price": 3800,
    "description": "Es energia sostenida, rico en fibra y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva",
      "Energía"
    ],
    "healthBenefit": "Es energia sostenida, rico en fibra y mejora la digestion.",
    "observation": "",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ],
    "variantes": {
      "maduracion": [
        "verde",
        "pintón",
        "maduro"
      ]
    }
  },
  "yuca-libra": {
    "name": "yuca",
    "price": 3900,
    "description": "Es libre de gluten, contiene energia limpia y es de facil digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Energía"
    ],
    "healthBenefit": "Es libre de gluten, contiene energia limpia y es de facil digestion.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "repollo": {
    "name": "repollo blanco/morado und 1 kg",
    "price": 6900,
    "description": "Es un desintoxicante hepatico, contiene fibra asi que mejora el intestino y el morado contiene mas antioxidantes",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Antioxidante"
    ],
    "healthBenefit": "Es un desintoxicante hepatico, contiene fibra asi que mejora el intestino y el morado contiene mas antioxidantes",
    "observation": "",
    "variantes": {
      "tipo": ["blanco", "morado"]
    },
    "portions": 1,
    "ingredients": [
      "presentacion UND POR KILO"
    ]
  },
  "champinon": {
    "name": "champiñon",
    "price": 31000,
    "description": "Es bajo en calorias, Es fuente de proteina vegetal y refuerza el sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Proteína",
      "Sistema inmune"
    ],
    "healthBenefit": "Es bajo en calorias, Es fuente de proteina vegetal y refuerza el sistema inmune.",
    "observation": "unica presentacion (por libra)",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "orellana": {
    "name": "orellana",
    "price": 34900,
    "description": "Es proteina vegetal, reduce el colesterol y es antiinflamatoria.",
    "category": "mercado-fresco",
    "benefits": [
      "Proteína",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es proteina vegetal, reduce el colesterol y es antiinflamatoria.",
    "observation": "unica presentacion (por libra)",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "tomate-aliño": {
    "name": "tomate de aliño",
    "price": 6800,
    "description": "Es antioxidante, antiinflamatorio y protege el corazon",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es antioxidante, antiinflamatorio y protege el corazon",
    "variantes": {
      "maduracion": ["verde", "pintón", "maduro"]
    },
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "tomate-san-marzano": {
    "name": "tomate san marzano",
    "price": 8600,
    "description": "Contiene mayor concentracion de antioxidantes, mejora la salud celular y refuerza las defensas",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Contiene mayor concentracion de antioxidantes, mejora la salud celular y refuerza las defensas",
    "observation": "se entregan entre pintones y maduros",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "cebolla-blanca": {
    "name": "cebolla blanca",
    "price": 3000,
    "description": "Es antibacteriana, mejora la digestion y apoya al sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Sistema inmune"
    ],
    "healthBenefit": "Es antibacteriana, mejora la digestion y apoya al sistema inmune",
    "observation": "pelada y lavada",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "cebolla-morada": {
    "name": "cebolla morada",
    "price": 5900,
    "description": "Es antiinflamatoria, mejora la circulacion y contiene mayor concentracion de antioxidantes.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es antiinflamatoria, mejora la circulacion y contiene mayor concentracion de antioxidantes.",
    "observation": "pelada y lavada",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "cebolla-larga-libra": {
    "name": "Cebolla larga",
    "price": 5900,
    "description": "Mejora la digestion, refuerza el sistema inmune y es rica en vitamina K",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Sistema inmune"
    ],
    "healthBenefit": "Mejora la digestion, refuerza el sistema inmune y es rica en vitamina K",
    "observation": "limpia y lavada",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "cebollin": {
    "name": "cebollin atado x 200 gr",
    "price": 4900,
    "description": "Es antioxidante, mejora la digestion y refuerza el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Sistema inmune"
    ],
    "healthBenefit": "Es antioxidante, mejora la digestion y refuerza el sistema inmune",
    "portions": 10,
    "ingredients": [
      "presentacion 200 GR"
    ]
  },
  "cebolla-puerro-libra": {
    "name": "cebolla puerro (und libra)",
    "price": 7900,
    "description": "Contiene fibra prebiotica, mejora la microbiota y apoya la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva"
    ],
    "healthBenefit": "Contiene fibra prebiotica, mejora la microbiota y apoya la digestion.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "cebolla-chalota": {
    "name": "cebolla chalota",
    "price": 8900,
    "description": "Es rica en antioxidantes, mejora la circulacion y es antiinflamatoria.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es rica en antioxidantes, mejora la circulacion y es antiinflamatoria.",
    "portions": 6,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "ajo": {
    "name": "ajo 3 und",
    "price": 3600,
    "description": "Es un antibiotico natural, mejora el sistema inmune y reduce la inflamacion.",
    "category": "mercado-fresco",
    "benefits": [
      "Sistema inmune"
    ],
    "healthBenefit": "Es un antibiotico natural, mejora el sistema inmune y reduce la inflamacion.",
    "portions": 10,
    "ingredients": [
      "presentacion 3 und cabezas de ajo"
    ]
  },
  "brocoli-libra": {
    "name": "brocoli",
    "price": 6900,
    "description": "Es anticancerigeno, contiene gran cantidad de fibra y refuerza el sistema inmune, es considerado superalimento.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Sistema inmune"
    ],
    "healthBenefit": "Es anticancerigeno, contiene gran cantidad de fibra y refuerza el sistema inmune, es considerado superalimento.",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "coliflor-libra": {
    "name": "coliflor",
    "price": 7300,
    "description": "Es un desintoxicante hepatico, contiene fibra y regula las hormonas.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra"
    ],
    "healthBenefit": "Es un desintoxicante hepatico, contiene fibra y regula las hormonas.",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "pimenton": {
    "name": "pimenton",
    "price": 6800,
    "description": "Es altisima en vitamina C, antioxidante y mejora el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Vitamina C",
      "Sistema inmune"
    ],
    "healthBenefit": "Es altisima en vitamina C, antioxidante y mejora el sistema inmune",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "zanahoria-libra": {
    "name": "zanahoria",
    "price": 3000,
    "description": "Contiene betacarotenas especial para la piel y la vision. ademas es antioxidante.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Contiene betacarotenas especial para la piel y la vision. ademas es antioxidante.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "habichuela-libra": {
    "name": "habichuela",
    "price": 4800,
    "description": "Contiene fibra, regula el azucar en sangre y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva"
    ],
    "healthBenefit": "Contiene fibra, regula el azucar en sangre y mejora la digestion.",
    "portions": 5,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "lechuga-batavia": {
    "name": "lechuga batavia und de libra",
    "price": 4900,
    "description": "Es hidratante, mejora la digestion y es fibra ligera.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Digestiva",
      "Hidratante"
    ],
    "healthBenefit": "Es hidratante, mejora la digestion y es fibra ligera.",
    "portions": 1,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "lechuga-hidroponica": {
    "name": "lechuga crespa hidroponica und 300 gr",
    "price": 4500,
    "description": "Limpia y ligera, rica en agua y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Limpia y ligera, rica en agua y mejora la digestion.",
    "portions": 1,
    "ingredients": [
      "presentacion und 300 gr"
    ]
  },
  "lechuga-romana": {
    "name": "lechuga romana und",
    "price": 5300,
    "description": "Rica en fibra, mejora la digesion y aporta minerales.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra"
    ],
    "healthBenefit": "Rica en fibra, mejora la digesion y aporta minerales.",
    "portions": 1,
    "ingredients": [
      "presentacion und 300 gr"
    ]
  },
  "cogollo-europeo": {
    "name": "cogollo europeo bandeja",
    "price": 12900,
    "description": "Rica en fibra, mejora la digesion y es hidratante.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Hidratante"
    ],
    "healthBenefit": "Rica en fibra, mejora la digesion y es hidratante.",
    "portions": 3,
    "ingredients": [
      "presentacion bandeja"
    ]
  },
  "zuquini-verde": {
    "name": "zuquini verde",
    "price": 3000,
    "description": "Es bajo en calorias, hidratante y mejora la digestion, especial para dietas ligeras",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Hidratante"
    ],
    "healthBenefit": "Es bajo en calorias, hidratante y mejora la digestion, especial para dietas ligeras",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "zuquini-amarillo": {
    "name": "zuquini amarillo",
    "price": 3000,
    "description": "Es bajo en calorias, hidratante y mejora la digestion, especial para dietas ligeras",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Hidratante"
    ],
    "healthBenefit": "Es bajo en calorias, hidratante y mejora la digestion, especial para dietas ligeras",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "auyama-sacata": {
    "name": "auyama sacata",
    "price": 3000,
    "description": "Es energia limpia, antioxidante y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Energía"
    ],
    "healthBenefit": "Es energia limpia, antioxidante y mejora la digestion.",
    "portions": 1,
    "ingredients": [
      "presentacion und LIBRA"
    ]
  },
  "apio-und-1-5-kg": {
    "name": "apio und 1,5 kg",
    "price": 7000,
    "description": "Es un diuretico natural, desinflama y regula la presion.",
    "category": "mercado-fresco",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Es un diuretico natural, desinflama y regula la presion.",
    "portions": 1,
    "ingredients": [
      "presentacion und por 1,5 kg"
    ]
  },
  "arracacha": {
    "name": "arracacha",
    "price": 6000,
    "description": "Energia de facil digestion, rica en carbohidratos suaves y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Hidratante",
      "Energía"
    ],
    "healthBenefit": "Energia de facil digestion, rica en carbohidratos suaves y mejora la digestion.",
    "portions": 3,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "jengibre": {
    "name": "jengibre",
    "price": 8900,
    "description": "Es antiinflamatorio, refuerza el sistema inmune y mejora la digestion. Este es otro superalimento.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria",
      "Sistema inmune"
    ],
    "healthBenefit": "Es antiinflamatorio, refuerza el sistema inmune y mejora la digestion. Este es otro superalimento.",
    "portions": 5,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "aji-dulce": {
    "name": "aji dulce x 200 gr",
    "price": 3900,
    "description": "Es antioxidante, mejora la digestion y es rico en vitamina C",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Vitamina C"
    ],
    "healthBenefit": "Es antioxidante, mejora la digestion y es rico en vitamina C",
    "portions": 10,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "aji-rocoto": {
    "name": "aji rocotto picante x 200 gr",
    "price": 11900,
    "description": "Activa el metabolismo, mejora la circulacion y es antiinflamatorio",
    "category": "mercado-fresco",
    "benefits": [
      "Antiinflamatoria"
    ],
    "healthBenefit": "Activa el metabolismo, mejora la circulacion y es antiinflamatorio",
    "portions": 6,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "jalapeno": {
    "name": "jalapeño x 200 gr",
    "price": 6900,
    "description": "Activa el metabolismo, mejora la circulacion y es antiinflamatorio",
    "category": "mercado-fresco",
    "benefits": [
      "Antiinflamatoria"
    ],
    "healthBenefit": "Activa el metabolismo, mejora la circulacion y es antiinflamatorio",
    "portions": 8,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "mazorca": {
    "name": "bandeja mazorca",
    "price": 11900,
    "description": "Es energia natural, contiene fibra y genera saciedad.",
    "category": "mercado-fresco",
    "benefits": [
      "Fibra",
      "Energía"
    ],
    "healthBenefit": "Es energia natural, contiene fibra y genera saciedad.",
    "portions": 3,
    "ingredients": [
      "presentacion bandeja 3 und"
    ]
  },
  "perejil-lavado-x-200-gr": {
    "name": "Perejil lavado x 200 gr",
    "price": 4000,
    "description": "Es un desintoxicante natural para los riñones. Es rico en vitamina C y hierro ademas de ser un antiinflamatorio natural.",
    "category": "mercado-fresco",
    "benefits": [
      "Antiinflamatoria",
      "Vitamina C"
    ],
    "healthBenefit": "Es un desintoxicante natural para los riñones. Es rico en vitamina C y hierro ademas de ser un antiinflamatorio natural.",
    "portions": 10,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "berenjena": {
    "name": "berenjena",
    "price": 4600,
    "description": "Es antioxidante, reduce el colesterol y mejora la salud cardiovascular.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Es antioxidante, reduce el colesterol y mejora la salud cardiovascular.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "col-bruselas": {
    "name": "col de bruselas bandeja x 200 gr",
    "price": 12900,
    "description": "Es un antioxidante potente, desintoxica y refuerza el sistema inmune",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Sistema inmune"
    ],
    "healthBenefit": "Es un antioxidante potente, desintoxica y refuerza el sistema inmune",
    "portions": 1,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "esparragos": {
    "name": "esparragos 250 gr",
    "price": 15900,
    "description": "Son diureticos, es un desintoxicante renal y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Son diureticos, es un desintoxicante renal y mejora la digestion.",
    "portions": 3,
    "ingredients": [
      "presentacion 250 gr"
    ]
  },
  "pepino-libra": {
    "name": "pepino",
    "price": 4500,
    "description": "Es altamente hidratante, desinflama y mejora la piel",
    "category": "mercado-fresco",
    "benefits": [
      "Hidratante"
    ],
    "healthBenefit": "Es altamente hidratante, desinflama y mejora la piel",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "remolacha-libra": {
    "name": "remolacha",
    "price": 4500,
    "description": "Mejora la circulacion, aumenta el rendimiento fisico y es un detox hepatico.",
    "category": "mercado-fresco",
    "benefits": [
      "Detox"
    ],
    "healthBenefit": "Mejora la circulacion, aumenta el rendimiento fisico y es un detox hepatico.",
    "portions": 2,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "kale": {
    "name": "kale x 250 gr",
    "price": 4900,
    "description": "Es un superalimento, altamente antioxidante y refuerza el sistema inmune.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Sistema inmune"
    ],
    "healthBenefit": "Es un superalimento, altamente antioxidante y refuerza el sistema inmune.",
    "portions": 3,
    "ingredients": [
      "presentacion 250 gr"
    ]
  },
  "espinaca": {
    "name": "espinaca",
    "price": 6500,
    "description": "Es otro superalimento, rica en herro, mejora la energia y es antioxidante.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Energía"
    ],
    "healthBenefit": "Es otro superalimento, rica en herro, mejora la energia y es antioxidante.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "penca-sabila-und-1-kg": {
    "name": "penca sabila x und 1 kg",
    "price": 5000,
    "description": "Regenera el intestino, es antiinflamatorio y mejora la digestion",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Regenera el intestino, es antiinflamatorio y mejora la digestion",
    "portions": 1,
    "ingredients": [
      "presentacion und por kg"
    ]
  },
  "acelga": {
    "name": "acelga",
    "price": 4600,
    "description": "Rica en minerales, mejora la digestion y es antioxidante",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva"
    ],
    "healthBenefit": "Rica en minerales, mejora la digestion y es antioxidante",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "col-china": {
    "name": "col china",
    "price": 3500,
    "description": "Es ligera, digestiva y rica en antioxidantes.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva"
    ],
    "healthBenefit": "Es ligera, digestiva y rica en antioxidantes.",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "rama-de-hinojo-x-200-gr": {
    "name": "rama de hinojo x 200 gr",
    "price": 9000,
    "description": "Reduce gases estomacales, mejora la digestion y es antiinflamatorio",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Reduce gases estomacales, mejora la digestion y es antiinflamatorio",
    "portions": 5,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "eneldo": {
    "name": "eneldo x 200 gr",
    "price": 9000,
    "description": "Es digestivo, antiinflamatorio y mejora el metabolismo",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es digestivo, antiinflamatorio y mejora el metabolismo",
    "portions": 5,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "menta": {
    "name": "menta x 200 gr",
    "price": 5800,
    "description": "Es refrescante, mejora la digestion y es relajante",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Es refrescante, mejora la digestion y es relajante",
    "portions": 5,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "yerbabuena": {
    "name": "yerbabuena x 200 gr",
    "price": 5000,
    "description": "Es digestiva, relajante y antiinflamatoria",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es digestiva, relajante y antiinflamatoria",
    "portions": 5,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "albahaca": {
    "name": "albahaca x 200 gr",
    "price": 6500,
    "description": "Es antioxidante, antiinflamatoria y mejora la digestion.",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante",
      "Digestiva",
      "Antiinflamatoria"
    ],
    "healthBenefit": "Es antioxidante, antiinflamatoria y mejora la digestion.",
    "portions": 5,
    "ingredients": [
      "presentacion 200 gr"
    ]
  },
  "tomillo": {
    "name": "tomillo x 150 gr",
    "price": 5600,
    "description": "Es antibacteriano, refuerza el sistema inmune y mejora la respiracion.",
    "category": "mercado-fresco",
    "benefits": [
      "Sistema inmune"
    ],
    "healthBenefit": "Es antibacteriano, refuerza el sistema inmune y mejora la respiracion.",
    "portions": 10,
    "ingredients": [
      "presentacion 150 gr"
    ]
  },
  "romero": {
    "name": "romero x 150 gr",
    "price": 4900,
    "description": "Mejora la memoria, es antioxidante, estimula la circulacion",
    "category": "mercado-fresco",
    "benefits": [
      "Antioxidante"
    ],
    "healthBenefit": "Mejora la memoria, es antioxidante, estimula la circulacion",
    "portions": 10,
    "ingredients": [
      "presentacion 150 gr"
    ]
  },
  "rabano-libra": {
    "name": "rabano",
    "price": 5900,
    "description": "Es un desintoxicante hepatico, mejora la digestion y estimula la bilis",
    "category": "mercado-fresco",
    "benefits": [
      "Digestiva"
    ],
    "healthBenefit": "Es un desintoxicante hepatico, mejora la digestion y estimula la bilis",
    "portions": 4,
    "ingredients": [
      "presentacion LIBRA"
    ]
  },
  "combo-1-2": {
    "name": "Combo para 1 y 2 personas",
    "price": 390000,
    "description": "La porcion perfecta para tu mercado saludable quincenal",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "La porcion perfecta para tu mercado saludable quincenal",
    "portions": 84,
    "ingredients": [
      "3 und sopas o cremas",
      "3 und baby bowl fruta x 250 gr (elegibles: todas las frutas PICADAS, berry mix, uva importada y kiwi: max 1 porcion)",
      "3 und baby bowl verduras x 250 gr  (elegibles: todas las verduras PICADAS)",
      "1 und bowl Ensalada Gourmet x450 gr",
      "1 und bowl Ensalada tradicional x 500 gr",
      "6 und frutas de mano (elegibles: manzana roja o verde, pera, mandarina, granadilla, durazno, mangostino:max 1 und)",
      "1 kg aguacate hass",
      "cilantro x200 gr",
      "1 kg papa capira",
      "1 lb papa criolla",
      "1 kg platano",
      "1,5 kg banano",
      "2 cabezas de ajo",
      "1 kg limon tahiti",
      "5 und jugos saludables o six pack de jugo de naranja (TODOS LOS ELEGILES contando el jugo solo puede elegir 1)",
      "2 und mix frutos secos",
      "1 und queso saludable 400 gr"
    ]
  },
  "combo-familiar": {
    "name": "Combo familiar",
    "price": 590000,
    "description": "Un mercado saludable para compartir entre familia y amigos",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Un mercado saludable para compartir entre familia y amigos",
    "portions": 118,
    "ingredients": [
      "5 und sopas o cremas",
      "6 und baby bowl fruta x 250 gr (elegibles: todas las frutas PICADAS, berry mix, uva importada y kiwi max 1)",
      "6 und baby bowl verduras x 250 gr (elegibles: todas las verduras PICADAS)",
      "2 und bowl Ensalada Gourmet x450 gr",
      "2 und bowl Ensalada tradicional x 500 gr",
      "8 und frutas de mano (elegibles: manzana roja o verde, pera, mandarina, granadilla, durazno, mangostino:max1)",
      "1 kg aguacate hass",
      "cilantro x200 gr",
      "2 kg papa capira",
      "1 kg papa criolla",
      "2 kg platano",
      "2 kg banano",
      "3 cabezas de ajo",
      "1 kg limon tahiti",
      "5 und jugos saludables o six pack de jugo de naranja (TODOS LOS ELEGILES contando el jugo solo puede elegir 1)",
      "2 und mix frutos secos x 140 gr",
      "2 und queso saludable 400 gr"
    ]
  },
  "combo-tardes": {
    "name": "Combo tardes",
    "price": 290000,
    "description": "Pensado para convertir tus tardes en tardes saludables y balanceadas",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Pensado para convertir tus tardes en tardes saludables y balanceadas",
    "observation": "en este combo casi todo viene predeterminado a exepcion de la fruta que puede escoger a conveniencia, en esta opcion darle la opcion desplegable tipo rappi para que pueda escoger su fruta deseada",
    "portions": 68,
    "ingredients": [
      "1 lt yogurt griego",
      "2 und baby bowl berry mix x250 gr",
      "2 kg banano",
      "1 frutos secos mix 140 gr",
      "1 almendra 140 gr",
      "1 und baby bowl frutos amarillos",
      "1 und baby bowl kiwi",
      "1 und miel de abejas x 250 gr",
      "1 und mantequilla de mani x 200 gr",
      "1 und avena en hojuelas 150 gr",
      "1 und baby bowl fruta picada 250 gr (elegibles: todas las frutas PICADAS excepto kiwi, frutos amarillos, berry mix; la uva importada elegir max: 1",
      "1 und semillas de calabaza 140 gr"
    ]
  },
  "combo-lonchera": {
    "name": "Combo lonchera niños",
    "price": 280000,
    "description": "Pensado en porciones exactas para niños",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Pensado en porciones exactas para niños",
    "portions": 19,
    "ingredients": [
      "2 mini bowl fruta picada x 200 gr (TODOS LOS ELEGILES menos berry mix y frutos amarillos, el kiwi y la uva importada max:1)",
      "2 mini bowl berry mix x150",
      "2 mini bowl frutos amarillos 200 gr",
      "1 und ensalada mini tradicional 250 gr (TODOS LOS ELEGILES)",
      "1 und ensalada mini gourmet 250 gr (TODOS LOS ELEGILES)",
      "5 und frutos secos mix 50 gr",
      "5 und frutas de mano  (elegibles: manzana roja o verde, pera, mandarina, granadilla, durazno, mangostino:max1)",
      "6 und galletas de avena",
      "5 und barritas de granola"
    ]
  },
  "combo-oficina": {
    "name": "Combo oficina",
    "price": 310000,
    "description": "Pensado en la practicidad y el ajetreo de tu dia a dia en la oficina",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Pensado en la practicidad y el ajetreo de tu dia a dia en la oficina",
    "portions": 21,
    "ingredients": [
      "2 und baby bowl fruta picada x 250 gr (TODOS LOS ELEGILES solo picados, menos berry mix y frutos amarillos, el kiwi y la uva importada elegir max 1)",
      "2 und baby bowl berry mix x 200 gr",
      "2 und baby bowl frutos amarillos x 250 gr",
      "1 und ensalada mini tradicional x 250 gr (TODOS LOS ELEGILES)",
      "1 und ensalada mini gourmet x 250 gr (TODOS LOS ELEGILES)",
      "6 und frutos secos mix 50 gr",
      "6 und frutas de mano  (elegibles: manzana roja o verde, pera, mandarina, granadilla, durazno, mangostino:max1)",
      "6 und galletas de avena",
      "5 und barritas de granola"
    ]
  },
  "combo-mascotas": {
    "name": "Combo mascotas",
    "price": 169000,
    "description": "Tambien hay opiones para tu peludito, balanceado y testeado con productos aptos para el consumo animal.",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Tambien hay opiones para tu peludito, balanceado y testeado con productos aptos para el consumo animal.",
    "observation": "todo esta predeterminado en este combo",
    "portions": 34,
    "ingredients": [
      "2 baby bowl mango maduro x 200 gr",
      "2 mini bowl zanahoria x 200 gr",
      "2 mini bowl apio x 200 gr",
      "1 baby bowl pepino sin semilla x 250 gr",
      "1 baby bowl calabaza cocidax 250 gr",
      "1 baby bowl zuquini sin semilla",
      "2 mini bowl arandanos 125 gr",
      "1 lt kefir"
    ]
  },
  "kit-jugos-saludables-18-und": {
    "name": "Kit jugos saludables 18 und",
    "price": 95900,
    "description": "Un kit completo de jugos saludables que te brindaran los nutrientes escenciales en el dia a dia.",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Un kit completo de jugos saludables que te brindaran los nutrientes escenciales en el dia a dia.",
    "observation": "Opciones despegables de la linea de jugos funcionales",
    "portions": 18,
    "ingredients": [
      "jugo verde detox 150 gr x 5",
      "batido circulacion 150 gr x5",
      "batido detox antiestres 150 gr x 5",
      "jugo de naranja x 3"
    ]
  },
  "kit-jugos": {
    "name": "Kit jugos de fruta 18 und",
    "price": 95900,
    "description": "Un kit completo de jugos de fruta para que nunca te quedes sin opciones saludables en tu sobremesa.",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Un kit completo de jugos de fruta para que nunca te quedes sin opciones saludables en tu sobremesa.",
    "observation": "opciones despegables de las frutas que se pueden hacer tipo jugos: mango, piña, melon maduro, sandia, maracuya, mora, fresa, tomate de arbol, papaya",
    "portions": 18,
    "ingredients": [
      "3 pack batidos de fruta x 5 und 150 gr",
      "jugo de naranja x 3"
    ]
  },
  "kit-ensaladas": {
    "name": "Kit ensaladas tradicional 5 und",
    "price": 110000,
    "description": "Un kit de ensaladas para tu dia a dia",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Un kit de ensaladas para tu dia a dia",
    "observation": "Opcion despegable de todas las ensaladas tradicionales para escoger max 5 und",
    "portions": 15,
    "ingredients": [
      "5 ensaladas tradicionales a elección"
    ]
  },
  "kit-ensaladas-gourmet-5-und": {
    "name": "Kit ensaladas gourmet 5 und",
    "price": 190000,
    "description": "Un kit de ensaladas deliciosas y mas elaboradas para darle un toque mas gourmet a tu semana",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "Un kit de ensaladas deliciosas y mas elaboradas para darle un toque mas gourmet a tu semana",
    "observation": "Opcion despegable de todas las ensaladas gourmet para escoger max 5 und",
    "portions": 15,
    "ingredients": [
      "5 ensaladas gourmet a elección"
    ]
  },
  "kit-sopas-prelistas-5-und": {
    "name": "Kit sopas prelistas 5 und",
    "price": 95900,
    "description": "El kit de sopas que te saca de apuros mientras complementas tus almuerzos",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "El kit de sopas que te saca de apuros mientras complementas tus almuerzos",
    "observation": "Opcion despegable de todas las sopas prelistas para escoger max 5 und",
    "portions": 15,
    "ingredients": [
      "5 sopas prelistas a elección"
    ]
  },
  "kit-vinagretas-3-und": {
    "name": "Kit vinagretas 3 und",
    "price": 75900,
    "description": "¿Que seria de una ensalada sin su vinagreta? con este kit de ensaladas realzaras el sabor de tus comidas.",
    "category": "combos",
    "benefits": [
      "Natural",
      "Fresco"
    ],
    "healthBenefit": "¿Que seria de una ensalada sin su vinagreta? con este kit de ensaladas realzaras el sabor de tus comidas.",
    "observation": "Opcion despegable de todas las salsas y vinagretas para escoger max 3 und",
    "portions": 20,
    "ingredients": [
      "3 vinagretas o salsas a elección"
    ]
  }
};
