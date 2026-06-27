// Back to Top
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Animation
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

// Counter Animation
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let count = 0;
            const speed = 50;

            const updateCounter = () => {
                if (count < target) {
                    count++;
                    entry.target.innerText = count;
                    setTimeout(updateCounter, speed);
                } else {
                    entry.target.innerText = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== MULTI-LEVEL DROPDOWN =====
const navItems = document.querySelectorAll('.nav-item[data-menu]');

navItems.forEach(item => {
    item.querySelector('a').addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        navItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

document.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('open'));
});

// ===== SEARCH =====
const searchBtn = document.getElementById('searchBtn');
const searchExp = document.getElementById('searchExp');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    searchExp.classList.toggle('open');
    if (searchExp.classList.contains('open')) searchInput.focus();
});

searchClose.addEventListener('click', () => searchExp.classList.remove('open'));
searchExp.addEventListener('click', (e) => e.stopPropagation());
document.addEventListener('click', () => searchExp.classList.remove('open'));

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// Mobile accordion
document.querySelectorAll('.mob-item').forEach(mi => {
    const trigger = mi.querySelector(':scope > a');
    if (trigger && mi.querySelector('.mob-sub')) {
        trigger.addEventListener('click', () => mi.classList.toggle('open'));
    }
});

// ===== DARK MODE =====
const dmToggle = document.getElementById('dmToggle');
dmToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', dmToggle.checked);
    localStorage.setItem('darkMode', dmToggle.checked);
});
// Restore preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    dmToggle.checked = true;
}

// ===== CONTACT FORM VALIDATION =====
const messageField = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageField.addEventListener('input', () => {
    const n = messageField.value.length;
    charCount.textContent = n + ' / 500';
    charCount.classList.toggle('warn', n > 450);
});

function setField(id, isValid, errMsg) {
    const el = document.getElementById(id);
    const err = document.getElementById(id + 'Err');
    el.classList.toggle('invalid', !isValid);
    el.classList.toggle('valid', isValid);
    if (err) err.textContent = isValid ? '' : errMsg;
    return isValid;
}

function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validatePhone(v) {
    return v === '' || /^[\d\s\(\)\-\+\.]{7,15}$/.test(v);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let allValid = true;

    const fname   = document.getElementById('fname').value.trim();
    const lname   = document.getElementById('lname').value.trim();
    const email   = document.getElementById('email').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();
    const service = document.getElementById('service').value;
    const msg     = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    if (!setField('fname',   fname.length >= 2,      'Please enter your first name'))         allValid = false;
    if (!setField('lname',   lname.length >= 2,      'Please enter your last name'))          allValid = false;
    if (!setField('email',   validateEmail(email),   'Please enter a valid email address'))   allValid = false;
    if (!setField('phone',   validatePhone(phone),   'Please enter a valid phone number'))    allValid = false;
    if (!setField('company', company.length >= 2,    'Please enter your company name'))       allValid = false;
    if (!setField('service', service !== '',          'Please select a service'))              allValid = false;
    if (!setField('message', msg.length >= 10,       'Please enter at least 10 characters')) allValid = false;

    const consentErr = document.getElementById('consentErr');
    if (!consent) { consentErr.textContent = 'You must agree to be contacted'; allValid = false; }
    else consentErr.textContent = '';

    if (allValid) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMsg').classList.add('show');
    }
});

// Clear validation on input
['fname','lname','email','phone','company','message'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
        this.classList.remove('invalid', 'valid');
        const err = document.getElementById(id + 'Err');
        if (err) err.textContent = '';
    });
});

// ===== CONTACT US TOGGLE =====
const formSection = document.getElementById('contact');

document.querySelectorAll('a[href="#contact"], .contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        formSection.classList.add('open');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('formClose').addEventListener('click', () => {
    formSection.classList.remove('open');
});
