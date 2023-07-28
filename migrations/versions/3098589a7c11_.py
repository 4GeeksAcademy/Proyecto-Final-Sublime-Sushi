"""empty message

Revision ID: 3098589a7c11
Revises: a0501ffbf8b2
Create Date: 2023-06-29 01:24:27.959310

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3098589a7c11'
down_revision = 'a0501ffbf8b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('token_blocked_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('jti', sa.String(length=40), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('token_blocked_list')
    # ### end Alembic commands ###