from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from wtforms.validators import DataRequired, ValidationError, URL

def imageURL_validation(form, field):
    img = field.data
    if not img[-3:] == 'jpg' and (not img[-3:] == 'png') and img[-4:] != 'jpeg' and img[-4:] != 'webp' and img[-3:] != 'gif' and img[-3:] != 'svg':

       raise ValidationError("Input must be a valid Image Url")

class ImageForm(FlaskForm):
   url = StringField('url', validators=[URL(require_tld=True, message="Please enter a valid URL"), imageURL_validation])
   bookstoreId = IntegerField('bookstoreId', validators=[DataRequired()])
  #  userId = IntegerField('userId', validators=[DataRequired()])
