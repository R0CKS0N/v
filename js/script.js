let speechRecognition = window.webkitSpeechRecognition

let recognition = new speechRecognition() 

let textbox = $("#textbox")

let instructions = $("#instructions")

let content = ''

recognition.continuous = true

recognition.onstart = function () {
    instructions.text("Voice Recognition is on")    
}

recognition.onspeechend = function () {
    instructions.text("Voice Recognition is off")
}

recognition.onerror = function () {
    instructions.text("Try Again")
}

recognition.onresult = function () {
    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript

    content += transcript

    textbox.Val(content)
}

$("#start-btn").click(function (event) {
    if(content.length) {
        content += ''
    }

    recognition.start()
})