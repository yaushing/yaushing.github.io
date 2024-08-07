import os
real_count = 1
PATH = "src/assets/home/images/arrow/"
for i in range(27, 236):
    os.rename(PATH + "{:03}.png".format(i), PATH + "{:03}.png".format(real_count))
    real_count += 1