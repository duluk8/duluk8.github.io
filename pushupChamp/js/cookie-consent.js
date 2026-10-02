/*!
 * Cookie & privacy consent banner for the PushUp Champ website.
 * Implements a Google Consent Mode v2 scaffold that defaults to "denied".
 * No analytics/advertising tag is loaded on this site — the banner only
 * records the visitor's choice so the setup stays privacy-safe and is
 * future-proof if tracking is ever added later.
 */
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    if (typeof window.gtag !== "function") {
        window.gtag = gtag;
    }

    var storedConsent = localStorage.getItem("cookie-consent");
    var state = storedConsent === "granted" ? "granted" : "denied";
    window.gtag("consent", "default", {
        "ad_storage": state,
        "ad_user_data": state,
        "ad_personalization": state,
        "analytics_storage": state
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Visitor already made a choice – do not show the banner again.
        if (localStorage.getItem("cookie-consent")) {
            return;
        }

        var banner = document.createElement("div");
        banner.id = "cookie-consent-banner";
        banner.className = "position-fixed bottom-0 start-0 w-100 bg-dark text-white p-4 shadow-lg";
        banner.style.zIndex = "99999";
        banner.style.borderTop = "3px solid #2937f0";

        // Banner texts follow the site language (same setting as js/scripts.js, default German).
        var texts = {
            "en": {
                title: "Cookie &amp; Privacy Preferences",
                text: "We use cookies to remember your preferences and keep this site working smoothly. By clicking &quot;Accept All&quot; you agree to our use of cookies in line with the Swiss nFADP and international privacy standards. Review the details in our",
                link: "Privacy Policy", reject: "Reject", accept: "Accept All"
            },
            "de": {
                title: "Cookies &amp; Datenschutz",
                text: "Wir verwenden Cookies, um deine Einstellungen zu speichern und die Seite reibungslos funktionieren zu lassen. Mit &bdquo;Alle akzeptieren&ldquo; stimmst du der Verwendung von Cookies gem&auml;ss dem Schweizer Datenschutzgesetz (DSG) und internationalen Datenschutzstandards zu. Details findest du in unserer",
                link: "Datenschutzerkl&auml;rung", reject: "Ablehnen", accept: "Alle akzeptieren"
            },
            "ch-be": {
                title: "Cookies &amp; Dateschutz",
                text: "Mir bruche Cookies, zum dini Iistellige z spichere und dass d Site guet louft. Mit &bdquo;Alli akzeptiere&ldquo; bisch iiverstande, dass mir Cookies gem&auml;ss em Schwiizer Dateschutzgsetz (DSG) und internationale Dateschutzstandards bruche. Details fingsch i &uuml;sere",
                link: "Dateschutzerkl&auml;rig", reject: "Ablehne", accept: "Alli akzeptiere"
            },
            "fr": {
                title: "Cookies et confidentialit&eacute;",
                text: "Nous utilisons des cookies pour enregistrer vos pr&eacute;f&eacute;rences et assurer le bon fonctionnement du site. En cliquant sur &laquo;&nbsp;Tout accepter&nbsp;&raquo;, vous acceptez l'utilisation de cookies conform&eacute;ment &agrave; la loi suisse sur la protection des donn&eacute;es (nLPD) et aux normes internationales. Plus de d&eacute;tails dans notre",
                link: "Politique de confidentialit&eacute;", reject: "Refuser", accept: "Tout accepter"
            },
            "it": {
                title: "Cookie e privacy",
                text: "Utilizziamo i cookie per salvare le tue preferenze e far funzionare il sito senza problemi. Cliccando su &laquo;Accetta tutti&raquo; acconsenti all'uso dei cookie secondo la legge svizzera sulla protezione dei dati (nLPD) e gli standard internazionali. Maggiori dettagli nella nostra",
                link: "Informativa sulla privacy", reject: "Rifiuta", accept: "Accetta tutti"
            }
        };

        function render(lang) {
            var t = texts[lang] || texts["de"];
            banner.innerHTML = [
                '<div class="container">',
                '  <div class="row align-items-center justify-content-between flex-column flex-md-row">',
                '    <div class="col-md-8 mb-3 mb-md-0 text-start">',
                '      <h5 class="mb-1 text-white"><i class="bi-shield-lock-fill me-2"></i>' + t.title + '</h5>',
                '      <p class="small m-0 text-white-50">',
                '        ' + t.text,
                '        <a href="privacy.html" class="link-light fw-bold">' + t.link + '</a>.',
                '      </p>',
                '    </div>',
                '    <div class="col-md-4 text-md-end text-start">',
                '      <button id="btn-reject-cookies" type="button" class="btn btn-outline-light btn-sm me-2 px-3">' + t.reject + '</button>',
                '      <button id="btn-accept-cookies" type="button" class="btn btn-primary btn-sm px-4 fw-bold">' + t.accept + '</button>',
                '    </div>',
                '  </div>',
                '</div>'
            ].join("");

            document.getElementById("btn-accept-cookies").addEventListener("click", function () {
                localStorage.setItem("cookie-consent", "granted");
                window.gtag("consent", "update", {
                    "ad_storage": "granted",
                    "ad_user_data": "granted",
                    "ad_personalization": "granted",
                    "analytics_storage": "granted"
                });
                banner.remove();
            });

            document.getElementById("btn-reject-cookies").addEventListener("click", function () {
                localStorage.setItem("cookie-consent", "denied");
                banner.remove();
            });
        }

        document.body.appendChild(banner);
        render(localStorage.getItem("preferredLanguage") || "de");

        // Re-render when the visitor switches the site language while the banner is open.
        if (typeof window.switchLanguage === "function") {
            var switchSiteLanguage = window.switchLanguage;
            window.switchLanguage = function (lang) {
                switchSiteLanguage(lang);
                if (document.getElementById("cookie-consent-banner")) {
                    render(lang);
                }
            };
        }
    });
})();
