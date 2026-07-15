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
        'mainSubheading': 'Track your push-ups, set challenges and reach new heights. Download now and start your fitness journey!',
        'comingSoon': 'Coming Soon!',
        'comingSoonText': 'Our app will be available in the store soon. Stay tuned! For updates: @pushup_champ on Instagram',
        'closeButton': 'Close',
        'testimonial': '«Achieve your pushup goals, track your progress, and stay motivated. Download now and start your journey to a healthier you!»',
        'feature1Title': 'Track push-ups',
        'feature1Text': 'Track your daily push-ups locally with AI and look them up on your own profile!',
        'feature2Title': 'Worldwide',
        'feature2Text': 'It doesn\'t matter where your friends are or where you do your push-ups!',
        'feature3Title': 'Leagues',
        'feature3Text': 'Create a league with push-up enthusiasts and fight for the champ!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Planned community challenges and seasonal rewards. You can also battle it out with your friends.',
        'whyTitle': 'Why PushUp Champ?',
        'whyText': 'PushUp Champ will help you achieve your goals faster and combine push-ups with fun. Fight for your honor in a league of your choice and push your friends. 20 push-ups a day and you\'ll be a totally different person!',
        'deletionRequest': 'Request deletion of your account and the associated data',
        'Way1': 'Way 1',
        'Way2': 'Way 2',
        'deletionRequest1': 'You can delete your Account with all the associated data in the PushUp Champ app under "Settings" at the right top corner and there you should see a "Delete Account" Button.',
        'deletionRequest2.1': 'Send an E-Mail to ',
        'deletionRequest2.2': 'with your username and password (the E-Mail should match the one of your account). Then we will check the credentials and we will give you an update per E-Mail.',
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
        'feature1Text': 'Verfolge deine täglichen Liegestütze mit lokaler KI und überprüfe sie in deinem eigenen Profil!',
        'feature2Title': 'Weltweit',
        'feature2Text': 'Es spielt keine Rolle, wo deine Freunde sind oder wo du deine Liegestütze machst!',
        'feature3Title': 'Ligen',
        'feature3Text': 'Erstelle eine Liga mit Liegestütz-Enthusiasten und kämpfe um den PushUp Champ!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Du kannst dich auch mit deinen Freunden messen. Geplante Community-Challenges und saisonale Belohnungen.',
        'whyTitle': 'Warum PushUp Champ?',
        'whyText': 'PushUp Champ wird dir helfen, deine Ziele schneller zu erreichen und Liegestütze mit Spass zu verbinden. Kämpfe um deine Ehre in einer Liga deiner Wahl und fordere deine Freunde heraus. 20 Liegestütze am Tag und du wirst ein völlig anderer Mensch!',
        'deletionRequest': 'Die Löschung Ihres Kontos und der damit verbundenen Daten beantragen',
        'Way1': 'Weg 1',
        'Way2': 'Weg 2',
        'deletionRequest1': 'Sie können Ihren Account mit allen dazugehörigen Daten in der PushUp Champ App unter "Einstellungen" oben rechts löschen und dort sollten Sie einen „Account löschen“ Button sehen.',
        'deletionRequest2.1': 'Senden Sie eine E-Mail an ',
        'deletionRequest2.2': 'mit Ihrem Benutzernamen und Passwort (die E-Mail sollte mit der Ihres Kontos übereinstimmen). Wir werden dann die Zugangsdaten prüfen und Ihnen ein Update per E-Mail zukommen lassen.',
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
        'feature1Text': 'Verfoug dini tägleche Ligistütze mit lokaler KI u überpruef se i dim eigete Profiu!',
        'feature2Title': 'Wäutwit',
        'feature2Text': 'Es spiut ke Roue, wo dini Kollege si oder wo du dini ligistütz machsch ;)',
        'feature3Title': 'Ligas',
        'feature3Text': 'Ersteu dini eigeti Liga mit dine Fitness-Buddys u kämpf um e PushUp Champ Meister!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Miss di mit dini Fründe u lase links la lige. Geplanti Community-Challenges u saisonali Belohnige.',
        'whyTitle': 'Warum PushUp Champ?',
        'whyText': 'PushUp Champ wird dr häufe, dini Ziu schneuer zerreiche u Ligistütze mit Spass zverbinge. Kämpf um dini Ehr i näre Liga diner Wau u fordere dini Kollege use. 20 Ligistütze am Tag und du wirsch e vöuig angere Mönsch si!',
        'deletionRequest': 'Die Löschung Ihres Kontos und der damit verbundenen Daten beantragen',
        'Way1': 'Weg 1',
        'Way2': 'Weg 2',
        'deletionRequest1': 'Sie können Ihren Account mit allen dazugehörigen Daten in der PushUp Champ App unter "Einstellungen" oben rechts löschen und dort sollten Sie einen „Account löschen“ Button sehen.',
        'deletionRequest2.1': 'Senden Sie eine E-Mail an ',
        'deletionRequest2.2': 'mit Ihrem Benutzernamen und Passwort (die E-Mail sollte mit der Ihres Kontos übereinstimmen). Wir werden dann die Zugangsdaten prüfen und Ihnen ein Update per E-Mail zukommen lassen.',
        'privacy': 'Datenschutz',
        'terms': 'AGB'
    },
    'it': {
        'menu': 'Menu',
        'features': 'Funzionalità',
        'deleteAccount': 'Elimina account',
        'mainHeading': 'Raggiungi i tuoi obiettivi fitness con PushUp Champ.',
        'mainSubheading': 'Tieni traccia delle tue flessioni, affronta nuove sfide e raggiungi nuovi traguardi. Scarica subito PushUp Champ e inizia il tuo percorso fitness!',
        'comingSoon': 'Prossimamente!',
        'comingSoonText': 'La nostra app sarà presto disponibile nello store. Resta aggiornato! Per novità: @pushup_champ su Instagram',
        'closeButton': 'Chiudi',
        'testimonial': '«Raggiungi i tuoi obiettivi di flessioni, monitora i tuoi progressi e resta motivato. Scaricala ora e inizia il tuo percorso verso una versione più sana di te!»',
        'feature1Title': 'Traccia le flessioni',
        'feature1Text': 'Tieni traccia delle tue flessioni quotidiane e rivedile nel tuo profilo personale!',
        'feature2Title': 'In tutto il mondo',
        'feature2Text': 'Non importa dove siano i tuoi amici o dove tu faccia le flessioni!',
        'feature3Title': 'Leghe',
        'feature3Text': 'Crea una lega con appassionati di flessioni e lotta per diventare il campione!',
        'feature4Title': 'Motivazione',
        'feature4Text': 'Sfide della community e ricompense stagionali in programma. Puoi anche sfidare i tuoi amici.',
        'whyTitle': 'Perché PushUp Champ?',
        'whyText': 'PushUp Champ ti aiuterà a raggiungere i tuoi obiettivi più velocemente e a unire le flessioni al divertimento. Combatti per il tuo onore in una lega a tua scelta e sfida i tuoi amici. 20 flessioni al giorno e diventerai una persona completamente diversa!',
        'deletionRequest': 'Richiedi l\'eliminazione del tuo account e dei dati associati',
        'Way1': 'Metodo 1',
        'Way2': 'Metodo 2',
        'deletionRequest1': 'Puoi eliminare il tuo account con tutti i dati associati nell\'app PushUp Champ sotto "Impostazioni" in alto a destra, dove dovresti vedere un pulsante "Elimina account".',
        'deletionRequest2.1': 'Invia un\'e-mail a ',
        'deletionRequest2.2': 'con il tuo nome utente e la tua password (l\'e-mail deve corrispondere a quella del tuo account). Controlleremo quindi le credenziali e ti invieremo un aggiornamento via e-mail.',
        'privacy': 'Privacy',
        'terms': 'Termini'
    },
    'fr': {
        'menu': 'Menu',
        'features': 'Fonctionnalités',
        'deleteAccount': 'Supprimer le compte',
        'mainHeading': 'Atteins tes objectifs fitness avec PushUp Champ.',
        'mainSubheading': 'Suis tes pompes, lance-toi des défis et atteins de nouveaux sommets. Télécharge PushUp Champ maintenant et commence ton parcours fitness!',
        'comingSoon': 'Bientôt disponible!',
        'comingSoonText': 'Notre app sera bientôt disponible dans le store. Reste connecté! Pour les mises à jour: @pushup_champ sur Instagram',
        'closeButton': 'Fermer',
        'testimonial': '«Atteins tes objectifs de pompes, suis tes progrès et reste motivé. Télécharge maintenant et commence ton parcours vers une meilleure santé!»',
        'feature1Title': 'Suivre les pompes',
        'feature1Text': 'Suis tes pompes quotidiennes et consulte-les dans ton propre profil!',
        'feature2Title': 'Dans le monde entier',
        'feature2Text': 'Peu importe où sont tes amis ou où tu fais tes pompes!',
        'feature3Title': 'Ligues',
        'feature3Text': 'Crée une ligue avec des passionnés de pompes et bats-toi pour devenir le champion!',
        'feature4Title': 'Motivation',
        'feature4Text': 'Des défis communautaires et des récompenses saisonnières sont prévus. Tu peux aussi te mesurer à tes amis.',
        'whyTitle': 'Pourquoi PushUp Champ?',
        'whyText': 'PushUp Champ t’aidera à atteindre tes objectifs plus rapidement et à rendre les pompes plus fun. Défends ton honneur dans la ligue de ton choix et défie tes amis. 20 pompes par jour et tu deviendras une personne complètement différente!',
        'deletionRequest': 'Demander la suppression de ton compte et des données associées',
        'Way1': 'Méthode 1',
        'Way2': 'Méthode 2',
        'deletionRequest1': 'Tu peux supprimer ton compte avec toutes les données associées dans l’app PushUp Champ sous "Paramètres" en haut à droite, où tu devrais voir un bouton "Supprimer le compte".',
        'deletionRequest2.1': 'Envoie un e-mail à ',
        'deletionRequest2.2': 'avec ton nom d’utilisateur et ton mot de passe (l’e-mail doit correspondre à celui de ton compte). Nous vérifierons ensuite les identifiants et t’enverrons une mise à jour par e-mail.',
        'privacy': 'Confidentialité',
        'terms': 'Conditions'
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
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'de';
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
