
/* Clave API: AIzaSyDjhn55tl5Fa7j31whPw8ilEmg-IF6CL5o */


const apiKey = "AIzaSyDjhn55tl5Fa7j31whPw8ilEmg-IF6CL5o";
const channelId = "UC247o-dCSsEb362mB9ALaRw";
const getLatestVideo = async () => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    const videoItem = data.items.find(item => item.id.videoId);
    if (!videoItem) throw new Error("No se encontró video válido");

    const videoId = videoItem.id.videoId;

    document.getElementById("video-container").innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } catch (error) {
    console.error("Error al cargar el video:", error);
    document.getElementById("video-container").innerText = "No se pudo cargar el video.";
  }
};

getLatestVideo();

const indices = new Map();
function moveSlide(button, step) {
  const wrapper = button.closest('.carrusel-wrapper');
  const carrusel = wrapper.querySelector('.carrusel');
  const images = carrusel.querySelectorAll('img');
  const totalImages = images.length;

  let index = indices.get(carrusel) || 0;
  index += step;

  if (index < 0) index = totalImages - 1;
  if (index >= totalImages) index = 0;

  const imageWidth = images[0].offsetWidth + parseFloat(getComputedStyle(carrusel).gap || 0);
  carrusel.style.transform = `translateX(${-index * imageWidth}px)`;
  indices.set(carrusel, index);
}



