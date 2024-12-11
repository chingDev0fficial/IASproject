document.addEventListener('DOMContentLoaded', function () {
    function content_display(template) {
        const content = document.querySelector('.content')
        content.innerHTML = template
    }


    content_display(
        `
        <div class="home-container">
            <h1>Welcome to Team Group 3!</h1>
            <h3>Let's Enjoy Collaboration</h3>

            <p> 
                We are a dynamic and diverse team committed to achieving excellence
                in every project we take on. Our mission is to bring innovative
                solutions, collaborative teamwork, and a passion for success to every challenge.
            </p>
        </div>
        `
    );
});