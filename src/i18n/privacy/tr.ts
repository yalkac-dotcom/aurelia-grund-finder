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
          "Teknik kullanım ve erişim verileri (sunucu kayıt dosyaları bölümüne bakınız)",
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
        "Barındırma, ağ ve güvenlik işlevleri için – özellikle web sitesinin sunulması ve kötüye kullanım amaçlı erişimlere ve botlara karşı korunması için – barındırma hizmet sağlayıcımız aracılığıyla Cloudflare hizmeti (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, ABD) kullanılmaktadır. Bu kapsamda teknik olarak gerekli bağlantı verileri, özellikle IP adresi işlenir. Analiz veya pazarlama amacı güdülmez. ABD'de işleme ihtimali göz ardı edilemez; Cloudflare, EU-U.S. Data Privacy Framework kapsamında sertifikalıdır. Hukuki dayanak GDPR md. 6/1-f'dir (web sitesinin güvenli ve istikrarlı şekilde sunulmasına ilişkin meşru menfaat).",
      ] },
      { title: "5. İletişim ve iletişim formları", body: [
        "Bizimle iletişim formu, e-posta veya telefon yoluyla iletişime geçtiğinizde, verdiğiniz iletişim bilgileri dahil bilgileriniz talebinizin işlenmesi ve olası ek sorular için tarafımızca saklanır. Bu özellikle iletişim talepleri, geri arama ve randevu talepleri, iş ortaklığı talepleri ve diğer talepler için geçerlidir.",
        "Hukuki dayanak GDPR md. 6/1 (b) (sözleşme öncesi tedbirler) veya GDPR md. 6/1 (a) (rıza) ile GDPR md. 6/1 (f)’dir (taleplerin yanıtlanmasına ilişkin meşru menfaat).",
        "WhatsApp üzerinden bizimle iletişim kurmanız da mümkündür. WhatsApp kullanımı isteğe bağlıdır ve kendi inisiyatifinizle gerçekleşir. Sitemizdeki WhatsApp bağlantısını kullandığınızda WhatsApp’a yönlendirilirsiniz ve WhatsApp (Meta Platforms Ireland Limited) gizlilik kuralları uygulanır. Bu kapsamda veriler üçüncü ülkelere (ör. ABD) de aktarılabilir.",
        "WhatsApp, web sitemizde yalnızca basit bir harici bağlantı (wa.me) olarak yer almaktadır. WhatsApp veya Meta komut dosyaları yüklenmez ve tıklamanızdan önce WhatsApp'a veya Meta'ya hiçbir veri aktarılmaz. Ancak aktif olarak tıkladıktan sonra WhatsApp'a yönlendirilirsiniz.",
        "Bizimle WhatsApp üzerinden iletişime geçtiğinizde telefon numaranızı, adınızı ve mesaj içeriklerinizi talebinizin değerlendirilmesi amacıyla işleriz. İşleme, talebinizin bir sözleşmenin kurulmasına veya ifasına yönelik olduğu ölçüde GDPR md. 6/1 (b)’ye dayanır. Diğer durumlarda işleme, potansiyel müşteriler ve iş ortaklarıyla verimli iletişim kurma konusundaki meşru menfaatimize dayanarak GDPR md. 6/1 (f) uyarınca yapılır. Dilerseniz bize her zaman telefon, e-posta veya iletişim formu üzerinden de ulaşabilirsiniz.",
      ] },
      { title: "6. Gayrimenkul talepleri ve satın alma ilgisi", body: [
        "Kişisel veriler özellikle Aurelia tarafından olası bir satın alım için sunulan gayrimenkul tekliflerinde, Aurelia’nın kendi portföyündeki gayrimenkullere yönelik satın alma ilgisinde ve Türkiye’deki gayrimenkullere ilişkin taleplerde işlenebilir.",
        "Aurelia başkalarına ait gayrimenkullerin aracılığını yapmaz ve klasik arama siparişleri kabul etmez. Alıcı adayları yalnızca kendi portföyümüzdeki olası uygun gayrimenkullere ilişkin ilgilerini bildirir.",
        "Hukuki dayanak GDPR md. 6/1 (b) ve – verilmişse – GDPR md. 6/1 (a)’dır.",
        "„Gayrimenkul sunun“ formunda gayrimenkulünüzün durumu hakkında isteğe bağlı olarak ek bilgi verebilirsiniz („Özel durum“ alanı ve serbest açıklama). Bu bilgiler zorunlu değildir ve yalnızca talebinizin değerlendirilmesi için kullanılır. Talep için gerekli olmadıkça lütfen buraya sağlık verileri veya GVKT (DSGVO) m. 9 anlamında diğer özel nitelikli kişisel verileri girmeyiniz.",
      ] },
      { title: "7. Fotoğraf ve belge yükleme", body: [
        "Gayrimenkul taleplerinde kullanıcılar fotoğraf ve belge (PDF, JPG, JPEG, PNG) iletebilir. Bu belgeler kişisel veriler içerebilir.",
        "Lütfen yalnızca talebinizin işlenmesi için gerekli olan ve iletmeye yetkili olduğunuz belgeleri gönderin. Belgeler üçüncü kişilere ait kişisel veriler içeriyorsa, yalnızca somut talep için paylaşılması gerekli ve hukuken izin verilen bilgiler iletilmelidir.",
        "Veriler talebin işlenmesi, gayrimenkulün incelenmesi ve – gerekli olduğu ölçüde – olası bir gayrimenkul işleminin hazırlanması veya yürütülmesi amacıyla işlenir.",
        "Yüklenen dosyalar (PDF, JPG, JPEG, PNG; dosya başına en fazla 10 MB) teknik hizmet sağlayıcımızın herkese açık olmayan bir dosya depolama alanında saklanır (bkz. 8. bölüm). Herkese açık erişim mümkün değildir; erişim yalnızca talebin işlenmesi kapsamında gerçekleşir.",
        "Bize gönderilen bildirim e-postası, dosyalara 7 gün geçerli bir indirme bağlantısı içerir. Bağlantının süresinin dolması, saklanan dosyanın silindiği anlamına gelmez; silme işlemi 11. bölüme göre yapılır.",
      ] },
      { title: "8. Kişisel verilerin alıcıları", body: [
        "Somut işleme bağlı olarak ve yalnızca gerekli olduğu ölçüde kişisel veriler özellikle aşağıdaki alıcılara açılabilir:",
        { ul: [
          "BT / barındırma ve teknik hizmet sağlayıcılar", "Avukatlar", "Noterler", "Vergi danışmanları / mali müşavirler", "Değerleme uzmanları",
          "Mimarlar ve teknik uzmanlar", "Gerekli gayrimenkul veya iş ortakları",
          "Yasal bir yükümlülük bulunması veya somut bir işlem için gerekli olması halinde resmi makamlar veya diğer kurumlar",
        "Veri tabanı ve dosya depolama (Lovable Cloud): Formlarımız aracılığıyla iletilen bilgiler bir veri tabanında, yüklenen dosyalar ise herkese açık olmayan bir dosya depolama alanında saklanır. Amaç, talebinizin işlenmesi, belgelenmesi ve takibidir. İnternet sitesi, veri tabanı ve dosya depolama, bizim adımıza teknik hizmet sağlayıcı olarak faaliyet gösteren ve bu amaçla başka altyapı sağlayıcılarından yararlanan Lovable Cloud platformu üzerinden işletilir. Saklanan taleplere internet sitesi üzerinden erişilemez; erişim yalnızca korumalı bir yönetim girişi üzerinden bize ve teknik olarak gerekli olduğu ölçüde hizmet sağlayıcıya aittir. Teknik yapılandırmaya göre veri tabanı ve dosya depolama AB'de (Frankfurt am Main) bir veri merkezinde bulunmaktadır. Hizmet sağlayıcının veya alt yüklenicilerinin AB/AEA dışındaki ülkelerden, özellikle ABD'den (ör. bakım veya destek amacıyla) erişimi hariç tutulamaz. Hukuki dayanak GVKT (DSGVO) m. 6/1 (b) ve (f) bentleridir.",
        "E-posta gönderimi (Resend): Form taleplerinin bize ve onay e-postalarının size gönderilmesi için Resend hizmetini (Resend, Inc., ABD) kullanıyoruz. Bu kapsamda formda girilen veriler (özellikle ad, e-posta adresi, telefon numarası, talebin içeriği, gayrimenkul bilgileri ve varsa yüklenen dosyalara ait indirme bağlantıları) ile teknik gönderim verileri (ör. alıcı adresi, gönderim zamanı) işlenir. Resend bizim adımıza teknik hizmet sağlayıcı olarak faaliyet gösterir. Verilerin ABD'de işlenmesi mümkündür. Hukuki dayanak GVKT (DSGVO) m. 6/1 (b) (talebinizin işlenmesi) ve m. 6/1 (f) (güvenilir e-posta gönderimine ilişkin meşru menfaat) bentleridir.",
        "AB/AEA dışındaki üçüncü ülkelere aktarımlar yalnızca GVKT (DSGVO) m. 44 vd. hükümlerine uygun olarak, yani AB Komisyonu'nun yeterlilik kararı (m. 45) veya ilgili sağlayıcıyla kararlaştırılmış olması halinde AB standart sözleşme maddeleri gibi uygun güvenceler (m. 46) temelinde gerçekleşir. {mail} adresine başvurmanız halinde kullanılan dayanak hakkında sizi bilgilendiririz.",
        ] },
      ] },
      { title: "9. Almanya ve Türkiye – sınır ötesi veri işleme", body: [
        { box: [
          "Aurelia Grundbesitz GmbH’nin merkezi Almanya’dadır ve Türkiye’deki gayrimenkullere ilişkin talepleri de işler.",
          "Somut bir talep veya gayrimenkul işlemi kapsamında kişisel verilerin Almanya ile Türkiye arasında aktarılması veya orada erişilebilir kılınması gerekebilir.",
          "Böyle bir aktarım yalnızca ilgili işlem için gerekli olduğu ölçüde ve geçerli veri koruma şartları sağlandığında gerçekleşir. Uluslararası aktarımlarda [GDPR (md. 44 vd.)](EURLEX) ve – uygulanabilir olduğu ölçüde – [KVKK md. 9](KVKKYD) gereklilikleri dikkate alınır.",
        ] },
      ] },
      { title: "10. Çerezler ve yerel depolama", body: [
        "Yalnızca teknik olarak zorunlu depolamalar kullanıyoruz. Bu web sitesinde analiz, pazarlama veya takip hizmetleri kullanılmamaktadır.",
        { ul: [
          "Zorunlu: Seçtiğiniz dil sürümünün tarayıcınızın yerel depolamasında saklanması.",
          "Zorunlu: Cloudflare, otomatik erişimleri (botları) tespit etmek ve web sitesini korumak amacıyla „__cf_bm“ çerezini (saklama süresi en fazla 30 dakika) yerleştirebilir. Bu çerez analiz veya pazarlama amacıyla kullanılmaz. Hukuki dayanak, GDPR md. 6/1-f ile bağlantılı olarak TDDDG § 25/2 no. 2'dir.",
          "Zorunlu: Barındırma sağlayıcısı, web sitesi sunulurken ziyaretçileri tutarlı biçimde aynı dağıtım/site sürümüne atamak amacıyla „__dpl“ çerezini (saklama süresi yaklaşık 7 gün) yerleştirebilir. Bu çerez analiz, pazarlama, takip veya kişiselleştirme amacıyla kullanılmaz.",
        ] },
      ] },
      { title: "11. Saklama süresi", body: [
        "Kişisel veriler, saklama amacı ortadan kalktığında silinir. Taleplerde bu, ilgili konu kesin olarak sonuçlandığında ve yasal saklama yükümlülükleri buna engel olmadığında söz konusudur.",
        "İletişim, satın alma ilgisi ve gayrimenkul talepleri için geçerli olan kural şudur: Kişisel veriler ve yüklenen dosyalar, başka bir gereklilik bulunmadığı sürece, talebin sonuçlanmasından veya son içeriksel iletişimden en geç 12 ay sonra silinir.",
        "Mevcut veya kurulması planlanan bir sözleşme ilişkisi, yasal saklama yükümlülükleri ya da hukuki taleplerin ileri sürülmesi, kullanılması veya savunulması nedeniyle daha uzun süre gerekli olan veriler bunun dışındadır. Bu veriler için ilgili gerekli veya yasal süreler geçerlidir.",
      ] },
      { title: "12. Veri güvenliği", body: [
        "Bu site üzerinden veri aktarımı şifreli olarak (HTTPS) gerçekleşir. Verilerinizi kayba, kötüye kullanıma ve yetkisiz erişime karşı korumak için uygun teknik ve idari tedbirleri alırız. Ancak internet üzerinden tamamen güvenli bir veri aktarımı garanti edilemez.",
      ] },
      { title: "13. İlgili kişilerin hakları", body: [
        "Sizinle ilgili kişisel veriler bakımından aşağıdaki haklara sahipsiniz:",
        { ul: [
          "[GDPR md. 15 – bilgi edinme](EURLEX)", "[GDPR md. 16 – düzeltme](EURLEX)", "[GDPR md. 17 – silme](EURLEX)",
          "[GDPR md. 18 – işlemenin kısıtlanması](EURLEX)", "[GDPR md. 20 – veri taşınabilirliği](EURLEX)", "[GDPR md. 21 – itiraz](EURLEX)",
        ] },
      ] },
      { title: "14. Onayın geri alınması", body: [
        "Verdiğiniz onayı istediğiniz zaman geleceğe etkili olarak geri alabilirsiniz (GDPR md. 7/3): {mail} adresine şekil şartı olmaksızın e-posta göndererek. Geri almaya kadar yapılan işlemenin hukuka uygunluğu etkilenmez.",
      ] },
      { title: "15. Şikâyet hakkı", body: [
        "Bir veri koruma denetim makamına şikâyette bulunma hakkına sahipsiniz. Bizim için yetkili makam [Kuzey Ren-Vestfalya Veri Koruma ve Bilgi Edinme Özgürlüğü Eyalet Komiserliği’dir (LDI NRW)](LDI).",
      ] },
      { title: "16. Veri koruma ile ilgili iletişim", body: [
        "Veri koruma ile ilgili sorularınız için bize şu adresten ulaşabilirsiniz:\nE-posta: {mail}\nTelefon: {tel}",
      ] },
      { title: "17. Bu bilgilendirmedeki değişiklikler", body: [
        "Hukuki durumun veya sitemizin ya da veri işleme faaliyetlerimizin değişmesi halinde bu bilgilendirmeyi güncelleme hakkımızı saklı tutarız. Burada yayımlanan güncel sürüm geçerlidir. Güncelleme: Eylül 2026.",
      ] },
    ],
  },
};
