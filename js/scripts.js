/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/**
 * Native Google Consent Mode v2 Cookie Banner for IT-Duluk
 * Works seamlessly with Bootstrap 5
 */
document.addEventListener("DOMContentLoaded", function () {
    // If the user hasn't made a choice yet, display the banner
    if (!localStorage.getItem("cookie-consent")) {
        
        // Create banner outer structure
        var banner = document.createElement("div");
        banner.id = "cookie-consent-banner";
        banner.className = "position-fixed bottom-0 start-0 w-100 bg-dark text-white p-4 shadow-lg animate-fade-in";
        banner.style.zIndex = "99999";
        banner.style.borderTop = "3px solid #0d6efd"; // Sleek Bootstrap blue accent accent line

        // Build responsive layout matching your site aesthetics
        banner.innerHTML = `
            <div class="container">
                <div class="row align-items-center justify-content-between flex-column flex-md-row">
                    <div class="col-md-8 mb-3 mb-md-0 text-start">
                        <h5 class="mb-1 text-white"><i class="bi bi-shield-lock-fill me-2 text-primary"></i>Cookie & Privacy Preferences</h5>
                        <p class="small m-0 text-muted">
                            We use cookies and Google Analytics to optimize your learning experience and analyze platform traffic. 
                            By clicking "Accept All", you agree to our data processing choices in line with the Swiss nFADP and international privacy standards. 
                            Review complete details in our <a href="https://duluk.ch/privacy.html" class="link-primary text-decoration-none fw-bold">Privacy Policy</a>.
                        </p>
                    </div>
                    <div class="col-md-4 text-md-end text-start">
                        <button id="btn-reject-cookies" class="btn btn-outline-light btn-sm me-2 px-3">Reject</button>
                        <button id="btn-accept-cookies" class="btn btn-primary btn-sm px-4 fw-bold">Accept All</button>
                    </div>
                </div>
            </div>
        `;

        // Append directly to the document body overlay
        document.body.appendChild(banner);

        // Handle "Accept All" Action
        document.getElementById("btn-accept-cookies").addEventListener("click", function () {
            localStorage.setItem("cookie-consent", "granted");
            
            // Instantly tell Google Analytics it is allowed to use cookies and telemetry data
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
            
            // Cleanly remove the element from view
            banner.remove();
        });

        // Handle "Reject" Action
        document.getElementById("btn-reject-cookies").addEventListener("click", function () {
            localStorage.setItem("cookie-consent", "denied");
            
            // The default denied status remains strictly locked. 
            // Google tags will operate using "cookieless pings" without recording personal tracking signatures.
            banner.remove();
        });
    }
});
