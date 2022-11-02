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
    if len(name) <= 2 or len(name) > 20:
        raise ValidationError("Name must be more than 5 characters and less than 100 characters")

def description_validation(form, field):
    #check description is longer than 20 characters and less than 500 characters
    description= field.data
    if len(description) < 20 or len(description) > 2000:
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
    if len(address) < 2  or len(address) >20:
        raise ValidationError("Street address must be between 4 and 50 letters")
def valid_city(form, field):
    city = field.data
    if len(city) > 10  or len(city) < 2:
        raise ValidationError('City must be between 2 and 15 letters ')

def valid_state(form, field):
    state = field.data
    if len(state) > 10  or len(state) < 2:
        raise ValidationError('State must be between 2 and 15 letters ')

def valid_latitude(form, field):
    latitude  = field.data
    if latitude >90 or latitude < -90:
        raise ValidationError('Latitude must be between -90 and 90.')

def valid_longitude(form, field):
    longitude = field.data
    if longitude >180 or longitude < -180:
        raise ValidationError('Longitude must be between -180 and 180')


# def imageURL_validation(form, field):
#     img = field.data
#     if not img[-3:] == 'jpg' and (not img[-3:] == 'png') and img[-4:] != 'jpeg' and img[-4:] != 'webp' and img[-3:] != 'gif' and img[-3:] != 'svg':

#         raise ValidationError("Input must be a valid Image Url")


Categories_Choices = ["usedBooks", "stationary", "CD & Video", "restroom", "multiple stories", "coffee", "kids", "lounge"]




class BookstoreForm(FlaskForm):
    name = StringField("name", validators= [DataRequired(), name_validation])
    description = TextAreaField("description", validators= [DataRequired(), description_validation])
    price = IntegerField("Price", validators=[DataRequired()])
    category = SelectField("category",choices = Categories_Choices, validators=[DataRequired()])
    phone = StringField("phone", validators=[DataRequired(), valid_phone])
    website = StringField('website', validators=[DataRequired(), valid_website])
    address = StringField('address', validators= [DataRequired(), valid_address])
    city = StringField('city', validators=[DataRequired(), valid_city])
    state = StringField('state', validators=[DataRequired(), valid_state])
    country = StringField('country', validators=[DataRequired()])
    latitude = IntegerField('latitude', validators=[DataRequired(), valid_latitude])
    longitude = IntegerField('longitude', validators=[DataRequired(), valid_longitude])
    businessHours = StringField('businessHours', validators=[DataRequired()])
    previewImage = StringField("Image URL", validators= [DataRequired()])
