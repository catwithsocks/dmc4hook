import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navigation: React.FC = () => {
  /*  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.x);
      console.log(currPos.y);

      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  ); */

  return (
    <nav className="navbar" id="navbar-main">
      <div className="navigation-container">
        <ul className="links-to">
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
