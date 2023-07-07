const Capitulo = require('../api/models/capitulo.model');

const mongoose = require('mongoose');

const arrayCapitulos = [
    // One Piece
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "¡Soy Luffy! ¡El hombre que se convertirá en el Rey de los Piratas!",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Luffy empieza su aventura para ser el rey de los piratas y conoce a un tímido joven llamado Koby."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "¡Aparece el gran espadachín! ¡El cazador de piratas, Roronoa Zoro!",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Luffy y Koby llegan a Shell Town, una ciudad que está gobernada por un Marine tirano llamado Morgan, y su hijo Helmeppo."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "¡Morgan vs. Luffy! ¿Quién es esa guapa muchacha?",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Luffy derrota a Morgan y logra reclutar al espadachín Roronoa Zoro para su tripulación."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "¡El pasado de Luffy! ¡Aparece el pelirrojo Shanks!",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Descubrimos el pasado y motivaciones de Luffy para convertirse en pirata."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "¡Teme el misterioso poder! ¡El capitán payaso Buggy!",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Luffy y Zoro llegan a otro pueblo donde se encuentran con el peligroso capitán Buggy."
    },

    // Jujutsu Kaisen
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Sukuna de la Doble Cara",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Yuji Itadori es un estudiante de secundaria. La noche del día que fallece su abuelo, conoce a Megumi, un estudiante de primer año en el Colegio Técnico de Magia Metropolitana de Tokio que se encuentra en una misión para recuperar un objeto que se encuentra en posesión de Itadori."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Por Mí o Por Mí Mismo",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Satoru Gojo, un profesor del Colegio Técnico de Magia Metropolitana de Tokio, se presenta ante Yuji Itadori quien despierta y se encuentra en una habitación extraña donde se llevará a cabo su ejecución secreta."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Chica de Acero",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Yuji Itadori, Megumi Fushiguro y Satoru Gojo se reúnen con la tercera estudiante de primer año del Colegio Técnico de Magia Metropolitana de Tokio, Nobara Kugisaki."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La Existencia Terrenal del Útero Maldito",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Yuji, Megumi y Nobara son enviados a una misión de último momento en el Centro de Detención de Eishu donde deberán identificar y rescatar a todos los sobrevivientes que quedaron atrapados junto a un útero maldito que, eventualmente, podría convertirse en un espíritu maldito de grado especial."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La Existencia Terrenal del Útero Maldito, Parte 2",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Sukuna se apodera del cuerpo de Itadori y se niega por completo a devolvérselo. Aunque sabe que tarde o temprano lo conseguirá, así que le dejará un regalo."
    },

    // Kimetsu no Yaiba
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Crueldad",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Tanjiro es un joven muy trabajador que se esfuerza mucho por cuidar de su madre y sus hermanos, pero cuando volvió de vender carbón, es detenido por un señor que le advierte sobre los Demonios, los cuales aparecen de noche. Al día siguiente, Tanjiro vuelve a su casa y se encuentra una escena inesperada."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El instructor, Sakonji Urokodaki",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Tanjiro y Nezuko continúan su viaje para volver a Nezuko humana. Al llegar a un santuario, Tanjiro lucha contra un demonio que comía los restos de un cadáver, pero cuando se ve acorralado, recibe ayuda de Nezuko y todo esto era observado por un extraño señor con una máscara roja."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Sabito y Makomo",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Tanjiro sigue el duro entrenamiento que le había dejado Sakonji, tras enfrentar una prueba que cree que no puede superar, una chica aparece para aconsejarle sobre la Respiración del Agua y así, se la pasa entrenando por varias semanas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Selección final",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Sakonji felicita a Tanjiro por haber superado su última prueba y le deja participar en la Selección Final, prueba en la cual los Cazadores de Demonios, se enfrentan en campo abierto contra Demonios."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tu acero",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Tanjiro logra superar la Selección Final, este tiene que decidir el material con el cual forjar su espada de Cazador de Demonios, la Nichirin, tras escogerlo, vuelve donde Urokodaki."
    },

    // Chainsaw Man
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Perro y Motosierra",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Denji es un chico que vive como cazador de demonios que, para pagar las deudas dejadas por sus padres, vivió una vida pobre mientras cumplía con las solicitudes de la yakuza, acompañado de Pochita, el Demonio Motosierra."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El lugar donde está Pochita",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Mientras van en el coche, el estómago de Denji gruñe y Makima se ofrece a comprarle algo de comida y como está sin camiseta, también le da su abrigo."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Llegada a Tokyo",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Makima lleva a Denji al Cuartel General de los Cazadores de Demonios de Tokyo y le explica sobre la Seguridad Pública de los Cazadores de Demonios."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Power",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Denji y Aki comienzan a vivir juntos, pero Aki se molesta por el desorden que hace Denji y la cantidad de tiempo que usa el baño. Aki recibe una llamada por la aparición de un hombre-demonio y van a investigar."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Una manera de tocar pechos",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Denji y Power están patrullando, pero Power teniendo sed de sangre, golpea a Denji en la cabeza y le dice que la deje matar algo. Denji la ignora y mientras se pregunta cómo va a encontrar la manera de tocarle las tetas."
    },

    // Shingeki no Kyojin
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "A ti, dentro de 2000 años",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Año 845, la aparición de un Titán Colosal provocó el avance de los titanes regulares hacia el distrito de Shiganshina, por lo que las fuerzas armadas y de reconocimiento no pudieron con ellas causando el exterminio de la mitad de la población en la muralla de María."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Aquel día",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Luego de la gran caída del distrito de Shiganshina en la muralla de María, la humanidad al igual que Eren, Mikasa y su amigo, Armin se dirigen al distrito de Trost en varios barcos para poder sobrevivir, sin embargo, un titán de proporciones inimaginables aparece en la muralla de María para destruir la parte final."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Una tenue luz en la desesperación",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Este episodio muestra las primeras prácticas en el equipo de maniobras tridimensionales de los personajes principales e introduce al resto de los miembros de la tropa de reclutas del ciclo Nº104."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La noche de la desbandada",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Es el gran momento que Eren esperó por tanto tiempo, el día en que su entrenamiento comenzaría. Ahora todos están unidos demostrando sus fuerzas para poder convertirse en soldados."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La primera batalla",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Nuevamente ha aparecido el Titán Colosal, y con él, un nuevo abismo se abre ante los ojos de los habitantes de la muralla. La paz que parecía triunfar se ve derrocada, ahora es cuando todos deberán enfrentarse a sus máximos temores."
    },

    // THE BOYS
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Las reglas del juego",
        "Duracion": 62,
        "Temporada": 1,
        "Descripcion": "Hughie Campbell, vendedor en una tienda de productos audiovisuales, tras ver como un súper mata al amor de su vida, se junta con Billy Carnicero, un vigilante empeñado en castigar a los súpers corruptos."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Cherry",
        "Duracion": 61,
        "Temporada": 1,
        "Descripcion": "The Boys capturan a un superhéroe, Luz Estelar se venga, Patriota se vuelve travieso y un senador se vuelve todavía más travieso."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Moja (El Compuesto V)",
        "Duracion": 58,
        "Temporada": 1,
        "Descripcion": "Es la carrera del siglo. A-Tren y Shockwave compiten por ser el hombre más rápido del mundo. Mientras tanto, The Boys vuelven a reunirse y están mejor que nunca."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La hembra de la especie",
        "Duracion": 59,
        "Temporada": 1,
        "Descripcion": "En un episodio muy especial de The Boys... una hora de vísceras, bolos, aviones secuestrados, locura, fantasmas y una Hembra muy misteriosa."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Bueno para el alma",
        "Duracion": 63,
        "Temporada": 1,
        "Descripcion": "The Boys acuden a la Feria de Fe para seguir una pista prometedora en su guerra contra los súpers. Tal vez haya… TAL VEZ haya un bebé homicida, pero tendréis que verlo por vosotros mismos."
    },

    // Jack Ryan
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Halcón",
        "Duracion": 65,
        "Temporada": 3,
        "Descripcion": "Jack Ryan investiga un plan secreto para restaurar el imperio soviético mediante una guerra."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Viejas guaridas",
        "Duracion": 52,
        "Temporada": 3,
        "Descripcion": "Jack, expuesto y a la fuga después de las consecuencias de su operación fallida en Grecia, debe evitar a las autoridades tanto extranjeras como de su propio país, antes de recibir ayuda de un viejo amigo."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Corriendo con lobos",
        "Duracion": 46,
        "Temporada": 3,
        "Descripcion": "Jack viaja a Viena para rastrear la fuente de su información inicial sobre Sokol. Greer asesora a Alena sobre un acuerdo clave de la OTAN."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El guardián de nuestra muerte",
        "Duracion": 49,
        "Temporada": 3,
        "Descripcion": "En Budapest, Jack y Mike organizan una trampa para un escurridizo traficante de armas. El objetivo es determinar el paradero del arma nuclear de Sokol."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Druz'ya I Vragi",
        "Duracion": 49,
        "Temporada": 3,
        "Descripcion": "Jack y Mike se dirigen a unas instalaciones secretas abandonadas en Rusia para apoderarse del arma nuclear de Sokol, pero un visitante inesperado frustra sus planes."
    },

    // Citadel 
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El enigma humano",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "En el primer capítulo, Mason Kane y Nadia Sinh, los mejores agentes de la agencia Citadel, se enfrentan a Manticore, una nueva e infame organización, y todo acaba en catástrofe."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Los espías aparecen por la noche",
        "Duracion": 40,
        "Temporada": 1,
        "Descripcion": "Kyle y Bernard viajan a Nueva York para robar el maletín X de la sede de Manticore antes de que sea demasiado tarde."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Sombras infinitas",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Cuando Kyle y Nadia llegan a un antiguo refugio, empiezan a resurgir pequeñas pistas sobre su pasado común. Pronto, descubren que un antiguo aliado que puede ser clave para frenar a Manticore está preso en Marruecos."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Cuéntaselo todo",
        "Duracion": 39,
        "Temporada": 1,
        "Descripcion": "Tras la impactante revelación sobre la antigua identidad secreta de Abby, conocemos los antiguos vínculos entre Mason, Nadia y Celeste y una terrible decisión cuyos ecos aún resuenan."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El tiempo nos vuelve enemigos",
        "Duracion": 39,
        "Temporada": 1,
        "Descripcion": "Nadia, Kyle y Carter se ven obligados a colaborar para escapar de Manticore y proteger el maletín X, pero las sospechas que se ciernen sobre uno de nuestros héroes llegan a su punto álgido, culminando en un desenlace explosivo."
    },

    // Reacher
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Bienvenido a Margrave",
        "Duracion": 54,
        "Temporada": 1,
        "Descripcion": "A Reacher lo acusan por error de asesinato mientras visita el pequeño pueblo de Margrave, Georgia."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El primer baile",
        "Duracion": 53,
        "Temporada": 1,
        "Descripcion": "Cuando aparecen más víctimas, Reacher intenta obtener respuestas, pero le tienden una trampa. Roscoe recibe una amenaza."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Una cucharada",
        "Duracion": 48,
        "Temporada": 1,
        "Descripcion": "La investigación de Reacher y Finlay sobre el desaparecido Spivey provoca un enfrentamiento con Kliner padre. Roscoe descubre datos inquietantes sobre Reacher."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "En un árbol",
        "Duracion": 47,
        "Temporada": 1,
        "Descripcion": "A medida que aumenta el peligro, Reacher y Roscoe estrechan su lazo y planean reunirse con su contacto en Seguridad Nacional."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Sin disculpas",
        "Duracion": 49,
        "Temporada": 1,
        "Descripcion": "A medida que el misterio se agranda, Reacher recurre a una antigua colega y Finlay hace un descubrimiento impactante."
    },

    // Vis a Vis
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Un mal día",
        "Duracion": 73,
        "Temporada": 1,
        "Descripcion": "Macarena recibe las amenazas de Zulema: la egipcia quiere evitar que la nueva cuente que ambas fueron las últimas en ver con vida a la presa asesinada."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Cosiendo a campanilla",
        "Duracion": 70,
        "Temporada": 1,
        "Descripcion": "Macarena parece no haber aprendido que si pides favores en la cárcel, tarde o temprano los tendrás que pagar."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Lo que sucede, conviene",
        "Duracion": 74,
        "Temporada": 1,
        "Descripcion": "Zulema tiene muy claro cómo fugarse, pero para ello necesita mucho dinero. Piensa que Macarena tiene los nueve millones de Yolanda y no duda en hacer un trato con la novata."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Un día de campo",
        "Duracion": 70,
        "Temporada": 1,
        "Descripcion": "¿Qué ha ocurrido? ¿Por qué Macarena va sin esposas? ¿Por qué lleva una pistola en la mano? ¿Por qué está llena de sangre? Parece que finalmente van a conceder el tercer grado a Rizos."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La cruda realidad",
        "Duracion": 78,
        "Temporada": 1,
        "Descripcion": "La directora está convencida de que a Tere le han estado vendiendo heroína y que la responsable es Anabel. Macarena recibe la visita de sus padres y les confiesa que van a ser abuelos."
    },

    // The Office
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Pilot",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Michael intenta ahorrarle un disgusto a los empleados callándose la noticia de una posible reducción de plantilla y lo único que conseguirá es ponerles aún más nerviosos cuando éstos se enteren."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El día de la diversidad",
        "Duracion": 22,
        "Temporada": 1,
        "Descripcion": "El ofensivo comportamiento de Michael lleva a la empresa a organizar un seminario sobre tolerancia racial y diversidad."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El seguro médico",
        "Duracion": 22,
        "Temporada": 1,
        "Descripcion": "Cuando se vea obligado a elegir un seguro médico más barato, Michael le pasará la responsabilidad a Dwight, antes que perder popularidad entre sus empleados."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El pacto",
        "Duracion": 22,
        "Temporada": 1,
        "Descripcion": "En medio de los rumores sobre la reducción de la plantilla, Michael trata de levantar la moral de los empleados con una fiesta de cumpleaños, aunque nadie cumple años."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Baloncesto",
        "Duracion": 22,
        "Temporada": 1,
        "Descripcion": "Michael y compañía juegan un poco amistoso partido de baloncesto contra los empleados del almacén. Rezumando seguridad, Michael hace una apuesta: el equipo perdedor tendrá que trabajar el sábado."
    },

    // Plats bruts
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tengo piso",
        "Duracion": 29,
        "Temporada": 1,
        "Descripcion": "Josep López es locutor de radio en una emisora local. A sus treinta y cuatro años se da cuenta de que debe independizarse y empieza a buscarse un piso."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tengo miedo",
        "Duracion": 24,
        "Temporada": 1,
        "Descripcion": "David y López se enteran de que a Emma le dan miedo las películas de terror y deciden aprovecharse. Esa noche, Emma va a quedarse a dormir en su piso y ellos traman un plan para hacer un trío con ella creyendo que ella aceptará a la primera."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tengo envidia",
        "Duracion": 30,
        "Temporada": 1,
        "Descripcion": "Un nuevo becario llega a la radio en la que trabaja López. Es un chico que no acaba de funcionar; López intenta ayudarle pero lo único que consigue es que el chico se aproveche de él."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tengo una edad",
        "Duracion": 25,
        "Temporada": 1,
        "Descripcion": "López quiere celebrar su cumpleaños con una gran fiesta pero David cree que ya es demasiado viejo para esas cosas. Los treinta y cinco ya no se celebran con una fiesta, mejor ir al balneario."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tengo dudas",
        "Duracion": 25,
        "Temporada": 1,
        "Descripcion": "Pol, que está absolutamente convencido de ser homosexual, se enrolla con Emma y supone que no por eso dejará de serlo."
    },

    // The good place
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Todo va bien",
        "Duracion": 24,
        "Temporada": 1,
        "Descripcion": "Eleanor se da cuenta de que la han confundido por otra persona cuando muere y acaba en un paraíso del más allá reservado para gente con gran sentido ético."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Volar",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Eleanor quiere que Chidi le enseñe a ser una buena persona, así que este le sugiere participar en una limpieza vecinal en lugar de aprender a volar."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tahani Al-Jamil",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Eleanor cree que Tahani conoce su secreto. Michael intenta que Chidi empiece a practicar un nuevo hobby."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Jason Mendoza",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Eleanor entabla amistad con otro residente que esconde un secreto. Tahani prepara un evento para la inauguración de un nuevo restaurante."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Crisis del Juicio Final de emergencia categoría 55",
        "Duracion": 23,
        "Temporada": 1,
        "Descripcion": "Chidi está agotado de pasar tanto tiempo enseñando a Eleanor. Tahani husmea un poco y no le gusta lo que encuentra."
    },

    // Aqui no hay quien viva
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Érase una mudanza",
        "Duracion": 48,
        "Temporada": 1,
        "Descripcion": "Roberto y Lucía se están mudando ilusionados a un edificio, pero en su primer día nada les sale como habían pensado."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Érase una reforma",
        "Duracion": 49,
        "Temporada": 1,
        "Descripcion": "Roberto y Lucía ya están instalados en el edificio y se disponen a hacer unas reformas en el piso. Los ruidos que provocan los obreros molestan a todos los vecinos, que deciden poner una queja formal ante Juan, el presidente."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Érase El Reciclaje",
        "Duracion": 52,
        "Temporada": 1,
        "Descripcion": "Juan termina renunciando a su cargo como presidente de la comunidad, por lo que automáticamente pasa a ejercer Lucía. En sus primeros días descubre que todo es un desastre y que para arreglar las cosas habría que subir la cuota mensual."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Érase un rumor",
        "Duracion": 50,
        "Temporada": 1,
        "Descripcion": "En la comunidad se corre el rumor de que Alicia y Belén son prostitutas. Esto provoca diversas reacciones en el vecindario, que se moviliza en masa para comprobar si es cierto."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Érase un niño",
        "Duracion": 59,
        "Temporada": 1,
        "Descripcion": "Alguien deja abandonado a un bebé en el portal de la comunidad, provocando que algunos vecinos con vocación de madre se lo disputen."
    },

    // This is US
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Piloto",
        "Duracion": 45,
        "Temporada": 1,
        "Descripcion": "En el primer episodio de esta comedia dramática, varias personas cuyas vidas están misteriosamente entrelazadas comienzan a descubrir peculiares coincidencias entre ellas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Los Súper Tres",
        "Duracion": 44,
        "Temporada": 1,
        "Descripcion": "Kate está luchando mucho para deshacerse de esos kilos que quiere perder y tiene que lidiar con su impaciencia y falta de motivación."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Kyle",
        "Duracion": 44,
        "Temporada": 1,
        "Descripcion": "Rebecca hace una visita sorpresa a la casa de Randall, donde se encuentra con su padre biológico, William. Kevin, muy nervioso, decide lanzarse y mudarse a Nueva York para buscar un trabajo en Broadway."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La Piscina",
        "Duracion": 44,
        "Temporada": 1,
        "Descripcion": "Rebecca y Jack llevan a Kevin, Kate y Randall a la piscina comunitaria un día de mucho calor, y se darán cuenta enseguida de que cada niño está pasando por algo."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "El Gran Plan",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Rebecca y Jack discuten el tema de empezar una familia. Se revela la historia familiar que hay detrás del gran amor por los Pittsburgh Steelers."
    },

    // Merlí
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Los peripatéticos",
        "Duracion": 54,
        "Temporada": 1,
        "Descripcion": "Merlí, el nuevo profesor del instituto, causa una fuerte impresión a sus recién estrenados compañeros y alumnos, entre los que se encuentra Bruno, su hijo de 16 años."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Platón",
        "Duracion": 50,
        "Temporada": 1,
        "Descripcion": "Merlí anima a sus estudiantes a escribir poesía y visita en su casa a Iván, un estudiante que sufre de agorafobia."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Maquiavelo",
        "Duracion": 50,
        "Temporada": 1,
        "Descripcion": "Merlí recibe una visita de la madre de Gerard. Bruno cree que Eugeni no le califica como merece por ser el hijo de Merlí."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Aristóteles",
        "Duracion": 45,
        "Temporada": 1,
        "Descripcion": "Durante una noche de estudio, Pol empieza a sospechar de Bruno. Eugeni acusa a Bruno y a Pol de copiar en un examen. Joan quiere que Merlí le hable de la justicia."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Sócrates",
        "Duracion": 49,
        "Temporada": 1,
        "Descripcion": "El padre de Joan cree que Merlí está lavándole el cerebro a su hijo. Bruno consuela a Tània, triste por la traición de una amiga. Merlí obliga a Iván a salir a la calle."
    },

    // Crónicas vampíricas
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Piloto",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "Cuatro meses después del terrible accidente que mató a sus padres, Elena Gilbert, una adolescente de 17 años, y su hermano menor, Jeremy, siguen intentando salir adelante en sus vidas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "La noche del cometa",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "Mystic Falls comienza con las preparaciones para celebrar el paso de un cometa. Mientras Vicki se recupera en el hospital de sus heridas causadas por un vampiro, Stefan usa sus habilidades para borrar de la memoria de Vicki a su atacante."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Mordeduras de la noche de viernes",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "Bonnie tiene un mal presentimiento sobre Stefan, así que Elena decide invitar a Stefan y Bonnie a cenar y así pueden conocerse mejor."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Lazos de familia",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "Aparece Logan, un guapo personaje que comparte una historia con la tía Jenna, y es reportero. Viene con la esperanza de arreglar las cosas con ella."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Para mi si estas muerto",
        "Duracion": 41,
        "Temporada": 1,
        "Descripcion": "En este episodio, Damon permanece encerrado en el sótano muy débil por la verbena. Mientras Damon se hace más débil, la relación entre Jeremy y Vicki crece."
    },

    // The good doctor
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Comida Quemada",
        "Duracion": 44,
        "Temporada": 1,
        "Descripcion": "Un joven cirujano con autismo y síndrome de savant se traslada de Wyoming a California para completar su formación médica y confía en sus extraordinarias habilidades para refutar el escepticismo de sus colegas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Monte Rushmore",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Cuando los prejuicios sobre su autismo obligan a Shaun a mantenerse al margen en el St. Bonaventure, sus colegas no dudan en atribuirse el mérito de sus ideas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Oliver",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "Shaun y Claire improvisan para mantener conservado un hígado para un trasplante. Andrews se ve obligado a hacer una operación rutinaria a un adinerado paciente junto a Melendez."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Tuberías",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Melendez decide tomar un riesgo para salvar a una embarazada y a su hijo, lo que pone al hospital en un peligro legal. Shaun se esfuerza en adaptarse a su nueva vida."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Cero Come Tres Por Ciento",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Shaun crea lazos con un joven paciente y sospecha que ha sido diagnosticado erróneamente con un tipo de cáncer cerebral terminal."
    },

    // El internado
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Los monstruos no hacen cosquillas",
        "Duracion": 69,
        "Temporada": 1,
        "Descripcion": "La llegada de María, la nueva limpiadora, al internado La Laguna Negra, tras haberse escapado de un psiquiátrico trastornará la apacible vida de Héctor, el carismático director del colegio, que forma pareja, hasta entonces perfecta, con Elsa, la estricta jefa de estudios."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Todo el mundo tiene un secreto",
        "Duracion": 69,
        "Temporada": 1,
        "Descripcion": "María trata por todos los medios de conseguir las fichas médicas de los alumnos del internado. Su hijo tiene un grupo sanguíneo muy raro y los historiales despejarían todas las dudas. Sin embargo, algo va a cruzarse en su camino."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Ojos que no ven",
        "Duracion": 68,
        "Temporada": 1,
        "Descripcion": "Marcos descubre una entrada secreta en el armario de Alfonso que les conduce al desván. Allí, los chicos hacen un macabro hallazgo; unos ojos conservados en formol."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Un mensaje en una botella",
        "Duracion": 69,
        "Temporada": 1,
        "Descripcion": "Carolina se hace pasar por Alfonso y manda un correo electrónico a Ricardo Montoya, con el que queda en el cementerio. El periodista explica a los chicos la desaparición, en los años 70, de los cinco pequeños huérfanos y les advierte del enorme peligro que corren si continúan con la investigación."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Un cadáver en la laguna",
        "Duracion": 76,
        "Temporada": 1,
        "Descripcion": "Héctor descubre en la laguna el cadáver despedazado del periodista Ricardo Montoya. Los chicos, tras recuperarse del shock inicial, se dan cuenta de que han perdido la única prueba que tenían de la muerte de los cinco huérfanos."
    },

    // Supernatural
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Piloto",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Dos hermanos, Sam y Dean Winchester, presencian de niños la muerte paranormal de su madre y crecen siendo entrenados para pelear por un angustiado padre que no busca otra cosa que cazar aquello que mató a su esposa."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Wendigo",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "Sam y Dean siguen las coordenadas del diario de su padre y desembarcan en medio del bosque de Colorado. Allí investigan la desaparición de varios campistas."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Muerto en el agua",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "En un pequeño pueblo de Wisconsin, Sam y Dean investigan una serie de misteriosos ahogamientos oficialmente considerados como suicidios."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Viajero Fantasma",
        "Duracion": 42,
        "Temporada": 1,
        "Descripcion": "En el vuelo Transnacional 2485, un hombre poseído por el espíritu del Fantasma Viajero hace estrellar el avión dejando solo cinco supervivientes."
    },
    {
        "Icono": "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre": "Bloody Mary",
        "Duracion": 43,
        "Temporada": 1,
        "Descripcion": "En las afueras de Nebraska, varios adolescentes fiesteros del instituto, haciendo una broma, retan a su amigo Charlie a mirar a un espejo y repetir: Bloody Mary, Bloody Mary, Bloody Mary."
    },
    //La casa del dragon
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Los herederos del Dragón",
        "Duracion" : 65,
        "Temporada" : 1,
        "Descripcion" : "Viserys prepara un torneo para celebrar el nacimiento de su segundo hijo. Rhaenyra le da la bienvenida a su tío Daemon cuando vuelve a la Fortaleza Roja"
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El Príncipe Canalla",
         "Duracion" : 53,
         "Temporada" : 1,
         "Descripcion" : "Rhaenyra se excede en el Consejo Privado. Viserys debe afianzar la sucesión mediante el matrimonio. Daemon anuncia sus intenciones"
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El segundo de su nombre",
         "Duracion" : 63,
         "Temporada" : 1,
         "Descripcion" : "Daemon y la Serpiente Marina se enfrentan al Benefactor de los Cangrejos. El reino celebra la segunda onomástica de Aegon. Rhaenyra afronta la posibilidad de casarse."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El rey del mar Angosto",
         "Duracion" : 62,
         "Temporada" : 1,
         "Descripcion" : "Rhaenyra vuelve pronto de su viaje por Poniente. Daemon lleva a la princesa a visitar la calle de la Seda al anochecer"
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Iluminamos el camino",
         "Duracion" : 59,
         "Temporada" : 1,
         "Descripcion" : "Daemon visita a su esposa. Viserys y Rhaenyra negocian acuerdos con los Velaryons. Alicent investiga la verdad sobre la princesa."
     },
