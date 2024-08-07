import os
real_count = 27
PATH = "src/assets/home/images/arrow/"
for i in range(19, 228):
    os.rename(PATH + "{:04}.png".format(i), PATH + "{:03}.png".format(real_count))
    real_count += 1