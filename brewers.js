document.addEventListener('DOMContentLoaded', () => {
    // 1. Action Buttons
    const buttons = {
        btnStory: "Loading Community Story...",
        btnDash: "Opening Impact Dashboard...",
        btnFund: "Opening Funding Request Form..."
    };

    Object.keys(buttons).forEach(id => {
        document.getElementById(id).onclick = () => alert(buttons[id]);
    });

    // 2. Story Carousel Logic
    const stories = [
        {
            text: "BCF funding supported City Year Milwaukee's in-school tutoring and mentorship programs, helping over 250 students.",
            img: "https://www.cityyear.org/wp-content/uploads/2020/05/City-Year-Logo-Horizontal-RGB.png"
        },
        {
            text: "Our partnership with local food banks provided over 15,000 meals to families in the Milwaukee area this year.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Circle-icons-food.svg/1200px-Circle-icons-food.svg.png"
        }
    ];

    let currentStoryIndex = 0;
    const storyText = document.getElementById('storyText');
    const partnerImg = document.querySelector('.partner-logo img');

    function updateStory(index) {
        storyText.style.opacity = 0;
        setTimeout(() => {
            storyText.innerText = stories[index].text;
            partnerImg.src = stories[index].img;
            storyText.style.opacity = 1;
        }, 200);
    }ssssssss

    document.getElementById('storyNext').onclick = () => {
        currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        updateStory(currentStoryIndex);
    };

    document.getElementById('storyPrev').onclick = () => {
        currentStoryIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
        updateStory(currentStoryIndex);
    };

    // 3. Footer Tab Switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        };
    });
});