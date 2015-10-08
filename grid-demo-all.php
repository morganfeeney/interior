<?php
	$pageTitle = 'Modular SASS Grid System';
	include('includes/head.php');
?>
	<body>
		<header class="container-outer theme-1">
			<div class="container-set-width">
				<h1>Interior <span>Modular SASS grid system</span></h1>
			</div>
		</header>
		<main class="container-outer">
			<div class="container-set-width">
				<section class="intro">
					<h2>What is this?</h2>
					<p class="large">Interior is a set of fluid and responsive layout tools for front-end web developers &amp; web designers. Built from <a href="http://sass-lang.com/">SASS</a> (SCSS flavour); the idea behind Interior is that it can be configured to suit your needs by simply changing the default variables.</p>
				</section>
				<section class="grid demo demo-bg-1">
					<?php include('includes/code-samples/interior-config-3.php') ?>
					<p>
						Leaving the default values in place, e.g. <code class="language-scss">$i-cols: 12</code> will produce a 12 column grid, with a <strong>total</strong> gutter width of .8rem, with grid columns aligned from the left:
					</p>
					<div class="grid i-nums demo demo-bg-1">
						<div class="i-outer">
							<div class="i-row clearfix">
								<div class="i-col-12">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-11">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-1">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-10">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-2">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-9">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-3">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-8">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-4">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-7">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-5">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-6">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-6">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-5">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-7">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-4">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-8">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-3">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-9">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-2">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-10">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-1">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-11">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-12">
									<div class="i-inner"></div>
								</div>
							</div>
						</div>
					</div>
