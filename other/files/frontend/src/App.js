import { useState } from 'react'
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

    const data = new FormData()

    data.append('email', email)
    if(file) {
      data.append('profilePicture', file, file.name)
    }

    // const response = axios({
    //   method: 'POST',
    //   baseURL: 'http://localhost:8000',
    //   url: '/users/profile',
    //   data,
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
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
      </form>
      {image && (
        <img
          src={image}
          alt="preview"
        />
      )}
      <button>Create profile</button>
    </div>
  );
}

export default App;
