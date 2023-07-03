import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './bookshow.css'
import axios from "axios"
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { cartContext } from '../Context/CartContext';
import $, { get } from "jquery"
export default function Showbook() {
  const [comment, setcomment] = useState([])


  const {addToCart} = useContext(cartContext)

  const{id}= useParams();
 const[productDetails,setProductDetails] = useState(null);
 const[tableContent,setTableContent] = useState(null);

 async function addComment (){
  const response = await axios.post (`https://booklandstore.onrender.com/review/addcomment`,{
    "cooment":$("#commentFromUser").val(),
    "isCommentOrReply":"Comment",
    "user": localStorage.getItem("userId"),
    "product": productDetails._id
})
if(response.status = 200) {

console.log(response);
}
// console.log(response.status);
// console.log(response.data);

}
async function showComment() {
  const response = await axios.get(`https://booklandstore.onrender.com/review/getcomments` )
console.log(response);
}
async function getProudctDetails(){
  try {
    const {data}= await axios.get(`https://booklandstore.onrender.com/api/v1/products/${id}`)
    setProductDetails(data.data)
setTableContent(data.data.tableOfContent)
console.log(data.data);

  } catch (error) {
    console.log('Error :',error);
    
  }
}
useEffect(function(){
  getProudctDetails()



},[])
  return <>
  {productDetails? <div className="page-content bg-grey">
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
                    <h3 className="title">{productDetails.productName}</h3>
                    <div className="shop-item-rating ">
                      <ul className="dz-rating ">
                      <span className=" text-center ms-2 text-yellow">
                      <i className="fas fa-star "></i>{productDetails.ratingsAverage}
                      </span>
                      </ul>
                    </div>
                  </div>
                  <div className="dz-body">
                    <div className="book-detail">
                      <ul className="book-info">
                        <li>
                          <div className="writer-info text-decoration-none">
                            <img src={require("../../images/profile2.jpg")} alt="book" />
                            <div><span>Auther</span>{productDetails.authorName}</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane show">
                    <table className="table border book-overview">
                    <thead>
                      <tr>
                        <th>Publisher</th>
                        <td>{productDetails.publisher}</td>
                      </tr>

                      <tr>
                        <th>Language</th>
                        <td>{productDetails.language}</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>{productDetails.pages}</td>
                      </tr>

                      <tr>
                        <th>Date Published</th>
                        <td>{productDetails.dateOfPublished}</td>
                      </tr>

                      <tr>
                        <th>Number of book sold</th>
                        <td>{productDetails.sold}</td>
                      </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="book-footer">
                    <div className="price">
                      <h5>{productDetails.price}$</h5>
                    </div>
                    <div className="product-num" onClick={function(){addToCart(productDetails._id)}}>
                      <div className="btn btn-primary btnhover btnhover2"><i
                        className="flaticon-shopping-cart-1  fa-solid fa-cart-shopping"></i>
                        <span >Add to cart</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="product-description tabs-site-button">
                <ul className="nav nav-tabs">
                  <li>
                    <Link data-bs-toggle="tab" to="#graphic-design-1" className="active">Auther</Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#developement-1" className="">Reviews</Link>
                  </li>
                  <li>
                    <Link  data-bs-toggle="tab" to="#developement-2" className="">Table of content</Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#developement-3" className="">Sample of chapter</Link>
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
                        <h4 className="comments-title">4 COMMENTS</h4>
                        <div id="comment">
                          <ol className="comment-list">
                            <li className="comment even thread-even depth-1 comment" id="comment-2">
                              <div className="comment-body">
                                <div className="comment-author vcard">
                                  <img src={require("../../images/profile1.jpg")} alt="" className="avatar" />
                                  <cite className="fn">Michel Poe</cite>
                                </div>
                                <div className="comment-content dlab-page-text">
                                  <p>
                                    Donec suscipit porta lorem eget
                                    condimentum. Morbi vitae mauris in leo
                                    venenatis varius. Aliquam nunc enim,
                                    egestas ac dui in, aliquam vulputate erat.
                                  </p>
                                </div>
                                <div className="ms-5">
                                  <div className="me-3">
                                    <p>
                                      <Link className="fa-solid fa-comment ss" data-bs-toggle="collapse"
                                        to="#multiCollapseExample1" role="button" aria-expanded="false"
                                        aria-controls="multiCollapseExample1"><strong className="ms-2">Comment</strong>
                                      </Link>
                                    </p>
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                          <div className="card card-body">
                                            <p className="comment-form-comment">
                                              <div className="showComments bg-light">
                                                <h5>Name</h5>
                                                <p>Comment</p>
                                                <span>Date Of Posting</span>
                                              </div>
                                              <textarea id="commentFromUser" placeholder="Type Comment Here" className="form-contro"
                                                name="comment" cols="45" rows="3" required="required"></textarea>
                                            </p>
                                            <button onClick={addComment} id="submit" type="submit" className="submit btn btn-primary filled">
                                              Submit Now
                                              <i className="fa fa-angle-right m-l10"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <p>
                                      <Link className="fa fa-reply ss" data-bs-toggle="collapse" to="#multiCollapseExample2"
                                        role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span
                                          className="ms-2">reply</span>
                                          <button onClick={showComment}>show comment</button>
                                      </Link>
                                    </p>
                                    <div className="row">
                                      <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample2">
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
                              <ol className="children">
                                <li
                                  className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment"
                                  id="comment-3">
                                  <div className="comment-body" id="div-comment-3">
                                    <div className="comment-author vcard">
                                      <img src={require("../../images/profile3.jpg")} alt="" className="avatar" />
                                      <cite className="fn">Celesto Anderson</cite>
                                    </div>
                                    <div className="comment-content dlab-page-text">
                                      <p>
                                        Donec suscipit porta lorem eget
                                        condimentum. Morbi vitae mauris in leo
                                        venenatis varius. Aliquam nunc enim,
                                        egestas ac dui in, aliquam vulputate
                                        erat.
                                      </p>
                                    </div>
                                    <div className="ms-5">
                                      <div className="me-3">
                                        <p>
                                          <Link className="fa-solid fa-comment ss" data-bs-toggle="collapse"
                                            to="#multiCollapseExample3" role="button" aria-expanded="false"
                                            aria-controls="multiCollapseExample3"><strong className="ms-2">Comment</strong>
                                          </Link>
                                        </p>
                                        <div className="row">
                                          <div className="col-12">
                                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                              <div className="card card-body">
                                                <p className="comment-form-comment">
                                                  <textarea id="comments" placeholder="Type Comment Here"
                                                    className="form-contro" name="comment" cols="45" rows="3"
                                                    required="required"></textarea>
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
                                      <div>
                                        <p>
                                          <Link className="fa fa-reply ss" data-bs-toggle="collapse"
                                            to="#multiCollapseExample4" role="button" aria-expanded="false"
                                            aria-controls="multiCollapseExample1"><span className="ms-2">reply</span>
                                          </Link>
                                        </p>
                                        <div className="row">
                                          <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample4">
                                              <div className="card card-body">
                                                <p className="comment-form-comment">
                                                  <textarea id="comments" placeholder="Type Replay Here"
                                                    className="form-contro" name="comment" cols="40" rows="3"
                                                    required="required"></textarea>
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
                            </li>
                            <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                              <div className="comment-body" id="div-comment-4">
                                <div className="comment-author vcard">
                                  <img src={require("../../images/profile2.jpg")} alt="" className="avatar" />
                                  <cite className="fn">Ryan</cite>
                                </div>
                                <div className="comment-content dlab-page-text">
                                  <p>
                                    Donec suscipit porta lorem eget
                                    condimentum. Morbi vitae mauris in leo
                                    venenatis varius. Aliquam nunc enim,
                                    egestas ac dui in, aliquam vulputate erat.
                                  </p>
                                </div>
                                <div className="ms-5">
                                  <div className="me-3">
                                    <p>
                                      <Link className="fa-solid fa-comment ss" data-bs-toggle="collapse"
                                        to="#multiCollapseExample5" role="button" aria-expanded="false"
                                        aria-controls="multiCollapseExample1"><strong className="ms-2">Comment</strong>
                                      </Link>
                                    </p>
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="collapse multi-collapse" id="multiCollapseExample5">
                                          <div className="card card-body">
                                            <p className="comment-form-comment">
                                              <textarea id="comments" placeholder="Type Comment Here" className="form-contro"
                                                name="comment" cols="45" rows="3" required="required"></textarea>
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
                                  <div>
                                    <p>
                                      <Link className="fa fa-reply ss" data-bs-toggle="collapse" to="#multiCollapseExample6"
                                        role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span
                                          className="ms-2">reply</span>
                                      </Link>
                                    </p>
                                    <div className="row">
                                      <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample6">
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
                            <li className="comment odd alt thread-even depth-1 comment" id="comment-5">
                              <div className="comment-body" id="div-comment-5">
                                <div className="comment-author vcard">
                                  <img src={require("../../images/profile1.jpg")} alt="" className="avatar" />
                                  <cite className="fn">Stuart</cite>
                                </div>
                                <div className="comment-content dlab-page-text">
                                  <p>
                                    Donec suscipit porta lorem eget
                                    condimentum. Morbi vitae mauris in leo
                                    venenatis varius. Aliquam nunc enim,
                                    egestas ac dui in, aliquam vulputate erat.
                                  </p>
                                </div>
                                <div className="ms-5">
                                  <div className="me-3">
                                    <p>
                                      <Link className="fa-solid fa-comment ss" data-bs-toggle="collapse"
                                        to="#multiCollapseExample7" role="button" aria-expanded="false"
                                        aria-controls="multiCollapseExample1"><strong className="ms-2">Comment</strong>
                                      </Link>
                                    </p>
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="collapse multi-collapse" id="multiCollapseExample7">
                                          <div className="card card-body">
                                            <p className="comment-form-comment">
                                              <textarea id="comments" placeholder="Type Comment Here" className="form-contro"
                                                name="comment" cols="45" rows="3" required="required"></textarea>
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
                                  <div>
                                    <p>
                                      <Link className="fa fa-reply ss" data-bs-toggle="collapse" to="#multiCollapseExample8"
                                        role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span
                                          className="ms-2">reply</span>
                                      </Link>
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
                            {tableContent?.map((chap)=>   <h6 className='chapters'>
                              {chap.split("\n").join( )}

</h6>)}
                    
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="developement-3" className="tab-pane">
                    <div className="row">
                      <div className="col-md-12 topic">
                        <h4 id="simple-list-item-1">Sample Of Chapter</h4>
                        <p>
                { productDetails.sampleOfChapter}
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
    </div>: <LoadingScreen />}
   
  </>
}
