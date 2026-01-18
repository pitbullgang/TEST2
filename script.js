/* =========================================
   Script.js - High Level Theme (Optimized)
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
    
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
        audio.volume = 0.3; // ความดัง 30%
        
        // ฟังก์ชันเริ่มเล่นเพลง
        const playAudio = () => {
            if (audio.paused) {
                audio.play().then(() => {
                    console.log("Music Playing...");
                }).catch(error => {
                    console.log("Auto-play blocked, waiting for interaction.");
                });
            }
        };

        // พยายามเล่นทันที (เผื่อ Browser อนุญาต)
        playAudio();

        // ถ้า Browser บล็อก ให้รอคลิกครั้งแรกแล้วค่อยเล่น
        document.body.addEventListener('click', () => {
            playAudio();
        }, { once: true });
    } else {
        console.warn("ไม่พบ Element id='bg-music' กรุณาเช็คไฟล์ HTML");
    }

    // ------------------------------------------------
    // 3. เอฟเฟกต์วงกลมตามเมาส์ (Smooth Circle Follower)
    // ------------------------------------------------
    const circle = document.getElementById('circle');

    if (circle) {
        let mouseX = window.innerWidth / 2; // เริ่มต้นที่กลางจอ
        let mouseY = window.innerHeight / 2;
        let circleX = mouseX;
        let circleY = mouseY;

        // อัปเดตพิกัดเมาส์เมื่อขยับ
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCircle() {
            // สูตร Lerp เพื่อความนุ่มนวล
            const dx = mouseX - circleX;
            const dy = mouseY - circleY;
            
            // 0.15 = ความเร็ว (ยิ่งน้อยยิ่งหน่วงนุ่มๆ)
            circleX += dx * 0.15; 
            circleY += dy * 0.15;

            // อัปเดตตำแหน่ง
            circle.style.left = circleX + 'px';
            circle.style.top = circleY + 'px';

            requestAnimationFrame(animateCircle);
        }
        
        animateCircle();
    }
});
