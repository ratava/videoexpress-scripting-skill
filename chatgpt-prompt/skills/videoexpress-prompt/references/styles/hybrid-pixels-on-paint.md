# Hybrid: Pixel-Art Character on a Painted Background

**Type**: custom hybrid (two media), tested in production (pass)

- **Medium phrase**: "A retro adventure-game scene, widescreen 16:9, in two distinct styles. The character is pixel art: built from clearly visible large square pixels with crisp stepped edges, a limited palette, no anti-aliasing and no smooth curves. The background is a smooth hand-painted digital painting with soft blended brushwork, atmospheric haze and no visible pixel grid at all, like a scanned gouache painting." Video anchor: "Retro adventure-game animation: a large-square-pixel sprite with crisp stepped edges walking in a stepped pixel walk cycle over a smooth hand-painted background with no pixel grid, pixel art over painted scenery, not rendered."
- **Character design**: a sprite about a third of frame height, large square pixels with a dark pixel outline, a few-pixel emblem for detail, a hard-edged pixel shadow on the painted ground.
- **Materials / rendering**: the background soft, blended and unpixelated with painted edges and atmospheric depth; the 1990s adventure-game look where sprites met scanned paintings.
- **Light**: warm late sun read as a few lighter pixels on the sprite's lit edges and soft painted highlights and long shadows on the scenery.
- **Motion**: a stepped pixel walk cycle of a few repeating frames; a two-frame stop and a single-frame turn; one side-scrolling track with the painting scrolling smoothly.
- **Stability line**: "Strictly two styles: the [character] in large crisp square pixels with stepped edges and no anti-aliasing, the background in smooth blended painting with no pixel grid; coherent square pixel clusters during movement with no smoothing or texture crawling, the painting staying soft and unpixelated, stable palette, consistent sprite design."
- **Guards**: no pixelation of the background, no smoothing or anti-aliasing of the sprite, no change in pixel size, no photorealism, no 3D rendering, no live-action look, no user-interface bars, no health bars, no menus.
- **Known failures**: none in the test take (knight walking past a castle). The expected drift is the model pixelating everything; "no pixel grid in the background" is repeated in every block for that reason.

Shared image recipe, video pattern and consistency rules: `README.md` in this folder.
