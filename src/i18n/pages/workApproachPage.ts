import type { Language } from "../types";

export interface WorkApproachPageContent {
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  heroAlt: string;
  documentTitle: string;
  introTitle: string;
  introText: string;
  steps: { title: string; text: string }[];
  valuesTitle: string;
  values: { title: string; text: string }[];
  closingTitle: string;
  closingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const de: WorkApproachPageContent = {
  heroKicker: "Arbeitsweise",
  heroTitle: "Ein geordneter Ablauf statt offener Baustellen",
  heroText:
    "In schwierigen Situationen hilft keine Show, sondern ein klarer Prozess. Aurelia arbeitet ruhig, vertraulich und mit Blick auf das, was tatsächlich tragfähig ist – Schritt für Schritt und ohne unnötige Komplexität.",
  heroAlt: "Arbeitsweise — Aurelia Grundbesitz",
  documentTitle: "Arbeitsweise — Aurelia Grundbesitz GmbH",
  introTitle: "Wie wir vorgehen",
  introText:
    "Nicht jede Konstellation führt zu derselben Lösung. Aber jede sinnvolle Lösung beginnt mit einer sauberen Reihenfolge: verstehen, einordnen, prüfen und dann entscheiden, welcher Weg wirklich passt.",
  steps: [
    { title: "Vertrauliche Erstaufnahme", text: "Sie schildern die Ausgangslage. Wir hören zu, fragen gezielt nach und verschaffen uns ein erstes Bild der Situation. Im Mittelpunkt steht dabei nicht Geschwindigkeit um jeden Preis, sondern das richtige Verständnis der tatsächlichen Lage." },
    { title: "Erste Einordnung", text: "Wir prüfen, ob die Konstellation grundsätzlich zu unserem Ansatz passt und wo die entscheidenden Punkte liegen. Schon in diesem Schritt wird oft klar, ob ein Fall tragfähig ist oder ob ein anderer Weg sinnvoller wäre." },
    { title: "Vertiefte Prüfung", text: "Wenn die Ausgangslage grundsätzlich passt, sehen wir genauer hin: Struktur, Substanz, Zeitfaktoren, Beteiligte und wirtschaftliche Optionen. Ziel ist keine theoretische Analyse, sondern eine belastbare Grundlage für die Entscheidung." },
    { title: "Nächster realistischer Schritt", text: "Dann wird entschieden, wie es weitergeht: Einordnung, Strukturierung, direkte Übernahme oder bewusst kein weiterer Schritt. Wichtig ist nicht, jeden Fall weiterzuführen, sondern nur die Wege zu gehen, die tatsächlich sinnvoll sind." },
  ],
  valuesTitle: "Was unsere Arbeitsweise auszeichnet",
  values: [
    { title: "Diskret", text: "Nicht jede Lage gehört in die Öffentlichkeit. Wenn Vertraulichkeit sinnvoll ist, behandeln wir sie entsprechend." },
    { title: "Klar", text: "Wir sagen früh, ob ein Fall grundsätzlich passt oder nicht. Das spart Zeit und unnötige Umwege." },
    { title: "Unternehmerisch", text: "Wir denken nicht nur in Gesprächsprozessen, sondern in umsetzbaren Entscheidungen." },
    { title: "Strukturiert", text: "Gerade in unklaren Situationen schaffen klare Reihenfolgen oft mehr Fortschritt als vorschneller Aktionismus." },
  ],
  closingTitle: "Der nächste Schritt muss nicht groß sein. Nur klar.",
  closingText:
    "In vielen Fällen ist nicht sofort eine Lösung nötig, sondern zuerst eine belastbare Einordnung. Genau dafür ist unsere Arbeitsweise gedacht: ruhig, nachvollziehbar und auf das ausgerichtet, was in der konkreten Lage tatsächlich Sinn ergibt.",
  ctaTitle: "Der erste Schritt ist kein großer Prozess, sondern ein klares Gespräch",
  ctaText:
    "Wenn Sie eine Situation einordnen möchten, reicht zunächst eine vertrauliche Erstaufnahme. Danach zeigt sich, ob und wie ein weiterer Schritt sinnvoll ist.",
  ctaButton: "Kontakt aufnehmen",
};

const en: WorkApproachPageContent = {
  heroKicker: "How We Work",
  heroTitle: "An ordered process instead of open construction sites",
  heroText:
    "In difficult situations, what helps is not a show but a clear process. Aurelia works calmly, confidentially and with an eye on what is actually viable — step by step and without unnecessary complexity.",
  heroAlt: "How We Work — Aurelia Grundbesitz",
  documentTitle: "How We Work — Aurelia Grundbesitz GmbH",
  introTitle: "How we proceed",
  introText:
    "Not every situation leads to the same solution. But every sensible solution begins with a clean sequence: understand, classify, examine — and then decide which path really fits.",
  steps: [
    { title: "Confidential first hearing", text: "You describe the situation. We listen, ask targeted questions and form a first picture of the situation. The focus is not speed at any price, but the right understanding of the actual circumstances." },
    { title: "Initial classification", text: "We examine whether the situation fundamentally fits our approach and where the decisive points lie. Already at this step it often becomes clear whether a case is viable or whether a different path would make more sense." },
    { title: "In-depth review", text: "If the situation fundamentally fits, we look more closely: structure, substance, time factors, parties involved and economic options. The aim is not a theoretical analysis but a sound basis for the decision." },
    { title: "Next realistic step", text: "Then it is decided how to proceed: classification, structuring, direct acquisition or deliberately no further step. What matters is not to push every case forward, but only to take the paths that actually make sense." },
  ],
  valuesTitle: "What characterises our approach",
  values: [
    { title: "Discreet", text: "Not every situation belongs in the public eye. Where confidentiality makes sense, we treat it accordingly." },
    { title: "Clear", text: "We say early on whether a case fundamentally fits or not. That saves time and unnecessary detours." },
    { title: "Entrepreneurial", text: "We think not only in conversation processes, but in implementable decisions." },
    { title: "Structured", text: "Especially in unclear situations, clear sequences often create more progress than premature activism." },
  ],
  closingTitle: "The next step does not have to be big. Just clear.",
  closingText:
    "In many cases, what is needed first is not a solution but a sound classification. That is exactly what our approach is designed for: calm, comprehensible and aligned with what really makes sense in the specific situation.",
  ctaTitle: "The first step is not a big process, but a clear conversation",
  ctaText:
    "If you would like to classify a situation, a confidential first hearing is sufficient to begin with. After that it will become apparent whether and how a further step makes sense.",
  ctaButton: "Get in touch",
};

const nl: WorkApproachPageContent = {
  heroKicker: "Werkwijze",
  heroTitle: "Een ordelijk verloop in plaats van open bouwplaatsen",
  heroText:
    "In moeilijke situaties helpt geen show, maar een helder proces. Aurelia werkt rustig, vertrouwelijk en met het oog op wat werkelijk haalbaar is – stap voor stap en zonder onnodige complexiteit.",
  heroAlt: "Werkwijze — Aurelia Grundbesitz",
  documentTitle: "Werkwijze — Aurelia Grundbesitz GmbH",
  introTitle: "Hoe wij te werk gaan",
  introText:
    "Niet elke constellatie leidt tot dezelfde oplossing. Maar elke zinvolle oplossing begint met een zuivere volgorde: begrijpen, duiden, beoordelen en dan beslissen welke weg werkelijk past.",
  steps: [
    { title: "Vertrouwelijke eerste opname", text: "U schetst de uitgangssituatie. Wij luisteren, stellen gerichte vragen en vormen ons een eerste beeld van de situatie. Centraal staat niet snelheid tegen elke prijs, maar het juiste begrip van de werkelijke omstandigheden." },
    { title: "Eerste duiding", text: "Wij beoordelen of de constellatie in beginsel bij onze aanpak past en waar de beslissende punten liggen. Al in deze stap wordt vaak duidelijk of een geval haalbaar is of dat een andere weg verstandiger zou zijn." },
    { title: "Verdiepte beoordeling", text: "Wanneer de uitgangssituatie in beginsel past, kijken wij nauwkeuriger: structuur, substantie, tijdsfactoren, betrokkenen en economische opties. Doel is geen theoretische analyse, maar een houdbare basis voor de beslissing." },
    { title: "Volgende realistische stap", text: "Dan wordt besloten hoe het verder gaat: duiding, structurering, directe overname of bewust geen volgende stap. Belangrijk is niet om elk geval voort te zetten, maar alleen die wegen te bewandelen die werkelijk zinvol zijn." },
  ],
  valuesTitle: "Wat onze werkwijze kenmerkt",
  values: [
    { title: "Discreet", text: "Niet elke situatie hoort in de openbaarheid. Wanneer vertrouwelijkheid zinvol is, behandelen wij haar dienovereenkomstig." },
    { title: "Helder", text: "Wij zeggen vroeg of een geval in beginsel past of niet. Dat bespaart tijd en onnodige omwegen." },
    { title: "Ondernemend", text: "Wij denken niet alleen in gespreksprocessen, maar in uitvoerbare beslissingen." },
    { title: "Gestructureerd", text: "Juist in onduidelijke situaties leveren heldere volgordes vaak meer vooruitgang op dan voorbarig activisme." },
  ],
  closingTitle: "De volgende stap hoeft niet groot te zijn. Alleen helder.",
  closingText:
    "In veel gevallen is niet meteen een oplossing nodig, maar eerst een houdbare duiding. Daarvoor is onze werkwijze bedoeld: rustig, navolgbaar en gericht op wat in de concrete situatie werkelijk zin heeft.",
  ctaTitle: "De eerste stap is geen groot proces, maar een helder gesprek",
  ctaText:
    "Wanneer u een situatie wilt duiden, volstaat in eerste instantie een vertrouwelijke eerste opname. Daarna blijkt of en hoe een volgende stap zinvol is.",
  ctaButton: "Contact opnemen",
};

const it: WorkApproachPageContent = {
  heroKicker: "Modalità di lavoro",
  heroTitle: "Un percorso ordinato invece di cantieri aperti",
  heroText:
    "Nelle situazioni difficili non aiuta una messinscena, ma un processo chiaro. Aurelia lavora con calma, riservatezza e con lo sguardo su ciò che è davvero sostenibile – passo dopo passo e senza inutile complessità.",
  heroAlt: "Modalità di lavoro — Aurelia Grundbesitz",
  documentTitle: "Modalità di lavoro — Aurelia Grundbesitz GmbH",
  introTitle: "Come procediamo",
  introText:
    "Non ogni costellazione conduce alla stessa soluzione. Ma ogni soluzione sensata inizia con una sequenza pulita: comprendere, inquadrare, valutare e poi decidere quale via si adatti davvero.",
  steps: [
    { title: "Primo colloquio riservato", text: "Lei descrive la situazione di partenza. Noi ascoltiamo, poniamo domande mirate e ci formiamo una prima immagine della situazione. Al centro non vi è la rapidità a ogni costo, ma la corretta comprensione delle circostanze reali." },
    { title: "Prima classificazione", text: "Verifichiamo se la costellazione si adatta in linea di principio al nostro approccio e dove si trovano i punti decisivi. Già in questa fase emerge spesso se un caso è sostenibile o se un altro percorso sarebbe più sensato." },
    { title: "Esame approfondito", text: "Se la situazione di partenza si adatta in linea di principio, guardiamo più da vicino: struttura, sostanza, fattori temporali, soggetti coinvolti e opzioni economiche. L'obiettivo non è un'analisi teorica, ma una base solida per la decisione." },
    { title: "Prossimo passo realistico", text: "Poi si decide come procedere: classificazione, strutturazione, acquisizione diretta o consapevolmente nessun passo ulteriore. Importante non è portare avanti ogni caso, ma percorrere solo le vie che hanno davvero senso." },
  ],
  valuesTitle: "Ciò che contraddistingue la nostra modalità di lavoro",
  values: [
    { title: "Discreta", text: "Non ogni situazione appartiene alla sfera pubblica. Quando la riservatezza è opportuna, la trattiamo di conseguenza." },
    { title: "Chiara", text: "Diciamo presto se un caso si adatta in linea di principio o no. Ciò risparmia tempo e giri inutili." },
    { title: "Imprenditoriale", text: "Pensiamo non solo in processi di colloquio, ma in decisioni attuabili." },
    { title: "Strutturata", text: "Proprio nelle situazioni poco chiare, sequenze nitide producono spesso più progresso di un attivismo prematuro." },
  ],
  closingTitle: "Il prossimo passo non deve essere grande. Solo chiaro.",
  closingText:
    "In molti casi non serve subito una soluzione, ma anzitutto una classificazione solida. È esattamente a questo che è pensata la nostra modalità di lavoro: pacata, comprensibile e orientata a ciò che, nella situazione concreta, ha davvero senso.",
  ctaTitle: "Il primo passo non è un grande processo, ma un colloquio chiaro",
  ctaText:
    "Se desidera inquadrare una situazione, in un primo momento è sufficiente un colloquio riservato iniziale. Successivamente emergerà se e come un ulteriore passo abbia senso.",
  ctaButton: "Mettersi in contatto",
};

const es: WorkApproachPageContent = {
  heroKicker: "Modo de trabajo",
  heroTitle: "Un desarrollo ordenado en lugar de obras abiertas",
  heroText:
    "En situaciones difíciles no ayuda una puesta en escena, sino un proceso claro. Aurelia trabaja con calma, confidencialidad y con la mirada puesta en lo que es realmente viable – paso a paso y sin complejidad innecesaria.",
  heroAlt: "Modo de trabajo — Aurelia Grundbesitz",
  documentTitle: "Modo de trabajo — Aurelia Grundbesitz GmbH",
  introTitle: "Cómo procedemos",
  introText:
    "No toda constelación conduce a la misma solución. Pero toda solución sensata comienza con una secuencia limpia: comprender, encuadrar, examinar y después decidir qué camino encaja realmente.",
  steps: [
    { title: "Primera conversación confidencial", text: "Usted describe la situación de partida. Escuchamos, formulamos preguntas dirigidas y nos hacemos una primera imagen de la situación. En el centro no está la rapidez a toda costa, sino la correcta comprensión de las circunstancias reales." },
    { title: "Primera clasificación", text: "Examinamos si la constelación encaja en principio con nuestro enfoque y dónde se encuentran los puntos decisivos. Ya en este paso se hace evidente con frecuencia si un caso es viable o si otro camino sería más sensato." },
    { title: "Examen en profundidad", text: "Cuando la situación de partida encaja en principio, miramos con mayor detalle: estructura, sustancia, factores temporales, partes implicadas y opciones económicas. El objetivo no es un análisis teórico, sino una base sólida para la decisión." },
    { title: "Siguiente paso realista", text: "Entonces se decide cómo continuar: clasificación, estructuración, adquisición directa o conscientemente ningún paso adicional. Lo importante no es llevar adelante cada caso, sino recorrer únicamente los caminos que tienen realmente sentido." },
  ],
  valuesTitle: "Lo que distingue nuestro modo de trabajo",
  values: [
    { title: "Discreto", text: "No toda situación pertenece al espacio público. Cuando la confidencialidad tiene sentido, la tratamos en consecuencia." },
    { title: "Claro", text: "Decimos pronto si un caso encaja en principio o no. Ello ahorra tiempo y rodeos innecesarios." },
    { title: "Empresarial", text: "Pensamos no solo en procesos de conversación, sino en decisiones implementables." },
    { title: "Estructurado", text: "Precisamente en situaciones poco claras, las secuencias nítidas generan a menudo más avance que un activismo prematuro." },
  ],
  closingTitle: "El siguiente paso no tiene que ser grande. Solo claro.",
  closingText:
    "En muchos casos no se necesita de inmediato una solución, sino primero una clasificación sólida. Para eso está pensado nuestro modo de trabajo: sereno, comprensible y orientado a lo que en la situación concreta tiene realmente sentido.",
  ctaTitle: "El primer paso no es un gran proceso, sino una conversación clara",
  ctaText:
    "Si desea encuadrar una situación, en un primer momento basta con una conversación confidencial inicial. Después se verá si y cómo un paso ulterior tiene sentido.",
  ctaButton: "Ponerse en contacto",
};

const tr: WorkApproachPageContent = {
  heroKicker: "Çalışma şeklimiz",
  heroTitle: "Açık şantiyeler yerine düzenli bir akış",
  heroText:
    "Zor durumlarda gösteri değil, net bir süreç yardımcı olur. Aurelia sakin, gizli ve gerçekten sürdürülebilir olana bakarak çalışır – adım adım ve gereksiz karmaşıklık olmadan.",
  heroAlt: "Çalışma şeklimiz — Aurelia Grundbesitz",
  documentTitle: "Çalışma şeklimiz — Aurelia Grundbesitz GmbH",
  introTitle: "Nasıl ilerliyoruz",
  introText:
    "Her konstellasyon aynı çözüme götürmez. Ama her anlamlı çözüm temiz bir sıralamayla başlar: anlamak, sınıflandırmak, incelemek ve ardından hangi yolun gerçekten uyduğuna karar vermek.",
  steps: [
    { title: "Gizli ilk görüşme", text: "Başlangıç durumunu siz anlatırsınız. Biz dinler, hedefli sorular sorar ve durumun ilk resmini oluştururuz. Merkezde her ne pahasına olursa olsun hız değil, gerçek koşulların doğru anlaşılması yer alır." },
    { title: "İlk sınıflandırma", text: "Konstellasyonun temelde yaklaşımımıza uyup uymadığını ve belirleyici noktaların nerede olduğunu inceleriz. Bu adımda bile bir vakanın sürdürülebilir olup olmadığı ya da başka bir yolun daha anlamlı olacağı çoğu kez netleşir." },
    { title: "Derinlemesine inceleme", text: "Başlangıç durumu temelde uyuyorsa daha yakından bakarız: yapı, öz, zaman faktörleri, ilgili taraflar ve ekonomik seçenekler. Amaç teorik bir analiz değil, karar için sağlam bir temeldir." },
    { title: "Sonraki gerçekçi adım", text: "Ardından nasıl devam edileceğine karar verilir: sınıflandırma, yapılandırma, doğrudan devralma veya bilinçli olarak başka bir adım atmamak. Önemli olan her vakayı sürdürmek değil, yalnızca gerçekten anlamlı olan yolları izlemektir." },
  ],
  valuesTitle: "Çalışma şeklimizi neyin ayırt ettiği",
  values: [
    { title: "İhtiyatlı", text: "Her durum kamuoyuna ait değildir. Gizliliğin anlamlı olduğu yerde buna uygun davranırız." },
    { title: "Net", text: "Bir vakanın temelde uyup uymadığını erken söyleriz. Bu, zamandan ve gereksiz dolambaçlardan tasarruf sağlar." },
    { title: "Girişimci", text: "Yalnızca görüşme süreçleriyle değil, uygulanabilir kararlarla düşünürüz." },
    { title: "Yapılandırılmış", text: "Özellikle belirsiz durumlarda net sıralamalar, çoğu zaman aceleci eylemcilikten daha fazla ilerleme sağlar." },
  ],
  closingTitle: "Sonraki adımın büyük olması gerekmez. Yalnızca net olması.",
  closingText:
    "Birçok durumda hemen bir çözüme değil, önce sağlam bir sınıflandırmaya ihtiyaç vardır. Çalışma şeklimiz tam da bunun için tasarlanmıştır: sakin, izlenebilir ve somut durumda gerçekten anlamlı olana yöneliktir.",
  ctaTitle: "İlk adım büyük bir süreç değil, net bir görüşmedir",
  ctaText:
    "Bir durumu sınıflandırmak istiyorsanız, başlangıçta gizli bir ilk görüşme yeterlidir. Ardından bir sonraki adımın anlamlı olup olmadığı ve nasıl olabileceği görülür.",
  ctaButton: "İletişime geçmek",
};

export const workApproachPageContent: Record<Language, WorkApproachPageContent> = { de, en, nl, it, es, tr };
