import type { Language } from "../types";

export interface AboutPageContent {
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  heroAlt: string;
  documentTitle: string;
  introTitle: string;
  introText: string;
  sections: { title: string; text: string }[];
  valuesTitle: string;
  values: { title: string; text: string }[];
  closingTitle: string;
  closingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const de: AboutPageContent = {
  heroKicker: "Über Aurelia",
  heroTitle: "Ein ruhiger, unternehmerischer Blick auf Immobilien in besonderen Situationen",
  heroText:
    "Aurelia arbeitet dort, wo Immobilien nicht sauber in Standards passen. Im Mittelpunkt stehen keine lauten Auftritte und keine allgemeinen Versprechen, sondern diskrete Einordnung, klare Entscheidungen und tragfähige Lösungen in ausgewählten Fällen.",
  heroAlt: "Über Aurelia Grundbesitz",
  documentTitle: "Über Aurelia — Aurelia Grundbesitz GmbH",
  introTitle: "Was Aurelia ausmacht",
  introText:
    "Aurelia ist kein lauter Marktauftritt und kein abstraktes Beteiligungsmodell. Der Ansatz ist unternehmerisch, diskret und auf Substanz ausgerichtet. Wir prüfen sorgfältig, sprechen klar und handeln in passenden Fällen auch selbst.",
  sections: [
    {
      title: "Nicht jede Immobilie braucht denselben Weg",
      text: "Manche Konstellationen lassen sich über den offenen Markt lösen. Andere brauchen zunächst Struktur, Ruhe und eine ehrliche Einordnung. Aurelia arbeitet genau an dieser Schnittstelle: dort, wo Standardprozesse an Grenzen stoßen und ein belastbarer nächster Schritt gebraucht wird.",
    },
    {
      title: "Diskret, strukturiert, handlungsfähig",
      text: "Unsere Arbeit beginnt mit Verständnis der Ausgangslage und endet nicht bei unverbindlichen Gesprächen. In passenden Fällen prüfen wir auch unternehmerische Lösungen, bis hin zur direkten Übernahme, strukturierten Weiterentwicklung oder anderen realistischen Wegen, wenn sie sinnvoll und tragfähig sind.",
    },
    {
      title: "Substanz vor Inszenierung",
      text: "Aurelia interessiert sich nicht für große Worte ohne Fundament. Entscheidend sind Lage, Struktur, Handlungsspielraum und die Frage, ob sich aus einer Situation ein sinnvoller Weg entwickeln lässt. Genau dort setzen wir an – nüchtern, diskret und mit Verantwortung für die Qualität der Entscheidung.",
    },
  ],
  valuesTitle: "Wofür wir stehen",
  values: [
    { title: "Ruhe statt Lautstärke", text: "Wir bevorzugen klare Prozesse und diskrete Kommunikation gegenüber öffentlicher Inszenierung." },
    { title: "Frühe Klarheit", text: "Wir sagen früh, ob ein Fall tragfähig ist oder ob ein anderer Weg sinnvoller wäre." },
    { title: "Unternehmerische Verantwortung", text: "Wir prüfen nicht nur, wir handeln in passenden Fällen auch selbst." },
    { title: "Belastbare Lösungen", text: "Am Ende zählt nicht die Erzählung, sondern ob ein Schritt tatsächlich trägt." },
  ],
  closingTitle: "Aurelia ist dann sinnvoll, wenn eine Lage mehr als Standard braucht",
  closingText:
    "Wenn eine Immobilie, ein Grundstück oder eine besondere Konstellation nicht sauber in einen einfachen Marktprozess passt, hilft oft zuerst eine ruhige und belastbare Einordnung. Genau dafür steht Aurelia.",
  ctaTitle: "Lassen Sie uns die Situation vertraulich besprechen",
  ctaText:
    "Wenn Sie einschätzen möchten, ob und wie ein sinnvoller nächster Schritt möglich ist, sprechen Sie mit uns. Ohne Druck. Ohne unnötige Schleifen. Mit klarem Blick auf das, was realistisch ist.",
  ctaButton: "Vertraulich anfragen",
};

const en: AboutPageContent = {
  heroKicker: "About Aurelia",
  heroTitle: "A calm, entrepreneurial perspective on properties in special situations",
  heroText:
    "Aurelia operates where properties do not fit neatly into standard processes. The focus is not on loud appearances or generic promises, but on discreet assessment, clear decisions and viable solutions in selected cases.",
  heroAlt: "About Aurelia Grundbesitz",
  documentTitle: "About Aurelia — Aurelia Grundbesitz GmbH",
  introTitle: "What defines Aurelia",
  introText:
    "Aurelia is neither a loud market presence nor an abstract investment model. Our approach is entrepreneurial, discreet and focused on substance. We assess carefully, speak plainly and, where appropriate, act ourselves.",
  sections: [
    {
      title: "Not every property needs the same path",
      text: "Some situations can be resolved through the open market. Others first require structure, calm and an honest assessment. Aurelia works precisely at this intersection: where standard processes reach their limits and a sound next step is needed.",
    },
    {
      title: "Discreet, structured, ready to act",
      text: "Our work begins with a clear understanding of the situation and does not end with non-binding conversations. Where appropriate, we also examine entrepreneurial solutions — including direct acquisition, structured further development or other realistic paths, provided they are sensible and viable.",
    },
    {
      title: "Substance over staging",
      text: "Aurelia is not interested in big words without a foundation. What matters is location, structure, room to act and whether a sensible path can be developed from a given situation. That is precisely where we begin — soberly, discreetly and with responsibility for the quality of the decision.",
    },
  ],
  valuesTitle: "What we stand for",
  values: [
    { title: "Calm over noise", text: "We prefer clear processes and discreet communication over public staging." },
    { title: "Early clarity", text: "We say early on whether a case is viable or whether a different path would make more sense." },
    { title: "Entrepreneurial responsibility", text: "We do not only assess — where appropriate, we also act ourselves." },
    { title: "Sound solutions", text: "In the end, what counts is not the narrative but whether a step actually holds up." },
  ],
  closingTitle: "Aurelia makes sense when a situation calls for more than standard",
  closingText:
    "When a property, a plot of land or a special situation does not fit cleanly into a simple market process, what helps first is a calm and sound assessment. That is exactly what Aurelia stands for.",
  ctaTitle: "Let us discuss the situation in confidence",
  ctaText:
    "If you would like to assess whether and how a sensible next step is possible, talk to us. Without pressure. Without unnecessary detours. With a clear view of what is realistic.",
  ctaButton: "Confidential enquiry",
};

const nl: AboutPageContent = {
  heroKicker: "Over Aurelia",
  heroTitle: "Een rustige, ondernemende blik op vastgoed in bijzondere situaties",
  heroText:
    "Aurelia werkt daar waar vastgoed niet zuiver in standaardprocessen past. Centraal staan geen luide optredens en geen algemene beloften, maar discrete beoordeling, heldere beslissingen en haalbare oplossingen in geselecteerde gevallen.",
  heroAlt: "Over Aurelia Grundbesitz",
  documentTitle: "Over Aurelia — Aurelia Grundbesitz GmbH",
  introTitle: "Wat Aurelia kenmerkt",
  introText:
    "Aurelia is geen luide marktpresentatie en geen abstract beleggingsmodel. De aanpak is ondernemend, discreet en gericht op substantie. Wij beoordelen zorgvuldig, spreken duidelijk en handelen in passende gevallen ook zelf.",
  sections: [
    {
      title: "Niet elk vastgoed vraagt om dezelfde weg",
      text: "Sommige situaties laten zich via de open markt oplossen. Andere vragen eerst om structuur, rust en een eerlijke inschatting. Aurelia werkt precies op dat snijvlak: daar waar standaardprocessen aan hun grenzen stoten en een houdbare volgende stap nodig is.",
    },
    {
      title: "Discreet, gestructureerd, slagvaardig",
      text: "Ons werk begint met begrip van de uitgangssituatie en eindigt niet bij vrijblijvende gesprekken. In passende gevallen onderzoeken wij ook ondernemende oplossingen, tot en met directe overname, gestructureerde verdere ontwikkeling of andere realistische wegen, mits zij zinvol en haalbaar zijn.",
    },
    {
      title: "Substantie boven enscenering",
      text: "Aurelia is niet geïnteresseerd in grote woorden zonder fundament. Bepalend zijn ligging, structuur, handelingsruimte en de vraag of zich uit een situatie een zinvolle weg laat ontwikkelen. Juist daar zetten wij in – nuchter, discreet en met verantwoordelijkheid voor de kwaliteit van de beslissing.",
    },
  ],
  valuesTitle: "Waar wij voor staan",
  values: [
    { title: "Rust boven volume", text: "Wij geven de voorkeur aan heldere processen en discrete communicatie boven publieke enscenering." },
    { title: "Vroege duidelijkheid", text: "Wij zeggen vroeg of een geval haalbaar is of dat een andere weg verstandiger zou zijn." },
    { title: "Ondernemende verantwoordelijkheid", text: "Wij beoordelen niet alleen, in passende gevallen handelen wij ook zelf." },
    { title: "Houdbare oplossingen", text: "Uiteindelijk telt niet het verhaal, maar of een stap daadwerkelijk standhoudt." },
  ],
  closingTitle: "Aurelia is zinvol wanneer een situatie meer vraagt dan standaard",
  closingText:
    "Wanneer een vastgoedobject, een perceel of een bijzondere constellatie niet zuiver in een eenvoudig marktproces past, helpt vaak eerst een rustige en houdbare inschatting. Daar staat Aurelia voor.",
  ctaTitle: "Laten wij de situatie vertrouwelijk bespreken",
  ctaText:
    "Wanneer u wilt inschatten of en hoe een zinvolle volgende stap mogelijk is, spreek dan met ons. Zonder druk. Zonder onnodige omwegen. Met een heldere blik op wat realistisch is.",
  ctaButton: "Vertrouwelijke aanvraag",
};

const it: AboutPageContent = {
  heroKicker: "Su Aurelia",
  heroTitle: "Uno sguardo pacato e imprenditoriale su immobili in situazioni particolari",
  heroText:
    "Aurelia opera dove gli immobili non rientrano con chiarezza negli standard. Al centro non vi sono apparizioni rumorose né promesse generiche, bensì una valutazione discreta, decisioni chiare e soluzioni sostenibili in casi selezionati.",
  heroAlt: "Su Aurelia Grundbesitz",
  documentTitle: "Su Aurelia — Aurelia Grundbesitz GmbH",
  introTitle: "Ciò che caratterizza Aurelia",
  introText:
    "Aurelia non è una presenza chiassosa sul mercato né un modello di investimento astratto. L'approccio è imprenditoriale, discreto e orientato alla sostanza. Valutiamo con cura, parliamo con chiarezza e, nei casi opportuni, agiamo anche in prima persona.",
  sections: [
    {
      title: "Non ogni immobile richiede lo stesso percorso",
      text: "Alcune situazioni possono essere risolte attraverso il mercato aperto. Altre richiedono prima struttura, calma e una valutazione onesta. Aurelia lavora proprio in questo punto di intersezione: dove i processi standard raggiungono i propri limiti e serve un passo successivo solido.",
    },
    {
      title: "Discreti, strutturati, capaci di agire",
      text: "Il nostro lavoro inizia con la comprensione della situazione di partenza e non si esaurisce in conversazioni non vincolanti. Nei casi opportuni esaminiamo anche soluzioni imprenditoriali, fino all'acquisizione diretta, allo sviluppo strutturato o ad altre vie realistiche, quando sono sensate e sostenibili.",
    },
    {
      title: "Sostanza prima della messinscena",
      text: "Aurelia non si interessa di grandi parole prive di fondamento. Ciò che conta è la posizione, la struttura, lo spazio di manovra e la possibilità che da una situazione si sviluppi un percorso sensato. È esattamente lì che interveniamo – con sobrietà, discrezione e responsabilità per la qualità della decisione.",
    },
  ],
  valuesTitle: "Ciò per cui ci impegniamo",
  values: [
    { title: "Calma anziché clamore", text: "Preferiamo processi chiari e una comunicazione discreta a una messinscena pubblica." },
    { title: "Chiarezza tempestiva", text: "Diciamo presto se un caso è sostenibile o se un altro percorso sarebbe più sensato." },
    { title: "Responsabilità imprenditoriale", text: "Non ci limitiamo a valutare: nei casi opportuni agiamo anche noi stessi." },
    { title: "Soluzioni solide", text: "Alla fine non conta il racconto, ma se un passo regge davvero." },
  ],
  closingTitle: "Aurelia ha senso quando una situazione richiede più dello standard",
  closingText:
    "Quando un immobile, un terreno o una situazione particolare non rientrano con chiarezza in un semplice processo di mercato, spesso aiuta prima una valutazione pacata e solida. È esattamente ciò che Aurelia rappresenta.",
  ctaTitle: "Discutiamo la situazione in modo riservato",
  ctaText:
    "Se desidera valutare se e come sia possibile un passo successivo sensato, ne parli con noi. Senza pressioni. Senza giri inutili. Con uno sguardo chiaro su ciò che è realistico.",
  ctaButton: "Richiesta riservata",
};

const es: AboutPageContent = {
  heroKicker: "Sobre Aurelia",
  heroTitle: "Una mirada serena y empresarial sobre inmuebles en situaciones especiales",
  heroText:
    "Aurelia trabaja allí donde los inmuebles no encajan con claridad en los procesos estándar. En el centro no están las apariciones ruidosas ni las promesas genéricas, sino una valoración discreta, decisiones claras y soluciones viables en casos seleccionados.",
  heroAlt: "Sobre Aurelia Grundbesitz",
  documentTitle: "Sobre Aurelia — Aurelia Grundbesitz GmbH",
  introTitle: "Lo que define a Aurelia",
  introText:
    "Aurelia no es una presencia ruidosa en el mercado ni un modelo de inversión abstracto. El enfoque es empresarial, discreto y orientado a la sustancia. Examinamos con cuidado, hablamos con claridad y, en los casos adecuados, actuamos también nosotros mismos.",
  sections: [
    {
      title: "No todo inmueble requiere el mismo camino",
      text: "Algunas situaciones pueden resolverse a través del mercado abierto. Otras requieren primero estructura, calma y una valoración honesta. Aurelia trabaja precisamente en esa intersección: allí donde los procesos estándar alcanzan sus límites y se necesita un paso siguiente sólido.",
    },
    {
      title: "Discretos, estructurados, capaces de actuar",
      text: "Nuestro trabajo comienza con la comprensión de la situación de partida y no termina en conversaciones sin compromiso. En los casos adecuados examinamos también soluciones empresariales, hasta la adquisición directa, el desarrollo estructurado u otras vías realistas, siempre que sean sensatas y viables.",
    },
    {
      title: "Sustancia antes que escenificación",
      text: "Aurelia no se interesa por las palabras grandes sin fundamento. Lo decisivo es la ubicación, la estructura, el margen de actuación y si de una situación puede desarrollarse un camino con sentido. Justo ahí intervenimos: con sobriedad, discreción y responsabilidad por la calidad de la decisión.",
    },
  ],
  valuesTitle: "Aquello por lo que estamos",
  values: [
    { title: "Calma en lugar de ruido", text: "Preferimos procesos claros y una comunicación discreta a la escenificación pública." },
    { title: "Claridad temprana", text: "Decimos pronto si un caso es viable o si otro camino sería más razonable." },
    { title: "Responsabilidad empresarial", text: "No solo examinamos: en los casos adecuados también actuamos nosotros mismos." },
    { title: "Soluciones sólidas", text: "Al final no cuenta el relato, sino si un paso realmente sostiene." },
  ],
  closingTitle: "Aurelia tiene sentido cuando una situación requiere más que lo estándar",
  closingText:
    "Cuando un inmueble, un terreno o una constelación particular no encajan con claridad en un proceso de mercado sencillo, a menudo ayuda primero una valoración serena y sólida. Eso es exactamente lo que representa Aurelia.",
  ctaTitle: "Hablemos de la situación de forma confidencial",
  ctaText:
    "Si desea valorar si y cómo es posible un paso siguiente con sentido, hable con nosotros. Sin presión. Sin rodeos innecesarios. Con una mirada clara sobre lo que es realista.",
  ctaButton: "Consulta confidencial",
};

const tr: AboutPageContent = {
  heroKicker: "Aurelia Hakkında",
  heroTitle: "Özel durumlardaki gayrimenkullere sakin ve girişimci bir bakış",
  heroText:
    "Aurelia, gayrimenkullerin standart süreçlere tam olarak uymadığı yerlerde çalışır. Merkezde yüksek sesli çıkışlar ya da genel vaatler değil; ihtiyatlı bir değerlendirme, net kararlar ve seçilmiş vakalarda sürdürülebilir çözümler bulunur.",
  heroAlt: "Aurelia Grundbesitz Hakkında",
  documentTitle: "Aurelia Hakkında — Aurelia Grundbesitz GmbH",
  introTitle: "Aurelia'yı belirleyen nedir",
  introText:
    "Aurelia ne yüksek sesli bir piyasa duruşu ne de soyut bir yatırım modelidir. Yaklaşım girişimci, ihtiyatlı ve öze yöneliktir. Dikkatle değerlendirir, açıkça konuşur ve uygun durumlarda kendimiz de hareket ederiz.",
  sections: [
    {
      title: "Her gayrimenkul aynı yolu gerektirmez",
      text: "Bazı durumlar açık piyasa üzerinden çözülebilir. Diğerleri önce yapıya, sükûnete ve dürüst bir değerlendirmeye ihtiyaç duyar. Aurelia tam bu kesişim noktasında çalışır: standart süreçlerin sınırına vardığı ve sağlam bir sonraki adıma ihtiyaç duyulduğu yerde.",
    },
    {
      title: "İhtiyatlı, yapılandırılmış, harekete hazır",
      text: "Çalışmamız başlangıç durumunun anlaşılmasıyla başlar ve bağlayıcı olmayan görüşmelerde sona ermez. Uygun durumlarda doğrudan devralma, yapılandırılmış geliştirme veya diğer gerçekçi yollar dahil olmak üzere girişimci çözümleri de inceleriz; yeter ki anlamlı ve sürdürülebilir olsunlar.",
    },
    {
      title: "Sahnelemeden önce öz",
      text: "Aurelia temeli olmayan büyük sözlerle ilgilenmez. Belirleyici olan konum, yapı, hareket alanı ve bir durumdan anlamlı bir yolun gelişip gelişemeyeceğidir. Tam burada başlarız – ölçülü, ihtiyatlı ve kararın niteliği için sorumluluk üstlenerek.",
    },
  ],
  valuesTitle: "Neyin arkasında duruyoruz",
  values: [
    { title: "Gürültü yerine sükûnet", text: "Net süreçleri ve ihtiyatlı iletişimi, kamuoyu önünde sahnelemeye tercih ederiz." },
    { title: "Erken netlik", text: "Bir vakanın sürdürülebilir olup olmadığını ya da başka bir yolun daha anlamlı olacağını erken söyleriz." },
    { title: "Girişimci sorumluluk", text: "Yalnızca değerlendirmekle kalmaz, uygun durumlarda kendimiz de hareket ederiz." },
    { title: "Sağlam çözümler", text: "Sonunda önemli olan anlatı değil, bir adımın gerçekten ayakta kalıp kalmadığıdır." },
  ],
  closingTitle: "Bir durum standardın ötesinde bir şey gerektirdiğinde Aurelia anlam kazanır",
  closingText:
    "Bir gayrimenkul, bir arsa ya da özel bir konstellasyon basit bir piyasa sürecine tam olarak uymadığında, çoğu zaman önce sakin ve sağlam bir değerlendirme yardımcı olur. Aurelia tam olarak bunu temsil eder.",
  ctaTitle: "Durumu gizlilik içinde görüşelim",
  ctaText:
    "Anlamlı bir sonraki adımın mümkün olup olmadığını ve nasıl olabileceğini değerlendirmek istiyorsanız, bizimle konuşun. Baskı olmadan. Gereksiz dolambaçlar olmadan. Gerçekçi olana net bir bakışla.",
  ctaButton: "Gizli başvuru",
};

export const aboutPageContent: Record<Language, AboutPageContent> = { de, en, nl, it, es, tr };
