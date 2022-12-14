"""empty message

Revision ID: 0975b77d69b0
Revises: 
Create Date: 2022-11-03 22:51:34.535107

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0975b77d69b0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('firstName', sa.String(length=255), nullable=False),
    sa.Column('lastName', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('bookstores',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ownerId', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=1000), nullable=False),
    sa.Column('description', sa.String(length=5000), nullable=False),
    sa.Column('price', sa.String(length=100), nullable=False),
    sa.Column('category', sa.String(length=1000), nullable=False),
    sa.Column('businessHours', sa.String(length=1000), nullable=False),
    sa.Column('website', sa.String(length=500), nullable=True),
    sa.Column('phone', sa.String(length=10), nullable=False),
    sa.Column('address', sa.String(length=200), nullable=False),
    sa.Column('city', sa.String(length=100), nullable=False),
    sa.Column('state', sa.String(length=100), nullable=False),
    sa.Column('country', sa.String(length=100), nullable=False),
    sa.Column('zipcode', sa.String(length=5), nullable=False),
    sa.Column('previewImage', sa.String(length=1500), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['ownerId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=1000), nullable=False),
    sa.Column('bookstoreId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bookstoreId'], ['bookstores.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=1000), nullable=False),
    sa.Column('stars', sa.Integer(), nullable=False),
    sa.Column('bookstoreId', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['bookstoreId'], ['bookstores.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('images')
    op.drop_table('bookstores')
    op.drop_table('users')
    # ### end Alembic commands ###
