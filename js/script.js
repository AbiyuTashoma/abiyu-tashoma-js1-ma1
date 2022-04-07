const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = { 
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();

// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.className = "subheading";

// Question 5
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(paragraph){
    paragraph.style.color = "red";
});

// Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function logList (list){
    list.forEach(function(listItem){
        console.log(listItem.name);
    })
}

logList(cats);

// Question 8
function createCats (cats){

    let catsHtml = "";

    cats.forEach(function(cat){

        //check cats' age, assign default value if it's missing
        let catAge = cat.age;

        if (!catAge){
            catAge = "Age unknown";
        }

        //create html
        catsHtml += `
        <div>
            <h5>${cat.name}</h5>
            <p>Age: ${catAge}</p>
        </div>`;        
    })

    //return html
    return catsHtml;
}

const catsContainer = document.querySelector(".cat-container");

const catsHtml = createCats(cats);

catsContainer.innerHTML = catsHtml;