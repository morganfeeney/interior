<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Griddle | All | Demo</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="js/modernizr.custom.73874.js"></script>
		<script src="../../bower_components/jquery/dist/jquery.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<header>
			<nav class="dev-controls">
				<button class="toggle-overlay">
					Toggle Overlay
				</button>
			</nav>
		</header>
		<main class="container container-set-width">
			<section class="intro">
				<h1>Griddle</h1>
				<p class="large">Griddle is a set of fluid and responsive layout tools for front-end web developers. Built from <a href="http://sass-lang.com/">SASS</a> (SCSS) it is configurable to your needs.</p>
				<?php include('includes/code-samples/griddle-config-1.php') ?>
				<p class="large">
					These default values can be overridden e.g.
				</p>
			</section>
			<section class="grid grid-gutter-outer demo demo-bg-1 grid-nums">
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
			<section class="grid demo demo-bg-2">
				<h2>Demo 2</h2>
				<p class="large">
					How to group columns within columns:
				</p>
				<?php //include('includes/code-samples/nested-demo-1.php') ?>
				<div class="grid-gutter-outer">
					<div class="grid-row clearfix">
						<div class="grid-col-12 col-single with-names">
							<div class="inner"></div>
						</div>
						<div class="grid-col-12 col-single">
							<div class="inner">
								<div class="col-group demo-bg-1 col-group-descend demo-borders">
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
						<div class="grid-col-6 col-single">
							<div class="inner">
								<div class="col-group with-names">
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
						<div class="grid-col-6 col-single">
							<div class="inner">
								<div class="col-group with-names">
									<div class="grid-col-6">
										<div class="inner"></div>
									</div>
									<div class="grid-col-6">
										<div class="inner"></div>
									</div>
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
					<div class="grid-row clearfix">
						<div class="col-group-descend">
							<div class="grid-col-6 col-single">
								<div class="inner"></div>
							</div>
						</div>
					</div>
			</section>			
		</main>

		<footer>
			<script type="text/javascript" src="js/functions.js"></script>
		</footer>
	</body>
</html>