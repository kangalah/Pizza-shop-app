from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField, FormField
from wtforms.validators import DataRequired, Email, Length


class SignupForm(FlaskForm):
    first_name = StringField("First Name", validators=[DataRequired("Please enter your First Name.")])
    last_name = StringField("Last Name", validators=[DataRequired("Please enter your Last Name")])
    email = StringField("Email", validators=[DataRequired("Please enter your email address."), Email("Pelase enter a valid email. name@host.com")])
    password = PasswordField("Password", validators=[DataRequired("Please enter your password"), Length(min=6,message="Passwords must be at least 6 characters in length.")])
    submit = SubmitField("Sign Up")


class LoginForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired("Please enter your email address.")])
    password = PasswordField("Password", validators=[DataRequired("Please enter a password.")])
    submit = SubmitField("Sign In")


class TimeForm(FlaskForm):
    hour = SelectField("Hour", choices=[("1:", "1"), ("2:", "2"), ("3:", "3"), ("4:", "4"), ("5:", "5"), ("6:", "6"),
                                        ("7:", "7"), ("8:", "8"), ("9:", "9"), ("10:", "10"), ("11:", "11"),
                                        ("12:", "12")])
    minute = SelectField("Minute", choices=[("00", ":00"), ("15", ":15"), ("30", ":30"), ("45", ":45")])
    am_pm = SelectField("AM/PM", choices=[("AM", "AM"), ("PM", "PM")])


class OrderForm(FlaskForm):
    pizza = StringField("What type of pizza would you like?", validators=[DataRequired("Please enter a pizza.")])
    time = FormField(TimeForm)
    now_or_later = SelectField("Is your pizza for now or later?", choices=[("NOW", "Now"), ("LATER", "Later")])
    delivery = SelectField("Would you like your pizza delivered or take out?",choices=[("DELIVERY", "Delivery"), ("TAKEOUT", "Take Out")])
    submit = SubmitField("Place Order")

