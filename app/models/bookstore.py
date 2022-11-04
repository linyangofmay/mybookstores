
from .db import db
from sqlalchemy.types  import DateTime, Date



class Bookstore(db.Model):
    __tablename__ = 'bookstores'

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(1000), nullable=False)
    description= db.Column(db.String(5000), nullable=False)
    price = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(1000), nullable=False)
    businessHours= db.Column(db.String(1000), nullable=False)
    website = db.Column(db.String(1000), nullable=True)
    phone = db.Column(db.String(10), nullable=False)
    address =db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    zipcode = db.Column(db.String(5), nullable=False)
    # latitude = db.Column(db.Integer, nullable=False)
    # longitude = db.Column(db.Integer, nullable=False)
    previewImage = db.Column(db.String(1500), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False)
    updatedAt = db.Column(db.DateTime, nullable=False)

    images = db.relationship('Image', back_populates = 'bookstore', cascade = 'all, delete')
    reviews = db.relationship('Review', back_populates='bookstore', cascade = 'all, delete')
    user = db.relationship('User', back_populates='bookstores')


    def get_avgstars(self):
        if len(self.reviews)>0:
            avg=sum(d.stars for d in self.reviews)/ len(self.reviews)
            return avg
        else:
            return 0.00


    def to_dict(self):
        return {
            'id': self.id,
            'ownerId':self.ownerId,
            'name': self.name,
            'website':self.website,
            'description':self.description,
            'price':self.price,
            'category':self.category,
            'businessHours':self.businessHours,
            'phone':self.phone,
            'address':self.address,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'zipcode':self.zipcode,
            # 'latitude':self.latitude,
            # 'longitude':self.longitude,
            'previewImage': self.previewImage,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt,
            'reviews': [review.to_dict() for review in self.reviews],
            'avgstars': self.get_avgstars(),
            # 'images': [image.to_dict() for image in self.images]
        }
