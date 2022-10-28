from flask_wtf import FlaskForm
from wtforms import  TextAreaField, IntegerField

from wtforms.validators import DataRequired, ValidationError, NumberRange, Optional


def review_validation(form, field):
    #check name is longer than 5 and less than 100 characters
    review = field.data
    if len(review) < 20 or len(review) > 500:
        raise ValidationError("Review must be more than 20 characters and less than 500 characters")


class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired(), review_validation ])
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min=1, max=5, message="Stars must be between 1 to 5")])
