import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-info-subtle p-3 d-flex justify-content-center gap-3">
      <Button variant="success" onClick={() => navigate("/facebook-ads")}>
        Facebook Ads
      </Button>
      <Button variant="primary" onClick={() => navigate("/google-ads")}>
        Google Ads
      </Button>
    </div>
  );
};

export default Navbar;
