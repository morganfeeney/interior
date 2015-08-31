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
			<section class="grid grid-gutter-outer demo demo-1">
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
			<section class="grid demo demo-2">
				<h2>Nested Demo 1</h2>
				<p class="large">
					How to group nested columns, e.g. sidebar and content area:
				</p>
				<?php include('includes/code-samples/nested-demo-1.php') ?>
				<div class="grid-gutter-outer demo demo-2">
					<div class="grid-row clearfix">
						<div class="grid-col-4 col-single">
							<div class="inner"></div>
						</div>
						<div class="grid-col-8 col-group">
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
			<section class="grid grid-gutter-outer demo demo-3">
				<h2>Nested Demo 2</h2>
				<p class="large">
					Nesting columns using background-colour to create the grid-gutter:
				</p>
				<div class="grid-row clearfix">
					<div class="grid-col-4 col-single">
						<div class="inner">
							<p>This is some text for layout purposes, it can go on a bit.</p>
						</div>
					</div>
					<div class="grid-col-8 col-group">
						<div class="inner">
							<div class="grid-col-4">
								<p>This is some text for layout purposes, it can go on a bit.</p>
								<p>This is some text for layout purposes, it can go on a bit.</p>
							</div>
							<div class="grid-col-4">
								<p>This is some text for layout purposes, it can go on a bit.</p>
							</div>
							<div class="grid-col-4">
								<p>This is some text for layout purposes, it can go on a bit.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="grid grid-gutter-outer demo demo-4">
				<div class="grid-col-12">
					<h2>Nested Demo 3</h2>
					<p class="large">
						Nesting columns with visual aid:
					</p>
				</div>
				<div class="grid-row clearfix">
					<div class="grid-col-4 col-single">
						<p class="filler">This is some text for layout purposes, it can go on a bit.</p>
					</div>
					<div class="grid-col-8 col-group">
						<div class="grid-col-4">
							<p class="filler">This is some text for layout purposes, it can go on a bit.</p>
							<p class="filler">This is some text for layout purposes, it can go on a bit.</p>
						</div>
						<div class="grid-col-4">
							<p class="filler">This is some text for layout purposes, it can go on a bit.</p>
						</div>
						<div class="grid-col-4">
							<p class="filler">This is some text for layout purposes, it can go on a bit.</p>
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