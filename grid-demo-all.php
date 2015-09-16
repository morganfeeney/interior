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
		<header class="container-outer">
			<div class="container-set-width">
				<h1>Interior</h1>
			</div>
		</header>
		<main class="container-outer">
			<div class="container-set-width">
				<section class="intro">
					<p class="large">Interior is a set of fluid and responsive layout tools for front-end web developers. Built from <a href="http://sass-lang.com/">SASS</a> (SCSS) it is configurable to your needs.</p>
					<?php include('includes/code-samples/griddle-config-1.php') ?>
					<p class="large">
						if you leave the default <code>.grid-cols</code> set to 12 you will get the following columns:
					</p>
				</section>
				<section class="grid grid-nums grid-gutter-outer demo demo-bg-1">
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
					</div>
				</section>
				<section class="grid demo demo-bg-2">
					<h2>Demo 1</h2>
					<p class="large">
						How to group nested columns, e.g. sidebar and content area:
					</p>
					<?php include('includes/code-samples/nested-demo-1.php') ?>
					<div class="grid-gutter-outer">
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
					<div class="grid-gutter-outer demo-bg-1">
						<div class="grid-row clearfix">
							<div class="grid-col-12 col-single with-names">
								<div class="inner"></div>
							</div>
							<div class="grid-col-12">
								<div class="col-group demo-bg-1 col-group-descend demo-borders clearfix">
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
							<div class="grid-col-6 col-group">
								<div class="col-group with-names clearfix">
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
							<div class="grid-col-6 col-group">
								<div class="col-group with-names clearfix">
									<div class="grid-col-6">
										<div class="inner"></div>
									</div>
									<div class="grid-col-6">
										<div class="inner"></div>
									</div>
								</div>
							</div>
							<div class="grid-col-12 col-single with-names">
								<div class="inner"></div>
							</div>
						</div>
					</div>
				</section>
				<section class="grid demo demo-bg-1">
					<h2>Demo 3</h2>
					<p class="large">
						How to offset columns:
					</p>
					<div class="grid-row">
						<div class="col-group-descend clearfix">
							<div class="grid-col-6 grid-col-push-6 with-names">
								<div class="inner"></div>
							</div>
						</div>
					</div>
					<div class="grid-row">
						<div class="col-group-descend clearfix">
							<div class="grid-col-6 grid-col-push-3 with-names">
								<div class="inner"></div>
							</div>
						</div>
					</div>
					<div class="grid-row">
						<div class="col-group-descend clearfix">
							<div class="grid-col-6 col-single">
								<div class="inner"></div>
							</div>
						</div>
					</div>
				</section>
				<section class="grid demo demo-bg-1">
					<h2>Demo 3</h2>
					<p class="large">
						How to flip column order:
					</p>
						<div class="grid-row">
							<div class="col-group-descend demo-borders clearfix">
								<div class="grid-col-8 grid-col-flip-left-4 with-names">
									<div class="inner"></div>
								</div>
								<div class="grid-col-4 grid-col-flip-right-8 with-names">
									<div class="inner"></div>
								</div>
							</div>
						</div>
				</section>
			</div>	
		</main>

		<footer class="container-outer">
			<div class="container-set-width">
			</div>
			<script type="text/javascript" src="js/functions.js"></script>
		</footer>
	</body>
</html>