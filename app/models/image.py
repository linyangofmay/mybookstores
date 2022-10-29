
from .db import db
from sqlalchemy.types  import DateTime, Date

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url= db.Column(db.String(1000), nullable=False)
    bookstoreId = db.Column(db.Integer, db.ForeignKey('bookstores.id'), nullable=False)
    # userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # createdAt = db.Column(db.DateTime, nullable=False)
    # updatedAt = db.Column(db.DateTime, nullable=False)


    bookstore = db.relationship('Bookstore', back_populates='images')
    # user = db.relationship('User', back_populates = 'images')

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'bookstoreId':self.bookstoreId,
            # 'userId': self.userId,
            # 'createdAt':self.createdAt,
            # 'updatedAt':self.updatedAt
        }
