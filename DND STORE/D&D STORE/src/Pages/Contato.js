import { useState, useEffect } from 'react';
import "./Contato.css"

const Contatos = () => {

    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
    }  

    return(
        <div className='Box'>
            <div className='textField'>
                <h2>Please, send us a message!</h2>
                <input className="input" placeholder="E-mail" id="name" label="Name" value={author} onChange={(event)=>{setAuthor(event.target.value)}}/>
                <input className="input" placeholder="Message" id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}}/>

                {validator && 
                    <div className="alert" role="alert">
                        <strong>Please, set your name and message before sending!</strong>
                    </div>
                }

                {success && 
                    <div className="alert" role="alert">
                        <strong>Thanks for sharing your opinion with us!</strong>
                    </div>
                }

                <button className='sentButton' onClick={sendMessage}>Sent</button>

            </div>

            <div className='contactBox'>
            {message.map((content) => {
                return(
                    <div key={content.id}>
                        <div className='textBox'>
                            <h5 className="email">{content.email}</h5>
                            <p className="message">{content.message}</p>
                            <p className="postDate"><small className="text-muted">{content.created_at}</small></p>
                        </div>
                    </div>
                )
            } )}
            </div>

        </div>
    )
}

export default Contatos;
