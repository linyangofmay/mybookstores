from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Bookstore, db
from app.forms import BookstoreForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

now = datetime.now()

bookstore_routes = Blueprint('bookstores', __name__)

#get all bookstores
@bookstore_routes.route('/')

def bookstores():
    bookstores = Bookstore.query.all()
    # print('bookstores------', bookstores)
    return {'bookstores': [bookstore.to_dict() for bookstore in bookstores]}

#get one bookstore
@bookstore_routes.route('/<int:id>')
def bookstore(id):
    bookstore = Bookstore.query.get(id)
    if bookstore is None:
        return {'message': "No such bookstore"}
    return bookstore.to_dict()

#get current user bookstore
@bookstore_routes.route('/current')
@login_required
def currentuser_bookstore():
    currentuserid = current_user.id
    bookstores = Bookstore.query.filter(Bookstore.ownerId == currentuserid)
    return {'bookstores' : [bookstore.to_dict() for bookstore in bookstores]}

#create a bookstore
@bookstore_routes.route('/new', methods=['POST'])
@login_required
def add_bookstore():
    # print('hello world-----------========', current_user.id,  )

    form = BookstoreForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('form.data==========', form.data)
    if form.validate_on_submit():
        print('name-======', form.data['name'])

        new_bookstore = Bookstore(
            ownerId = current_user.id,
            # ownerId = form.data['owner_id'],
            name = form.data['name'],
            description = form.data['description'],
            price = form.data['price'],
            category = form.data['category'],
            businessHours = form.data['businessHours'],
            website = form.data['website'],
            phone = form.data['phone'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country'],
            zipcode = form.data['zipcode'],
            # latitude = form.data['latitude'],
            # longitude = form.data['longitude'],
            previewImage = form.data['previewImage'],

            createdAt = now,
            updatedAt = now

        )
        db.session.add(new_bookstore)
        db.session.commit()
        return new_bookstore.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


#update bookstore
@bookstore_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def update_bookstore(id):
    # print('id=========', id)
    form = BookstoreForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    edit_bookstore = Bookstore.query.get(id)
    # print('edit_bookstore=================', edit_bookstore )
    # print('form.data=========', form.data)
    if edit_bookstore is None:
        return {"errors" : "Bookstore couldn't be found"}, 404
    if edit_bookstore.ownerId != current_user.id:
        return {"errors" : "You don't have the right to edit the bookstore"}, 403
    print('before ifffffffff sucessssssss===============')
    if form.validate_on_submit():
        # print('after ifffffffffffff sucessssssss===============')
        edit_bookstore =Bookstore.query.get(id)
        edit_bookstore.name = form.data['name']
        edit_bookstore.description = form.data['description']
        edit_bookstore.price = form.data['price']
        edit_bookstore.category = form.data['category']
        edit_bookstore.businessHours = form.data['businessHours']
        edit_bookstore.website = form.data['website']
        edit_bookstore.phone = form.data['phone']
        edit_bookstore.address = form.data['address']
        edit_bookstore.city = form.data['city']
        edit_bookstore.state = form.data['state']
        edit_bookstore.country = form.data['country']
        edit_bookstore.zipcode = form.data['zipcode']
        # edit_bookstore.latitude = form.data['latitude'],
        # edit_bookstore.longitude = form.data['longitude'],
        edit_bookstore.previewImage = form.data['previewImage']

        edit_bookstore.updatedAt = now
        # print('before commit sucessssssss===============')
        db.session.commit()
        # print('after commit sucessssssss===============')
        return edit_bookstore.to_dict()
    return {"errors" : validation_errors_to_error_messages(form.errors)}, 400

#delete a bookstore
@bookstore_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_bookstore(id):

    delete_bookstore = Bookstore.query.get(id)

    if delete_bookstore.ownerId != current_user.id:
        return {"errors" : "You don't have the right to delete this bookstore"}, 403

    db.session.delete(delete_bookstore)
    db.session.commit()
    return ("Successfully deleted!")
