                    // el = element
const createGallery = (el, images) => {
	
    const template = `  <img id="mainImg" src="" />
                        <h3 id="caption"></h3>
                        <input type="button" id="btnPrev" value="Prev" />
                        &nbsp;
                        <input type="button" id="btnNext" value="Next" />`;


    el.innerHTML = template;

      // STEP 1
    // Get handles on the elements we need to work with
    const mainImg = document.getElementById("mainImg");
    const caption = document.getElementById("caption");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    let currentImg = 0;



    // STEP 2
    // Create a function to display an image object
    const showImage = (imgObj) => {
        mainImg.src = imgObj.path;
        caption.innerHTML = imgObj.description;
        mainImg.alt = imgObj.description;
    }

    showImage(images[0]);

    // STEP 3
    // add an event handler function to the 'next' button
    btnNext.addEventListener("click", () => {
        currentImg++;
        if(currentImg == images.length){
        currentImg = 0;
        }
        showImage(images[currentImg]);
    });

    // STEP 4
    // add an event handler function to the 'prev' button
    btnPrev.addEventListener("click", ()=>{
        currentImg--;
        if(currentImg < 0){
        currentImg = images.length -1;
        }
        showImage(images[currentImg]);
    })



}