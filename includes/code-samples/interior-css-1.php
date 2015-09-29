<pre rel="css" class="snippet language-css"><code>.simple-demo-1 .grid-outer {
  padding: 0.4rem;
  clear: both;
}
.simple-demo-1 .grid-row {
  padding: 0;
}
.simple-demo-1 .grid-row:first-of-type {
  padding-top: 0;
}
.simple-demo-1 .grid-row:last-of-type {
  padding-bottom: 0;
}
.simple-demo-1 .grid-col-1 {
  width: 33.3333%;
}
.simple-demo-1 .grid-col-2 {
  width: 66.6667%;
}
.simple-demo-1 .grid-col-3 {
  width: 100%;
}
.simple-demo-1 [class*=grid-col] {
  padding: 0.4rem;
  min-height: .1rem;
  position: relative;
  float: left;
}
.simple-demo-1 [class*=grid-col].col-group {
  padding: 0;
}</code></pre>