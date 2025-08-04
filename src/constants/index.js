import Cebi from "../assets/project/Cebi.png";
import Task from "../assets/project/Task.png";
import goAPi from "../assets/project/goAPi.png";
import Coin from "../assets/project/5Coin.png"
import WeatherApp from "../assets/project/WeatherApp.png"
import BugunNasilim from "../assets/project/BugunNasilim.png"

export const HERO_CONTENT = `iOS geliştirme konusunda uzmanlaşmaya çalışırken, SwiftUI ile kullanıcı odaklı ve performansı yüksek mobil uygulamalar geliştiriyorum. Firebase, CoreData ve RESTful API’lerle entegre çalışan ölçeklenebilir yapılar kurarak, modern ihtiyaçlara yönelik yaratıcı çözümler sunuyorum. Hedefim; güçlü, sürdürülebilir uygulamalar geliştirerek kullanıcı deneyimini maksimum seviyeye taşımak.`;

export const ABOUT_TEXT = `Teknolojiye olan ilgim, küçük yaşlarda yazılım ile tanışmamla başladı. Lise yıllarında, First Robotics Competition (FRC) ile robotik kodlama alanına adım attım ve mühendislik becerilerimi geliştirme fırsatı buldum. Lise son sınıfta başladığım teknoloji şirketindeki stajım, profesyonel hayata dair bana önemli deneyimler kazandırdı ve yazılım geliştirme yolunda önemli adımlar attım.

Medipol Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum. Üniversite eğitimim sırasında teorik bilgileri pratiğe dökerek web ve yazılım geliştirme alanlarında kendimi geliştirdim. Frontend tarafında HTML, CSS, Bootstrap ve React ile kullanıcı dostu arayüzler tasarlarken, Backend tarafında .NET ve PostgreSQL ile projeler geliştirdim. FRC projelerinde Java ve Python kullanarak robotik yazılım ve görüntü işleme üzerine çalıştım.

Ancak, asıl tutkumun mobil uygulama geliştirme olduğunu keşfettim. Bu alanda SwiftUI kullanarak görev yönetimi (Task) ve hava durumu UI uygulamaları geliştirdim. Ayrıca, pazar yeri uygulaması gibi projeler üzerinde çalışıyorum. Bu projede kullanıcıların kayıt ve giriş işlemlerini gerçekleştirebileceği, ürünlerin listelendiği ve sepete eklenebileceği dinamik bir yapı üzerinde çalışıyorum.`;

export const EXPERIENCES = [
  {
    year: "Ağu 2024 - Eyl 2024",
    role: "Front-End Developer (Stajyer)",
    company: " - TTProsoft",
    description: `HTML, CSS ve Bootstrap teknolojilerini kullanarak sıfırdan duyarlı ve modern bir web sitesi tasarladım.`,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    year: "Şub 2024 - Nis 2024",
    role: "Jr. Full Stack Web Developer",
    company: " - Kontrat",
    description: `Web sitesinin kullanıcı arayüzünü JavaScript kullanarak dinamikleştirdim ve MVC (Model-View-Controller) modelini kullanarak .NET ile backend işlemlerini gerçekleştirdim. Veritabanı işlemleri için PostgreSQL kullandım.`,
    technologies: ["HTML", "CSS", ".NET", "PostgreSql", "C#"],
  },
  {
    year: "Haz 2021 - Kas 2023",
    role: "Jr. Developer",
    company: " - Tırport",
    description: `Tırport V2 sürümünde frontend geliştirme sürecinde yer alarak React ve Material-UI (MUI) ile ekran tasarımlarını oluşturdum. Aynı zamanda şirketin IT süreçleriyle ilgilenerek güvenlik önlemlerini güçlendirmek amacıyla AWS ile entegre bir VPN kurulumu gerçekleştirdim.`,
    technologies: ["React.js", "Python", "AWS"],
  },
  {
    year: "Eyl 2020 - Haz 2021",
    role: "Stajyer",
    company: " - AB Plus Bilisim Teknolojileri",
    description: `Adobe XD ile uygulama ekran tasarımları ve web site tasarımları oluşturdum. Aynı zamanda robot oyuncak projesi için mekanik ve elektronik alanlarında da çalışma yaptım.`,
    technologies: ["Adobe XD", "Python", "Figma", "PCB Design"],
  },
];

