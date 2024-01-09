import { Link, useLoaderData } from 'react-router-dom';
import '../News.css';
import { Form } from 'react-router-dom';


 const AdminArticles = () =>{
    const articles = useLoaderData();
    
    return (
        <>
        <div className="other-pages">

        {articles.map(ar=>{
            return <AdminArticle key={ar._id} ar={ar}/>
        
        })}
        </div>

        </>
    )
}
 export const AdminArticle = ({ar})=>{
    const handleConfirmDeletion = (e) =>{
        if (
            !confirm(
              "Please confirm you want to delete this record."
            )
          ) {
            e.preventDefault();
          }
    }
    return(
    <div className="post-card">
            <article>
                <div className="card-img">
                <img src={`https://tpll-31oj.onrender.com/${ar.image}`} alt="" />
                </div>
                <div className="post-card--body">
                    <h3>{ar.title}</h3>
            <div className="line-separator"></div>
            <div className="admin-article-control">
                <Link to={`${ar._id}/edit`} className="admin-edit--button">
                    <p>Edit</p>
                </Link>
                <Form method='DELETE' action={`${ar._id}/delete`}>
                <button  onSubmit={handleConfirmDeletion} type='submit' className="admin-delete--button">
                    <p>Delete</p>
                </button>
                </Form>
             
                            
            </div>  
                </div>

            </article>
        </div>
    );

}
export default AdminArticles;
