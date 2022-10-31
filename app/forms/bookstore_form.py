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
    if len(name) < 5 or len(name) > 1000:
        raise ValidationError("Name must be more than 5 characters and less than 100 characters")

def description_validation(form, field):
    #check description is longer than 20 characters and less than 500 characters
    des = field.data
    if len(des) < 20 or len(des) > 2000:
        raise ValidationError("Description must be more than 20 characters and less than 500 characters")

def price_validation(form, field):
    price = field.data
    if price <= 0 or price>=1000000:
        raise ValidationError("Valid price must be within the range $0.00 and $1000000.00")

# def highlights_validation(form, field):
#     hl = field.data
#     if len(hl) < 5 or len(hl) > 100:
#         raise ValidationError("highlights must be more than 5 characters and less than 100 characters")



Categories_Choices = ["usedBooks", "stationary", "CD & Video", "restroom", "multiple stories", "coffee", "kids", "lounge"]




class BookstoreForm(FlaskForm):
    name = StringField("Bookstore Name", validators= [DataRequired(), name_validation])
    description = TextAreaField("Bookstore Description", validators= [DataRequired(), description_validation])
    price = DecimalField("Price", validators=[DataRequired(), price_validation], places=2, rounding = ROUND_HALF_UP)
    category = SelectField("Category",choices = Categories_Choices, validators=[DataRequired()])