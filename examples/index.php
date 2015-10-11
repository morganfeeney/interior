<?php
	$pageTitle = 'Layout example 1';
	$baseUrl = '../';
	include('../includes/head.php');
?>
<body class="eg eg1">
	<header class="container-outer">
		<div class="container-width">
			<div class="container-inner">
				<div class="i-col-12 i-sm-12">
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
						<div class="i-col-12 i-sm-8">
							<div class="i-inner">
								<dl>
									<dt>
										<a href="eg1.php">Simple 2 column layout</a>
									</dt>
									<dd>
										A main content area with an aside.
									</dd>
									<dt>
										<a href="eg2.php">Simple BLAH column layout</a>
									</dt>
									<dd>
										A BLAH content area with an aside.
									</dd>
								</dl>
							</div>
						</div>
						<aside class="i-col-12 i-sm-4 eg-bg-1">
							<div class="i-outer">
								<div class="i-inner">
									<h3>This is an aside</h3>
									<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	</main>
	<?php include('../includes/eg-footer.php') ?>
</body>