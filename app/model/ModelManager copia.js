window.ModelManager = {

	type:{
		hotel:{
			code:"hotel",
			url:"/getHotels",
			fileName:"hotel.json",
			folderName:"hotel"
		},

		restaurant:{
			code:"restaurant",
			url:"/getRestaurants",
			fileName:"restaurant.json",
			folderName:"restaurant"

		},

		adScreen:{
			code:"adScreen",
			url:"/getAdScreens",
			fileName:"adScreen.json",
			folderName:"adScreen"
		},

		otherEvent:{
			code:"otherEvent",
			url:"/getotherEvent",
			fileName:"otherevent.json",
			folderName:"otherEvent"
		},
		service:{
			code:"service",
			url:"/getService",
			fileName:"service.json",
			folderName:"service"
		},
		festival:{
			code:"festival",
			url:"/getFestival",
			fileName:"festival.json",
			folderName:"festival"

		},
		cronograma:{
			code:"cronograma",
			url:"/getCronograma",
			fileName:"cronograma.json",
			folderName:"cronograma"

		},
		temporaryAccommodation:{
			code:"temporaryAccommodation",
			url:"/getTemporaryAccommodation",
			fileName:"temporaryAccommodation.json",
			folderName:"temporaryAccommodation"
		},
		attraction:{
			code:"attraction",
			url:"/getAttractions",
			fileName:"attraction.json",
			folderName:"attraction",
			adScreen:"yes"
		}
	},
	setup:{
		hotel:{
			items: [
			{
				"type":"hotel",
				"name":"Hotel Boutique Benzoni",
				"id":1,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"La Toma 830",
				"phoneNumber":3525424686,
				"email":"info@benzoniposadaspa.com.ar"
			},
			{
				"type":"hotel",
				"name":"Hotel Jesús María",
				"id":2,
				"hotelType":"Hotel 3*",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Almafuerte 177",
				"phoneNumber":3525445888,
				"email":""
			},
			{
				"type":"hotel",
				"name":"Hotel La Cabaña",
				"id":3,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 m. 754",
				"phoneNumber":3525420563,
				"email":"lacabana@coop5.com.ar"
			},
			{
				"type":"hotel",
				"name":"HOTEL NAPOLEON",
				"id":4,
				"hotelType":"Hotel 3*",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"España 675",
				"phoneNumber":3525401700,
				"email":"info@napoleononline.com.ar "
			},
			{
				"type":"hotel",
				"name":"POSADA HENEN",
				"id":5,
				"hotelType":"Hotel 2*",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Bv. Agüero 67",
				"phoneNumber":3525445960,
				"email":"posada_henen@outlook.com"
			}
			],
			labelPlural: "Hoteles",
			labelSingular: "Hotel",
			type: "hotel"
		},
		otherEvent:{
			items: [
			{
				"type":"otherEvent",
				"name":"Festival 4 estaciones",
				"id":"1",
				"extendedView":"true",
				"featured":"true",
				"description":"<p>4 Estaciones es un festival gratuito, que se realiza en la plaza principal de Jes\u00FAs Mar\u00EDa, desagregado a lo largo del año. Son cuatro fechas que se desarrollan en la segunda mitad del verano, hacia fines de febrero o principios de marzo, en otoño, por lo general en mayo, invierno, en agosto o primeros días de septiembre y primavera, en el mes de noviembre. Tiene por objeto romper la fuerte estacionalidad que genera el Festival de Doma y Folclore.</p> <p>Por este han pasado distintos artistas variando la propuesta de acuerdo a los géneros. Ejemplo de esto son: </p><ul> <li>Iñaki Urlezaga y el Ballet Concierto. </li> <li>Murga Agarrate Catalina (Uruguay) </li> <li>Raúl Lavié.</li> <li>Caligaris, La Pata de la Tuerta y Circo Z</li> <li>Chébere. Retorno con el Turco Julio</li> <li>Los Manseros Santiagueños</li> <li>Baglieto y Vitale</li> <li>Cacho Buenaventura</li> </ul> <p>Además de estos artistas, la grilla siempre se compone de artistas locales con lo que se refuerza su desarrollo y proyección.</p>",
				"image1":"4estaciones1.jpg",
				"image2":"4estaciones2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Jesus Mar\u00EDa Rock",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Es un festival de 2 días donde el Rock se adueña del Anfiteatro Jos\u00E9 Hernández, el predio donde se realiza el Festival de Doma y Folclore de Jesús María. Se desarrolla el fin de semana largo de octubre, sábado y domingo. En su primera edición pasaron Estelares, Kapanga, Catupecu Machu, Las Pastillas del Abuelo, La Vela Puerca y Las Pelotas. Es un festival de gran magnitud que promete.</p>",
				"image1":"rock1.jpg",
				"image2":"rock2.jpg",
				"image3":"rock3.jpg",
				"image4":"rock4.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Carnaval y Quema del Rey Momo",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>En Jesús María se han desarrollado carnavales desde los inicios de la villa. Han ido variando en el tiempo. Hoy es una fiesta popular y gratuita donde participan comparsas, carrozas y disfrazados de la zona. </p>",
				"image1":"carnaval1.jpg",
				"image2":"carnaval2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Jesús María Gourmet",
				"id":"4",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Es un torneo de cocina clasificatorio para el Córdoba Cocina y al Torneo Argentino de Chefs. Participan establecimientos gastronómicos del Norte con un menú de tres pasos elaborado en dos horas y presentado al jurado. Atento el público sigue el desarrollo del evento en las tribunas con una vista inmejorable del proceso de elaboración de estos maestros de la cocina. Su fecha es variable ya que se encuentra supeditada a los campeonatos superiores pero se estima para los primeros días de Junio.</p>",
				"image1":"parrillada1.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Otros Encuentros",
				"id":"5",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Encuentro de Pintores Paisajistas. Abril.</p><p>Córdoba Jazz Camp. Segunda semana de vacaciones de Julio.</p><p>Festival de Destrezas Gauchas. Agosto.</p><p>Encuentro de Coros. Noviembre.</p>",
				"image1":"otroevento1.jpg"
			}

			],
			labelPlural: "Eventos",
			labelSingular: "Evento",
			type: "otherEvent"
		},
		attraction:{
			items: [
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Estancia Jesu\u00EDtica",
				"name-en":"Jesuit Estancia of Jesús María",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896",
				"latitude":"-30.970447",
				"longitud":"-64.097558",
				"description":"<p>Tierras a orillas del R\u00EDo Guanusacate, tierras de Sanavirones, al pie de las Sierras Chicas, al norte de la C\u00F3rdoba de la Nueva Andaluc\u00EDa fundada por Cabrera. Fueron merced de Don Pedro Deza, encomendero de su Majestad, fueron propiedad de Don Gaspar de Quevedo, fueron vendidas a la Compa\u00F1\u00EDa de Jes\u00FAs en 1618. Los hermanos jesuitas fundaron la Estancia, y la llamaron Jes\u00FAs Mar\u00EDa. Y la hicieron crecer. Trigo y harina, vid y vino, trabajo, aire puro, rezos, sol, indios y curas.</p><p>El Edificio: La construcci\u00F3n se desarrolla en dos plantas. En el ala noroeste, en planta baja, solo tiene galer\u00EDas y en planta alta galer\u00EDa y habitaciones. El parejo muro que contiene al suelo en planta baja, todo en piedra bola entera, es probable que sea la parte  m\u00E1s antigua de la construcci\u00F3n. Los arcos del claustro, de gran solidez, tienen en sus enjutas pintorescos \u00F3culos cuadrifolios y en este sector, a pesar de tener las impostas para las b\u00F3vedas, el techo es plano de tiranter\u00EDa y bovedillas. El ala noreste incluye en planta baja, el amplio local de la vieja bodega y sobre ella, las habitaciones de los sacerdotes. Este es el sector que, seg\u00FAn los documentos, se le atribuye, en forma directa al Hermano Bianchi. La Iglesia es una cl\u00E1sica planta en cruz latina con una nave principal robusta, dividida en tres cuerpos. El transepto est\u00E1 coronado por una gran c\u00FApula sin tambor pero con linterna. La b\u00F3veda es de ca\u00F1\u00F3n corrido con importantes cornisas que rodean toda construcci\u00F3n. El tajamar que remata el parque es una muestra de las magn\u00EDficas obras de infraestructura de la Hermandad.</p><p>La Estancia Jesu\u00EDtica de Jes\u00FAs Mar\u00EDa es parte del Patrimonio de la Humanidad declarado por UNESCO en 2000  junto con todo el complejo de Estancias Jesu\u00EDticas de C\u00F3rdoba. Hoy alberga el Museo Jesu\u00EDtico Nacional, con salas de arte sacro, numism\u00E1tica y pintura, pero tambi\u00E9n los restos de dos molinos, un perchel y las acequias que regaron toda la propiedad.</p>",
				"description-en":"<p>These lands, crossed by Guanusacate River were the home of the Sanaviron people, one of the many aborigine cultures living in America prior to the Spanish arrival. Don Pedro Deza, commissioner of His Majesty, the Spanish King, was given the lands, and later on they were property of Don Gaspar de Quevedo. The Jesuits bought them in 1618 and established the Estancia, naming it Jesus Maria. And they made it thrive.</p><p>Wheat and flour, grapes and wine, hard work, pure air, prayers and the sun, Indians and priests.</p><p>The building: It includes a church or chapel, priests’ residence, ranches for slaves and indigenous peoples, work areas (camps, mills, beating mills, etc.), hydraulic systems (breakwaters, irrigation ditches, canals, etc.), farmhouses, and large extents of land for cattle breeding.</p><p>The Jesuit Estancia of Jesus Maria was declared World Heritage by UNESCO in 2000 along with all the Jesuit ensamble in Cordoba. Nowadays it houses the National Jesuit Museum, with exhibits of sacred art, numismatic, paintings and pre-Columbian relics.</p><p>The remains of two mills, a granary and the irrigation ditches can also be seen.</p>",
				"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
				"scheduleOfAttentionWeekend":"S\u00E1bados y domingos: de 10 a 12 y de 14 a 19",
				"image1":"estancia1.jpg",
				"image2":"estancia2.jpg",
				"image3":"estancia3.jpg",
				"image4":"estancia4.jpg"

			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Festival de Doma y Folclore",
				"name-en":"Festival of Doma and Folclore",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Perez y Tucuman",
				"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
				"description-en":"<p>In May 1965, parents of school children, seeing the lack of good political measures in the area of Education, thought of having a Doma Festival as a way of raising funds. These persons invited people from other school boards and together they formed the Union of School Boards. Thanks to them, in January 1966 the first Festival was held. More than 45.000 people attended it, and the objective was amply reached.</p><p>The Festival is now the most important festival of its type in America, attracting every January more than 400 thousand spectators, and great TV and radio audience from all over the country. It is, as always, organized by the Union of School Boards, and the raised funds are divided among the schools to help support the education of our children.</p><p>The main attraction is the horseback riding championship, where a rider tries to stay on the back of the horse for a certain amount of time. The horses are specially bred and kept for this activity.</p><p> There are three categories in the competition: </p><ul><li>Crina Limpia: In this category the rider can only use a strip of leather around the horse´s neck for support, while poking the horse´s belly with his heels. Length of the ride: 8 seconds. </li><li>Grupa Sureña or Surera: In this category no stirrups can be used, although a skin of sheep is tied to the middle of the horse by a leather strip. The rider has to hold it for support with one hand while with the other holds the whip (called “huasca” or “talero”) Length of the ride: 12 seconds.</li><li>Basto con Encimera: In this one the rider must not lose the stirrups or 'charquear' (To touch the animal with the hands) Length of the ride: 15 seconds.</li></ul>",
				"scheduleOfAttentionWeek":"De martes a domingos y feriados: de 10 a 19",
				"image1":"festival1.jpg",
				"image2":"festival2.jpg",
				"image3":"festival3.jpg",
				"image4":"festival4.jpg",
				"image5":"festival5.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Estaci\u00F3n de Trenes",
				"name-en":"Jesus Maria Train Station",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>En 1875 es inaugurado el ferrocarril que une C\u00F3rdoba capital con la localidad santiague\u00F1a de Recreo. La estaci\u00F3n de trenes hace de la ciudad un \u00EDcono importante, como ya lo fuera en la \u00E9poca colonial por estar situada sobre el Camino Real.</p><p>Hoy la Estaci\u00F3n recibe dos trenes de carga semanales y en su explanada se llevan a cabo numerosos espect\u00E1culos art\u00EDsticos de danza, m\u00FAsica, teatro y muestras fotogr\u00E1ficas entre otros.</p>",
				"description-en":"<p>The train line linking the city of Cordoba with the town of Recreo, in Santiago del Estero, started working in 1875. And the Train Station renewed the importance of the town of Jesus Maria, importance it had had back in colonial times for being on the Royal Road to Alto Peru.</p><p>Nowadays the Station sees two cargo trains a week, and every weekend artistic performances, such as music, dancing, theater and photography, on its terrace.</p>",
				"image1":"estacion1.jpg",
				"image2":"estacion2.jpg",
				"image3":"estacion3.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Torre Céspedes",
				"name-en":"Cespedes Tower",
				"id":"4",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Castulo Peña and Colon streets",
				"phoneNumber":"03525443773",
				"description":"<p>El edificio data de fines del siglo XIX. Se trataba  de la casa de veraneo de Gabriel C\u00E9spedes y su familia. C\u00E9spedes se desempe\u00F1\u00F3 como intendente de la ciudad entre los a\u00F1os 1914 y 1918. La torre fue construida entre los  a\u00F1os 1896 y 1898. Dise\u00F1ada y dirigida por el Ingeniero y Constructor Pedro Busc\u00E1, un espa\u00F1ol que lleg\u00F3 a la Argentina por pedido de su coterr\u00E1neo Juan BialetMass\u00E9. El castillo parte de una base octogonal central y cuatro torres circulares. Est\u00E1 dividido en dos plantas. En el interior de una de las torres se alza la escalera caracol que conduce a una terraza cuyo per\u00EDmetro es cerrado. Fue declarada de inter\u00E9s Municipal y componente del patrimonio arquitect\u00F3nico y urban\u00EDstico de Jes\u00FAs Mar\u00EDa en el a\u00F1o 1995.</p>",
				"description-en":"<p>It was the summer residence of the Cespedes family by the end of the 19th century. Mr. Gabriel Cespedes was Major of the City between 1914 and 1918. The tower was designed and built by the Spanish engineer and constructor Pedro Buscá between 1896 and 1898. The base is an octagon with four circular towers attached. A spiral staircase, situated in one of the towers, leads to the second floor and up onto the terrace.</p><p>The tower was declared of Municipal Interest and part of the Architectural Heritage of the City in 1995.</p>",
				"image1":"torre1.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Museo de la Ciudad Luis Biondi",
				"name-en":"Museum of the City “Luis Biondi",
				"id":"5",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Ingeniero Olmos 453",
				"phoneNumber":"03525443773",
				"description":"<p>El 27 de Septiembre de 2012 se Inaugura la Sala de Exposiciones en la Antigua Casa Ghersi. Esta Casona de estilo franc\u00E9s de fines de siglo XIX, construida como casa de veraneo, alberga la sala que recibe exposiciones pict\u00F3ricas todos los meses. La restauraci\u00F3n de la casa, en su tramo final, tiene por objeto la instalaci\u00F3n del Museo de la Ciudad que se encuentra en proceso de conformaci\u00F3n.</p>",
				"description-en":"<p>It was inaugurated on September 27th 2012 in the Old Ghersi House. This place was built in the French style in the late 19th century as a summer home, and it had been practically abandoned of late. The local Municipality started the restoration works with the aim of settling there the Museum of the City. It now holds monthly exhibits of art.</p>",
				"scheduleOfAttentionWeek":"Jueves a domingos: de 17 a 21",
				"image1":"museo1.jpg",
				"image2":"museo2.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Capilla Kronfus",
				"name-en":"Kronfus Chapel",
				"id":"6",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Obra de inspiraci\u00F3n del Barroco Colonial dise\u00F1ada por el ingeniero y arquitecto Juan Kronfuss, que junto al Hospital Vicente Agüero datan del a\u00F1o 1925. Kronfuss naci\u00F3 en Bulgaria y lleg\u00F3 a Argentina en 1910. Su trabajo intenta rescatar la importancia del desarrollo de una arquitectura local vinculada a los materiales de la zona y no a la importaci\u00F3n de mercader\u00EDas y dise\u00F1os for\u00E1neos. Adem\u00E1s de esta capilla, en Jes\u00FAs Mar\u00EDa destacamos “El Cortijo” la casa de la familia Agüero construida en 1930 que se encuentra en el barrio Los Nogales (propiedad privada).</p>",
				"description-en":"<p>This neo-colonial baroque chapel was designed by engineer and architect Juan Kronfus and, along with Vicente Agüero Hospital, built in 1925. Juan Kronfus was born in Bulgary but moved to Argentina in 1910. He dedicated his efforts to the study of the architecture of Colonial Barroque in Latin America and the importance of using local materials against imported goods.</p><p>Kronfus designed as well the residence of Vicente Agüero´s family, called “El Cortijo” in Los Nogales suburb, built in 1930. (Not open to visit)</p>",
				"scheduleOfAttentionWeek":"Se la puede vistar en horario de misa: mi\u00E9rcoles, s\u00E1bados y domingos a las 18:30 hs.",
				"image1":"capilla1.jpg",
				"image2":"capilla2.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Parrillas de Jes\u00FAs Mar\u00EDa",
				"name-en":"Parrillas of Jes\u00FAs Mar\u00EDa",
				"id":"7",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Las parrillas se han ganado el mote de \u0022el mejor asado del mundo\u0022. M\u00E1s de cincuenta a\u00F1os de asado compartido en tablas \u0022de a dos\u0022 donde los cortes llegan uno a uno en su punto justo. Se degustan entre 10 y 15 piezas coronadas con los mejores vinos de la Argentina. Los cuadriles y los lomitos de cerdo son tan famosos como los mejores churrascos de la pampa h\u00FAmeda. Una conjunci\u00F3n de carne sabrosa y tierna con un m\u00E9todo especialmente pensado para la misma. Las pasturas y suelos del norte cordob\u00E9s le dan a las carnes gran sabor, pero si los animales son grandes sus carnes se vuelven duras. Por eso se consumen animales peque\u00F1os que a\u00FAn tienen un sabor intenso y guardan la ternura en sus fibras. As\u00ED, los cortes son todos peque\u00F1os, por lo que comer una parrillada completa en Jes\u00FAs Mar\u00EDa es una suerte de degustaci\u00F3n de diferentes cortes de vaca, cerdo y cabrito.</p><p>Asimismo la cocina gourmet se ha instalado en la ciudad para decir que no todo es asado. Es una opci\u00F3n novedosa y creativa que va de la mano de j\u00F3venes autores que desarrollan su arte con gran pasi\u00F3n. Premios como Mejor Plato de Vanguardia (Inocencio), Mejor Plato Regional (El Museo Resto Bar) y un puesto para competir en el Torneo Argentino de Chef (La Torgnole Gastronomique) atestiguan el desarrollo de alta calidad de estos establecimientos que participan constantemente en competencias, demostraciones y clases en centros de ense\u00F1anza de C\u00F3rdoba.</p>",
				"description-en":"<p>The Parrilla restaurants are of great importance in Jesus Maria and the surrounding region, offering the visitor a specially served treat. We boast of serving “the best asado in the world”</p><p>People sit at a table with a wooden plate between them. The meat is brought perfectly cooked, in small pieces, so nothing gets cold: beef, pork and kid in its different cuts and servings, accompanied by French fries topped with scrambled eggs or garden salads. The best wines of the country are available as well.</p><p>The gourmet cuisine has landed in the region to prove that not everything is asado. Young and daring new Chefs offer creative and delicious dishes and desserts.</p><p>Awards to The Best Vanguard Dish (Inocencio Resto), Best Regional Dish (El Museo Resto-Bar), and a chance to participate in the Argentinian Tournament for Chefs (La Torgnole Gastronomique) show the high developement and quality of these restaurants.</p>",
				"image1":"parrillada1.jpg",
				"image2":"parrillada2.jpg",
				"image3":"parrillada3.jpg",
				"image4":"parrillada4.jpg",
				"image5":"parrillada5.jpg"
			}
			],
			labelPlural: "Atracciones",
			labelSingular: "Atraccion",
			type: "attraction"
		},
		adScreen:{
			items: [
			{name:"adScreen1",id:"1", fileName:"3-fernet-listo2.png"}
			,{name:"adScreen2",id:"2", fileName:"12.png"}
			,{name:"adScreen3",id:"3", fileName:"23.png"}
			,{name:"adScreen4",id:"4", fileName:"diproach-180x180.jpg"}
			],
			labelPlural: "Publicidades de Pantall",
			labelSingular: "Publicidad de pantalla",
			type: "adScreen"
		},
		service:{
			items: [
			{
				"type":"service",
				"name":"Banco Galicia",
				"id":1,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucumán 570",
				"phoneNumber":3525427605
			},
			{
				"type":"service",
				"name":"Banco Macro",
				"id":2,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Martín 544",
				"phoneNumber":3525420840
			},
			{
				"type":"service",
				"name":"Banco Nación",
				"id":3,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Colón 82",
				"phoneNumber":3525420006
			},
			{
				"type":"service",
				"name":"Banco Provincia de Córdoba  (Caroya)",
				"id":4,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Udine 55",
				"phoneNumber":3525466222
			},
			{
				"type":"service",
				"name":"Banco Provincia de Córdoba",
				"id":5,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Martín 498",
				"phoneNumber":3525420226
			},
			{
				"type":"service",
				"name":"Banco Santander Río",
				"id":6,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Colón 26",
				"phoneNumber":3525423856
			},
			{
				"type":"service",
				"name":"Cajero Supermercado Disco",
				"id":7,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ingeniero Olmos 43",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Cajero Supermercado Mariano Max",
				"id":8,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Italia 363",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"GNC",
				"id":9,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Martín 2795",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Petrobras",
				"id":10,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 km. 746",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Petrol",
				"id":11,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Gral. Cabrera 17",
				"phoneNumber":3525401160
			},
			{
				"type":"service",
				"name":"Shell",
				"id":12,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. San Martin 88",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"YPF (Colonia Caroya)",
				"id":13,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. San Martin 3590",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"YPF Centro",
				"id":14,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Gral. Cabrera 17",
				"phoneNumber":3525401160
			},
			{
				"type":"service",
				"name":"YPF El Cruce",
				"id":15,
				"hotelType":"Estación de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 y Corrientes",
				"phoneNumber":3525422294
			},
			{
				"type":"service",
				"name":"Farmacia Daniotti",
				"id":16,
				"hotelType":"Farmacia",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Vicente Aguero 336",
				"phoneNumber":3525400200
			},
			{
				"type":"service",
				"name":"Farmacia Flores (Caroya)",
				"id":17,
				"hotelType":"Farmacia",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. San Martin 2795",
				"phoneNumber":3525469988
			},
			{
				"type":"service",
				"name":"Farmacia Flores",
				"id":18,
				"hotelType":"Farmacia",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Italia esq. Ameghino",
				"phoneNumber":3525425274
			},
			{
				"type":"service",
				"name":"Hospital Vicente Aguero",
				"id":19,
				"hotelType":"Hospital",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525426703
			},
			{
				"type":"service",
				"name":"America",
				"id":20,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444000
			},
			{
				"type":"service",
				"name":"Avenida",
				"id":21,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525466366
			},
			{
				"type":"service",
				"name":"Central",
				"id":22,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525422103
			},
			{
				"type":"service",
				"name":"Centro",
				"id":23,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525467700
			},
			{
				"type":"service",
				"name":"Colón",
				"id":24,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444900
			},
			{
				"type":"service",
				"name":"Diferencial",
				"id":25,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525445100
			},
			{
				"type":"service",
				"name":"Fono Car",
				"id":26,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525422499
			},
			{
				"type":"service",
				"name":"Fono Real",
				"id":27,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444300
			},
			{
				"type":"service",
				"name":"Italia",
				"id":28,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444300
			},
			{
				"type":"service",
				"name":"Jesús María",
				"id":29,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Vicente Aguero 336",
				"phoneNumber":3525400200
			},
			{
				"type":"service",
				"name":"La Plaza",
				"id":30,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525469000
			},
			{
				"type":"service",
				"name":"Los Hermanos",
				"id":31,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525401101
			},
			{
				"type":"service",
				"name":"Los Plátanos",
				"id":32,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525463333
			}
			],
			labelPlural: "Servicios",
			labelSingular: "Servicio",
			type: "service"
		},
		festival:{
			items: [
			{
				"type":"festival",
				"name":"Información del Festival",
				"name-en":"Festival Information",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Perez y Tucuman",
				"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
				"description-en":"<p>In May 1965, parents of school children, seeing the lack of good political measures in the area of Education, thought of having a Doma Festival as a way of raising funds. These persons invited people from other school boards and together they formed the Union of School Boards. Thanks to them, in January 1966 the first Festival was held. More than 45.000 people attended it, and the objective was amply reached.</p><p>The Festival is now the most important festival of its type in America, attracting every January more than 400 thousand spectators, and great TV and radio audience from all over the country. It is, as always, organized by the Union of School Boards, and the raised funds are divided among the schools to help support the education of our children.</p><p>The main attraction is the horseback riding championship, where a rider tries to stay on the back of the horse for a certain amount of time. The horses are specially bred and kept for this activity.</p><p> There are three categories in the competition: </p><ul><li>Crina Limpia: In this category the rider can only use a strip of leather around the horse´s neck for support, while poking the horse´s belly with his heels. Length of the ride: 8 seconds. </li><li>Grupa Sureña or Surera: In this category no stirrups can be used, although a skin of sheep is tied to the middle of the horse by a leather strip. The rider has to hold it for support with one hand while with the other holds the whip (called “huasca” or “talero”) Length of the ride: 12 seconds.</li><li>Basto con Encimera: In this one the rider must not lose the stirrups or 'charquear' (To touch the animal with the hands) Length of the ride: 15 seconds.</li></ul>",
				"xtraInfo":"<strong>Entradas Anticipadas</strong><br>AUTOENTRADA: www.autoentrada.com<br>Córdoba: Patio Olmos<br>Nuevo Centro Shopping<br>Córdoba Shopping<br>Shopping Paseo Rivera<br>Carlos Paz: Teatro Zorba<br>Villa Allende Shopping<br>Boleterías del Anfiteatro del Festival<br>Informes del Festival: Tel. 03525-605005",
				"image1":"festival1.jpg",
				"image2":"festival2.jpg",
				"image3":"festival3.jpg",
				"image4":"festival4.jpg",
				"image5":"festival5.jpg"
			}
			,
			{
				"type":"festival",
				"name":"Cronograma 2014",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"list",
				"listCode":"cronograma",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"festival",
				"name":"Alojamiento Temporario",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"list",
				"listCode":"temporaryAccommodation",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			],
			labelPlural: "Festival",
			labelSingular: "Festival",
			type: "festival"
		},
		restaurant:{
			items: [
			{
				"type":"restaurant",
				"name":"Cayoba",
				"id":1,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Almafuerte y Pedro J. Frías",
				"phoneNumber":3525422713,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Coffe Net",
				"id":2,
				"hotelType":"Bar",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ing. Olmos esq. Salta",
				"phoneNumber":3525425089,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Doble Click",
				"id":3,
				"hotelType":"Bar",
				"extendedView":"true",
				"listItemViewType":"extended",
				"address":"Tucumán esq. Zipoli",
				"phoneNumber":3543423533,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Parrilla Don Aristóbulo",
				"id":4,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 km. 754",
				"phoneNumber":3525442260,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"El Ceibo",
				"id":5,
				"hotelType":"Parrilla-Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Pedro J. Frías 1457",
				"phoneNumber":3525400531,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"El Padrino",
				"id":6,
				"hotelType":"Restaurante - Delivery",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"9 de Julio y Tucumán ",
				"phoneNumber":3525426295,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Inocencio",
				"id":7,
				"hotelType":"Restaurante - Cocina de Autor",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Córdoba 750",
				"phoneNumber":3525648089,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Cabaña Restaurante",
				"id":8,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 km. 755",
				"phoneNumber":3525420563,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Mora Resto Pub",
				"id":9,
				"hotelType":"Resto-bar",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Cástulo Peña 537",
				"phoneNumber":3525453397,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Mr. Wine",
				"id":10,
				"hotelType":"Bar",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Zípoli esq. Cástulo Peña",
				"phoneNumber":3525558761,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Parrilla de Julio",
				"id":11,
				"hotelType":"Parrilla-Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Almafuerte y Belgrano",
				"phoneNumber":3525420347,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Por Ahí",
				"id":12,
				"hotelType":"Bar",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Julio A. Roca y Córdoba",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Rancho el Cruce",
				"id":13,
				"hotelType":"Parrilla-Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Corrientes y Ruta 9",
				"phoneNumber":3525429989,
				"email":""
			}
			],
			labelPlural: "Restaurantes",
			labelSingular: "Restaurante",
			type: "restaurant"
		},
		cronograma:{
			items: [
			{
				"type":"cronograma",
				"name":"Viernes 10",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Nocheros<br>Alma de Luna<br>Carlos Sánchez “El Tucu”<br>Jessica Benavidez<br>Julián Burgos<br>Acto Inaugural",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$170",
				"ticketLow":"$150",
				"ticketKids":"gratis"
			}
			,
			{
				"type":"cronograma",
				"name":"Sábado 11",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Nacho y Daniel<br>Los Huayras<br>Por Siempre Tucu<br>Los de Alberdi<br>Silvia Lallana<br>Los de Cabrera<br>Grupo Imán<br>Claudio Acosta<br>4x4 y Pastor Luna<br>Flaco Peña<br>Desfile de Emprendados",
				"ticketGeneral":"$110",
				"ticketOldMan":"$40",
				"ticketHigh":"$90",
				"ticketLow":"$70",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Domingo 12",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Sergio Galleguillo y la Fiesta Chayera<br>Raly Barriouevo<br>Piñón Fijo<br>Las Valijas | Amboé<br>Gisela Santa Cruz<br>José Galante<br>Peñeros<br>Desfile 'La Unión de los pueblos'<br>2° Campeonato Nacional de Destrezas Gauchas",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$100",
				"ticketLow":"$80",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Lunes 13",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Tekis<br>Nestor Garnica<br>Tru-la-la | La Cantada<br>5 Sentidos<br>Los Izkierdos de la Cueva<br>Los Trajinantes<br>Ganador Peña 'El Aljibe'<br>Juegos Gauchos y Rastrín",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Martes 14",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Chaqueño Palavecino<br>Cacho Buenaventura<br>Guitarreros | La Callejera<br>Juan Bautista<br>Voces de Provincia<br>Cristian Quiroga<br>El Chofer del Chamamé y su conjunto<br>Vanina y su Folklore<br>Tropillas Entabladas",
				"ticketGeneral":"$100",
				"ticketOldMan":"$40",
				"ticketHigh":"$200",
				"ticketLow":"$180",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Miércoles 15",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"León Gieco<br>Dúo Coplanacu<br>La Copla<br><Los del Suquía<br>Leandro Lovato<br>Matacos<br>Senderos<br>Tropillas Entabladas",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$140",
				"ticketLow":"$120",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Jueves 16",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Abel Pintos<br>Fabricio Rodriguez<br>Almakanto<br>Cielo Tierra<br>Brisas del Norte<br>Chango Juárez<br>Los Infernales<br>Delegación de Entre Ríos<br>Los Surcos<br>Exhibición de Pato (Gendarmería Nacional)",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$200",
				"ticketLow":"$180",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Viernes 17",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Soledad<br>Jairo<br>Los Caligaris<br>La Huella<br>Murmullos<br>Los Legales<br>Ariel Rojas<br>Ana Rodriguez<br>Camperada",
				"ticketGeneral":"$90",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Sábado 18",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Manseros Santiagueños<br>Carabajalazo<br>Doña Jovita<br>Simplemente Los Cantores<br>Mario Alvarez Quiroga<br>Negro Ferreyra<br>Los Dioses del Chamamé<br>Paola Gudiño<br>María Luz<br>Chango Coplero<br>César Lagos<br>Camperada",
				"ticketGeneral":"$110",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Domingo 19",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Luciano Pereyra<br>Facundo Toro<br>Los Caldenes<br>Cuervos del Malambo<br>Los Quilmeños<br>Kmila Reynoso<br>Final del Campeonato Nacional de Jineteada",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Lunes 20",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Banda XXI | La Fiesta<br>Espectáculo de campo con:<br>18 Tropillas<br>Campeonato Nacional de Jineteada<br>75 jineteadas<br>6 montas especiales de Jinetes de la Patria por noche",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			],
			labelPlural: "Cronograma",
			labelSingular: "Cronograma",
			type: "cronograma"
		}
		,
		temporaryAccommodation:{
			items: [
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":1,
				"name":"Beltrame Hugo José",
				"address":"M. Moreno (n) 225",
				"phoneNumber":426950,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"A compartir / vent. de techo / TV cable / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":2,
				"name":"Lloubell Juliana",
				"address":"España 216",
				"phoneNumber":445584,
				"celNumber":15644479,
				"hotelType":"2 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":3,
				"name":"Suárez, Lidia",
				"address":"Cárcano 508 Dpto 3",
				"phoneNumber":443530,
				"celNumber":15646082,
				"hotelType":"1 mat",
				"garage":"",
				"aditionalInfo":"Para compartit -  patio con asador - ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":4,
				"name":"Avalos, Diana Teresita",
				"address":"Florencia 485",
				"phoneNumber":445949,
				"celNumber":15640524,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Para compratir - Ventiladores - Patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":5,
				"name":"Angulo, Nélida",
				"address":"Av. Miguel Juarez 939",
				"phoneNumber":400413,
				"celNumber":15455249,
				"hotelType":"2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo entrada para auto- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":6,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Juárez 874",
				"phoneNumber":443542,
				"celNumber":null,
				"hotelType":"1 mat",
				"garage":"true",
				"aditionalInfo":"Para Compartir - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":7,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Juárez 874",
				"phoneNumber":443542,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":8,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Juárez 874",
				"phoneNumber":443542,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":9,
				"name":"Flores, Ofelia",
				"address":"Santiago del Estero 1134",
				"phoneNumber":445696,
				"celNumber":null,
				"hotelType":"2 sgl.",
				"garage":"",
				"aditionalInfo":"Dpto completo - Patio - Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":10,
				"name":"Angulo Nora del Valle",
				"address":"Indepencia 1325",
				"phoneNumber":400692,
				"celNumber":null,
				"hotelType":"3 sgl.",
				"garage":"",
				"aditionalInfo":"Monoambiente / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":11,
				"name":"Cáceres Ismael",
				"address":"M. Moreno 1090",
				"phoneNumber":401327,
				"celNumber":15435994,
				"hotelType":"3 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / vent. De techo / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":12,
				"name":"Dalla Costa Beatriz",
				"address":"Mariano Moreno 770",
				"phoneNumber":401489,
				"celNumber":null,
				"hotelType":"3 sgl",
				"garage":"",
				"aditionalInfo":"Dto completo/cocina/heladera/anafe/ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":13,
				"name":"Micolini Nélida",
				"address":"Pedro de Oñate s/n",
				"phoneNumber":422138,
				"celNumber":15517910,
				"hotelType":"1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / aire acond. / entrada de vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":14,
				"name":"Alzualde, Héctor",
				"address":"Libertad 1388",
				"phoneNumber":400334,
				"celNumber":15481720,
				"hotelType":"1 mat/1sgl",
				"garage":"",
				"aditionalInfo":"Casa a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":15,
				"name":"Marshall, Paula",
				"address":"Rondeau 1540",
				"phoneNumber":442185,
				"celNumber":15643469,
				"hotelType":"3 sgl",
				"garage":"",
				"aditionalInfo":"Para Compartir - Aire acondicionado - entrada para auto - internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":16,
				"name":"Contreras, Sara Inés",
				"address":"América y Río Gallegos",
				"phoneNumber":443355,
				"celNumber":15517455,
				"hotelType":"1 mat / 1 sgl ",
				"garage":"",
				"aditionalInfo":"Casa completa -Entrada p/auto con techo - Ventiladores de Techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":17,
				"name":"Alvarez Simona Adelina",
				"address":"Buchardo 1369",
				"phoneNumber":400879,
				"celNumber":154166027,
				"hotelType":"4 sgl",
				"garage":"true",
				"aditionalInfo":"Casa ccompleta - patio - asador - vajilla - vantiladores - TV"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":18,
				"name":"Montero Juan Carlos",
				"address":"Dorrego 849",
				"phoneNumber":400459,
				"celNumber":15536618,
				"hotelType":"2sgl. / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / ventilador / TV / Quincho / asador interno"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":19,
				"name":"Cúchero Rodolfo Juan",
				"address":"O'Higgins 58",
				"phoneNumber":444492,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"",
				"aditionalInfo":"Wi Fi - Tv "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":20,
				"name":"Arrieta Juana",
				"address":"San Juan 377",
				"phoneNumber":400672,
				"celNumber":15517269,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/ventiladores/living/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":21,
				"name":"Bazán Javier",
				"address":"Potosí 243",
				"phoneNumber":400408,
				"celNumber":null,
				"hotelType":"2 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo - cocina - termotanque - vajilla"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":22,
				"name":"Benedetto Julio César",
				"address":"Mauricio Yadarola 344",
				"phoneNumber":401513,
				"celNumber":null,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventilador/patio interior/TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":23,
				"name":"Bernabey, Alfredo Antonio",
				"address":"Ameghino 385",
				"phoneNumber":605303,
				"celNumber":15418921,
				"hotelType":"1 mat 2 sgl",
				"garage":"",
				"aditionalInfo":" Casa  a compartir-ventiladores-patio-asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":24,
				"name":"Bustos Luciana Cecilia",
				"address":"Pje. Miguel Juárez 838",
				"phoneNumber":444137,
				"celNumber":15641789,
				"hotelType":"1 matr./ 1 cuch. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo - cocina-comedor-ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":25,
				"name":"Casimiro, Sabino",
				"address":"América 1193",
				"phoneNumber":400506,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"true",
				"aditionalInfo":"Casa a Compartir- cochera- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":26,
				"name":"Cisterna, María Isabel",
				"address":"Av 28 de Julio 8",
				"phoneNumber":401291,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo-Ventiladores-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":27,
				"name":"Coll, Jorge",
				"address":"Av. 28 de Julio 196 esq. C. Peña",
				"phoneNumber":427876,
				"celNumber":15564070,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/cocina comedor "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":28,
				"name":"Correa, Liliana Isabel",
				"address":"Lavalleja 1546",
				"phoneNumber":null,
				"celNumber":15415465,
				"hotelType":"1 mat 2 sgl",
				"garage":"",
				"aditionalInfo":"Dto Completo- Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":29,
				"name":"De Almirón Marta",
				"address":"25 de Mayo esq. M Moreno 199",
				"phoneNumber":421353,
				"celNumber":null,
				"hotelType":"2 cuch./12 sgl/2 matr.",
				"garage":"",
				"aditionalInfo":"Dt.o. completo / ventiladores / entr. para vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":30,
				"name":"D'andrea Juan Manuel",
				"address":"Delfín Díaz 247",
				"phoneNumber":400492,
				"celNumber":null,
				"hotelType":"1 matr./2 sgl. ",
				"garage":"",
				"aditionalInfo":"Aire acondicionado/patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":31,
				"name":"Di Filippo Pedro",
				"address":"San Juan 917",
				"phoneNumber":422271,
				"celNumber":15641032,
				"hotelType":"2 cuch.",
				"garage":"",
				"aditionalInfo":"Asador / Patio / ventiladores / entr. para vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":32,
				"name":"Hildbrand R. Carlos",
				"address":"O'Higgins 35",
				"phoneNumber":400027,
				"celNumber":null,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / ventilador de techo "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":33,
				"name":"Lamothe Carlos",
				"address":"Av. Mguel Juárez 954 ",
				"phoneNumber":422066,
				"celNumber":15533533,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/cocina comedor/heladera/microondas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":34,
				"name":"Leisa Alejandra",
				"address":"Pasaje Sur 1276",
				"phoneNumber":401714,
				"celNumber":15480040,
				"hotelType":"1 dbl. / 2 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa / ventiladores / 2 patios / TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":35,
				"name":"Lloubell Juliana",
				"address":"España 126",
				"phoneNumber":445584,
				"celNumber":15644479,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":36,
				"name":"Luna Norma",
				"address":"Almafuerte 346",
				"phoneNumber":null,
				"celNumber":15457760,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa / ventiladores / entr. para vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":37,
				"name":"Luna Oscar",
				"address":"Salta 845",
				"phoneNumber":401849,
				"celNumber":15548275,
				"hotelType":"1 matr./ 2 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/asador/ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":38,
				"name":"Quinteros Sandro",
				"address":"Mauricio Yadarola 265 ",
				"phoneNumber":442670,
				"celNumber":15562330,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo con aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":39,
				"name":"González, Fernando",
				"address":"Juan truetrueIII 155",
				"phoneNumber":400410,
				"celNumber":15535246,
				"hotelType":"1 mat/ 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":40,
				"name":"Gómez, Mariana",
				"address":"Sucre 425 (Dpto Fondo)",
				"phoneNumber":null,
				"celNumber":15488403,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo - patio - cochera descubierta - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":41,
				"name":"Lovaiza, Norma Beatríz",
				"address":"Malvinas Argentinas 1414",
				"phoneNumber":422904,
				"celNumber":15475409,
				"hotelType":"1 mat / 2 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Aires  - NIÑOS NO - Etruecelente estado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":42,
				"name":"Martinengo, Sebastián",
				"address":"Métrueico 1150",
				"phoneNumber":444321,
				"celNumber":15562176,
				"hotelType":"2 mat",
				"garage":"true",
				"aditionalInfo":"Dpto Completo -Aire acondicionado - Alarma"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":43,
				"name":"Manzur, Fabiana",
				"address":"Independencia 1020",
				"phoneNumber":444771,
				"celNumber":15453083,
				"hotelType":"2 sgl 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa a Compartir- entrada p/ vehículo- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":44,
				"name":"Acosta, Ernesto",
				"address":"Cástulo Peña 688 (planta Alta)",
				"phoneNumber":null,
				"celNumber":15534814,
				"hotelType":"1 mat/ 2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo - Ventiladores - Asador - Terraza"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":45,
				"name":"Sarmiento, Alinda Edith",
				"address":"Rioja 520",
				"phoneNumber":401792,
				"celNumber":null,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Para compartir - Entrada para auto - asador - patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":46,
				"name":"Ojeda, Irma",
				"address":"Buchardo 1370",
				"phoneNumber":400755,
				"celNumber":15522793,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa - entrada p/ auto - patio - asador - heladera - ventiladores- Aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":47,
				"name":"Gonzalez Crespín, Carlos",
				"address":"Buenos Aires 437",
				"phoneNumber":400722,
				"celNumber":15487616,
				"hotelType":"2 sgl . / 1 matr.",
				"garage":"",
				"aditionalInfo":"Monoambiente Completo / aire acond. / patio / asador / "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":48,
				"name":"Angelini, Gabriela",
				"address":"Pompeya 722",
				"phoneNumber":400745,
				"celNumber":15458780,
				"hotelType":"5 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa-aire acondicionado-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":49,
				"name":"Babiuch, Fabián",
				"address":"Valencia 516",
				"phoneNumber":442938,
				"celNumber":15449810,
				"hotelType":"1 mat-1 sgl 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa- aire acondicionado- entrada p/auto- tv cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":50,
				"name":"Borgogno, Daniel",
				"address":"Italia 807",
				"phoneNumber":401531,
				"celNumber":15644975,
				"hotelType":"5 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa completa/patio/asador/cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":51,
				"name":"Brizuela, Elisa",
				"address":"Independencia 990",
				"phoneNumber":444836,
				"celNumber":null,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/ventilador/cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":52,
				"name":"Cardozo, Hilda Noemí",
				"address":"Santiago del Estero 885",
				"phoneNumber":606014,
				"celNumber":null,
				"hotelType":"1 sgl/2 cuch.",
				"garage":"",
				"aditionalInfo":"Dt.o. completo / ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":53,
				"name":"Córdoba Silvina Inés",
				"address":"San Lorenzo 240",
				"phoneNumber":401389,
				"celNumber":15535747,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto completo / con  cochera  "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":54,
				"name":"Criado, Cristina Luisa",
				"address":"San Lorenzo 245",
				"phoneNumber":443532,
				"celNumber":15404748,
				"hotelType":"1 matr. / 3 ind. ",
				"garage":"true",
				"aditionalInfo":"Casa a compartir / ventiladores de techo / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":55,
				"name":"Curto, José Luis",
				"address":"Neuquén 1398",
				"phoneNumber":400121,
				"celNumber":null,
				"hotelType":"1 mat-1 sgl-1 cuch",
				"garage":"true",
				"aditionalInfo":"Casa a Compartir-quincho-asador-cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":56,
				"name":"Fantini, Liliana Beatriz",
				"address":"Ingeniero Olmos 793",
				"phoneNumber":401290,
				"celNumber":15415998,
				"hotelType":"1 matr./ 1 sgl./ 1 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo en P.A./ terraza / asador / TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":57,
				"name":"Flores, Ofelia",
				"address":"Santiago del Estero 1134",
				"phoneNumber":445696,
				"celNumber":15520684,
				"hotelType":"1 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":58,
				"name":"Gonzalez, Juan Oscar",
				"address":"Sargento Acosta 290",
				"phoneNumber":401161,
				"celNumber":null,
				"hotelType":"5 sgl. ",
				"garage":"",
				"aditionalInfo":"Ventilador de techo / TV / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":59,
				"name":"Herrera, Jacinto",
				"address":"La Isla 740",
				"phoneNumber":401894,
				"celNumber":null,
				"hotelType":"1 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/cocina/microondas/lavadero/lavarropas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":60,
				"name":"Moreno, Silvia",
				"address":"Cuba 1288",
				"phoneNumber":444380,
				"celNumber":null,
				"hotelType":"1 matr./ 1 sgl. / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":61,
				"name":"Campos María Luján",
				"address":"Antártida Argentina 215",
				"phoneNumber":423107,
				"celNumber":15482414,
				"hotelType":"1 sgl./2 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo/entrada individual "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":62,
				"name":"Romanutti, Ana María",
				"address":"Sarmiento 154",
				"phoneNumber":null,
				"celNumber":15641358,
				"hotelType":"1 mat- 3 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-aire acondicionado-quincho-patio-cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":63,
				"name":"Salvucci Omar Daniel",
				"address":"Mariano Moreno 131",
				"phoneNumber":443968,
				"celNumber":15642907,
				"hotelType":"2 matr./1 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa a compartit/TV/ventiladores/living/patio/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":64,
				"name":"Tulián, Gabriela María",
				"address":"Almafuerte 352",
				"phoneNumber":null,
				"celNumber":15529841,
				"hotelType":"1mat-1 cuch-1 sgl",
				"garage":"",
				"aditionalInfo":"Casa a Compartir-entrada p/ autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":65,
				"name":"Zanón, Nancy Elizabeth",
				"address":"Tilcara 288",
				"phoneNumber":442198,
				"celNumber":null,
				"hotelType":"1 mat/ 3 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":66,
				"name":"Ojeda, Irma",
				"address":"América 1122",
				"phoneNumber":400755,
				"celNumber":15522793,
				"hotelType":"1 mat. / 3 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa Completa - Asador - Patio - Ventiladores de Techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":67,
				"name":"Domene, Claudia",
				"address":"Ayacucho 271",
				"phoneNumber":null,
				"celNumber":15530528,
				"hotelType":"1 mat / 1 sgl / 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto completo - asador - patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":68,
				"name":"Rodríguez, César Anibal",
				"address":"Buchardo 1458",
				"phoneNumber":445280,
				"celNumber":15555140,
				"hotelType":"1 mat / 3 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Ventiladores - Lavarropas - Heladera - cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":69,
				"name":"Páez, Oscar",
				"address":"Congreso 1151",
				"phoneNumber":400597,
				"celNumber":15643261,
				"hotelType":"5 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":70,
				"name":"Angulo, Alba Luz",
				"address":"Corrientes 931",
				"phoneNumber":442108,
				"celNumber":null,
				"hotelType":"1 mat 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa a Compatir- patio- calefón eléctrico"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":71,
				"name":"Aguirre, Luis Evaristo",
				"address":"Santiago del Estero 1135",
				"phoneNumber":426134,
				"celNumber":null,
				"hotelType":"6 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa- cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":72,
				"name":"Alvarez Jorge ",
				"address":"Santiago del Estero 971",
				"phoneNumber":null,
				"celNumber":15554675,
				"hotelType":"3 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/patio/cocina completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":73,
				"name":"Carrizo, Sergio Eduardo",
				"address":"Rio Gallegos 1432",
				"phoneNumber":445486,
				"celNumber":15441704,
				"hotelType":"1 mat 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa- patio-asador ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":74,
				"name":"Chavarría Graciela",
				"address":"Ramón J. Cárcano 240",
				"phoneNumber":444182,
				"celNumber":15410700,
				"hotelType":"4 sgl./1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / patio / asador /aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":75,
				"name":"Cúchero Rodolfo Juan",
				"address":"O'Higgins 58",
				"phoneNumber":444492,
				"celNumber":null,
				"hotelType":"1 matr./ 1 cuch./2 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa / aire acond. / TV cable / Wi Fi / "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":76,
				"name":"Diale Juan Carlos",
				"address":"España 832",
				"phoneNumber":null,
				"celNumber":15647080,
				"hotelType":"1 matr./ 4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventilador/TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":77,
				"name":"Di Filipo, Pedro",
				"address":"Sgo del Estero 1041",
				"phoneNumber":422271,
				"celNumber":15641032,
				"hotelType":"2 sgl- 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-  Cochera- Patio-asador-ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":78,
				"name":"Ledesma, Federico",
				"address":"Sarmiento 154",
				"phoneNumber":null,
				"celNumber":15641358,
				"hotelType":"2 mat- 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-Aire acondicionado internet wifi. Cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":79,
				"name":"Légora Luis Alberto",
				"address":"López y Planes 257",
				"phoneNumber":400585,
				"celNumber":15529190,
				"hotelType":"1 matr. / 4 sgl.",
				"garage":"true",
				"aditionalInfo":"Dto.  compartir/asador/patio/ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":80,
				"name":"López, Marco Eliseo",
				"address":"Av. 28 de Julio 972",
				"phoneNumber":null,
				"celNumber":15413096,
				"hotelType":"1 matr./2 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/ventiladores/heladera/entrada para autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":81,
				"name":"Llanos Claudio Ramón",
				"address":"La Cabaña 1798",
				"phoneNumber":443976,
				"celNumber":15406982,
				"hotelType":"1 matr./2 sgl./ 1cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo/ventiladores "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":82,
				"name":"Lloubell Juliana",
				"address":"España 126",
				"phoneNumber":445584,
				"celNumber":15644479,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":83,
				"name":"Martini, Margarita",
				"address":"Delfín Díaz 30",
				"phoneNumber":421693,
				"celNumber":15485114,
				"hotelType":"3 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. En muy buen estado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":84,
				"name":"Micolini Nélida",
				"address":"Pedro de Oñate s/n",
				"phoneNumber":422138,
				"celNumber":15517910,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa. Entrada para vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":85,
				"name":"Montenegro Marcela",
				"address":"Sucre 377",
				"phoneNumber":426640,
				"celNumber":null,
				"hotelType":"1 matr./ 4 sgl. ",
				"garage":"true",
				"aditionalInfo":"Casa completa / Buen estado / garage para dos autos / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":86,
				"name":"Noya Patricia María",
				"address":"Neuchatel 386",
				"phoneNumber":425598,
				"celNumber":15480412,
				"hotelType":"4 sgl. / 1 matr. ",
				"garage":"true",
				"aditionalInfo":"Casa completa / piscina / ventiladores / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":87,
				"name":"Oyola. Olga Rosa",
				"address":"España 1205 (dto. 4)",
				"phoneNumber":null,
				"celNumber":15542071,
				"hotelType":"2 sgl. / 2 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/tv cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":88,
				"name":"Ozán Eduardo Alberto",
				"address":"San Juan 992 (Int. Céspedes)",
				"phoneNumber":424380,
				"celNumber":15439065,
				"hotelType":"1 matr./4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/ventiladoes/anafe"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":89,
				"name":"Raggiotti, Lidia Raquel",
				"address":"Congreso 919",
				"phoneNumber":445873,
				"celNumber":15455690,
				"hotelType":"4 sgl- 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa-Patio-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":90,
				"name":"Zanón Lucía Rosa",
				"address":"Tilcara 288",
				"phoneNumber":442110,
				"celNumber":null,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Ventilador/ patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":91,
				"name":"Heredia, Marcelo Ramón",
				"address":"Independencia 1634",
				"phoneNumber":401804,
				"celNumber":15547298,
				"hotelType":"1 mat/ 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":92,
				"name":"Díaz, Sandra",
				"address":"La Cabaña 1768",
				"phoneNumber":443688,
				"celNumber":15502090,
				"hotelType":"2 mat / 1 cuch",
				"garage":"",
				"aditionalInfo":"Dpto Completo, con pileta de natación"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":93,
				"name":"Fanin, Iris Josefa",
				"address":"Sgto Acosta 16",
				"phoneNumber":422206,
				"celNumber":15615856,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Para compartir - 2 Habitaciones con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":94,
				"name":"Fernandez, María Mercedes",
				"address":"Antartida Argentina 175",
				"phoneNumber":400830,
				"celNumber":null,
				"hotelType":"4 sgl- 1 cuch",
				"garage":"",
				"aditionalInfo":"Dpto Completo-entrada p/ vehículo- asador Patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":95,
				"name":"Mattos, Martín",
				"address":"Río Gallegos 1238",
				"phoneNumber":445088,
				"celNumber":15600135,
				"hotelType":"1 mat / 4 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa - Aire acondicionado - asador - patio - alarma"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":96,
				"name":"Lenarduzzi, Franco",
				"address":"Alte Brown esq. Tierral del Fuego",
				"phoneNumber":null,
				"celNumber":15520377,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo - 1 Baño solo con ducha - Asador a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":97,
				"name":"Molina, José Oscar",
				"address":"Viedma 1747",
				"phoneNumber":467314,
				"celNumber":15441666,
				"hotelType":"1 mat / 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa completa - entrada p/ auto - patio - cocina - heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":98,
				"name":"Moyano, Humberto",
				"address":"Puerto de Palo 1135",
				"phoneNumber":null,
				"celNumber":15416192,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Entrada para auto techada"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":99,
				"name":"Tribbia, Concepción Yolanda",
				"address":"Cº Champaqui 238",
				"phoneNumber":428582,
				"celNumber":15545406,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Casa completa - Sin Sábanas - Aire - entrada p/ auto - ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":100,
				"name":"Zanón, Lucia Rosa",
				"address":"Tilcara 288",
				"phoneNumber":442110,
				"celNumber":null,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":""
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":101,
				"name":"Zanón Miguel Angel",
				"address":"Tilcara 288",
				"phoneNumber":442201,
				"celNumber":null,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / ventilador "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":102,
				"name":"Astrada Margarita",
				"address":"Bv. Agüero 327",
				"phoneNumber":400491,
				"celNumber":null,
				"hotelType":"1 matr./4 sgl.",
				"garage":"",
				"aditionalInfo":"Hab. con entrada ind. /ventilador/asador - 1 hab. Con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":103,
				"name":"Camino Laura Argentina",
				"address":"Potosí 338",
				"phoneNumber":605063,
				"celNumber":null,
				"hotelType":"1 matr./5 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa-baño con bañera/A. acond. / patio c/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":104,
				"name":"Cuitiño Nancy Isabel",
				"address":"Remedi 134",
				"phoneNumber":null,
				"celNumber":15501183,
				"hotelType":"1 matr./1sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":105,
				"name":"Ferreyra María Analía",
				"address":"Formosa 321",
				"phoneNumber":425530,
				"celNumber":null,
				"hotelType":"1 matr./ 3 sgl / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":106,
				"name":"Grandi Armando ",
				"address":"Sarmiento 373",
				"phoneNumber":401178,
				"celNumber":15509488,
				"hotelType":"1 matr. / 5 sgl.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / patio / calefón eléctrico / patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":107,
				"name":"Quinteros Sandro",
				"address":"Mauricio Yadarola 265 ",
				"phoneNumber":442670,
				"celNumber":15562330,
				"hotelType":"5 sgl. / 1 cuch. ",
				"garage":"",
				"aditionalInfo":"Dto completo "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":108,
				"name":"Vega Julio Nicolás",
				"address":"Libertad 1096 esq. Balcarce",
				"phoneNumber":null,
				"celNumber":15643102,
				"hotelType":"1 matr./5 sgl. ",
				"garage":"true",
				"aditionalInfo":"Casa completa/cocina/lavarropa/2 TV/ventiladores/patio asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":109,
				"name":"Nievas Cristina Alejandra ",
				"address":"Pje. Di Filippo 819",
				"phoneNumber":null,
				"celNumber":15536841,
				"hotelType":"1 matr./1 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/Asador/Aire acondicionado/lavarropas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":110,
				"name":"Reyna, María Cristina",
				"address":"Igualdad 1197",
				"phoneNumber":444773,
				"celNumber":15644620,
				"hotelType":"1 mat/5 sgl",
				"garage":"",
				"aditionalInfo":"Casa completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":111,
				"name":"Angulo, Nélida",
				"address":"Av. Miguel Juarez 939",
				"phoneNumber":400413,
				"celNumber":15533533,
				"hotelType":"8 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo- entrada para auto-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":112,
				"name":"Quiroga Mirta Gladis",
				"address":"Int. Céspedes 640",
				"phoneNumber":443561,
				"celNumber":15447804,
				"hotelType":"2 matr./4 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa/ventiladres/estado regular"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":113,
				"name":"Rizzi, Ricardo",
				"address":"Milán 421",
				"phoneNumber":425139,
				"celNumber":15537000,
				"hotelType":"2 mat- 2 cuch",
				"garage":"true",
				"aditionalInfo":"Casa Completa-quincho-asador- ventiladores  de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":114,
				"name":"Salas Rubén",
				"address":"Formosa 224",
				"phoneNumber":444374,
				"celNumber":15511366,
				"hotelType":"6 sgl. / 1 matr. ",
				"garage":"",
				"aditionalInfo":"Casa confortable/buena ventilación"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":115,
				"name":"Serafini Margarita",
				"address":"Gral. O'Higgins 141",
				"phoneNumber":400485,
				"celNumber":null,
				"hotelType":"4 cuch",
				"garage":"",
				"aditionalInfo":"Dto. Completo con TV/anafe/patio (contrapiso)"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":116,
				"name":"Verón Luis Fernando",
				"address":"El Salvador 805",
				"phoneNumber":null,
				"celNumber":15510482,
				"hotelType":"1 matr./2 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Habitaciones en muy buen estado/ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":117,
				"name":"Migotti, Sandra",
				"address":"España 235",
				"phoneNumber":400783,
				"celNumber":15544845,
				"hotelType":"1 mat/ 4 sgl/ 1 cuch",
				"garage":"",
				"aditionalInfo":"Para compartir - Entrada para auto - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":118,
				"name":"Garione, Matilde del Carmen",
				"address":"Julio A. Roca 355",
				"phoneNumber":null,
				"celNumber":15454551,
				"hotelType":"4 cuch",
				"garage":"",
				"aditionalInfo":"Dpto completo - Calefon eléctrico - ventiladores de pie"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":119,
				"name":"Bustamante Teresa",
				"address":"Costanera oeste 610",
				"phoneNumber":401169,
				"celNumber":15441317,
				"hotelType":"7 sgl. / 1 matr.",
				"garage":"true",
				"aditionalInfo":"Casa completa / Aire aconodicionado / Internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":120,
				"name":"Campos María Luján",
				"address":"Antártida Argentina 215",
				"phoneNumber":423107,
				"celNumber":15482414,
				"hotelType":"3 sgl./3 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa-ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":121,
				"name":"Chavarría Mafalda",
				"address":"Mauricio Yadarola 505 esq. Juan B. Alberdi 795",
				"phoneNumber":426480,
				"celNumber":null,
				"hotelType":"1 matr. / 9 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa a compartir / baños a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":122,
				"name":"Fantini, Liliana Beatriz",
				"address":"Paraguay 167",
				"phoneNumber":401290,
				"celNumber":15415998,
				"hotelType":"9 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/living/comedor/cocina/patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":123,
				"name":"Santucho María",
				"address":"Venezuela 135",
				"phoneNumber":423791,
				"celNumber":15431810,
				"hotelType":"3 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Patio con asador/aire acond. en 1 habitación/ pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":124,
				"name":"Cuitiño, Nancy",
				"address":"Remedi 134",
				"phoneNumber":null,
				"celNumber":15501183,
				"hotelType":"3 mat / 1 sgl / 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa completa - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":125,
				"name":"Aguirre Luis Evaristo",
				"address":"Guayaquil 1447",
				"phoneNumber":426134,
				"celNumber":15618838,
				"hotelType":"6 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Patio/ventiladores/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":126,
				"name":"Bochetto Ricardo",
				"address":"Sucre 401",
				"phoneNumber":606298,
				"celNumber":null,
				"hotelType":"5 sgl. / 2 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / ventiladores / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":127,
				"name":"Oviedo Carlos José",
				"address":"Potosí 316",
				"phoneNumber":443810,
				"celNumber":null,
				"hotelType":"8 sgl. / 1 cuch. ",
				"garage":"true",
				"aditionalInfo":"Vent. de techo / asador / tv / cocheras / aire acond."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":128,
				"name":"Britos, Walter Fabián",
				"address":"Sargento Cabral 1634",
				"phoneNumber":443137,
				"celNumber":15405534,
				"hotelType":"5 sgl / 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":129,
				"name":"Quinteros Sandro",
				"address":"Mauricio Yadarola 265 ",
				"phoneNumber":442670,
				"celNumber":15562330,
				"hotelType":"2 mat-6 sig",
				"garage":"true",
				"aditionalInfo":"Dto. Completo con aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":130,
				"name":"Quinteros Sandro",
				"address":"O'Higgins 250",
				"phoneNumber":442670,
				"celNumber":15562330,
				"hotelType":"9 sgl. / 2 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/Patio/Asador/Quincho/entrada para 1 auto"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":131,
				"name":"Angulo Nora del Valle",
				"address":"Indepencia 1325",
				"phoneNumber":400692,
				"celNumber":null,
				"hotelType":"5 sgl./2 matr./ 1 cuch",
				"garage":"",
				"aditionalInfo":"A compartir / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":132,
				"name":"De Cándido Esther Graciela",
				"address":"Mariano Moreno 183",
				"phoneNumber":423149,
				"celNumber":15647228,
				"hotelType":"7 sgl. / 2 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / asadores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":133,
				"name":"Llanos Claudio Ramón",
				"address":"La Cabaña 1788",
				"phoneNumber":443976,
				"celNumber":15406982,
				"hotelType":"9 sgl. /1 matr. ",
				"garage":"true",
				"aditionalInfo":"Casa comp. / aire acond. / ventiladores / coch. tres autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":134,
				"name":"Moyano, María Josefina",
				"address":"López y Planes 175",
				"phoneNumber":400442,
				"celNumber":15547423,
				"hotelType":"1 mat/ 9 sgl",
				"garage":"",
				"aditionalInfo":"uno de los baños es a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":135,
				"name":"Chavarría Graciela",
				"address":"Ramón J. Cárcano 248",
				"phoneNumber":444181,
				"celNumber":15410700,
				"hotelType":"6 sgl./3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa / patio  / ventiladores / aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":136,
				"name":"Gerez Albana María",
				"address":"Aníbal Viale 639",
				"phoneNumber":423870,
				"celNumber":15645928,
				"hotelType":"2 cuch./2 matr./4 ind.",
				"garage":"true",
				"aditionalInfo":"Casa comp. / vent. / patio / piscina / garage p 2 vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":137,
				"name":"Herrera, Lorenza",
				"address":"Castulo Peña 1122",
				"phoneNumber":0352515538249,
				"celNumber":null,
				"hotelType":"12 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Patio grande"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":138,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":0351152445591,
				"celNumber":null,
				"hotelType":"12 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa Completa-aire acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":139,
				"name":"Juncos Marta Elena",
				"address":"Bolivia 236",
				"phoneNumber":427115,
				"celNumber":15643741,
				"hotelType":"6 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/vantiladores/cocina a dispocisión"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":140,
				"name":"Migotti, Rolando/Domene Sandra",
				"address":"Juan B. Alberdi 150",
				"phoneNumber":401354 ,
				"celNumber":15413013,
				"hotelType":"3 mat. 6 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa- entrada p/ vehículos-Asador internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":141,
				"name":"Oroná Teresita",
				"address":"Indepencia 1538",
				"phoneNumber":401422,
				"celNumber":15542144,
				"hotelType":"2 matr./2 sgl. / 3 cuch.",
				"garage":"",
				"aditionalInfo":"Baño con jacuzzi / cocina comedor con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":142,
				"name":"Roberto, José Luis",
				"address":"Independencia 1355",
				"phoneNumber":null,
				"celNumber":15475457,
				"hotelType":"2 sgl./3 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa/cocina comedor/heladera/patio con asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":143,
				"name":"Angulo Selva Inés",
				"address":"Corrientes 936",
				"phoneNumber":400148,
				"celNumber":null,
				"hotelType":"3 sgl. / 2 matr. / 3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / entrada para vehículos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":144,
				"name":"Angulo de Junco Rosa",
				"address":"Gral. O'Higgins 156",
				"phoneNumber":443559,
				"celNumber":null,
				"hotelType":"12 sgl. / 1 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / patio / asador / ventilador de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":145,
				"name":"De Blas Pura Rosa",
				"address":"9 de Julio 174",
				"phoneNumber":401945,
				"celNumber":15436119,
				"hotelType":"8 sgl. / 2 cuch. / 1 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / Aire acondicionado / TV"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":146,
				"name":"Gele Diego",
				"address":"Bolivia 271 ",
				"phoneNumber":442050 ,
				"celNumber":15576973,
				"hotelType":"10 sgl. 2 matr.",
				"garage":"",
				"aditionalInfo":"Casa completa / asador / patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":147,
				"name":"Astrada Margarita",
				"address":"Bv. Agüero 327",
				"phoneNumber":400491,
				"celNumber":null,
				"hotelType":"4 matr./4 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"2Dptos 1 Hab.c/uno. Con entrada ind. y comp. / ventiladores/baños a comp."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":148,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":null,
				"celNumber":3512445591,
				"hotelType":"16 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa. Aire Acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":149,
				"name":"Posta de la Caridad ",
				"address":"Alte Brown 1450",
				"phoneNumber":401333,
				"celNumber":null,
				"hotelType":"9 sgl./4 cuch.",
				"garage":"",
				"aditionalInfo":"Cada habitación tiene baño privado/ entrada para vehiculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":150,
				"name":"Sarmiento José María",
				"address":"Gregorio Carreras 544",
				"phoneNumber":606625,
				"celNumber":null,
				"hotelType":"1 matr./9 sgl./3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/asador/patio/vent./3 hab. con a. acond."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":151,
				"name":"Bizzocchi, de Marino, Irma",
				"address":"Lucerna 338",
				"phoneNumber":null,
				"celNumber":3515185652,
				"hotelType":"2 mat-10 sgl 1 cuch 2 c",
				"garage":"true",
				"aditionalInfo":"Casa Completa-quincho-pileta patio cochera-horno chileno"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":152,
				"name":"Bustos, Floreana",
				"address":"Tucumán 1346",
				"phoneNumber":null,
				"celNumber":3515462718,
				"hotelType":"10 sgl. 4 matr.",
				"garage":"",
				"aditionalInfo":"Csa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":153,
				"name":"Rocha, Benito Eduardo",
				"address":"Mauricio Yadarola 120",
				"phoneNumber":6065500,
				"celNumber":15447665,
				"hotelType":"11 sgl  4 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa-aire acondicionado- entrada p/ vehiculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":154,
				"name":"De Almirón Marta",
				"address":"25 de Mayo esq. M Moreno 199",
				"phoneNumber":421353,
				"celNumber":null,
				"hotelType":"2 cuch./12 sgl/2 matr.",
				"garage":"true",
				"aditionalInfo":"A compartir / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":155,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":null,
				"celNumber":3512415591,
				"hotelType":"20 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa-aire acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":156,
				"name":"Juncos Marta Elena",
				"address":"Bolivia 236",
				"phoneNumber":427115,
				"celNumber":15643741,
				"hotelType":"4 matr./5 sgl./9 cuch.",
				"garage":"",
				"aditionalInfo":"Dto completo/cocina/heladera/cocina/ventilador"
			}
			],
			labelPlural: "Alojamientos",
			labelSingular: "Alojamiento",
			type: "temporaryAccommodation"
		}

	},

	getDefinition:function (type) {

		if(type == this.type.restaurant.code){
			return this.type.restaurant;
		} else if(type == this.type.hotel.code){
			return this.type.hotel;
		} else if(type == this.type.attraction.code){
			return this.type.attraction;
		} else if(type == this.type.adScreen.code){
			return this.type.adScreen;
		} else if(type == this.type.otherEvent.code){
			return this.type.otherEvent;
		} else if(type == this.type.service.code){
			return this.type.service;
		} else if(type == this.type.festival.code){
			return this.type.festival;
		} else if(type == this.type.cronograma.code){
			return this.type.cronograma;
		} else if(type == this.type.temporaryAccommodation.code){
			return this.type.temporaryAccommodation;
		}

		return;
	},

	getSetup:function (type) {

		if(type == this.type.restaurant.code){
			return this.setup.restaurant;
		} else if(type == this.type.hotel.code){
			return this.setup.hotel;
		} else if(type == this.type.attraction.code){
			return this.setup.attraction;
		} else if(type == this.type.adScreen.code){
			return this.setup.adScreen;
		} else if(type == this.type.otherEvent.code){
			return this.setup.otherEvent;
		} else if(type == this.type.service.code){
			return this.setup.service;
		} else if(type == this.type.festival.code){
			return this.setup.festival;
		} else if(type == this.type.cronograma.code){
			return this.setup.cronograma;
		} else if(type == this.type.temporaryAccommodation.code){
			return this.setup.temporaryAccommodation;
		}

		return;
	},


	urlBase:"http://www.diproach.com/api/dc",
	//urlBase:"http://localhost:8888/api/dc",

	getAll:function (type, successCallback, errorCallback) {

		var definition = this.getDefinition(type);

		if(App.isOnlineEnabled() == false){
			var setup = this.getSetup(type);
    		//successCallback(JSON.stringify(setup));
    		successCallback(setup);
    	} else {
    		JSonUtil.read(definition.fileName, successCallback, errorCallback);
    	}

    },


    getById:function (id, collection) {

    	for (var x=0; x < collection.length; x++) {
    		var item = collection[x];
    		if (item.id == id){
    			return item;
    		}
    	}
    	return null;
    },

    updateAll:function(){
    	if(App.isOnlineEnabled() == false) return;

    	_.each(this.type, function (item) {
    		this.update(item);
    	}, this);
    },

    update:function(item){

    	var setup = this.getSetup(item.code);

    	JSonUtil.exists(item.fileName,
    		function(){
    			// If exists update from server
    			ModelManager.updateFromServer(item);
    		},
    		function(){

				// If not exist create file with setup values
				JSonUtil.save(item.fileName, setup,
					function(){


						// If file was created we must try update from server
						ModelManager.updateFromServer(item);

					},
					function(){}
					);
			},
			function(){}
			);
    },

    updateFromServer:function(definition){

    	var loadUrl = this.urlBase + definition.url;

    	$.getJSON(loadUrl, function(result) {


    		var jsonString = JSON.stringify(result.data);
    		JSonUtil.save(definition.fileName, jsonString, function(){}, function(){} );

    	}).error(function(result) {
    	});

    }


};
