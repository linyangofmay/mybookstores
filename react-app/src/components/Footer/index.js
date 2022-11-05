import './Footer.css'

function Footer() {
  return (

      <div className="group_info_div">
        <div>
          <div className='title'>iBook </div>
        </div>
        <div className='subheader'>Advertise, discover and review your local bookstores </div>
        <div>
          <div className='madebyLyn'> made by Lyn Chen</div>
          <div>
            <div className='more_info_text'>
              <i className="fa-brands fa-linkedin">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://www.linkedin.com/in/lyn-chen-385ab5b6/"

              >
                Linkedin
              </a>
            </div>
            <div className='more_info_text'>
              <i className="fa-brands fa-square-github">&nbsp;</i>
              <a
                className="more_info_text"
                href="https://github.com/linyangofmay"

              >
                Github
              </a>
            </div>
          </div>
        </div>




      </div>

  )
}

export default Footer
