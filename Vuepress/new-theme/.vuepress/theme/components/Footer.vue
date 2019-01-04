<template>
<footer id="footer">
		
		<!-- Copyright -->
		<small>© Copyright. AchtungThemes 2018</small>

		<!-- Social/Contact Links -->
		<div class="small text-links">
			<a href="#">Facebook</a>
			<a href="#">Behance</a>
			<a href="#">Instagram</a>
		</div>

	</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .sticky-header.sticky-footer #footer {
    position: fixed;
}
  .small, .text-small, small {
    font-size: 1.19rem;
    color: #909090;
}
.small, small {
    font-size: 80%;
    font-weight: 400;
}

#footer .text-links {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.text-links a {
    position: relative;
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    color: inherit;
}

.text-links a:after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: currentColor;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
}

.text-links a:not(:first-child):before {
    content: '/';
    position: absolute;
    width: 1.3em;
    right: 100%;
    text-align: center;
    color: rgba(0,0,0,.6);
}
.text-links a:after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: currentColor;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
}
#footer {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    padding: 0 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #000;
    border-top: 1px solid rgba(255,255,255,.08);
    color: #717171;
    z-index: 999;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
</style>
