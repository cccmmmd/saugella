(function($){
	$.fn.swipeEvents = function(){
		return this.each(function(){
			var startX, startY
			var $this = $(this)
			$this.bind('touchstart', onTouchStart)

			function onTouchStart(e){
			if(!$('.pageBox').is(':animated')){
				clearInterval(start);
				$('.cue').fadeOut(100);
			}
				var touches = e.originalEvent.touches
				if(touches && touches.length){
					startX = touches[0].pageX
					startY = touches[0].pageY
					$this.bind('touchmove', onTouchMove)
					$this.bind('touchend', onTouchEnd)
				}
				//e.preventDefault()
			}

			function onTouchMove(e){
				var touches = e.originalEvent.touches
				if(touches && touches.length){
					var deltaX = startX - touches[0].pageX
					//var deltaY = startY - touches[0].pageY
					
					if(deltaX >=  100) $this.trigger('swipeLeft')
					if(deltaX <= -100) $this.trigger('swipeRight')
					// if(deltaY >=  150) //$this.trigger('swipeUp')
					// if(deltaY <= -150) //$this.trigger('swipeDown')

					if(Math.abs(deltaX) >= 100){
						$this.unbind('touchmove', onTouchMove)
						e.preventDefault()
					}
					//if(Math.abs(deltaX) >= 100) $this.unbind('touchmove', onTouchMove)
					

				}
			}

			function onTouchEnd(e){
				$this.unbind('touchmove', onTouchMove)
			}

		})
	}
	
	$.fn.unswipeEvents = function(){
		return this.each(function(){
			var $this = $(this)
			$this.unbind('touchstart')
		})
	}
	
})(jQuery);