//El señor de los anillos
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Una sombra del pasado",
        "Duracion" : 65,
        "Temporada" : 1,
        "Descripcion" : "Estreno de la serie. Galadriel está inquieta por los indicios del regreso de un mal ancestral. Arondir hace un descubrimiento preocupante. A Elrond le plantean un nuevo y enigmático encargo. Nori infringe la regla más inconmovible de la comunidad de los Pelosos."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "A la deriva",
        "Duracion" : 67,
        "Temporada" : 1,
        "Descripcion" : "Galadriel encuentra un nuevo aliado. Elrond recibe una fría bienvenida por parte de un viejo amigo. Nori intenta ayudar a un extraño. Arondir busca respuestas mientras Bronwyn advierte a su pueblo de una amenaza."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Adar",
        "Duracion" : 69,
        "Temporada" : 1,
        "Descripcion" : "Arondir es capturado. Galadriel y Halbrand exploran un reino legendario. A Elendil le encargan una nueva misión. Nori afronta las consecuencias."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "La gran ola",
        "Duracion" : 42,
        "Temporada" : 1,
        "Descripcion" : "La fe de la reina regente Míriel es puesta a prueba. Isildur se halla en una encrucijada. Elrond revela un secreto. Arondir recibe un ultimátum. Theo desobedece a Bronwyn."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Separaciones",
        "Duracion" : 41,
        "Temporada" : 1,
        "Descripcion" : "Nori duda de su intuición. Elrond se esfuerza por cumplir su juramento. Halbrand sopesa su destino. Los sureños se preparan para el ataque."
    },
