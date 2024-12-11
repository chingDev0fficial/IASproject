function initializeMembers() {
    function content(template) {
        const content = document.querySelector('.member-info');
        content.innerHTML = template;
    }
    
    function member_info(name) {
        switch(name) {
            case 'ajoc' :
                content(`
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
                                <li>Personal Motto or Goals:<br><strong>"Keep calm and play girls".</strong></strong></li>
                            </ul>
                        </div>
                        
                    </div>
                `);
                break;
            case 'gudito' :
                content(`
                    <div class="personal-info">
                        <div class="column">
                            <h4>Personal Information</h4>
                        </div>
    
                        <div class="content">
                            <ul>
                                <li>Name : Felipe Jr. H. Gudito</li>
                                <li>Date of birth : March 8, 2003</li>
                                <li>Phone Number: 09661776312</li>
                                <li>Email Address: part4@gmail.com</li>
                                <li>Address: 123, Taft Surigao City, Philippines</li>
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
                                        <li>Gaming</li>
                                        <li>Photography</li>
                                        <li>Coding</li>
                                        <li>Traviling</li>
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
                `);
                break;
            case 'julve':
                content(`
                    <div class="personal-info">
                        <div class="column">
                            <h4>Personal Information</h4>
                        </div>
    
                        <div class="content">
                            <ul>
                                <li>Name : John Andrei S. Julve</li>
                                <li>Date of birth : March 8, 2003</li>
                                <li>Phone Number: 09661776312</li>
                                <li>Email Address: part4@gmail.com</li>
                                <li>Address: 123, Taft Surigao City, Philippines</li>
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
                                        <li>Gaming</li>
                                        <li>Photography</li>
                                        <li>Coding</li>
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
                `);
                break;
            case 'pagalan' :
                content(`
                    <div class="personal-info">
                        <div class="column">
                            <h4>Personal Information</h4>
                        </div>
    
                        <div class="content">
                            <ul>
                                <li>Name : Stifhany D. Pagalan</li>
                                <li>Date of birth : September 2, 2004</li>
                                <li>Phone Number: 09107912825</li>
                                <li>Email Address: stifhany38@gmail.com</li>
                                <li>Address: Brgy. Cagniog, Surigao City</li>
                                <li>Gender : Female</li>
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
                                        <li>Java</li>
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
                                        <li>Watching movies</li>
                                        <li>Traveling</li>
                                        <li>Coding</li>
                                    </ul>
                                </li>
                                <li>
                                    Languages Spoken:
                                    <ul>
                                        <li>English</li>
                                        <li>Filipino</li>
                                    </ul>
                                </li>
                                <li>Personal Motto or Goals:<br><strong>"Never give up".</strong></strong></li>
                            </ul>
                        </div>
                        
                    </div>
                `);
                break;
            case 'salvaleon' :
                content(`
                    <div class="personal-info">
                        <div class="column">
                            <h4>Personal Information</h4>
                        </div>
    
                        <div class="content">
                            <ul>
                                <li>Name : John Mike T. Salvaleon</li>
                                <li>Date of birth : November 25 2003</li>
                                <li>Phone Number: 09067346149</li>
                                <li>Email Address: mikesalvaleon270@gmail.com</li>
                                <li>Address: Kumintang, Cagpangi, Brgy. Mat-i,  Surigao City, Philippines </li>
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
                                        <li>Java</li>
                                        <li>JavaScript</li>
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
                                        <li>Watching movies</li>
                                        <li>Traveling</li>
                                        <li>Coding</li>
                                    </ul>
                                </li>
                                <li>
                                    Languages Spoken:
                                    <ul>
                                        <li>English</li>
                                        <li>Filipino</li>
                                    </ul>
                                </li>
                                <li>Personal Motto or Goals:<br><strong>"Imperfection ignites progress".</strong></strong></li>
                            </ul>
                        </div>
                        
                    </div>   
                `);
        }
    }
    
    document.querySelectorAll('.member').forEach(image => {
        image.addEventListener('click', (event) => {
            const members = document.querySelectorAll('.member');
    
            members.forEach((member) => member.classList.remove('active'))
            event.target.classList.add('active')
            member_info(event.target.classList[0])
        })
    })
};