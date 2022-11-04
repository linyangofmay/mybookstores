import './Footer.css'

function Footer() {
  return (

      <div className="group_info_div">
        <div>
          <div>Meet the developers</div>
        </div>

        <div>
          <div>Lyn Chen</div>
          <div>
            <div>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/lyn-chen-385ab5b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/linyangofmay"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>



        <div className="test">
          <div className="footer_main_div">
            <div className="footer_text_div">
              <i className="fa-solid fa-globe ">&nbsp;</i>
              <div>United States</div>
              <div>&nbsp;|&nbsp;</div>
              <div>English(US)</div>
              <div> &nbsp;| &nbsp;</div>
              <div> $(USD)</div>
            </div>
            <div className="footer_text_div">
              <div>&copy; 2022 Artsy, Inc.</div>
              <div>&nbsp;|&nbsp;</div>
              <a
                className="more_info_text"
                href="https://github.com/linyangofmay/mybookstores"
                target="_blank"
                rel="noopener noreferrer"
              >
                For more info
              </a>
            </div>
          </div>
        </div>
      </div>

  )
}
