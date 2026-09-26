import type { Language, Translations } from "./types";

type DeepPartial<T> = { [K in keyof T]?: T[K] extends Array<infer U> ? U[] : T[K] extends object ? DeepPartial<T[K]> : T[K] };

// Verbindliche Fassung der Türkei-Seite für alle sieben Sprachen (DE = Master).
// Wird als letzte Ebene über die übrigen Türkei-Texte gelegt.
export const turkeyPageFinal: Record<Language, DeepPartial<Translations>> = {
  de: {
    turkeyProperties: {
      hero: {
        kicker: "IMMOBILIEN IN DER TÜRKEI",
        title: "Immobilien in der Türkei – direkt mit Aurelia",
        subtitle:
          "Aurelia prüft ausgewählte Immobilien in der Türkei für einen möglichen Erwerb auf eigene Rechnung. Auch Eigentümer, die in der Türkei leben und eine Immobilie in Deutschland verkaufen möchten, können uns ihr Objekt direkt zum Ankauf anbieten.",
        primaryCta: "Immobilie zum Ankauf anbieten",
        secondaryCta: "Ablauf kennenlernen",
      },
      problem: {
        title: "Sie leben hier – Ihre Immobilie ist in der Türkei?",
        paragraphs: [
          "Eine Immobilie in der Türkei aus Deutschland oder einem anderen europäischen Land heraus zu verkaufen, kann mit zusätzlichem Aufwand verbunden sein. Unterlagen befinden sich vor Ort, Besichtigungen müssen organisiert und verschiedene Schritte koordiniert werden.",
          "Genau hier setzen wir an. Ihr erster Ansprechpartner ist Aurelia in Deutschland. Wir prüfen gemeinsam mit Ihnen die vorhandenen Informationen und besprechen, was Sie mit Ihrer Immobilie vorhaben. Wenn Unterstützung vor Ort erforderlich ist, können geeignete Immobilienpartner, Fachberater oder Rechtsanwälte in der Türkei einbezogen werden.",
        ],
      },
      servicesTitle: "Was bei einer Immobilie in der Türkei wichtig ist",
      servicesIntro: "",
      services: [
        { title: "Entfernung und Termine", text: "Wer nicht vor Ort lebt, kann nicht jeden Termin persönlich wahrnehmen. Viele Schritte lassen sich je nach Einzelfall aus der Ferne vorbereiten und abstimmen. Ob persönliche Termine, Vollmachten oder notarielle Schritte erforderlich sind, hängt vom jeweiligen Fall ab." },
        { title: "Andere Abläufe und Formalitäten", text: "Grundbuch, Vollmachten und weitere Formalitäten unterscheiden sich teilweise von den in Deutschland bekannten Abläufen. Wir erklären Ihnen verständlich, welche Angaben und Unterlagen wir für unsere Prüfung benötigen. Eine Rechts- oder Steuerberatung bieten wir nicht an." },
        { title: "Ankauf durch Aurelia", text: "Wir prüfen Lage, Zustand und die vorhandenen Unterlagen der Immobilie. Anschließend teilen wir Ihnen offen mit, ob ein Erwerb durch Aurelia auf eigene Rechnung grundsätzlich infrage kommt." },
      ],
      propertyTypesTitle: "Für welche Immobilien?",
      propertyTypesIntro: "Sie können uns unterschiedliche Immobilien in der Türkei zum möglichen Ankauf anbieten. Entscheidend ist, ob die Immobilie nach unserer Prüfung grundsätzlich für einen Erwerb durch Aurelia infrage kommt.",
      propertyTypes: ["Eigentumswohnungen", "Häuser und Mehrfamilienhäuser", "Grundstücke", "Ferienimmobilien", "Geerbte Immobilien", "Gewerbeimmobilien"],
      propertyTypesExtra: "Auch wenn Eigentumsverhältnisse, Unterlagen oder einzelne Punkte noch nicht vollständig geklärt sind, können Sie uns zunächst ansprechen. Ob und unter welchen Voraussetzungen ein Ankauf möglich ist, lässt sich nach Prüfung der konkreten Situation beurteilen.",
      audience: {
        title: "Für wen unser Türkei-Bereich gedacht ist",
        text: "Unser Türkei-Bereich richtet sich vor allem an Eigentümer, die in Deutschland oder einem anderen europäischen Land leben und sich nicht selbst um jeden einzelnen Schritt vor Ort kümmern möchten.",
        items: ["Nicht genutzte Wohnung oder nicht genutztes Haus", "Geerbte Immobilie", "Grundstück oder Baufläche", "Immobilie mit mehreren Miteigentümern", "Seltene oder keine Reisen in die Türkei", "Besichtigungen und Interessenten nicht selbst organisieren", "Direkter und unkomplizierter Verkauf gewünscht"],
      },
      processTitle: "So läuft ein möglicher Ankauf in der Türkei ab",
      process: [
        { title: "Erstkontakt und Objektdaten", text: "Teilen Sie uns zunächst die wichtigsten Eckdaten Ihrer Immobilie mit, zum Beispiel Ort, Immobilienart und Zustand. Für den ersten Kontakt benötigen Sie noch keine vollständigen Unterlagen." },
        { title: "Prüfung und erste Einschätzung", text: "Wir prüfen Ihre Angaben und die bereits vorhandenen Unterlagen und verschaffen uns einen Überblick über die Immobilie. Anschließend erhalten Sie eine erste Einschätzung, ob ein Ankauf durch Aurelia grundsätzlich infrage kommt." },
        { title: "Abstimmung des weiteren Vorgehens", text: "Kommt ein Ankauf grundsätzlich infrage, klären wir mit Ihnen, welche weiteren Unterlagen, Vollmachten oder Termine erforderlich sind und wie die nächsten Schritte organisiert werden." },
        { title: "Einigung und Erwerb", text: "Wenn wir uns über die Konditionen einigen, erwirbt Aurelia die Immobilie auf eigene Rechnung. Die erforderlichen Schritte werden anschließend mit den beteiligten Stellen in der Türkei abgestimmt." },
      ],
      faq: {
        title: "Häufige Fragen zum Verkauf von Immobilien in der Türkei",
        items: [
          { q: "Muss ich für den Grundbuchtermin persönlich in die Türkei reisen?", a: "Das hängt vom jeweiligen Fall ab. Viele Schritte können aus der Ferne vorbereitet werden. Ob Sie persönlich vor Ort sein müssen oder eine Vollmacht möglich ist, klären wir anhand der konkreten Situation." },
          { q: "Welche Unterlagen werden für die erste Prüfung benötigt?", a: "Für eine erste Prüfung reichen in der Regel grundlegende Angaben zur Immobilie, eine Tapu-Kopie, Fotos und der Standort. Welche weiteren Unterlagen erforderlich sind, klären wir anschließend mit Ihnen." },
          { q: "Kaufen Sie die Immobilie selbst oder vermitteln Sie den Verkauf?", a: "Aurelia prüft die Immobilie für einen möglichen Erwerb auf eigene Rechnung. Kommt ein Ankauf infrage und einigen wir uns über die Konditionen, erwirbt Aurelia die Immobilie selbst." },
        ],
      },
      crossLink: { title: "Immobilie in Deutschland?", text: "Sie möchten eine Immobilie in Deutschland verkaufen? Auch hier prüft Aurelia einen möglichen Ankauf auf eigene Rechnung.", cta: "Zum Bereich für Eigentümer" },
      closingCards: [
        { title: "Immobilie in der Türkei zum Ankauf anbieten", text: "Sie besitzen eine Immobilie in der Türkei und möchten verkaufen? Aurelia prüft ausgewählte Immobilien für einen möglichen Erwerb auf eigene Rechnung.", cta: "Immobilie anbieten" },
        { title: "Sie leben in der Türkei und besitzen eine Immobilie in Deutschland?", text: "Auch aus der Türkei können Sie Aurelia Ihre Immobilie in Deutschland zum möglichen Ankauf anbieten. Viele Unterlagen und Abstimmungen lassen sich je nach Einzelfall aus der Ferne vorbereiten.", cta: "Immobilie in Deutschland anbieten" },
        { title: "Interesse an Immobilien aus unserem Bestand?", text: "Kaufinteressenten können unverbindlich hinterlegen, für welche Immobilienarten und Märkte sie sich interessieren. Wenn ein passendes Objekt aus unserem Bestand verfügbar ist, können wir Kontakt aufnehmen.", cta: "Kaufinteresse hinterlegen" },
      ],
      trust: {
        title: "Ihre Immobilie in der Türkei. Ihr Ansprechpartner in Deutschland.",
        text: "Sie möchten eine Immobilie in der Türkei verkaufen? Sprechen Sie uns zunächst von Deutschland aus an. Auf Wunsch können wir Ihre Situation auf Deutsch oder Türkisch besprechen und gemeinsam klären, welche Angaben und Unterlagen für eine erste Prüfung benötigt werden.\n\nAuch bei besonderen persönlichen, finanziellen oder ungeklärten Situationen können Sie uns zunächst unverbindlich ansprechen. Ob ein Ankauf durch Aurelia möglich ist, beurteilen wir nach Prüfung der konkreten Immobilie und Ausgangssituation.",
        points: ["Ansprechpartner in Deutschland", "Deutsch und Türkisch", "Erste Prüfung Ihrer Anfrage"],
      },
      cta: {
        title: "Möchten Sie uns Ihre Immobilie anbieten?",
        text: "Senden Sie uns zunächst einige grundlegende Angaben zur Immobilie. Unser Team in Düsseldorf prüft Ihre Anfrage und bespricht mit Ihnen die möglichen nächsten Schritte.",
        primary: "Immobilie zum Ankauf anbieten",
        secondary: "+49 211 69583033 anrufen",
      },
      legalNotice: "Die konkrete rechtliche, notarielle, steuerliche und zahlungsbezogene Gestaltung richtet sich nach dem jeweiligen Einzelfall und den in Deutschland und der Türkei geltenden Vorschriften. Soweit erforderlich, werden geeignete externe Fachleute einbezogen.",
    },
  },
  tr: {
    turkeyProperties: {
      hero: {
        kicker: "TÜRKİYE'DEKİ GAYRİMENKULLER",
        title: "Türkiye'deki gayrimenkuller – doğrudan Aurelia ile",
        subtitle:
          "Aurelia, Türkiye'deki seçili gayrimenkulleri kendi adına ve hesabına satın almak üzere inceler. Türkiye'de yaşayıp Almanya'daki bir gayrimenkulü satmak isteyen malikler de gayrimenkullerini doğrudan satın alınmak üzere bize sunabilir.",
        primaryCta: "Gayrimenkulü satın alınmak üzere sunun",
        secondaryCta: "Süreci inceleyin",
      },
      problem: {
        title: "Siz burada yaşıyorsunuz – gayrimenkulünüz Türkiye'de mi?",
        paragraphs: [
          "Türkiye'deki bir gayrimenkulü Almanya'dan veya başka bir Avrupa ülkesinden satmak ek çaba gerektirebilir. Belgeler Türkiye'dedir, gösterimlerin organize edilmesi ve farklı adımların koordine edilmesi gerekir.",
          "Tam da bu noktada devreye giriyoruz. İlk muhatabınız Almanya'daki Aurelia'dır. Mevcut bilgileri sizinle birlikte inceler ve gayrimenkulünüzle ilgili planlarınızı konuşuruz. Yerinde destek gerektiğinde Türkiye'deki uygun emlak ortakları, uzman danışmanlar veya avukatlar sürece dahil edilebilir.",
        ],
      },
      servicesTitle: "Türkiye'deki bir gayrimenkulde nelere dikkat edilmeli",
      servicesIntro: "",
      services: [
        { title: "Mesafe ve randevular", text: "Türkiye'de yaşamayan biri her randevuya bizzat katılamaz. Birçok adım, duruma göre uzaktan hazırlanabilir ve planlanabilir. Kişisel randevuların, vekâletnamelerin veya noter işlemlerinin gerekip gerekmediği somut duruma bağlıdır." },
        { title: "Farklı süreçler ve formaliteler", text: "Tapu, vekâletname ve diğer formaliteler kısmen Almanya'da bilinen süreçlerden farklıdır. İncelememiz için hangi bilgi ve belgelere ihtiyaç duyduğumuzu size anlaşılır biçimde açıklarız. Hukuki veya vergisel danışmanlık hizmeti sunmuyoruz." },
        { title: "Aurelia tarafından satın alma", text: "Gayrimenkulün konumunu, durumunu ve mevcut belgelerini inceleriz. Ardından Aurelia'nın gayrimenkulü kendi hesabına satın almasının esas itibarıyla mümkün olup olmadığını size açıkça bildiririz." },
      ],
      propertyTypesTitle: "Hangi gayrimenkuller için?",
      propertyTypesIntro: "Türkiye'deki farklı gayrimenkulleri satın alınmak üzere bize sunabilirsiniz. Belirleyici olan, incelememiz sonucunda gayrimenkulün Aurelia tarafından satın alınmaya esas itibarıyla uygun olup olmadığıdır.",
      propertyTypes: ["Kat mülkiyetli daireler", "Evler ve apartmanlar", "Arsalar", "Tatil amaçlı gayrimenkuller", "Miras kalan gayrimenkuller", "Ticari gayrimenkuller"],
      propertyTypesExtra: "Mülkiyet durumu, belgeler veya bazı konular henüz tam olarak netleşmemiş olsa bile önce bizimle iletişime geçebilirsiniz. Satın almanın mümkün olup olmadığı ve hangi koşullarda gerçekleşebileceği, somut durum incelendikten sonra değerlendirilebilir.",
      audience: {
        title: "Türkiye bölümümüz kimler için",
        text: "Türkiye bölümümüz özellikle Almanya'da veya başka bir Avrupa ülkesinde yaşayan ve Türkiye'deki her adımla bizzat ilgilenmek istemeyen malikler için hazırlanmıştır.",
        items: ["Kullanılmayan daire veya ev", "Miras kalan gayrimenkul", "Arsa veya imarlı alan", "Birden fazla hissedarı olan gayrimenkul", "Türkiye'ye nadiren gidiyor veya hiç gitmiyorsunuz", "Gösterimleri ve alıcı adaylarını kendiniz organize etmek istemiyorsunuz", "Doğrudan ve zahmetsiz bir satış istiyorsunuz"],
      },
      processTitle: "Türkiye'de olası bir satın alma süreci nasıl işler",
      process: [
        { title: "İlk iletişim ve gayrimenkul bilgileri", text: "Önce gayrimenkulünüzün temel bilgilerini, örneğin konumunu, türünü ve durumunu bize iletin. İlk iletişim için eksiksiz belgelere henüz ihtiyacınız yoktur." },
        { title: "İnceleme ve ilk değerlendirme", text: "Bilgilerinizi ve mevcut belgeleri inceler, gayrimenkul hakkında genel bir fikir ediniriz. Ardından Aurelia'nın satın almasının esas itibarıyla mümkün olup olmadığına dair ilk değerlendirmemizi alırsınız." },
        { title: "Sonraki adımların planlanması", text: "Satın alma esas itibarıyla mümkünse, hangi ek belgelerin, vekâletnamelerin veya randevuların gerekli olduğunu ve sonraki adımların nasıl organize edileceğini sizinle birlikte netleştiririz." },
        { title: "Anlaşma ve satın alma", text: "Koşullarda anlaşmamız halinde Aurelia gayrimenkulü kendi hesabına satın alır. Gerekli adımlar ardından Türkiye'deki ilgili kurumlarla koordine edilir." },
      ],
      faq: {
        title: "Türkiye'deki gayrimenkullerin satışına ilişkin sık sorulan sorular",
        items: [
          { q: "Tapu randevusu için bizzat Türkiye'ye gitmem gerekiyor mu?", a: "Bu, somut duruma bağlıdır. Birçok adım uzaktan hazırlanabilir. Bizzat orada bulunmanızın gerekip gerekmediğini veya vekâletnamenin mümkün olup olmadığını somut duruma göre netleştiririz." },
          { q: "İlk inceleme için hangi belgeler gerekiyor?", a: "İlk inceleme için genellikle gayrimenkule ilişkin temel bilgiler, bir tapu fotokopisi, fotoğraflar ve konum yeterlidir. Başka hangi belgelerin gerektiğini ardından sizinle birlikte netleştiririz." },
          { q: "Gayrimenkulü kendiniz mi satın alıyorsunuz, yoksa satışa aracılık mı ediyorsunuz?", a: "Aurelia gayrimenkulü kendi hesabına olası bir satın alma için inceler. Satın alma mümkünse ve koşullarda anlaşırsak gayrimenkulü Aurelia bizzat satın alır." },
        ],
      },
      crossLink: { title: "Almanya'da gayrimenkulünüz mü var?", text: "Almanya'daki bir gayrimenkulü satmak mı istiyorsunuz? Aurelia burada da kendi hesabına olası bir satın almayı inceler.", cta: "Malikler bölümüne git" },
      closingCards: [
        { title: "Türkiye'deki gayrimenkulünüzü satın alınmak üzere sunun", text: "Türkiye'de bir gayrimenkulünüz var ve satmak mı istiyorsunuz? Aurelia seçili gayrimenkulleri kendi hesabına olası bir satın alma için inceler.", cta: "Gayrimenkul sunun" },
        { title: "Türkiye'de yaşıyor ve Almanya'da bir gayrimenkulünüz mü var?", text: "Almanya'daki gayrimenkulünüzü Türkiye'den de olası bir satın alma için Aurelia'ya sunabilirsiniz. Birçok belge ve görüşme, duruma göre uzaktan hazırlanabilir.", cta: "Almanya'daki gayrimenkulü sunun" },
        { title: "Portföyümüzdeki gayrimenkullerle mi ilgileniyorsunuz?", text: "Alıcı adayları hangi gayrimenkul türleri ve pazarlarla ilgilendiklerini bağlayıcı olmadan bildirebilir. Portföyümüzde uygun bir gayrimenkul olduğunda sizinle iletişime geçebiliriz.", cta: "Satın alma ilginizi bildirin" },
      ],
      trust: {
        title: "Gayrimenkulünüz Türkiye'de. Muhatabınız Almanya'da.",
        text: "Türkiye'deki bir gayrimenkulü satmak mı istiyorsunuz? Önce Almanya'dan bizimle iletişime geçin. Dilerseniz durumunuzu Almanca veya Türkçe konuşabilir ve ilk inceleme için hangi bilgi ve belgelerin gerektiğini birlikte netleştirebiliriz.\n\nÖzel kişisel, mali veya henüz netleşmemiş durumlarda da önce bağlayıcı olmadan bize ulaşabilirsiniz. Aurelia'nın satın almasının mümkün olup olmadığını, somut gayrimenkulü ve durumu inceledikten sonra değerlendiririz.",
        points: ["Almanya'da muhatap", "Almanca ve Türkçe", "Talebinizin ilk incelemesi"],
      },
      cta: {
        title: "Gayrimenkulünüzü bize sunmak ister misiniz?",
        text: "Önce gayrimenkule ilişkin bazı temel bilgileri bize gönderin. Düsseldorf'taki ekibimiz talebinizi inceler ve olası sonraki adımları sizinle görüşür.",
        primary: "Gayrimenkulü satın alınmak üzere sunun",
        secondary: "+49 211 69583033'ü arayın",
      },
      legalNotice: "Somut hukuki, noterlik, vergisel ve ödemeye ilişkin düzenleme, ilgili duruma ve Almanya ile Türkiye'de geçerli mevzuata göre belirlenir. Gerektiğinde uygun dış uzmanlar sürece dahil edilir.",
    },
  },
  en: {
    turkeyProperties: {
      hero: {
        kicker: "PROPERTY IN TURKEY",
        title: "Property in Turkey – directly with Aurelia",
        subtitle:
          "Aurelia reviews selected properties in Turkey for a possible acquisition for its own account. Owners who live in Turkey and wish to sell a property in Germany can also offer it to us directly for purchase.",
        primaryCta: "Offer a property for purchase",
        secondaryCta: "See how it works",
      },
      problem: {
        title: "You live here – your property is in Turkey?",
        paragraphs: [
          "Selling a property in Turkey from Germany or another European country can involve extra effort. Documents are held locally, viewings need to be organised and various steps have to be coordinated.",
          "This is exactly where we come in. Your first point of contact is Aurelia in Germany. Together with you, we review the available information and discuss your plans for the property. Where local support is needed, suitable property partners, specialist advisors or lawyers in Turkey can be brought in.",
        ],
      },
      servicesTitle: "What matters with a property in Turkey",
      servicesIntro: "",
      services: [
        { title: "Distance and appointments", text: "If you do not live locally, you cannot attend every appointment in person. Many steps can be prepared and coordinated remotely, depending on the case. Whether personal appointments, powers of attorney or notarial steps are required depends on the individual case." },
        { title: "Different procedures and formalities", text: "Land registry, powers of attorney and other formalities differ in part from the procedures familiar in Germany. We explain clearly which details and documents we need for our review. We do not provide legal or tax advice." },
        { title: "Acquisition by Aurelia", text: "We review the location, condition and available documents of the property. We then tell you openly whether an acquisition by Aurelia for its own account is in principle an option." },
      ],
      propertyTypesTitle: "Which properties?",
      propertyTypesIntro: "You can offer us a range of properties in Turkey for possible purchase. What matters is whether, after our review, the property is in principle suitable for acquisition by Aurelia.",
      propertyTypes: ["Condominiums", "Houses and apartment buildings", "Land", "Holiday properties", "Inherited properties", "Commercial properties"],
      propertyTypesExtra: "Even if ownership, documents or individual points have not yet been fully clarified, you are welcome to contact us first. Whether and under what conditions a purchase is possible can be assessed once the specific situation has been reviewed.",
      audience: {
        title: "Who our Turkey section is for",
        text: "Our Turkey section is aimed above all at owners who live in Germany or another European country and do not want to handle every single step on site themselves.",
        items: ["Unused flat or unused house", "Inherited property", "Plot or building land", "Property with several co-owners", "Rare or no trips to Turkey", "You would rather not organise viewings and prospective buyers yourself", "You want a direct and straightforward sale"],
      },
      processTitle: "How a possible acquisition in Turkey works",
      process: [
        { title: "Initial contact and property details", text: "First, tell us the key facts about your property, such as location, type and condition. You do not need complete documents for the first contact." },
        { title: "Review and initial assessment", text: "We review your details and the documents already available and gain an overview of the property. You then receive an initial assessment of whether an acquisition by Aurelia is in principle an option." },
        { title: "Agreeing the next steps", text: "If an acquisition is in principle an option, we clarify with you which further documents, powers of attorney or appointments are required and how the next steps will be organised." },
        { title: "Agreement and acquisition", text: "If we agree on the terms, Aurelia acquires the property for its own account. The necessary steps are then coordinated with the relevant bodies in Turkey." },
      ],
      faq: {
        title: "Frequently asked questions about selling property in Turkey",
        items: [
          { q: "Do I have to travel to Turkey in person for the land registry appointment?", a: "That depends on the individual case. Many steps can be prepared remotely. Whether you need to be there in person or a power of attorney is possible, we clarify based on the specific situation." },
          { q: "Which documents are needed for the initial review?", a: "For an initial review, basic information about the property, a copy of the Tapu, photos and the location are usually sufficient. We then clarify with you which further documents are required." },
          { q: "Do you buy the property yourselves or broker the sale?", a: "Aurelia reviews the property for a possible acquisition for its own account. If a purchase is an option and we agree on the terms, Aurelia acquires the property itself." },
        ],
      },
      crossLink: { title: "Property in Germany?", text: "Would you like to sell a property in Germany? Here, too, Aurelia reviews a possible acquisition for its own account.", cta: "Go to the owners section" },
      closingCards: [
        { title: "Offer a property in Turkey for purchase", text: "You own a property in Turkey and would like to sell? Aurelia reviews selected properties for a possible acquisition for its own account.", cta: "Offer a property" },
        { title: "You live in Turkey and own a property in Germany?", text: "You can also offer Aurelia your property in Germany for possible purchase from Turkey. Depending on the case, many documents and arrangements can be prepared remotely.", cta: "Offer a property in Germany" },
        { title: "Interested in properties from our portfolio?", text: "Prospective buyers can register, without obligation, which property types and markets interest them. If a suitable property from our portfolio becomes available, we can get in touch.", cta: "Register your interest" },
      ],
      trust: {
        title: "Your property in Turkey. Your contact in Germany.",
        text: "Would you like to sell a property in Turkey? Start by contacting us from Germany. If you wish, we can discuss your situation in German or Turkish and clarify together which details and documents are needed for an initial review.\n\nEven in particular personal, financial or unresolved situations, you are welcome to contact us first without obligation. Whether an acquisition by Aurelia is possible, we assess after reviewing the specific property and circumstances.",
        points: ["Contact in Germany", "German and Turkish", "Initial review of your enquiry"],
      },
      cta: {
        title: "Would you like to offer us your property?",
        text: "Start by sending us some basic details about the property. Our team in Düsseldorf reviews your enquiry and discusses the possible next steps with you.",
        primary: "Offer a property for purchase",
        secondary: "Call +49 211 69583033",
      },
      legalNotice: "The specific legal, notarial, tax and payment arrangements depend on the individual case and the regulations applicable in Germany and Turkey. Where necessary, suitable external specialists are involved.",
    },
  },
  nl: {
    turkeyProperties: {
      hero: {
        kicker: "VASTGOED IN TURKIJE",
        title: "Vastgoed in Turkije – rechtstreeks met Aurelia",
        subtitle:
          "Aurelia beoordeelt geselecteerd vastgoed in Turkije voor een mogelijke aankoop voor eigen rekening. Ook eigenaren die in Turkije wonen en vastgoed in Duitsland willen verkopen, kunnen ons hun object rechtstreeks ter aankoop aanbieden.",
        primaryCta: "Vastgoed ter aankoop aanbieden",
        secondaryCta: "Het verloop bekijken",
      },
      problem: {
        title: "U woont hier – uw vastgoed staat in Turkije?",
        paragraphs: [
          "Vastgoed in Turkije verkopen vanuit Duitsland of een ander Europees land kan extra inspanning vergen. Documenten bevinden zich ter plaatse, bezichtigingen moeten worden georganiseerd en verschillende stappen moeten worden gecoördineerd.",
          "Precies daar komen wij in beeld. Uw eerste aanspreekpunt is Aurelia in Duitsland. Samen met u bekijken wij de beschikbare informatie en bespreken wij wat u met uw vastgoed van plan bent. Is ondersteuning ter plaatse nodig, dan kunnen geschikte vastgoedpartners, specialisten of advocaten in Turkije worden ingeschakeld.",
        ],
      },
      servicesTitle: "Wat belangrijk is bij vastgoed in Turkije",
      servicesIntro: "",
      services: [
        { title: "Afstand en afspraken", text: "Wie niet ter plaatse woont, kan niet elke afspraak persoonlijk bijwonen. Veel stappen kunnen afhankelijk van het geval op afstand worden voorbereid en afgestemd. Of persoonlijke afspraken, volmachten of notariële stappen nodig zijn, hangt af van het concrete geval." },
        { title: "Andere procedures en formaliteiten", text: "Kadaster, volmachten en andere formaliteiten wijken deels af van de procedures die u uit Duitsland kent. Wij leggen duidelijk uit welke gegevens en documenten wij voor onze beoordeling nodig hebben. Juridisch of fiscaal advies bieden wij niet aan." },
        { title: "Aankoop door Aurelia", text: "Wij beoordelen de ligging, de staat en de beschikbare documenten van het vastgoed. Daarna laten wij u open weten of een aankoop door Aurelia voor eigen rekening in principe in aanmerking komt." },
      ],
      propertyTypesTitle: "Voor welk vastgoed?",
      propertyTypesIntro: "U kunt ons uiteenlopend vastgoed in Turkije ter mogelijke aankoop aanbieden. Doorslaggevend is of het vastgoed na onze beoordeling in principe in aanmerking komt voor aankoop door Aurelia.",
      propertyTypes: ["Appartementen", "Huizen en meergezinswoningen", "Percelen", "Vakantiewoningen", "Geërfd vastgoed", "Commercieel vastgoed"],
      propertyTypesExtra: "Ook als eigendomsverhoudingen, documenten of afzonderlijke punten nog niet volledig zijn opgehelderd, kunt u ons eerst benaderen. Of en onder welke voorwaarden een aankoop mogelijk is, kan worden beoordeeld nadat de concrete situatie is onderzocht.",
      audience: {
        title: "Voor wie ons Turkije-onderdeel bedoeld is",
        text: "Ons Turkije-onderdeel richt zich vooral op eigenaren die in Duitsland of een ander Europees land wonen en zich niet zelf met elke afzonderlijke stap ter plaatse willen bezighouden.",
        items: ["Ongebruikt appartement of ongebruikt huis", "Geërfd vastgoed", "Perceel of bouwgrond", "Vastgoed met meerdere mede-eigenaren", "Zelden of nooit naar Turkije reizen", "Bezichtigingen en geïnteresseerden niet zelf organiseren", "Een directe en ongecompliceerde verkoop gewenst"],
      },
      processTitle: "Zo verloopt een mogelijke aankoop in Turkije",
      process: [
        { title: "Eerste contact en objectgegevens", text: "Deel eerst de belangrijkste gegevens van uw vastgoed met ons, bijvoorbeeld plaats, type en staat. Voor het eerste contact heeft u nog geen volledige documenten nodig." },
        { title: "Beoordeling en eerste inschatting", text: "Wij beoordelen uw gegevens en de reeds beschikbare documenten en verschaffen ons een overzicht van het vastgoed. Daarna ontvangt u een eerste inschatting of een aankoop door Aurelia in principe in aanmerking komt." },
        { title: "Afstemming van de verdere aanpak", text: "Komt een aankoop in principe in aanmerking, dan bespreken wij met u welke verdere documenten, volmachten of afspraken nodig zijn en hoe de volgende stappen worden georganiseerd." },
        { title: "Overeenstemming en aankoop", text: "Worden wij het eens over de voorwaarden, dan verwerft Aurelia het vastgoed voor eigen rekening. De benodigde stappen worden vervolgens met de betrokken instanties in Turkije afgestemd." },
      ],
      faq: {
        title: "Veelgestelde vragen over de verkoop van vastgoed in Turkije",
        items: [
          { q: "Moet ik voor de afspraak bij het kadaster persoonlijk naar Turkije reizen?", a: "Dat hangt af van het concrete geval. Veel stappen kunnen op afstand worden voorbereid. Of u persoonlijk aanwezig moet zijn of een volmacht mogelijk is, bespreken wij aan de hand van de concrete situatie." },
          { q: "Welke documenten zijn nodig voor de eerste beoordeling?", a: "Voor een eerste beoordeling volstaan doorgaans basisgegevens over het vastgoed, een kopie van de Tapu, foto's en de locatie. Welke verdere documenten nodig zijn, bespreken wij daarna met u." },
          { q: "Kopen jullie het vastgoed zelf of bemiddelen jullie bij de verkoop?", a: "Aurelia beoordeelt het vastgoed voor een mogelijke aankoop voor eigen rekening. Komt een aankoop in aanmerking en worden wij het eens over de voorwaarden, dan verwerft Aurelia het vastgoed zelf." },
        ],
      },
      crossLink: { title: "Vastgoed in Duitsland?", text: "Wilt u vastgoed in Duitsland verkopen? Ook daar beoordeelt Aurelia een mogelijke aankoop voor eigen rekening.", cta: "Naar het onderdeel voor eigenaren" },
      closingCards: [
        { title: "Vastgoed in Turkije ter aankoop aanbieden", text: "Bezit u vastgoed in Turkije en wilt u verkopen? Aurelia beoordeelt geselecteerd vastgoed voor een mogelijke aankoop voor eigen rekening.", cta: "Vastgoed aanbieden" },
        { title: "U woont in Turkije en bezit vastgoed in Duitsland?", text: "Ook vanuit Turkije kunt u Aurelia uw vastgoed in Duitsland ter mogelijke aankoop aanbieden. Veel documenten en afstemmingen kunnen afhankelijk van het geval op afstand worden voorbereid.", cta: "Vastgoed in Duitsland aanbieden" },
        { title: "Interesse in vastgoed uit onze portefeuille?", text: "Geïnteresseerde kopers kunnen vrijblijvend doorgeven in welke vastgoedtypes en markten zij geïnteresseerd zijn. Is er een passend object uit onze portefeuille beschikbaar, dan kunnen wij contact opnemen.", cta: "Koopinteresse doorgeven" },
      ],
      trust: {
        title: "Uw vastgoed in Turkije. Uw aanspreekpunt in Duitsland.",
        text: "Wilt u vastgoed in Turkije verkopen? Neem eerst vanuit Duitsland contact met ons op. Desgewenst bespreken wij uw situatie in het Duits of Turks en bekijken wij samen welke gegevens en documenten voor een eerste beoordeling nodig zijn.\n\nOok in bijzondere persoonlijke, financiële of onduidelijke situaties kunt u ons eerst vrijblijvend benaderen. Of een aankoop door Aurelia mogelijk is, beoordelen wij na onderzoek van het concrete vastgoed en de uitgangssituatie.",
        points: ["Aanspreekpunt in Duitsland", "Duits en Turks", "Eerste beoordeling van uw aanvraag"],
      },
      cta: {
        title: "Wilt u ons uw vastgoed aanbieden?",
        text: "Stuur ons eerst enkele basisgegevens over het vastgoed. Ons team in Düsseldorf beoordeelt uw aanvraag en bespreekt met u de mogelijke volgende stappen.",
        primary: "Vastgoed ter aankoop aanbieden",
        secondary: "+49 211 69583033 bellen",
      },
      legalNotice: "De concrete juridische, notariële, fiscale en betalingsgerelateerde vormgeving hangt af van het individuele geval en de in Duitsland en Turkije geldende voorschriften. Waar nodig worden geschikte externe specialisten ingeschakeld.",
    },
  },
  it: {
    turkeyProperties: {
      hero: {
        kicker: "IMMOBILI IN TURCHIA",
        title: "Immobili in Turchia – direttamente con Aurelia",
        subtitle:
          "Aurelia valuta immobili selezionati in Turchia per un possibile acquisto in proprio. Anche i proprietari che vivono in Turchia e desiderano vendere un immobile in Germania possono proporcelo direttamente per l'acquisto.",
        primaryCta: "Proporre un immobile per l'acquisto",
        secondaryCta: "Scoprire il percorso",
      },
      problem: {
        title: "Vive qui – il suo immobile si trova in Turchia?",
        paragraphs: [
          "Vendere un immobile in Turchia dalla Germania o da un altro paese europeo può comportare un impegno aggiuntivo. I documenti si trovano sul posto, le visite devono essere organizzate e diversi passaggi devono essere coordinati.",
          "È proprio qui che interveniamo. Il suo primo referente è Aurelia in Germania. Esaminiamo insieme a lei le informazioni disponibili e parliamo dei suoi progetti per l'immobile. Se è necessario un supporto sul posto, possono essere coinvolti partner immobiliari, consulenti specializzati o avvocati in Turchia.",
        ],
      },
      servicesTitle: "Cosa conta per un immobile in Turchia",
      servicesIntro: "",
      services: [
        { title: "Distanza e appuntamenti", text: "Chi non vive sul posto non può partecipare personalmente a ogni appuntamento. Molti passaggi possono essere preparati e coordinati a distanza, a seconda del caso. La necessità di appuntamenti di persona, procure o atti notarili dipende dal singolo caso." },
        { title: "Procedure e formalità diverse", text: "Catasto, procure e altre formalità differiscono in parte dalle procedure note in Germania. Le spieghiamo in modo chiaro quali informazioni e documenti ci servono per la nostra valutazione. Non offriamo consulenza legale o fiscale." },
        { title: "Acquisto da parte di Aurelia", text: "Valutiamo posizione, stato e documentazione disponibile dell'immobile. Le comunichiamo poi apertamente se un acquisto in proprio da parte di Aurelia è in linea di principio possibile." },
      ],
      propertyTypesTitle: "Per quali immobili?",
      propertyTypesIntro: "Può proporci diversi immobili in Turchia per un possibile acquisto. Decisivo è se, dopo la nostra valutazione, l'immobile è in linea di principio adatto a un acquisto da parte di Aurelia.",
      propertyTypes: ["Appartamenti", "Case ed edifici plurifamiliari", "Terreni", "Immobili per vacanze", "Immobili ereditati", "Immobili commerciali"],
      propertyTypesExtra: "Anche se la situazione proprietaria, i documenti o singoli aspetti non sono ancora del tutto chiariti, può contattarci. Se e a quali condizioni un acquisto sia possibile si può valutare dopo l'esame della situazione concreta.",
      audience: {
        title: "A chi si rivolge la nostra sezione Turchia",
        text: "La nostra sezione Turchia si rivolge soprattutto ai proprietari che vivono in Germania o in un altro paese europeo e non desiderano occuparsi personalmente di ogni singolo passaggio sul posto.",
        items: ["Appartamento o casa non utilizzati", "Immobile ereditato", "Terreno o area edificabile", "Immobile con più comproprietari", "Viaggi in Turchia rari o assenti", "Non organizzare personalmente visite e interessati", "Desiderio di una vendita diretta e semplice"],
      },
      processTitle: "Come si svolge un possibile acquisto in Turchia",
      process: [
        { title: "Primo contatto e dati dell'immobile", text: "Ci comunichi innanzitutto i dati principali del suo immobile, ad esempio luogo, tipologia e stato. Per il primo contatto non servono ancora documenti completi." },
        { title: "Valutazione e prima stima", text: "Esaminiamo i suoi dati e i documenti già disponibili e ci facciamo un'idea dell'immobile. Riceve poi una prima valutazione sulla possibilità, in linea di principio, di un acquisto da parte di Aurelia." },
        { title: "Definizione dei passi successivi", text: "Se un acquisto è in linea di principio possibile, chiariamo con lei quali ulteriori documenti, procure o appuntamenti sono necessari e come organizzare i passi successivi." },
        { title: "Accordo e acquisto", text: "Se troviamo un accordo sulle condizioni, Aurelia acquista l'immobile in proprio. I passaggi necessari vengono poi coordinati con gli enti competenti in Turchia." },
      ],
      faq: {
        title: "Domande frequenti sulla vendita di immobili in Turchia",
        items: [
          { q: "Devo recarmi personalmente in Turchia per l'appuntamento al catasto?", a: "Dipende dal singolo caso. Molti passaggi possono essere preparati a distanza. Se sia necessaria la sua presenza o sia possibile una procura, lo chiariamo in base alla situazione concreta." },
          { q: "Quali documenti servono per la prima valutazione?", a: "Per una prima valutazione di norma bastano informazioni di base sull'immobile, una copia del Tapu, fotografie e l'ubicazione. Quali ulteriori documenti servano lo chiariamo poi insieme a lei." },
          { q: "Acquistate l'immobile voi stessi o fate da intermediari nella vendita?", a: "Aurelia valuta l'immobile per un possibile acquisto in proprio. Se l'acquisto è possibile e troviamo un accordo sulle condizioni, è Aurelia stessa ad acquistare l'immobile." },
        ],
      },
      crossLink: { title: "Immobile in Germania?", text: "Desidera vendere un immobile in Germania? Anche in questo caso Aurelia valuta un possibile acquisto in proprio.", cta: "Vai alla sezione proprietari" },
      closingCards: [
        { title: "Proporre un immobile in Turchia per l'acquisto", text: "Possiede un immobile in Turchia e desidera venderlo? Aurelia valuta immobili selezionati per un possibile acquisto in proprio.", cta: "Proporre un immobile" },
        { title: "Vive in Turchia e possiede un immobile in Germania?", text: "Anche dalla Turchia può proporre ad Aurelia il suo immobile in Germania per un possibile acquisto. Molti documenti e accordi possono essere preparati a distanza, a seconda del caso.", cta: "Proporre un immobile in Germania" },
        { title: "Interessato agli immobili del nostro patrimonio?", text: "Gli interessati all'acquisto possono indicare senza impegno le tipologie di immobili e i mercati che li interessano. Se si rende disponibile un immobile adatto dal nostro patrimonio, possiamo contattarli.", cta: "Comunicare l'interesse" },
      ],
      trust: {
        title: "Il suo immobile in Turchia. Il suo referente in Germania.",
        text: "Desidera vendere un immobile in Turchia? Ci contatti innanzitutto dalla Germania. Su richiesta possiamo discutere la sua situazione in tedesco o in turco e chiarire insieme quali informazioni e documenti servono per una prima valutazione.\n\nAnche in situazioni personali, finanziarie o non ancora chiarite può contattarci senza impegno. Se un acquisto da parte di Aurelia sia possibile, lo valutiamo dopo aver esaminato l'immobile concreto e la situazione di partenza.",
        points: ["Referente in Germania", "Tedesco e turco", "Prima valutazione della sua richiesta"],
      },
      cta: {
        title: "Desidera proporci il suo immobile?",
        text: "Ci invii innanzitutto alcune informazioni di base sull'immobile. Il nostro team di Düsseldorf esamina la sua richiesta e discute con lei i possibili passi successivi.",
        primary: "Proporre un immobile per l'acquisto",
        secondary: "Chiamare +49 211 69583033",
      },
      legalNotice: "L'impostazione concreta sotto il profilo legale, notarile, fiscale e dei pagamenti dipende dal singolo caso e dalle norme vigenti in Germania e in Turchia. Ove necessario vengono coinvolti professionisti esterni qualificati.",
    },
  },
  es: {
    turkeyProperties: {
      hero: {
        kicker: "INMUEBLES EN TURQUÍA",
        title: "Inmuebles en Turquía – directamente con Aurelia",
        subtitle:
          "Aurelia estudia inmuebles seleccionados en Turquía para una posible adquisición por cuenta propia. También los propietarios que viven en Turquía y desean vender un inmueble en Alemania pueden ofrecérnoslo directamente para su compra.",
        primaryCta: "Ofrecer un inmueble para su compra",
        secondaryCta: "Conocer el proceso",
      },
      problem: {
        title: "Usted vive aquí y su inmueble está en Turquía?",
        paragraphs: [
          "Vender un inmueble en Turquía desde Alemania u otro país europeo puede suponer un esfuerzo adicional. La documentación está allí, hay que organizar visitas y coordinar distintos pasos.",
          "Justo ahí intervenimos. Su primer interlocutor es Aurelia en Alemania. Revisamos con usted la información disponible y hablamos de lo que desea hacer con su inmueble. Si hace falta apoyo sobre el terreno, pueden intervenir socios inmobiliarios, asesores especializados o abogados en Turquía.",
        ],
      },
      servicesTitle: "Qué es importante en un inmueble en Turquía",
      servicesIntro: "",
      services: [
        { title: "Distancia y citas", text: "Quien no vive allí no puede asistir en persona a todas las citas. Muchos pasos pueden prepararse y coordinarse a distancia según el caso. Que sean necesarias citas presenciales, poderes o trámites notariales depende de cada caso." },
        { title: "Procedimientos y formalidades distintos", text: "El registro de la propiedad, los poderes y otras formalidades difieren en parte de los procedimientos conocidos en Alemania. Le explicamos con claridad qué datos y documentos necesitamos para nuestro análisis. No ofrecemos asesoramiento jurídico ni fiscal." },
        { title: "Compra por parte de Aurelia", text: "Analizamos la ubicación, el estado y la documentación disponible del inmueble. Después le indicamos con franqueza si, en principio, es posible una adquisición por cuenta propia de Aurelia." },
      ],
      propertyTypesTitle: "¿Para qué inmuebles?",
      propertyTypesIntro: "Puede ofrecernos distintos inmuebles en Turquía para su posible compra. Lo decisivo es si, tras nuestro análisis, el inmueble resulta en principio adecuado para su adquisición por Aurelia.",
      propertyTypes: ["Viviendas", "Casas y edificios plurifamiliares", "Terrenos", "Inmuebles vacacionales", "Inmuebles heredados", "Inmuebles comerciales"],
      propertyTypesExtra: "Aunque la titularidad, la documentación o algunos aspectos no estén todavía totalmente aclarados, puede contactarnos primero. Si una compra es posible y en qué condiciones se puede valorar tras analizar la situación concreta.",
      audience: {
        title: "A quién se dirige nuestra sección de Turquía",
        text: "Nuestra sección de Turquía se dirige sobre todo a propietarios que viven en Alemania u otro país europeo y no quieren ocuparse personalmente de cada paso sobre el terreno.",
        items: ["Vivienda o casa sin uso", "Inmueble heredado", "Terreno o solar", "Inmueble con varios copropietarios", "Viajes a Turquía poco frecuentes o inexistentes", "No organizar usted mismo visitas ni interesados", "Desea una venta directa y sencilla"],
      },
      processTitle: "Así se desarrolla una posible compra en Turquía",
      process: [
        { title: "Primer contacto y datos del inmueble", text: "Indíquenos primero los datos básicos de su inmueble, por ejemplo ubicación, tipo y estado. Para el primer contacto aún no necesita la documentación completa." },
        { title: "Análisis y primera valoración", text: "Revisamos sus datos y la documentación ya disponible y nos hacemos una idea del inmueble. Después recibe una primera valoración sobre si, en principio, es posible una compra por parte de Aurelia." },
        { title: "Coordinación de los siguientes pasos", text: "Si una compra es posible en principio, aclaramos con usted qué documentos, poderes o citas adicionales son necesarios y cómo se organizarán los siguientes pasos." },
        { title: "Acuerdo y adquisición", text: "Si llegamos a un acuerdo sobre las condiciones, Aurelia adquiere el inmueble por cuenta propia. Los pasos necesarios se coordinan después con las instancias competentes en Turquía." },
      ],
      faq: {
        title: "Preguntas frecuentes sobre la venta de inmuebles en Turquía",
        items: [
          { q: "¿Tengo que viajar personalmente a Turquía para la cita en el registro?", a: "Depende de cada caso. Muchos pasos pueden prepararse a distancia. Si debe estar presente o si es posible un poder, lo aclaramos según la situación concreta." },
          { q: "¿Qué documentos se necesitan para el primer análisis?", a: "Para un primer análisis suelen bastar datos básicos del inmueble, una copia del Tapu, fotos y la ubicación. Qué otros documentos son necesarios lo aclaramos después con usted." },
          { q: "¿Compran ustedes el inmueble o intermedian en la venta?", a: "Aurelia estudia el inmueble para una posible adquisición por cuenta propia. Si la compra es posible y llegamos a un acuerdo sobre las condiciones, es Aurelia quien adquiere el inmueble." },
        ],
      },
      crossLink: { title: "¿Inmueble en Alemania?", text: "¿Desea vender un inmueble en Alemania? También allí Aurelia estudia una posible compra por cuenta propia.", cta: "Ir al apartado de propietarios" },
      closingCards: [
        { title: "Ofrecer un inmueble en Turquía para su compra", text: "¿Tiene un inmueble en Turquía y desea venderlo? Aurelia estudia inmuebles seleccionados para una posible adquisición por cuenta propia.", cta: "Ofrecer un inmueble" },
        { title: "¿Vive en Turquía y tiene un inmueble en Alemania?", text: "También desde Turquía puede ofrecer a Aurelia su inmueble en Alemania para una posible compra. Según el caso, muchos documentos y gestiones pueden prepararse a distancia.", cta: "Ofrecer un inmueble en Alemania" },
        { title: "¿Le interesan inmuebles de nuestra cartera?", text: "Los interesados pueden indicar sin compromiso qué tipos de inmuebles y mercados les interesan. Si hay disponible un inmueble adecuado de nuestra cartera, podemos ponernos en contacto.", cta: "Registrar interés de compra" },
      ],
      trust: {
        title: "Su inmueble en Turquía. Su interlocutor en Alemania.",
        text: "¿Desea vender un inmueble en Turquía? Contacte primero con nosotros desde Alemania. Si lo desea, podemos tratar su situación en alemán o en turco y aclarar juntos qué datos y documentos se necesitan para un primer análisis.\n\nTambién en situaciones personales, económicas o no aclaradas puede contactarnos primero sin compromiso. Si una compra por parte de Aurelia es posible, lo valoramos tras analizar el inmueble concreto y la situación de partida.",
        points: ["Interlocutor en Alemania", "Alemán y turco", "Primer análisis de su consulta"],
      },
      cta: {
        title: "¿Desea ofrecernos su inmueble?",
        text: "Envíenos primero algunos datos básicos del inmueble. Nuestro equipo en Düsseldorf analiza su consulta y comenta con usted los posibles siguientes pasos.",
        primary: "Ofrecer un inmueble para su compra",
        secondary: "Llamar al +49 211 69583033",
      },
      legalNotice: "La configuración jurídica, notarial, fiscal y de pagos concreta depende de cada caso y de la normativa vigente en Alemania y Turquía. Cuando sea necesario, se incorporan profesionales externos adecuados.",
    },
  },
  fr: {
    turkeyProperties: {
      hero: {
        kicker: "BIENS EN TURQUIE",
        title: "Biens en Turquie – directement avec Aurelia",
        subtitle:
          "Aurelia étudie des biens sélectionnés en Turquie en vue d'une acquisition pour son propre compte. Les propriétaires qui vivent en Turquie et souhaitent vendre un bien en Allemagne peuvent également nous le proposer directement à l'achat.",
        primaryCta: "Proposer un bien à l'achat",
        secondaryCta: "Découvrir le déroulement",
      },
      problem: {
        title: "Vous vivez ici – votre bien se trouve en Turquie ?",
        paragraphs: [
          "Vendre un bien en Turquie depuis l'Allemagne ou un autre pays européen peut demander un effort supplémentaire. Les documents se trouvent sur place, les visites doivent être organisées et différentes étapes coordonnées.",
          "C'est précisément là que nous intervenons. Votre premier interlocuteur est Aurelia en Allemagne. Nous examinons avec vous les informations disponibles et discutons de vos projets pour le bien. Si un soutien sur place est nécessaire, des partenaires immobiliers, des conseillers spécialisés ou des avocats en Turquie peuvent être associés.",
        ],
      },
      servicesTitle: "Ce qui compte pour un bien en Turquie",
      servicesIntro: "",
      services: [
        { title: "Distance et rendez-vous", text: "Lorsqu'on ne vit pas sur place, on ne peut pas assister en personne à chaque rendez-vous. De nombreuses étapes peuvent, selon le cas, être préparées et coordonnées à distance. La nécessité de rendez-vous en personne, de procurations ou d'actes notariés dépend de chaque situation." },
        { title: "Procédures et formalités différentes", text: "Registre foncier, procurations et autres formalités diffèrent en partie des procédures connues en Allemagne. Nous vous expliquons clairement quelles informations et quels documents nous sont nécessaires pour notre examen. Nous ne fournissons pas de conseil juridique ou fiscal." },
        { title: "Acquisition par Aurelia", text: "Nous examinons l'emplacement, l'état et les documents disponibles du bien. Nous vous indiquons ensuite ouvertement si une acquisition par Aurelia pour son propre compte est en principe envisageable." },
      ],
      propertyTypesTitle: "Pour quels biens ?",
      propertyTypesIntro: "Vous pouvez nous proposer différents biens en Turquie en vue d'un éventuel achat. L'essentiel est de savoir si, après notre examen, le bien se prête en principe à une acquisition par Aurelia.",
      propertyTypes: ["Appartements", "Maisons et immeubles collectifs", "Terrains", "Biens de vacances", "Biens hérités", "Immobilier commercial"],
      propertyTypesExtra: "Même si la situation de propriété, les documents ou certains points ne sont pas encore entièrement clarifiés, vous pouvez d'abord nous contacter. La possibilité d'un achat et ses conditions pourront être appréciées après examen de la situation concrète.",
      audience: {
        title: "À qui s'adresse notre espace Turquie",
        text: "Notre espace Turquie s'adresse avant tout aux propriétaires qui vivent en Allemagne ou dans un autre pays européen et ne souhaitent pas gérer eux-mêmes chaque étape sur place.",
        items: ["Appartement ou maison inoccupé(e)", "Bien hérité", "Terrain ou terrain à bâtir", "Bien détenu par plusieurs copropriétaires", "Voyages en Turquie rares ou inexistants", "Ne pas organiser soi-même les visites et les acquéreurs potentiels", "Souhait d'une vente directe et simple"],
      },
      processTitle: "Déroulement d'une éventuelle acquisition en Turquie",
      process: [
        { title: "Premier contact et données du bien", text: "Communiquez-nous d'abord les principales caractéristiques de votre bien, par exemple la localisation, le type et l'état. Pour un premier contact, des documents complets ne sont pas encore nécessaires." },
        { title: "Examen et première appréciation", text: "Nous examinons vos informations et les documents déjà disponibles afin d'avoir une vue d'ensemble du bien. Vous recevez ensuite une première appréciation indiquant si une acquisition par Aurelia est en principe envisageable." },
        { title: "Organisation des étapes suivantes", text: "Si une acquisition est en principe envisageable, nous clarifions avec vous les documents, procurations ou rendez-vous supplémentaires nécessaires et l'organisation des prochaines étapes." },
        { title: "Accord et acquisition", text: "Si nous trouvons un accord sur les conditions, Aurelia acquiert le bien pour son propre compte. Les démarches nécessaires sont ensuite coordonnées avec les instances concernées en Turquie." },
      ],
      faq: {
        title: "Questions fréquentes sur la vente de biens en Turquie",
        items: [
          { q: "Dois-je me rendre en personne en Turquie pour le rendez-vous au registre foncier ?", a: "Cela dépend de chaque situation. De nombreuses étapes peuvent être préparées à distance. Nous déterminons, selon la situation concrète, si votre présence est nécessaire ou si une procuration est possible." },
          { q: "Quels documents sont nécessaires pour le premier examen ?", a: "Pour un premier examen, des informations de base sur le bien, une copie du Tapu, des photos et la localisation suffisent généralement. Nous clarifions ensuite avec vous les autres documents nécessaires." },
          { q: "Achetez-vous le bien vous-mêmes ou servez-vous d'intermédiaire ?", a: "Aurelia étudie le bien en vue d'une acquisition pour son propre compte. Si un achat est envisageable et que nous trouvons un accord sur les conditions, Aurelia acquiert le bien elle-même." },
        ],
      },
      crossLink: { title: "Un bien en Allemagne ?", text: "Vous souhaitez vendre un bien en Allemagne ? Là aussi, Aurelia étudie une éventuelle acquisition pour son propre compte.", cta: "Vers l'espace propriétaires" },
      closingCards: [
        { title: "Proposer un bien en Turquie à l'achat", text: "Vous possédez un bien en Turquie et souhaitez le vendre ? Aurelia étudie des biens sélectionnés en vue d'une acquisition pour son propre compte.", cta: "Proposer un bien" },
        { title: "Vous vivez en Turquie et possédez un bien en Allemagne ?", text: "Depuis la Turquie également, vous pouvez proposer à Aurelia votre bien en Allemagne en vue d'un éventuel achat. Selon le cas, de nombreux documents et échanges peuvent être préparés à distance.", cta: "Proposer un bien en Allemagne" },
        { title: "Intéressé par des biens de notre portefeuille ?", text: "Les acquéreurs potentiels peuvent indiquer sans engagement les types de biens et les marchés qui les intéressent. Si un bien adapté de notre portefeuille devient disponible, nous pouvons prendre contact.", cta: "Indiquer mon intérêt d'achat" },
      ],
      trust: {
        title: "Votre bien en Turquie. Votre interlocuteur en Allemagne.",
        text: "Vous souhaitez vendre un bien en Turquie ? Contactez-nous d'abord depuis l'Allemagne. Si vous le souhaitez, nous pouvons discuter de votre situation en allemand ou en turc et déterminer ensemble les informations et documents nécessaires à un premier examen.\n\nMême dans des situations personnelles, financières ou non clarifiées, vous pouvez d'abord nous contacter sans engagement. Nous apprécions la possibilité d'une acquisition par Aurelia après examen du bien concret et de la situation de départ.",
        points: ["Interlocuteur en Allemagne", "Allemand et turc", "Premier examen de votre demande"],
      },
      cta: {
        title: "Souhaitez-vous nous proposer votre bien ?",
        text: "Envoyez-nous d'abord quelques informations de base sur le bien. Notre équipe à Düsseldorf examine votre demande et discute avec vous des prochaines étapes possibles.",
        primary: "Proposer un bien à l'achat",
        secondary: "Appeler le +49 211 69583033",
      },
      legalNotice: "L'organisation juridique, notariale, fiscale et relative aux paiements dépend de chaque cas et des réglementations en vigueur en Allemagne et en Turquie. Si nécessaire, des spécialistes externes qualifiés sont associés.",
    },
  },
};
