// Art Nouveau Wedding Save the Date - Refactored Interactive Elements

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all interactive features (no sticky navigation)
    initLanguageSwitch();
    initHeroImageHover();
    initScrollAnimations();
    initArtNouveauEffects();
    initVirtualTour();
    initImageInteractions();
    initPerformanceOptimizations();
});

const translations = {
  en: {
    saveDate: "Save the Date",
    coupleNames: "Rajat & Olga",
    greeting: "Namaste, Comrade!",
    location: "Goa, India",
    subtitle: "Cannot wait for you to join us!",

    personalNoteTitle: "A Personal Note",
    personalNote1: "If you're reading this, it means we want you to be part of our special celebration. We're keeping our wedding intimate - surrounded only by people we love and who we know will have the most wonderful time together. Most importantly, people we cherish are part of our lives.",
    personalNote2: "We'll be sending out formal RSVPs soon with all the detailed information you'll need.",
    personalNote3: "We can't wait to celebrate with you in beautiful Goa!",

    weddingDetailsTitle: "Wedding Details",
    weddingLead: "Goa in Jan 2026 end.",
    when: "When",
    whenDetails: "25th & 26th January 2026.<br><br> Feel free to arrive a day earlier and stay a day later at the same discounted rates during our wedding celebration.",
    where: "Where",
    whereDetails: "Mercure Devaaya Resort. Divar Island, Goa, India",
    travelLogistics: "Travel & Logistics",
    travelDetails: `Airports:
                            <br>• Dabolim (GOI): 45 minutes
                            <br>• Manohar International (GOX): 1.5 hours
                            <br><br>
                            Transportation:
                            <br>Resort transfers coordinated for all guests
                            <br>Visa:
                            <a href="https://indianvisaonline.gov.in/evisa/tvoa.html">E-visa</a> might be required
                            (24-72 hours)`,
    plannerNote: "The planner will get in touch with you to coordinate your travel and discounted bookings after you RSVP.",

    venueTitle: "We chose a \"different\" Goan experience",
    venueSubtitle: "Mercure Devaaya Resort, Divar Island",
    venue1: "Located on the serene \"Island of Love\"",
    venue2: "Unique Indo-Portuguese style architecture",
    venue3: `Stunning waterfront location on the Mandovi River <i>(Rumors are we can see the otters
                                chilling in the season)</i>`,
    venue4: "Away from traffic and pollution - perfect getaway",
    venue5: "5 minutes from historic Old Goa churches",
    venue6: "Beautiful landscaped gardens and riverfront venues",
    venue7: "We really like the local cuisine, in particular their Ros omelette and Chicken Cafreal.",

    whenInDivar: "When in Divar",
    activityIsland: "Island Exploration",
    activityIslandText: "Village walks on car-free Divar Island",
    activityWater: "Water Activities",
    activityWaterText: "Fishing experiences by the resort, Mandovi River activities",
    activityNature: "Nature Walks",
    activityNatureText: "Cycling through coconut groves",
    activityHeritage: "Heritage",
    activityHeritageText: "Historic Old Goa exploration",
    activityCroc: "Crocodile Safari",
    activityCrocText: "Our personal favourite!",
    activitySpa: "Spa and mud bath",
    activitySpaText: "Best way to beat the jetlag",

    tourTitle: "We simply cannot state how serene the resort is, so here's a 360° virtual tour",
    tourDescription: "Explore every corner of Mercure Devaaya Resort with our immersive 360° virtual tour",

    activitiesTitle: "We love Goa and can recommend plenty for you to indulge in!",
    activitiesSubtitle: "Beyond our celebration, Goa offers endless adventures",

    travelTitle: "Make It a Grand Indian Adventure",
    travelSubtitle: `Turn your trip to India into an unforgettable vacation. Consider
                extending your stay with:`,
    flightInfo: "Easy flight connections from Delhi to Goa (2.5 hours)",

    footerSignature: "With love, Rajat & Olga",
    footerDate: "January 2026 • Goa, India"
  },

  hi: {
    saveDate: "तारीख़ याद रखें",
    coupleNames: "रजत और ओल्गा",
    greeting: "नमस्ते, साथी!",
    location: "गोवा, भारत",
    subtitle: "हम आपके आने का इंतज़ार नहीं कर सकते!",

    personalNoteTitle: "एक निजी संदेश",
    personalNote1: "अगर आप यह पढ़ रहे हैं, तो इसका मतलब है कि हम आपको हमारे खास उत्सव का हिस्सा बनाना चाहते हैं...",
    personalNote2: "हम जल्द ही औपचारिक निमंत्रण भेजेंगे...",
    personalNote3: "सुंदर गोवा में आपके साथ जश्न मनाने का इंतज़ार है!",

    weddingDetailsTitle: "शादी का विवरण",
    weddingLead: "जनवरी 2026 के अंत में गोवा।",
    when: "कब",
    whenDetails: "25 और 26 जनवरी 2026। आप एक दिन पहले आ सकते हैं...",
    where: "कहाँ",
    whereDetails: "मर्क्योर देवाय्या रिज़ॉर्ट<br>दिवर द्वीप, गोवा, भारत",
    travelLogistics: "यात्रा और व्यवस्थाएँ",
    travelDetails: "हवाई अड्डे: डाबोलिम (GOI)... वीज़ा आवश्यक हो सकता है",
    plannerNote: "आरएसवीपी के बाद योजनाकार आपसे संपर्क करेगा...",

    venueTitle: "हमने चुना है एक \"अलग\" गोअन अनुभव",
    venueSubtitle: "मर्क्योर देवाय्या रिज़ॉर्ट, दिवर द्वीप",
    venue1: "शांत 'आइलैंड ऑफ लव' पर स्थित",
    venue2: "विशिष्ट इंडो-पुर्तगाली वास्तुकला",
    venue3: "मांडोवी नदी के किनारे शानदार स्थान",
    venue4: "ट्रैफिक और प्रदूषण से दूर",
    venue5: "पुराने गोवा के चर्चों से 5 मिनट की दूरी पर",
    venue6: "सुंदर बाग और नदी किनारे का दृश्य",
    venue7: "हमें यहाँ का स्थानीय भोजन बहुत पसंद आया...",

    whenInDivar: "दिवर में क्या करें",
    activityIsland: "द्वीप की खोज",
    activityIslandText: "कार-फ्री द्वीप पर गाँव की सैर",
    activityWater: "पानी की गतिविधियाँ",
    activityWaterText: "मांडोवी नदी पर मछली पकड़ना...",
    activityNature: "प्रकृति भ्रमण",
    activityNatureText: "नारियल के पेड़ों के बीच साइक्लिंग",
    activityHeritage: "विरासत",
    activityHeritageText: "पुराने गोवा का इतिहास देखना",
    activityCroc: "मगरमच्छ सफारी",
    activityCrocText: "हमारा निजी पसंदीदा!",
    activitySpa: "स्पा और मिट्टी स्नान",
    activitySpaText: "जेटलैग मिटाने का बेहतरीन तरीका",

    tourTitle: "हम शब्दों में नहीं बता सकते कि यह रिज़ॉर्ट कितना शांत है, इसलिए यहाँ है 360° टूर",
    tourDescription: "मर्क्योर देवाय्या रिज़ॉर्ट का हर कोना देखें",

    activitiesTitle: "हमें गोवा बहुत पसंद है और हम बहुत कुछ सुझा सकते हैं!",
    activitiesSubtitle: "हमारे जश्न के अलावा, गोवा में असीम रोमांच हैं",

    travelTitle: "इसे एक भव्य भारतीय साहसिक यात्रा बनाइए",
    travelSubtitle: "अपनी भारत यात्रा को अविस्मरणीय छुट्टी में बदलें...",
    flightInfo: "दिल्ली से गोवा तक आसान उड़ान कनेक्शन (2.5 घंटे)",

    footerSignature: "प्यार के साथ, रजत और ओल्गा",
    footerDate: "जनवरी 2026 • गोवा, भारत"
  },

  ru: {
    saveDate: "Забронируйте даты",
    coupleNames: "Раджат и Ольга",
    greeting: "Намасте, товарищ!",
    location: "Гоа, Индия",
    subtitle: "С нетерпением ждём вас!",

    personalNoteTitle: "Личное послание",
    personalNote1: "Если вы это читаете, значит мы хотим, чтобы вы стали частью нашего праздника...",
    personalNote2: "Скоро мы отправим официальные приглашения...",
    personalNote3: "С нетерпением ждем праздника с вами в прекрасном Гоа!",

    weddingDetailsTitle: "Детали свадьбы",
    weddingLead: "Гоа, конец января 2026.",
    when: "Когда",
    whenDetails: "25 и 26 января 2026 года с возможностью раннего заезда 24го",
    where: "Где",
    whereDetails: "Mercure Devaaya Resort<br>остров Дивар, Гоа, Индия",
    travelLogistics: "Путешествие и логистика",
    travelDetails: "Аэропорты: Даболим (GOI)... Может потребоваться виза",
    plannerNote: "Организатор свяжется с вами после RSVP...",

    venueTitle: "Мы выбрали «другой» гоанский опыт",
    venueSubtitle: "Mercure Devaaya Resort, остров Дивар",
    venue1: "На спокойном «Острове любви»",
    venue2: "Уникальная индо-португальская архитектура",
    venue3: "Потрясающее расположение на реке Мандови",
    venue4: "Вдали от пробок и шума",
    venue5: "5 минут от старых церквей Гоа",
    venue6: "Красивые сады и площадки у реки",
    venue7: "Нам очень понравилась местная кухня...",

    whenInDivar: "На острове Дивар",
    activityIsland: "Островные прогулки",
    activityIslandText: "Прогулки по деревне без машин",
    activityWater: "Водные развлечения",
    activityWaterText: "Рыбалка и активный отдых на Мандови",
    activityNature: "Прогулки на природе",
    activityNatureText: "Велопрогулки среди кокосовых рощ",
    activityHeritage: "Наследие",
    activityHeritageText: "Знакомство со Старым Гоа",
    activityCroc: "Крокодилье сафари",
    activityCrocText: "Наш личный фаворит!",
    activitySpa: "Спа и грязевые ванны",
    activitySpaText: "Лучший способ побороть джетлаг",

    tourTitle: "Слова не передают, насколько здесь спокойно. Вот 360° тур",
    tourDescription: "Изучите каждый уголок Mercure Devaaya Resort",

    activitiesTitle: "Мы любим Гоа и можем многое порекомендовать!",
    activitiesSubtitle: "Помимо нашего праздника, Гоа предлагает бесконечные приключения",

    travelTitle: "Сделайте это большим индийским приключением",
    travelSubtitle: "Превратите поездку в Индию в незабываемый отпуск...",
    flightInfo: "Легкие перелеты из Дели в Гоа (2,5 часа)",

    footerSignature: "С любовью, Раджат и Ольга",
    footerDate: "Январь 2026 • Гоа, Индия"
  }
};

