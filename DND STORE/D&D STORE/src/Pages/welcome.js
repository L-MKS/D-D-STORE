import "./welcome.css"

function Welcome(){
    return (<>

        <div className ="InvisibleBox">
            <div className="welcomeBox">
                <h1>WELCOME TO D&D STORE!</h1>
                <h3>Who are us?</h3>
                <p className="text">This is not a real store! This is a React project made by Lucas Merlin for the Digital Innovation One Bootcamp. My goal is to simulate a dungeons and dragons materials virtual store's page, where there're its products, cart informations and customer support. Feel free to explore all features, they are made only for illustrative purposes! </p>
            </div>
        </div>
    </>)
}

export default Welcome