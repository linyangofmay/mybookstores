from flask import Blueprint, request, session
from app.models import db, Image, User, Bookstore
from datetime import datetime, date
from flask_login import current_user, login_required
from app.forms import ImageForm
from app.api.auth_routes import validation_errors_to_error_messages
now = datetime.now()

image_routes = Blueprint("images", __name__)




# get images based on bookstoreId
@image_routes.route('/bookstores/<int:id>')
def get_bookstore_images(id):
  bookstore_images = Image.query.filter(Image.bookstoreId == id).all()
  print('bookstore_images----------', bookstore_images)
  return {'bookstore_images':[image.to_dict() for image in bookstore_images]}

#create images based on bookstoreId
@image_routes.route('/bookstores/<int:id>', methods=['POST'])
@login_required
def upload_image(id):
   form = ImageForm()
   form['csrf_token'].data = request.cookies['csrf_token']

   if form.validate_on_submit():


      data = form.data
      newimage = Image(
        url = data['url'],
        bookstoreId = data['bookstoreId'],
        # userId = data['userId'],
        createdAt = now,
        updatedAt = now
      )

      db.session.add(newimage)
      db.session.commit()
      return newimage.to_dict()
   else:
     return {'errors': validation_errors_to_error_messages(form.errors)},400

@image_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_image(id):
  image = Image.query.get(id)
  if image:
     db.session.delete(image)
     db.session.commit()
     return {'message': 'Successfully Deleted'}
  else:
     return {'message': "Review cant not be found"}