// Language Switch
function initLanguageSwitch() {
    const selector = document.getElementById("language-selector");
    const defaultLang = detectLanguage();
    selector.value = defaultLang;
    applyTranslations(defaultLang);

    selector.addEventListener("change", (e) => {
        applyTranslations(e.target.value);
    });
}
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  //change goa-image and india-image id to use relevant assets
  const goaImage = document.getElementById("goa-image");
  const indiaImage = document.getElementById("india-image");
  if (lang === "en") {
    goaImage.src = "assets/goa.png";
    indiaImage.src = "assets/india.png";
  } else if (lang === "hi") {
    goaImage.src = "assets/goa_hi.png";
    indiaImage.src = "assets/india_hi.png";
  } else if (lang === "ru") {
    goaImage.src = "assets/goa_ru.png";
    indiaImage.src = "assets/india_ru.png";
  }
}

// Detect browser language
function detectLanguage() {
  const browserLang = navigator.language.slice(0, 2);
  if (["en", "hi", "ru"].includes(browserLang)) {
    return browserLang;
  }
  return "en";
}

// Hero Image Hover Effect - Art Nouveau illustration to real photo
function initHeroImageHover() {
    const heroFrame = document.querySelector('.hero-image-frame');
    const illustration = document.querySelector('.hero-illustration');
    const photoOverlay = document.querySelector('.hero-photo-overlay');

    if (heroFrame && illustration && photoOverlay) {
        let hoverTimeout;

        // Mouse enter - show real photo with elegant transition
        heroFrame.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            heroFrame.classList.add('showing-photo');

            // Add elegant Art Nouveau transition effects
            illustration.style.transform = 'scale(0.9) rotate(-2deg)';
            illustration.style.opacity = '0';
            illustration.style.filter = 'blur(3px)';

            photoOverlay.style.transform = 'scale(1) rotate(1deg)';
            photoOverlay.style.opacity = '1';
            photoOverlay.style.filter = 'none';

            // Add sparkle effect
            createArtNouveauSparkle(heroFrame);
        });

        // Mouse leave - show illustration
        heroFrame.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                heroFrame.classList.remove('showing-photo');

                illustration.style.transform = 'scale(1) rotate(0deg)';
                illustration.style.opacity = '1';
                illustration.style.filter = 'none';

                photoOverlay.style.transform = 'scale(1.1) rotate(0deg)';
                photoOverlay.style.opacity = '0';
                photoOverlay.style.filter = 'blur(2px)';
            }, 100);
        });

        // Touch support for mobile devices
        heroFrame.addEventListener('touchstart', () => {
            heroFrame.classList.toggle('showing-photo');
        });
    }
}

