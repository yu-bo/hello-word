import cv2
import socket
import subprocess as sp
print(cv2.__version__)

writer_ok = False

#视频窗口
cv2.namedWindow("video")

#打开摄像头
video_capture =cv2.VideoCapture(0)

width=int( video_capture.get(cv2.CAP_PROP_FRAME_WIDTH))
height =int(video_capture.get(cv2.CAP_PROP_FRAME_HEIGHT))

size =  (width, height)

fps =int(video_capture.get(cv2.CAP_PROP_FPS))

fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', '2')
#fourcc = cv2.VideoWriter_fourcc('M', 'J', 'P', 'G')


#创建视频写入对象 
video_writer = cv2.VideoWriter()
video_writer.open("input.mp4",fourcc,fps,size,True)

#socket 客户端 
clisocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

success, frame = video_capture.read() 

rtmpUrl="rtmp://192.168.8.129:1935/mylive/live"
# ffmpeg command
command = ['ffmpeg',
        '-y',
        '-f', 'rawvideo',
        '-vcodec','rawvideo',
        '-pix_fmt', 'bgr24',
        '-s', "{}x{}".format(width, height),
        '-r', str(fps),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'ultrafast',
        '-f', 'flv', 
        rtmpUrl]

# 管道配置
p = sp.Popen(command, stdin=sp.PIPE)


while success and not cv2.waitKey(1) == 27: 
    blur_frame = cv2.GaussianBlur(frame, (3, 3), 0) 
    #video_writer.write(blur_frame) 
    #clisocket.sendto(blur_frame, ("127.0.0.1", 1234))
    cv2.imshow("Video", blur_frame) 
    p.stdin.write(frame.tostring())

    success, frame = video_capture.read() 
    

#回收资源 
cv2.destroyWindow('Video') 
video_capture.release() 