import React from 'react'
import { Link } from 'react-router-dom'
import './bookshow.css'
export default function Showbook() {
  return <>
    <div className="page-content bg-grey">
      <section className="content-inner-1">
        <div className="container">
          <div className="row book-grid-row style-4 m-b60">
            <div className="col">
              <div className="dz-box">
                <div className="dz-media">
                  <img src={require("../../images/book16.png")} alt="book" />
                </div>
                <div className="dz-content">
                  <div className="dz-header">
                    <h3 className="title">Think and Grow Rich</h3>
                    <div className="shop-item-rating">
                      <ul className="dz-rating text-end ">
                        <li><i className="fa-solid fa-star text-yellow text-decoration-none " ></i></li>
                        <li><i className="fa-solid fa-star text-yellow"></i></li>
                        <li><i className="fa-solid fa-star text-yellow"></i></li>
                        <li><i className="fa-solid fa-star text-yellow"></i></li>
                        <li><i className="fa-solid fa-star text-muted"></i></li>
                        <li>
                          <h6 className="m-b0">4.0</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dz-body">
                    <div className="book-detail">
                      <ul className="book-info">
                        <li>
                          <div className="writer-info text-decoration-none">
                            <img src={require("../../images/profile2.jpg")} alt="book" />
                            <div><span>Auther</span>Napoleon Rich</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane show">
                    <table className="table border book-overview">
                      <tr>
                        <th>Publisher</th>
                        <td>Wepress Inc.</td>
                      </tr>

                      <tr>
                        <th>Language</th>
                        <td>English</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>520</td>
                      </tr>

                      <tr>
                        <th>Date Published</th>
                        <td>August 10th 2019</td>
                      </tr>

                      <tr>
                        <th>Number of book sold</th>
                        <td>7</td>
                      </tr>
                    </table>
                  </div>
                  <div className="book-footer">
                    <div className="price">
                      <h5>$54.78</h5>
                    </div>
                    <div className="product-num">
                      <Link to="/cart" className="btn btn-primary btnhover btnhover2"><i
                        className="flaticon-shopping-cart-1"></i>
                        <span>Add to cart</span></Link>
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
                    <Link data-bs-toggle="tab" to="#developement-2" className="">Table of contant</Link>
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
                          <td>Napoleon Rich</td>
                        </tr>

                        <tr>
                          <th>history of his writing</th>
                          <td>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint repellat error et a, rem illo
                            accusantium laborum possimus perferendis ut
                            aliquid. Cupiditate repellendus, repellat aperiam
                            voluptatum fugiat nesciunt est fugit.
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
                                      <Link className="fa fa-reply ss" data-bs-toggle="collapse" to="#multiCollapseExample2"
                                        role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span
                                          className="ms-2">reply</span>
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
                      <div className="col-md-12 topic">
                        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                          data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                          <h4 id="simple-list-item-1">Topic 1</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Laborum incidunt nam sunt
                            quisquam, unde labore nobis eveniet nisi
                            architecto rerufg fsfdsf fdds dddda iure impedit
                            molestias aliquid at error aspernatur ab!
                            <Link to="#">see More
                              <i className="fa-solid fa-angles-right"></i></Link>
                          </p>

                          <h4 id="simple-list-item-2">Topic 2</h4>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Esse, aspernatur laboriosam. Ea
                            tempora ducimus omnis, nisi consequatur amet
                            provident corrupti repudiandae minima ipsa fugit
                            vitae perspiciatis soluta iure expedita
                            reiciendis.
                            <Link to="#">
                              see More <i className="fa-solid fa-angles-right"></i></Link>
                          </p>
                          <h4 id="simple-list-item-3">Topic 3</h4>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Odio repellendus iste dolore
                            fugit possimus voluptatibus harum facilis
                            obcaecati tempora. Voluptate beatae at ipsam
                            nostrum ipsum delectus enim quae aspernatur
                            deleniti?<Link to="#">
                              see More <i className="fa-solid fa-angles-right"></i></Link>
                          </p>
                          <h4 id="simple-list-item-4">Topic 4</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem ipsa nihil asperiores iusto amet est in,
                            maiores voluptates dolore! Fugiat recusandae animi
                            repudiandae veniam dignissimos! Aliquam veritatis
                            labore consequatur unde.<Link to="#">
                              see More <i className="fa-solid fa-angles-right"></i></Link>
                          </p>
                          <h4 id="simple-list-item-5">Topic 5</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit dolorem iste, sit enim autem inventore
                            officiis aliquid libero quo iure incidunt
                            doloremque ad voluptate magni explicabo tempore
                            debitis illum. Neque!<Link to="#">
                              see More <i className="fa-solid fa-angles-right"></i></Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="developement-3" className="tab-pane">
                    <div className="row">
                      <div className="col-md-12 topic">
                        <h4 id="simple-list-item-1">Chapter 1</h4>
                        <p>
                          LIt was one of the most searing images of the
                          twentieth century: two young boys, two princes,
                          walking behind their mother’s coffin as the world
                          watched in sorrowand horror. As Diana, Princess of
                          Wales, was laid to rest, billions wondered what the
                          princes must be thinking and feeling and how their
                          lives would play out from that point on. For Harry,
                          this is that story at last. With its raw,
                          unflinching honesty, Spare is a landmark publication
                          full of insight, revelation, self-examination, and
                          hard-won wisdom about the eternal power of love over
                          grief. Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Sit sunt ad ab voluptatem. Quas,
                          quibusdam quasi, aliquam incidunt voluptas itaque,
                          quam dolorum ipsam praesentium doloremque eaque eos
                          libero at fuga.
                          <Link to="#">see More <i className="fa-solid fa-angles-right"></i></Link>
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
    </div>
  </>
}
