from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Bookstore, db
from app.forms import BookstoreForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

now = datetime.now()

bookstore_routes = Blueprint('bookstores', __name__)

@bookstore_routes.route('/')

def bookstores():
    bookstores = Bookstore.query.all()
    return {'bookstores': [bookstore.to_dict() for bookstore in bookstores]}
