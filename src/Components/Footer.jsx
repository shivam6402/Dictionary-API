const Footer =()=>{
    return(
        <>
            {/* <section class="footer">
            <div class="container">
        <div class="row">
          <div class="col-12 py-3 d-flex justify-content-between align-content-center">
            <p class="footer_title">Shivam Kudal</p>
          <p>Copyright &#169; 2024  | All Right Reserved</p>
          </div>
        </div>
      </div>
    </section> */}
    <section class="contact bg-light">
    <div class="container py-5">
        <div class="row g-3 align-items-center">
            
            <div class="col-lg-7">
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter a valid email address"/>
                        </div>
                        <div class="col-md-6">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your Name"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="date" class="form-label">Date</label>
                            <input type="date" class="form-control" id="date" placeholder="dd-mm-yyyy"/>
                        </div>
                        <div class="col-md-6">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Enter your phone (e.g. +14155552675)"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-submit">Submit</button>
                </form>
            </div>
           
            <div class="col-lg-5 text-left text card py-5 bg-white">
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default Footer;