// Enhanced scroll-based animations with intersection observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: [0.1, 0.3, 0.7],
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add entrance animation
                entry.target.classList.add('animate-in');

                // Stagger child animations for cards
                const cards = entry.target.querySelectorAll('.art-nouveau-card-base');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('slide-in');
                    }, index * 150);
                });

                // Animate ornaments with Art Nouveau flair
                const ornaments = entry.target.querySelectorAll('.ornament-base, .heading-ornament');
                ornaments.forEach((ornament, index) => {
                    setTimeout(() => {
                        ornament.classList.add('ornament-glow');
                    }, index * 200);
                });

                // Special animation for image cards
                const imageCards = entry.target.querySelectorAll('.activity-image-card');
                imageCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('image-reveal');
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    // Observe all sections and interactive elements
    const elementsToObserve = document.querySelectorAll('section, .art-nouveau-card-base, .hero-image-frame');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });

}

// Art Nouveau specific effects and animations
function initArtNouveauEffects() {
    // Floating ornaments with refined animation
    const ornaments = document.querySelectorAll('.ornament-base');
    ornaments.forEach((ornament, index) => {
        // Subtle floating animation with staggered timing
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 15;
            const randomY = (Math.random() - 0.5) * 20;
            const randomRotate = (Math.random() - 0.5) * 15;

            ornament.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        }, 4000 + index * 800);
    });

    // Enhanced card hover effects with Art Nouveau flair
    const cards = document.querySelectorAll('.art-nouveau-card-base');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('card-hover');

            // Add elegant ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'art-nouveau-ripple';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('card-hover');
        });

        // Add click interaction with sparkles
        card.addEventListener('click', function (e) {
            createArtNouveauSparkle(this, e);
        });
    });
}

