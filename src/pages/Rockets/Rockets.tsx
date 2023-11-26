import Layout from "../../components/Layout/Layout";
import "./Rockets.css";

const Rockets: React.FC = () => {
  return (
    <Layout>
        <div className="rockets-content">
          <div className="single-rocket-content-tile">
            <div className="single-rocket-content">
              <p className="rocket-title">Falcon 9</p>
              <div className="rocket-status">
                <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg" />
              </div>
              <div className="rocket-image">Status: Active</div>
            </div>
          </div>
          <div className="single-rocket-content-tile">
            <div className="single-rocket-content">
              <p className="rocket-title">Falcon 9</p>
              <div className="rocket-status">
                <img src="https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg" />
              </div>
              <div className="rocket-image">Status: Active</div>
            </div>
          </div>
          <div className="single-rocket-content-tile">
            <div className="single-rocket-content">
              <p className="rocket-title">Falcon 9</p>
              <div className="rocket-status">
                <img src="https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg" />
              </div>
              <div className="rocket-image">Status: Active</div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Rockets;
