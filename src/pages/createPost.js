import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
const [title,setTitle] = useState('')
const [category,setCategory] =useState("Uncategorized")
const [description, setDesciption] = useState("")
const [thumbnail, setThumbnail] = useState("")


const modules ={
  toolbar: [
    [{'header':[1,2,3,4,5,6,false]}],
    ['bold','italic',"underline",'strike',"blockquote"],
    [{'list':"ordered"},{'list':"bullet"},{'indent':"-1"},{'indent':"+1"}],
    ['link','image'],
    ['clean']
  ]
}

const formats= [
  'header',
  "bold","italic","underline","strike","blockquote",
  'list','bullet',"indent",
  'link','image'
]

const PostCategories =["Agriculture","Art","Business", "Science","Education", "Entertainment", "Weather","Uncategorized" ]



  return (
  <section className="create-post">
<div className="container">
  <h2> Create Post</h2>
  <p className="form-error-msg">
    This is an error 
  </p>
  <form className='form create-post-form'>
    <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} autoFocus/>
    <select name="categor" value={category} onChange={e=>setCategory(e.target.value)}>
      {
PostCategories.map(cat =><option key={cat}>{cat}</option>)
      }
      </select>

      <ReactQuill modules={modules} formats={formats} value={description} onChange={setDesciption} />
     <input
                type="file"
                accept="png,jpg,jpeg"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
              <button type='Submit' className='btn primary'>Create</button>
  </form>
</div>
  </section>
  )
}

export default CreatePost
