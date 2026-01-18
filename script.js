document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------------------
    // 1. Loading Screen
    // ------------------------------------------------
    const loader = document.getElementById('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 800);
    }

    // ------------------------------------------------
    // 2. สร้างฝนผีเสื้อ (Butterfly Rain)
    // ------------------------------------------------
    const butterflyContainer = document.getElementById('butterfly-container');
    const numberOfButterflies = 30; // ปรับจำนวนผีเสื้อตรงนี้

    if (butterflyContainer) {
        for (let i = 0; i < numberOfButterflies; i++) {
            const butterfly = document.createElement('div');
            butterfly.classList.add('butterfly');
            
            // สุ่มตำแหน่งเริ่ม (ซ้าย-ขวา)
            butterfly.style.left = Math.random() * 100 + 'vw';
            
            // สุ่มความเร็ว (6 ถึง 14 วินาที)
            butterfly.style.animationDuration = (Math.random() * 8 + 6) + 's';
            
            // สุ่มเวลาดีเลย์ (ไม่ให้ตกลงมาพร้อมกันเป๊ะๆ)
            butterfly.style.animationDelay = Math.random() * 5 + 's';
            
            // สุ่มขนาด (0.6 เท่า ถึง 1.2 เท่า)
            const scale = Math.random() * 0.6 + 1.2;
            butterfly.style.transform = `scale(${scale})`;
            
            // สุ่มความจาง
            butterfly.style.opacity = Math.random() * 0.5 + 0.5;

            butterflyContainer.appendChild(butterfly);
        }
    }
});
