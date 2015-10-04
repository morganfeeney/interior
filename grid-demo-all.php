<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Interior | All | Demo</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="js/modernizr.custom.73874.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script>
		  (function(d) {
		    var config = {
		      kitId: 'bnr7syi',
		      scriptTimeout: 3000,
		      async: true
		    },
		    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
		  })(document);
		</script>
	</head>
	<body>
		<header class="container-outer theme-1">
			<div class="container-set-width">
				<h1>Interior <span>Modular grid system</span></h1>
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
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-11">
									<div class="inner"></div>
								</div>
								<div class="i-col-1">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-10">
									<div class="inner"></div>
								</div>
								<div class="i-col-2">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-9">
									<div class="inner"></div>
								</div>
								<div class="i-col-3">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-8">
									<div class="inner"></div>
								</div>
								<div class="i-col-4">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-7">
									<div class="inner"></div>
								</div>
								<div class="i-col-5">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-6">
									<div class="inner"></div>
								</div>
								<div class="i-col-6">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-5">
									<div class="inner"></div>
								</div>
								<div class="i-col-7">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-4">
									<div class="inner"></div>
								</div>
								<div class="i-col-8">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-3">
									<div class="inner"></div>
								</div>
								<div class="i-col-9">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-2">
									<div class="inner"></div>
								</div>
								<div class="i-col-10">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row clearfix">
								<div class="i-col-1">
									<div class="inner"></div>
								</div>
								<div class="i-col-11">
									<div class="inner"></div>
								</div>
								<div class="i-col-12">
									<div class="inner"></div>
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
					<p class="text-center">Outputs</p>
					<?php include('includes/code-samples/interior-css-1.php') ?>
					<p class="text-center"><i>Allowing you to create:</i></p>
					<div class="visual-example">
						<div class="grid i-nums demo demo-bg-1 simple-demo-1">
							<div class="i-outer">
								<div class="i-row clearfix">
									<div class="i-col-1">
										<div class="inner"></div>
									</div>
									<div class="i-col-2">
										<div class="inner"></div>
									</div>
									<div class="i-col-3">
										<div class="inner"></div>
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
										<div class="inner"></div>
									</div>
									<div class="i-col-1">
										<div class="inner"></div>
									</div>
									<div class="i-col-1">
										<div class="inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p class="text-center"><i>Then even:</i></p>
					<div class="visual-example">
						<div class="grid i-nums demo demo-bg-1 simple-demo-1">
							<div class="i-outer">
								<div class="i-row clearfix">
									<div class="i-col-3 col-group">
										<div class="i-col-2">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
									</div>
									<div class="i-col-1">
										<div class="inner"></div>
									</div>
									<div class="i-col-2 col-group">
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
									</div>
									<div class="i-col-3">
										<div class="inner"></div>
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
							Create the same simple layouts, yet with the advantages media queries bring along. E.g. <i>adjust your layout at your desired screen width</i>.
						</p>
						<?php include('includes/code-samples/interior-config-4.php') ?>
						<p class="text-center">Outputs</p>
						<?php include('includes/code-samples/interior-css-2.php') ?>
						<p class="text-center">Adjust your markup accordingly</p>
						<?php include('includes/code-samples/interior-markup-1.php') ?>
						<div class="visual-example">
							<div class="grid i-nums demo demo-bg-1 simple-demo-1">
								<div class="i-outer">
									<div class="i-row clearfix">
										<div class="i-col-3 i-col-sm-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-3 i-col-sm-2">
											<div class="inner"></div>
										</div>
										<div class="i-col-3 i-col-sm-3">
											<div class="inner"></div>
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
							We have to use different classes <code class="language-scss">.col-single</code> &amp; <code class="language-scss">.col-group</code> for parent containers due to the amount of padding created when nesting. This enables us to group different numbers of columns, without affecting the gutter widths:
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row clearfix">
								<div class="i-col-4 col-single i-names">
									<div class="inner"></div>
								</div>
								<div class="i-col-8 col-group i-names">
									<div class="i-col-4">
										<div class="inner"></div>
									</div>
									<div class="i-col-4">
										<div class="inner"></div>
									</div>
									<div class="i-col-4">
										<div class="inner"></div>
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
							In this example I have re-used the grouping classes from the previous example <code class="language-scss">.col-single</code> &amp; <code class="language-scss">.col-group</code>:
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer demo-bg-1">
							<div class="i-row">
								<div class="i-col-12 col-single i-names">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-12 col-group">
									<div class="i-row">
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
										<div class="i-col-1">
											<div class="inner"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 col-group">
									<div class="col-group i-names clearfix">
										<div class="i-row">
											<div class="i-col-4">
												<div class="inner"></div>
											</div>
											<div class="i-col-4">
												<div class="inner"></div>
											</div>
											<div class="i-col-4">
												<div class="inner"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="i-col-6 col-group">
									<div class="col-group i-names clearfix">
										<div class="i-row">
											<div class="i-col-6">
												<div class="inner"></div>
											</div>
											<div class="i-col-6">
												<div class="inner"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-12 col-single i-names">
									<div class="inner"></div>
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
							If you would like to position columns wihout changing <code class="language-scss">float: left</code> to <code class="language-scss">float: right</code>, or using <code class="language-scss">margin: auto</code> with <code class="language-scss">display: block</code> you can use offsets.
							Offsets use math percentage values to offset columns, combined with a left margin. Offset CSS is standard, however you can turn it off if you don't want the extra bytes.
						</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row">
								<div class="i-col-6 i-col-p-6 i-names">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 i-col-p-3 i-names">
									<div class="inner"></div>
								</div>
							</div>
							<div class="i-row">
								<div class="i-col-6 col-single no-offset i-names">
									<div class="inner"></div>
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
						<p>No that wasn't me complaining again... One use case scenario for 'flipping' visual appearance of columns is for use with Responsive Web Design (RWD).</p>
						<p>E.g. in a 2 column layout you want a left &amp; right column, yet when you have a single column layout, at a set break-point, you want the left column from your 2 column layout to be beneath the right column in your single columns layout. Unless you change the source order you will not be able to achieve this using CSS &amp; HTML only.</p>
					</div>
					<div class="visual-example">
						<div class="i-outer">
							<div class="i-row">
								<div class="demo-borders clearfix">
									<div class="i-col-8 i-col-f-l-4 i-names">
										<div class="inner"></div>
									</div>
									<div class="i-col-4 i-col-f-r-8 i-names">
										<div class="inner"></div>
									</div>
								</div>
							</div>
							<div class="i-row">
								<div class="demo-borders clearfix">
									<div class="i-col-4 i-col-f-l-8 i-names">
										<div class="inner"></div>
									</div>
									<div class="i-col-8 i-col-f-r-4 i-names">
										<div class="inner"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>	
		</main>

		<footer class="container-outer">
			<div class="container-set-width">
			</div>
			<script src="http://localhost:35729/livereload.js"></script>
			<script type="text/javascript" src="js/functions.js"></script>
		</footer>
	</body>
</html>