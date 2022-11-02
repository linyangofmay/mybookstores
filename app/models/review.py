from .db import db
from sqlalchemy.types  import DateTime, Date



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    bookstoreId = db.Column(db.Integer, db.ForeignKey('bookstores.id'), nullable=False)
    # reviewImg = db.Column(db.String(1000))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False)
    updatedAt = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    bookstore = db.relationship('Bookstore', back_populates='reviews')
    # print('bookstore.images---------',bookstore.images )

    def to_dict(self):
        # print('bookstore.images---------',self.bookstore.images )
        return {
            'id': self.id,
            'review': self.review,
            'stars': self.stars,
            'bookstoreId':self.bookstoreId,
            # 'reviewImg':self.bookstore.images if self.bookstore else None,
             'bookstoreImg': [image.to_dict() for image in self.bookstore.images],
            # 'bookstoreImg': self.bookstore.images if self.bookstore else None,
            'bookstorename': self.bookstore.name if self.bookstore else None,
            'bookstorecategory': self.bookstore.category if self.bookstore else None,
            'userId':self.userId,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt,
            'firstName': self.user.firstName if self.user else None,
            'lastName': self.user.lastName if self.user else None
        }
