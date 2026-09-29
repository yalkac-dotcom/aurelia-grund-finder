import type { PrivacyCopy } from "./types";
import { kvkkTr } from "./kvkkTr";

export const tr: PrivacyCopy = {
  h1: "Kişisel Verilerin Korunması",
  subtitle: "KVKK kapsamında aydınlatma metni ve AB Genel Veri Koruma Tüzüğü (GDPR / DSGVO) kapsamında gizlilik bilgilendirmesi",
  updated: "Güncelleme: Eylül 2026",
  jumpGdpr: "GDPR / DSGVO",
  jumpKvkk: "KVKK",
  navLabel: "Bölümler",
  disclaimer: "Bu sayfa üçüncü taraf web sitelerine bağlantılar içerir. Bu sitelerin içeriği üzerinde etkimiz yoktur; içerikten her zaman ilgili sağlayıcı sorumludur.",
  kvkk: kvkkTr,
  gdpr: {
    lang: "tr",
    heading: "AB Veri Koruma Bilgilendirmesi (GDPR / DSGVO – BDSG)",
    sections: [
      { title: "1. Sorumlu", body: [
        "Aurelia Grundbesitz GmbH\nGrevenbroicher Weg 2\n40547 Düsseldorf\nAlmanya",
        "Genel Müdür: Eyüp Yasar Alkac\nTicaret Sicili: Amtsgericht Düsseldorf\nHRB 107859",
        "Telefon: {tel}\nE-posta: {mail}",
      ] },
      { title: "2. Veri işlemeye ilişkin genel bilgiler", body: [
        "Kişisel verileri kural olarak yalnızca işlevsel bir internet sitesi sunmak ve taleplerinizi işleme almak için gerekli olduğu ölçüde işleriz. İşleme, [AB Genel Veri Koruma Tüzüğü (GDPR / DSGVO)](EURLEX) ve [Alman Federal Veri Koruma Kanunu (BDSG)](BDSG) esas alınarak yapılır.",
        "Talebe bağlı olarak özellikle aşağıdaki veriler işlenebilir:",
        { ul: [
          "Ad ve soyad", "Telefon numarası", "E-posta adresi", "Mesajlar ve diğer iletişim bilgileri",
          "Gayrimenkulün adresi, konumu ve yeri", "Gayrimenkul türü", "Konut / arsa alanı",
          "Birim ve oda sayısı", "Yapım yılı ve durumu", "Kira durumu", "Mülkiyet durumu",
          "Özel satış durumlarına ilişkin bilgiler", "İstenen satış fiyatı", "Satın alma ilgileri",
          "Tercih edilen pazarlar, bölgeler ve gayrimenkul türleri", "Yüklenen fotoğraflar",
          "Yüklenen PDF, JPG, JPEG ve PNG belgeleri",
          "Teknik kullanım ve erişim verileri (sunucu kayıt dosyaları ile – yalnızca onay halinde – Google Analytics 4 ve Microsoft Clarity bölümlerine bakınız)",
        ] },
      ] },
      { title: "3. İşlemenin hukuki dayanakları", body: [
        { ul: [
          "[GDPR md. 6/1 (a)](EURLEX) – ilgili kişinin rızası",
          "[GDPR md. 6/1 (b)](EURLEX) – sözleşmenin ifası veya sözleşme öncesi tedbirler",
          "[GDPR md. 6/1 (c)](EURLEX) – hukuki yükümlülüklerin yerine getirilmesi",
          "[GDPR md. 6/1 (f)](EURLEX) – meşru menfaat",
        ] },
      ] },
      { title: "4. Sunucu kayıt dosyaları", body: [
        "Site sağlayıcısı, tarayıcınızın otomatik olarak ilettiği bilgileri sunucu kayıt dosyalarında (log) otomatik olarak toplar ve saklar. Bunlar:",
        { ul: ["Tarayıcı türü ve sürümü", "Kullanılan işletim sistemi", "Yönlendiren URL (referrer)", "Erişen bilgisayarın ana bilgisayar adı", "Sunucu talebinin saati", "IP adresi (anonimleştirilmiş)"] },
        "Bu veriler başka veri kaynaklarıyla birleştirilmez. Hukuki dayanak GDPR md. 6/1 (f)’dir.",
      ] },
      { title: "5. İletişim ve iletişim formları", body: [
        "Bizimle iletişim formu, e-posta veya telefon yoluyla iletişime geçtiğinizde, verdiğiniz iletişim bilgileri dahil bilgileriniz talebinizin işlenmesi ve olası ek sorular için tarafımızca saklanır. Bu özellikle iletişim talepleri, geri arama ve randevu talepleri, iş ortaklığı talepleri ve diğer talepler için geçerlidir.",
        "Hukuki dayanak GDPR md. 6/1 (b) (sözleşme öncesi tedbirler) veya GDPR md. 6/1 (a) (rıza) ile GDPR md. 6/1 (f)’dir (taleplerin yanıtlanmasına ilişkin meşru menfaat).",
        "WhatsApp üzerinden bizimle iletişim kurmanız da mümkündür. Sitemizdeki WhatsApp bağlantısını kullandığınızda WhatsApp’a yönlendirilirsiniz ve WhatsApp (Meta Platforms Ireland Limited) gizlilik kuralları uygulanır. Bu kapsamda veriler üçüncü ülkelere (ör. ABD) de aktarılabilir.",
        "Bizimle WhatsApp üzerinden iletişime geçtiğinizde telefon numaranızı, adınızı ve mesaj içeriklerinizi talebinizin değerlendirilmesi amacıyla işleriz. İşleme, talebinizin bir sözleşmenin kurulmasına veya ifasına yönelik olduğu ölçüde GDPR md. 6/1 (b)’ye dayanır. Diğer durumlarda işleme, potansiyel müşteriler ve iş ortaklarıyla verimli iletişim kurma konusundaki meşru menfaatimize dayanarak GDPR md. 6/1 (f) uyarınca yapılır. Dilerseniz bize her zaman telefon, e-posta veya iletişim formu üzerinden de ulaşabilirsiniz.",
      ] },
      { title: "6. Gayrimenkul talepleri ve satın alma ilgisi", body: [
        "Kişisel veriler özellikle Aurelia tarafından olası bir satın alım için sunulan gayrimenkul tekliflerinde, Aurelia’nın kendi portföyündeki gayrimenkullere yönelik satın alma ilgisinde ve Türkiye’deki gayrimenkullere ilişkin taleplerde işlenebilir.",
        "Aurelia başkalarına ait gayrimenkullerin aracılığını yapmaz ve klasik arama siparişleri kabul etmez. Alıcı adayları yalnızca kendi portföyümüzdeki olası uygun gayrimenkullere ilişkin ilgilerini bildirir.",
        "Hukuki dayanak GDPR md. 6/1 (b) ve – verilmişse – GDPR md. 6/1 (a)’dır.",
      ] },
      { title: "7. Fotoğraf ve belge yükleme", body: [
        "Gayrimenkul taleplerinde kullanıcılar fotoğraf ve belge (PDF, JPG, JPEG, PNG) iletebilir. Bu belgeler kişisel veriler içerebilir.",
        "Lütfen yalnızca talebinizin işlenmesi için gerekli olan ve iletmeye yetkili olduğunuz belgeleri gönderin. Belgeler üçüncü kişilere ait kişisel veriler içeriyorsa, yalnızca somut talep için paylaşılması gerekli ve hukuken izin verilen bilgiler iletilmelidir.",
        "Veriler talebin işlenmesi, gayrimenkulün incelenmesi ve – gerekli olduğu ölçüde – olası bir gayrimenkul işleminin hazırlanması veya yürütülmesi amacıyla işlenir.",
      ] },
      { title: "8. Kişisel verilerin alıcıları", body: [
        "Somut işleme bağlı olarak ve yalnızca gerekli olduğu ölçüde kişisel veriler özellikle aşağıdaki alıcılara açılabilir:",
        { ul: [
          "BT / barındırma ve teknik hizmet sağlayıcılar", "Avukatlar", "Noterler", "Vergi danışmanları / mali müşavirler", "Değerleme uzmanları",
          "Mimarlar ve teknik uzmanlar", "Gerekli gayrimenkul veya iş ortakları",
          "Yasal bir yükümlülük bulunması veya somut bir işlem için gerekli olması halinde resmi makamlar veya diğer kurumlar",
        ] },
      ] },
      { title: "9. Almanya ve Türkiye – sınır ötesi veri işleme", body: [
        { box: [
          "Aurelia Grundbesitz GmbH’nin merkezi Almanya’dadır ve Türkiye’deki gayrimenkullere ilişkin talepleri de işler.",
          "Somut bir talep veya gayrimenkul işlemi kapsamında kişisel verilerin Almanya ile Türkiye arasında aktarılması veya orada erişilebilir kılınması gerekebilir.",
          "Böyle bir aktarım yalnızca ilgili işlem için gerekli olduğu ölçüde ve geçerli veri koruma şartları sağlandığında gerçekleşir. Uluslararası aktarımlarda [GDPR (md. 44 vd.)](EURLEX) ve – uygulanabilir olduğu ölçüde – [KVKK md. 9](KVKKYD) gereklilikleri dikkate alınır.",
        ] },
      ] },
      { title: "10. Çerezler, yerel depolama ve onay yönetimi", body: [
        "Sitemizi ilk ziyaretinizde, onay bildirimi aracılığıyla analiz hizmetlerinin kullanılıp kullanılamayacağına karar verirsiniz. Teknik olarak zorunlu depolamalar ile onaya tabi analiz işlevlerini birbirinden ayırırız.",
        { ul: [
          "Zorunlu: Onay kararınızın tarayıcınızın yerel depolamasında saklanması.",
          "Zorunlu: Seçtiğiniz dil sürümünün tarayıcınızın yerel depolamasında saklanması.",
          "Onaya tabi: Google Analytics 4 ve Microsoft Clarity yalnızca açık onayınızdan sonra yüklenir ve etkinleştirilir.",
        ] },
        "Reddetmenin sitenin temel kullanımı açısından hiçbir dezavantajı yoktur. Seçiminizi sitenin alt bölümündeki “Çerez Ayarları” üzerinden istediğiniz zaman değiştirebilir veya geri alabilirsiniz.",
      ] },
      { title: "11. Google Analytics 4", body: [
        "Google Analytics 4’ü sitemizin kullanımının istatistiksel analizi ve erişim ölçümü için kullanıyoruz; buna telefon ve e-posta bağlantılarına tıklamalar, önemli form sayfalarının görüntülenmesi, başarıyla gönderilen formlar ve kurumsal videoların başlatılması gibi anonim olaylar da dahildir. Ad, e-posta adresi, telefon numarası veya mesaj gibi form içerikleri Google’a aktarılmaz. İşleme yalnızca açık onayınızdan sonra gerçekleşir. Reklam veya yeniden pazarlama işlevleri kullanılmaz.",
        "İşlenebilecek veriler:",
        { ul: ["IP adresi (kısaltılmış)", "Cihaz ve tarayıcı bilgileri", "Ziyaret edilen sayfalar ve sayfa yolu", "Sayfa başlığı", "Yönlendiren kaynak (referrer)", "Çerez veya çevrim içi tanımlayıcı"] },
        "Bu sitede IP anonimleştirme etkindir; IP adresi bu nedenle kısaltılmış olarak işlenir.",
        "Hukuki dayanak GDPR md. 6/1 (a)’dır (rıza). Onay, “Çerez Ayarları” üzerinden istediğiniz zaman geleceğe etkili olarak geri alınabilir.",
        "Sağlayıcı: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, İrlanda.",
        "Verilerin Avrupa Ekonomik Alanı dışında, özellikle ABD’de işlenmesi bu kapsamda göz ardı edilemez. Ayrıntılar sağlayıcının gizlilik bilgilerinde yer almaktadır:",
        { ul: ["[Google Gizlilik Politikası](GPRIV)", "[Google Analytics – veri koruma](GA1)", "[Google Analytics – onay (consent)](GA2)"] },
      ] },
      { title: "12. Microsoft Clarity", body: [
        "Microsoft Clarity’yi sitemizin kullanımını analiz etmek, özellikle oturum analizi ve ısı haritaları oluşturmak için kullanıyoruz. İşleme yalnızca açık onayınızdan sonra gerçekleşir.",
        { ul: ["IP adresi", "Cihaz ve tarayıcı bilgileri", "Sayfa görüntülemeleri", "Fare, kaydırma ve tıklama davranışı", "Çerez veya çevrim içi tanımlayıcılar"] },
        "Hukuki dayanak GDPR md. 6/1 (a)’dır (rıza). Onay, “Çerez Ayarları” üzerinden istediğiniz zaman geleceğe etkili olarak geri alınabilir; geri alma Microsoft Clarity’ye derhal iletilir.",
        "Sağlayıcı: Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, İrlanda.",
        "Verilerin Avrupa Ekonomik Alanı dışında, özellikle ABD’de işlenmesi bu kapsamda göz ardı edilemez. [Microsoft Gizlilik Bildirimi](MS)",
      ] },
      { title: "13. Saklama süresi", body: [
        "Kişisel veriler, saklama amacı ortadan kalktığında silinir. Taleplerde bu, ilgili konu kesin olarak sonuçlandığında ve yasal saklama yükümlülükleri buna engel olmadığında söz konusudur.",
      ] },
      { title: "14. Veri güvenliği", body: [
        "Bu site üzerinden veri aktarımı şifreli olarak (HTTPS) gerçekleşir. Verilerinizi kayba, kötüye kullanıma ve yetkisiz erişime karşı korumak için uygun teknik ve idari tedbirleri alırız. Ancak internet üzerinden tamamen güvenli bir veri aktarımı garanti edilemez.",
      ] },
      { title: "15. İlgili kişilerin hakları", body: [
        "Sizinle ilgili kişisel veriler bakımından aşağıdaki haklara sahipsiniz:",
        { ul: [
          "[GDPR md. 15 – bilgi edinme](EURLEX)", "[GDPR md. 16 – düzeltme](EURLEX)", "[GDPR md. 17 – silme](EURLEX)",
          "[GDPR md. 18 – işlemenin kısıtlanması](EURLEX)", "[GDPR md. 20 – veri taşınabilirliği](EURLEX)", "[GDPR md. 21 – itiraz](EURLEX)",
        ] },
      ] },
      { title: "16. Onayın geri alınması", body: [
        "Verdiğiniz onayı istediğiniz zaman geleceğe etkili olarak geri alabilirsiniz (GDPR md. 7/3) – analiz hizmetleri için sitenin alt bölümündeki “Çerez Ayarları” üzerinden, diğer durumlarda {mail} adresine şekil şartı olmaksızın e-posta göndererek. Geri almaya kadar yapılan işlemenin hukuka uygunluğu etkilenmez.",
      ] },
      { title: "17. Şikâyet hakkı", body: [
        "Bir veri koruma denetim makamına şikâyette bulunma hakkına sahipsiniz. Bizim için yetkili makam [Kuzey Ren-Vestfalya Veri Koruma ve Bilgi Edinme Özgürlüğü Eyalet Komiserliği’dir (LDI NRW)](LDI).",
      ] },
      { title: "18. Veri koruma ile ilgili iletişim", body: [
        "Veri koruma ile ilgili sorularınız için bize şu adresten ulaşabilirsiniz:\nE-posta: {mail}\nTelefon: {tel}",
      ] },
      { title: "19. Bu bilgilendirmedeki değişiklikler", body: [
        "Hukuki durumun veya sitemizin ya da veri işleme faaliyetlerimizin değişmesi halinde bu bilgilendirmeyi güncelleme hakkımızı saklı tutarız. Burada yayımlanan güncel sürüm geçerlidir. Güncelleme: Eylül 2026.",
      ] },
    ],
  },
};
