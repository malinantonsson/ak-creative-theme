<?php
/*
Single Post Template: Used to link back to Our network page
Description: This part is optional, but helpful for describing the Post Template
*/

get_header(); ?>

<div id="primary" class="content-area">
	<div id="content" class="site-content" role="main">
	this is my custom single
	<?php while ( have_posts() ) : the_post(); ?>

		<?php 
			if ( has_post_format( array( 'gallery', 'video', 'image' ) ) ) {
				get_template_part( 'content', get_post_format() );
			} else {
				get_template_part( 'content', 'single' );
			}
		?>		

		<?php if ( siteorigin_setting( 'navigation_post_nav' ) ) vantage_content_nav( 'nav-below' ); ?>

		<?php if ( comments_open() || '0' != get_comments_number() ) : ?>
			<?php comments_template( '', true ); ?>
		<?php endif; ?>

	<?php endwhile; // end of the loop. ?>

	</div><!-- #content .site-content -->
</div><!-- #primary .content-area -->

<?php get_sidebar(); ?>

<?php get_footer(); ?>