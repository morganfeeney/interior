<pre rel="scss" class="snippet language-sass"><code><span class="comment">// Create your default grid</span>
@include interior(
	$grid-cols: 3,
	$vert-space: 0
);

<span class="comment">// Set your media query width as a variable</span>
$xs: 400px;

<span class="comment">// Wrap your interior config in the media query</span>
@media(min-width: $xs) {
	@include interior(
		$grid-cols: 3,
		$vert-space: 0,
		<span class="comment">// Reference the variable name. It can be anything you want, 
		// as long it matches the one used in the media query</span>
		$mq: xs
	);	
}
</code></pre>