// Create refined Art Nouveau sparkle effect
function createArtNouveauSparkle(element, event = null) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 8;
    const ornaments = ['❦', '✿', '❋', '✧'];
    const colors = ['var(--robin-egg-blue)', 'var(--coral-pink)', 'var(--jasmine)', 'var(--wenge)'];

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'art-nouveau-sparkle';
        sparkle.innerHTML = ornaments[Math.floor(Math.random() * ornaments.length)];

        // Position sparkles
        let x, y;
        if (event) {
            x = event.clientX - rect.left + (Math.random() - 0.5) * 100;
            y = event.clientY - rect.top + (Math.random() - 0.5) * 100;
        } else {
            x = rect.width / 2 + (Math.random() - 0.5) * 200;
            y = rect.height / 2 + (Math.random() - 0.5) * 200;
        }

        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];

        // Ensure element has relative positioning
        element.style.position = 'relative';
        element.appendChild(sparkle);

        // Animate sparkle with Art Nouveau movement
        setTimeout(() => {
            sparkle.style.transform = `translate(${(Math.random() - 0.5) * 300}px, ${(Math.random() - 0.5) * 300}px) scale(0) rotate(${360 + Math.random() * 360}deg)`;
            sparkle.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            sparkle.remove();
        }, 1200);
    }
}

