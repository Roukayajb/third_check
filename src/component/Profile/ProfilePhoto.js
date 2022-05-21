
const ProfilePhoto = () => {
    return ( 
<>
<div className="row">
        <div className="col-lg-4">
        <img src="logo-r.jpg" className="img-fluid" alt="" />      
          </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>Fullstack JS  Web Developer</h3>
        <br/>
        <div className="col-lg-6">
    <ul>
      <li>
        <i className="bi bi-chevron-right" />{" "}
        <strong>Birthday:</strong> <span>24 Oct 1994</span>
      </li>
      <li>
        <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
        <span>+216 21 76 36 41</span>
      </li>
      <li>
        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
        <span>Tunis, Sousse</span>
      </li>
    </ul>
  </div>
  <div className="col-lg-6">
    <ul>
      <li>
        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
        <span>27</span>
      </li>
      <li>
        <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
        <span>Master</span>
      </li>
      <li>
        <i className="bi bi-chevron-right" />{" "}
        <strong>Email:</strong> <span>jbili.roukaya1@gmail.com</span>
      </li>
    </ul>
  </div>
</div>
</div>
           
</>

     );
}
 
export default ProfilePhoto;