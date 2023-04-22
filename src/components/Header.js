import React from 'react'

const Header = () => {
  return (
<div>
    <header className='header p-3 position-absolute start-0 top-0 end-0 '>
        <div className='d-flex justify-content-between align-items-center'>
            <a href="/" className='text-decoration-none text-white fs-2 fw-bold'>TheBookWorm</a>
            <button className='navbar-toggler text-white' type="button" aria-controls='navbar' 
            data-bs-toggle="collapse" data-bs-target="#navbar" aria-expanded="false" >
                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" 
                fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" 
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </div>
    </header>
    <nav className='collapse navbar-collapse dropdown-nav' id='navbar'>
      <div className='container-xxl d-flex justify-content-center align-items-start align-items-md-center' 
      style={{height:'100vh', padding:'0 1rem',}}>

{/* navbar section start */}

        <div className='row align-items-start'>
            <div className='col-12 col-md-4 mt-4 '>
              <a href="#" className='row text-decoration-none'>
                <div className='col-2 col-md-12 mb-4'>
                  <img src="./navbarimage01.jpg" alt="straell job"  className='img-fluid'
                  style={{maxWidth: '100%', height: 'auto',}}  />
                </div>
                <div className='col-10 col-md-12'>
                  <h3>Straell's achievement</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Learn more <span><i class="bi bi-arrow-right-short"></i></span></p>
                </div>
              </a>
            </div>
            <div className='col-12 col-md-4 mt-4 '>
              <a href="#" className='row text-decoration-none'>
                <div className='col-2 col-md-12 mb-4'>
                  <img src="./navbarimage02.jpg" alt="straell job"  className='img-fluid'
                  style={{maxWidth: '100%', height: 'auto',}}  />
                </div>
                <div className='col-10 col-md-12'>
                  <h3>Essence of Books</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Learn more <span><i class="bi bi-arrow-right-short"></i></span></p>
                </div>
              </a>
            </div>
            <div className='col-12 col-md-4 mt-4 '>
              <a href="#" className='row text-decoration-none'>
                <div className='col-2 col-md-12 mb-4'>
                  <img src="./navbarimage03.jpg" alt="straell job"  className='img-fluid'
                  style={{maxWidth: '100%', height: 'auto',}}  />
                </div>
                <div className='col-10 col-md-12'>
                  <h3 >Our Stores</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Read more <span><i class="bi bi-arrow-right-short"></i></span></p>
                </div>
              </a>
            </div>
        </div>

        {/* navbar section end */}

      </div>
    <button className='navbar-toggler text-dark dropdown-nav-closeNavBtn' type="button" aria-controls='navbar' 
            data-bs-toggle="collapse" data-bs-target="#navbar" aria-expanded="false" >
                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
    </nav>

    <section className='hero'>
        <img src="./images/Bookstore01.jpg" alt="hero image" className='hero-image'/>
        <div className='layover'></div>
        <div className=' hero_content container-custom'>
          <div className='text-white'>
          <h1 className='hero_heading mb-4 fw-bold'>Discover The Real RealEstate</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto dignissimos facere?</p>
          <a href="#" className=' btn btn-lg  btn-outline-light mt-2' role="button">More Info</a>
          </div>
        </div>
        <a href="#scroll_down" className='hero_scroll_btn'>
          Explore<i class="bi bi-arrow-down-short"></i>
        </a>
    </section>

    {/* step section start  */}

    <a href="" id='scroll_down'></a>
    <section className='steps container-custom '>
      <div className='row '>
        <div className='col-12 col-sm-6 d-md-flex justify-content-md-center'>
          <img src="./Bookstore02.jpg" alt="Real Estate profit" className='img-fluid steps_section_thumbnail'
          style={{width:'553', height:'746'}}  />
        </div>
        <div className='col-12 col-sm-6  align-self-center justify-content-md-center '>
          <div className='steps_content_width'>
            <span>01</span>
            <h1 className='mb-4'>Online We</h1>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, velit? Neque sint, debitis veritatis dolor atque unde enim labore illo 
              excepturi nemo dolorum quisquam doloribus, eum error fugit inventore qui!</p>
              <a href="" className='text-decoration-none'>Read More<i class="bi bi-arrow-right-short"></i></a>
          </div>
        </div>
      </div>
    </section>

    <section className='steps steps_section_background '>
    <div className="container-custom">
      <div className='row '>
        <div className='col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-2'>
          <img src="./Bookstore03.jpg" alt="Real Estate profit" className='img-fluid steps_section_thumbnail'
          style={{width:'553', height:'746'}}  />
        </div>
        <div className='col-12 col-sm-6  align-self-center justify-content-md-center '>
          <div className='steps_content_width'>
            <span>02</span>
            <h1 className='mb-4'>Our Stores</h1>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, velit? Neque sint, debitis veritatis dolor atque unde enim labore illo 
              excepturi nemo dolorum quisquam doloribus, eum error fugit inventore qui!</p>
              <a href="" className='text-decoration-none'>Read More<i class="bi bi-arrow-right-short"></i></a>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className='steps container-custom '>
      <div className='row '>
        <div className='col-12 col-sm-6 d-md-flex justify-content-md-center'>
          <img src="./Bookstore04.jpg" alt="Real Estate profit" className='img-fluid steps_section_thumbnail'
          style={{width:'553', height:'746'}}  />
        </div>
        <div className='col-12 col-sm-6  align-self-center justify-content-md-center '>
          <div className='steps_content_width'>
            <span>03</span>
            <h1 className='mb-4'>Books as friends</h1>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, velit? Neque sint, debitis veritatis dolor atque unde enim labore illo 
              excepturi nemo dolorum quisquam doloribus, eum error fugit inventore qui!</p>
              <a href="" className='text-decoration-none'>Read More<i class="bi bi-arrow-right-short"></i></a>
          </div>
        </div>
      </div>
    </section>

    {/* step section end */}

    {/* dark background content start */}

<div className=' bg-dark  py-4'>
  <div className='container-custom' >
  <div className='row'>
    <div className='col-12 col-sm-4 d-flex  justify-content-center my-4'>
      <div className='text-white'>
      <img src="./Bookstore05.jpg" alt="listing01" className='img-fluid mb-4' 
      style={{maxWidth:'100%', height:'auto'}}/>
      <h3>Amazing Books </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro id, facilis explicabo vitae quos, nulla illum dolores 
        possimus quasi fugit, saepe atque iusto nobis assumenda!</p>
        </div>
    </div>
    <div className='col-12 col-sm-4 d-flex  justify-content-center my-4'>
      <div className='text-white'>
      <img src="./Bookstore06.jpg" alt="listing01" className='img-fluid mb-4' 
      style={{maxWidth:'100%', height:'auto'}}/>
      <h3>Huge Collection </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro id, facilis explicabo vitae quos, nulla illum dolores 
        possimus quasi fugit, saepe atque iusto nobis assumenda!</p>
        </div>
    </div>
    <div className='col-12 col-sm-4 d-flex   justify-content-center my-4'>
      <div className='text-white'>
      <img src="./Bookstore07.jpg" alt="listing01" className='img-fluid mb-4' 
      style={{maxWidth:'100%', height:'auto'}}/>
      <h3>Fav Authors </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro id, facilis explicabo vitae quos, nulla illum dolores 
        possimus quasi fugit, saepe atque iusto nobis assumenda!</p>
        </div>
    </div>
  </div>
  </div>
</div>

{/* dark background content end */}

<div className='footer   bg-dark text-white '>
  <div className=' container-custom py-2 border-highlight d-flex justify-content-between align-items-center'>
    <div>
      <a href="/" className='text-decoration-none text-muted me-2'>
        <i class="bi bi-book"></i>
        <span> 2023 BookWorm </span>
        {/* <span>&copy; 2023 BookWorm </span> */}
        </a>
    </div>
    
  <ul className='list-unstyled col-md-4 d-flex justify-content-end   mb-0 text-white'>
    <li className=' ms-3'><a className='text-muted text-decoration-none' href=""><i class="bi bi-twitter"></i></a></li>
    <li className='ms-3'><a className='text-muted text-decoration-none ' href=""><i class="bi bi-instagram"></i></a></li>
    <li className='ms-3'><a className='text-muted text-decoration-none ' href=""><i class="bi bi-facebook"></i></a></li>
  </ul>

  </div>
    </div>
    </div>
  )
}

export default Header