(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();
// Portfolio Tab System
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab click handler
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and target content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Video play functionality
    const playBtns = document.querySelectorAll('.video-play, .code-play');
    playBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const iframe = this.closest('.video-item, .code-item').querySelector('iframe');
            if (iframe) {
                const src = iframe.src;
                if (!src.includes('autoplay=1')) {
                    iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
                }
            }
        });
    });
});