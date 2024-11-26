/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

// Language translations
const translations = {
    'en': {
        'menu': 'Menu',
        'features': 'Features',
        'deleteAccount': 'Delete Account',
        'mainHeading': 'Achieve Fitness Goals with PushUp Champ.',
        'mainSubheading': 'Track your push-ups, set challenges, and reach new heights. Download now and start your fitness journey!',
        'comingSoon': 'Coming Soon!',
        'comingSoonText': 'Our app will be available in the store soon. Stay tuned! For updates: @pushup_champ on Instagram',
        'closeButton': 'Close',
        'testimonial': '«Achieve your pushup goals, track your progress, and stay motivated. Download now and start your journey to a healthier you!»',
        'feature1Title': 'Track push-ups',
        'feature1Text': 'Track you daily push-ups and review them on you own profile!',
        'feature2Title': 'Worldwide',
        'feature2Text': 'It doesn\'t matter where your friends are or where you do your push-ups!',
        'feature3Title': 'Leagues',
        'feature3Text': 'Create a league with push-up enthusiasts and fight for the champ!',
        'feature4Title': 'Motivation',
        'feature4Text': 'There will be prizes in three special leagues. You can also battle it out with your friends.',
        'whyTitle': 'Why PushUp Champ?',
        'whyText': 'PushUp Champ will help you achieve your goals faster and combine push-ups with fun. Fight for your honor in a league of your choice and push your friends. 20 push-ups a day and you\'ll be a totally different person!',
        'deletionRequest': 'Request deletion of your account and the associated data',
        'Way1': 'Way 1',
        'Way2': 'Way 2',
        'deletionRequest1': 'You can delete your Account with all the associated data in the PushUp Champ app under "Profile" and there you should see a "Delete Account" Button.',
        'deletionRequest2.1': 'Send an E-Mail to ',
        'deletionRequest2.2': 'with your username and password (the E-Mail should match the one of your account). Then we will check the credentials and we will give you an update also per E-Mail.',
        'privacy': 'Privacy',
        'terms': 'Terms'
    },
    'de': {
        'menu': 'Menü',
        'features': 'Funktionen',
        'deleteAccount': 'Konto löschen',
        'mainHeading': 'Erreiche deine Fitnessziele mit PushUp Champ.',
        'mainSubheading': 'Verfolge deine Liegestütze, stelle dir Herausforderungen und erreiche neue Höhen. Jetzt PushUp Champ herunterladen und deine Fitness-Reise starten!',
        'comingSoon': 'Bald verfügbar!',
        'comingSoonText': 'Die Entwicklung ist in vollem Gange. Für Updates: @pushup_champ auf Instagram',
        'closeButton': 'Schliessen',
        'testimonial': '«Erreiche deine Liegestütz-Ziele, verfolge deinen Fortschritt und bleibe motiviert. Jetzt herunterladen und deine Reise zu deinem gesünderen ICH starten!»',
        'feature1Title': 'Liegestütze tracken',
        'feature1Text': 'Verfolge deine täglichen Liegestütze und überprüfe sie in deinem eigenen Profil!',
        'feature2Title': 'Weltweit',
        'feature2Text': 'Es spielt keine Rolle, wo deine Freunde sind oder wo du deine Liegestütze machst!',
        'feature3Title': 'Ligen',
        'feature3Text': 'Erstelle eine Liga mit Liegestütz-Enthusiasten und kämpfe um den PushUp Champ!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Du kannst dich auch mit deinen Freunden messen. In drei speziellen Ligen wird es attraktive Preise geben.',
        'whyTitle': 'Warum PushUp Champ?',
        'whyText': 'PushUp Champ wird dir helfen, deine Ziele schneller zu erreichen und Liegestütze mit Spass zu verbinden. Kämpfe um deine Ehre in einer Liga deiner Wahl und fordere deine Freunde heraus. 20 Liegestütze am Tag und du wirst ein völlig anderer Mensch!',
        'deletionRequest': 'Die Löschung Ihres Kontos und der damit verbundenen Daten beantragen',
        'Way1': 'Weg 1',
        'Way2': 'Weg 2',
        'deletionRequest1': 'Sie können Ihren Account mit allen dazugehörigen Daten in der PushUp Champ App unter "Profil" löschen und dort sollten Sie einen „Account löschen“ Button sehen.',
        'deletionRequest2.1': 'Senden Sie eine E-Mail an ',
        'deletionRequest2.2': 'mit Ihrem Benutzernamen und Passwort (die E-Mail sollte mit der Ihres Kontos übereinstimmen). Wir werden dann die Zugangsdaten prüfen und Ihnen ein Update auch per E-Mail zukommen lassen.',
        'privacy': 'Datenschutz',
        'terms': 'AGB'
    },
    'ch-be': {
        'menu': 'Menü',
        'features': 'Funktione',
        'deleteAccount': 'Konto lösche',
        'mainHeading': 'Erreich dini Fitnessziu mit PushUp Champ.',
        'mainSubheading': 'Verfoug dini Push-Ups, steu dr Herusforderige u erreich neui Tops. Jetzt PushUp Champ abelade u dini Fitness-Reis starte!',
        'comingSoon': 'Baud verfügbar!',
        'comingSoonText': 'D Entwicklig isch fasch fertig. Gli wird d App o im App Store verfügbar si. Für Updates: @pushup_champ uf Insta',
        'closeButton': 'Zue tue',
        'testimonial': '«Erreiche deine Liegestütz-Ziele, verfolge deinen Fortschritt und bleibe motiviert. Jetzt herunterladen und deine Reise zu deinem gesünderen ICH starten!»',
        'feature1Title': 'Ligistütz tracke',
        'feature1Text': 'Verfoug dini tägleche Ligistütze u überpruef se i dim eigete Profiu!',
        'feature2Title': 'Wäutwit',
        'feature2Text': 'Es spiut ke Roue, wo dini Kollege si oder wo du dini ligistütz machsch ;)',
        'feature3Title': 'Ligas',
        'feature3Text': 'Ersteu dini eigeti Liga mit dine Fitness-Buddys u kämpf um e PushUp Champ Meister!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Miss di mit dini Fründe u lase links la lige. I drü spezielle ligas wirds attraktivi prise zgwinne gä.',
        'whyTitle': 'Warum PushUp Champ?',
        'whyText': 'PushUp Champ wird dr häufe, dini Ziu schneuer zerreiche u Ligistütze mit Spass zverbinge. Kämpf um dini Ehr i näre Liga diner Wau u fordere dini Kollege use. 20 Ligistütze am Tag und du wirsch e vöuig angere Mönsch si!',
        'deletionRequest': 'Die Löschung Ihres Kontos und der damit verbundenen Daten beantragen',
        'Way1': 'Weg 1',
        'Way2': 'Weg 2',
        'deletionRequest1': 'Sie können Ihren Account mit allen dazugehörigen Daten in der PushUp Champ App unter "Profil" löschen und dort sollten Sie einen „Account löschen“ Button sehen.',
        'deletionRequest2.1': 'Senden Sie eine E-Mail an ',
        'deletionRequest2.2': 'mit Ihrem Benutzernamen und Passwort (die E-Mail sollte mit der Ihres Kontos übereinstimmen). Wir werden dann die Zugangsdaten prüfen und Ihnen ein Update auch per E-Mail zukommen lassen.',
        'privacy': 'Datenschutz',
        'terms': 'AGB'
    }
};

// Create and add modal HTML to the document
function createModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div id="comingSoonModal" class="modal-overlay">
            <div class="modal-content">
                <h2 data-translate="comingSoon">Coming Soon!</h2>
                <p data-translate="comingSoonText">Our app will be available in the store soon. Stay tuned!</p>
                <button class="modal-close" data-translate="closeButton">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Add styles for the modal
    const styles = document.createElement('style');
    styles.textContent = `
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 90%;
            width: 400px;
            text-align: center;
            position: relative;
            animation: modalSlideIn 0.3s ease-out;
        }

        .modal-close {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            border: none;
            background-color: #2196F3;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .modal-close:hover {
            background-color: #1976D2;
        }

        @keyframes modalSlideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Show modal function
function showModal() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'flex';
}

// Hide modal function
function hideModal() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'none';
}

// Language switcher function
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } 
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
}

window.addEventListener('DOMContentLoaded', event => {
    // Create modal
    createModal();

    // Set initial language
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);

    // Add click handlers for app store links
    const appStoreLinks = document.querySelectorAll('a[href*="app-store"], a[href*="play-store"]');
    appStoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    // Add click handler for modal close button
    document.querySelector('.modal-close').addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    document.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            hideModal();
        }
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
