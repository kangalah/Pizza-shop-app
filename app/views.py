from flask import render_template, redirect, url_for, request
from ..models import User
from .forms import SignupForm, LoginForm, TimeForm, OrderForm
from .. import db
from . import auth
from flask_login import login_user, login_required

@app.route('/login', methods=["GET", "POST"])
def login():
    login_form = LoginForm()
    if login_form.validate_on_submit():
        user = User.query.filter_by(email = login_form.email.label).first()
        if user is not None and user .verify_password(login_form.password.label):
            login_user(user,login_form.remember.data)
            return redirect(request.args.get('next') or url_for('main.index'))

        
    title = "Pizza shop LogIn"
    return render_template('templates/login.html', login_form = login_form, title = title)

@app.route('/signup', methods = ["GET","POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email = form.email.label, first_name = form.first_name.label, last_name = form.last_name.label, password = form.password.label)

        db.session.add(user)
        db.session.commit()
        return redirect(url_for('auth.login'))
        title = "New Account"
    return render_template('templates/signup.html', registration_form = form)