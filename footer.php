<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

		</div><!-- #main -->

		<footer id="colophon" class="site-footer" role="contentinfo">

			<?php get_sidebar( 'footer' ); ?>


		</footer><!-- #colophon -->
<div class="site-info">
	<?php do_action( 'twentyfourteen_credits' ); ?>
	<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'twentyfourteen' ) ); ?>"><?php printf( __( 'AND.CONSULTING is a trade mark of %s', 'twentyfourteen' ), 'Operatura Ltd.' ); ?></a>
</div><!-- .site-info -->
	</div><!-- #page -->
<div class="overlay"></div>
	<?php wp_footer(); ?>
</body>
</html>