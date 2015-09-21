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
					<p class="large">Interior is a set of fluid and responsive layout tools for front-end web developers &amp; web designers. Built from <a href="http://sass-lang.com/">SASS</a> (SCSS flavour); the idea behind Interior is that it can be configured to suit your needs.</p>
					<?php include('includes/code-samples/interior-config-1.php') ?>
					<p class="large">
						Leaving the default values in place, e.g. <code class="language-scss">$grid-cols: 12</code> will produce a 12 column grid, with a gutter width of .8rem, with grid columns floating to the left:
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
					<h2>As simple as you make it</h2>
					<p class="large">
						Create simple layouts, and output as many columns as required, nested within in as many different classes as needed.
					</p>
					<?php include('includes/code-samples/interior-config-2.php') ?>
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
				</section>

				<section class="grid demo demo-bg-2">
					<h2>Demo 1</h2>
					<p class="large">
						Group nested columns, e.g. sidebar and content area. We have to use different classes <code class="language-scss">.col-single</code> &amp; <code class="language-scss">.col-group</code> for parent containers due to the amount of padding created when nesting:
					</p>
					<?php include('includes/code-samples/nested-demo-1.php') ?>
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

				<!-- Demo 2 -->

				<section class="grid demo demo-bg-1">
					<h2>Demo 2</h2>
					<p class="large">
						How to group columns within columns:
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
					<h2>Demo 3</h2>
					<p class="large">
						How to offset columns:
					</p>
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
							<div class="grid-col-6 col-single">
								<div class="inner"></div>
							</div>
						</div>
					</div>
				</section>

				<!-- Demo 4 -->

				<section class="grid demo demo-bg-3">
					<h2>Demo 3</h2>
					<p class="large">
						How to flip column order:
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