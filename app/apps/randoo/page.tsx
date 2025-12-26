import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function RandooPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Apps
            </Link>
            <h1 className="text-4xl font-light">Randoo</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Gizlilik Politikası ve Güvenlik Belgeleri</p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Gizlilik Politikası</h2>
              <p className="text-sm text-muted-foreground">Son Güncelleme: 26 Aralık 2024</p>

              <div className="prose prose-invert max-w-none space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">1. Giriş</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Randoo ("biz", "bizim" veya "uygulama"), kullanıcılarımızın gizliliğini korumayı taahhüt eder. Bu
                    Gizlilik Politikası, Randoo mobil uygulamasını kullanırken kişisel bilgilerinizin nasıl
                    toplandığını, kullanıldığını ve korunduğunu açıklar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">2. Topladığımız Bilgiler</h3>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">2.1 Hesap Bilgileri</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      <strong>İşletme Kullanıcıları:</strong> Ad, e-posta adresi, telefon numarası, işletme adı, işletme
                      adresi, kategori
                    </li>
                    <li>
                      <strong>Müşteri Kullanıcıları:</strong> Ad, soyad, e-posta adresi, telefon numarası, doğum tarihi
                      (isteğe bağlı)
                    </li>
                    <li>
                      <strong>Personel Kullanıcıları:</strong> Ad, e-posta adresi, telefon numarası, pozisyon
                    </li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">2.2 Randevu Bilgileri</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Randevu tarihi ve saati</li>
                    <li>Hizmet detayları</li>
                    <li>Randevu notları</li>
                    <li>Randevu durumu (onaylandı, tamamlandı, iptal edildi)</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">2.3 Konum Bilgileri</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>İşletme konumu (işletme kayıt sırasında)</li>
                    <li>Kullanıcı konumu (en yakın işletmeleri göstermek için - isteğe bağlı)</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">2.4 Kullanım Verileri</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Uygulama kullanım istatistikleri</li>
                    <li>Cihaz bilgileri (model, işletim sistemi)</li>
                    <li>Hata raporları ve performans verileri</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">2.5 Ödeme Bilgileri</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Premium abonelik işlemleri Google Play Billing üzerinden gerçekleştirilir</li>
                    <li>Kredi kartı bilgileriniz bizim tarafımızdan saklanmaz</li>
                    <li>Sadece abonelik durumu ve işlem geçmişi kaydedilir</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">3. Bilgilerin Kullanımı</h3>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">3.1 Hizmet Sağlama</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Randevu oluşturma ve yönetimi</li>
                    <li>İşletme ve müşteri eşleştirmesi</li>
                    <li>Bildirimler ve hatırlatmalar gönderme</li>
                    <li>Harita üzerinde işletme gösterimi</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">3.2 İyileştirme ve Analiz</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Uygulama performansını iyileştirme</li>
                    <li>Kullanıcı deneyimini geliştirme</li>
                    <li>Hata ayıklama ve sorun giderme</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">3.3 İletişim</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Hesap güvenliği bildirimleri</li>
                    <li>Önemli uygulama güncellemeleri</li>
                    <li>Müşteri desteği</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">3.4 Pazarlama (İsteğe Bağlı)</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Premium özellikler hakkında bilgilendirme</li>
                    <li>Özel kampanyalar ve indirimler</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">4. Bilgi Paylaşımı</h3>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">4.1 Üçüncü Taraf Hizmetler</h4>
                  <p className="text-muted-foreground mb-3">Aşağıdaki üçüncü taraf hizmetleri kullanıyoruz:</p>

                  <div className="space-y-3">
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Supabase (Veritabanı ve Kimlik Doğrulama)</h5>
                      <p className="text-sm text-muted-foreground">
                        Kullanıcı hesapları ve randevu verilerini saklar -{" "}
                        <a
                          href="https://supabase.com/privacy"
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Supabase Gizlilik Politikası
                        </a>
                      </p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Google Maps API</h5>
                      <p className="text-sm text-muted-foreground">
                        İşletme konumlarını gösterir -{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Gizlilik Politikası
                        </a>
                      </p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Google Play Billing</h5>
                      <p className="text-sm text-muted-foreground">
                        Premium abonelik ödemeleri -{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Play Gizlilik Politikası
                        </a>
                      </p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">RevenueCat</h5>
                      <p className="text-sm text-muted-foreground">
                        Abonelik yönetimi -{" "}
                        <a
                          href="https://www.revenuecat.com/privacy"
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          RevenueCat Gizlilik Politikası
                        </a>
                      </p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Google AdMob (Ücretsiz Kullanıcılar İçin)</h5>
                      <p className="text-sm text-muted-foreground">
                        Reklam gösterimi -{" "}
                        <a
                          href="https://support.google.com/admob/answer/6128543"
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google AdMob Gizlilik Politikası
                        </a>
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">4.2 Yasal Gereklilikler</h4>
                  <p className="text-muted-foreground mb-2">Bilgilerinizi şu durumlarda paylaşabiliriz:</p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Yasal yükümlülükler gereği</li>
                    <li>Mahkeme kararı veya resmi talep</li>
                    <li>Kullanıcı güvenliğini korumak için</li>
                  </ul>

                  <h4 className="text-lg font-medium text-foreground mb-2 mt-4">4.3 İş Devri</h4>
                  <p className="text-muted-foreground">
                    Şirket birleşmesi, satın alma veya varlık satışı durumunda, kullanıcı bilgileri devredilen varlıklar
                    arasında olabilir.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">5. Veri Güvenliği</h3>
                  <p className="text-muted-foreground mb-3">Bilgilerinizi korumak için şu önlemleri alıyoruz:</p>

                  <div className="grid gap-3">
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Şifreleme</h5>
                      <p className="text-sm text-muted-foreground">Tüm veriler SSL/TLS ile şifrelenir</p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Güvenli Kimlik Doğrulama</h5>
                      <p className="text-sm text-muted-foreground">Şifreler hash'lenerek saklanır</p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Erişim Kontrolü</h5>
                      <p className="text-sm text-muted-foreground">Sadece yetkili personel verilere erişebilir</p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Düzenli Yedekleme</h5>
                      <p className="text-sm text-muted-foreground">Veri kaybını önlemek için düzenli yedekleme</p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Güvenlik Testleri</h5>
                      <p className="text-sm text-muted-foreground">Düzenli güvenlik denetimleri</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">6. Kullanıcı Hakları</h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">6.1 Erişim Hakkı</h4>
                      <p className="text-muted-foreground">Kişisel verilerinize erişim talep edebilirsiniz.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">6.2 Düzeltme Hakkı</h4>
                      <p className="text-muted-foreground">Yanlış veya eksik bilgilerinizi düzeltebilirsiniz.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">6.3 Silme Hakkı</h4>
                      <p className="text-muted-foreground mb-2">
                        Hesabınızı ve tüm verilerinizi silme talebinde bulunabilirsiniz:
                      </p>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        <li>Uygulama ayarlarından "Hesabı Sil" seçeneğini kullanın</li>
                        <li>Veya support@randoo.app adresine e-posta gönderin</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">6.4 Veri Taşınabilirliği</h4>
                      <p className="text-muted-foreground">Verilerinizin bir kopyasını talep edebilirsiniz.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">6.5 İtiraz Hakkı</h4>
                      <p className="text-muted-foreground">Veri işleme faaliyetlerine itiraz edebilirsiniz.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">7. Çocukların Gizliliği</h3>
                  <p className="text-muted-foreground">
                    Randoo, 18 yaşın altındaki kullanıcılar için tasarlanmamıştır. Bilerek 18 yaşın altındaki kişilerden
                    kişisel bilgi toplamıyoruz.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">8. Çerezler ve İzleme Teknolojileri</h3>
                  <p className="text-muted-foreground mb-2">Uygulama şunları kullanır:</p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      <strong>Oturum Çerezleri:</strong> Giriş durumunu korumak için
                    </li>
                    <li>
                      <strong>Analitik Çerezler:</strong> Kullanım istatistikleri için
                    </li>
                    <li>
                      <strong>Reklam Çerezleri:</strong> Kişiselleştirilmiş reklamlar için (ücretsiz kullanıcılar)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">9. Veri Saklama Süresi</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      <strong>Aktif Hesaplar:</strong> Hesap silinene kadar
                    </li>
                    <li>
                      <strong>Silinen Hesaplar:</strong> 30 gün içinde tamamen silinir
                    </li>
                    <li>
                      <strong>Yedekleme Verileri:</strong> 90 gün içinde silinir
                    </li>
                    <li>
                      <strong>Yasal Gereklilikler:</strong> Yasal saklama süreleri uygulanır
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">10. Uluslararası Veri Aktarımı</h3>
                  <p className="text-muted-foreground">
                    Verileriniz Avrupa Birliği sunucularında (Supabase - Frankfurt) saklanır. Veri aktarımları GDPR ve
                    KVKK uyumlu olarak gerçekleştirilir.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">11. KVKK Uyumu</h3>
                  <p className="text-muted-foreground mb-3">
                    Randoo, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) uygun olarak faaliyet gösterir.
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Veri Sorumlusu</h5>
                      <p className="text-sm text-muted-foreground">Randoo - İstanbul, Türkiye</p>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Veri İşleme Amaçları</h5>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Sözleşmenin ifası</li>
                        <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                        <li>Meşru menfaatler</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">Veri Sahibi Hakları (KVKK Madde 11)</h5>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>İşlenmişse bilgi talep etme</li>
                        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                        <li>Silinmesini veya yok edilmesini isteme</li>
                        <li>İşlemlerin üçüncü kişilere bildirilmesini isteme</li>
                        <li>Otomatik sistemler vasıtasıyla analiz edilmesine itiraz etme</li>
                        <li>Kanuna aykırı işleme sebebiyle zararın giderilmesini talep etme</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">12. GDPR Uyumu (AB Kullanıcıları İçin)</h3>
                  <p className="text-muted-foreground mb-2">AB vatandaşları için ek haklar:</p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Unutulma hakkı</li>
                    <li>Veri taşınabilirliği hakkı</li>
                    <li>Otomatik karar vermeye itiraz hakkı</li>
                    <li>Denetim makamına şikayet hakkı</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">13. Değişiklikler</h3>
                  <p className="text-muted-foreground mb-2">
                    Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Uygulama içinde bildirim göndeririz</li>
                    <li>E-posta ile bilgilendiririz</li>
                    <li>Son güncelleme tarihi değiştirilir</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">14. Rıza</h3>
                  <p className="text-muted-foreground">
                    Randoo'yu kullanarak bu Gizlilik Politikası'nı kabul etmiş olursunuz.
                  </p>
                </div>

                <div className="p-6 bg-card border border-accent/30 rounded-lg mt-8">
                  <h3 className="text-xl font-medium text-foreground mb-3">İletişim</h3>
                  <p className="text-muted-foreground mb-3">Gizlilik ile ilgili sorularınız için:</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>E-posta:</strong>{" "}
                      <a href="mailto:support@randoo.app" className="text-accent hover:underline">
                        support@randoo.app
                      </a>
                    </p>
                    <p>
                      <strong>Adres:</strong> İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground pt-6 border-t border-border">
                  <p>
                    <strong>Son Güncelleme:</strong> 26 Aralık 2024
                  </p>
                  <p>
                    <strong>Versiyon:</strong> 1.0.0
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
