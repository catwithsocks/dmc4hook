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
        <ul className="links-to" >
          <li>
            <a href="https://github.com/muhopensores/dmc4_hook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
          <a href="https://twitter.com/SSSiyan" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
