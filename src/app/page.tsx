import styles from "./scss/page.module.scss";

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
import ArrowIcon from "./svgs/arrowIcon.svg";
import ArrowIconActive from "./svgs/arrowIconActive";

import CertificatesCarousel from "./components/CertificatesCarousel";
import PublicationsInMedia from "./components/PublicationsInMedia";
import PartnersScroll from "./components/PartnersScroll";
import HeaderComponent from "./components/HeaderComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const employees = "285+";
    const landCleared = "1,300";
    const disposedCases = "7,000 tons";

  return (
    <main>
        <HeaderComponent />
        <div className={styles["first-section"]}>
            <div className={styles["first-section-social-media-links"]}>
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
            <div className={styles["first-section-content"]}>
                <div className={styles["first-section-box"]}>
                    <div className={styles["first-section-buttons-text-container"]} >
                        <div>
                            <h1 className={styles["text-6xl-white-700"]}>
                                National Mine Action Operator
                            </h1>
                            <h2 className={styles["text-4xl-white"]}>
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
                                <p className={styles["text-3xl-black-700"]}>
                                    {employees}
                                </p>
                                <p className={styles["text-xl-grey"]}>
                                    Employees
                                </p>
                            </div>
                        </div>
                        <div className={styles["vertical-rule-grey-60"]}></div>
                        <div className={styles["first-section-info-block-box"]}>
                            <PositionIcon />
                            <div className={styles["first-section-info-block-boxes-for-text"]}>
                                <p className={styles["text-xl-grey"]}>
                                    Cleared more than
                                </p>
                                <p className={styles["text-xl-black-700"]}>
                                    {landCleared}
                                </p>
                                <p className={styles["text-xl-grey"]}>
                                    of contaminated land.
                                </p>
                            </div>
                        </div>
                        <div className={styles["vertical-rule-grey-60"]}></div>
                        <div className={styles["first-section-info-block-box"]}>
                            <TargetIcon />
                            <div className={styles["first-section-info-block-boxes-for-text"]}>
                                <p className={styles["text-xl-grey"]}>
                                    Disposed over
                                </p>
                                <p className={styles["text-xl-black-700"]}>
                                    {disposedCases}
                                </p>
                                <p className={styles["text-xl-grey"]}>
                                    of explosive hazards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["second-section"]}>
            <div className={styles["second-section-box"]}>
                <div className={styles["second-section-image-container"]}><Image src="/deminer.jpeg" alt="photo" /></div>
                <div className={styles["second-section-text-box"]}>
                    <h2>
                        Services
                    </h2>
                    <p>
                        Company activities
                    </p>
                    <div className={styles["second-section-box-for-services"]}>
                        <div className={styles["second-section-box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["text-sm-grey"]}>
                                Education and training
                            </p>
                        </div>
                        <div className={styles["second-section-box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["text-sm-grey"]}>
                                Operations
                            </p>
                        </div>
                        <div className={styles["second-section-box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["text-sm-grey"]}>
                                Recognition of the company
                            </p>
                        </div>
                        <div className={styles["second-section-box-for-text-with-check-marks"]}>
                            <CheckmarkIcon />
                            <p className={styles["text-sm-grey"]}>
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
        <div className={styles["third-section"]}>
            <div className={styles["third-section-box"]}>
                <div className={styles["third-section-text-box"]}>
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
        <div className={styles["fourth-section"]}>
            <div className={styles["fourth-section-box"]}>
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
        <div className={styles["fifth-section"]}>
            <div className={styles["fifth-section-box"]}>
                <h2>
                    Our Goals
                </h2>
                <div className={styles["fifth-section-goals-container"]}>
                    <div className={styles["fifth-section-goal"]}>
                        <h3 className={styles["fifth-section-goal-header"]}>
                            буубубуббубубуб
                        </h3>
                        <p className={styles["text-xl-grey"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["text-xl-grey"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                    <div className={styles["fifth-section-goal"]}>
                        <h3 className={styles["fifth-section-goal-header"]}>
                            буубубуббубубуб
                        </h3>
                        <p className={styles["text-xl-grey"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["text-xl-grey"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                    <div className={styles["fifth-section-goal"]}>
                        <h3 className={styles["fifth-section-goal-header"]}>
                            буубубуббубубуб
                        </h3>
                        <p className={styles["text-xl-grey"]}>
                            Nulla facilisi. Sed eget consequat enim. Nam condimentum nulla id risus interdum lacinia. Proin egestas odio laoreet leo rhoncus condimentum.
                        </p>
                        <p className={styles["text-xl-grey"]}>
                            Nam fringilla urna dui, lacinia congue mi luctus sed. Suspendisse consectetur mi vel aliquet tristique. Nam ante urna, laoreet ut finibus a, facilisis vel tellus. Phasellus arcu dui, iaculis in lorem ultricies, condimentum gravida nulla.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["sixth-section"]}>
            <h2>
                Our Partners
            </h2>
            <PartnersScroll />
        </div>
        <div className={styles["seventh-section"]}>
            <h2>
                Publications in media
            </h2>
            <PublicationsInMedia />
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
                                <h2 className="text-xl-black-500">
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
                        <p className="text-md-grey-special">
                            ©2024 Transimplex Demining
                        </p>
                    </div>
                    <div className="footer-contacts-box">
                        <h2 className="text-xl-black-500">
                            Contacts
                        </h2>
                        <div className="footer-contacts-links-box">
                            <a className="text-md-black-underline">
                                +380990809885
                            </a>
                            <a className="text-md-black-underline">
                                office@aaa.pro
                            </a>
                        </div>
                        <p className="text-md-black">
                            Kyiv, str. Shevchenko, 999
                        </p>
                    </div>
                </div>
                <div className="footer-overview-box">
                    <h2 className="text-l-black-500">
                        Overview
                    </h2>
                    <Link href="#" className="text-md-grey">
                        Services
                    </Link>
                    <Link href="#" className="text-md-grey">
                        Contacts
                    </Link>
                    <Link href="#" className="text-md-grey">
                        Employment
                    </Link>
                    <Link href="#" className="text-md-grey">
                        Blog
                    </Link>
                    <Link href="#" className="text-md-grey">
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    </main>
  );
}
