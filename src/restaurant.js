const createRestaurantHomePage = () =>
{
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    //create adn append image element
    const image = document.createElement('img');
    image.src = "https://media.vanityfair.com/photos/624db93288fcf914e1a594bc/master/w_1600%2Cc_limit/Steven%2520Joyce-JOS2021050D00077.jpg";
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town, Come and taste';
    pageContent.appendChild(copy)

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;