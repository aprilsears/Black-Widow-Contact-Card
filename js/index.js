document.addEventListener('DOMContentLoaded', () => {
    const contactCard = {
        name: 'Natasha Romanoff',
        alias: 'Black Widow',
        organization: 'Avengers',
        skills: ['Espionage', 'Combat', 'Infiltration'],
        location: 'New York',
        status: 'Active'
    };

    function renderContactCard() {
        const card = document.querySelector('.contact-card');
        if (!card) return;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-header">
                        <h2>${contactCard.name}</h2>
                        <h3>${contactCard.alias}</h3>
                    </div>
                    <div class="card-body">
                        <p><strong>Organization:</strong> ${contactCard.organization}</p>
                        <p><strong>Location:</strong> ${contactCard.location}</p>
                        <p><strong>Status:</strong> ${contactCard.status}</p>
                    </div>
                    <p class="flip-prompt">Click to see skills</p>
                </div>
                <div class="card-back">
                    <div class="skills">
                        <h3>Skills</h3>
                        <ul>
                            ${contactCard.skills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                    <p class="flip-prompt">Click to flip back</p>
                </div>
            </div>
        `;
    }

    // Toggle card flip animation
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('flip-prompt')) {
            const card = e.target.closest('.contact-card');
            if (card) {
                card.classList.toggle('is-flipped');
            }
        }
    });

    renderContactCard();
});