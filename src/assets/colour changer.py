import cv2
import numpy as np
FILE_PATH = "src/assets/images/projects/"
for i in range(1, 64):
    URL = "ezgif-frame-0{:02}".format(i) + ".png"
    input = cv2.imread(FILE_PATH + 'imgs/' + URL, cv2.IMREAD_COLOR)
    output = cv2.cvtColor(input, cv2.COLOR_BGR2RGBA)
    col = (0, 0, 0)
    tol = (25, 25, 25)
    temp = np.subtract(input, col)
    mask = (np.abs(temp) <= tol)
    mask = (mask[:, :, 0] & mask[:, :, 1] & mask[:, :, 2])
    temp[temp < 0] = 0                                            
    alpha = (temp[:, :, 0] + temp[:, :, 1] + temp[:, :, 2]) / 3   
    alpha[mask] = alpha[mask] / np.max(alpha[mask]) * 255         
    alpha[~mask] = 255                                            
    output[:, :, 3] = alpha
    cv2.imwrite(FILE_PATH + 'output/' + "frame-{:02}".format(i) + ".png", output)