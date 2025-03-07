const dailyMotivation = document.createElement("p");
dailyMotivation.textContent = "Whatever you do always give 100%. Unless you're donating blood.";

const main = document.querySelector('#main');
const button = document.querySelector('#click-me');
button.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";
    main.appendChild(dailyMotivation); 
});

const memes = [
    { name: "uiiai cat", url: "https://youtu.be/ZHgyQGoeaB0?si=z0GvV4Nrk-vNaZkr" },
    { name: "pov cat nginep di rumah temen", url: "https://youtu.be/CWCPzDQrCno?si=9gNlaO67JxNZ6lSu" },
    { name: "funniest meme ever", url: "https://images.app.goo.gl/gzP99gTNUtyLUPLS8" },
    { name: "uiiai remix", url: "https://youtu.be/E7Oxrl8o--Y?si=4ylitWoOHd5nblA7" },
    {name: "sad hamster", url: "https://youtu.be/b3rNUhDqciM?si=0Ige4Z5pgL3Y7piA"},
    {name: "arab core", url: "https://youtu.be/v7pxDtIqPZ0?si=KZJTIfCv3Dw7ejx1"},
    {name: "indonesian core", url: "https://youtube.com/shorts/aiXNp8iptag?si=mCaQ1BSSaSD6sIHH"},
    {name: "indonesian core vol. 2", url: "https://youtu.be/eIWP3UmQNJI?si=_mFTkiQPuZytE-tx"},
];

function showMemeButtons() {
    memes.forEach(meme => {
        const memeButton = document.createElement("button");
        memeButton.textContent = meme.name;
        // class di style.css nya
        memeButton.classList.add("meme-button"); 
        memeButton.addEventListener("click", () => {
            window.open(meme.url, "_blank");
        });

        main.appendChild(memeButton);
    });
}

showMemeButtons();

const memeContainer = document.getElementById("meme-container");
const memeImage = document.getElementById("meme-image");

async function getRandomMeme() {
    try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();

        if (data.success) {
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];

            memeImage.src = randomMeme.url;
            memeImage.alt = randomMeme.name;
        } else {
            alert("Failed to fetch memes!");
        }
    } catch (error) {
        console.error("Error fetching memes:", error);
        alert("Error fetching meme, please try again!");
    }
}

document.getElementById("get-random-meme").addEventListener("click", getRandomMeme);