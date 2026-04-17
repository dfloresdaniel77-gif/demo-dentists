from PIL import Image, ImageEnhance

# Open the image
img = Image.open('public/assets/after.png').convert('RGB')

# Split bands
r, g, b = img.split()

# Apply tint: increase red and green slightly, decrease blue to make it yellowish
r = r.point(lambda i: min(255, int(i * 1.05)))
g = g.point(lambda i: min(255, int(i * 1.02)))
b = b.point(lambda i: int(i * 0.75))

# Merge back
out = Image.merge('RGB', (r, g, b))

# Decrease brightness to look less pristine
enhancer_brightness = ImageEnhance.Brightness(out)
out = enhancer_brightness.enhance(0.85)

# Save
out.save('public/assets/before.png')
print("before.png generated successfully.")
