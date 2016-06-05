<?php
/**
 * The Sidebar containing the main widget area
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>
<div id="secondary">
	<?php
		$description = get_bloginfo( 'description', 'display' );
		if ( ! empty ( $description ) ) :
	?>
	<?php endif; ?>

	<nav id="primary-navigation" class="navigation clearfix" role="navigation">
		<?php wp_nav_menu( array(
			'theme_location' => 'primary',
			'menu'        => "main-menu",
			'echo'        => true,
			'fallback_cb' => 'wp_page_menu',
			'depth'       => 0
		) ); ?>
	</nav>

	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
	<div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div><!-- #primary-sidebar -->
	<?php endif; ?>
</div><!-- #secondary -->
