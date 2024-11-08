from flask import render_template,url_for,request,redirect
from resume_builder.forms import RegistrationForm,LoginForm
from resume_builder import app,db,bcrypt
from resume_builder.models import User
from flask_login import login_user,logout_user,login_required


@app.route('/')
@app.route('/home')
def home():
    return render_template('home_page.html')

@app.route('/register', methods=['GET','POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():  
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html',form=form)

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user)
            return redirect(url_for('home'))
    return render_template('login.html',form=form)

@app.route('/about')
@login_required
def about():
    return render_template('about.html')

@app.route('/template-page')
@login_required
def template_page():
    return render_template('template.html')

@app.route('/input-1')
@login_required
def input_1():
    return render_template('template_form_part1.html')

@app.route('/input-2')
@login_required
def input_2():
    return render_template('template_form_part1.html')

@app.route('/input-3')
@login_required
def input_3():
    return render_template('template_form_part1.html')

@app.route('/input-4')
@login_required
def input_4():
    return render_template('template_form_part1.html')

@app.route('/your-resume',methods = ['POST', 'GET'])
@login_required
def print_data():  
    if request.method == 'POST': 
        url = request.referrer

        form = request.form 
        if url == 'http://localhost:5000/input-1':
            return render_template("resume1.html",form=form)
        elif url == 'http://localhost:5000/input-2':
            return render_template("resume2.html",form=form)
        elif url == 'http://localhost:5000/input-3':
            return render_template("resume3.html",form=form)
        elif url == 'http://localhost:5000/input-4':
            return render_template("resume4.html",form=form)  

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))
