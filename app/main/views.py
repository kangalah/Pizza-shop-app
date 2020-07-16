from flask import render_template, request, redirect, url_for, abort
from flask_login import login_required, current_user
from . forms import SignupForm, LoginForm, TimeForm,OrderForm
from .import main
from .. import db
from ..models import User


@main.route('/')
def index():
    """
    View root page function that returns index page
    """

    # all_category = PitchCategory.get_categories()
    # all_pitches = Pitch.query.order_by('-id').all()
    # print(all_pitches)

    title = 'Home- Welcome'
    return render_template('index.html')

@main.route('/order')
def order():
    '''
    order page function that returns the order details page and its data
    '''
    return render_template('order.html') 

@main.route('/signup')
def signup():
    '''
    Signup page function that returns the signup details page and its data
    '''
    return render_template('signup.html')

    