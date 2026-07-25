import cv2

path_str = "M 453 34 L 451 90 L 332 91 L 331 161 L 266 187 L 217 138 L 129 226 L 177 275 L 149 341 L 80 344 L 81 468 L 147 468 L 177 537 L 129 586 L 218 672 L 227 316 L 330 228 L 451 227 L 451 423 L 343 290 L 255 289 L 255 709 L 337 778 L 338 722 L 457 721 L 459 649 L 521 623 L 577 669 L 660 585 L 610 535 L 636 470 L 709 466 L 708 343 L 638 343 L 610 278 L 660 226 L 572 138 L 557 497 L 464 580 L 337 585 L 338 409 L 422 513 L 534 513 L 534 103 Z"

html = f"""
<!DOCTYPE html>
<html>
<body>
<svg viewBox="0 0 800 800" width="400" height="400" style="background: black;">
  <path d="{path_str}" fill="none" stroke="red" stroke-width="5" />
</svg>
</body>
</html>
"""

with open("test.html", "w") as f:
    f.write(html)
