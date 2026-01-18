/* script.js - Updated for High Level Theme */

window.addEventListener('load', function() {
    
    // ------------------------------------------------
    // 1. จัดการหน้า Loading Screen
    // ------------------------------------------------
    const loader = document.getElementById('loading-screen');
    
    if (loader) {
        // รอ 0.8 วินาทีเพื่อให้เห็นหน้าโหลดนิดนึง แล้วค่อยจางหาย
        setTimeout(() => {
            loader.style.opacity = '0'; // สั่งจางลง
            
            // รออีก 0.5 วินาที (ตามเวลา transition ใน CSS) แล้วค่อยซ่อนถาวร
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 800);
    }

    // ------------------------------------------------
    // 2. จัดการเพลงพื้นหลัง (Background Music)
    // ------------------------------------------------
    const audio = document.getElementById("bg-music");
    
    if (audio) {
        audio.volume = 0.3; // ตั้งความดังไว้ที่ 30% (ไม่ดังเกินไป)
        
        // Browser สมัยใหม่ต้องรอให้คนคลิกเว็บ 1 ที เพลงถึงจะเริ่มเล่นได้
        document.body.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log("Audio play failed (user didn't interact yet):", error);
                });
            }
        }, { once: true }); // ทำงานแค่ครั้งเดียวพอ
    }
});

// ------------------------------------------------
// 3. เอฟเฟกต์วงกลมตามเมาส์ (Smooth Circle Follower)
// ------------------------------------------------
const circle = document.getElementById('circle');

// เช็คก่อนว่ามีวงกลมในหน้านั้นไหม (กัน Error)
if (circle) {
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    // อัปเดตพิกัดเมาส์เมื่อขยับ
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCircle() {
        // สูตร Lerp (Linear Interpolation) เพื่อให้วิ่งตามแบบนุ่มนวล
        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        
        // 0.15 คือความเร็ว (0.1 = นุ่มช้าๆ, 0.2 = เร็ว)
        circleX += dx * 0.15; 
        circleY += dy * 0.15;

        // อัปเดตตำแหน่ง CSS
        circle.style.left = circleX + 'px';
        circle.style.top = circleY + 'px';

        // วนลูปฟังก์ชันนี้ไปเรื่อยๆ ตามเฟรมเรตหน้าจอ
        requestAnimationFrame(animateCircle);
    }
    
    // เริ่มทำงาน
    animateCircle();
}