//Carnival Row
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Lucha o huye",
         "Duracion" : 59,
         "Temporada" : 2,
         "Descripcion" : "Los amantes Philo y Vignette arriesgan sus vidas para ayudar a las hadas oprimidas de Carnival Row."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "La Nueva Era",
         "Duracion" : 60,
         "Temporada" : 2,
         "Descripcion" : "Cuando Philo planea amenazar el derecho hereditario de Jonah a la cancillería, Vignette interviene."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "La mano del Mártir",
         "Duracion" : 48,
         "Temporada" : 2,
         "Descripcion" : "Cuando Philo investiga los asesinatos de los líderes del Cuervo Negro, Vignette trama una venganza."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "La crueldad del Cuervo",
         "Duracion" : 52,
         "Temporada" : 2,
         "Descripcion" : "Philo se apresura a detener la venganza de Vignette antes de que el Cuervo Negro desate una violencia aún peor."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Ajuste de cuentas",
         "Duracion" : 55,
         "Temporada" : 2,
         "Descripcion" : "Philo planea el rescate de Vignette con un aliado inesperado. Jonah descubre la traición de Sophie. El asesino ataca de nuevo."
     },
//The Expanse
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Dulcinea",
        "Duracion" : 48,
        "Temporada" : 1,
        "Descripcion" : "En el cinturón de asteroides cerca de Saturno, James Holden y la tripulación del carguero de hielo Canterbury, camino a la estación de Ceres, investigan una llamada de socorro de una nave abandonada desconocida, el Scopuli."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "El gran vacío",
        "Duracion" : 43,
        "Temporada" : 1,
        "Descripcion" : "Holden y su tripulación luchan por sobrevivir en un transbordador muy dañado, Knight. En la estación de Ceres, Julie Mao resulta más difícil de rastrear de lo que Miller había pensado tras descubrir que tiene vínculos con la Alianza de Planetas Externos, un grupo político extremista que lucha por los derechos de las colonias del cinturón de asteroides."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Recordad el Cant",
        "Duracion" : 43,
        "Temporada" : 1,
        "Descripcion" : "Holden y su tripulación caen prisioneros y son interrogados a bordo del buque insignia de la Marina de Marte, el Donnager. No tardarán mucho tiempo en pelearse entre ellos."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "CQB",
        "Duracion" : 45,
        "Temporada" : 1,
        "Descripcion" : "Holden y su tripulación se ven atrapados en medio de una batalla desesperada cuando las misteriosas naves de guerra atacan y abordan el Donnager."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "De vuelta al carnicero",
        "Duracion" : 43,
        "Temporada" : 1,
        "Descripcion" : "Holden y su tripulación hacen un trato con un dudoso aliado en la estación de Tycho."
    },
