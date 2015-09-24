<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Interior | All | Demo</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="js/modernizr.custom.73874.js"></script>
		<script src="../../bower_components/jquery/dist/jquery.js"></script>
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
					<?php include('includes/code-samples/interior-config-3.php') ?>
					<p>
						Leaving the default values in place, e.g. <code class="language-scss">$grid-cols: 12</code> will produce a 12 column grid, with a <strong>total</strong> gutter width of .8rem, with grid columns aligned from the left:
					</p>
					<section class="grid grid-nums demo demo-bg-1">
						<div class="grid-outer">
							<div class="grid-row clearfix">
								<div class="grid-col-12">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-11">
									<div class="inner"></div>
								</div>
								<div class="grid-col-1">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-10">
									<div class="inner"></div>
								</div>
								<div class="grid-col-2">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-9">
									<div class="inner"></div>
								</div>
								<div class="grid-col-3">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-8">
									<div class="inner"></div>
								</div>
								<div class="grid-col-4">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-7">
									<div class="inner"></div>
								</div>
								<div class="grid-col-5">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-6">
									<div class="inner"></div>
								</div>
								<div class="grid-col-6">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-5">
									<div class="inner"></div>
								</div>
								<div class="grid-col-7">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-4">
									<div class="inner"></div>
								</div>
								<div class="grid-col-8">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-3">
									<div class="inner"></div>
								</div>
								<div class="grid-col-9">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-2">
									<div class="inner"></div>
								</div>
								<div class="grid-col-10">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row clearfix">
								<div class="grid-col-1">
									<div class="inner"></div>
								</div>
								<div class="grid-col-11">
									<div class="inner"></div>
								</div>
								<div class="grid-col-12">
									<div class="inner"></div>
								</div>
							</div>
						</div>
					</section>
					<h2>Modular mixins</h2>
					<p>Interior can be re-used over and over again, by declaring your desired units within a mixin you can leave the defaults in place, knowing that they will be overridden.</p>
					<?php include('includes/code-samples/interior-config-1.php') ?>
					<h2>As simple as you make it</h2>
					<p>
						Create simple layouts, and output as many columns as required, nested within in as many different classes as needed.
					</p>
					<section class="grid grid-nums demo demo-bg-1 simple-demo-1">
						<div class="grid-outer">
							<div class="grid-row clearfix">
								<div class="grid-col-1">
									<div class="inner"></div>
								</div>
								<div class="grid-col-2">
									<div class="inner"></div>
								</div>
								<div class="grid-col-3">
									<div class="inner"></div>
								</div>
							</div>
						</div>
					</section>	
					<?php include('includes/code-samples/interior-config-2.php') ?>
			
				</section>

				<section class="grid demo demo-bg-2">
					<h2>Group nested columns</h2>
					<p>
						We have to use different classes <code class="language-scss">.col-single</code> &amp; <code class="language-scss">.col-group</code> for parent containers due to the amount of padding created when nesting. This enables us to group different numbers of columns, without affecting the gutter widths:
					</p>
					<section>
						<div class="grid-outer">
							<div class="grid-row clearfix">
								<div class="grid-col-4 col-single with-names">
									<div class="inner"></div>
								</div>
								<div class="grid-col-8 col-group with-names">
									<div class="grid-col-4">
										<div class="inner"></div>
									</div>
									<div class="grid-col-4">
										<div class="inner"></div>
									</div>
									<div class="grid-col-4">
										<div class="inner"></div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<?php include('includes/code-samples/nested-demo-1.php') ?>
				</section>

				<!-- Demo 2 -->

				<section class="grid demo demo-bg-1">
					<h2>Nest columns within columns</h2>
					<p>
						In this example I have re-used the grouping classes from the previous example <code class="language-scss">.col-single</code> &amp; <code class="language-scss">.col-group</code>:
					</p>
					<div class="grid-outer demo-bg-1">
						<div class="grid-row">
							<div class="grid-col-12 col-single with-names">
								<div class="inner"></div>
							</div>
						</div>
						<div class="grid-row">
							<div class="grid-col-12 col-group">
								<div class="grid-row">
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
									<div class="grid-col-1">
										<div class="inner"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-row">
							<div class="grid-col-6 col-group">
								<div class="col-group with-names clearfix">
									<div class="grid-row">
										<div class="grid-col-4">
											<div class="inner"></div>
										</div>
										<div class="grid-col-4">
											<div class="inner"></div>
										</div>
										<div class="grid-col-4">
											<div class="inner"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="grid-col-6 col-group">
								<div class="col-group with-names clearfix">
									<div class="grid-row">
										<div class="grid-col-6">
											<div class="inner"></div>
										</div>
										<div class="grid-col-6">
											<div class="inner"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-row">
							<div class="grid-col-12 col-single with-names">
								<div class="inner"></div>
							</div>
						</div>
					</div>
				</section>

				<!-- Demo 3 -->

				<section class="grid demo demo-bg-3 clearfix">
					<h2>Offset columns</h2>
					<p>
						If you would like to position columns wihout changing <code class="language-scss">float: left</code> to <code class="language-scss">float: right</code>, or using <code class="language-scss">margin: auto</code> with <code class="language-scss">display: block</code> you can use offsets.
						Offsets use math percentage values to offset columns, combined with a left margin. Offset CSS is standard, however you can turn it off if you don't want the extra bytes.
					</p>
					<section>
						<div class="grid-outer">
							<div class="grid-row">
								<div class="grid-col-6 grid-col-push-6 with-names">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row">
								<div class="grid-col-6 grid-col-push-3 with-names">
									<div class="inner"></div>
								</div>
							</div>
							<div class="grid-row">
								<div class="grid-col-6 col-single no-offset with-names">
									<div class="inner"></div>
								</div>
							</div>
						</div>
					</section>
					<?php include('includes/code-samples/offset-demo-1.php') ?>
				</section>

				<!-- Demo 4 -->

				<section class="grid demo demo-bg-3">
					<h2>Flip columns</h2>
					<p>
						 The usual use case scenario for flipping visual appearance of columns is for use with Responsive Web Design. For example you want the left column to be the second column going down the page once your columns eventually span the full width, at a set break-point. Unless you change the source order you will not be able to achieve this using CSS.
					</p>
					<div class="grid-outer">
						<div class="grid-row">
							<div class="demo-borders clearfix">
								<div class="grid-col-8 grid-col-flip-left-4 with-names">
									<div class="inner"></div>
								</div>
								<div class="grid-col-4 grid-col-flip-right-8 with-names">
									<div class="inner"></div>
								</div>
							</div>
						</div>
						<div class="grid-row">
							<div class="demo-borders clearfix">
								<div class="grid-col-4 grid-col-flip-left-8 with-names">
									<div class="inner"></div>
								</div>
								<div class="grid-col-8 grid-col-flip-right-4 with-names">
									<div class="inner"></div>
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