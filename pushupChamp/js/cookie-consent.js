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

        banner.innerHTML = [
            '<div class="container">',
            '  <div class="row align-items-center justify-content-between flex-column flex-md-row">',
            '    <div class="col-md-8 mb-3 mb-md-0 text-start">',
            '      <h5 class="mb-1 text-white"><i class="bi-shield-lock-fill me-2"></i>Cookie &amp; Privacy Preferences</h5>',
            '      <p class="small m-0 text-white-50">',
            '        We use cookies to remember your preferences and keep this site working smoothly.',
            '        By clicking &quot;Accept All&quot; you agree to our use of cookies in line with the Swiss nFADP',
            '        and international privacy standards. Review the details in our',
            '        <a href="privacy.html" class="link-light fw-bold">Privacy Policy</a>.',
            '      </p>',
            '    </div>',
            '    <div class="col-md-4 text-md-end text-start">',
            '      <button id="btn-reject-cookies" type="button" class="btn btn-outline-light btn-sm me-2 px-3">Reject</button>',
            '      <button id="btn-accept-cookies" type="button" class="btn btn-primary btn-sm px-4 fw-bold">Accept All</button>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join("");

        document.body.appendChild(banner);

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
    });
})();
