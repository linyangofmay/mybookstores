from flask import Blueprint, request, session
from app.models import  db, Bookstore, Review, User
from datetime import datetime, date
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

now = datetime.now()

review_routes = Blueprint('reviews', __name__)

#get all reviews
@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    return {'reviews':[review.to_dict() for review in reviews]}

#get reviews based on bookstoreId
@review_routes.route('/bookstores/<int:id>')
def get_bookstore_reviews(id):
  # print('this is', id)
  bookstore_reviews = Review.query.filter(Review.bookstoreId == id).all()

  return {'bookstore_reviews': [review.to_dict() for review in bookstore_reviews]}

#get reviews based on userId
@review_routes.route('/user_reviews')
@login_required
def get_user_reviews():
  user_reviews = Review.query.filter(Review.userId == current_user.id).all()
  return {'user_reviews':[review.to_dict() for review in user_reviews]}


#create a review
@review_routes.route('/bookstores/<int:id>', methods=['GET','POST'])
@login_required
def create_review(id):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    data = form.data
    newreview = Review(
       review = data['review'],
       stars = data['stars'],
      #  reviewImg = data['reviewImg'],
       bookstoreId = id,
       userId = current_user.id,
       createdAt = now,
       updatedAt = now
    )
    db.session.add(newreview)
    db.session.commit()
    return newreview.to_dict()
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)},400

#update a review
@review_routes.route('/<int:reviewId>', methods=['PUT'])
@login_required
def updat_bookstore_review(reviewId):
    # print(reviewId)
    form = ReviewForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
      updatedreview= Review.query.get(reviewId)
      if updatedreview:
         updatedreview.review = form.data['review']
         updatedreview.stars = form.data['stars']
        #  updatedreview.reviewImg = form.data['reviewImg']

         db.session.commit()
         return updatedreview.to_dict()
      else:
        return {'message': 'Review not found'}, 404
    else:
      return {'errors': validation_errors_to_error_messages(form.errors)}, 400


#delete a review
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
   review = Review.query.get(id)
   if review:
     db.session.delete(review)
     db.session.commit()
     return {'message': 'Successfully Deleted'}
   else:
     return {'message': "Review cant not be found"}
