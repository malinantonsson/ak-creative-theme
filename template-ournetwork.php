<?php
/*
Template name: Our network child
*/

get_header(); ?>

<div id="primary" class="content-area">
	<div id="content" class="site-content" role="main">

	
	<?php while ( have_posts() ) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>


			<div class="entry-main">
			<a href="/our-network/">Our network</a>

				<?php do_action('vantage_entry_main_top') ?>

				<?php if ( ( the_title( '', '', false ) && siteorigin_page_setting( 'page_title' ) ) || ( has_post_thumbnail() && siteorigin_setting('blog_featured_image') ) || ( siteorigin_setting( 'blog_post_metadata' ) && get_post_type() == 'post' ) ) : ?>
					<header class="entry-header">

						<?php if ( the_title( '', '', false ) && siteorigin_page_setting( 'page_title' ) ) : ?>
							<h1 class="entry-title"><?php the_title(); ?></h1>
						<?php endif; ?>

					</header><!-- .entry-header -->
				<?php endif; ?>

				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->

			</div>

		</article><!-- #post-<?php the_ID(); ?> -->

	<?php endwhile; // end of the loop. ?>

	</div><!-- #content .site-content -->
</div><!-- #primary .content-area -->

<?php get_sidebar(); ?>

<?php get_footer(); ?>