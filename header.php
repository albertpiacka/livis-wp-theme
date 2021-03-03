<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head() ?>
    </head>
    <body>

        <div class="site">

            <div id="mobileMenu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.0001C7.95356 22.0024 4.30449 19.5659 2.75567 15.8276C1.20684 12.0893 2.06354 7.78608 4.926 4.926C7.4533 2.3987 11.1369 1.41168 14.5893 2.33674C18.0416 3.26179 20.7382 5.95838 21.6633 9.41074C22.5883 12.8631 21.6013 16.5467 19.074 19.074C17.2015 20.955 14.6542 22.0086 12 22.0001ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM9.409 16L8 14.59L10.59 12L8 9.41L9.41 8L12 10.59L14.59 8L16 9.41L13.41 12L16 14.59L14.591 16L12 13.41L9.41 16H9.409Z"/>
                </svg>

                <?php
                    wp_nav_menu(
                        array(
                        'menu' => 'primary',
                        )
                    );
                ?>
            </div>
        
            <section class="intro">
                <div class="bg-img" data-aos="fade-down">
                    <img src="<?php echo get_template_directory_uri().'/media/gallery/galeria-4.jpg' ?>" alt="pozadie">
                </div>
                <header>
                    <aside class="logo" data-aos="fade-right">
                        <img src="<?php echo get_template_directory_uri().'/media/logo.png' ?>" alt="logo">
                    </aside>

                    <svg id="menuToggle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z" fill="#2E3A59"/>
                    </svg>

                    <nav data-aos="fade-left">
                        <?php
                            wp_nav_menu(
                                array(
                                'menu' => 'primary',
                                )
                            );
                        ?>
                    </nav>
                </header>

                <section id="uvod">
                    <article data-aos="fade-right">
                        <?php
                            $args = array (
                                'category_name' => 'uvod',
                            );
                            $the_query = new WP_Query( $args );
                        ?>
                        <?php if ( have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                            <h1><?php the_title() ?></h1>
                            <?php the_content(); ?>
                        <?php endwhile ?>
                        <?php endif ?>
                    </article>

                    <aside>
                        <img src="<?php echo get_template_directory_uri().'/media/pictures/livis-1.jpg' ?>" 
                            alt="logo" data-aos="zoom-in-up" data-aos-offset="0">

                        <img src="<?php echo get_template_directory_uri().'/media/pictures/livis-2.jpg' ?>" 
                            alt="logo" data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="0">

                        <img src="<?php echo get_template_directory_uri().'/media/pictures/livis-3.jpg' ?>" 
                            alt="logo" data-aos="zoom-in-up" data-aos-delay="300" data-aos-offset="0">
                    </aside>
                </section>
            </section>


        