// Enhanced image interactions for Goa activity images
function initImageInteractions() {
    const activityImageCards = document.querySelectorAll('.activity-image-card');

    activityImageCards.forEach(card => {
        const image = card.querySelector('.activity-image');
        const overlay = card.querySelector('.image-overlay');

        if (image && overlay) {
            // Enhanced hover effects
            card.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.15)';
                overlay.style.transform = 'translateY(0)';
                card.classList.add('image-active');
            });

            card.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
                overlay.style.transform = 'translateY(100%)';
                card.classList.remove('image-active');
            });

            // Click interaction for mobile
            card.addEventListener('click', () => {
                card.classList.toggle('image-active');
                if (card.classList.contains('image-active')) {
                    overlay.style.transform = 'translateY(0)';
                } else {
                    overlay.style.transform = 'translateY(100%)';
                }
            });
        }
    });

    // Resort image interaction
    const resortImageFrame = document.querySelector('.resort-image-frame');
    if (resortImageFrame) {
        const resortImage = resortImageFrame.querySelector('.resort-image');
        const imageOverlay = resortImageFrame.querySelector('.image-overlay');

        resortImageFrame.addEventListener('mouseenter', () => {
            if (resortImage) resortImage.style.transform = 'scale(1.1)';
            if (imageOverlay) imageOverlay.style.opacity = '1';
        });

        resortImageFrame.addEventListener('mouseleave', () => {
            if (resortImage) resortImage.style.transform = 'scale(1)';
            if (imageOverlay) imageOverlay.style.opacity = '0';
        });
    }
}

// Virtual tour handling with enhanced fallbacks
function initVirtualTour() {
    const iframe = document.querySelector('.tour-wrapper iframe');
    const tourWrapper = document.querySelector('.tour-wrapper');

    if (iframe && tourWrapper) {
        let loadAttempts = 0;
        const maxAttempts = 3;

        // Create elegant loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'tour-loading';
        loadingIndicator.innerHTML = `
            <div class="art-nouveau-spinner">
                <div class="spinner-ornament">❦</div>
            </div>
            <p class="elegant-text">Loading virtual tour...</p>
        `;
        tourWrapper.appendChild(loadingIndicator);

        // Function to hide loading with fade out
        const hideLoading = () => {
            if (loadingIndicator && loadingIndicator.parentNode) {
                loadingIndicator.style.opacity = '0';
                setTimeout(() => {
                    loadingIndicator.remove();
                }, 500);
            }
        };

        // Function to show elegant fallback
        const showFallback = () => {
            hideLoading();

            const fallback = document.createElement('div');
            fallback.className = 'tour-fallback art-nouveau-card-base';
            fallback.innerHTML = `
                <div class="ornament-base top">❦</div>
                <h3>Virtual Tour Experience</h3>
                <p class="elegant-text">Immerse yourself in our beautiful resort</p>
                <a href="https://tours.360reels.com/tours/T1np6aLzM" target="_blank" class="tour-link">
                    🌴 Open 360° Tour in New Window
                </a>
                <div class="ornament-base bottom">✿</div>
            `;

            tourWrapper.appendChild(fallback);
            iframe.style.display = 'none';
        };

        // Set timeout for loading with progressive retry
        const loadTimeout = setTimeout(() => {
            if (loadAttempts < maxAttempts) {
                loadAttempts++;
                console.log(`Retrying virtual tour load (attempt ${loadAttempts})`);
                iframe.src = iframe.src;
            } else {
                console.log('Virtual tour failed to load, showing fallback');
                showFallback();
            }
        }, 10000); // Increased timeout for better loading

        // Handle successful load
        iframe.addEventListener('load', () => {
            clearTimeout(loadTimeout);
            hideLoading();
            console.log('Virtual tour loaded successfully');
        });

        // Handle errors gracefully
        iframe.addEventListener('error', () => {
            clearTimeout(loadTimeout);
            console.log('Virtual tour error, showing fallback');
            showFallback();
        });
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images with intersection observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('image-loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Throttled resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset hero image dimensions on mobile
            const heroImageFrame = document.querySelector('.hero-image-frame');
            if (heroImageFrame && window.innerWidth <= 768) {
                heroImageFrame.style.width = '300px';
                heroImageFrame.style.height = '400px';
            }

            // Recalculate animations if needed
            console.log('Window resized, adjusting layout');
        }, 250);
    });

    // Mark site as fully loaded
    window.addEventListener('load', () => {
        document.body.classList.add('site-loaded');
        console.log('Site fully loaded and optimized');
    });
}

