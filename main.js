function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            header.classList.add("active");
            lol.src = "pic/headerimage.jpeg";
        }else{
            header.classList.remove("active");
            lol.src = "pic/headerimage.jpeg";
        }
        
    })
}
myHeader();

function myBars(){
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function(){
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bars.src = "pic/menu.png"
        }else{
            nav.style.right = "0%";
            bars.src = "pic/x.png"
        }
        nav.classList.toggle("new")
    }
    
    
}
myBars()

function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box ");
    plus.onclick = ()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "pic/pause.png"
        }else{
            videos.pause();
            player.src = "pic/play.png"
        }
    }
}
myVideo();

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"
        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }

}
toTop();

// About Section JAVASCRIPT

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Start counting animation when section becomes visible
            if (!entry.target.classList.contains('counted')) {
                animateNumbers();
                entry.target.classList.add('counted');
            }
        }
    });
}, { threshold: 0.2 });

// Observe the about content section
observer.observe(document.querySelector('.about-content'));

// Animate numbers function
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const step = target / (duration / 16); // Update every 16ms (60fps)
        let current = 0;

        const updateNumber = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
}

// Adding Form Javascript

/*document.getElementById('furnitureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    
    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const interest = document.getElementById('interest');
    const message = document.getElementById('message');

    // Validation
    if (firstName.value.length < 2) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    if (lastName.value.length < 2) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (!interest.value) {
        document.getElementById('interestError').style.display = 'block';
        isValid = false;
    }

    if (message.value.length < 10) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Show loading
        const loading = document.querySelector('.loading');
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.style.display = 'none';
        loading.style.display = 'block';

        // Simulate form submission
        setTimeout(() => {
            const form = document.getElementById('furnitureForm');
            const successMessage = document.getElementById('successMessage');
            
            loading.style.display = 'none';
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
        }, 1500);
    }
});

// Handle select element label animation
document.getElementById('interest').addEventListener('change', function() {
    if (this.value) {
        this.classList.add('has-value');
    } else {
        this.classList.remove('has-value');
    }
});

*/

document.getElementById('furnitureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    
    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const interest = document.getElementById('interest');
    const message = document.getElementById('message');

    // Validation
    if (firstName.value.length < 2) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    if (lastName.value.length < 2) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (!interest.value) {
        document.getElementById('interestError').style.display = 'block';
        isValid = false;
    }

    if (message.value.length < 10) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Show loading
        const loading = document.querySelector('.loading');
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.style.display = 'none';
        loading.style.display = 'block';

        // Simulate form submission
        setTimeout(() => {
            const form = document.getElementById('furnitureForm');
            const successMessage = document.getElementById('successMessage');
            
            loading.style.display = 'none';
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
        }, 1500);
    }
});

// Handle select element label animation
document.getElementById('interest').addEventListener('change', function() {
    if (this.value) {
        this.classList.add('has-value');
    } else {
        this.classList.remove('has-value');
    }
});


