// RSVP Form Interactive Functionality

class RSVPForm {
    constructor() {
        this.form = document.getElementById('rsvpForm');
        this.attendanceRadios = document.querySelectorAll('input[name="attendance"]');
        this.roomBookingRadios = document.querySelectorAll('input[name="roomBooking"]');
        this.yesSection = document.getElementById('yesSection');
        this.noSection = document.getElementById('noSection');
        this.roomPricing = document.getElementById('roomPricing');
        this.successMessage = document.getElementById('successMessage');
        this.emailPreviewSection = document.getElementById('emailPreviewSection');
        this.copyEmailBtn = document.getElementById('copyEmailBtn');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Attendance selection handling
        this.attendanceRadios.forEach(radio => {
            radio.addEventListener('change', (e) => this.handleAttendanceChange(e));
        });

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Copy email button
        this.copyEmailBtn.addEventListener('click', () => this.copyEmailToClipboard());

        // Initialize form state
        this.updateConditionalSections();
    }

    handleAttendanceChange(event) {
        this.updateConditionalSections();
        // Add smooth animation
        setTimeout(() => {
            const targetSection = event.target.value === 'yes' ? this.yesSection : this.noSection;
            if (!targetSection.classList.contains('hidden')) {
                targetSection.classList.add('show');
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 50);
    }

    updateConditionalSections() {
        const selectedAttendance = document.querySelector('input[name="attendance"]:checked');

        if (selectedAttendance) {
            if (selectedAttendance.value === 'yes') {
                this.showElement(this.yesSection);
                this.hideElement(this.noSection);
            } else {
                this.hideElement(this.yesSection);
                this.showElement(this.noSection);
            }
        } else {
            this.hideElement(this.yesSection);
            this.hideElement(this.noSection);
        }

        // Reset room booking section when attendance changes
        this.hideElement(this.roomPricing);
        const roomBookingInputs = document.querySelectorAll('input[name="roomBooking"]');
        roomBookingInputs.forEach(input => input.checked = false);
    }

    showElement(element) {
        if (element) {
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }

    hideElement(element) {
        if (element) {
            element.classList.add('hidden');
            element.classList.remove('show');
        }
    }

    validateForm() {
        const errors = [];

        // Check required fields
        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const attendance = document.querySelector('input[name="attendance"]:checked');

        if (!name) {
            errors.push('Name is required');
            this.highlightField(document.getElementById('name'));
        }

        if (!contact) {
            errors.push('Contact details are required');
            this.highlightField(document.getElementById('contact'));
        }

        if (!attendance) {
            errors.push('Please select your attendance');
            this.highlightField(document.querySelector('.attendance-group'));
        }

        // Validate contact format (basic email or phone check)
        if (contact) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
            if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
                errors.push('Please provide a valid email address or phone number');
                this.highlightField(document.getElementById('contact'));
            }
        }

        return errors;
    }

    highlightField(field) {
        field.style.borderColor = '#ff4444';
        field.addEventListener('input', function () {
            this.style.borderColor = '';
        }, { once: true });

        // For radio button groups
        if (field.classList.contains('attendance-group')) {
            field.style.borderColor = '#ff4444';
            const radioInputs = field.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(input => {
                input.addEventListener('change', function () {
                    field.style.borderColor = '';
                }, { once: true });
            });
        }
    }

    collectFormData() {
        const formData = {
            name: document.getElementById('name').value.trim(),
            contact: document.getElementById('contact').value.trim(),
            attendance: document.querySelector('input[name="attendance"]:checked')?.value,
            timestamp: new Date().toISOString()
        };

        if (formData.attendance === 'yes') {
            formData.plusOnes = document.getElementById('plusOnes').value;
            formData.dietary = document.getElementById('dietary').value;
            formData.allergies = document.getElementById('allergies').value.trim();
            formData.activities = document.getElementById('activities').value.trim();
            formData.arrival = document.getElementById('arrival').value;
            formData.roomBooking = document.querySelector('input[name="roomBooking"]:checked')?.value;
        } else if (formData.attendance === 'no') {
            formData.reason = document.getElementById('reason').value.trim();
        }

        return formData;
    }

    handleSubmit(event) {
        event.preventDefault();

        // Clear previous error highlights
        const fields = this.form.querySelectorAll('.form-control, .attendance-group');
        fields.forEach(field => {
            field.style.borderColor = '';
        });

        // Validate form
        const errors = this.validateForm();
        if (errors.length > 0) {
            this.showErrors(errors);
            return;
        }

        // Collect and process form data
        const formData = this.collectFormData();
        this.submitForm(formData);
    }

    showErrors(errors) {
        // Create or update error message
        let errorContainer = document.querySelector('.error-message');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'error-message';
            errorContainer.style.cssText = `
                background: #ffe6e6;
                border: 1px solid #ff4444;
                color: #cc0000;
                padding: 15px;
                border-radius: 10px;
                margin-bottom: 20px;
                font-size: 0.9rem;
            `;
            this.form.insertBefore(errorContainer, this.form.firstChild);
        }

        errorContainer.innerHTML = `
            <strong>Please correct the following errors:</strong>
            <ul style="margin: 10px 0 0 20px;">
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;

        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    generateEmailContent(formData) {
        const subject = `Wedding RSVP Response - ${formData.name}`;

        let emailBody = `**RSVP Details:**
Name: ${formData.name}
Contact: ${formData.contact}
Response Date: ${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}`;

        if (formData.attendance === 'yes') {
            emailBody += `

**Attendance:** YES
Number of Guests: ${formData.plusOnes}
Dietary Preference: ${formData.dietary}`;

            if (formData.allergies) {
                emailBody += `
Allergies/Special Requirements: ${formData.allergies}`;
            }

            emailBody += `
Planned Arrival: ${this.getArrivalText(formData.arrival)}`;

            if (formData.activities) {
                emailBody += `
Activities of Interest: ${formData.activities}`;
            }

            if (formData.roomBooking === 'yes') {
                emailBody += `
Accommodation: Requesting assistance with room bookings`;
            } else if (formData.roomBooking === 'no') {
                emailBody += `
Accommodation: Will arrange own accommodation`;
            }

        } else {
            emailBody += `

**Attendance:** NO`;

            if (formData.reason) {
                emailBody += `
Reason: ${formData.reason}`;
            }
        }

        emailBody += `

---
*Submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}*`;

        return { subject, body: emailBody };
    }


    getArrivalText(arrivalValue) {
        const arrivalMap = {
            'jan-24': 'January 24th (day before events)',
            'jan-25-morning': 'January 25th morning',
            'jan-25-afternoon': 'January 25th afternoon',
            'jan-26': 'January 26th (wedding day only)',
            'earlier': 'Earlier than January 24th (details in activities section)'
        };
        return arrivalMap[arrivalValue] || arrivalValue;
    }

    submitForm(formData) {
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Log form data for demonstration
            console.log('RSVP Form Data:', formData);

            // Save to localStorage
            localStorage.setItem('weddingRSVP', JSON.stringify(formData));

            // Generate email content
            const emailContent = this.generateEmailContent(formData);

            // Display email preview
            this.showEmailPreview(emailContent, formData);

            // Show success message
            this.showSuccessMessage();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

        }, 1500);
    }

    showEmailPreview(emailContent, formData) {
        // Update email preview section
        document.getElementById('emailRecipient').textContent = 'rajat@olgarajat.live';
        document.getElementById('emailSubject').textContent = emailContent.subject;
        document.getElementById('emailBody').textContent = emailContent.body;

        // Create mailto link
        const mailto = `mailto:rajat@olgarajat.live?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;

