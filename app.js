const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Peter");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }
    
    else if(message.includes('who are you')) {
        const finalText = "I am an Ai Assistant made by Bhavesh Pawar";
        speech.text = finalText;
    }


    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('who made you')) {
        const finalText = "My Boss Bhavesh Pawar made me for their help";
        speech.text = finalText;
    }

    else if(message.includes('what is your work')) {
        const finalText = "My work is to give all information to my boss";
        speech.text = finalText;
    }

    else if(message.includes('who is your boss')) {
        const finalText = "Bhavesh Pawar";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is Peter";
        speech.text = finalText;
    }

    else if(message.includes('who is bhavesh pawar')) {
        const finalText = "Bhavesh Pawar is my boss who is the student of software development";
        speech.text = finalText;
    }
    
    else if(message.includes('who is jarvis')) {
        const finalText = "jarvis is an Ai assistant made by my boss Bhavesh Pawar";
        speech.text = finalText;
    }
    // else if(message.includes('who is niddhi mam')) {
    //     const finalText = "Niddhi mam is the professor of Bhavesh Pawar in Thakur College";
    //     speech.text = finalText;
    // }
    
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    
    else if(message.includes('open github')) {
        window.open("https://github.com", "_blank");
        const finalText = "Opening Github";
        speech.text = finalText;
    }
    
    else if(message.includes('open notepad')) {
        window.open("notepad.html", "_blank");
        const finalText = "Opening Notepad";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }
    else if(message.includes('open chat gpt')) {
        window.open("https://chatgpt.com", "_blank");
        const finalText = "Opening ChatGPT";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "boss I found some search for you";
        speech.text = finalText;
    }
    
    else if(message.includes('I want') || message.includes('Give me') || message.includes('Make Me')) {
        window.open(`https://chatgpt.com`, "_blank");
        const finalText = "boss I some found search for you ";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "boss I found some information for you ";
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('which day is today')) {
        const date = new Date().toLocaleString(undefined, {weekday: 'options'})
        const finalText = day;
        speech.text = finalText;
    }

    else if(message.includes('VSCODE')) {
        window.open('VS Code:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "boss I found some search for you";
        speech.text = finalText;
    }
    

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}