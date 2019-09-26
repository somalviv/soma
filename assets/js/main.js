/**
 * Soma main script.
 *
 * @package Soma
 */

/**
 * Ancor pages.
 */
function ancorPages() {
	var linkNav = document.querySelectorAll( '.nav-link[href^="#"]' ),
		V = 0.4;

	for ( var i = 0; i < linkNav.length; i++ ) {
		linkNav[i].addEventListener( 'click', function( e ) {
			e.preventDefault();

			var w     = window.pageYOffset,
				hash  = this.href.replace( /[^#]*(.*)/, '$1' );
				t     = document.querySelector( hash ).getBoundingClientRect().top,
				start = null;

			requestAnimationFrame( step );

			function step( time ) {
				if ( start === null ) start = time;

				var progress = time - start,
					r = ( t < 0 ? Math.max( w - progress / V, w + t ) : Math.min( w + progress / V, w + t ) );

				window.scrollTo( 0, r );

				if ( r != w + t ) {
					requestAnimationFrame( step )
				} else {
					location.hash = hash
				}
			}
		}, false );
	}
}

ancorPages();

/**
 * Toggle Images.
 */
function toggleImages( selector, interval ) {
	var $elems = $( selector );
	$elems.slice( 1 ).hide();
	var elemId = 0;

	return setInterval( function() {
		$elems.eq( elemId ).hide();
		elemId = ( elemId + 1 ) % $elems.length;
		$elems.eq( elemId ).show();
	}, interval );
}

toggleImages( '.images > .image', 1000 );

/**
 * Marquee.
 */
(function(){"use strict";window.marquee=function(i){i=i||{};var n=i.selector||".marquee",o=i.spacing||"0",r=document.querySelectorAll(n),a=window.innerWidth;s();function s(){for(var e=0;e<r.length;e++){var n=r[e],s=n.innerHTML,l=document.createElement("div"),p=document.createElement("span"),u=0,v;n.innerHTML="";n.appendChild(l);l=n.children[0];l.style.whiteSpace="nowrap";l.style.position="absolute";n.position=0;n.content=s;n.vertical=n.dataset.vertical=="true";n.reverse=n.dataset.reverse=="true";n.pausable=n.dataset.pausable=="true";n.hover=n.dataset.hover=="true";n.direction=n.reverse?1:-1;n.speed=(n.dataset.speed?n.dataset.speed/60:50/60)*n.direction;n.delay=n.dataset.delay*60||0;n._delay=0;n.callback=n.dataset.callback;if(i.randomSpeed&&!n.dataset.speed){var y=Math.floor(Math.random()*50)+10;n.speed=y/60*n.direction}p.innerHTML=n.content;p.style.display="inline-block";p.style.paddingRight=o;v=p.cloneNode(true);l.appendChild(p);n.contentWidth=l.offsetWidth;n.contentHeight=f(n);n.style.overflow="hidden";n.style.visibility="hidden";n.style.position="relative";n.style.width=(n.parentElement.offsetWidth||window.innerWidth)+"px";n.style.height=n.contentHeight+"px";l.appendChild(v);u=l.offsetWidth;if(n.vertical){n.classList.add("marquee--vertical");n.style.width=n.contentHeight+"px";n.style.height=(n.parentElement.offsetHeight||window.innerHeight)+"px";l.style.transform="rotate(-90deg)";if(!n.reverse){l.style.transformOrigin="0% 0%";l.style.left=0;l.style.top="100%"}else{l.style.transformOrigin="100% 100%";l.style.bottom="100%";l.style.right=0}}else{l.style.top="calc(50% - "+n.contentHeight/2+"px)";if(n.reverse){l.style.right=0}}while(u<a+n.contentWidth*2){v=p.cloneNode(true);l.appendChild(v);u+=n.contentWidth}n.isPaused=n.hover||!t(n);n.style.visibility="visible";n.classList.add("is-ready");(function(e){if(n.pausable){r[e].addEventListener("mouseenter",function(){r[e].isPaused=true});r[e].addEventListener("mouseleave",function(){r[e].isPaused=false})}if(n.hover){r[e].addEventListener("mouseenter",function(){r[e].isPaused=false});r[e].addEventListener("mouseleave",function(){r[e].isPaused=true})}})(e)}d();window.addEventListener("resize",c);window.addEventListener("scroll",h)}function d(){for(var e=0;e<r.length;e++){var t=r[e],i=window[t.callback];if(t._delay<t.delay){t._delay+=1}else if(!t.isPaused){if(!t.vertical){if(t.reverse){if(t.position>=t.contentWidth){if(t.callback&&typeof i==="function")i();t.position=0}}else{if(t.position<=t.contentWidth*-1){if(t.callback&&typeof i==="function")i();t.position=0}}t.position+=t.speed;t.children[0].style.transform="translate3d("+t.position+"px, 0, 0)"}else{if(t.reverse){if(t.position<=t.contentWidth*-1)t.position=0}else{if(t.position>=t.contentWidth)t.position=0}t.position-=t.speed;t.children[0].style.transform="translate3d(0, "+t.position+"px, 0) rotate(-90deg)"}}}window.requestAnimationFrame(d)}function l(){for(var e=0;e<r.length;e++){var t=r[e],i=t.children[0];t.contentWidth=i.children[0].offsetWidth;t.contentHeight=f(t);t.style.width=t.parentElement.offsetWidth||window.innerWidth+"px";t.style.height=t.contentHeight+"px";i.style.top="calc(50% - "+t.contentHeight/2+"px)"}}function c(){e(function(){l();if(window.innerWidth>a){for(var e=0;e<r.length;e++){var t=r[e],i=t.children[0],n=i.offsetWidth,o=t.querySelector("span");while(n<window.innerWidth+t.contentWidth*2){var s=o.cloneNode(true);i.appendChild(s);n+=o.offsetWidth}}a=window.innerWidth}},i.resizeDebounce||500)}function f(e){var t=e.children[0].children;t=Array.from(t);t=t.map(function(e){return e.offsetHeight});return Math.max(...t)}function h(){e(function(){for(var e=0;e<r.length;e++){if(t(r[e])){r[e].isPaused=false}else{r[e].isPaused=true}}},500)}};function e(e,t,i){var n,o=this,r=arguments,a=function(){n=null;if(!i)e.apply(o,r)},s=i&&!n;clearTimeout(n);n=setTimeout(a,t);if(s)e.apply(o,r)}function t(e){var t=e.getBoundingClientRect(),i=document.documentElement;return!e.hover&&t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||i.clientHeight)&&t.right<=(window.innerWidth||i.clientWidth)||window.getComputedStyle(e,null).getPropertyValue("position")=="fixed"}})();marquee();