//Los Protegidos
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "¿Y ahora qué?",
        "Duracion" : 89,
        "Temporada" : 1,
        "Descripcion" : "Jimena, una madre normal, se despierta en una pesadilla y es testigo de cómo secuestran a su hija. Sin entender lo que está pasando, su vida se hace pedazos y recorre la ciudad en busca de su pequeña. Pero la policía sólo le da negativas y desesperanza… hasta que conoce a Silvestre, quien sabe por qué han secuestrado a su hija y que hay más niños que están en peligro, más personas especiales."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Ya vienen los Reyes",
        "Duracion" : 70,
        "Temporada" : 1,
        "Descripcion" : "Es la mañana de reyes, pero “los protegidos” no tienen regalos… aunque ese es el menor de sus problemas. Su vecina y casera, Rosa, ha conseguido que admitan a los niños en el colegio, y eso supone, entre otras cosas, que tendrán que crearse identidades falsas… y falsificar documentos. Jimena está dispuesto a intentarlo, pero Mario piensa que es una locura que lo puede mandar a la cárcel."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "Los niños no dicen mentiras",
        "Duracion" : 73,
        "Temporada" : 1,
        "Descripcion" : "La llegada de Silvestre a la casa de la familia Castillo no ha sido una grata sorpresa para todos. Lucía intuyó desde el principio que algo iba mal y advierte a su nueva familia que el hombre que se hace llamar Silvestre y dice ser su padre, no lo es en realidad. La identidad del nuevo inquilino se descubre y moviliza a todos los miembros de la casa."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "El robo",
        "Duracion" : 71,
        "Temporada" : 1,
        "Descripcion" : "La familia Castillo continúa su vida “normal” y Lucas, se adapta al día a día. El presunto sobrino comienza su primer día de colegio. Sin embargo, a pesar de ser un chico muy especial, sus compañeros de clase ven en él el blanco de todas sus burlas y lo que podría ser un día normal se convierte en una pesadilla para Lucas."
    },
    {
        "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
        "Nombre" : "El piñatón",
        "Duracion" : 76,
        "Temporada" : 1,
        "Descripcion" : "La familia Castillo intenta pasar desapercibida y su secretismo contagia a todos. Así que cuando Lucía y Carlitos se enteran de que en el colegio se va a celebrar un festival de integración social entre padres e hijos, deciden resignarse y no hacerse ilusiones. Pero Mario no está dispuesto a esconder a sus hijos como si fuesen delincuentes y, sin pensárselo dos veces, decide apuntarse."
    },
 //Fear the Walking Dead
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Piloto",
         "Duracion" : 64,
         "Temporada" : 1,
         "Descripcion" : "Una familia disfuncional y fracturada se ve obligada a unirse, al enterarse de que un supuesto virus es, en realidad, el comienzo del apocalipsis zombi."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Tan cerca, pero tan lejos",
         "Duracion" : 43,
         "Temporada" : 1,
         "Descripcion" : "Mientras Madison intenta a ayudar a Nick a soportar la abstinencia, Travis se aventura a salir a buscar a su hijo, antes de que la ciudad de Los Ángeles se colapse."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El perro",
         "Duracion" : 48,
         "Temporada" : 1,
         "Descripcion" : "Tras escapar de una violenta protesta, Travis, Liza y Chris buscan refugio en el local de la familia Salazar. Mientras, Madison defiende su casa."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "No te desvanezcas",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "Madison y Travis ven las dos caras de la ocupación militar de su vecindario, mientras la familia intenta adaptarse al nuevo mundo."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Cobalto",
         "Duracion" : 45,
         "Temporada" : 1,
         "Descripcion" : "Se desvelan los planes del ejército para el vecindario y sus residentes, lo que obliga a Travis y a Madison a tomar una decisión difícil."
     },
 //The Purge
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "¿Qué es América?",
         "Duracion" : 51,
         "Temporada" : 1,
         "Descripcion" : "Una vez al año, por un período de 12 horas, cualquier tipo de crimen es legal en Estados Unidos. Hasta el asesinato."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Coged lo que es vuestro",
         "Duracion" : 42,
         "Temporada" : 1,
         "Descripcion" : "Jane reflexiona acerca de la moralidad de la Purga. Miguel busca de Pete el policía."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "La necesidad de purgar",
         "Duracion" : 41,
         "Temporada" : 1,
         "Descripcion" : "Penelope se prepara para su sacrificio. Rick y Jenna evalúan los costes para cerrar el negocio."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Liberad a la bestia",
         "Duracion" : 41,
         "Temporada" : 1,
         "Descripcion" : "Jane debe salir de la oficina. Lila consuela a Jenna. Penelope es lanzada a la Feria de la sangre."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Alzaos",
         "Duracion" : 41,
         "Temporada" : 1,
         "Descripcion" : "Catalina advierte a Jenna. Henry atormenta a Penelope. Jane va a dar una vuelta con las Matronas Santas."
     },
 //Se lo que hicisteis el ultimo verano
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Es jueves",
         "Duracion" : 50,
         "Temporada" : 1,
         "Descripcion" : "Lennon Grant regresa a casa después de su primer año en la universidad y descubre que alguien conoce el terrible secreto que ella y su pandilla de amigos juraron guardar el verano pasado."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "No es solo para mierda de perro",
         "Duracion" : 0,
         "Temporada" : 1,
         "Descripcion" : "Tras tiempo separados, los amigos se reúnen para tratar de averiguar quién podría haber revelado su secreto o quién más sabe lo que hicieron, y ello acaba en un asesinato."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Una cabeza de gorila no sirve",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "Incapaces de acudir a las autoridades sin revelar su secreto, los miembros de la pandilla deben resolver el misterio por su cuenta. Aparecen más cuerpos, mientras comprenden que están siendo incansablemente perseguidos."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Ensalada de gambas caliente",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "Lennon descubre secretos sobre su gemela y comienza a temer lo peor sobre la verdadera identidad de la persona que asesina a sus amigos. La comunidad local está conmocionada por los asesinatos."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Mukbang",
         "Duracion" : 44,
         "Temporada" : 1,
         "Descripcion" : "La policía interroga a todos los habitantes de la ciudad que tengan alguna relación con las víctimas. La pandilla cree saber quién los persigue y busca pruebas que impliquen a una persona loca de la ciudad."
     },
 //Peaky Blinders
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Episodio 1",
         "Duracion" : 57,
         "Temporada" : 1,
         "Descripcion" : "Thomas Shelby, líder de los Peaky Blinders, se adueña de un cargamento de armas de la fábrica local. Consciente de que mantener las armas puede causarle problemas con la Ley, Thomas quiere usarlas para aumentar el poder de su banda y, por ello, ignora las súplicas de su tia Polly para deshacerse de las mismas."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Episodio 2",
         "Duracion" : 58,
         "Temporada" : 1,
         "Descripcion" : "Thomas Shelby intentará trabajar con Billy Kimber, el hombre que puede ayudarlo a conseguir llevar un negocio de carreras de caballos legalmente. Para poder hacerlo, genera un conflicto con los Lees, una familia gitana que ha estado robando dinero de los apostadores de Kimber. Por otra parte, Polly se preocupa al enterarse del embarazo de Ada porqué sabe que a Thomas no le va a gustar."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Episodio 3",
         "Duracion" : 55,
         "Temporada" : 1,
         "Descripcion" : "Thomas Shelby planea ir a las carreras de Cheltenham con la finalidad de estar más cerca de Billy Kimber. Conociendo el apetito del gángster por las mujeres hermosas, Thomas decide invitar a Grace al evento."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Episodio 4",
         "Duracion" : 58,
         "Temporada" : 1,
         "Descripcion" : "La guerra de Thomas Shelby contra la familia Lee se intensifica y Campbell cada vez le mete más presión para que entregue las armas robadas. Mientras tanto, el hermano de Thomas, John, quiere casarse con una ex prostituta pero Thomas sospecha que aún sigue en activo..."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Episodio 5",
         "Duracion" : 56,
         "Temporada" : 1,
         "Descripcion" : "Thomas Shelby tiene que lidiar con un jefe del IRA que ha venido a Small Heath para vengar la muerte de su primo. Mientras tanto, Campbell se acerca cada vez más a las armas robadas y Grace tiene que decidir de qué bando está: con él o con Thomas."
     },
 //The Walking Dead: World Beyond 
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Valor",
         "Duracion" : 53,
         "Temporada" : 1,
         "Descripcion" : "Iris da la bienvenida a su comunidad a un misterioso aliado, mientras Hope se cuestiona los verdaderos motivos de los visitantes. Un mensaje pondrá del revés la concepción del mundo de las hermanas y las ogbligará a decidir entre la seguridad de sus hogares y la incertidumbre de un mundo más allá de los muros."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "La Pira de la Desesperanza",
         "Duracion" : 47,
         "Temporada" : 1,
         "Descripcion" : "El grupo se adapta a la realidad de la vida más allá de los muros de su comunidad. Iris intenta tomar el mando, a pesar de las objeciones de Hope. Felix y Huck siguen el rastro de los adolescentes, mientras Felix se ve forzado a enfrentarse a recuerdos no deseados."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El Tigre y el Cordero",
         "Duracion" : 47,
         "Temporada" : 1,
         "Descripcion" : "Marcados por su pasado, los miembros del grupo adoptan diferentes estrategias para lidiar con un gran obstáculo. El grupo se ve presionado a volver a casa."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El lado equivocado de un telescopio",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "El grupo se refugia de una tormenta dentro de un instituto abandonado. Mientras se reabastecen, se imaginan cómo era la vida de instituto y se enfrentan a nuevas amenazas, tanto vivas como muertas."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Surcando las aguas",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "Mientras el grupo trabaja codo con codo para cruzar el río Mississippi, un complot para que los adolescentes vuelvan a casa sufre un inconveniente. Un miembro del grupo debe superar un trauma del pasado para salvar a los demás de una amenaza inminente."
     },
 //Sexo/Vida
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "The Wives Are in Connecticut",
         "Duracion" : 44,
         "Temporada" : 1,
         "Descripcion" : "Billie, que se siente frustrada por el declive de la pasión en su matrimonio, empieza a escribir un diario sobre sus salvajes hazañas eróticas con su exnovio Brad."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Drown in the Tube Station at Midnight",
         "Duracion" : 44,
         "Temporada" : 1,
         "Descripcion" : "Un día cargado de emociones para Billie da paso a una excitante noche de aventuras cuando Cooper se propone avivar la llama de su matrimonio."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Empire State of Mind",
         "Duracion" : 52,
         "Temporada" : 1,
         "Descripcion" : "Mientras Cooper decide ojear a su competidor, Billie se aferra a los apasionados puntos álgidos y los demoledores momentos bajos que definieron su romance con Brad."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "New New York",
         "Duracion" : 43,
         "Temporada" : 1,
         "Descripcion" : "Billie se acuerda de brad durante un día en la ciudad con otras madres.. y acaba recurriendo a Sasha. Cooper se sincera sobre sus problemas matrimoniales."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "The Sound of the Suburbs",
         "Duracion" : 47,
         "Temporada" : 1,
         "Descripcion" : "Incapaz de dejar de rememorar la íntima conexión que tenía con Brad, Billie trata de poner un plan para recuperar la confianza de Cooper"
     },
 //Jane The Virgin
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Capitulo 1: Piloto",
         "Duracion" : 40,
         "Temporada" : 1,
         "Descripcion" : "La vida de una trabajadora y religiosa joven de ascendencia venezolana cambia radicalmente cuando una médica la insemina artificialmente sin querer"
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Capítulo 2",
         "Duracion" : 42,
         "Temporada" : 1,
         "Descripcion" : "Cuando sale a la luz el desenfrenado pasado del padre de su hija, Jane decide seguir trabajando en el hotel para ver si Rafael y su mujer podrían ser buenos padres."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Capítulo 3",
         "Duracion" : 41,
         "Temporada" : 1,
         "Descripcion" : "Jane decide que no tiene ningún sentido aferrarse a su virginidad y planea una cita romántica con Michael, a pesar de sus sentimientos en ciernes por Rafael."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Capítulo 4",
         "Duracion" : 42,
         "Temporada" : 1,
         "Descripcion" : "Jane se siente culpable por no poder controlar sus sentimientos hacia Rafael. Xo pone en juego la relación con su hija contando la verdad sobre el padre de Jane."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Capítulo 5",
         "Duracion" : 42,
         "Temporada" : 1,
         "Descripcion" : "Jane se ve metida en un lío cuando Michael jura lealtad y Rafael confiesa sus planes para el bebe. Jane decide conocer a su padre."
     },
 //Luna Nera
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Presagio",
         "Duracion" : 46,
         "Temporada" : 1,
         "Descripcion" : "La joven Ade tiene un mal presagio mientras ayuda a su abuela en un parto. Cuando acusan a las dos de brujería, una es sentenciada a muerte."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Libro",
         "Duracion" : 43,
         "Temporada" : 1,
         "Descripcion" : "Ade descubre la existencia del Libro de los Reinos y la historia de las Ciudades perdidas. Cesaria y Spirto buscan pistas en la casa de Natalia."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Voces",
         "Duracion" : 40,
         "Temporada" : 1,
         "Descripcion" : "Ade, atormentada por las voces de mujeres, no sabe qué respuesta darle a Pietro. Leptis le enseña a Valente a manejar el arco y la flecha."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Destino",
         "Duracion" : 43,
         "Temporada" : 1,
         "Descripcion" : "Pietro, en pleno duelo, rechaza a Ade y se plantea sumarse a la causa de su padre. Ade, Tebe y las otras brujas salvan a mas muejres."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Armas",
         "Duracion" : 43,
         "Temporada" : 1,
         "Descripcion" : "Valente quiere vengarse de Sante. Leptis y Tebe discuten por una estrategia. Los Benandanti recurren cada vez mas a la violencia y a Pietro le asaltan las dudas."
     },
 //Todos quieren a Daisy Jones
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pista 1: Ven a por ello",
         "Duracion" : 48,
         "Temporada" : 1,
         "Descripcion" : "Daisy Jones es una adolescente infeliz que encuentra su camino en el ambiente rockero del Sunset Strip. A las afueras de Pensilvania, Billy Dunne, su hermano, Graham, y sus mejores amigos, Eddie y Warren forman una banda desesperados por salir de su pueblo. Cuando Billy y Daisy se conocen, su talento y su ambición se unirán para cambiar la vida de todos, para bien o para mal. Así es cómo ocurrió."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pista 2: Yo te llevaré hasta ahí",
         "Duracion" : 51,
         "Temporada" : 1,
         "Descripcion" : "Tras descubrir su propia voz, Daisy se adentra en el ambiente musical de Los Ángeles aconsejada por su amiga, Simone, y por el productor Teddy Price. Ya en Los Ángeles, y con Karen Sirko al teclado, los Dunne Brothers deben superar sus propios retos para alcanzar la fama. Tras un alentador encuentro con Teddy, la banda tendrá que lidiar con los demonios de Billy, que podrían frenar su carrera."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pista 3: Alguien me ha salvado la vida esta noche",
         "Duracion" : 49,
         "Temporada" : 1,
         "Descripcion" : "Billy, ya recuperado, trata de conciliar su vocación artística y su vida personal, mientras el resto de la banda recoge los restos de una gira desastrosa. Al mismo tiempo, Daisy no es capaz de componer nada si tiene que cumplir con las expectativas de otros. Cuando Billy compone una nueva canción, Teddy descubre que si ambos artistas colaboran, esa podría ser la solución a todos sus problemas."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pista 4: Vi la luz",
         "Duracion" : 51,
         "Temporada" : 1,
         "Descripcion" : "The Six por fin saborea cómo es la vida por la que tanto han trabajado cuando su colaboración con Daisy es un rotundo éxito. En vez de disminuir la tensión existente entre ambos compositores, esto solo la aumenta, hasta que Camila interviene. Mientras tanto, Graham duda si confesar a Karen lo que siente por ella durante una fiesta en Canyon, pues eso podría amenazar la estabilidad de la banda."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pista 5: Fuego",
         "Duracion" : 49,
         "Temporada" : 1,
         "Descripcion" : "Tras haber alcanzado la fama, Daisy Jones & the Six se preparan para grabar su primer álbum juntos. Sin embargo, cuando Billy y Daisy se muestran reticentes a trabajar en las canciones del otro, no tendrán más remedio que componer algo desde cero juntos, lo cual será más difícil de lo que creían. Mientras tanto, Karen descubre una nueva faceta de Graham durante una excursión a la playa."
     },
 //MOM
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Pilot",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "Christy recibe la visita de su madre, con la que tendrá que aprender a llevarse bien."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "A Pee Stick and an Asian Raccoon",
         "Duracion" : 21,
         "Temporada" : 1,
         "Descripcion" : "Christy y Bonnie se las arreglan para luchar por superar una crisis familiar."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "A Small Nervous Breakdown and a Misplaced Fork",
         "Duracion" : 21,
         "Temporada" : 1,
         "Descripcion" : "Christy rebusca en su agenda de ligues mientras Bonnie enseña a Roscoe algunos de sus trucos."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Loathing and Tube Socks",
         "Duracion" : 20,
         "Temporada" : 1,
         "Descripcion" : "La paciencia de Christy es puesta a prueba por todos los que están a su alrededor. Bonnie se encuentra con un antiguo rival."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Six Thousand Bootleg T-Shirts and a Prada Handbag",
         "Duracion" : 21,
         "Temporada" : 1,
         "Descripcion" : "Christy y Bonnie intentan ayudar a los demás, dejando de lado sus propios problemas."
     },
 //Do, Re & Mi
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El pajarito curiosito / Que llueva, que llueva, todo lo que quiera",
         "Duracion" : 22,
         "Temporada" : 1,
         "Descripcion" : "EL PAJARITO CURIOSITO: Do se despierta con un ritmo que suena y quiere saber qiuén lo hace y por qué no puede evitar que sus pies lo sigan. QUE LLUEVA, QUE LLUEVA, TODO LO QUE QUIERA: Cuando cae una tormenta sobre Beebopsburgo, la casa de Mi empieza a tener goteras y eso les arruina la merienda."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El blues del mejor luciernamigo / Escucha a tu cuerpo",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "EL BLUES DEL MEJOR LUCIERNAMIGO: Cuando Presto se va de vacaciones a visitar a su familia durante dos días, Mi lo echa mucho de menos. Do y Re la ayudan a sentirse mejor. ESCUCHA A TU CUERPO: Cuando Re se hace daño en la cola, sus amigos se esfuerzan por que esté tranquila y deje que su cuerpo se cure."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "No me rendiré / Mírame, soy pequeñita",
         "Duracion" : 24,
         "Temporada" : 1,
         "Descripcion" : "NO ME RENDIRÉ: Do aprende que si persevera, puede dominar uno de los pasos de volar: un aterrizaje espectacular. MÍRAME, SOY PEQUEÑITA: Han pedido a Re que actué con Flora y los Flamencos Gogós, pero los flamencos a los que tanto admira la intimidan por ser pequeña."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Cupcakes de frambuesa / Juntos no estamos solos",
         "Duracion" : 24,
         "Temporada" : 1,
         "Descripcion" : "CUPCAKES DE FRAMBUESA: Re intenta enseñar a los polluelos a hacer magdalenas de frambuesa, pero antes tiene que conseguir que le presten atención. JUNTOS NO ESTAMOS SOLOS: Los amigos se pierden en el bosque y vuelven sobre sus pasos siguiendo los sonidos que han escuchado al entrar."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El día de Maestra Luna / El día de los amigos alados",
         "Duracion" : 24,
         "Temporada" : 1,
         "Descripcion" : "EL DÍA DE MAESTRA LUNA: Re tiene hipo y cree que será imposible cantar una canción especial para felicitar a Maestra Luna si no para de dar botes. EL DÍA DE LOS AMIGOS ALADOS: Mi reescribe una canción especial para los amigos en el Día de los Amigos Alados. Pero cuando Mi no puede cantar, los pájaros se lían con la letra en un curioso caso del teléfono estropeado."
     },
 //Winx Club
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Un acontecimiento inesperado",
         "Duracion" : 22,
         "Temporada" : 1,
         "Descripcion" : "Bloom, una chica normal, descubre que tiene poderes mágicos cuando se encuentra en medio de una pelea entre un hada, Stella, y un ogro, Knut."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Bienvenida a Magix",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "Bloom llega a Alfea y conoce a sus compañeras de habitación: Stella, Musa, Tecna y Flora."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El instituto alfea para hadas",
         "Duracion" : 24,
         "Temporada" : 1,
         "Descripcion" : "Todas las chicas están emocionadas con la bola de Alfea y Fuente Roja, pero las Trix aparecerán para estropear las cosas."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "El pantano de barro negro",
         "Duracion" : 22,
         "Temporada" : 1,
         "Descripcion" : "Las chicas se van de excursión con la escuela para probar su destreza a la hora de trabajar con la naturaleza sin usar la magia."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Cita con el desastre",
         "Duracion" : 24,
         "Temporada" : 1,
         "Descripcion" : "Tras una cita con el Príncipe Sky, Stella empieza a actuar de forma extraña."
     },
 //Pokemon Rubí y Zafiro
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Todos en camino",
         "Duracion" : 21,
         "Temporada" : 601,
         "Descripcion" : "El intento fallido del Team Rocket por atrapar a Pikachu ha dejado al pequeño Pokémon amarillo muy enfermo. Villa Raíz no tiene Centro Pokémon, así que Ash se dirige al Profesor Abedul en busca de ayuda."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Ruinas legendarias",
         "Duracion" : 21,
         "Temporada" : 601,
         "Descripcion" : "Ahora que Pikachu se siente mejor, Ash está listo para ir a Pueblo Escaso y apuntarse a la Liga Hoenn."
     },    
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "No hay otro lugar como Hoenn",
         "Duracion" : 21,
         "Temporada" : 601,
         "Descripcion" : "Ash y Aura han conseguido llegar hasta Ciudad Petalia, la primera ciudad con un Gimnasio. Ash está muy emocionado por enfrentarse al Líder de Gimnasio."
     },    
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "No hay quien venza a Taillow",
         "Duracion" : 21,
         "Temporada" : 601,
         "Descripcion" : "Ash, Aura y el hermano pequeño de Aura, Max, están ahora camino de Ciudad Férrica, ¡y están hambrientos! Nadie se ha acordado de llevar comida."
     },    
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "¡Entrenadores panticortos!",
         "Duracion" : 21,
         "Temporada" : 601,
         "Descripcion" : "Brock está listo para viajar de nuevo y se une a Ash, Aura y Max, mientras el viaje sigue hacia Ciudad Férrica."
     },
 //Caillou
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Brilla, Brilla Estrellita/Todo Un Dia De Trabajo/El Maullido Del Gato/Caillou En El Espacio",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "Caillou y su familia están en casa de los abuelos para cenar maíz asado. Todos se maravillan con el cielo estrellado, que le da al abuelo la oportunidad perfecta para sacar su telescopio y enseñarle las constelaciones a Caillou. / La casa se levanta tarde, y eso significa darse prisa para llegar al trabajo y a la guardería."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Caillou Combate El Calor/El Conductor Del Asiento De Atrás/Perdido Y Encontrado/Magia Navideña",
         "Duracion" : 23,
         "Temporada" : 2,
         "Descripcion" : "Hace mucho calor y mamá no deja que Caillou vaya a la piscina porque han ido todos los días esta semana. Cuando Caillou se niega a ponerse crema solar y Rosie no quiere dormir, mamá se da cuenta de que el calor está poniéndolos a todos de mal humor. Caillou y ella dan con la solución: encienden los aspersores del jardín para pasar un buen rato, sin necesidad de un equipo sofisticado."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Un Dia En La Nieve/Proxima Parada Diversion/A Toda Vela/Caillou Granjero",
         "Duracion" : 23,
         "Temporada" : 2,
         "Descripcion" : "Mamá, amante del esquí, lleva a Caillou a esquiar en una colina mientras papá y Rosie se quedan en el cómodo chalé y los miran. Al principio, a Caillou le da miedo, pero con la ayuda de mamá, llega al final de la pendiente y se divierte mucho. Después, van todos a deslizarse y a tomar chocolate caliente."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Almuerzo Dominguero/Caillou Al Rescate/La Litera De Caillou/Receta Para Divertirse",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "Caillou, papá y Rosie llevan a mamá a desayunar el domingo para celebrar el día de la madre. Van a un restaurante elegante y papá les explica a Caillou y Rosie que tienen que portarse muy bien. Caillou incluso se pone corbata. / Gilbert se queda atrapado en un árbol, y para el deleite de Caillou, viene un camión de bomberos lleno de bomberos a rescatarlo."
     },
     {
         "Icono" : "https://cdn-icons-png.flaticon.com/512/0/375.png",
         "Nombre" : "Los Niños Nuevos Del Barrio/Caillou Va Al Colegio/La Cocina De Caillou/La Aventura Marina De Caillou",
         "Duracion" : 23,
         "Temporada" : 1,
         "Descripcion" : "Al pasar por al lado del solar del final de la calle, Caillou y papá se dan cuenta de que hay un cartel de “vendido”. Caillou observa llegar a los tractores y aparece una casa por arte de magia. Luego viene la furgoneta de mudanzas y Caillou descubre que lo que pensaba que era un compañero de juegos, en realidad, son dos."
     }
]


mongoose.connect('mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/StreamHub?retryWrites=true&w=majority')
.then(async () => {
    const allCapitulos = await Capitulo.find()
    if(allCapitulos.length > 0){
        await Capitulo.collection.drop()
        console.log('Capitulos borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const capitulosMap = arrayCapitulos.map((capitulo) => new Capitulo(capitulo))
    await Capitulo.insertMany(capitulosMap)
    console.log('Capitulos añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());