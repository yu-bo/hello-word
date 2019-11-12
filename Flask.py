from flask import Flask,request,session,escape,render_template,make_response,jsonify,send_file
import flask_login
from flask_bootstrap import Bootstrap
import os
import time
import logging

import tornado.websocket
from tornado.ioloop import IOLoop
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
import json

app = Flask(__name__)

#bootstrap = Bootstrap(app)
login_manager =flask_login.LoginManager()
login_manager.init_app(app)

login_manager.login_view='login'
login_manager.login_message='please login!'
login_manager.session_protection='strong'


#logger=app.logger
logger =logging.getLogger()


def make_dir():
    current_path = os.getcwd()
    path = current_path+ "\logs\\" 
    if not os.path.exists(path):
        os.makedirs(path)
    return path
def logger_config():
    
    log_file_name = 'logger-' + time.strftime("%y-%m-%d",time.localtime(time.time())) + '.log'
    log_file_str =make_dir() + log_file_name
    log_level = logging.DEBUG
    log_format = logging.Formatter('%(asctime)s - %(levelname)s - %(filename)s - %(funcName)s - %(lineno)s - %(message)s')
    # 输出到文件
    file_handler=logging.FileHandler(log_file_str,encoding='utf-8')
    file_handler.setLevel(log_level)
    file_handler.setFormatter(log_format)
    # 输出到控制台
    console_handle=logging.StreamHandler()
    console_handle.setLevel(log_level)
    console_handle.setFormatter(log_format)
    logger.handlers.clear()
    logger.addHandler(file_handler)
    logger.addHandler(console_handle)

logger_config()

def save_wave_file(file_name,data):
    wf = wave.open(file_name,'wb')
    # wf.setnchannels(1)
    # wf.setsampwidth(2)
    # wf.setframerate(16000)
    wf.writeframes(data)
    wf.close()

@app.route('/')
def hello_world():
    return "hello_world"

@app.route('/index', methods=['GET', 'POST'])
def index():
    logger.debug("index page")
    logger.debug("cookie name %s" % request.cookies.get('username'))

    if 'username' in session:
        logger.debug("login user is %s" % flask_login.current_user)
        logger.debug('Logged in as %s' % escape(session['username']))
        return send_file('templates/index.html', name=session['username'])
    else:
        logger.warning("you are not logged in")
        return send_file('templates/index.html')

@app.route('/test', methods=['GET', 'POST'])
def test():
    message="123123"
    return send_file("templates/test.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        logger.debug("login post method")
        username = request.form['username']
        password = request.form['password']

        if username == 'admin' and password == 'admin123':

            session['username'] = username
            session['password'] = password
            resp = make_response(render_template('index.html', name=username))
            resp.set_cookie('username', username)
            # return resp
            return jsonify({'status': '0', 'errmsg': '登录成功！'})
        else:
            # return redirect(url_for('error'))
            return jsonify({'status': '-1', 'errmsg': '用户名或密码错误！'})

    logger.debug("login get method")
    return render_template('login.html')

# @socketio.on('message')
# def handle_message(message):
#     print('received message: ' + message)


class webRTCServer(tornado.websocket.WebSocketHandler):
    # 用户集合
    clients = set()
    users = {}
    current_path = os.path.abspath(".")

    def open(self):
        # 连接建立时触发
        logger.info("client connect %s",  str( self))
        self.clients.add(self)
        print(self)

    def on_message(self, message):
        #收到消息 
        data = json.loads(message)
        logger.info("on message    %s :  %s", data["formID"],data["type"])
        if(data["type"]=="signin"):
            self.users[data["formID"]]=self
            answer = {
                "type":"signin",
                "status":"success"
            }
            self.write_message( json.dumps(answer))
        if(data["type"]=="getUserList"):
            answer={
                "type":"getUsers",
                "status":"success",
                "data": list(self.users.keys())
            }
            self.write_message( json.dumps(answer))
        if(data["type"]=="video-offer"):
            data=data["data"]
            fromID=data["fromID"]
            targetID=data["targetID"]
            localDescription =data["localDescription"]
            if(self.users.get(targetID)):
                answer={
                    "type":"getUsers",
                    "status":"success",
                    "data": localDescription
                }
                Remoteclient=self.users.get(targetID)
                Remoteclient.write_message( json.dumps(answer))
            print(data)


    def on_close(self):
        print("client close")
        # 链接断开时移除用户
        self.clients.remove(self)

    def check_origin(self, origin):
        # 允许跨域访问
        return True
app_socket = tornado.web.Application([(r"/", webRTCServer),], debug=True)

if __name__ == "__main__":
    current_path = os.getcwd()
    print(os.path.abspath("."))
    # ssl_options={
    #        "certfile": current_path + "\key\cas.clientservice.cer",
    #        "keyfile": current_path + "\key\cas.clientservice.key",
    #    }
    #启动服务器 
    http_server = HTTPServer(WSGIContainer(app),  ssl_options={
           "certfile": current_path + "\key\cas.clientservice.cer",
           "keyfile": current_path + "\key\cas.clientservice.key",
       })
    http_server.listen(5000)
    #http_server.start(10)


    # 启动服务器
    http_server_socket = tornado.httpserver.HTTPServer(app_socket,  ssl_options={
           "certfile": current_path + "\key\cas.clientservice.cer",
           "keyfile": current_path + "\key\cas.clientservice.key",
       })
    http_server_socket.listen(8000)
    #http_server_socket.start(10)
    IOLoop.current().start()
    #app.run()