export const PROJECTS = [
  {
    title: "FRC - 8070 Cybergriffins",
    image: Cebi,
    description: "FRC (First Robotics Competition) kapsamında, 4 haftalık sürede bir robot tasarlayıp geliştirdiğimiz projede yazılım takımındaydım. Java ile robot kontrol sistemini kodladım, Python kullanarak görüntü işleme üzerine çalıştım. Ayrıca CAD yazılımlarıyla teknik çizimler hazırlayıp mekanik/mühendislik ekibiyle birlikte montaj ve devre entegrasyon süreçlerine aktif olarak katıldım.",
    technologies: ["Java", "Python", "OpenCV", "CAD", "SolidWorks", "Robotics"],
    link: "https://www.instagram.com/cybergriffins/"
  },
  {
    title: "Task Management App",
    image: Task,
    description: "SwiftUI kullanarak geliştirdiğim görev yönetim uygulaması, kullanıcıların görevlerini oluşturup düzenleyebildiği, modern arayüzlü ve kullanıcı dostu bir mobil uygulamadır. Uygulama, veri yönetimi için local state yapıları kullanır ve kullanıcı deneyimi odaklı tasarlanmıştır.",
    technologies: ["Swift", "SwiftUI", "Xcode"],
    link: "https://github.com/burakalemun/Task",
  },
  {
    title: "SuperLig- API",
    image: goAPi,
    description: "Go programlama diliyle geliştirdiğim bu proje, Süper Lig'e ait maç bilgilerini ve istatistikleri web scraping yöntemiyle çekerek bir API formatında sunar. Veri çekimi, parsing ve JSON yapılandırması gibi işlemleri içeren back-end odaklı bir projedir.",
    technologies: ["Go", "Web Scraping", "JSON", "HTTP Requests"],
    link: "https://github.com/burakalemun/SuperLig-API",
  },
  {
    title: "WeatherApp",
    image: WeatherApp,
    description: "Swift ve SwiftUI kullanarak geliştirdiğim bu hava durumu uygulaması, modern ve kullanıcı dostu bir arayüz sunar. Uygulama tamamen statik verilerle çalışmakta olup, dinamik bileşenler (HomeView, ForecastView, ForecastCard, WeatherWidget vb.) ile modüler bir yapı kurulmuştur. Kullanıcı etkileşimini artırmak için BottomSheet entegrasyonu yapılmıştır. Gerçek zamanlı API bağlantısı olmadan, hava durumu deneyimini simüle eden bir demo uygulama olarak tasarlanmıştır.",
    technologies: ["Swift", "SwiftUI", "BottomSheet", "MVVM"],
    link: "https://github.com/burakalemun/WeatherApp",
  },
  {
    title: "5Coin",
    image: Coin,
    description: "SwiftUI ve Combine kullanarak geliştirdiğim bu uygulama, kullanıcıların favori kripto paralarını takip etmelerini ve coin bazlı alım/satım emirleri eklemelerini sağlar. CoinGecko ve DexScreener API’lerinden gelen verilerle anlık fiyat güncellemeleri sunar. Maksimum 5 coin seçimiyle sınırlı sade bir yapı, kullanıcı deneyimini optimize ederken, filtreleme, arama ve sipariş yönetimi gibi özelliklerle zenginleştirilmiştir. Seçilen coin'ler AppStorage ve UserDefaults ile lokal olarak saklanır.",
    technologies: ["SwiftUI", "Combine", "CoinGecko API", "DexScreener API", "AppStorage", "MVVM"],
    link: "https://github.com/burakalemun/5Coin",
  },
  {
    title: "BugunNasilim",
    image: BugunNasilim,
    description: "SwiftUI ile geliştirilen bu günlük ruh hali takip uygulaması, kullanıcıların duygusal durumlarını emoji temelli bir sistemle kaydetmelerini sağlar. SwiftData ile lokal veri saklama, Swift Charts ile haftalık analiz, modern ve sade bir kullanıcı arayüzüyle desteklenmiştir. Gelişmiş özellikler (bildirimler, Supabase Auth ile giriş sistemi, ayarlar sayfası) yapım aşamasındadır.",
    technologies: ["SwiftUI", "SwiftData", "Swift Charts", "MVVM", "AppStorage", "UserNotifications (planlandı)", "Supabase Auth (planlandı)"],
    link: "",
  }
];

export const CONTACT = {
  address: "İstanbul / Ataşehir",
  phoneNo: "",
  email: "karateke.burak35@gmail.com",
};
