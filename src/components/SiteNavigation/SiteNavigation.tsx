import { Link } from "react-router-dom";
import "./SiteNavigation.css";
import { useLocation } from "react-router-dom";

const SiteNavigation: React.FC = () => {
  const location = useLocation();
  console.log(location)

  return (
    <div className='site-navigation-content'>
      <div className='site-navigation-logo'>
        <Link to={"/"}>
          <svg viewBox="0 0 201 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1816 17.2037H5.80924V13.3593H23.0525C22.6001 11.7283 21.1422 10.2139 18.5783 10.2139H6.0606C3.1951 10.2139 1.53613 11.4371 1.53613 14.1165V16.9707C1.53613 19.3007 3.24537 20.6404 5.75897 20.6404H19.2821V24.7178H1.08368C1.53613 26.9312 2.99401 28.0962 5.60815 28.0962H19.2318C22.0973 28.0962 23.505 26.8147 23.505 24.0771V21.2229C23.505 18.7182 21.846 17.3785 19.1816 17.2037ZM46.4792 10.2721H29.99V28.1545H34.6653V21.2811H46.8311C50.1994 21.2811 52.0594 19.9414 52.0594 16.796V14.8155C52.0091 11.9031 49.8977 10.2721 46.4792 10.2721ZM47.9874 15.9805C47.9874 17.262 47.7863 17.9609 45.9765 17.9609H34.6653L34.7156 13.3011H45.7754C47.7863 13.3011 48.0377 14 48.0377 15.2233V15.9805H47.9874ZM67.5934 21.1646H57.6396L55.1763 24.1936H69.554L72.0174 28.1545H77.5473L65.6328 9.51489L62.8176 13.534L67.5934 21.1646ZM86.4957 13.3593H103.99C103.538 11.2624 101.778 10.2139 99.2648 10.2139H86.1941C83.9318 10.2139 81.7701 11.2624 81.7701 14.1165V24.1353C81.7701 26.9895 83.9318 28.038 86.1941 28.038H99.4156C102.432 28.038 103.488 27.0477 103.99 24.6595H86.4957V13.3593ZM124.501 19.3007V16.2717H110.375V28.1545H131.238V24.776H115.1V19.3007H124.501ZM110.878 10.2721H131.941V13.4176H110.878V10.2721ZM144.912 10.2721H137.572L146.219 17.6115C147.476 16.6212 148.933 15.5728 150.24 14.699L144.912 10.2721ZM155.569 19.4172C154.312 20.4074 153.056 21.5141 151.849 22.5626L158.385 28.0962H165.775L155.569 19.4172Z" fill="black"></path><path d="M137.572 10.2721H144.912L150.24 14.699C148.933 15.5728 147.476 16.6212 146.219 17.6115L137.572 10.2721Z" fill="black"></path><path d="M151.849 22.5626C153.056 21.5141 154.312 20.4074 155.569 19.4172L165.775 28.0962H158.385L151.849 22.5626Z" fill="black"></path><path d="M200.915 -0.154419C160.698 2.52502 142.097 22.4461 137.925 27.1642L137.07 28.0962H144.51C164.619 4.73847 193.525 0.602813 200.915 -0.154419Z" fill="black"></path><path d="M0.929828 38.432H1.45783V46.544H6.31783V47H0.929828V38.432ZM15.9298 38.432H16.4578V47H15.9298V38.432ZM29.5369 46.544H29.5609L32.5249 38.432H33.0529L29.8489 47H29.2369L26.0449 38.432H26.5969L29.5369 46.544ZM42.6369 38.432H48.3969V38.888H43.1649V42.32H48.0849V42.776H43.1649V46.544H48.4569V47H42.6369V38.432ZM57.5957 43.508H63.5957V43.964H57.5957V43.508ZM73.3517 38.432H73.8797V47H73.3517V38.432ZM84.3908 38.432H85.0508L90.4628 46.292H90.4868V38.432H91.0148V47H90.3908L84.9428 39.08H84.9188V47H84.3908V38.432ZM101.524 38.432H106.9V38.888H102.052V42.32H106.42V42.776H102.052V47H101.524V38.432ZM124.452 42.716C124.452 43.34 124.36 43.928 124.176 44.48C123.992 45.024 123.724 45.5 123.372 45.908C123.028 46.308 122.604 46.624 122.1 46.856C121.596 47.088 121.024 47.204 120.384 47.204C119.744 47.204 119.168 47.088 118.656 46.856C118.152 46.624 117.724 46.308 117.372 45.908C117.028 45.5 116.764 45.024 116.58 44.48C116.396 43.928 116.304 43.34 116.304 42.716C116.304 42.092 116.396 41.508 116.58 40.964C116.764 40.412 117.028 39.936 117.372 39.536C117.724 39.128 118.152 38.808 118.656 38.576C119.168 38.344 119.744 38.228 120.384 38.228C121.024 38.228 121.596 38.344 122.1 38.576C122.604 38.808 123.028 39.128 123.372 39.536C123.724 39.936 123.992 40.412 124.176 40.964C124.36 41.508 124.452 42.092 124.452 42.716ZM116.832 42.716C116.832 43.268 116.912 43.788 117.072 44.276C117.232 44.764 117.464 45.192 117.768 45.56C118.072 45.92 118.444 46.208 118.884 46.424C119.324 46.64 119.824 46.748 120.384 46.748C120.944 46.748 121.44 46.64 121.872 46.424C122.312 46.208 122.684 45.92 122.988 45.56C123.292 45.192 123.524 44.764 123.684 44.276C123.844 43.788 123.924 43.268 123.924 42.716C123.924 42.164 123.844 41.644 123.684 41.156C123.524 40.668 123.292 40.244 122.988 39.884C122.684 39.516 122.312 39.224 121.872 39.008C121.44 38.792 120.944 38.684 120.384 38.684C119.824 38.684 119.324 38.792 118.884 39.008C118.444 39.224 118.072 39.516 117.768 39.884C117.464 40.244 117.232 40.668 117.072 41.156C116.912 41.644 116.832 42.164 116.832 42.716Z" fill="black"></path></svg>
        </Link> 
      </div> 
      <nav className='site-navigation-links-section'>
        <ul className='site-navigation-links-list'>
          <li className='dashboard-link'>
            <Link className={`${location?.pathname as unknown as string == '/' ? 'active-link' : ''}`} to={"/"}>Dashboard
            </Link>
          </li>
          <li className='rockets-link'>
            <Link className={`${location?.pathname as unknown as string == '/rockets' ? 'active-link' : ''}`} to={"/rockets"}>Rockets

            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SiteNavigation;
