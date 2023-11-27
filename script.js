const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0d1ca3d6bmshff0eadb13f56336p18e675jsn64620d11aefa',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};
async function bhagavadgita(){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const index = Math.floor((Math.random() * 10) + 1);
    console.log(result[index])
    const Chapter_number = result[index].chapter_number
    console.log(Chapter_number);
    document.getElementById("chapternumber").innerHTML = Chapter_number;
    const Chapter_summary = result[index].chapter_summary
    console.log(Chapter_summary);
    document.getElementById("chaptersummary").innerHTML = Chapter_summary;
    const Chapter_summary_hindi = result[index].chapter_summary_hindi
    console.log(Chapter_summary_hindi);
    document.getElementById("chaptersummaryh").innerHTML = Chapter_summary_hindi;
    const Name = result[index].name
    console.log(Name);
    document.getElementById("name").innerHTML = Name;
    const Name_meaning = result[index].name_meaning
    console.log(Name_meaning)
    document.getElementById("namemeaning").innerHTML = Name_meaning;
    const Name_translated = result[index].name_translated
    console.log(Name_translated)
    document.getElementById("nametranslated").innerHTML = Name_translated;
    const Slug = result[index].slug
    console.log(Slug)
    document.getElementById("slug").innerHTML = Slug;
  } catch (error) {
    console.error(error);
  }
}
bhagavadgita()



const length = Math.floor((Math.random() * 10) + 20);
const url1 = 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length
const options1 = {
    method: 'GET',
    headers: { 'X-Api-Key': 'bLR9yMazxSo8dnkrducg7w==6agOMHlwcjAIO6A3'},
};
async function randompasswordgenerator(){
  try {
    const response = await fetch(url1, options1);
    const result = await response.json();
    console.log(result);
    const Randompassword = result.random_password
    console.log(Randompassword)
    document.getElementById("randompassword").innerHTML = Randompassword;
  } catch (error) {
    console.error(error);
  }
}
randompasswordgenerator()

var limit = 3
const url2 = 'https://api.api-ninjas.com/v1/jokes?limit=' + limit
const options2 = {
  method: 'GET',
  headers: { 'X-Api-Key': 'bLR9yMazxSo8dnkrducg7w==6agOMHlwcjAIO6A3'},
};
async function randomjoke(){
  try {
    const response = await fetch(url2, options2);
    const result = await response.json();
    console.log(result);
    const Joke1 = result[0].joke
    document.getElementById("joke1").innerHTML = Joke1;
    const Joke2 = result[1].joke
    document.getElementById("joke2").innerHTML = Joke2;
    const Joke3 = result[2].joke
    document.getElementById("joke3").innerHTML = Joke3;
    console.log(Joke1)
    console.log(Joke2)
    console.log(Joke3)
  } catch (error) {
    console.error(error);
  }
}
randomjoke()







  
  