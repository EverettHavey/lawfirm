document.addEventListener('DOMContentLoaded', () => {
    console.log('Sterling & Sterling Law website loaded.');

    // Example of a simple interactive element: Testimonial slider (basic functionality)
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length > 1) {
        let currentTestimonial = 0;

        // Hide all but the first testimonial initially
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });

        // Simple automatic slider (can be enhanced with navigation buttons)
        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 7000); // Change testimonial every 7 seconds
    }

    // Form submission listener (for demonstration purposes)
    const consultationForm = document.querySelector('.consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest.
            console.log('Consultation form submitted!');

            const formData = new FormData(consultationForm);
            const formDetails = {};
            for (let [key, value] of formData.entries()) {
                formDetails[key] = value;
            }
            console.log('Form Data:', formDetails);

            // Display a simple confirmation message
            alert('Your consultation request has been submitted successfully! We will contact you shortly.');

            consultationForm.reset(); // Clear the form
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            console.log('Contact form submitted!');

            const formData = new FormData(contactForm);
            const formDetails = {};
            for (let [key, value] of formData.entries()) {
                formDetails[key] = value;
            }
            console.log('Contact Form Data:', formDetails);

            alert('Your message has been sent successfully! We will get back to you soon.');

            contactForm.reset(); // Clear the form
        });
    }

    // Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});