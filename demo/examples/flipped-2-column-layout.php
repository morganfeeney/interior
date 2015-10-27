<?php
	$pageTitle = 'Flipped 2 column layout';
	$baseUrl = '../';
	$description = "Learn how to create a flipped 2 column layout using Interior. Don't forget to view the source.";
	include('../includes/eg-head.php');
?>
	<body class="eg eg1">
		<header class="container-outer">
			<div class="container-width">
				<div class="container-inner">
					<div class="i-col-12 i-col-sm-12">
						<h1>Example <small><span>#</span>2</small> <span><?php echo $pageTitle; ?></span></h1>
					</div>
				</div>
			</div>
		</header>
		<main class="container-outer">
			<div class="container-width">
				<div class="container-inner">
					<div class="i-outer">
						<div class="i-row">
							<aside class="i-col-12 i-col-sm-4 i-md-fl-8 eg-bg-1">
								<div class="i-outer">
									<div class="i-inner">
										<h3>This is an aside</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
									</div>
								</div>
							</aside>
							<div class="i-col-12 i-col-sm-8 i-md-fr-4">
								<div class="i-inner">
									<h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
									<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
									<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
									<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<?php include('../includes/eg-footer.php') ?>
	</body>