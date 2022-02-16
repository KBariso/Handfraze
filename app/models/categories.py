from .db import db
# from sqlalchemy import ForeignKey
# from sqlalchemy.orm import backref

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)

    phrases = db.relationship("Phrase", back_populates="categories")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
        }
