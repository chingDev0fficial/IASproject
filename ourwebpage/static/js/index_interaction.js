function content_display(template) {
    const content = document.querySelector('.content')
    content.innerHTML = template
}

function tab_content(tab) {
    let html = ``;

    switch(tab) {
        case 'home':
            html = `
                <div class="home-container">
                    <h1 >Welcome to Team Group 3!</h1>
                    <h3>Let's Enjoy Collaboration</h3>

                    <p> 
                        We are a dynamic and diverse team committed to achieving excellence
                        in every project we take on. Our mission is to bring innovative
                        solutions, collaborative teamwork, and a passion for success to every challenge.
                    </p>
                </div>
            `;
            content_display(html);
            break;
        case 'members':
            html = `
                <div class="members-container">
                    <h3 class="members-title">Group Three Members</h3>

                    <div class="members">
                        <div>
                            <img src="static/img/Ajoc.jpg" alt="" class="ajoc member active" draggable="false">
                            <div class="name">
                                <h3>Prince Carl S. Ajoc</h3>
                            </div> 
                        </div>
                        <div>
                            <img src="static/img/Gudito.jpg" alt="" class="gudito member" draggable="false">
                            <div class="name">
                                <h3>Felipe Jr. Gudito</h3>
                            </div> 
                        </div>
                        <div>
                            <img src="static/img/Julve.jpg" alt="" class="julve member" draggable="false">
                            <div class="name">
                                <h3>John Andrei S. Julve</h3>
                            </div> 
                        </div>
                        <div>
                            <img src="static/img/Pagalan.jpg" alt="" class="pagalan member" draggable="false">
                            <div class="name">
                                <h3>Stefhany S. Pagalan</h3>
                            </div> 
                        </div>
                        <div>
                            <img src="static/img/Salvaleon.jpg" alt="" class="salvaleon member" draggable="false">
                            <div class="name">
                                <h3>John Mike Salvaleon</h3>
                            </div> 
                        </div>
                    </div>
                
                    <div class="member-info">
                        <div class="personal-info">
                            <div class="column">
                                <h4>Personal Information</h4>
                            </div>

                            <div class="content">
                                <ul>
                                    <li>Name : Prince Carl S. Ajoc</li>
                                    <li>Date of birth : March 13, 2003</li>
                                    <li>Phone Number: 09676877741</li>
                                    <li>Email Address: chingace471@gmail.com</li>
                                    <li>Address: P-6 San Pedro, Alegria, Surigao del Norte</li>
                                    <li>Gender : Male</li>
                                </ul>
                            </div>

                        </div>
                        <div class="education-info">
                            <div class="column">
                                <h4>Education Information</h4>
                            </div>

                            <div class="content">

                                <ul>
                                    <li>Highest Educational Attainment: College Undergraduate</li>
                                    <li>School/University Name :  Surigao del Norte State University (SNSU)</li>
                                    <li>Year Graduated or Expected Graduation: SY: 2025 - 2026</li>
                                    <li>Major/Field of Study: Bachelor of Science in Computer Science (BSCS)</li>
                                    <li>
                                        Relevant Achievements:
                                        <ul>
                                            <li>Honor student in highschool</li>
                                            <li>Academic Scholar</li>
                                        </ul>
                                    </li>
                                    <li>Certifications: Google IT Support Certification, Python Developer Certificate</li>
                                </ul>
                            </div>

                        </div>
                        <div class="other-info">
                            <div class="column">
                                <h4>Other Information</h4>
                            </div>

                            <div class="content">
                                <ul>
                                    <li>
                                        Programming Languages:
                                        <ul>
                                            <li>Python</li>
                                            <li>JavaScript</li>
                                            <li>C++</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Frameworks:
                                        <ul>
                                            <li>React</li>
                                            <li>Django</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Tools:
                                        <ul>
                                            <li>Git</li>
                                            <li>VS Code</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Hobbies and Interests
                                        <ul>
                                            <li>Coding</li>
                                            <li>Playing Guitar</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Languages Spoken:
                                        <ul>
                                            <li>English</li>
                                            <li>Filipino</li>
                                        </ul>
                                    </li>
                                    <li>Personal Motto or Goals:<br><strong>"Error is the way of achieving opportunities".</strong></strong></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;
            content_display(html);
            initializeMembers()
            console.log('test')
            break;
        case 'about':
            console.log('About');
            break;
    }
}

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const btn_unique_classname = event.target.classList;
        const tabButtons = document.querySelectorAll('.tab-button');

        // Remove active class from all buttons
        tabButtons.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active')

        tab_content(btn_unique_classname[1])
    })
});