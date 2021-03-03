<?php get_header() ?>

        <section id="kto-sme">
            <div class="left-img" data-aos="fade-right" data-aos-offset="0">
                <img src="<?php echo get_template_directory_uri().'/media/pictures/livis-5.jpg' ?>" alt="holky-bajecny" >
                <img src="<?php echo get_template_directory_uri().'/media/pattern.png' ?>" alt="logo">
            </div>

            <main data-aos="fade-left" data-aos-offset="0">
                <?php
                    $args = array (
                        'category_name' => 'kto-sme',
                    );
                    $the_query = new WP_Query( $args );
                ?>
                <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <?php the_content(); ?>
                <?php endwhile ?>
                <?php endif ?>
            </main>
        </section>

        <section id="galeria">
            <div class="galeria-header" data-aos="fade-right">
                <div class="galeria-uvod">
                    <?php
                        $args = array (
                            'category_name' => 'galeria-uvod',
                        );
                        $the_query = new WP_Query( $args );
                    ?>
                    <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile ?>
                    <?php endif ?>
                </div>

                <div class="galeria-controls">
                    <svg class="arrow" id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 30"><defs><style>.a{fill:none;stroke:#476667;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title>arrow</title><line class="a" x1="1.5" y1="15" x2="81.5" y2="15"/><polyline class="a" points="68 1.5 81.5 15 68 28.5"/></svg>
                    <svg class="arrow" id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 30"><defs><style>.a{fill:none;stroke:#476667;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title>arrow</title><line class="a" x1="1.5" y1="15" x2="81.5" y2="15"/><polyline class="a" points="68 1.5 81.5 15 68 28.5"/></svg>
                </div>
            </div>
            

            <div id="lightbox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.0001C7.95356 22.0024 4.30449 19.5659 2.75567 15.8276C1.20684 12.0893 2.06354 7.78608 4.926 4.926C7.4533 2.3987 11.1369 1.41168 14.5893 2.33674C18.0416 3.26179 20.7382 5.95838 21.6633 9.41074C22.5883 12.8631 21.6013 16.5467 19.074 19.074C17.2015 20.955 14.6542 22.0086 12 22.0001ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM9.409 16L8 14.59L10.59 12L8 9.41L9.41 8L12 10.59L14.59 8L16 9.41L13.41 12L16 14.59L14.591 16L12 13.41L9.41 16H9.409Z" fill="#2E3A59"/>
                </svg>

                <img src="" alt="">
            </div>

            <div id="pictures" data-aos="fade-left" data-aos-delay="300" data-aos-offset="0">
                <?php
                    $args = array (
                        'category_name' => 'galeria',
                    );
                    $the_query = new WP_Query( $args );
                ?>
                <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <?php the_content(); ?>
                <?php endwhile ?>
                <?php endif ?>
            </div>

        </section>

        <section id="referencie">
            <div class="header" data-aos="fade-right">
                <?php
                    $args = array (
                        'category_name' => 'referencie-uvod',
                    );
                    $the_query = new WP_Query( $args );
                ?>
                <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <article>
                        <?php the_content(); ?>
                    </article>
                <?php endwhile ?>
                <?php endif ?>
            </div>

            <div class="referencie-boxy" data-aos="fade-left">
                <?php
                    $args = array (
                        'category_name' => 'referencie',
                    );
                    $the_query = new WP_Query( $args );
                ?>
                <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <article>
                        <?php the_content(); ?>
                    </article>
                <?php endwhile ?>
                <?php endif ?>
            </div>
        </section>

        <section id="kontakt">
            <div class="wrapper" data-aos="fade-right">
                <?php
                    $args = array (
                        'category_name' => 'kontakt',
                    );
                    $the_query = new WP_Query( $args );
                ?>
                <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <article>
                        <?php the_content(); ?>
                    </article>
                <?php endwhile ?>
                <?php endif ?>
            </div>

            <div class="logo">
                <img class="logo-img" src="<?php echo get_template_directory_uri().'/media/logo.png' ?>" alt="logo"
                data-aos="fade-left" data-aos-delay="300" data-aos-offset="0"
                >
            </div>
        </section>

        <footer id="footer">
            <p class="p-secondary">
                © liviscatering.sk 2021
            </p>
        </footer>
    
    </div>

<?php get_footer() ?>