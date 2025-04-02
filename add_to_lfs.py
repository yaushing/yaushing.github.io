import os
remove = []
for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
        if '.git' in root:
            continue
        elif os.path.getsize(os.path.join(root, name)) > 100000000:
            #print(os.path.join(root, name), name)
            pass
        if '.blend1' in name:
            remove.append(os.path.join(root, name))
for file in remove:
    print(file)
    os.system(f"rm {os.path.join(root, name)[2:]}")