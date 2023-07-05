import React from "react"
import './Contact.css'

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      };
    return (
        <div className="main-component contact-form">
            <form onSubmit={handleSubmit}>
            <label htmlFor="">
                    <input 
                        type="text"
                        placeholder="Nom"
                        className="gradiant-border"
                    />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        placeholder="Prénom"
                        className="gradiant-border"
                    />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        placeholder="Entreprise"
                        className="gradiant-border"
                    />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        placeholder="Message"
                        className="gradiant-border"
                    />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        placeholder="Email"
                        className="gradiant-border"
                    />
                </label>
            </form>
            <button className="search-button gradiant-border" type="submit">
                Envoyer
            </button>
        </div>
    );
};

export default Contact;