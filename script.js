async function loadPosts(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    console.log(json);
    } catch (error){
        console.error(error);
    }
    document.addEventListener("click", function loadPosts(){
        console.log("clicked");  
    })
    const posts = '';
    const listPosts = posts.map(sortPosts);
    function sortPosts(posts){
        return `<li>${posts.title}</li>`;
        return `<li>${posts.body}</li>`;
        document.getElementById(posts).innerHTML = listPosts;
    }
    }