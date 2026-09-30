import type { Language } from "./types";

/**
 * Startseiten-Master: deutsche Startseite ist die strukturelle Vorlage.
 * Alle 7 Sprachen verwenden dieselbe Struktur und dieselben Inhalte.
 */
export interface HomeMasterCopy {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  areasTitle: string;
  areasIntro: string;
  cards: { title: string; text: string; cta: string }[];
  marketsNote: string;
  whoTitle: string;
  whoParagraphs: string[];
  whoClosing: string;
  specialTitle: string;
  specialParagraphs: string[];
  foreclosureTitle: string;
  foreclosureParagraphs: string[];
  residenceTitle: string;
  residenceIntro: string;
  residenceCards: { title: string; text: string }[];
  residenceCta: string;
  residenceNote: string;
  trustTitle: string;
  trustText: string;
  proofPoints: { title: string; text: string }[];
  stepsTitle: string;
  steps: { title: string; desc: string }[];
  stepsNote: string;
  stepsLink: string;
  finalTitle: string;
  finalText: string;
  finalPrimary: string;
  finalSecondary: string;
}

export const homeMaster: Record<Language, HomeMasterCopy> = {
  de: {
    seoTitle: "Immobilie direkt verkaufen & Kaufinteresse | Aurelia Grundbesitz",
    seoDescription: "Aurelia kauft Immobilien auf eigene Rechnung – auch vor einer Zwangsversteigerung. Immobilie zum Ankauf anbieten oder Kaufinteresse für den eigenen Bestand hinterlegen. Deutschland & Türkei.",
    heroTitle: "Immobilien kaufen und verkaufen – persönlich und auf eigene Rechnung.",
    heroText: "\nAurelia kauft ausgewählte Immobilien für den eigenen Bestand.\nSie möchten verkaufen? Dann können Sie uns Ihre Immobilie direkt anbieten. Sie interessieren sich für ein Objekt aus unserem Bestand?\u00a0\nDann hinterlegen Sie einfach Ihr Kaufinteresse.",
    heroPrimary: "Immobilie zum Ankauf anbieten",
    heroSecondary: "Kaufinteresse hinterlegen",
    areasTitle: "Was Sie bei Aurelia tun können",
    areasIntro: "Unsere Märkte sind Deutschland und die Türkei.",
    cards: [
      { title: "Immobilie anbieten", text: "Sie möchten eine Immobilie verkaufen? Ob klassisch, mit Renovierungsbedarf, Entwicklungspotenzial oder in einer besonderen Ausgangssituation – wir prüfen, ob ein direkter Ankauf durch Aurelia auf eigene Rechnung grundsätzlich möglich ist.", cta: "Immobilie anbieten" },
      { title: "Kaufinteresse hinterlegen", text: "Teilen Sie uns mit, welche Länder, Regionen und Immobilienarten für Sie interessant sind. Wenn ein passendes Objekt aus unserem eigenen Bestand verfügbar ist, können wir Sie informieren.", cta: "Kaufinteresse hinterlegen" },
      { title: "Unser Bestand", text: "Aurelia bietet ausgewählte Immobilien aus dem eigenen Bestand zum Verkauf an. Nicht jedes Bestandsobjekt wird öffentlich dargestellt.", cta: "Unseren Bestand ansehen" },
    ],
    marketsNote: "Aurelia kauft ausgewählte Immobilien in Deutschland und in der Türkei. Ob ein Objekt zu unserem Bestand passt, entscheiden wir immer im Einzelfall.",
    whoTitle: "Wer wir sind",
    whoParagraphs: [
      "Aurelia Grundbesitz ist ein inhabergeführtes Immobilienunternehmen aus Düsseldorf.",
      "Hinter Aurelia stehen rund 30 Jahre unternehmerische Erfahrung mit Immobilien – darunter Ankäufe aus Zwangsversteigerungen, freihändige Käufe vor einer Versteigerung sowie die Entwicklung und Verwaltung eigener Immobilienbestände.",
      "Ein großer Teil unserer Arbeit betraf Immobilien mit schwieriger Ausgangslage – zum Beispiel Zwangsversteigerungen oder freihändige Käufe, bevor es überhaupt zur Versteigerung kam.",
      "Heute kaufen wir ausgewählte Immobilien auf eigene Rechnung, entwickeln unseren eigenen Bestand weiter und entscheiden bei jedem Objekt individuell, ob wir es langfristig halten, renovieren oder später wieder aus unserem Bestand verkaufen.",
      "Unser Ziel ist nicht, möglichst viele Geschäfte abzuwickeln. Wir möchten Schritt für Schritt einen soliden eigenen Immobilienbestand aufbauen.",
    ],
    whoClosing: "Bei uns sprechen Sie nicht mit einem anonymen Portal, sondern mit Menschen, die sich mit Ihrer Immobilie beschäftigen und Entscheidungen selbst treffen.",
    specialTitle: "Wenn es nicht ganz einfach ist, schauen wir genauer hin.",
    specialParagraphs: [
      "Nicht jede Immobilie wird unter normalen Bedingungen verkauft. Manchmal gibt es finanzielle Schwierigkeiten, offene Forderungen, mehrere Beteiligte oder eine drohende Zwangsversteigerung.",
      "Solche Situationen kennen wir seit vielen Jahren. Wir prüfen, ob ein direkter Ankauf auf eigene Rechnung möglich ist und welche Schritte dafür notwendig sind.",
    ],
    foreclosureTitle: "Wenn eine Zwangsversteigerung droht",
    foreclosureParagraphs: [
      "Auch kurz vor einer Zwangsversteigerung kann ein freihändiger Verkauf noch möglich sein. Solche Situationen kennen wir seit vielen Jahren. Wir prüfen, ob ein direkter Ankauf durch Aurelia auf eigene Rechnung möglich ist.",
      "Wenn es grundsätzlich passt, stimmen wir die nächsten Schritte mit Ihnen ab. Soweit es für den Kauf notwendig ist, können dabei auch Gespräche mit beteiligten Banken oder anderen Stellen geführt werden.\n\nOb und unter welchen Bedingungen ein Verkauf möglich ist, hängt immer vom jeweiligen Fall ab.",
    ],
    residenceTitle: "Wo Sie leben, ist nicht entscheidend.",
    residenceIntro: "Ihre Immobilie kann in einem anderen Land liegen als Ihr Wohnsitz. \nAuch dann können Sie sie uns zum möglichen Ankauf anbieten.",
    residenceCards: [
      { title: "Sie leben in der Türkei – Ihre Immobilie ist in Deutschland?", text: "Auch wenn Sie in der Türkei leben, können Sie uns Ihre Immobilie in Deutschland zum möglichen Ankauf anbieten." },
      { title: "Sie leben in Deutschland oder Europa – Ihre Immobilie ist in der Türkei?", text: "Auch Immobilien in der Türkei prüfen wir für einen möglichen Ankauf auf eigene Rechnung." },
    ],
    residenceCta: "Immobilie anbieten",
    residenceNote: "Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, wird im jeweiligen Fall geklärt.",
    trustTitle: "Transparenz, Diskretion und persönliche Begleitung.",
    trustText: "Immobiliengeschäfte sind Vertrauenssache. Ob Sie Aurelia eine Immobilie zum möglichen Ankauf anbieten oder sich für ein Objekt aus unserem eigenen Bestand interessieren: Wir legen Wert auf klare Abläufe, persönliche Kommunikation und eine nachvollziehbare Prüfung. Personen- und objektbezogene Angaben behandeln wir vertraulich.",
    proofPoints: [
      { title: "Direkter Ansprechpartner", text: "Kein anonymes Portal, sondern persönliche Betreuung aus Düsseldorf." },
      { title: "Nachvollziehbare Bewertung", text: "Wir erklären Ihnen verständlich, wie wir die Immobilie einschätzen und welche Punkte für unsere Entscheidung wichtig sind." },
      { title: "Keine versteckten Kosten", text: "Unsere Erstprüfung und das Erstgespräch sind für Sie kostenfrei und unverbindlich." },
      { title: "Ankauf auf eigene Rechnung", text: "Passende Immobilien prüfen wir für einen möglichen Ankauf auf eigene Rechnung. Ob ein Kauf möglich ist, hängt immer von der Immobilie und der jeweiligen Situation ab." },
    ],
    stepsTitle: "Immobilie zum Ankauf anbieten – in drei Schritten",
    steps: [
      { title: "Immobilie anbieten", desc: "Teilen Sie uns die wichtigsten Angaben zu Ihrer Immobilie und Ihrer Situation mit." },
      { title: "Vertrauliche Erstprüfung", desc: "Wir prüfen die Angaben und klären, ob ein Erwerb auf eigene Rechnung grundsätzlich infrage kommt." },
      { title: "Rückmeldung & weiteres Vorgehen", desc: "Sie erhalten eine klare Rückmeldung. Wenn es grundsätzlich passt, besprechen wir mit Ihnen die nächsten Schritte." },
    ],
    stepsNote: "Die erste Kontaktaufnahme und Prüfung sind für Sie unverbindlich. Wie es danach weitergeht, hängt von der Immobilie und Ihrer persönlichen Situation ab.",
    stepsLink: "Vollständigen Ablauf ansehen",
    finalTitle: "Sie möchten eine Immobilie anbieten oder Kaufinteresse hinterlegen?",
    finalText: "Wählen Sie den passenden Weg und teilen Sie uns Ihr Anliegen unverbindlich mit.",
    finalPrimary: "Immobilie zum Ankauf anbieten",
    finalSecondary: "Kaufinteresse hinterlegen",
  },

  tr: {
    seoTitle: "Gayrimenkulü doğrudan satmak & satın alma ilgisi | Aurelia Grundbesitz",
    seoDescription: "Aurelia gayrimenkulleri kendi hesabına satın alır – icra yoluyla satıştan önce de. Gayrimenkulünüzü satın alma için sunun veya kendi portföyümüze yönelik satın alma ilginizi bildirin. Almanya ve Türkiye.",
    heroTitle: "Gayrimenkul alım ve satımı – kişisel ve kendi hesabımıza.",
    heroText: "\nAurelia, kendi portföyü için seçilmiş gayrimenkuller satın alır.\nSatmak mı istiyorsunuz? Gayrimenkulünüzü bize doğrudan sunabilirsiniz. Portföyümüzdeki bir gayrimenkulle mi ilgileniyorsunuz?\u00a0\nO hâlde satın alma ilginizi bize bildirmeniz yeterli.",
    heroPrimary: "Gayrimenkulü satın alma için sunun",
    heroSecondary: "Satın alma ilgisi bildirin",
    areasTitle: "Aurelia ile neler yapabilirsiniz",
    areasIntro: "Pazarlarımız Almanya ve Türkiye'dir.",
    cards: [
      { title: "Gayrimenkul sunun", text: "Bir gayrimenkul satmak mı istiyorsunuz? Aurelia tarafından kendi hesabına doğrudan satın alımın genel olarak mümkün olup olmadığını inceleriz.", cta: "Gayrimenkul sunun" },
      { title: "Satın alma ilgisi bildirin", text: "Hangi ülkeler, bölgeler ve gayrimenkul türleriyle ilgilendiğinizi bize bildirin. Kendi portföyümüzde uygun bir gayrimenkul mevcut olduğunda sizi bilgilendirebiliriz.", cta: "Satın alma ilgisi bildirin" },
      { title: "Portföyümüz", text: "Aurelia, kendi portföyünden seçilmiş gayrimenkulleri satışa sunar. Portföydeki her gayrimenkul kamuya açık olarak gösterilmez.", cta: "Portföyümüzü görüntüleyin" },
    ],
    marketsNote: "Aurelia, Almanya'da ve Türkiye'de seçilmiş gayrimenkuller satın alır. Bir gayrimenkulün portföyümüze uygun olup olmadığına her zaman duruma göre karar veririz.",
    whoTitle: "Biz kimiz",
    whoParagraphs: [
      "Aurelia Grundbesitz, Düsseldorf merkezli, sahibi tarafından yönetilen bir gayrimenkul şirketidir.",
      "Aurelia'nın arkasında gayrimenkul alanında yaklaşık 30 yıllık girişimcilik deneyimi bulunmaktadır – icra yoluyla satışlardan alımlar, icra satışından önce serbest alımlar ve kendi gayrimenkul portföylerinin geliştirilmesi ve yönetimi bunlar arasındadır.",
      "Çalışmalarımızın önemli bir kısmı zorlu başlangıç koşullarına sahip gayrimenkullerle ilgiliydi – örneğin icra yoluyla satışlar veya daha icra satışına gelinmeden yapılan serbest alımlar.",
      "Bugün seçilmiş gayrimenkulleri kendi hesabımıza satın alıyor, kendi portföyümüzü geliştiriyor ve her gayrimenkul için ayrı ayrı, uzun vadeli elde mi tutacağımıza, yenileyeceğimize veya daha sonra portföyümüzden yeniden satacağımıza karar veriyoruz.",
      "Amacımız mümkün olduğunca çok işlem yapmak değildir. Adım adım sağlam bir kendi gayrimenkul portföyü oluşturmak istiyoruz.",
    ],
    whoClosing: "Bizimle anonim bir portalla değil, gayrimenkulünüzle ilgilenen ve kararları kendisi veren insanlarla konuşursunuz.",
    specialTitle: "İşler o kadar basit olmadığında, daha yakından bakarız.",
    specialParagraphs: [
      "Her gayrimenkul olağan koşullarda satılmaz. Bazen mali güçlükler, açık alacaklar, birden fazla hak sahibi veya yaklaşan bir icra satışı söz konusudur.",
      "Bu tür durumları uzun yıllardır tanıyoruz. Kendi hesabımıza doğrudan bir alımın mümkün olup olmadığını ve bunun için hangi adımların gerekli olduğunu inceleriz.",
    ],
    foreclosureTitle: "İcra yoluyla satış söz konusu olduğunda",
    foreclosureParagraphs: [
      "İcra satışından kısa süre önce bile serbest bir satış hâlâ mümkün olabilir. Bu tür durumları uzun yıllardır tanıyoruz. Aurelia tarafından kendi hesabına doğrudan bir alımın mümkün olup olmadığını inceleriz.",
      "Genel olarak uygun olması hâlinde sonraki adımları sizinle birlikte belirleriz. Satın alma için gerekli olduğu ölçüde ilgili bankalar veya diğer kurumlarla da görüşmeler yapılabilir.\n\nBir satışın mümkün olup olmadığı ve hangi koşullarda gerçekleşebileceği her zaman somut duruma bağlıdır.",
    ],
    residenceTitle: "Nerede yaşadığınız önemli değildir.",
    residenceIntro: "Gayrimenkulünüz, ikamet ettiğiniz ülkeden farklı bir ülkede bulunabilir. \nBu durumda da onu bize olası bir satın alım için sunabilirsiniz.",
    residenceCards: [
      { title: "Türkiye'de mi yaşıyorsunuz – gayrimenkulünüz Almanya'da mı?", text: "Türkiye'de yaşasanız bile Almanya'daki gayrimenkulünüzü bize olası bir satın alım için sunabilirsiniz." },
      { title: "Almanya'da veya Avrupa'da mı yaşıyorsunuz – gayrimenkulünüz Türkiye'de mi?", text: "Türkiye'deki gayrimenkulleri de kendi hesabımıza olası bir satın alım için inceleriz." },
    ],
    residenceCta: "Gayrimenkul sunun",
    residenceNote: "Yüz yüze görüşmelerin, vekâletnamelerin veya noter işlemlerinin gerekip gerekmediği her somut durumda ayrıca netleştirilir.",
    trustTitle: "Şeffaflık, gizlilik ve kişisel destek.",
    trustText: "Gayrimenkul işlemleri bir güven meselesidir. İster Aurelia'ya olası bir satın alım için gayrimenkul sunun, ister kendi portföyümüzdeki bir gayrimenkulle ilgilenin: Net süreçlere, kişisel iletişime ve anlaşılır bir incelemeye önem veririz. Kişisel ve gayrimenkule ilişkin bilgileri gizli tutarız.",
    proofPoints: [
      { title: "Doğrudan muhatap", text: "Anonim bir portal değil, Düsseldorf'tan kişisel destek." },
      { title: "Anlaşılır değerlendirme", text: "Gayrimenkulü nasıl değerlendirdiğimizi ve kararımız için hangi noktaların önemli olduğunu size anlaşılır biçimde açıklarız." },
      { title: "Gizli masraf yok", text: "İlk inceleme ve ilk görüşme sizin için ücretsiz ve bağlayıcı değildir." },
      { title: "Kendi hesabımıza satın alım", text: "Uygun gayrimenkulleri kendi hesabımıza olası bir satın alım için inceleriz. Bir satın alımın mümkün olup olmadığı her zaman gayrimenkule ve ilgili duruma bağlıdır." },
    ],
    stepsTitle: "Gayrimenkulü satın alma için sunmak – üç adımda",
    steps: [
      { title: "Gayrimenkul sunun", desc: "Gayrimenkulünüz ve durumunuzla ilgili en önemli bilgileri bize iletin." },
      { title: "Gizli ilk inceleme", desc: "Bilgileri inceler ve kendi hesabımıza bir alımın genel olarak söz konusu olup olmadığını netleştiririz." },
      { title: "Geri bildirim ve sonraki adımlar", desc: "Net bir geri bildirim alırsınız. Genel olarak uygunsa sonraki adımları sizinle birlikte konuşuruz." },
    ],
    stepsNote: "İlk iletişim ve inceleme sizin için bağlayıcı değildir. Sonrasında nasıl ilerleneceği gayrimenkule ve kişisel durumunuza bağlıdır.",
    stepsLink: "Sürecin tamamını görüntüleyin",
    finalTitle: "Bir gayrimenkul sunmak veya satın alma ilgisi bildirmek mi istiyorsunuz?",
    finalText: "Size uygun yolu seçin ve talebinizi bize bağlayıcı olmadan iletin.",
    finalPrimary: "Gayrimenkulü satın alma için sunun",
    finalSecondary: "Satın alma ilgisi bildirin",
  },

  en: {
    seoTitle: "Sell property directly & register purchase interest | Aurelia Grundbesitz",
    seoDescription: "Aurelia buys property for its own account – including before a foreclosure auction. Offer your property for purchase or register your interest in properties from our own portfolio. Germany & Turkey.",
    heroTitle: "Buying and selling property – personally and for our own account.",
    heroText: "\nAurelia buys selected properties for its own portfolio.\nWould you like to sell? Then you can offer us your property directly. Interested in a property from our portfolio?\u00a0\nThen simply register your purchase interest.",
    heroPrimary: "Offer your property for purchase",
    heroSecondary: "Register purchase interest",
    areasTitle: "What you can do with Aurelia",
    areasIntro: "Our markets are Germany and Turkey.",
    cards: [
      { title: "Offer a property", text: "Would you like to sell a property? We assess whether a direct purchase by Aurelia for its own account is possible in principle.", cta: "Offer a property" },
      { title: "Register purchase interest", text: "Tell us which countries, regions and types of property interest you. If a suitable property from our own portfolio becomes available, we can let you know.", cta: "Register purchase interest" },
      { title: "Our portfolio", text: "Aurelia offers selected properties from its own portfolio for sale. Not every property in our portfolio is shown publicly.", cta: "View our portfolio" },
    ],
    marketsNote: "Aurelia purchases selected properties in Germany and Turkey. Whether a property fits our portfolio is always decided case by case.",
    whoTitle: "Who we are",
    whoParagraphs: [
      "Aurelia Grundbesitz is an owner-managed real estate company based in Düsseldorf.",
      "Behind Aurelia lies around 30 years of entrepreneurial experience in real estate – including purchases at foreclosure auctions, private purchases ahead of an auction, and the development and management of our own property holdings.",
      "A large part of our work has involved properties in difficult circumstances – for example foreclosure auctions or private purchases made before an auction ever took place.",
      "Today we buy selected properties for our own account, continue to develop our own portfolio and decide individually for each property whether to hold it long term, renovate it or later sell it again from our portfolio.",
      "Our goal is not to complete as many deals as possible. We want to build a solid property portfolio of our own, step by step.",
    ],
    whoClosing: "With us, you are not dealing with an anonymous portal, but with people who take a genuine interest in your property and make decisions themselves.",
    specialTitle: "When things are not straightforward, we take a closer look.",
    specialParagraphs: [
      "Not every property is sold under normal conditions. Sometimes there are financial difficulties, outstanding claims, several parties involved or an impending foreclosure auction.",
      "We have been familiar with such situations for many years. We assess whether a direct purchase for our own account is possible and which steps it would require.",
    ],
    foreclosureTitle: "When a foreclosure auction is imminent",
    foreclosureParagraphs: [
      "Even shortly before a foreclosure auction, a private sale may still be possible. We have been familiar with such situations for many years. We assess whether a direct purchase by Aurelia for its own account is possible.",
      "If it fits in principle, we agree the next steps with you. Where necessary for the purchase, this may also include discussions with the banks or other parties involved.\n\nWhether and under what conditions a sale is possible always depends on the individual case.",
    ],
    residenceTitle: "Where you live does not matter.",
    residenceIntro: "Your property may be located in a different country from where you live. \nYou can still offer it to us for a possible purchase.",
    residenceCards: [
      { title: "You live in Turkey – your property is in Germany?", text: "Even if you live in Turkey, you can offer us your property in Germany for a possible purchase." },
      { title: "You live in Germany or elsewhere in Europe – your property is in Turkey?", text: "We also assess properties in Turkey for a possible purchase for our own account." },
    ],
    residenceCta: "Offer a property",
    residenceNote: "Whether personal appointments, powers of attorney or notarial steps are required is clarified in each individual case.",
    trustTitle: "Transparency, discretion and personal support.",
    trustText: "Property transactions are a matter of trust. Whether you offer Aurelia a property for a possible purchase or are interested in a property from our own portfolio, we value clear processes, personal communication and a transparent assessment. We treat personal and property-related information confidentially.",
    proofPoints: [
      { title: "A direct contact", text: "Not an anonymous portal, but personal support from Düsseldorf." },
      { title: "Transparent assessment", text: "We explain clearly how we assess the property and which points matter for our decision." },
      { title: "No hidden costs", text: "Our initial assessment and first conversation are free of charge and non-binding for you." },
      { title: "Purchase for our own account", text: "We assess suitable properties for a possible purchase for our own account. Whether a purchase is possible always depends on the property and the particular situation." },
    ],
    stepsTitle: "Offering your property for purchase – in three steps",
    steps: [
      { title: "Offer your property", desc: "Share the key details about your property and your situation with us." },
      { title: "Confidential initial assessment", desc: "We review the details and clarify whether a purchase for our own account is possible in principle." },
      { title: "Feedback & next steps", desc: "You receive clear feedback. If it fits in principle, we discuss the next steps with you." },
    ],
    stepsNote: "The initial contact and assessment are non-binding for you. How things proceed afterwards depends on the property and your personal situation.",
    stepsLink: "View the full process",
    finalTitle: "Would you like to offer a property or register your purchase interest?",
    finalText: "Choose the right route for you and tell us about your request – without obligation.",
    finalPrimary: "Offer your property for purchase",
    finalSecondary: "Register purchase interest",
  },

  nl: {
    seoTitle: "Vastgoed direct verkopen & koopinteresse | Aurelia Grundbesitz",
    seoDescription: "Aurelia koopt vastgoed voor eigen rekening – ook vóór een executieveiling. Bied uw vastgoed ter aankoop aan of geef uw koopinteresse voor onze eigen portefeuille door. Duitsland & Turkije.",
    heroTitle: "Vastgoed kopen en verkopen – persoonlijk en voor eigen rekening.",
    heroText: "\nAurelia koopt geselecteerd vastgoed voor de eigen portefeuille.\nWilt u verkopen? Dan kunt u uw vastgoed rechtstreeks aan ons aanbieden. Bent u geïnteresseerd in een object uit onze portefeuille?\u00a0\nGeef dan eenvoudig uw koopinteresse door.",
    heroPrimary: "Vastgoed ter aankoop aanbieden",
    heroSecondary: "Koopinteresse doorgeven",
    areasTitle: "Wat u bij Aurelia kunt doen",
    areasIntro: "Onze markten zijn Duitsland en Turkije.",
    cards: [
      { title: "Vastgoed aanbieden", text: "Wilt u vastgoed verkopen? Wij beoordelen of een rechtstreekse aankoop door Aurelia voor eigen rekening in principe mogelijk is.", cta: "Vastgoed aanbieden" },
      { title: "Koopinteresse doorgeven", text: "Laat ons weten welke landen, regio's en soorten vastgoed u interesseren. Wanneer er een passend object uit onze eigen portefeuille beschikbaar is, kunnen wij u informeren.", cta: "Koopinteresse doorgeven" },
      { title: "Onze portefeuille", text: "Aurelia biedt geselecteerd vastgoed uit de eigen portefeuille te koop aan. Niet elk object uit de portefeuille wordt openbaar getoond.", cta: "Onze portefeuille bekijken" },
    ],
    marketsNote: "Aurelia koopt geselecteerd vastgoed in Duitsland en Turkije. Of een object bij onze portefeuille past, beslissen wij altijd per geval.",
    whoTitle: "Wie wij zijn",
    whoParagraphs: [
      "Aurelia Grundbesitz is een door de eigenaar geleide vastgoedonderneming uit Düsseldorf.",
      "Achter Aurelia staat ongeveer 30 jaar ondernemerservaring met vastgoed – waaronder aankopen op executieveilingen, onderhandse aankopen vóór een veiling en de ontwikkeling en het beheer van eigen vastgoedportefeuilles.",
      "Een groot deel van ons werk betrof vastgoed met een moeilijke uitgangssituatie – bijvoorbeeld executieveilingen of onderhandse aankopen voordat het überhaupt tot een veiling kwam.",
      "Vandaag kopen wij geselecteerd vastgoed voor eigen rekening, ontwikkelen wij onze eigen portefeuille verder en beslissen wij per object of wij het op lange termijn aanhouden, renoveren of later weer uit onze portefeuille verkopen.",
      "Ons doel is niet om zoveel mogelijk transacties af te sluiten. Wij willen stap voor stap een solide eigen vastgoedportefeuille opbouwen.",
    ],
    whoClosing: "Bij ons spreekt u niet met een anoniem portaal, maar met mensen die zich met uw vastgoed bezighouden en zelf beslissingen nemen.",
    specialTitle: "Als het niet zo eenvoudig is, kijken wij beter.",
    specialParagraphs: [
      "Niet elk vastgoed wordt onder normale omstandigheden verkocht. Soms zijn er financiële problemen, openstaande vorderingen, meerdere betrokkenen of een dreigende executieveiling.",
      "Zulke situaties kennen wij al vele jaren. Wij beoordelen of een rechtstreekse aankoop voor eigen rekening mogelijk is en welke stappen daarvoor nodig zijn.",
    ],
    foreclosureTitle: "Als een executieveiling dreigt",
    foreclosureParagraphs: [
      "Ook kort voor een executieveiling kan een onderhandse verkoop nog mogelijk zijn. Zulke situaties kennen wij al vele jaren. Wij beoordelen of een rechtstreekse aankoop door Aurelia voor eigen rekening mogelijk is.",
      "Als het in principe past, stemmen wij de volgende stappen met u af. Voor zover dat voor de aankoop nodig is, kunnen daarbij ook gesprekken met betrokken banken of andere partijen worden gevoerd.\n\nOf en onder welke voorwaarden een verkoop mogelijk is, hangt altijd af van het individuele geval.",
    ],
    residenceTitle: "Waar u woont, is niet doorslaggevend.",
    residenceIntro: "Uw vastgoed kan in een ander land liggen dan waar u woont. \nOok dan kunt u het ons voor een mogelijke aankoop aanbieden.",
    residenceCards: [
      { title: "U woont in Turkije – uw vastgoed staat in Duitsland?", text: "Ook als u in Turkije woont, kunt u ons uw vastgoed in Duitsland voor een mogelijke aankoop aanbieden." },
      { title: "U woont in Duitsland of elders in Europa – uw vastgoed staat in Turkije?", text: "Ook vastgoed in Turkije beoordelen wij voor een mogelijke aankoop voor eigen rekening." },
    ],
    residenceCta: "Vastgoed aanbieden",
    residenceNote: "Of persoonlijke afspraken, volmachten of notariële stappen nodig zijn, wordt per geval verduidelijkt.",
    trustTitle: "Transparantie, discretie en persoonlijke begeleiding.",
    trustText: "Vastgoedtransacties zijn een kwestie van vertrouwen. Of u Aurelia vastgoed voor een mogelijke aankoop aanbiedt of interesse hebt in een object uit onze eigen portefeuille: wij hechten aan duidelijke processen, persoonlijke communicatie en een navolgbare beoordeling. Persoons- en objectgegevens behandelen wij vertrouwelijk.",
    proofPoints: [
      { title: "Direct aanspreekpunt", text: "Geen anoniem portaal, maar persoonlijke begeleiding vanuit Düsseldorf." },
      { title: "Navolgbare beoordeling", text: "Wij leggen u begrijpelijk uit hoe wij het vastgoed inschatten en welke punten voor onze beslissing belangrijk zijn." },
      { title: "Geen verborgen kosten", text: "Onze eerste beoordeling en het eerste gesprek zijn voor u kosteloos en vrijblijvend." },
      { title: "Aankoop voor eigen rekening", text: "Passend vastgoed beoordelen wij voor een mogelijke aankoop voor eigen rekening. Of een aankoop mogelijk is, hangt altijd af van het vastgoed en de betreffende situatie." },
    ],
    stepsTitle: "Vastgoed ter aankoop aanbieden – in drie stappen",
    steps: [
      { title: "Vastgoed aanbieden", desc: "Deel de belangrijkste gegevens over uw vastgoed en uw situatie met ons." },
      { title: "Vertrouwelijke eerste beoordeling", desc: "Wij bekijken de gegevens en verduidelijken of een aankoop voor eigen rekening in principe in aanmerking komt." },
      { title: "Terugkoppeling & vervolg", desc: "U ontvangt een duidelijke terugkoppeling. Als het in principe past, bespreken wij met u de volgende stappen." },
    ],
    stepsNote: "Het eerste contact en de beoordeling zijn voor u vrijblijvend. Hoe het daarna verdergaat, hangt af van het vastgoed en uw persoonlijke situatie.",
    stepsLink: "Volledige werkwijze bekijken",
    finalTitle: "Wilt u vastgoed aanbieden of uw koopinteresse doorgeven?",
    finalText: "Kies de passende weg en laat ons vrijblijvend weten waar het om gaat.",
    finalPrimary: "Vastgoed ter aankoop aanbieden",
    finalSecondary: "Koopinteresse doorgeven",
  },

  it: {
    seoTitle: "Vendere direttamente un immobile & interesse all'acquisto | Aurelia Grundbesitz",
    seoDescription: "Aurelia acquista immobili per conto proprio – anche prima di un'asta giudiziaria. Proponga il suo immobile per l'acquisto o comunichi il suo interesse per il nostro patrimonio. Germania e Turchia.",
    heroTitle: "Acquistare e vendere immobili – in modo personale e per conto proprio.",
    heroText: "\nAurelia acquista immobili selezionati per il proprio patrimonio.\nDesidera vendere? Può proporci direttamente il suo immobile. È interessato a un immobile del nostro patrimonio?\u00a0\nAllora ci comunichi semplicemente il suo interesse all'acquisto.",
    heroPrimary: "Proporre un immobile per l'acquisto",
    heroSecondary: "Comunicare interesse all'acquisto",
    areasTitle: "Cosa può fare con Aurelia",
    areasIntro: "I nostri mercati sono la Germania e la Turchia.",
    cards: [
      { title: "Proporre un immobile", text: "Desidera vendere un immobile? Verifichiamo se un acquisto diretto da parte di Aurelia per conto proprio è in linea di principio possibile.", cta: "Proporre un immobile" },
      { title: "Comunicare interesse all'acquisto", text: "Ci indichi quali Paesi, regioni e tipologie di immobili le interessano. Se si rende disponibile un immobile adatto dal nostro patrimonio, possiamo informarla.", cta: "Comunicare interesse" },
      { title: "Il nostro patrimonio", text: "Aurelia offre in vendita immobili selezionati del proprio patrimonio. Non tutti gli immobili del patrimonio vengono presentati pubblicamente.", cta: "Vedere il nostro patrimonio" },
    ],
    marketsNote: "Aurelia acquista immobili selezionati in Germania e in Turchia. Se un immobile sia adatto al nostro patrimonio lo decidiamo sempre caso per caso.",
    whoTitle: "Chi siamo",
    whoParagraphs: [
      "Aurelia Grundbesitz è una società immobiliare di Düsseldorf gestita direttamente dal titolare.",
      "Dietro Aurelia ci sono circa 30 anni di esperienza imprenditoriale nel settore immobiliare – tra cui acquisti da aste giudiziarie, acquisti a trattativa privata prima di un'asta e lo sviluppo e la gestione di patrimoni immobiliari propri.",
      "Una parte importante del nostro lavoro ha riguardato immobili in situazioni di partenza difficili – ad esempio aste giudiziarie o acquisti a trattativa privata prima ancora che si arrivasse all'asta.",
      "Oggi acquistiamo immobili selezionati per conto proprio, sviluppiamo ulteriormente il nostro patrimonio e decidiamo per ogni immobile se mantenerlo a lungo termine, ristrutturarlo o rivenderlo in seguito dal nostro patrimonio.",
      "Il nostro obiettivo non è concludere il maggior numero possibile di operazioni. Vogliamo costruire passo dopo passo un solido patrimonio immobiliare proprio.",
    ],
    whoClosing: "Con noi non parla con un portale anonimo, ma con persone che si occupano del suo immobile e prendono decisioni in prima persona.",
    specialTitle: "Quando non è tutto semplice, guardiamo più da vicino.",
    specialParagraphs: [
      "Non tutti gli immobili vengono venduti in condizioni normali. A volte ci sono difficoltà finanziarie, crediti aperti, più soggetti coinvolti o un'asta giudiziaria imminente.",
      "Conosciamo situazioni di questo tipo da molti anni. Verifichiamo se è possibile un acquisto diretto per conto proprio e quali passi sono necessari.",
    ],
    foreclosureTitle: "Quando incombe un'asta giudiziaria",
    foreclosureParagraphs: [
      "Anche poco prima di un'asta giudiziaria può essere ancora possibile una vendita a trattativa privata. Conosciamo situazioni di questo tipo da molti anni. Verifichiamo se è possibile un acquisto diretto da parte di Aurelia per conto proprio.",
      "Se in linea di principio le condizioni ci sono, concordiamo con lei i passi successivi. Se necessario per l'acquisto, possono svolgersi anche colloqui con le banche coinvolte o con altri soggetti.\n\nSe e a quali condizioni una vendita sia possibile dipende sempre dal singolo caso.",
    ],
    residenceTitle: "Dove vive non è determinante.",
    residenceIntro: "Il suo immobile può trovarsi in un Paese diverso da quello in cui risiede. \nAnche in questo caso può proporcelo per un possibile acquisto.",
    residenceCards: [
      { title: "Vive in Turchia – il suo immobile si trova in Germania?", text: "Anche se vive in Turchia, può proporci il suo immobile in Germania per un possibile acquisto." },
      { title: "Vive in Germania o in Europa – il suo immobile si trova in Turchia?", text: "Valutiamo anche immobili in Turchia per un possibile acquisto per conto proprio." },
    ],
    residenceCta: "Proporre un immobile",
    residenceNote: "Se siano necessari appuntamenti di persona, procure o passaggi notarili viene chiarito caso per caso.",
    trustTitle: "Trasparenza, discrezione e accompagnamento personale.",
    trustText: "Le operazioni immobiliari sono una questione di fiducia. Che proponga ad Aurelia un immobile per un possibile acquisto o sia interessato a un immobile del nostro patrimonio: diamo valore a procedure chiare, comunicazione personale e una valutazione comprensibile. Trattiamo in modo riservato i dati personali e relativi all'immobile.",
    proofPoints: [
      { title: "Referente diretto", text: "Nessun portale anonimo, ma un'assistenza personale da Düsseldorf." },
      { title: "Valutazione comprensibile", text: "Le spieghiamo in modo chiaro come valutiamo l'immobile e quali aspetti sono importanti per la nostra decisione." },
      { title: "Nessun costo nascosto", text: "La prima verifica e il primo colloquio sono per lei gratuiti e senza impegno." },
      { title: "Acquisto per conto proprio", text: "Valutiamo gli immobili adatti per un possibile acquisto per conto proprio. Se un acquisto sia possibile dipende sempre dall'immobile e dalla situazione specifica." },
    ],
    stepsTitle: "Proporre un immobile per l'acquisto – in tre passi",
    steps: [
      { title: "Proporre l'immobile", desc: "Ci comunichi i dati principali sul suo immobile e sulla sua situazione." },
      { title: "Prima verifica riservata", desc: "Esaminiamo i dati e chiariamo se un acquisto per conto proprio è in linea di principio possibile." },
      { title: "Riscontro e passi successivi", desc: "Riceve un riscontro chiaro. Se in linea di principio le condizioni ci sono, concordiamo con lei i passi successivi." },
    ],
    stepsNote: "Il primo contatto e la verifica sono per lei senza impegno. Come si prosegue dipende dall'immobile e dalla sua situazione personale.",
    stepsLink: "Vedere la procedura completa",
    finalTitle: "Desidera proporre un immobile o comunicare il suo interesse all'acquisto?",
    finalText: "Scelga la strada più adatta e ci comunichi la sua richiesta senza impegno.",
    finalPrimary: "Proporre un immobile per l'acquisto",
    finalSecondary: "Comunicare interesse all'acquisto",
  },

  es: {
    seoTitle: "Vender un inmueble directamente & interés de compra | Aurelia Grundbesitz",
    seoDescription: "Aurelia compra inmuebles por cuenta propia, también antes de una subasta judicial. Ofrézcanos su inmueble para su compra o comuníquenos su interés por nuestra propia cartera. Alemania y Turquía.",
    heroTitle: "Comprar y vender inmuebles, de forma personal y por cuenta propia.",
    heroText: "\nAurelia compra inmuebles seleccionados para su propia cartera.\n¿Desea vender? Puede ofrecernos su inmueble directamente. ¿Le interesa un inmueble de nuestra cartera?\u00a0\nEntonces comuníquenos simplemente su interés de compra.",
    heroPrimary: "Ofrecer un inmueble para su compra",
    heroSecondary: "Comunicar interés de compra",
    areasTitle: "Qué puede hacer con Aurelia",
    areasIntro: "Nuestros mercados son Alemania y Turquía.",
    cards: [
      { title: "Ofrecer un inmueble", text: "¿Desea vender un inmueble? Analizamos si una compra directa por parte de Aurelia por cuenta propia es posible en principio.", cta: "Ofrecer un inmueble" },
      { title: "Comunicar interés de compra", text: "Indíquenos qué países, regiones y tipos de inmueble le interesan. Si hay disponible un inmueble adecuado de nuestra propia cartera, podemos informarle.", cta: "Comunicar interés de compra" },
      { title: "Nuestra cartera", text: "Aurelia ofrece en venta inmuebles seleccionados de su propia cartera. No todos los inmuebles de la cartera se presentan públicamente.", cta: "Ver nuestra cartera" },
    ],
    marketsNote: "Aurelia adquiere inmuebles seleccionados en Alemania y Turquía. Si un inmueble encaja en nuestra cartera, lo decidimos siempre caso por caso.",
    whoTitle: "Quiénes somos",
    whoParagraphs: [
      "Aurelia Grundbesitz es una empresa inmobiliaria de Düsseldorf dirigida por su propietario.",
      "Detrás de Aurelia hay unos 30 años de experiencia empresarial en el sector inmobiliario, entre otros en compras en subastas judiciales, compras privadas antes de una subasta y el desarrollo y la gestión de carteras inmobiliarias propias.",
      "Una gran parte de nuestro trabajo ha tenido que ver con inmuebles en situaciones de partida difíciles, por ejemplo subastas judiciales o compras privadas antes de que llegara a celebrarse la subasta.",
      "Hoy compramos inmuebles seleccionados por cuenta propia, seguimos desarrollando nuestra propia cartera y decidimos en cada caso si conservamos el inmueble a largo plazo, lo renovamos o más adelante lo volvemos a vender desde nuestra cartera.",
      "Nuestro objetivo no es cerrar el mayor número posible de operaciones. Queremos construir paso a paso una cartera inmobiliaria propia y sólida.",
    ],
    whoClosing: "Con nosotros no habla con un portal anónimo, sino con personas que se ocupan de su inmueble y toman las decisiones ellas mismas.",
    specialTitle: "Cuando no es tan sencillo, miramos con más detenimiento.",
    specialParagraphs: [
      "No todos los inmuebles se venden en condiciones normales. A veces hay dificultades económicas, deudas pendientes, varias partes implicadas o una subasta judicial inminente.",
      "Conocemos este tipo de situaciones desde hace muchos años. Analizamos si es posible una compra directa por cuenta propia y qué pasos son necesarios para ello.",
    ],
    foreclosureTitle: "Cuando amenaza una subasta judicial",
    foreclosureParagraphs: [
      "Incluso poco antes de una subasta judicial, una venta privada todavía puede ser posible. Conocemos este tipo de situaciones desde hace muchos años. Analizamos si es posible una compra directa por parte de Aurelia por cuenta propia.",
      "Si en principio encaja, acordamos con usted los siguientes pasos. En la medida en que sea necesario para la compra, también pueden mantenerse conversaciones con los bancos implicados u otras entidades.\n\nSi una venta es posible y en qué condiciones depende siempre de cada caso.",
    ],
    residenceTitle: "Dónde vive no es lo decisivo.",
    residenceIntro: "Su inmueble puede estar en un país distinto al de su residencia. \nAun así, puede ofrecérnoslo para una posible compra.",
    residenceCards: [
      { title: "¿Vive en Turquía y su inmueble está en Alemania?", text: "Aunque viva en Turquía, puede ofrecernos su inmueble en Alemania para una posible compra." },
      { title: "¿Vive en Alemania o en otro país de Europa y su inmueble está en Turquía?", text: "También analizamos inmuebles en Turquía para una posible compra por cuenta propia." },
    ],
    residenceCta: "Ofrecer un inmueble",
    residenceNote: "Si son necesarias citas presenciales, poderes o trámites notariales se aclara en cada caso.",
    trustTitle: "Transparencia, discreción y acompañamiento personal.",
    trustText: "Las operaciones inmobiliarias son una cuestión de confianza. Tanto si ofrece a Aurelia un inmueble para una posible compra como si le interesa un inmueble de nuestra propia cartera: valoramos los procesos claros, la comunicación personal y un análisis comprensible. Tratamos de forma confidencial los datos personales y del inmueble.",
    proofPoints: [
      { title: "Interlocutor directo", text: "No un portal anónimo, sino atención personal desde Düsseldorf." },
      { title: "Valoración comprensible", text: "Le explicamos de forma clara cómo valoramos el inmueble y qué aspectos son importantes para nuestra decisión." },
      { title: "Sin costes ocultos", text: "El primer análisis y la primera conversación son gratuitos y sin compromiso para usted." },
      { title: "Compra por cuenta propia", text: "Analizamos los inmuebles adecuados para una posible compra por cuenta propia. Que una compra sea posible depende siempre del inmueble y de la situación concreta." },
    ],
    stepsTitle: "Ofrecer un inmueble para su compra, en tres pasos",
    steps: [
      { title: "Ofrecer el inmueble", desc: "Facilítenos los datos más importantes sobre su inmueble y su situación." },
      { title: "Primer análisis confidencial", desc: "Revisamos los datos y aclaramos si una compra por cuenta propia es posible en principio." },
      { title: "Respuesta y siguientes pasos", desc: "Recibirá una respuesta clara. Si en principio encaja, hablamos con usted de los siguientes pasos." },
    ],
    stepsNote: "El primer contacto y el análisis no le comprometen a nada. Cómo se continúa después depende del inmueble y de su situación personal.",
    stepsLink: "Ver el proceso completo",
    finalTitle: "¿Desea ofrecer un inmueble o comunicar su interés de compra?",
    finalText: "Elija el camino adecuado y cuéntenos su consulta sin compromiso.",
    finalPrimary: "Ofrecer un inmueble para su compra",
    finalSecondary: "Comunicar interés de compra",
  },

  fr: {
    seoTitle: "Vendre un bien en direct & intérêt d'achat | Aurelia Grundbesitz",
    seoDescription: "Aurelia achète des biens immobiliers pour son propre compte – y compris avant une vente aux enchères forcée. Proposez votre bien à l'achat ou faites part de votre intérêt pour notre propre patrimoine. Allemagne et Turquie.",
    heroTitle: "Acheter et vendre des biens immobiliers – de manière personnelle et pour notre propre compte.",
    heroText: "\nAurelia achète des biens sélectionnés pour son propre patrimoine.\nVous souhaitez vendre ? Vous pouvez nous proposer directement votre bien. Un bien de notre patrimoine vous intéresse ?\u00a0\nFaites-nous simplement part de votre intérêt d'achat.",
    heroPrimary: "Proposer un bien à l'achat",
    heroSecondary: "Faire part d'un intérêt d'achat",
    areasTitle: "Ce que vous pouvez faire avec Aurelia",
    areasIntro: "Nos marchés sont l'Allemagne et la Turquie.",
    cards: [
      { title: "Proposer un bien", text: "Vous souhaitez vendre un bien ? Nous examinons si un achat direct par Aurelia pour son propre compte est possible sur le principe.", cta: "Proposer un bien" },
      { title: "Faire part d'un intérêt d'achat", text: "Indiquez-nous les pays, régions et types de biens qui vous intéressent. Si un bien adapté de notre propre patrimoine est disponible, nous pouvons vous en informer.", cta: "Faire part d'un intérêt" },
      { title: "Notre patrimoine", text: "Aurelia propose à la vente des biens sélectionnés issus de son propre patrimoine. Tous les biens du patrimoine ne sont pas présentés publiquement.", cta: "Voir notre patrimoine" },
    ],
    marketsNote: "Aurelia acquiert des biens sélectionnés en Allemagne et en Turquie. Nous décidons toujours au cas par cas si un bien correspond à notre patrimoine.",
    whoTitle: "Qui nous sommes",
    whoParagraphs: [
      "Aurelia Grundbesitz est une société immobilière de Düsseldorf dirigée par son propriétaire.",
      "Derrière Aurelia se trouvent environ 30 ans d'expérience entrepreneuriale dans l'immobilier – notamment des acquisitions lors de ventes aux enchères forcées, des achats de gré à gré avant une vente aux enchères ainsi que le développement et la gestion de patrimoines immobiliers propres.",
      "Une grande partie de notre travail a concerné des biens dans une situation de départ difficile – par exemple des ventes aux enchères forcées ou des achats de gré à gré avant même qu'une vente aux enchères n'ait lieu.",
      "Aujourd'hui, nous achetons des biens sélectionnés pour notre propre compte, continuons à développer notre patrimoine et décidons pour chaque bien s'il sera conservé à long terme, rénové ou revendu ultérieurement depuis notre patrimoine.",
      "Notre objectif n'est pas de conclure le plus grand nombre d'opérations possible. Nous souhaitons constituer pas à pas un patrimoine immobilier propre et solide.",
    ],
    whoClosing: "Chez nous, vous ne vous adressez pas à un portail anonyme, mais à des personnes qui s'intéressent à votre bien et prennent elles-mêmes les décisions.",
    specialTitle: "Quand ce n'est pas si simple, nous regardons de plus près.",
    specialParagraphs: [
      "Tous les biens ne sont pas vendus dans des conditions normales. Il arrive qu'il y ait des difficultés financières, des créances en suspens, plusieurs parties concernées ou une vente aux enchères forcée imminente.",
      "Nous connaissons ce type de situations depuis de nombreuses années. Nous examinons si un achat direct pour notre propre compte est possible et quelles démarches sont nécessaires.",
    ],
    foreclosureTitle: "Quand une vente aux enchères forcée se profile",
    foreclosureParagraphs: [
      "Même peu avant une vente aux enchères forcée, une vente de gré à gré peut encore être possible. Nous connaissons ce type de situations depuis de nombreuses années. Nous examinons si un achat direct par Aurelia pour son propre compte est possible.",
      "Si le principe convient, nous convenons avec vous des prochaines étapes. Dans la mesure où cela est nécessaire à l'achat, des échanges avec les banques concernées ou d'autres organismes peuvent également avoir lieu.\n\nLa possibilité d'une vente et ses conditions dépendent toujours du cas particulier.",
    ],
    residenceTitle: "Votre lieu de résidence n'est pas déterminant.",
    residenceIntro: "Votre bien peut se trouver dans un autre pays que celui où vous résidez. \nVous pouvez tout de même nous le proposer pour un éventuel achat.",
    residenceCards: [
      { title: "Vous vivez en Turquie – votre bien se trouve en Allemagne ?", text: "Même si vous vivez en Turquie, vous pouvez nous proposer votre bien situé en Allemagne pour un éventuel achat." },
      { title: "Vous vivez en Allemagne ou ailleurs en Europe – votre bien se trouve en Turquie ?", text: "Nous examinons également des biens en Turquie en vue d'un éventuel achat pour notre propre compte." },
    ],
    residenceCta: "Proposer un bien",
    residenceNote: "La nécessité de rendez-vous en personne, de procurations ou de démarches notariales est clarifiée au cas par cas.",
    trustTitle: "Transparence, discrétion et accompagnement personnel.",
    trustText: "Les transactions immobilières reposent sur la confiance. Que vous proposiez à Aurelia un bien pour un éventuel achat ou que vous vous intéressiez à un bien de notre propre patrimoine : nous attachons de l'importance à des processus clairs, à une communication personnelle et à une analyse compréhensible. Nous traitons de manière confidentielle les informations personnelles et relatives au bien.",
    proofPoints: [
      { title: "Un interlocuteur direct", text: "Pas de portail anonyme, mais un accompagnement personnel depuis Düsseldorf." },
      { title: "Une évaluation compréhensible", text: "Nous vous expliquons clairement comment nous évaluons le bien et quels points comptent pour notre décision." },
      { title: "Aucun coût caché", text: "Notre première analyse et le premier entretien sont gratuits et sans engagement pour vous." },
      { title: "Achat pour notre propre compte", text: "Nous examinons les biens adaptés en vue d'un éventuel achat pour notre propre compte. La possibilité d'un achat dépend toujours du bien et de la situation concernée." },
    ],
    stepsTitle: "Proposer un bien à l'achat – en trois étapes",
    steps: [
      { title: "Proposer votre bien", desc: "Communiquez-nous les principales informations sur votre bien et votre situation." },
      { title: "Première analyse confidentielle", desc: "Nous examinons les informations et vérifions si un achat pour notre propre compte est envisageable sur le principe." },
      { title: "Retour & suite de la démarche", desc: "Vous recevez un retour clair. Si le principe convient, nous discutons avec vous des prochaines étapes." },
    ],
    stepsNote: "La première prise de contact et l'analyse sont sans engagement pour vous. La suite dépend du bien et de votre situation personnelle.",
    stepsLink: "Voir le déroulement complet",
    finalTitle: "Vous souhaitez proposer un bien ou faire part de votre intérêt d'achat ?",
    finalText: "Choisissez la voie qui vous convient et faites-nous part de votre demande sans engagement.",
    finalPrimary: "Proposer un bien à l'achat",
    finalSecondary: "Faire part d'un intérêt d'achat",
  },
};
