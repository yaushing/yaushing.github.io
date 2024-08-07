import cv2
import numpy as np
FILE_PATH = "src/assets/home/images/"
for i in range(1, 178):
    URL = "frame-{:04}".format(i) + ".png"
    input = cv2.imread(FILE_PATH + 'arrow/output/' + URL, cv2.IMREAD_COLOR)
    output = cv2.cvtColor(input, cv2.COLOR_BGR2RGBA)
    col = (0, 0, 0)
    tol = (0, 25, 0)
    # Temporary array (subtract color)
    temp = np.subtract(input, col)
    #cv2.imwrite(FILE_PATH + 'arrow/output/' + "frame-{:04}".format(i - 15) + ".png", temp)
    
    # Tolerance mask
    mask = (np.abs(temp) <= tol)
    mask = (mask[:, :, 0] & mask[:, :, 1] & mask[:, :, 2])

    # Generate alpha channel
    temp[temp < 0] = 0                                            # Remove negative values
    alpha = (temp[:, :, 0] + temp[:, :, 1] + temp[:, :, 2]) / 3   # Generate mean gradient over all channels
    alpha[mask] = alpha[mask] / np.max(alpha[mask]) * 255         # Gradual transparency within tolerance mask
    alpha[~mask] = 255                                            # No transparency outside tolerance mask

    # Set alpha channel in output
    output[:, :, 3] = alpha
    cv2.imwrite(FILE_PATH + 'arrow/output2/' + "frame-{:04}".format(i) + ".png", output)
    