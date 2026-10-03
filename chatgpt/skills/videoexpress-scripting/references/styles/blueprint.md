# Blueprint Technical Drawing (white line on cyanotype blue)

**Type**: custom, tested in production (pass, after three revisions)

- **Medium phrase**: "Vintage cyanotype blueprint technical drawing, fine white lines on deep Prussian-blue drafting paper, widescreen 16:9." Video anchor: "Cyanotype blueprint animation: fine white drafting lines on deep Prussian-blue paper, two line weights, [what grows or turns] while every finished line stays crisp, drafted, not rendered."
- **Character design**: subjects as line drawings only, two weights (heavier outline, hairline detail and construction), faint centre lines, dimension lines with arrowheads but no numerals, an empty ruled title block, a border line inside the frame.
- **Materials / rendering**: mottled uneven cyanotype blue lighter toward the centre, faint fold creases, tiny white specks. No fill, no shading, no colour but white on blue.
- **Light**: flat even light, no shadows or highlights.
- **Motion**: extrude, do not rotate. Lines that draw themselves, walls rising from a plan, one mechanical part turning in the plane of the paper. Camera locked.
- **Stability line**: "Strictly white drafting line on blue cyanotype paper, two line weights, no fill and no shading at any point, every finished line perfectly still and crisp, the paper's mottled tone and creases visible throughout, consistent wireframe drawing."
- **Guards**: no fills, no shading, no solid surfaces, no 3D rendering, no gradients, no colour other than white on blue, no photographic subject, no rotation of the sheet or the subject, no numerals or letters appearing on dimension lines or the title block.
- **Known failures**: a side-elevation biplane with a spinning propeller read as a perspective error (blades edge-on). Asking the drawing to "turn to face the camera" made it spin three or four full turns and the propeller lost its shape; limiting it to "one single quarter turn of exactly ninety degrees" still wobbled. What passed: a floor plan on a sheet seen from a raised three-quarter angle, with walls, door and window rectangles and a pitched roof drawing themselves upward as wireframe, so nothing has to rotate. If a subject must be seen from another angle, generate a second start image at that angle rather than turning the drawing.

Shared image recipe, video pattern and consistency rules: `README.md` in this folder.
