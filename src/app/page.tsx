import styles from "./page.module.scss";

import HeaderIcon from "./svgs/headerIcon.svg";
import FooterIcon from "./svgs/footerIcon.svg";
import Instagram from "./svgs/instagram.svg";
import Facebook from "./svgs/facebook.svg";
import YouTube from "./svgs/youtube.svg";
import PersonIcon from "./svgs/personIcon.svg";
import PositionIcon from "./svgs/positionIcon.svg";
import TargetIcon from "./svgs/targetIcon.svg";
import CheckmarkIcon from "./svgs/checkmark.svg";
import WorldMap from "./svgs/worldMap.svg";
import PartnersList from "./svgs/partnersList.svg";
import ArrowIcon from "./svgs/arrowIcon.svg";
import ArrowIconActive from "./svgs/arrowIconActive";
import CertificatesCarousel from "./components/CertificatesCarousel";

export default function Home() {
  return (
    <main>
        <header>
            <div className={"header-content"}>
                <div className={"header-links-section header-links-section-end-position-addition"}>
                    <div className={"header-links-section-block-for-end-position"}></div>
                    <a>Overview</a>
                    <a>Services</a>
                    <a>Contacts</a>
                </div>
                <HeaderIcon className={"header-icon"} />
                <div className={"header-links-section"}>
                    <a>Employment</a>
                    <a>Blog</a>
                    <a>Support us</a>
                    <div className={"header-language"}>
                        UA
                    </div>
                </div>
            </div>
            <div className={"burger-menu"}>
                <div className={"burger-menu-main-header"}>
                <HeaderIcon className={"header-icon"} />
                    <div className={"burger-menu-menu-button-container"}>
                        <div className={"header-language"}>
                            UA
                        </div>
                        <div className={"menu-button"}>
                            <hr className={"menu-button-line"} />
                            <hr className={"menu-button-line"} />
                            <hr className={"menu-button-line"} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className={styles["index-page-first-section"]}>
            <div className={styles["index-page-first-section-social-media-links"]}>
                <div className={styles["first-section-social-media-link"]}>
                    <Instagram className="h-100" />
                </div>
                <div className={styles["first-section-social-media-link"]}>
                    <Facebook className="h-100" />
                </div>
                <div className={styles["first-section-social-media-link"]}>
                    <YouTube className="h-100" />
                </div>
            </div>
            <div className={styles["index-page-first-section-content"]}>
                <div className={styles["index-page-first-section-box"]}>
                    <div className={styles["first-section-buttons-text-container"]} >
                        <div>
                            <h1 className={styles["first-section-header-text"]}>
                                National Mine Action Operator
                            </h1>
                            <h2 className={styles["first-section-subheader-text"]}>
                                Let&apos;s make a world safer
                            </h2>
                        </div>
                        <button className={styles["first-section-about-button"]}>
                            About Us
                        </button>
                        <button className={styles["first-section-transparent-button"]}>
                            Anti-mine Activity
                        </button>
                    </div>
                    <div className={styles["first-section-info-block"]}>
                        <div className={styles["first-section-info-block-box"]}>
                            <PersonIcon />
                            <div className={styles["first-section-info-block-boxes-for-text"]}>
                                <p className={styles["first-section-info-block-boxes-text-bold-extra-size"]}>
                                    285+
                                </p>
                                <p className={styles["first-section-info-block-boxes-text"]}>
                                    Employees
                                </p>
                            </div>
                        </div>
                        <div className={styles["vertical-rule-grey-60"]}></div>
                        <div className={styles["first-section-info-block-box"]}>
                            <PositionIcon />
                            <div className={styles["first-section-info-block-boxes-for-text"]}>
                                <p className={styles["first-section-info-block-boxes-text"]}>
                                    Cleared more than
                                </p>
                                <p className={styles["first-section-info-block-boxes-text-bold"]}>
                                    1,300
                                </p>
                                <p className={styles["first-section-info-block-boxes-text"]}>
                                    of contaminated land.
                                </p>
                            </div>
                        </div>
                        <div className={styles["vertical-rule-grey-60"]}></div>
                        <div className={styles["first-section-info-block-box"]}>
                            <TargetIcon />
                            <div className={styles["first-section-info-block-boxes-for-text"]}>
                                <p className={styles["first-section-info-block-boxes-text"]}>
                                    Disposed over
                                </p>
                                <p className={styles["first-section-info-block-boxes-text-bold"]}>
                                    7,000 tons
                                </p>
                                <p className={styles["first-section-info-block-boxes-text"]}>
                                    of explosive hazards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["index-page-second-section"]}>
            <div className={styles["index-page-second-section-box"]}>
                <img className={styles["second-section-image"]} />
                <div className={styles["second-section-text-box"]}>
                    <h2>
                        Services
                    </h2>
                    <p>
                        Company activities
                    </p>
                    <div className={styles["second-section-box-for-services"]}>
                        <div className={styles["box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["second-section-text-bold-extra-light-size"]}>
                                Education and training
                            </p>
                        </div>
                        <div className={styles["box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["second-section-text-bold-extra-light-size"]}>
                                Operations
                            </p>
                        </div>
                        <div className={styles["box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["second-section-text-bold-extra-light-size"]}>
                                Recognition of the company
                            </p>
                        </div>
                        <div className={styles["box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["second-section-text-bold-extra-light-size"]}>
                                Goals and objectives
                            </p>
                        </div>
                    </div>
                    <button className={styles["second-section-button"]}>
                        Details of our activities
                    </button>
                </div>
            </div>
        </div>
        <div className={styles["index-page-third-section"]}>
            <div className={styles["index-page-third-section-box"]}>
                <div className={styles["index-page-third-section-text-box"]}>
                    <h2>
                        Our credentials are verified
                    </h2>
                    <p>
                        We&apos;ve successfully completed certification, granting us the authority to participate in humanitarian demining.
                    </p>
                </div>
                <CertificatesCarousel />
            </div>
        </div>
        <div className={styles["index-page-fourth-section"]}>
            <div className={styles["index-page-fourth-section-box"]}>
                <div className={styles["fourth-section-text-box"]}>
                    <h2>
                        Past projects map
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada scelerisque sollicitudin.
                    </p>
                </div>
                <WorldMap />
            </div>
        </div>
        <div className={styles["index-page-fifth-section"]}>
            <div className={styles["index-page-fifth-section-box"]}>
                <h2>
                    Our Goals
                </h2>
                <div className={styles["fifth-section-goals-container"]}>
                    <div className={styles["fifth-section-goal"]}>
                        <h2 className={styles["font-24-px"]}>
                            буубубуббубубуб
                        </h2>
                        <p className={styles["font-20-px"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["font-20-px"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                    <div className={styles["fifth-section-goal"]}>
                        <h2 className={styles["font-24-px"]}>
                            буубубуббубубуб
                        </h2>
                        <p className={styles["font-20-px"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["font-20-px"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                    <div className={styles["fifth-section-goal"]}>
                        <h2 className={styles["font-24-px"]}>
                            буубубуббубубуб
                        </h2>
                        <p className={styles["font-20-px"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["font-20-px"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["index-page-sixth-section"]}>
        <h2>
            Our Partners
        </h2>
        <div className={styles["sixth-section-partners-list"]}>
            <div className={styles["sixth-section-partners-list-fade-effect"]}></div>
            <PartnersList className={styles["svg-overflow-from-screen"]} />
            </div>
        </div>
        <div className={styles["index-page-seventh-section"]}>
            <h2>
                Publications in media
            </h2>
            <div className={styles["seventh-section-list-media-publications-box"]}>
                <div className={styles["seventh-section-list-media-publication-chosen"]}>
                    <img className={styles["seventh-section-list-media-publication-image"]} />
                    <h2 className={styles["font-27-px"]}>
                        Lorem ipsum dolor sit
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris.
                    </p>
                </div>
                <div className={styles["seventh-section-list-media-publication"]}>
                    <img className={styles["seventh-section-list-media-publication-image"]} />
                    <h2 className={styles["font-27-px"]}>
                        Lorem ipsum dolor sit
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris.
                    </p>
                </div>
                <div className={styles["seventh-section-list-media-publication"]}>
                    <img className={styles["seventh-section-list-media-publication-image"]} />
                    <h2 className={styles["font-27-px"]}>
                        Lorem ipsum dolor sit
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus orci, fringilla nec congue sit amet, volutpat ac dui. Etiam metus quam, luctus non lobortis ut, malesuada a ris.
                    </p>
                </div>
                <div></div>
            </div>
            <div className={styles["seventh-section-controls-box"]}>
                <div className={styles["seventh-section-tabs-box"]}>
                    <div className={styles["seventh-section-tab-active"]}></div>
                    <div className={styles["seventh-section-tab"]}></div>
                    <div className={styles["seventh-section-tab"]}></div>
                    <div className={styles["seventh-section-tab"]}></div>
                </div>
                <div className={styles["seventh-section-arrows-box"]}>
                    <div><ArrowIcon className="h-100" /></div>
                    <div><ArrowIconActive className={styles["seventh-section-arrow-180-rotate"] + " h-100"} /></div>
                </div>
            </div>
            <div className={styles["contact-us-container"]}>
                <div className={styles["contact-us"]}>
                    <div className={styles["contact-us-text-box"]}>
                        <h2>
                            Contact us
                        </h2>
                        <p>
                            Let&apos;s make the world a safer place!
                        </p>
                    </div>
                    <button className={styles["contact-us-button"]}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-content">
                <div className="footer-info-and-contacts-box">
                    <div className="footer-info-box">
                        <div className="footer-info-text-box" >
                            <div className="footer-info-header-box">
                                <FooterIcon />
                                <h2 className="footer-header-20-px">
                                    Transimplex Demining
                                </h2>
                            </div>
                            <div className="footer-info-main-text-box">
                                <p>
                                    National Mine Action Operator
                                </p>
                                <p>
                                    Let&apos;s make the world a safer place!
                                </p>
                            </div>
                        </div>
                        <div className="footer-info-circles-box">
                            <div className="footer-info-circle"></div>
                            <div className="footer-info-circle"></div>
                            <div className="footer-info-circle"></div>
                        </div>
                        <p className="footer-info-license-text">
                            ©2024 Transimplex Demining
                        </p>
                    </div>
                    <div className="footer-contacts-box">
                        <h2 className="footer-header-20-px">
                            Contacts
                        </h2>
                        <div className="footer-contacts-links-box">
                            <a className="footer-contacts-text footer-contacts-link-addition">
                                +380990809885
                            </a>
                            <a className="footer-contacts-text footer-contacts-link-addition">
                                office@aaa.pro
                            </a>
                        </div>
                        <p className="footer-contacts-text">
                            Kyiv, str. Shevchenko, 999
                        </p>
                    </div>
                </div>
                <div className="footer-overview-box">
                    <h2 className="footer-header-18-px">
                        Overview
                    </h2>
                    <p>
                        Services
                    </p>
                    <p>
                        Contacts
                    </p>
                    <p>
                        Employment
                    </p>
                    <p>
                        Blog
                    </p>
                    <p>
                        Support
                    </p>
                </div>
            </div>
        </footer>
    </main>
  );
}
