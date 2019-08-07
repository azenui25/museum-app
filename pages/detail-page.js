// add event handler
function submitComment() {
    //gather data
    const inputField = document.getElementById('name')
    console.log(inputField)
    const name = inputField
    console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)

    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adjust the element we created
    h3.innerHTML = `${name}`
    said:
        p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)

    // display the element on the page 
    const commentSection = document.getElementById('comment')
    console.log(commentSection)
    commentSection.appendChild(comment)

    // reset form values
    inputField.value = null
    textArea.value = null
}