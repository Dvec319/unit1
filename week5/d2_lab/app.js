// Step 1 - We need a call that inherits from HTMLElement
class FirstComponent extends HTMLElement {

    // define a constructor to manipulate the node on creation
    constructor(){
        // must call the parent constructor first
        super()
        // create a shadowDOM to insulate styling
        this.attachShadow({mode: "open"})
        // grab the value from the attribute
        const word = this.getAttribute("word")
        // "this" is the DOMNode
        this.shadowRoot.innerHTML = `<button>${word}</button>
        <style>
        button {
            border: green;
            background-color: black;
            color: white;
            padding: 10px;
        }
        
        </style>

        `
    }

}

// Step 2 - Register the element with the browser
// <first-element></first-element>
customElements.define("first-element", FirstComponent)