<!-- 					<h2>Modular mixins</h2>
					<p>Interior can be re-used over and over again, by declaring your desired units within a mixin you can leave the defaults in place, knowing that they will be overridden.</p>
					<?php include('includes/code-samples/interior-config-1.php') ?> -->
					<div class="accompanying-text">
						<h2>As simple as you make it</h2>
						<p>
							Create simple layouts, and output as many columns as required, nested within in as many different classes as needed. For example, simply creating a mini-grid system out of a total of 3 columns yields a number of possible layouts.
						</p>
					</div>
					<?php include('includes/code-samples/interior-config-2.php') ?>
					<p class="text-center"><i>Compiles to:</i></p>
					<?php include('includes/code-samples/interior-css-1.php') ?>
					<p class="text-center"><i>Allowing you to create:</i></p>
					<div class="visual-example">
						<div class="grid i-nums demo demo-bg-1 simple-demo-1">
							<div class="i-outer">
								<div class="i-row clearfix">
									<div class="i-col-1">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-2">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-3">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p class="text-center"><i>Or</i></p>
					<div class="visual-example">
						<div class="grid i-nums demo demo-bg-1 simple-demo-1">
							<div class="i-outer">
								<div class="i-row clearfix">
									<div class="i-col-1">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-1">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-1">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p class="text-center"><i>Or even:</i></p>
					<div class="visual-example">
						<div class="grid i-nums demo demo-bg-1 simple-demo-1">
							<div class="i-outer">
								<div class="i-row clearfix">
									<div class="i-col-3 i-g">
										<div class="i-col-2">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
									</div>
									<div class="i-col-1">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-2 i-g">
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
									</div>
									<div class="i-col-3">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="grid demo demo-bg-1">
					<div class="accompanying-text">
						<h2>Include media queries</h2>
						<p>
							Create the same simple layouts, yet with the advantages of media queries. E.g. <i>adjust your layout at your desired screen width</i>.
						</p>
						<?php include('includes/code-samples/interior-config-4.php') ?>
						<p class="text-center"><i>Compiles to:</i></p>
						<?php include('includes/code-samples/interior-css-2.php') ?>
						<p class="text-center"><i>Adjust your markup accordingly, e.g.:</i></p>
						<?php include('includes/code-samples/interior-html-1.php') ?>
						<p class="text-center"><i>Results in:</i></p>
						<div class="visual-example">
							<div class="grid i-nums demo demo-bg-1 simple-demo-1">
								<div class="i-outer">
									<div class="i-row clearfix">
										<div class="i-col-3 i-sm-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-3 i-sm-2">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-3 i-sm-3">
											<div class="i-inner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<p class="text-center"><i>Or use three equal width columns:</i></p>
						<div class="visual-example">
							<div class="grid i-nums demo demo-bg-1 simple-demo-1">
								<div class="i-outer">
									<div class="i-row clearfix">
										<div class="i-col-3 i-sm-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-3 i-sm-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-3 i-sm-1">
											<div class="i-inner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<p class="text-center"><i>Or a more complex structure:</i></p>
						<div class="visual-example">
							<div class="grid i-nums demo demo-bg-1 simple-demo-1">
								<div class="i-outer">
									<div class="i-row clearfix">
										<div class="i-col-3 i-g">
											<div class="i-col-2">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-1">
												<div class="i-inner"></div>
											</div>
										</div>
										<div class="i-col-3 i-sm-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-3 i-sm-2 i-g">
											<div class="i-col-1">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-1">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-1">
												<div class="i-inner"></div>
											</div>
										</div>
										<div class="i-col-3">
											<div class="i-inner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="grid demo demo-bg-2">
					<div class="accompanying-text">
						<h2>Group nested columns</h2>
						<p>
							We have to add a new class here: <code class="language-scss">.i-g</code> for parent containers due to the amount of padding created when nesting. This enables us to group different numbers of columns, without affecting the gutter widths - <i>keeping things even</i>:
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row clearfix">
								<div class="i-col-12 i-xs-4 i-single i-names">
									<div class="i-inner"></div>
								</div>
								<div class="i-col-12 i-xs-8 i-g i-names">
									<div class="i-col-4">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-4">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-4">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php include('includes/code-samples/nested-demo-1.php') ?>
				</section>

				<!-- Demo 2 -->

				<section class="grid demo demo-bg-1">
					<div class="accompanying-text">
						<h2>Nest columns within columns</h2>
						<p>
							In this one I have re-used the grouping class from the previous example: <code class="language-scss">.i-g</code>. I have also included another: <code class="language-scss">.i-single</code> however this is purely for demo purposes, there is actually no need for this class; apart from demonstration.
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer demo-bg-1">
							<div class="i-row">
								<div class="i-col-12 i-single i-names">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-12 i-g">
									<div class="i-row">
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
										<div class="i-col-1">
											<div class="i-inner"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 i-g">
									<div class="i-g i-names clearfix">
										<div class="i-row">
											<div class="i-col-4">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-4">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-4">
												<div class="i-inner"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="i-col-6 i-g">
									<div class="i-g i-names clearfix">
										<div class="i-row">
											<div class="i-col-6">
												<div class="i-inner"></div>
											</div>
											<div class="i-col-6">
												<div class="i-inner"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-12 i-single i-names">
									<div class="i-inner"></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- Demo 3 -->

				<section class="grid demo demo-bg-3 clearfix">
					<div class="accompanying-text">
						<h2>Offset columns</h2>
						<p>
							If you want to position columns wihout changing <code class="language-scss">float: left</code> to <code class="language-scss">float: right</code>, or using <code class="language-scss">margin: auto</code> with <code class="language-scss">display: block</code> you can use offsets.
							Offsets use percentage width values, just like the column widths, to offset columns using a left margin.
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row">
								<div class="i-col-6 i-o-6 i-names">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 i-o-3 i-names">
									<div class="i-inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 i-single no-offset i-names">
									<div class="i-inner"></div>
								</div>
							</div>
						</div>
					</div>
					<?php include('includes/code-samples/offset-demo-1.php') ?>
				</section>

				<!-- Demo 4 -->

				<section class="grid demo demo-bg-3">
					<div class="accompanying-text">
						<h2>Flipping columns</h2>
						<p><i>No, that wasn't me complaining again...</i> One use case scenario for 'flipping' visual appearance of columns is for use with Responsive Web Design (RWD).</p>
						<p>E.g. in a 2 column layout you want a left &amp; right column, yet when you have a single column layout, at a set break-point, you want the left column from your 2 column layout to be beneath the right column in your single columns layout. Unless you change the source order you will not be able to achieve this using CSS &amp; HTML only.</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row">
								<div class="demo-borders clearfix">
									<div class="i-col-8 i-md-fl-4 i-names">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-4 i-md-fr-8 i-names">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="demo-borders clearfix">
									<div class="i-col-4 i-md-fl-8 i-names">
										<div class="i-inner"></div>
									</div>
									<div class="i-col-8 i-md-fr-4 i-names">
										<div class="i-inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php include('includes/code-samples/flipping-demo-1.php') ?>
				</section>
				<section class="grid demo demo-bg-3">
					<div class="accompanying-text">
						<h2>Classes explained</h2>
						<p>I have abbreviated some words so that the amount of text in class names is smaller; therefore at first the class names may appear like jargon. I will explain what each class should do.</p>
						<p>You may feel that the markup is excessive, this all depends upon what you want to achieve. Ultimately I have aimed for maximum flexibility hence why there are lots of tags.</p>
						<p><i>Bear in mind if things don't appear work to check the order of your markup against the examples.</i></p>
						<dl>
							<dt>
								<code class="language-sass">.i-outer</code>
							</dt>
							<dd>allows styling of the wrapping tag, e.g. adding a <code class="language-css">background-color</code>.</dd>
							<dt>
								<code class="language-sass">.i-row</code>
							</dt>
							<dd>maintains vertical rythm.</dd>
							<dt>
								<code class="language-sass">.i-col-*</code>
							</dt>
							<dd>is the default column width with or without gutter.</dd>
							<dt>
								<code class="language-sass">.i-{$mq}-*</code>
							</dt>
							<dd>is a modifying class which changes width / gutter within a media query.</dd>
							<dt>
								<code class="language-sass">.i-fl-*</code>
							</dt>
							<dd>lip left changes the visual order from right to left using the number of columns specified.</dd>
							<dt>
								<code class="language-sass">.i-fr-*</code>
							</dt>
							<dd>flip right changes the visual order from left to right using the number of columns specified.</dd>
							<dt>
								<code class="language-sass">.i-fl-{$mq}-*</code>
							</dt>
							<dd>is a modifying class which changes the visual order from right to left using the number of columns specified within a media query.</dd>
							<dt>
								<code class="language-sass">.i-fr-{$mq}-*</code>
							</dt>
							<dd>is a modifying class which changes the visual order from left to right using the number of columns specified within a media query.</dd>
							<dt>
								<code class="language-sass">.i-inner</code>
							</dt>
							<dd>is a wrapping class for the content within a column.</dd>
						</dl>
					</div>
				</section>
			</div>	
		</main>
	<?php include('includes/footer.php') ?>
