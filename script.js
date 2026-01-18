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

    // ✅ 3. ระบบสลับธีม + Warp Jump Animation (อัปเกรดใหม่)
    const logoImg = document.querySelector('.main-logo'); 
    let isAnimating = false; // ตัวแปรป้องกันการกดรัวๆ
    
    if (logoImg) {
        logoImg.id = 'theme-logo';

        // 3.1 โหลดธีมเก่าที่บันทึกไว้ (เหมือนเดิม)
        const savedTheme = localStorage.getItem('siteTheme');
        if (savedTheme === 'pastel') {
            document.body.classList.add('theme-pastel');
            logoImg.src = 'highleveltwo.png';
        }

        // 3.2 กดเพื่อวาปเปลี่ยนธีม (แก้ใหม่)
        logoImg.addEventListener('click', function() {
            if (isAnimating) return; // ถ้ากำลังวาปอยู่ ให้หยุดทำงาน
            isAnimating = true;

            // A. เริ่มท่าไม้ตาย 1: วาปหายไป (Warp Out)
            logoImg.classList.add('warp-out');

            // B. รอให้หายไปก่อน (ประมาณ 550ms) แล้วค่อยเปลี่ยนทุกอย่าง
            setTimeout(() => {
                // --- ช่วงเวลาเปลี่ยนถ่าย (เปลี่ยนคลาส, รูป, บันทึก) ---
                document.body.classList.toggle('theme-pastel');

                if (document.body.classList.contains('theme-pastel')) {
                    logoImg.src = 'highleveltwo.png';
                    localStorage.setItem('siteTheme', 'pastel');
                } else {
                    logoImg.src = 'highlevel.png';
                    localStorage.setItem('siteTheme', 'default');
                }

                // C. เริ่มท่าไม้ตาย 2: วาปกลับมา (Warp In)
                logoImg.classList.remove('warp-out');
                logoImg.classList.add('warp-in');

                // D. จบอนิเมชั่น: เคลียร์คลาสออกเมื่อวาปกลับมาเสร็จ (800ms)
                setTimeout(() => {
                    logoImg.classList.remove('warp-in');
                    isAnimating = false; // อนุญาตให้กดใหม่ได้
                }, 800);

            }, 550); // เวลาของ warp-out
        });
    }
});
