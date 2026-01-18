document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Loading Screen
    const loader = document.getElementById('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 800);
    }

    // 2. ฝนผีเสื้อ
    const butterflyContainer = document.getElementById('butterfly-container');
    const numberOfButterflies = 30; 
    if (butterflyContainer) {
        for (let i = 0; i < numberOfButterflies; i++) {
            const butterfly = document.createElement('div');
            butterfly.classList.add('butterfly');
            butterfly.style.left = Math.random() * 100 + 'vw';
            butterfly.style.animationDuration = (Math.random() * 8 + 6) + 's';
            butterfly.style.animationDelay = Math.random() * 5 + 's';
            const scale = Math.random() * 0.6 + 0.6;
            butterfly.style.transform = `scale(${scale})`;
            butterfly.style.opacity = Math.random() * 0.5 + 0.5;
            butterflyContainer.appendChild(butterfly);
        }
    }

    // ✅ 3. ระบบสลับธีม (Theme Switcher)
    const logoImg = document.querySelector('.main-logo'); // หาโลโก้
    
    if (logoImg) {
        // เพิ่ม ID ให้ JS อ้างอิงได้ง่าย (ถ้ายังไม่มี)
        logoImg.id = 'theme-logo';

        logoImg.addEventListener('click', function() {
            // สลับ Class ที่ Body
            document.body.classList.toggle('theme-pastel');

            // เปลี่ยนรูปโลโก้
            if (document.body.classList.contains('theme-pastel')) {
                // ธีมใหม่: โลโก้ Pastel
                logoImg.src = 'highleveltwo.png'; 
            } else {
                // ธีมเดิม: โลโก้ Original
                logoImg.src = 'highlevel.png'; 
            }
        });
    }
});
