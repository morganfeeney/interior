<?php
	$pageTitle = 'Layout example 1';
	$baseUrl = '../';
	include('../includes/head.php');
?>
<body class="eg eg1">
	<header class="container-outer">
		<div class="container-width">
			<div class="container-inner">
				<div class="i-col-12 i-col-sm-12">
					<h1>Examples <span>Blah de blah</span></h1>
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
										A main content area with an aside.
									</dd>
									<dt>
										<a href="flipped-2-column-layout.php">Flipped 2 column layout</a>
									</dt>
									<dd>
										A main content area with an aside, with visual source order flipped.
									</dd>
									<dt>
										<a href="product-lister.php">Product lister page layout</a>
									</dt>
									<dd>
										A BLAH content area with an aside.
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