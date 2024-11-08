import '../styles/contact.css';

export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me at maverickmmsc@gmail.com or fill out the form below.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    );
  }