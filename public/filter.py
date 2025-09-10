# Open and read file
import os
print("Current working directory:", os.getcwd())

with open("public\solutions.txt", "r", encoding="utf-8") as f:
    words = f.read().splitlines()


# Keep only 5-letter alphabetic words, remove duplicates
filtered = {word.strip().lower() for word in words if len(word.strip()) == 5 and word.strip().isalpha()}

# Save back into a new file
with open("filtered_solutions.txt", "w", encoding="utf-8") as f:
    for word in sorted(filtered):
        f.write(word + "\n")
