const Serie = require ('../api/models/serie.model');
const mongoose = require('mongoose');

const arraySeries = [
    // ANIME
    {
        "Portada": "https://sm.ign.com/t/ign_es/screenshot/default/1134207_hnfc.1280.jpg",
        "Nombre": "One Piece",
        "Trailer": "https://www.youtube.com/watch?v=-Sb4wxbHh-4",
        "Genero": ["Anime","Fantasia","Comedia","Accion"],
        "Descripcion": "La serie comienza con la ejecución de Gold Roger, un hombre conocido como El Rey de los Piratas, quien justo antes de su muerte, hace mención de su gran tesoro legendario, el One Piece, y que puede ser tomado por quien lo encuentre.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://sm.ign.com/ign_es/news/j/jujutsu-ka/jujutsu-kaisen-cursed-clash-announced-at-the-bandai-namco-su_8q2m.jpg",
        "Nombre": "Jujutsu Kaisen",
        "Trailer": "https://www.youtube.com/watch?v=aPBUUJbrAWo",
        "Genero": ["Anime","Accion","Fantasia"],
        "Descripcion": "Yūji Itadori es un estudiante de secundaria que une al Club de Investigación de lo Oculto. Luego de atraer a muchas Maldiciones a su escuela, se convierte en el recipiente de Ryōmen Sukuna, una poderosa maldición, para proteger a sus amigos.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/01/Kimetsu-no-Yiaba-eventos-2022.jpg",
        "Nombre": "Kimetsu no Yaiba",
        "Trailer": "https://www.youtube.com/watch?v=VQGCKyvzIM4",
        "Genero": ["Anime","Accion","Drama"],
        "Descripcion": "Tanjiro Kamado es un joven que vive con su familia en las montañas, haciendo viajes al pueblo cercano para vender carbón. Sin embargo, toda su vida cotidiana cambia radicalmente cuando en uno de estos viajes, regresa a casa y descubre que toda su familia había sido asesinada por un demonio, siendo su hermana menor Nezuko la única sobreviviente de aquel incidente.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://sm.ign.com/t/ign_latam/screenshot/default/chainsaw-galeria_y8dk.1280.jpg",
        "Nombre": "Chainsaw Man",
        "Trailer": "https://www.youtube.com/watch?v=K9Gnl0VeIVI",
        "Genero": ["Anime","Accion","Terror"],
        "Descripcion": "Denji es un joven atrapado en la pobreza extrema, que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de Pochita, conocido como el Demonio de la Motosierra. Denji es traicionado por los Yakuza, quienes lo matan. Pochita hace un contrato con Denji, fusionándose con él y reviviéndolo como un híbrido humano-demonio.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://www.clarin.com/img/2023/03/02/Oh0fl_Ana_2000x1500__1.jpg",
        "Nombre": "Shingeki no Kyojin",
        "Trailer": "https://www.youtube.com/watch?v=8pEg8NrdL_Y",
        "Genero": ["Anime","Accion","Drama"],
        "Descripcion": "En un mundo ficticio en el que la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas titanes, los supervivientes se refugiaron en tres enormes murallas que impiden el acceso a dichos monstruos. La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al Ejército de las murallas para vengar la muerte de su madre y destruir a los titanes.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    // ACCION
    {
        "Portada": "https://i.blogs.es/901e16/theboys1/1366_2000.jpeg",
        "Nombre": "THE BOYS",
        "Trailer": "https://www.youtube.com/watch?v=AD0qUhZpbfc",
        "Genero": ["Accion","Comedia"],
        "Descripcion": "THE BOYS es un enfoque irreverente de lo que pasa cuando los superhéroes, tan famosos como las celebridades, tan influyentes como los políticos y tan venerados como los dioses, abusan de sus superpoderes en vez de utilizarlos para hacer el bien.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b8e2acc37990972190b6e9d0486e421fd69796665b7b66d89f38ebfd6f26589._RI_TTW_.jpg",
        "Nombre": "Jack Ryan",
        "Trailer": "https://www.youtube.com/watch?v=AK-Mdu1Epy0",
        "Genero": ["Accion","Drama"],
        "Descripcion": "En la temporada 3 de Tom Clancy’s Jack Ryan, Jack cruza Europa en una carrera contrarreloj para impedir que una facción del gobierno ruso, que opera al margen de este, restaure el imperio soviético y haga estallar la Tercera Guerra Mundial.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://m.media-amazon.com/images/S/pv-target-images/dfa539717409b2ec7800839cf0a0265a9376378eff070f3f60e765c9ea8f2c64.png",
        "Nombre": "Citadel",
        "Trailer": "https://www.youtube.com/watch?v=WXju1nqmkyo",
        "Genero": ["Accion","Drama"],
        "Descripcion": "Hace años, a los agentes de Citadel Mason Kane y Nadia Sinh, les borraron la memoria. Pero, cuando unas siniestras fuerzas resurgen, vuelven a ser reclutados.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://de.web.img3.acsta.net/r_654_368/newsv7/22/02/08/08/21/4941464.jpg",
        "Nombre": "Reacher",
        "Trailer": "https://www.youtube.com/watch?v=GSycMV-_Csw",
        "Genero": ["Accion","Drama"],
        "Descripcion": "Cuando el oficial retirado de la Policía Militar Jack Reacher es arrestado por un asesinato que no cometió, cae en mitad de una conspiración mortal llena de policías corruptos, empresarios turbios y políticos maquinadores.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://images.hola.com/imagenes/actualidad/20181017131492/vis-a-vis-en-japon/0-611-106/visavis2-t.jpg",
        "Nombre": "Vis a Vis",
        "Trailer": "https://www.youtube.com/watch?v=1AZOY0Xo3m8",
        "Genero": ["Accion","Drama"],
        "Descripcion": "Macarena ve como su apacible y acomodada vida se va al garete tras ser acusada por cuatro delitos fiscales. Ha sido condenada a 7 años de cárcel.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },

    // COMEDIA
    {
        "Portada": "https://es.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg",
        "Nombre": "The Office",
        "Trailer": "https://www.youtube.com/watch?v=tNcDHWpselE",
        "Genero": ["Comedia"],
        "Descripcion": "Michael Scott, gerente regional de Dunder Mifflin, guiará al equipo que rueda el documental y a sus empleados a través de comportamientos inapropiados y comentarios bienintencionados pero descaminados.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://img.ccma.cat/multimedia/jpg/5/9/1530785866995.jpg",
        "Nombre": "Plats Bruts",
        "Trailer": "https://www.youtube.com/watch?v=AfEDrbnx2zw",
        "Genero": ["Comedia"],
        "Descripcion": "David y Lopes son dos amigos que comparten piso en Barcelona. David dejó el piso de sus padres para presumir ante sus amigos de que era independiente. En realidad es un inmaduro y sus padres pagan todos sus gastos.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://pics.filmaffinity.com/The_Good_Place_Serie_de_TV-605671019-large.jpg",
        "Nombre": "The Good Place",
        "Trailer": "https://www.youtube.com/watch?v=jDi3fki9IRM",
        "Genero": ["Comedia","Romance","Fantasia"],
        "Descripcion": "Eleanor Shellstrop es una joven recién fallecida que se despierta en la otra vida y es enviada al lado bueno, una utopía parecida al cielo en recompensa a una vida terrenal justa. Sin embargo, rápidamente se da cuenta de que fue enviada allí por error y debe ocultar su comportamiento moralmente imperfecto y tratar de convertirse en una mejor persona.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://hips.hearstapps.com/hmg-prod/images/aqui-no-hay-quien-viva-1600347957.jpg",
        "Nombre": "Aquí no hay quien viva",
        "Trailer": "https://www.youtube.com/watch?v=NYjAaFtIN7U",
        "Genero": ["Comedia"],
        "Descripcion": "Roberto y Lucía están felices por mudarse al nuevo piso, pero desconocen la comunidad de vecinos que les espera. En la calle Desengaño, convivirán con sus vecinos un tanto peculiares.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://i.blogs.es/e9ff3c/this-is-us/1366_2000.jpeg",
        "Nombre": "This is Us",
        "Trailer": "https://www.youtube.com/watch?v=OkTEQwsE8l4",
        "Genero": ["Comedia","Drama","Romance"],
        "Descripcion": "Una emotiva y reconfortante historia sobre unos singulares trillizos, sus luchas y los maravillosos padres que los educaron.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },

    // DRAMA
    {
        "Portada": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d594f7309f580f5730b10a58f7ad477f4d6f4c294d4240656c82d4def46cdef8._RI_TTW_.jpg",
        "Nombre": "Merlí",
        "Trailer": "https://www.youtube.com/watch?v=edqD0r_fpps",
        "Genero": ["Drama"],
        "Descripcion": "Merlí, el profe de filosofía, hace casi omiso de las reglas. Algo que enerva al director, pero deslumbra a sus alumnos, ocupados en resolver cuestiones de adolescentes.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://hips.hearstapps.com/hmg-prod/images/cronicas-vampiricas-2-1624094640.jpg",
        "Nombre": "Crónicas vampíricas",
        "Trailer": "https://www.youtube.com/watch?v=BmVmhjjkN4E",
        "Genero": ["Drama","Fantasia"],
        "Descripcion": "Es el primer día de vuelta al instituto Mystic Falls para Elena tras la trágica muerte de sus padres. Elena, junto con su tía Jenna, cuida de su problemático hermano Jeremy. La vida es difícil para Elena hasta que conoce al misterioso Stefan en la escuela.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://album.mediaset.es/eimg/2022/11/29/el-doctor-murphy-y-lea-planean-su-boda-en-el-arranque-de-la-quinta-temporada-de-the-good-doctor-en-c_ec44.jpg",
        "Nombre": "The Good Doctor",
        "Trailer": "https://www.youtube.com/watch?v=lnY9FWUTY84",
        "Genero": ["Drama"],
        "Descripcion": "Un joven médico con síndrome del sabio entra a trabajar en el servicio quirúrgico pediátrico de un prestigioso hospital. ¿Puede una persona que no tiene capacidad para relacionarse con los demás salvarles la vida?",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },{
        "Portada": "https://images.ecestaticos.com/pm8G3DNCbhWG7B4oZumX-43sWJ4=/0x0:1066x742/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F941%2F8d2%2F6e4%2F9418d26e4f222134c804a1a462264532.jpg",
        "Nombre": "El Internado",
        "Trailer": "https://www.youtube.com/watch?v=_KJkbLGKT8M",
        "Genero": ["Drama"],
        "Descripcion": "Empieza el nuevo curso en Laguna Negra. Marcos y su hermana Paula llegan después de que un accidente que sufrieron sus padres les dejara huérfanos.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },
    {
        "Portada": "https://2.bp.blogspot.com/-OvlhxxtYzFo/WFW9_N_76sI/AAAAAAAAAOY/yIWtoraTqRkxqbnp6LFXXxrVevArMIVdQCLcB/s1600/Supernatural-portada.jpg",
        "Nombre": "Supernatural",
        "Trailer": "https://www.youtube.com/watch?v=e9aty0dSc2Y",
        "Genero": ["Drama","Terror"],
        "Descripcion": "Sam Winchester creció cazando cosas terribles. Su hermano Dean aparece con terribles noticias.",
        "Capitulos": [],
        "Valoracion": 0,
        "Resena": []
    },

    // FANTASIA
    {
        "Portada" : "https://i.blogs.es/dadb04/la-casa-del-dragon-cartel/1366_2000.jpeg",
        "Nombre" : "La Casa del Dragón", 
        "Trailer" : "https://youtu.be/A7wLFLc5NzQ",
        "Genero" : ["Fantasia", "Acción", "Romance"],
        "Descripcion" : "Historia ambientada 172 años antes de Daenerys Targaryen, y en el noveno año del reinado de Viserys Targaryen (Paddy Considine), un rey cuya línea de sucesión está en peligro. Su esposa Aemma (Sian Brooke) está embarazada, aunque no hay garantía de que dé a luz a un heredero varón. Si no lo hace, entonces el Trono de Hierro recaerá, bien sobre el hermano de Viserys, Daemon, un gobernante impulsivo y potencialmente tiránico (Matt Smith); o bien, rompiendo con la tradición de preferencia del varón, en la hija adolescente de Viserys, Rhaenyra (Milly Alcock), cuyo reclamo del trono está destinado a tener una fuerte oposición.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    }, 
    {
        "Portada" : "https://img.europapress.es/fotoweb/fotonoticia_20220209102544_1200.jpg",
        "Nombre" : "El señor de los anillos: Los anillos del Poder", 
        "Trailer" : "https://www.youtube.com/watch?v=kLw1UrDqC9Q",
        "Genero" : ["Fantasia", "Romance"],
        "Descripcion" : "En un periodo de relativa calma, los personajes se enfrentan al resurgimiento del mal en la Tierra Media. Desde las profundidades más oscuras de las Montañas Nubladas hasta los majestuosos bosques de Lindon, el impresionante reino insular de Númenor y los confines más lejanos del mapa, estos reinos y personajes esculpirán legados que perdurarán en el tiempo.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://zeleb.publico.es/wp-content/uploads/2022/08/carnival-row-1.jpg",
        "Nombre" : "Carnival Row", 
        "Trailer" : "https://www.youtube.com/watch?v=T120yZjSLL0",
        "Genero" : ["Fantasia", "Romace", "Acción"],
        "Descripcion" : "Amor. Asesinatos. Conspiración. Revolución. Cuando unos misteriosos asesinatos avivan la tensión entre las hadas y los humanos que las oprimen, los habitantes de Carnival Row han de elegir quiénes son y cómo van a actuar.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://prod.assets.earlygamecdn.com/images/4f28b7f6af5740b9a638d6b28a_AzQ5NDhmZjQ5MzY4_575b14f445f692a10b87883148_yyaxmze3edc0mss1nisynajyzsaxotiwidewodadmwi1ymy1ote4odq.jpg?mtime=1679335720",
        "Nombre" : "The Expanse", 
        "Trailer" : "https://www.youtube.com/watch?v=nrC_QzwyQco",
        "Genero" : ["Fantasia", "Accion"],
        "Descripcion" : "La desaparición de Julie Mao, niña rica convertida en activista política, une las vidas del detective de Ceres, Joe Miller (Thomas Jane), el capitán de la nave, James Holden (Steven Strait), y el político de la ONU, Chrisjen Avasarala (Shohreh Aghdashloo). En medio de toda la tensión política entre la Tierra, Marte y el Cinturón, resuelven la mayor conspiración de todos los tiempos.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://images.ecestaticos.com/HNHlNFifj_FZaYLXg9hR9_qoGlY=/344x95:1601x1038/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F533%2Fdde%2F23f%2F533dde23f4301c3a933a1a21b1c72ef3.jpg",
        "Nombre" : "Los Protegidos", 
        "Trailer" : "https://www.youtube.com/watch?v=_hrLA73Ui0U",
        "Genero" : ["Fantasia", "Romance", "Accion"],
        "Descripcion" : "Un grupo de niños aparentemente normales descubren repentinamente que han sido dotados de poderes sobrenaturales. Han desarrollado habilidades especiales que se escapan a su control racional. Nadie conoce su secreto y tienen que protegerse unos a otros para pasar desapercibidos y no ser descubiertos. Para ello se unen y forman una falsa familia normal.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    
    //TERROR
    
    {
        "Portada" : "https://media.vandalsports.com/master/2-2023/20232882954_1.jpg",
        "Nombre" : "Fear the Walking Dead", 
        "Trailer" : "https://www.youtube.com/watch?v=w-omQBtshvk",
        "Genero" : ["Terror", "Drama", "Accion"],
        "Descripcion" : "En el seno de una ciudad a la que las personas acuden para escapar, esconder sus secretos y enterrar su pasado, un brote misterioso amenaza con perturbar la poca estabilidad que Madison Clark -asesora escolar de un instituto- y Travis Manawa –profesor de lengua- han conseguido alcanzar.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://www.prensario.net/Multimedios/imgs/36350_750.jpg",
        "Nombre" : "The Purge", 
        "Trailer" : "https://www.youtube.com/watch?v=rAakoTpuAOU",
        "Genero" : ["Terror", "Drama"],
        "Descripcion" : "Una vez al año, cualquier delito, incluido el asesinato, es legal en Estados Unidos por un período de 12 horas.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://hips.hearstapps.com/hmg-prod/images/se-lo-que-hicisteis-el-ultimo-verano07-1634815720.jpg",
        "Nombre" : "Se lo que hicisteis el último verano", 
        "Trailer" : "https://www.youtube.com/watch?v=rF40B_gA67Q",
        "Genero" : ["Terror", "Drama"],
        "Descripcion" : "En una ciudad llena de secretos, un grupo de adolescentes es acosado por un misterioso asesino un año después de un fatal accidente en su noche de graduación.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://i.blogs.es/6aa33b/peaky-blinders/1366_2000.jpeg",
        "Nombre" : "Peaky Blinders", 
        "Trailer" : "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        "Genero" : ["Terror"],
        "Descripcion" : "Una familia de gánsters asentada en Birmingham tras la Primera Guerra Mundial (1914-1918), dirige un local de apuestas de de carreras de caballos. Las actividades del ambicioso jefe de la banda, Tommy Shelby (Cillian Murphy), llaman la atención del Inspector jefe Chester Campbell, un detective de la Real Policía Irlandesa que es enviado a Birmingham para limpiar la ciudad y acabar con la banda.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://images.amcnetworks.com/amctv.es/wp-content/uploads/2019/11/TWDWB-2-destacada.jpg",
        "Nombre" : "The Walking Dead: World Beyond", 
        "Trailer" : "https://www.youtube.com/watch?v=YnQy-7IZX0E",
        "Genero" : ["Terror"],
        "Descripcion" : "Un grupo de adolescentes que vive en una communidad protegida de los peligros del apocalipsis recibe un mensaje que los incita a dejar atrás la seguridad del único hogar que han conocido y a emprender un viaje a través del país para salvar a su padre.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    
    //ROMANCE
    
    {
        "Portada" : "https://indiehoy.com/wp-content/uploads/2021/06/sex-life.jpg",
        "Nombre" : "Sexo/Vida", 
        "Trailer" : "https://www.youtube.com/watch?v=IH5PDcxorg8",
        "Genero" : ["Romance", "Drama"],
        "Descripcion" : "El atrevido pasado sexual de una mujer choca con su presente como esposa y madre cuando su ex, un chico malo con el que no puede dejar de fantasear, vuelve a su vida",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://nosubmarinesdotcom.files.wordpress.com/2019/01/jane-the-virginjpg.jpg",
        "Nombre" : "Jane, The Virgin", 
        "Trailer" : "https://youtube.com/watch?v=JOKUcwrPFmg",
        "Genero" : ["Romance"],
        "Descripcion" : "Después de prometer permanecer casta hasta el matrimonio, Jane Villanueva se entera de que está embarazada debido a un fallo médico, y tiene que reconsiderar su futuro.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://www.lavanguardia.com/peliculas-series/images/serie/backdrop/2013/9/w1280/q3WMUtu4h2mwgehn8F5481RFVej.jpg",
        "Nombre" : "Mom", 
        "Trailer" : "https://www.youtube.com/watch?v=tSKzFgS07dI",
        "Genero" : ["Romance"],
        "Descripcion" : "Christy es una madre soltera cuya reciente sobriedad le ha permitido ver su vida con claridad... y no le gusta lo que ve. Ahora debe tratar de deshacer años de decisiones imprudentes para construir una vida mejor para ella y sus hijos.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://fueradeseries.com/wp-content/uploads/2020/02/1PfKmsd_jKi7vqk97Yxoh9w-1.jpeg",
        "Nombre" : "Luna Nera", 
        "Trailer" : "https://www.youtube.com/watch?v=5_mMWzEzoPA",
        "Genero" : ["Romance", "Fantasia"],
        "Descripcion" : "En la Italia del siglo XVII, una joven descubre su destino junto a una familia de brujas mientras el padre de su novio trata de darle caza por practicar magia negra",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://media.vogue.es/photos/63f645098bdf842f0e0e2309/16:9/pass/Daisy%20Jones%20&%20The%20Six%20HD%20(7).jpg",
        "Nombre" : "Todos quieren a Daisy Jones", 
        "Trailer" : "https://www.youtube.com/watch?v=9yATGQ_9wCo",
        "Genero" : ["Romance"],
        "Descripcion" : "En 1977, Daisy Jones & the Six había llegado a lo más alto. La banda, liderada por Daisy Jones y Billy Dunne, dos misiles muy inestables, había salido de la oscuridad y alcanzado la fama. De repente, tras vender todas las entradas para el Soldier Field, los miembros se separan y ahora, años después, cuentan qué pasó. Así fue la separación de una banda que estaba en su mejor momento.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    
    //INFANTIL
    
    {
        "Portada" : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/51cddc0692ad59ada627462bbaa41d3fc62193bc8ac09c9122efad32f25f98dd._RI_TTW_.jpg",
        "Nombre" : "Do, Re & Mi", 
        "Trailer" : "https://www.youtube.com/watch?v=P_ZrizcZdGI",
        "Genero" : ["Infantil"],
        "Descripcion" : "Acompaña a los amigos pajaritos Do, Re y Mi en el mundo musical de Beebopsburgo, una isla donde crecen instrumentos en el bosque del Falsete y una montaña musical gigante se eleva por encima de todas sus aventuras. Descubre los sonidos y melodías, muévete a su ritmo y mira cómo ayuda la música a resolver problemas. Con una canción original en cada episodio.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://licensinginternational.org/wp-content/uploads/2022/01/Winx-Club-18-scaled.jpg",
        "Nombre" : "Winx Club", 
        "Trailer" : "https://www.youtube.com/watch?v=XlqCo0SsAiM",
        "Genero" : ["Infantil"],
        "Descripcion" : "La vida de Bloom cambia repentinamente cuando descubre sus poderes magicos y se inscribe en el colegio de hadas Alfea en Magix. Alli forma el Winx Club con otras chicas especiales como ella. Todo parece perfecto, pero tres malvadas brujas llamadas Trix amenazan la Dimension Magica: quieren robar la Llama del Dragon, el inmenso poder de Bloom... Asi comienza la formidable aventura de las Winx.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://e1.pxfuel.com/desktop-wallpaper/518/982/desktop-wallpaper-pokemon-the-series-ruby-sapphire-pokemon-season-1.jpg",
        "Nombre" : "Pokemon Rubí y Zafiro", 
        "Trailer" : "https://www.youtube.com/watch?v=YtULmC1ZVcI",
        "Genero" : ["Infantil"],
        "Descripcion" : "Exterminada la Conferencia de Plata, Ash continúa hacia su próximo desafío: ¡la región lejana de Hoenn!",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://vod.roams.es/images/post/es_ES_vod/series-caillou.jpg",
        "Nombre" : "Caillou", 
        "Trailer" : "https://www.youtube.com/watch?v=q97zic--H_s",
        "Genero" : ["Infantil"],
        "Descripcion" : "Te presentamos a Caillou, el niño de 4 años con una gran imaginación. Caillou experimenta todas las maravillas de la infancia que hemos vivido todos: el primer día de cole, cuidar a una mascota, aprender un deporte o pasar tiempo con la familia.",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    },
    {
        "Portada" : "https://occ-0-3934-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVnk38wXZQ7dNm-hVEeWKRMh-eJAyUsVPO7kX5votM0-UdsqLhgDZKZ2q2RVTNo1LGkGE9hFsY5VoZD7rNPg_CwtQnzatgQzwtIc.jpg?r=b12",
        "Nombre" : "H2O", 
        "Trailer" : "https://www.youtube.com/watch?v=wqHED34TcwU",
        "Genero" : ["Infantil"],
        "Descripcion" : "Emma Gilbert , Cleo Sertori ​​y Rikki Chadwick son tres chicas de dieciséis años de edad, que se quedan varados en la misteriosa isla de Mako . Cuando entran en un estanque subterráneo de agua que conduce al océano se encuentran bañadas en el resplandor de la luz de la luna desde arriba .",
        "Capitulos" : [],
        "Valoracion" : 0, 
        "Resena" : []
    }
]


mongoose.connect('mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/StreamHub?retryWrites=true&w=majority')
.then(async () => {
    const allSeries = await Serie.find()
    if(allSeries.length > 0){
        await Serie.collection.drop()
        console.log('Series borradas')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const seriesMap = arraySeries.map((serie) => new Serie(serie))
    await Serie.insertMany(seriesMap)
    console.log('Series añadidas');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());