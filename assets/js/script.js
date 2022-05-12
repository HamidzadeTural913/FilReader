let input = document.querySelector(".SelectImg")

let row = document.querySelector(".row")

let click = document.querySelector(".clickBtn")

let tables = document.querySelector(".tables")

let zone = document.querySelector(".drughere")

let td2 = document.querySelector(".td2")
let td3 = document.querySelector(".td3")

let btn = document.querySelector(".clickDelete")




click.addEventListener("click",()=>{
    input.click();
    
})


input.addEventListener("change",(e)=>{
    // let files = Array.from(e.target.files);

    let files = Array.from(e.target.files)
    
    
    td2.innerText = e.target.files[0].name
    td3.innerText = e.target.files[0].size
    // document.write(e.target.files[0].name);
    // document.write(e.target.files[0].size);
    
    files.forEach(file => {
        ShowImg(file)
    });
})


function ShowImg(file) {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file)

    fileReader.addEventListener("loadend",()=>{

        
        tables.classList.add("d-block");


        // let tables = document.createElement("table");
        // row.appendChild(tables);

        // let theads = document.createElement("thead")
        // tables.appendChild(theads)

        // let trow = document.createElement("tr")
        // theads.appendChild(trow);

        //      let thead = 4;
        //      for (let i = 0; i < thead; i++) {
        //      const element = document.createElement('th');
        //      trow.appendChild(element);

        //      thead.
        // }



        let img = document.createElement("img")
        img.src = fileReader.result;



    })
}

zone.addEventListener("dragover",(e)=>{

    e.preventDefault();
})

zone.addEventListener("drop",(e)=>{

   
    e.preventDefault();

  let files = Array.from(e.dataTransfer.files);

    files.forEach((file) => {
        ShowImg(file)
       document.write(e.target.files[0].name);
        document.write(e.target.files[0].size);
    });

    
})

btn.addEventListener("click",()=>{
    let result = confirm("Are you sure?")
    if (result) {
        tables.remove();
    }
})