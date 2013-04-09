#!/home/eleonore/Documents/Balloony/env/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, render_template, redirect 
from flask import url_for

#port = int(os.environ.get('PORT', 33507))
#heroku config:add PORT=33507

app = Flask(__name__)
app.secret_key = 'this_is_my_not_so_secret_key'
app.config.update(
	DEBUG = True,
)

@app.route("/")
def index():
	return render_template("test_balloony.html")


if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)


