// ---------------------------------------------------------
// Draw circles in a grid

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} canvas width 
 * @param {number} canvas height 
 */


function render(frequencyArray, ctx, width, height) {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
	ctx.fillRect(0, 0, width, height)
	ctx.fill()

	const bars = frequencyArray.length 
	const step = width / 32
	const colorStep = 360 / bars
	const pi2 = Math.PI * 2

	// Draw circles in a grid
	frequencyArray.forEach((f, i) => {
		// Scale f to 0 - 30
		const radius = f / 255 * 30
		// calculate x and y as grid 
		const x = i % 32 * step
		const y = Math.floor(i / 32) * step
		// Start new path
		ctx.beginPath()
		// draw circle at x and y of radius
		ctx.arc(x, y, radius, 0, pi2)
		// set fill color
		ctx.fillStyle = `hsla(${colorStep * i}, 100%, 50%, 0.15)`
		ctx.fill()
	})
}


export default render