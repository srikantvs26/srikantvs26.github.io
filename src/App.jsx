import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import profilePic from './assets/profilePic.jpg';

function App() {
  return (
    <>
      <main>
        <div className="container-lg">
          <div className="cover-page">
            <div className="cover-bg p-4 p-lg-5">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div
                    className="avatar p-xxl-1"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                  >
                    <img
                      src={profilePic}
                      alt="profile picture"
                      height="200"
                      width="200"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 text-white text-md-start text-center">
                  <h1 className="mt-3" data-aos="fade-left" data-aos-delay="0">
                    Srikant V S
                  </h1>
                  <p data-aos="fade-left" data-aos-delay="100">Senior Software Engineer</p>
                  <div data-aos="fade-left" data-aos-delay="200">
                    <button type="button" class="btn btn-light mt-3 me-3">
                      Download CV
                    </button>
                    <button type="button" class="btn btn-info mt-3 text-white">
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="m-5">...</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
