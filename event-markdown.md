# Event Handling

While your event handling, you are grabbing the class and trying to manipulate the data or make your webpage more interactive. Within these bracket, you will tell what type of a event listener you want. The types you could load, mousemover, select, submit, etc.

const button = document.querySelector("btn")

button.onclick = () => {
    console.log("clicked")
}

Let's break this down
--------------------------------
const button = document.querySelector("btn")

The first thing we will look is constant which is "const" in the code. The const can't change so we can use this in grabbing the buttons value. The document is inside the webpage and the query is a request for data or from the database. In this example, it's from the webpage and we request the buttons value which is btn and the period is the return the first element within the document that matches the specified selector or group of selectors.
for example, the first element is with class ="btn";


button.onclick = () => {
    console.log("clicked")
}
We are grabbing the constant named button. We have the onclick which is active when you click the button.

What is this () => ?
This is called an arrow function and we are going to pass through a parameter or parameters or nothing.
within the brackets we have a console log. If we press F12 we can look the code on the page and the console.



the same thing as -->

button.addEventListener("click", evt => {
    console.log(evt)
})

This is same thing but it is structured differently. We are using the same button from the top of the page. 

AddEventListener
We are listening for an event that is "click" occurs when someone clicks on the button. We see an arrow function again but it has a parameter named evt becuase this event is placed into the button. Next we are console logging it.


you would be console logging whatever the evt is.. if you click on the button on the website it will console log the event or you keep track of this data inside a database so you would know whatever you want to know.

The event is what is getting passed through the method which is evt.

Note: Each event handler has one but a second one can be made then it will override the first event handler and the event listener can have many.

Within the event you could capture the event.... Like this

button.addEventListener("click", evt => {
    console.log(evt)
} capture: true)

the capture is default as false so you would need to capture it to be true. Next would be happening is moving down the list to the body then div then div then div.... if this has multi layers
<div>
	<div>
		<div>
				
		</div>
	</div>
</div>

The one we haven't used in event handling is blur and it takes the focus off from the element.

const searchBox = document.querySelector("searchBox")
searchBox.addEventListener("blur" => {
    let input = this.value
})



these are the website I used to help me to understand this code.. I used youtube also we I like to listen.

https://www.w3schools.com/jsref/met_html_blur.asp
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events


