const testimonials = [
    {
        name: "Henriette O.",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "I just can't get enough of apple. I want to get a T-Shirt with apple on it so I can show it off to everyone. Just what I was looking for. Apple is the most valuable business resource we have EVER       purchased. I wish I would have thought of it first."

    },
    {
        name: "Leanne L.",
        photoUrl: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
        text: "I was amazed at the quality of apple. Dude, your stuff is the bomb! We have no regrets! The service was excellent."

    },
    {
        name: "Elladine E.",
        photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Apple is great. Apple is the real deal! It's incredible. We've used apple for the last five years."

    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if(index === testimonials.length) {
        index = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 5000)
}