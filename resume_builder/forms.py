from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,SubmitField
from wtforms.validators import DataRequired,Length,Email, EqualTo

class RegistrationForm(FlaskForm):
    username = StringField('USERNAME',
                            validators=[DataRequired(),Length(min=2,max=20)])
    email = StringField('EMAIL',
                        validators=[DataRequired(), Email()])
    password = PasswordField('PASSWORD',validators=[DataRequired()])                        
    confirm_password = PasswordField('CONFIRM PASSWORD',
                                    validators=[DataRequired(),EqualTo('password')])     
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    username = StringField('USERNAME',
                            validators=[DataRequired(),Length(min=2,max=20)])
    password = PasswordField('PASSWORD',validators=[DataRequired()])                        
    submit = SubmitField('Login')

    