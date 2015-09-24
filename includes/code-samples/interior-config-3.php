<pre rel="scss" class="snippet language-sass"><code><span class="comment">// Set the number of columns in your grid</span>
$grid-cols: 12;
$push-cols: $grid-cols;
$flip-cols: $grid-cols;

<span class="comment">// Set the grid gutter width, this will be divided by 2 then added back together by adjacent columns</span>
$grid-gutter-width: .8rem;

<span class="comment">// Add or remove padding from the wrapper `.grid-outer`</span>
$grid-outer: ($grid-gutter-width / 2);

<span class="comment">// Set the default grid alignment</span>
$grid-align: left;
$vert-space: 1rem 0;
</code></pre>