const traducciones = {
  ro: {
    quienes_somos: "CINE SUNTEM?",
    construimos_juntos: "CONSTRUIM ÎMPREUNĂ",
    contactanos: "CONTACTEAZA-NE",
    inicio_bienvenida: "Bine ai venit la EBEN-EZER!",
    sub_bienvenida: "Locul în care te întâlnești cu Dumnezeu",
    breve_descripción: "Suntem o biserică penticostală română aflată în Castellón de la Plana, care poartă un nume cu o semnificație profundă și biblică, inspirat din Vechiul Testament, mai exact din 1 Samuel 7:12, unde profetul Samuel a ridicat o piatră și a numit-o EBEN EZER, spunând:",
    significado: "Până aici Domnul ne-a ajutat!",
    objetivo_nombre: "Acest nume ne reamintește de ajutorul și protecția divină de care avem parte în fiecare zi, în toate încercările și binecuvântările vieții, fiind susținuți de Dumnezeu în fiecare clipă.",
    leer_mas: "CITEŞTE MAI MULT",
    ultimo_video: "Urmărește ultimul nostru mesaj!",
    mensaje_video: "Fii la curent cu cele mai recente predici, mesaje biblice și momente de închinare de la Biserica Eben-Ezer.",
    nuevo_capitulo: "UN NOU CAPITOL",
    descripcion_nuevo_capitulo: "Cu ajutorul lui Dumnezeu, am pornit împreună într-un nou capitol al istoriei noastre, în care El a deschis pentru noi orizonturi la care nici nu am fi visat",
    saber_mas: "AFLĂ MAI MULTE",
    sobre_nosotros: "DESPRE NOI",
    descripcion_1999: "Biserica Eben Ezer din Castellon de la Plana și-a început activitatea în urmă cu 24 de ani, mai exact prin iunie 1999, când un grup de frați, majoritatea din județul Arad, au început să se adune în localul unei biserici spaniole din oraș, care le-a dat posibilitatea să facă un program duminica dimineața.",
    descripcion_2_1999: "Numărul participanților a crescut considerabil în anul următor încât frații s-au văzut obligați să-și caute un local propriu. Acest lucru a devenit posibil în anul 2001, când a fost închiriat un alt spațiu, iar în luna septembrie a aceluiași an, localul era terminat de amenajat și biserica a început să funcționeze în alte condiții și la alți parametri.",
    descripcion_2001: "Spre sfârșitul anului 2001 a sosit în biserică fratele Mihai Morar, care l-a scurt timp a devenit conducătorul bisericii, iar în anii următori a fost ordinat prezbiter și apoi pastor.",
    descripcion_2_2001: "În vremea respectivă, fluxul migrator dinspre  România era foarte intens și în felul acesta biserica a crescut foarte mult. Astfel, în anul 2003 s-a văzut nevoită să-și caute un alt local mai amplu. Acest lucru a devenit realitate în luna iunie când Biserica Eben Ezer s-a mutat într-un alt local situat pe Paseo Morella.",
    descripcion_2007: "Patru ani mai târziu, în anul 2007, eram în aceeași situație, adică localul era supraaglomerat, încât am fost nevoiți să ne căutăm un alt local. Astfel am ajuns aici, unde suntem acuma, într-o zonă industrială, unde am închiriat acest spațiu care măsoară 1400 mp. iar sala de cult are o capacitate pentru aproximativ 1000 de persoane.",
    descripcion_2_2007: "Între timp, în decembrie 2021 biserica noastră a trecut printr-o grea încercare, când pastorul nostru, fratele Mihai Morar, în urma unei boli crunte, de scurtă durată, ne-a părăsit și a plecat la Domnul. A fost o grea lovitură pentru întreaga comunitate, dar cu ajutorul Domnului, ne-am continuat activitatea.",
    presente: "Prezent",
    descripcion_presente: "În acești 24 de ani, prin harul lui Dumnezeu, aici am efectuat 36 de botezuri în apă, 578 de persoane beneficiind de această posibilitate, de a încheia legământ cu Domnul. De asemenea, 624 de copii au fost aduși aici la binecuvântare, 200 de cupluri au încheiat legământ de căsătorie și au avut loc de asemenea 15 ordinări de slujitori, 3 pastori, 7 prezbiteri și 5 diaconi.",
    descripcion_2_presente: "Mulțumim lui Dumnezeu pentru ajutorul pe care ni l-a dăruit până aici, și suntem deplin încredințați că El va rămâne cu noi și pe mai departe, până când El își va chema Biserica acasă.",
    /* Construim impreuna */

    Construye_con_nosotros: "CONSTRUIEȘTE ÎMPREUNĂ CU NOI",
    descripcion_construye: "După mai bine de 20 de ani în care am fost în chirie ca și biserică, Dumnezeu ne-a ajutat să pornim împreună un proiect de construcție a unui nou locaș de închinare.",
    descripcion_2_construye: "Cu ajutorul Duhului Sfânt, ne dorim să fim o lumină în Castellón, oferind un spațiu unde oamenii să poată să-L cunoască pe Dumnezeu și crește în credință și iubire.",
    Noviembre_2023: "Noiembrie 2023",
    descripcion_Noviembre_2023: "Dumnezeu ne-a ajutat să achiziționăm un local și un teren pentru a începe construcția noului nostru locaș de închinare. Deși la început am fost întâmpinați de geamuri sparte și multă mizerie, Dumnezeu ne-a dăruit viziune și am putut vedea potențialul ascuns în această oportunitate.",
    Noviembre_2024: "Noiembrie 2024",
    descripcion_Noviembre_2024: "Câteva luni mai târziu am finalizat prima etapă a proiectului, în care am restaurat și amenajat localul deja construit pentru a ne sluji ca și locaș de închinare provizoriu, în timp ce vom desfășura a doua parte a proiectului, în care cu ajutorul lui Dumnezeu, vom construi o sală mai încăpătoare de închinare, urmând ca restul clădirii să fie dedicat pentru spații mai mici necesare lucrării (săli de școală duminicală, birouri pastorale, etc.).",
    Mayo_2025: "Mai 2025",
    descripcion_mayo_2025:"Cu ajutorul lui Dumnezeu am ajuns la următorul pas al proiectului nostru: construcția noului spațiu mai încăpător de care avem nevoie.",
    descripcion_2_mayo_2025: "Din acest motiv, pentru a obține cel mai bun preț pentru lucrările interioare necesare, invităm întreprinderile interesate în acest proiect să depună o ofertă. Toate detaliile sunt descrise în documentul atașat.",
    descripcion_3_mayo_2025: "Vă rugăm să consultați cererea noastră și nu ezitați să ne contactați!",
    Detalles_Proyecto: "DETALII PROIECT",
    Quieres_ayudarnos: "Vrei să ne ajuți?",
    descripcion_Quieres_ayudarnos:"Puteți susține această lucrare prin rugăciune, ca Dumnezeu să poarte de grijă de fiecare detaliu al construcției până la final, și El să-și glorifice Numele în toate",
    descripcion_2_Quieres_ayudarnos: "Iar dacă Dumnezeu îți pune pe inimă să ne oferi o mână de ajutor și din punct de vedere financiar, o poți face prin transfer bancar în contul următor:",
    descripcion_3_Quieres_ayudarnos: " BISERICA PENTICOSTALA ROMANA EBEN-EZER",
    descripcion_4_Quieres_ayudarnos: "Dumnezeu să vă răsplătească sprijinul acordat, și să vă binecuvânteze!",
    /* Contacteaza */
    descripcion_contactanos:"Dacă doriți să ne comunicați vreun lucru sau aveți nevoie de rugăciune, vă invităm cu drag să ne contactați.",
    descripcion_2_contactanos: "Suntem aici pentru a vă asculta și a ne ruga împreună pentru nevoile dumneavoastră. Nu ezitați să ne scrieți!",
    estamos_con_vosotros: "SUNTEM ALĂTURI DE VOI!",
    Nombre: "Nume",
    Apellido: "Prenume",
    Sujeto:"Subiect",
    Mensaje: "Mesajul",
    Envia: "Trimite",
  },
  es: {
    quienes_somos: "¿QUIÉNES SOMOS?",
    construimos_juntos: "CONSTRUIMOS JUNTOS",
    contactanos: "CONTÁCTANOS",
    inicio_bienvenida: "¡Bienvenido a EBEN-EZER!",
    sub_bienvenida: "El lugar donde te encuentras con Dios",
    breve_descripción: "Somos una iglesia pentecostal rumana en Castellón de la Plana, que lleva un nombre con un profundo significado bíblico, inspirado en el Antiguo Testamento, específicamente en 1 Samuel 7:12, donde el profeta Samuel levantó una piedra y la llamó EBEN-EZER, diciendo:",
    significado: "¡Hasta aquí nos ha ayudado el Señor!",
    objetivo_nombre: "Este nombre nos recuerda la ayuda y protección divina que recibimos cada día, en todas las pruebas y bendiciones de la vida, siendo sostenidos por Dios en cada momento.",
    leer_mas: "LEER MÁS",
    ultimo_video: "¡Mira nuestro último mensaje!",
    mensaje_video: "Mantente al día con las últimas predicaciones, mensajes bíblicos y momentos de adoración de la Iglesia Eben-Ezer.",
    nuevo_capitulo: "UN NUEVO CAPÍTULO",
    descripcion_nuevo_capitulo: "Con la ayuda de Dios, hemos comenzado juntos un nuevo capítulo en nuestra historia, en el que Él nos ha abierto horizontes que ni siquiera habríamos imaginado.",
    saber_mas: "MÁS INFORMACIÓN",
    sobre_nosotros: "SOBRE NOSOTROS",
    descripcion_1999: "La Iglesia Eben Ezer de Castellón de la Plana comenzó su actividad hace 24 años, concretamente en junio de 1999, cuando un grupo de hermanos, en su mayoría del condado de Arad, comenzaron a reunirse en el local de una iglesia española de la ciudad, la cual les dio la posibilidad de realizar un servicio los domingos por la mañana.",
    descripcion_2_1999: "El número de participantes creció considerablemente al año siguiente, de modo que los hermanos se vieron obligados a buscar un local propio. Esto fue posible en el año 2001, cuando se alquiló otro espacio, y en el mes de septiembre de ese mismo año, el local ya estaba acondicionado y la iglesia comenzó a funcionar en otras condiciones y con otros parámetros.",
    descripcion_2001: "Hacia finales del año 2001 llegó a la iglesia el hermano Mihai Morar, quien poco tiempo después se convirtió en el líder de la iglesia, y en los años siguientes fue ordenado presbítero y luego pastor.",
    descripcion_2_2001: "En aquella época, el flujo migratorio desde Rumanía era muy intenso, y de esta forma la iglesia creció mucho. Así, en el año 2003, se vio obligada a buscar otro local más amplio. Esto se hizo realidad en el mes de junio, cuando la Iglesia Eben Ezer se trasladó a otro local situado en el Paseo Morella.",
    descripcion_2007: "Cuatro años después, en 2007, estábamos en la misma situación: el local estaba sobrecargado, por lo que nos vimos obligados a buscar otro local. Así llegamos aquí, donde estamos ahora, en una zona industrial, donde alquilamos este espacio que mide 1400 m², y la sala de culto tiene capacidad para aproximadamente 1000 personas.",
    descripcion_2_2007: "Mientras tanto, en diciembre de 2021, nuestra iglesia pasó por una dura prueba, cuando nuestro pastor, el hermano Mihai Morar, tras una enfermedad grave y de corta duración, nos dejó y partió con el Señor. Fue un duro golpe para toda la comunidad, pero con la ayuda del Señor, continuamos nuestra labor.",
    presente: "Presente",
    descripcion_presente: "En estos 24 años, por la gracia de Dios, hemos realizado aquí 36 bautismos en agua, beneficiando a 578 personas con la oportunidad de hacer un pacto con el Señor. Asimismo, 624 niños fueron presentados para bendición, 200 parejas contrajeron matrimonio, y también se llevaron a cabo 15 ordenaciones de siervos: 3 pastores, 7 presbíteros y 5 diáconos.",
    descripcion_2_presente: "Damos gracias a Dios por la ayuda que nos ha dado hasta aquí, y estamos plenamente convencidos de que Él permanecerá con nosotros en adelante, hasta que Él llame a su Iglesia a casa.",
    /* Construim impreuna */
    Construye_con_nosotros: "CONSTRUYE JUNTO A NOSOTROS",
    descripcion_construye: "Después de más de 20 años en los que hemos estado alquilando como iglesia, Dios nos ayudó a iniciar juntos un proyecto de construcción de un nuevo lugar de adoración.",
    descripcion_2_construye: "Con la ayuda del Espíritu Santo, deseamos ser una luz en Castellón, ofreciendo un espacio donde las personas puedan conocer a Dios y crecer en fe y amor.",
    Noviembre_2023: "Noviembre 2023",
    descripcion_Noviembre_2023: "Dios nos ayudó a adquirir un local y un terreno para comenzar la construcción de nuestro nuevo lugar de adoración. Aunque al principio nos encontramos con ventanas rotas y mucha suciedad, Dios nos dio visión y pudimos ver el potencial oculto en esta oportunidad.",
    Noviembre_2024: "Noviembre 2024",
    descripcion_Noviembre_2024: "Unos meses después finalizamos la primera etapa del proyecto, en la que restauramos y acondicionamos el local ya construido para que nos sirva como lugar de adoración provisional, mientras llevamos a cabo la segunda parte del proyecto. Con la ayuda de Dios, construiremos una sala de adoración más amplia, y el resto del edificio será dedicado a espacios más pequeños necesarios para el ministerio (salones de escuela dominical, oficinas pastorales, etc.).",
    Mayo_2025: "Mayo 2025",
    descripcion_mayo_2025: "Con la ayuda de Dios hemos llegado al siguiente paso de nuestro proyecto: la construcción del nuevo espacio más amplio que necesitamos.",
    descripcion_2_mayo_2025: "Por este motivo, y con el fin de obtener el mejor precio para las obras interiores necesarias, invitamos a las empresas interesadas en este proyecto a presentar una oferta. Todos los detalles están descritos en el documento adjunto.",
    descripcion_3_mayo_2025: "Por favor, revisen nuestra solicitud y no duden en contactarnos.",
    Detalles_Proyecto: "DETALLES DEL PROYECTO",
    Quieres_ayudarnos: "¿Quieres ayudarnos?",
    descripcion_Quieres_ayudarnos: "Puedes apoyar esta obra mediante la oración, para que Dios cuide cada detalle de la construcción hasta su finalización, y que Él glorifique Su Nombre en todo.",
    descripcion_2_Quieres_ayudarnos: "Y si Dios pone en tu corazón evharnos una mano también desde el punto de vista financiero, puedes hacerlo mediante transferencia bancaria a la siguiente cuenta:",
    descripcion_3_Quieres_ayudarnos: "IGLESIA PENTICOSTALA ROMANA EBEN-EZER",
    descripcion_4_Quieres_ayudarnos: "¡Que Dios recompense tu apoyo y te bendiga!",
    /* Contacteaza */
    descripcion_contactanos: "Si quieres comunicarnos algo o necesitás oración, te invitamos con cariño a que nos contactes.",
    descripcion_2_contactanos: "Estamos aquí para escucharte y orar juntos por tus necesidades. ¡No dudes en escribirnos!",
    estamos_con_vosotros: "¡ESTAMOS CONTIGO!",
    Nombre: "Nombre",
    Apellido: "Apellido",
    Sujeto: "Asunto",
    Mensaje: "Mensaje",
    Envia: "Enviar",
  }
};

function aplicarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-i18n]");
  elementos.forEach(el => {
    const clave = el.getAttribute("data-i18n");
    el.textContent = traducciones[idioma][clave] || clave;
  });
}

const selector = document.getElementById("language-switcher");
selector.addEventListener("change", () => {
  const idioma = selector.value;
  aplicarIdioma(idioma);
  localStorage.setItem("idioma", idioma);
});

window.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "ro";
  selector.value = idiomaGuardado;
  aplicarIdioma(idiomaGuardado);
});