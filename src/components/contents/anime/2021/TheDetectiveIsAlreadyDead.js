import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const TheDetectiveIsAlreadyDead = () => {
    useEffect(() => {
        GLightbox({
            selector: '.glightbox',
        });
    }, []);

    return (
        <main className="main">
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="50">
                            <h2><span className="underlight">The Detective Is Already Dead</span></h2>
                            <a href='https://www.livechart.me/anime/10355' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 9/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Siesta */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/the-detective-is-already-dead/Siesta.jpg" className="img-fluid" alt="Siesta" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Siesta</small>
                                            <br />
                                            <a href="img/anime/2021/the-detective-is-already-dead/Siesta.jpg" className="glightbox preview-link">(The Detective Is Already Dead)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alicia */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/the-detective-is-already-dead/NatsunagiNagisa.jpg" className="img-fluid" alt="Natsunagi Nagisa" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Natsunagi Nagisa</small>
                                            <br />
                                            <a href="img/anime/2021/the-detective-is-already-dead/NatsunagiNagisa.jpg" className="glightbox preview-link">(The Detective Is Already Dead)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alicia */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/the-detective-is-already-dead/Alicia.webp" className="img-fluid" alt="Alicia" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Alicia</small>
                                            <br />
                                            <a href="img/anime/2021/the-detective-is-already-dead/Alicia.webp" className="glightbox preview-link">(The Detective Is Already Dead)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TheDetectiveIsAlreadyDead;