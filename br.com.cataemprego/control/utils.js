export default class {

    createButton(inputId, buttonClass, text) {
    /**
     * Creates a button element
     * 
     * @param inputId the button id
     * @param buttonClass the css class used to style button
     * @param text the button text to be seen in UI
     * 
     * @return button a button element
     */
    var button = document.createElement("button");
    button.classList.add(buttonClass);
    button.innerText = text;
    button.id = inputId;

    return button;
}

}