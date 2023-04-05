# Quill

[Quilljs]https://quilljs.com/


# What does Quill do: 
Quill is a rich text editor and it allows to bold, underline, etc within the a text document. 
Quill is like google docs but within a chat. For example, you could create a blog post and have Quill to edit your text. Another thing is you could use Quill as a cross platform on your devices.

make instuctions for Quill

# First Step: Importing all the data:

# 1. NPM 

npm install quill 

# 2. Direct Downloand

[github]https://github.com/quilljs/quill/releases/tag/v1.3.6


# 3. We need to import these scripts to make them to work within the HTML
```js
// Main Quilljs
<script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
<script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>


// Stylesheets
<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet">
```

Making the toolbar within the body of the html
```js 
 
<div id = "toolbar"></div>
<button id ="btnSave" >Save</button> // we can save the information
<button id ="btnSubmit" >Submit</button>
<script>
    let toolbarOptions = [
        [{'bold', 'italic', 'underline', 'strike'}],
        [{'blockquote', 'code-block'}],
        [{'header' : 1}, {'header' : 2}], 
        [{'list' : 'ordered'}, {'list': 'bullet'}],
        [{'script' : 'sub'}, {'script', 'super'}], 
        [{'indent': '-1'}, {'indent': '+1'}], // these are tabs
        [{'direction': 'rtl'}], // this is the direction of the code so you can write on the right to left on the screen.
        [{'size': ['small', false, 'large', 'huge']}], // changing the font size.
        [{'link', 'image', 'video', 'formula'}] // we can create an link, image, video, formula to the text editor.
        [{'color' : []}, {'background': []}], // change the color of the font and background
        [{'font': []}], // adds about three fonts but you can add more
        [{'align': []}]

    ];
    let quill = new Quill('#editor', {
        modules: {
            toolbar: toolbarOptions // getting the tool bar into the options of toolbarOptions
        }, 
        theme: "snow" 
    });


    ('#btnSave').click(()=> {
       window.btnSave = quill.getContents();
       console.log(btnSave); // we can save the information to a data for your blog.
       // We can use the commend in the console log and we type: quill.setContents(windows.btnSave);
    });



</script> 
  
```

if someone has a blog for coding and they want to write raw html on the blog they can use the code block

```js 
'code-block' 
```


Making the editor 
```js
<div id = "editor"></div>  
```
Note to self: make notes about the code

# The very basics of Quilljs

```js
// you can add new things upon this code up this is the most basic.
let basicEditor = new Quill("#basic-editor");
basicEditor.addModule('toolbar', {
    container: "#basic-toolbar" 
})
```
This will include font sizes, bold, and italic.




