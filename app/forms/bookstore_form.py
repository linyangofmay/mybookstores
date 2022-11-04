from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields import (
    SelectField, SelectMultipleField, TextAreaField, SubmitField, IntegerField, FloatField, DecimalField
)
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Bookstore
from decimal import ROUND_HALF_UP


def name_validation(form, field):
    #check name is longer than 5 and less than 100 characters
    name = field.data
    if len(name) < 2 or len(name) > 200:
        raise ValidationError("Name must be more than 5 characters and less than 100 characters")

def description_validation(form, field):
    #check description is longer than 20 characters and less than 500 characters
    description= field.data
    if len(description) < 20 or len(description) > 500:
        raise ValidationError("Description must be more than 20 characters and less than 500 characters")

# def price_validation(form, field):
#     price = field.data
#     if price >4 or price <1:
#         raise ValidationError("Valid price range must be between 1 and 4")

def valid_phone(form, field):
    phone = field.data
    if not len(phone) == 10:
        raise ValidationError("Valid phone number must be 10 digit numbers")
def valid_website(form, field):
    website = field.data
    if len(website) <3 or len(website) >100 :
        raise ValidationError('Website must between 4 and 15 letters ')

def valid_address(form, field):
    address = field.data
    if len(address) < 2  or len(address) >200:
        raise ValidationError("Street address must be between 4 and 50 letters")
def valid_city(form, field):
    city = field.data
    if len(city) > 100  or len(city) < 1:
        raise ValidationError('City must be between 2 and 15 letters ')

def valid_state(form, field):
    state = field.data
    if len(state) > 100  or len(state) < 1:
        raise ValidationError('State must be between 2 and 15 letters ')

# def valid_latitude(form, field):
#     latitude  = field.data
#     if latitude >90 or latitude < -90:
#         raise ValidationError('Latitude must be between -90 and 90.')

# def valid_longitude(form, field):
#     longitude = field.data
#     if longitude >180 or longitude < -180:
#         raise ValidationError('Longitude must be between -180 and 180')


# def imageURL_validation(form, field):
#     img = field.data
#     if not img[-3:] == 'jpg' and (not img[-3:] == 'png') and img[-4:] != 'jpeg' and img[-4:] != 'webp' and img[-3:] != 'gif' and img[-3:] != 'svg':

#         raise ValidationError("Input must be a valid Image Url")


Categories_Choices = ["usedBooks", "stationary", "CD & Video", "restroom", "multiple stories", "coffee", "kids", "lounge"]

Price_Choices=["$", "$$", "$$$", "$$$$"]
Business_Choices=[['07:00 AM - ', '05:00 PM'], ['07:30 AM - ', '05:30 PM'], ['08:00 AM - ', '06:00 PM'], ['08:30 AM - ', '06:30 PM'], ['09:00 AM - ', '07:00 PM'], ['09:30 AM - ', '07:30 PM'], ['10:00 AM - ', '09:00 PM'], ['10:30 AM - ', '09:30 PM'], ['11:00 AM - ', '07:00 PM'], ['11:30 AM - ', '7:30 PM'], ['12:00 PM - ', '10:00 PM']]
#   const businessHoursArr = [['07:00 AM - ', '05:00 PM'], ['07:30 AM - ', '05:30 PM'], ['08:00 AM - ', '06:00 PM'], ['08:30 AM - ', '06:30 PM'], ['09:00 AM - ', '07:00 PM'], ['09:30 AM - ', '07:30 PM'], ['10:00 AM - ', '09:00 PM'], ['10:30 AM - ', '09:30 PM'], ['11:00 AM - ', '07:00 PM'], ['11:30 AM - ', '7:30 PM'], ['12:00 PM - ', '10:00 PM']]
class BookstoreForm(FlaskForm):

    name = StringField("name", validators= [DataRequired()])
    description = TextAreaField("description", validators= [DataRequired()])
    price =StringField("price", validators=[DataRequired()])
    category = SelectField("category", choices = Categories_Choices, validators=[DataRequired()])
    phone = StringField("phone", validators=[DataRequired()])
    website = StringField('website', validators=[DataRequired()])
    address = StringField('address', validators= [DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
    # latitude = IntegerField('latitude', validators=[DataRequired(), valid_latitude])
    # longitude = IntegerField('longitude', validators=[DataRequired(), valid_longitude])
    businessHours = StringField('businessHours', validators=[DataRequired()])
    previewImage = StringField("previewImage", validators= [DataRequired()])