        const sendEmailBtn = document.getElementById('sendEmailBtn');
        sendEmailBtn.onclick = () => {
            window.location.href = mailto;
        };

        // Store email content for copying
        this.currentEmailContent = emailContent;

        // Show the email preview section
        this.emailPreviewSection.classList.remove('hidden');

        // Scroll to email preview after showing success message
        setTimeout(() => {
            this.emailPreviewSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 2000);
    }

    copyEmailToClipboard() {
        if (!this.currentEmailContent) return;

        const fullEmailText = `To: rajat@olgarajat.live
Subject: ${this.currentEmailContent.subject}

${this.currentEmailContent.body}`;

        navigator.clipboard.writeText(fullEmailText).then(() => {
            const copyBtn = document.getElementById('copyEmailBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Copied!';
            copyBtn.classList.add('copied');

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = fullEmailText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            const copyBtn = document.getElementById('copyEmailBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Copied!';
            copyBtn.classList.add('copied');

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    }

    showSuccessMessage() {
        this.successMessage.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Focus trap for accessibility
        const closeButton = this.successMessage.querySelector('button');
        if (closeButton) {
            closeButton.focus();
        }

        // Auto close after 3 seconds and redirect to email preview
        setTimeout(() => {
            this.successMessage.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 3000);
    }

    resetForm() {
        this.form.reset();
        this.updateConditionalSections();
        this.hideElement(this.emailPreviewSection);

        // Clear any error messages
        const errorContainer = document.querySelector('.error-message');
        if (errorContainer) {
            errorContainer.remove();
        }
    }
}

// Initialize the form when the page loads
document.addEventListener('DOMContentLoaded', function () {
    new RSVPForm();
});

// Additional utility functions for email handling
function copyEmailToClipboard() {
    // This function is kept for backward compatibility
    // The main functionality is now in the RSVPForm class
    const rsvpForm = window.rsvpFormInstance;
    if (rsvpForm && rsvpForm.copyEmailToClipboard) {
        rsvpForm.copyEmailToClipboard();
    }
}