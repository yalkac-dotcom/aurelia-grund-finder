import type { Language } from "../types";

export interface ServicesPageContent {
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  heroAlt: string;
  documentTitle: string;
  introTitle: string;
  introText: string;
  stepLabel: string; // "Schritt", "Step", ...
  sections: { title: string; text: string }[];
  valuesTitle: string;
  values: { title: string; text: string }[];
  closingTitle: string;
  closingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const de: ServicesPageContent = {
  heroKicker: "Leistungen",
  heroTitle: "Klare Leistungen für Situationen, die nicht in Standards passen",
  heroText:
    "Nicht jede Immobilie braucht denselben Weg. Entscheidend ist, was in der konkreten Lage sinnvoll, tragfähig und wirtschaftlich sauber ist. Aurelia prüft, strukturiert und übernimmt in passenden Fällen Verantwortung – diskret, unternehmerisch und mit klarem Blick auf den nächsten realistischen Schritt.",
  heroAlt: "Leistungen — Aurelia Grundbesitz",
  documentTitle: "Leistungen — Aurelia Grundbesitz GmbH",
  introTitle: "Was wir konkret leisten",
  introText:
    "Unsere Arbeit beginnt nicht mit großen Versprechen, sondern mit einer sauberen Einordnung. Je nach Ausgangslage kann daraus ein strukturierter Klärungsprozess, eine gezielte Vorbereitung, eine direkte Übernahme oder eine unternehmerische Weiterentwicklung entstehen.",
  stepLabel: "Schritt",
  sections: [
    { title: "Prüfen und einordnen", text: "Wir prüfen die Ausgangslage, ordnen Risiken und Handlungsspielräume ein und schaffen Klarheit, bevor unnötige Schritte ausgelöst werden. Dabei geht es nicht um schöne Theorie, sondern um eine belastbare Einschätzung dessen, was tatsächlich realistisch ist." },
    { title: "Strukturieren und vorbereiten", text: "Wenn eine Situation festgefahren ist, helfen wir dabei, sie wieder entscheidungsfähig zu machen. Das kann bedeuten, Unterlagen, Beteiligte, Prioritäten und Handlungsmöglichkeiten so zu ordnen, dass ein sinnvoller nächster Schritt überhaupt erst möglich wird." },
    { title: "Direkt übernehmen, wenn es passt", text: "In passenden Fällen prüfen wir die direkte Übernahme von Immobilien oder Grundstücken auf eigene Rechnung. Nicht pauschal, sondern nur dort, wo Lage, Substanz und Struktur eine tragfähige Lösung erkennen lassen." },
    { title: "Unternehmerisch weiterdenken", text: "Je nach Objekt und Ausgangslage kann der richtige Weg in Neuordnung, Entwicklung, Halten oder selektiver Weiterveräußerung liegen. Entscheidend ist nicht Aktivität um ihrer selbst willen, sondern ein wirtschaftlich klarer und umsetzbarer Schritt." },
  ],
  valuesTitle: "Wofür unsere Leistungen ausgerichtet sind",
  values: [
    { title: "Klarheit vor Aktion", text: "Wir beginnen mit einer belastbaren Einordnung, nicht mit vorschnellen Schritten." },
    { title: "Diskret im Vorgehen", text: "Nicht jede Konstellation gehört in die Öffentlichkeit. Wenn Zurückhaltung sinnvoll ist, arbeiten wir entsprechend." },
    { title: "Unternehmerisch gedacht", text: "Wir prüfen nicht nur Optionen, sondern übernehmen in passenden Fällen auch selbst Verantwortung." },
    { title: "Tragfähigkeit im Fokus", text: "Entscheidend ist nicht, ob etwas gut klingt, sondern ob es sich wirtschaftlich sinnvoll umsetzen lässt." },
  ],
  closingTitle: "Nicht jede Situation braucht Öffentlichkeit. Aber jede braucht Klarheit.",
  closingText:
    "Gerade bei Immobilien in schwierigen, blockierten oder zeitkritischen Konstellationen hilft meist kein lauter Marktauftritt, sondern eine ruhige und belastbare Einordnung. Aurelia arbeitet genau in diesem Feld: diskret, strukturiert und mit unternehmerischer Entscheidungsfähigkeit.",
  ctaTitle: "Lassen Sie uns die Ausgangslage zuerst sauber einordnen",
  ctaText:
    "Wenn Sie klären möchten, welcher Weg für eine Immobilie, ein Grundstück oder eine besondere Konstellation wirklich sinnvoll ist, sprechen Sie mit uns. Oft ist ein klares erstes Gespräch der beste Ausgangspunkt.",
  ctaButton: "Vertraulich anfragen",
};

const en: ServicesPageContent = {
  heroKicker: "Services",
  heroTitle: "Clear services for situations that do not fit into standards",
  heroText:
    "Not every property needs the same path. What matters is what is sensible, viable and economically sound in the specific situation. Aurelia assesses, structures and, in suitable cases, takes responsibility — discreetly, entrepreneurially and with a clear view of the next realistic step.",
  heroAlt: "Services — Aurelia Grundbesitz",
  documentTitle: "Services — Aurelia Grundbesitz GmbH",
  introTitle: "What we actually do",
  introText:
    "Our work does not start with grand promises but with a sound assessment. Depending on the situation, this can lead to a structured clarification process, focused preparation, a direct acquisition or an entrepreneurial further development.",
  stepLabel: "Step",
  sections: [
    { title: "Assess and classify", text: "We examine the situation, classify risks and room for action, and create clarity before unnecessary steps are triggered. This is not about elegant theory but about a sound assessment of what is actually realistic." },
    { title: "Structure and prepare", text: "When a situation is stuck, we help to make it decision-ready again. That can mean ordering documents, parties, priorities and options so that a sensible next step becomes possible in the first place." },
    { title: "Acquire directly when appropriate", text: "Where suitable, we examine the direct acquisition of properties or plots on our own account. Not across the board, but only where location, substance and structure point to a viable solution." },
    { title: "Think entrepreneurially further ahead", text: "Depending on the property and the situation, the right path may lie in restructuring, development, holding or selective resale. What matters is not activity for its own sake but an economically clear and implementable step." },
  ],
  valuesTitle: "What our services are aligned to",
  values: [
    { title: "Clarity before action", text: "We start with a sound assessment, not with hasty steps." },
    { title: "Discreet in our approach", text: "Not every situation belongs in the public eye. Where restraint makes sense, we act accordingly." },
    { title: "Entrepreneurial mindset", text: "We not only examine options — where appropriate, we also take responsibility ourselves." },
    { title: "Focus on viability", text: "What matters is not whether something sounds good, but whether it can be implemented in an economically sensible way." },
  ],
  closingTitle: "Not every situation needs public attention. But every situation needs clarity.",
  closingText:
    "Especially with properties in difficult, blocked or time-critical situations, what usually helps is not a loud market presence but a calm and sound assessment. Aurelia works precisely in this field: discreetly, in a structured way and with entrepreneurial decisiveness.",
  ctaTitle: "Let us first classify the situation properly",
  ctaText:
    "If you want to clarify which path really makes sense for a property, a plot or a special situation, talk to us. Often, a clear first conversation is the best starting point.",
  ctaButton: "Confidential enquiry",
};

const nl: ServicesPageContent = {
  heroKicker: "Diensten",
  heroTitle: "Heldere diensten voor situaties die niet in standaarden passen",
  heroText:
    "Niet elk vastgoed vraagt om dezelfde weg. Bepalend is wat in de concrete situatie zinvol, haalbaar en economisch zuiver is. Aurelia beoordeelt, structureert en neemt in passende gevallen verantwoordelijkheid – discreet, ondernemend en met een heldere blik op de volgende realistische stap.",
  heroAlt: "Diensten — Aurelia Grundbesitz",
  documentTitle: "Diensten — Aurelia Grundbesitz GmbH",
  introTitle: "Wat wij concreet doen",
  introText:
    "Ons werk begint niet met grote beloften, maar met een zuivere inschatting. Afhankelijk van de uitgangssituatie kan daaruit een gestructureerd verhelderingsproces, een gerichte voorbereiding, een directe overname of een ondernemende verdere ontwikkeling ontstaan.",
  stepLabel: "Stap",
  sections: [
    { title: "Beoordelen en duiden", text: "Wij beoordelen de uitgangssituatie, duiden risico's en handelingsruimte en scheppen helderheid voordat onnodige stappen worden uitgelokt. Het gaat niet om mooie theorie, maar om een houdbare inschatting van wat werkelijk realistisch is." },
    { title: "Structureren en voorbereiden", text: "Wanneer een situatie vastloopt, helpen wij haar weer beslissingsklaar te maken. Dat kan betekenen dat documenten, betrokkenen, prioriteiten en handelingsmogelijkheden zodanig worden geordend dat een zinvolle volgende stap überhaupt mogelijk wordt." },
    { title: "Direct overnemen wanneer het past", text: "In passende gevallen onderzoeken wij de directe overname van vastgoed of percelen voor eigen rekening. Niet zonder meer, maar alleen daar waar ligging, substantie en structuur op een houdbare oplossing wijzen." },
    { title: "Ondernemend doordenken", text: "Afhankelijk van het object en de uitgangssituatie kan de juiste weg in herordening, ontwikkeling, aanhouden of selectieve verdere verkoop liggen. Bepalend is niet activiteit om de activiteit, maar een economisch heldere en uitvoerbare stap." },
  ],
  valuesTitle: "Waarop onze diensten gericht zijn",
  values: [
    { title: "Duidelijkheid voor actie", text: "Wij beginnen met een houdbare inschatting, niet met overhaaste stappen." },
    { title: "Discreet in de aanpak", text: "Niet elke constellatie hoort in de openbaarheid. Wanneer terughoudendheid zinvol is, werken wij dienovereenkomstig." },
    { title: "Ondernemend gedacht", text: "Wij beoordelen niet alleen opties, maar nemen in passende gevallen ook zelf verantwoordelijkheid." },
    { title: "Houdbaarheid centraal", text: "Bepalend is niet of iets goed klinkt, maar of het economisch zinvol uitvoerbaar is." },
  ],
  closingTitle: "Niet elke situatie vraagt om openbaarheid. Maar elke vraagt om duidelijkheid.",
  closingText:
    "Juist bij vastgoed in moeilijke, geblokkeerde of tijdkritische constellaties helpt meestal geen luide marktpresentatie, maar een rustige en houdbare inschatting. Aurelia werkt precies op dit veld: discreet, gestructureerd en met ondernemende beslissingskracht.",
  ctaTitle: "Laten wij eerst de uitgangssituatie zuiver inschatten",
  ctaText:
    "Wanneer u wilt verduidelijken welke weg voor een vastgoedobject, een perceel of een bijzondere constellatie werkelijk zinvol is, spreek dan met ons. Vaak is een helder eerste gesprek het beste uitgangspunt.",
  ctaButton: "Vertrouwelijke aanvraag",
};

const it: ServicesPageContent = {
  heroKicker: "Servizi",
  heroTitle: "Servizi chiari per situazioni che non rientrano negli standard",
  heroText:
    "Non ogni immobile richiede lo stesso percorso. Ciò che conta è ciò che, nella situazione concreta, è sensato, sostenibile ed economicamente corretto. Aurelia valuta, struttura e, nei casi opportuni, si assume la responsabilità – con discrezione, spirito imprenditoriale e uno sguardo chiaro sul prossimo passo realistico.",
  heroAlt: "Servizi — Aurelia Grundbesitz",
  documentTitle: "Servizi — Aurelia Grundbesitz GmbH",
  introTitle: "Cosa facciamo concretamente",
  introText:
    "Il nostro lavoro non inizia con grandi promesse, ma con una valutazione accurata. A seconda della situazione di partenza ne può derivare un processo di chiarimento strutturato, una preparazione mirata, un'acquisizione diretta o uno sviluppo imprenditoriale ulteriore.",
  stepLabel: "Fase",
  sections: [
    { title: "Valutare e inquadrare", text: "Valutiamo la situazione di partenza, inquadriamo rischi e margini di azione e creiamo chiarezza prima che vengano avviati passi inutili. Non si tratta di bella teoria, ma di una stima solida di ciò che è davvero realistico." },
    { title: "Strutturare e preparare", text: "Quando una situazione è bloccata, contribuiamo a renderla nuovamente decisionalmente praticabile. Ciò può significare ordinare documenti, soggetti coinvolti, priorità e possibilità di azione in modo che un prossimo passo sensato divenga finalmente possibile." },
    { title: "Acquisire direttamente, quando è opportuno", text: "Nei casi opportuni esaminiamo l'acquisizione diretta di immobili o terreni per conto proprio. Non in modo generalizzato, ma solo dove posizione, sostanza e struttura lasciano intravedere una soluzione sostenibile." },
    { title: "Pensare oltre in chiave imprenditoriale", text: "A seconda dell'oggetto e della situazione, la via giusta può essere il riordino, lo sviluppo, il mantenimento o una vendita successiva selettiva. Non conta l'attività fine a sé stessa, ma un passo economicamente chiaro e attuabile." },
  ],
  valuesTitle: "A cosa sono orientati i nostri servizi",
  values: [
    { title: "Chiarezza prima dell'azione", text: "Iniziamo con una valutazione solida, non con passi affrettati." },
    { title: "Discreti nel procedere", text: "Non ogni costellazione appartiene alla sfera pubblica. Quando la riservatezza è opportuna, agiamo di conseguenza." },
    { title: "Mentalità imprenditoriale", text: "Non valutiamo soltanto opzioni: nei casi opportuni ci assumiamo anche noi la responsabilità." },
    { title: "Sostenibilità al centro", text: "Ciò che conta non è se qualcosa suona bene, ma se è economicamente attuabile in modo sensato." },
  ],
  closingTitle: "Non ogni situazione richiede visibilità pubblica. Ma ognuna richiede chiarezza.",
  closingText:
    "Proprio per gli immobili in situazioni difficili, bloccate o sensibili al tempo, di solito non aiuta una presenza rumorosa sul mercato, ma una valutazione pacata e solida. Aurelia opera esattamente in questo ambito: con discrezione, in modo strutturato e con capacità decisionale imprenditoriale.",
  ctaTitle: "Inquadriamo prima la situazione di partenza in modo accurato",
  ctaText:
    "Se desidera chiarire quale via abbia davvero senso per un immobile, un terreno o una costellazione particolare, ne parli con noi. Spesso un primo colloquio chiaro è il miglior punto di partenza.",
  ctaButton: "Richiesta riservata",
};

const es: ServicesPageContent = {
  heroKicker: "Servicios",
  heroTitle: "Servicios claros para situaciones que no encajan en los estándares",
  heroText:
    "No todo inmueble requiere el mismo camino. Lo decisivo es lo que, en la situación concreta, resulta sensato, viable y económicamente correcto. Aurelia examina, estructura y, en los casos adecuados, asume responsabilidad – con discreción, espíritu empresarial y una mirada clara sobre el siguiente paso realista.",
  heroAlt: "Servicios — Aurelia Grundbesitz",
  documentTitle: "Servicios — Aurelia Grundbesitz GmbH",
  introTitle: "Lo que hacemos concretamente",
  introText:
    "Nuestro trabajo no comienza con grandes promesas, sino con una valoración cuidadosa. Según la situación de partida puede derivar en un proceso de clarificación estructurado, una preparación específica, una adquisición directa o un desarrollo empresarial ulterior.",
  stepLabel: "Paso",
  sections: [
    { title: "Examinar y encuadrar", text: "Examinamos la situación de partida, encuadramos riesgos y márgenes de actuación y creamos claridad antes de que se desencadenen pasos innecesarios. No se trata de teoría elegante, sino de una estimación sólida de lo que es realmente realista." },
    { title: "Estructurar y preparar", text: "Cuando una situación está bloqueada, ayudamos a hacerla de nuevo decidible. Eso puede significar ordenar documentos, partes implicadas, prioridades y opciones de acción de modo que un siguiente paso sensato sea siquiera posible." },
    { title: "Adquirir directamente cuando encaja", text: "En los casos adecuados examinamos la adquisición directa de inmuebles o terrenos por cuenta propia. No de forma general, sino solo allí donde la ubicación, la sustancia y la estructura permiten reconocer una solución viable." },
    { title: "Pensar más allá en clave empresarial", text: "Según el objeto y la situación de partida, el camino correcto puede ser la reorganización, el desarrollo, el mantenimiento o la enajenación selectiva. Lo decisivo no es la actividad por sí misma, sino un paso económicamente claro e implementable." },
  ],
  valuesTitle: "A qué se orientan nuestros servicios",
  values: [
    { title: "Claridad antes que acción", text: "Comenzamos con una valoración sólida, no con pasos precipitados." },
    { title: "Discretos en el proceder", text: "No toda constelación pertenece al espacio público. Cuando la contención tiene sentido, actuamos en consecuencia." },
    { title: "Mentalidad empresarial", text: "No solo examinamos opciones: en los casos adecuados también asumimos nosotros la responsabilidad." },
    { title: "Viabilidad en el centro", text: "Lo decisivo no es si algo suena bien, sino si puede implementarse de forma económicamente sensata." },
  ],
  closingTitle: "No toda situación necesita publicidad. Pero toda necesita claridad.",
  closingText:
    "Precisamente en inmuebles en constelaciones difíciles, bloqueadas o sensibles al tiempo, lo que ayuda no suele ser una presencia ruidosa en el mercado, sino una valoración serena y sólida. Aurelia trabaja exactamente en este ámbito: con discreción, de forma estructurada y con capacidad de decisión empresarial.",
  ctaTitle: "Encuadremos primero la situación de partida con cuidado",
  ctaText:
    "Si desea aclarar qué camino tiene realmente sentido para un inmueble, un terreno o una constelación particular, hable con nosotros. A menudo, una primera conversación clara es el mejor punto de partida.",
  ctaButton: "Consulta confidencial",
};

const tr: ServicesPageContent = {
  heroKicker: "Hizmetler",
  heroTitle: "Standartlara sığmayan durumlar için net hizmetler",
  heroText:
    "Her gayrimenkul aynı yolu gerektirmez. Belirleyici olan, somut durumda anlamlı, sürdürülebilir ve ekonomik olarak temiz olanın ne olduğudur. Aurelia inceler, yapılandırır ve uygun durumlarda sorumluluk üstlenir – ihtiyatlı, girişimci ve bir sonraki gerçekçi adıma net bir bakışla.",
  heroAlt: "Hizmetler — Aurelia Grundbesitz",
  documentTitle: "Hizmetler — Aurelia Grundbesitz GmbH",
  introTitle: "Somut olarak ne yapıyoruz",
  introText:
    "Çalışmamız büyük vaatlerle değil, titiz bir değerlendirmeyle başlar. Başlangıç durumuna bağlı olarak bundan yapılandırılmış bir berraklaştırma süreci, hedefli bir hazırlık, doğrudan bir devralma veya girişimci bir ileri geliştirme doğabilir.",
  stepLabel: "Adım",
  sections: [
    { title: "İnceleme ve sınıflandırma", text: "Başlangıç durumunu inceler, riskleri ve hareket alanlarını sınıflandırır ve gereksiz adımlar tetiklenmeden önce netlik oluştururuz. Burada şık bir teori değil, gerçekten gerçekçi olanın sağlam bir değerlendirmesi söz konusudur." },
    { title: "Yapılandırma ve hazırlık", text: "Bir durum tıkandığında, onu yeniden karar verilebilir hale getirmeye yardımcı oluruz. Bu, anlamlı bir sonraki adımın mümkün olabilmesi için belgeleri, ilgili tarafları, öncelikleri ve eylem olanaklarını düzenlemek anlamına gelebilir." },
    { title: "Uygun olduğunda doğrudan devralma", text: "Uygun durumlarda gayrimenkullerin veya arsaların kendi hesabımıza doğrudan devralınmasını inceleriz. Topyekûn değil, yalnızca konum, öz ve yapının sürdürülebilir bir çözüme işaret ettiği yerlerde." },
    { title: "Girişimci olarak ileriyi düşünme", text: "Nesneye ve başlangıç durumuna göre doğru yol yeniden düzenleme, geliştirme, elde tutma veya seçici yeniden satışta yatabilir. Belirleyici olan kendi başına faaliyet değil, ekonomik olarak net ve uygulanabilir bir adımdır." },
  ],
  valuesTitle: "Hizmetlerimiz neye yönelmiştir",
  values: [
    { title: "Eylemden önce netlik", text: "Aceleci adımlarla değil, sağlam bir değerlendirmeyle başlarız." },
    { title: "Yaklaşımda ihtiyat", text: "Her konstellasyon kamuoyuna ait değildir. Çekingenliğin anlamlı olduğu yerde buna uygun çalışırız." },
    { title: "Girişimci düşünce", text: "Yalnızca seçenekleri incelemekle kalmaz, uygun durumlarda kendimiz de sorumluluk üstleniriz." },
    { title: "Odakta sürdürülebilirlik", text: "Belirleyici olan bir şeyin kulağa hoş gelmesi değil, ekonomik açıdan anlamlı şekilde uygulanabilir olmasıdır." },
  ],
  closingTitle: "Her durum kamuoyuna ihtiyaç duymaz. Ama her durum netliğe ihtiyaç duyar.",
  closingText:
    "Özellikle zor, tıkanmış veya zaman açısından kritik konstellasyonlardaki gayrimenkullerde genellikle yüksek sesli bir piyasa duruşu değil, sakin ve sağlam bir değerlendirme yardımcı olur. Aurelia tam olarak bu alanda çalışır: ihtiyatlı, yapılandırılmış ve girişimci karar yetkinliğiyle.",
  ctaTitle: "Önce başlangıç durumunu titizlikle sınıflandıralım",
  ctaText:
    "Bir gayrimenkul, bir arsa veya özel bir konstellasyon için hangi yolun gerçekten anlamlı olduğunu netleştirmek istiyorsanız, bizimle konuşun. Çoğu zaman net bir ilk görüşme en iyi başlangıç noktasıdır.",
  ctaButton: "Gizli başvuru",
};

export const servicesPageContent: Record<Language, ServicesPageContent> = { de, en, nl, it, es, tr };
