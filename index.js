
function getInput(event){
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
callApi(userInput.value);
let poemOutput = document.querySelector("#poem");
poemOutput.innerHTML = `<img src="hourglass.gif"><br />Generating poem, please wait...`;
}

function callApi(response){
  let api = `https://api.shecodes.io/ai/v1/generate?prompt=generate_a_short_poem_about_${encodeURIComponent(response)}&context=you_write_in_the_style_of_Charles_Bukowski and output in basic html without doctype&key=ff3f6c762d03ea64t3ab6978450d240o`;
 axios.get(api).then(outputPoem);
 console.log(response);
}

function outputPoem(aiPoem) {
console.log(aiPoem.data.answer);
new Typewriter("#poem", {
  strings: `${aiPoem.data.answer}<p></p><a href="https://allpoetry.com/poems/read_by/Charles%20Bukowski" target="_blank">Read the real Bukowski here</a>`,
  autoStart: true,
  loop: false,
  delay: 20,
  cursor: "",
});
}

let submitForm = document.querySelector("#submit-form");
submitForm.addEventListener("submit", getInput);

