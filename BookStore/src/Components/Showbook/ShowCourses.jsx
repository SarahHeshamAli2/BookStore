import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './bookshow.css'
import axios from "axios"
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { cartContext } from '../Context/CartContext';
import $, { get } from "jquery"
export default function ShowCourses() {
  const [comment, setcomment] = useState([])


  const { addToCart, load,showComment,comments ,toggleHide} = useContext(cartContext)

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [tableContent, setTableContent] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(()=>{

getProudctDetails()
toggleHide()


},[])

  async function getProudctDetails() {
    try {
      const { data } = await axios.get(`https://booklandstore.onrender.com/api/v1/products/${id}`)
      setProductDetails(data.data)
      setTableContent(data.data.tableOfContent)

    } catch (error) {
      console.log('Error :', error);

    }
  }


  async function addComment() {
    setLoading(true)
    try {
      const response = await axios.post(`https://booklandstore.onrender.com/review/addcomment`, {
        "cooment": $("#commentSec").val(),
        "isCommentOrReply": "Comment",
        "user": localStorage.getItem("userId"),
        "product": id
      })
      setLoading(false)
      if (response.status = 200) {

        console.log(response);
        $("#commentSec").val("")
        $(".postedComment").fadeIn(500, function () {
          setTimeout(() => {
            $(".postedComment").fadeOut(500)
          }, 500);
        })
      }

    } catch (error) {
      console.log("error", error)
    }

}


   return <>
    {productDetails ? <div className="page-content bg-grey">
      <section className="content-inner-1">
        <div className="container">
          <div className="row book-grid-row style-4 m-b60">
            <div className="col">
              <div className="dz-box">
                <div className="dz-media">
                  <img src={productDetails.imageCover.slice(19)} alt={productDetails.productName} />
                </div>
                <div className="dz-content">
                <div className="dz-header">
                    <h3 className="title ">{productDetails.productName}    <span className=" text-center ms-2 text-yellow ssize">
                          <i className="fas fa-star  "></i>{productDetails.ratingsAverage}
                        </span></h3>
                    <div className="shop-item-rating ">
                      <ul className="dz-rating pt-3 ">
                   
                      </ul>
                    </div>
                  </div>
                 
                  <div className="tab-pane show">
                    <table className="table border book-overview">
                      <thead>
                      <tr>
                          <th>instructor</th>
                          <td>{productDetails.authorName}</td>
                        </tr>
                        <tr>
                          <th>Publisher</th>
                          <td>{productDetails.publisher}</td>
                        </tr>

                        <tr>
                          <th>Language</th>
                          <td>{productDetails.language}</td>
                        </tr>
                       

                        <tr>
                          <th>Date Published</th>
                          <td>{productDetails.dateOfPublished}</td>
                        </tr>

                      </thead>
                    </table>
                  </div>
                  <div className="book-footer">
                    <div className="price">
                      <h5>{productDetails.price}$</h5>
                    </div>
                    <div className="product-num" onClick={function () { addToCart(productDetails._id) }}>
                      {load ? <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> : <div className="btn btn-primary btnhover btnhover2"><i
                        className="flaticon-shopping-cart-1  fa-solid fa-cart-shopping"></i>
                        <span >Add to cart</span></div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-xl-8 my-5">
              <div className="product-description tabs-site-button">
                <ul className="nav nav-tabs">
                  <li>
                    <Link data-bs-toggle="tab" to="#graphic-design-1" className="active">instructors</Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#developement-1" className="">Reviews</Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#developement-2" className="">Table of contents</Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#developement-3" className="">Sample Session</Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="graphic-design-1" className="tab-pane show active">
                    <table className="table border book-overview">
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <td>{productDetails.authorName}</td>
                        </tr>

                        <tr>
                          <th>history of his writing</th>
                          <td>
                            {productDetails.aboutAuthor}
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div id="developement-1" className="tab-pane">
                    <div className="clear" id="comment-list">
                      <div className="post-comments comments-area style-1 clearfix">
                        <div id="comment">
                          <ol className="comment-list">


                            <li className="comment odd alt thread-even depth-1 comment" id="comment-5">
                              <div className="comment-body" id="div-comment-5">


                                <div className="ms-5">
                                  <div className="me-3">
                                  <div className="row">
                                      <div className="col-12">
                                        <div className="mb-3">
                                          <textarea className="form-control" id="commentSec" rows="3" placeholder='Write your comment here'></textarea>
                                          {loading ? <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> : <button onClick={addComment} className='btn btn-primary btnhover btnhover2 my-2'>Post</button>
                                          }
                                          <div className='alert alert-success postedComment' style={{ display: "none" }}>Your comment has been posted</div>
                                        </div>
                                        <button id='showCom' onClick={function(){showComment(id)}}>show comment</button>
                                        <button onClick={toggleHide} id='hideCom'  style={{display:"none"}}>hide comment</button>
                                      </div>
                                          {comments?.length ==0 ? <div>No comments yet</div> : <>         {comments?.map((comment)=>   <div className="commentSection my-4">
                                        <h6>{comment.user.name}</h6>
                                        <p className='fw-bold'>{comment.cooment}</p>
                                        <p>{comment.createdAt.slice(0,10)}</p>
                                        <button>Reply</button>
                                      </div>)}</>  }
                          
                                    </div>
                                  </div>
                                  <div>
                                    <p>

                                    </p>
                                    <div className="row">
                                      <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample8">
                                          <div className="card card-body">
                                            <p className="comment-form-comment">
                                              <textarea id="comments" placeholder="Type Replay Here" className="form-contro"
                                                name="comment" cols="40" rows="3" required="required"></textarea>
                                            </p>
                                            <button id="submit" type="submit" className="submit btn btn-primary filled">
                                              Submit Now
                                              <i className="fa fa-angle-right m-l10"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="developement-2" className="tab-pane">
                    <div className="row">

                      <div className="col-md-12 topic ">
                        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                          data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                          {tableContent?.map((chap) => <h6 className='chapters'>
                            {chap.split("\n").join()}</h6>)}


                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="developement-3" className="tab-pane">
                    <div className="row">
                      <div className="col-md-12 topic">
                        <h4 id="simple-list-item-1">Sample Session</h4>
                        <p>
                          {productDetails.sampleOfChapter}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> : <LoadingScreen />}

  </>}

