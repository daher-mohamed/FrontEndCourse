function createUser(user){
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>
        `;
        return userDiv;
}

function createPost(post){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <strong>${post.title}</strong><br>
        ${post.body}
    `
    return postDiv;
}

const url = 'https://jsonplaceholder.typicode.com';
function featchURL(){
    fetch(`${url}/users`)
    .then(response=>{
        if(!response.ok){
            throw new Error('the response field');
        }
        return response.json();
    })
    .then(users=>{
        const usersDiv = document.getElementById('users');
        users.forEach(element => {
            const userDiv = createUser(element)
            usersDiv.appendChild(userDiv);
            featchPostsUsers(element.id, userDiv.querySelector('.posts'));
        });
    })
    .catch(error=>{
        console.error('ther is error',error);
    })
}

function featchPostsUsers(userId, postCon){
    fetch(`${url}/posts?userId=${userId}`)
    .then(response=>{
        if(!response.ok){
            throw new Error('the response field');
        }
        return response.json();
    })
    .then(post=>{
        if(post.length > 0){
            const postH = document.createElement('h3');
            postH.textContent = 'posts';
            postCon.appendChild(postH);
            post.forEach(p=>{
                const Pdiv = createPost(p);
                postCon.appendChild(Pdiv);
            })
        }
    })
    .catch(error => {
        console.error(`Error fetching posts for user ${userId}:`, error);
    });
}
featchURL();