import { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [email, setEmail] = useState('')

  function selectImage(e) {
    setFile(e.target.files[0])
    generatePreview(e.target.files[0])
  }

  function generatePreview(file) {
    // const fileReader = new FileReader()

    // eventListeners
    // fileReader.onload = e => setImage(e.target.result)
    // fileReader.onerror = e => console.log(fileReader.error)

    // fileReader.readAsDataURL(file)

    const result = URL.createObjectURL(file)
    setImage(result)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    console.log('hola')
    const data = new FormData()

    data.append('email', email)
    if(file) {
      data.append('profilePicture', file, file.name)
    }

    const response = axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/users/profile',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log(response)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="file">File</label>
        <input
          type="file"
          id="file"
          multiple
          onChange={selectImage}
          accept="image/*"
        />
        <button>Create profile</button>
      </form>
      {image && (
        <img
          src={image}
          alt="preview"
        />
      )}
    </div>
  );
}

export default App;