// Dynamic styles for enhanced interactions
const dynamicStyles = `
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .slide-in {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .image-reveal {
        opacity: 1;
        transform: scale(1);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .ornament-glow {
        animation: ornament-glow 2s ease-in-out;
    }
    
    @keyframes ornament-glow {
        0%, 100% { 
            color: var(--coral-pink); 
            text-shadow: none; 
            transform: scale(1);
        }
        50% { 
            color: var(--jasmine); 
            text-shadow: 0 0 20px var(--jasmine); 
            transform: scale(1.2);
        }
    }
    
    .card-hover {
        transform: translateY(-15px) rotate(2deg) scale(1.02);
    }
    
    .image-active {
        z-index: 10;
    }
    
    .art-nouveau-ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, var(--coral-pink) 20%, transparent 70%);
        border-radius: 50%;
        animation: ripple-expand 1s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-expand {
        to {
            width: 400px;
            height: 400px;
            margin-left: -200px;
            margin-top: -200px;
            opacity: 0;
        }
    }
    
    .art-nouveau-sparkle {
        position: absolute;
        font-size: 1.5rem;
        pointer-events: none;
        transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 10;
        text-shadow: 0 0 10px currentColor;
    }
    
    .tour-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        background: var(--cosmic-latte);
        padding: 3rem;
        border-radius: var(--border-radius);
        border: 3px solid var(--jasmine);
        z-index: 10;
        transition: opacity 0.5s ease;
        box-shadow: var(--art-nouveau-shadow);
    }
    
    .art-nouveau-spinner {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        position: relative;
    }
    
    .spinner-ornament {
        font-size: 3rem;
        color: var(--robin-egg-blue);
        animation: spin-ornament 2s linear infinite;
    }
    
    @keyframes spin-ornament {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.3); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    .tour-link {
        display: inline-block;
        padding: 1rem 2rem;
        background: var(--robin-egg-blue);
        color: var(--cosmic-latte);
        text-decoration: none;
        border-radius: 25px;
        transition: all 0.4s ease;
        margin-top: 1rem;
        font-weight: 500;
        border: 2px solid var(--robin-egg-blue);
    }
    
    .tour-link:hover {
        background: transparent;
        color: var(--robin-egg-blue);
        transform: translateY(-3px);
        box-shadow: var(--art-nouveau-shadow);
    }
    
    .keyboard-navigation *:focus {
        outline: 3px solid var(--coral-pink) !important;
        outline-offset: 3px;
    }
    
    .keyboard-focus {
        box-shadow: 0 0 0 3px var(--coral-pink);
        border-radius: 4px;
    }
        
    .site-loaded .art-nouveau-card-base {
        opacity: 1;
        transform: translateY(0);
    }
    
    .image-loaded {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    @media (max-width: 768px) {
        .art-nouveau-sparkle {
            font-size: 1.2rem;
        }
        
        .tour-loading {
            padding: 2rem;
            font-size: 0.9rem;
        }
        
        .card-hover {
            transform: translateY(-10px) scale(1.01);
        }
    }
    
    @media (prefers-reduced-motion: reduce) {
        .art-nouveau-sparkle,
        .spinner-ornament {
            animation: none !important;
            transition: none !important;
        }
        
        .card-hover {
            transform: none;
        }
        
        .slide-in,
        .image-reveal,
        .animate-in {
            transition: none;
        }
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Export functions for debugging and future use
window.ArtNouveauWedding = {
    initHeroImageHover,
    initArtNouveauEffects,
    createArtNouveauSparkle,
    initImageInteractions
};