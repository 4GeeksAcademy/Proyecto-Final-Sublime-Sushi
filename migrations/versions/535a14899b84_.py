"""empty message

Revision ID: 535a14899b84
Revises: e76741e66076
Create Date: 2023-09-21 23:00:01.588981

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '535a14899b84'
down_revision = 'e76741e66076'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pedidos', schema=None) as batch_op:
        batch_op.drop_column('estado')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pedidos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('estado', sa.VARCHAR(length=120), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
