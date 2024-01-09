import { Form, useLoaderData } from 'react-router-dom';
import './admin-form.css';
import { useState } from 'react';
const AdminForm = ()=>{
    const {article} = useLoaderData();
    console.log(article.date);
    const [img, setImg] =useState(`https://tpll-31oj.onrender.com/${article.image}`);
    const [imgtoSubmit,setImgtoSubmit]=useState(null);
    const handleEditImg = (e)=>{
        if(e.target.files[0]){
            setImgtoSubmit(e.target.files[0]);
            const formData = new FormData();
            formData.append('image', imgtoSubmit);
        }
const file = e.target.files[0];
const reader = new FileReader();

reader.onloadend = () => {
console.log(reader.result);

  setImg(reader.result);
};
if (file) {
    reader.readAsDataURL(file);
  } else {
    setImg(`https://tpll-31oj.onrender.com/${article.image}`);
  }
    }

    return(
        <>
        <div className="form--flex">
        <Form method='PATCH'>
        <div className="form--body">
            <label htmlFor="title">Title</label>
            <input defaultValue={article.title} type="text" name='title' placeholder='title' autoFocus/>
            <div className="file--flex">
            <label htmlFor="">Image </label>
  <input className="hidden" type="file" id="image" name="image" onChange={handleEditImg}/>
  <label
    className="file--input text-black px-4 py-1 text-sm bg-white border-[1px] border-[rgb(221,221,221)] hover:border-black rounded-3xl flex items-center"
    htmlFor="image"
  >
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: 16,
        width: 16,
        stroke: "currentcolor",
        strokeWidth: 4,
        overflow: "visible"
      }}
    >
      <path d="m2 16h28m-14-14v28" />
    </svg>
    <span>Edit photo</span>
  </label>
  </div>
  <img src= {img} width={350} height={300} alt="" />
  <label htmlFor="date">Date</label>
  <input defaultValue={article.date} type="date" name='date'  />
            <label htmlFor="body">Content</label>
            <textarea defaultValue={article.body} rows={10} name='body' className={`form-textarea `} >

            </textarea>
                <button type='submit' className="form-send-btn">Send</button>
           </div>
           </Form>
           </div>
        </>
    );
}
export default AdminForm;