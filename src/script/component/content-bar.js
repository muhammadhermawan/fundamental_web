class ContentBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }


    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        
        #content {
            float: left;
            width: 75%;
         }
         
        .card {
            box-shadow: 0 4px 8px 0 rgba(70, 69, 69, 0.2);
            border-radius: 5px;
            padding: 30px;
            margin-top: 20px;
        }

        .card_article {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
        }

        .article_content p {
            text-align: justify;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
            font-family: 'Quicksand', sans-serif;
        }

        * {
            box-sizing: border-box;
        }

        h2 {
            font-family: 'Quicksand', sans-serif;
            padding-left: 20px;
            padding-top: 20px;
        }

        @media screen and (max-width: 1000px) {
            #content,
            aside {
                width: 100%;
                padding: 0;
            }
         }
        
        </style>
        <article id="food" class="card_article">
                <h2>Meal</h2>
                <div class="article_content">
                    <p>
                    A meal is an eating occasion that takes place at a certain time and includes prepared food.[1][2] The names used for specific meals in English vary, depending on the speaker's culture, the time of day, or the size of the meal.
                    </p>
                    <p>
                    Meals occur primarily at homes, restaurants, and cafeterias, but may occur anywhere. Regular meals occur on a daily basis, typically several times a day.
                    </p>
                    <p>
                    Special meals are usually held in conjunction with such occasions as birthdays, weddings, anniversaries, and holidays. A meal is different from a snack in that meals are generally larger, more varied, and more filling than snacks.[3]
                    </p>
                    <p>Source: wikipedia.com</p>
                </div>    
        `;
    }
}

customElements.define("content-bar", ContentBar);