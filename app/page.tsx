import styles from "./page.module.css";
import ContactForm from "./ContactForm";
import { sanityFetch } from "@/sanity/lib/live";
import { SEITE_QUERY, NEUIGKEITEN_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Bild = { asset: { _ref: string } };
type Bereich = { bild?: Bild; text?: string };
type OeffnungsZeit = { tag: string; zeiten: string };
type Seite = {
  heldBild?: Bild;
  baeckerei?: Bereich;
  konditorei?: Bereich;
  cafe?: Bereich;
  familie?: { text?: string };
  oeffnungszeiten?: OeffnungsZeit[];
  telefon?: string;
  adresse?: string;
};
type Neuigkeit = {
  _id: string;
  titel: string;
  beschreibung?: string;
  bild?: Bild;
  datum?: string;
};

const STATIC_HOURS: OeffnungsZeit[] = [
  { tag: "Mo-Fr", zeiten: "06:00-18:00" },
  { tag: "Sa", zeiten: "07:00-13:00" },
  { tag: "So", zeiten: "08:00-17:00" },
];

export default async function Page() {
  const { data: seiteRaw } = await sanityFetch({ query: SEITE_QUERY });
  const seite = seiteRaw as Seite | null;
  const { data: neuigkeitenRaw } = await sanityFetch({ query: NEUIGKEITEN_QUERY });
  const neuigkeiten = neuigkeitenRaw as Neuigkeit[];

  const hours =
    seite?.oeffnungszeiten?.length ? seite.oeffnungszeiten : STATIC_HOURS;

  const heroSrc = seite?.heldBild
    ? urlFor(seite.heldBild).width(1600).url()
    : "/portrait.jpg";

  const baeckereiSrc = seite?.baeckerei?.bild
    ? urlFor(seite.baeckerei.bild).width(900).url()
    : "/WA0019.jpg";

  const konditSrc = seite?.konditorei?.bild
    ? urlFor(seite.konditorei.bild).width(900).url()
    : "/Patisserie_01.jpg";

  const cafeSrc = seite?.cafe?.bild
    ? urlFor(seite.cafe.bild).width(900).url()
    : "/Birchermuesli_01.jpg";

  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <a href="#hero" className={styles.navLogo}>
          <span className={styles.navLogoText}>Bäckerei Meyer</span>
        </a>
        <a href="tel:+41419171074" className={styles.navPhone}>
          041 917 10 74
        </a>
      </nav>

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <img
          src={heroSrc}
          alt="Frisch gebackenes Brot bei der Bäckerei Meyer Hitzkirch"
          className={styles.heroImg}
        />
        <div className={styles.heroVeil} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Hitzkirch, seit 1874</span>
          <h1 className={styles.heroTitle}>Bäckerei Meyer</h1>
          <p className={styles.heroSub}>
            Brot Essen ist keine Kunst, aber Brot backen.
          </p>
        </div>
      </section>

      {/* ANGEBOT */}
      <section className={styles.angebot}>
        <div className={styles.angebotGrid}>
          <div className={styles.angebotItem}>
            <span className={styles.angebotNum}>01</span>
            <h2 className={styles.angebotName}>Bäckerei</h2>
            <p className={styles.angebotAdjectives}>
              Gesund - knusprig - duftend - warm - heimelig
            </p>
          </div>
          <div className={styles.angebotItem}>
            <span className={styles.angebotNum}>02</span>
            <h2 className={styles.angebotName}>Konditorei</h2>
            <p className={styles.angebotAdjectives}>
              Verführerisch - fröhlich - verspielt - wunderbar - glücklich
            </p>
          </div>
          <div className={styles.angebotItem}>
            <span className={styles.angebotNum}>03</span>
            <h2 className={styles.angebotName}>Café</h2>
            <p className={styles.angebotAdjectives}>
              Wohlig - verlockend - warm - fein - zufrieden
            </p>
          </div>
        </div>
      </section>

      {/* BÄCKEREI */}
      <section id="baeckerei" className={styles.baeckerei}>
        <div className={styles.backereiImg}>
          <img
            src={baeckereiSrc}
            alt="Bäcker zieht frische Brote aus dem Holzbackofen"
          />
        </div>
        <div className={styles.backereiContent}>
          <span className={styles.sectionLabel}>Handwerk</span>
          <h2 className={styles.sectionTitle}>
            Vom Holzbackofen direkt zu Ihnen
          </h2>
          <p className={styles.backereiText}>
            {seite?.baeckerei?.text ??
              "Täglich backen wir für Sie eine duftende, abwechslungsreiche Vielfalt. Weizen und Dinkel, Sauerteig und Butterhefe - jeder Laib mit Hand geformt, jeden Morgen frisch aus dem Holzbackofen."}
          </p>
          <ul className={styles.breadList}>
            <li>Bergbauernbrot</li>
            <li>Butterzopf</li>
            <li>Martins Sauerteigbrot</li>
            <li>Toskanabrot mit Tomaten und Oliven</li>
            <li>Partybrote (rund, lang, herzförmig)</li>
            <li>Gipfeli und Butterstengel</li>
          </ul>
        </div>
      </section>

      {/* HOLZBACKOFEN QUOTE */}
      <section className={styles.holzquote}>
        <div className={styles.holzquoteInner}>
          <blockquote className={styles.holzquoteText}>
            wenn noch alle schlafen, zieht der Duft des Holzofens durchs ganze
            Dorf
          </blockquote>
          <p className={styles.holzquoteMark}>Holzbackofen, Hitzkirch</p>
        </div>
      </section>

      {/* KONDITOREI */}
      <section id="konditorei" className={styles.konditorei}>
        <div className={styles.konditContent}>
          <span className={styles.sectionLabel}>Konditorei</span>
          <h2 className={styles.sectionTitle}>Ein Gedicht auf der Zunge</h2>
          <p className={styles.konditText}>
            {seite?.konditorei?.text ??
              "Verführerisch - fröhlich - verspielt - wunderbar - glücklich. Unsere Konditorei macht aus besten Zutaten Momente, die lange in Erinnerung bleiben."}
          </p>
          <div className={styles.konditHighlights}>
            <span className={styles.konditItem}>Torten (ganz oder stückweise)</span>
            <span className={styles.konditItem}>Patisserie</span>
            <span className={styles.konditItem}>Teestückli</span>
            <span className={styles.konditItem}>Hochzeitstorten</span>
            <span className={styles.konditItem}>Dessertbuffet</span>
            <span className={styles.konditItem}>Canapés</span>
          </div>
        </div>
        <div className={styles.konditImg}>
          <img src={konditSrc} alt="Patisserie der Konditorei Meyer" />
        </div>
      </section>

      {/* CAFÉ */}
      <section id="cafe" className={styles.cafe}>
        <div className={styles.cafeImg}>
          <img
            src={cafeSrc}
            alt="Frühstück im Café der Bäckerei Meyer"
          />
        </div>
        <div className={styles.cafeContent}>
          <span className={styles.sectionLabel}>Café</span>
          <h2 className={styles.sectionTitle}>Frühstück ab 06:00 Uhr</h2>
          <p className={styles.cafeText}>
            {seite?.cafe?.text ??
              "Wohlig - verlockend - warm - fein - zufrieden. Von früh morgens bis abends frische Küche direkt aus der Backstube."}
          </p>
          <div className={styles.cafeHighlight}>
            <p className={styles.cafeHighlightTitle}>Grosses Bäckerzmorgen</p>
            <p className={styles.cafeHighlightText}>
              Reichhaltiges Buffet für die Grossen und Kleinen. Jeden Sonntag
              08:00 bis 12:00. Reservation empfohlen: 041 917 10 74.
            </p>
          </div>
        </div>
      </section>

      {/* AKTUELLES */}
      {neuigkeiten && neuigkeiten.length > 0 && (
        <section id="aktuelles" className={styles.aktuelles}>
          <div className={styles.aktuellesHeader}>
            <span className={styles.sectionLabel}>Aktuell</span>
            <h2 className={styles.sectionTitle}>Neu aus der Backstube</h2>
          </div>
          <div className={styles.aktuellesGrid}>
            {neuigkeiten.map((n) => (
              <article key={n._id} className={styles.neuigkeitCard}>
                <div className={styles.neuigkeitCardImg}>
                  {n.bild ? (
                    <img
                      src={urlFor(n.bild).width(800).height(520).url()}
                      alt={n.titel}
                    />
                  ) : (
                    <img src="/WA0007.jpg" alt={n.titel} />
                  )}
                </div>
                <div className={styles.neuigkeitCardBody}>
                  {n.datum && (
                    <span className={styles.neuigkeitDate}>
                      {new Date(n.datum).toLocaleDateString("de-CH", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  )}
                  <h3 className={styles.neuigkeitTitle}>{n.titel}</h3>
                  {n.beschreibung && (
                    <p className={styles.neuigkeitText}>{n.beschreibung}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAMILIE */}
      <section id="geschichte" className={styles.familie}>
        <div className={styles.familieInner}>
          <span className={styles.familieLabelLight}>Seit 1874</span>
          <h2 className={styles.familieTitle}>Familientradition in Hitzkirch</h2>
          <p className={styles.familieText}>
            {seite?.familie?.text ??
              "Liebe liegt nicht einfach herum wie ein Stein; wie Brot muss sie gemacht werden, immer wieder und immer frisch. Xaver Meyer gründete die Bäckerei 1874. Gerold und Marie-Theres Meyer führten sie 40 Jahre weiter. Seit 2006 sind Urban und Sandra Meyer mit ihren Söhnen Andrin, Matteo und Lino die nächste Generation."}
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className={styles.kontakt}>
        <div className={styles.kontaktHours}>
          <span className={styles.sectionLabel}>Öffnungszeiten und Lage</span>
          <h2 className={styles.sectionTitle}>Bahnhofstrasse 7, Hitzkirch</h2>
          <table className={styles.hoursTable}>
            <tbody>
              {hours.map((h) => (
                <tr key={h.tag}>
                  <td className={styles.hoursDay}>{h.tag}</td>
                  <td className={styles.hoursTime}>{h.zeiten}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <span className={styles.contactDetailLabel}>Telefon</span>
              <a href="tel:+41419171074">041 917 10 74</a>
            </div>
            <div className={styles.contactDetail}>
              <span className={styles.contactDetailLabel}>Adresse</span>
              <span>Bahnhofstrasse 7, 6285 Hitzkirch</span>
            </div>
          </div>
        </div>
        <div className={styles.kontaktForm}>
          <span className={styles.sectionLabel}>Kontakt</span>
          <h2 className={styles.sectionTitle}>Schreiben Sie uns</h2>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p className={styles.footerDisclaimer}>
          Demo-Website, kein echtes Angebot. Alle Inhalte und Fotos:{" "}
          <a
            href="https://www.baeckerei-meyer.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            baeckerei-meyer.ch
          </a>
          .
        </p>
        <p className={styles.footerContact}>
          <a href="mailto:deine-app@proton.me">deine-app@proton.me</a>
        </p>
      </footer>
    </>
  );
}
