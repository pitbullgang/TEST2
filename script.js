document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Loading Screen (เหมือนเดิม)
    const loader = document.getElementById('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 800);
    }

    // 2. ฝนผีเสื้อ (เหมือนเดิม)
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

    // ✅ 3. ระบบสลับธีม + บันทึกค่า (Theme Switcher & Save)
    const logoImg = document.querySelector('.main-logo'); 
    
    if (logoImg) {
        logoImg.id = 'theme-logo';

        // --- ส่วนที่เพิ่ม: ตรวจสอบค่าเก่าก่อนโหลด ---
        const savedTheme = localStorage.getItem('siteTheme');
        if (savedTheme === 'pastel') {
            document.body.classList.add('theme-pastel');
            logoImg.src = 'highleveltwo.png';
        }

        // --- ส่วนที่แก้: กดแล้วเปลี่ยน + บันทึก ---
        logoImg.addEventListener('click', function() {
            document.body.classList.toggle('theme-pastel');

            if (document.body.classList.contains('theme-pastel')) {
                // เปลี่ยนเป็นธีม Pastel
                logoImg.src = 'highleveltwo.png'; 
                localStorage.setItem('siteTheme', 'pastel'); // ✅ บันทึกว่า "เลือก Pastel นะ"
            } else {
                // เปลี่ยนเป็นธีม Original
                logoImg.src = 'highlevel.png'; 
                localStorage.setItem('siteTheme', 'default'); // ✅ บันทึกว่า "เลือกปกติ นะ"
            }
        });
    }
});
