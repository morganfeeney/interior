<?php
	$pageTitle = 'Example layouts built with Interior';
	$baseUrl = '../';
	$description = 'Learn how to create practical web layouts using Interior.';
	include('../includes/eg-head.php');
?>
<body class="eg eg1">
	<header class="container-outer">
		<div class="container-width">
			<div class="container-inner">
				<div class="i-col-12 i-col-sm-12">
					<h1>Examples <span><?php echo $pageTitle; ?></span></h1>
				</div>
			</div>
		</div>
	</header>
	<main class="container-outer">
		<div class="container-width">
			<div class="container-inner">
				<div class="i-outer">
					<div class="i-row">
						<div class="i-col-12 i-col-sm-8">
							<div class="i-inner">
								<dl>
									<dt>
										<a href="simple-2-column-layout.php">Simple 2 column layout</a>
									</dt>
									<dd>
										A main content area with an aside. A simple, yet practical layout which crops up time and again.
									</dd>
									<dt>
										<a href="flipped-2-column-layout.php">Flipped 2 column layout.</a>
									</dt>
									<dd>
										A main content area with an aside, with visual source order flipped. A responsive version of the simple 2 column layout.
									</dd>
									<dt>
										<a href="product-lister.php">Product lister page layout</a>
									</dt>
									<dd>
										An example of a product lister page layout with an aside. This example demonstrates a worst-case scenario for unpredictably long product titles.
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	<?php include('../includes/eg-footer.php') ?>
</body>