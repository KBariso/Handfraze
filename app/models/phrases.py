from .db import db

class Phrase(db.Model):
    __tablename__ = 'phrases'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    media_url = db.Column(db.String(255))
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)

    user = db.relationship("User", back_populates="phrases")
    categories = db.relationship("Category", back_populates="phrases")
    comment = db.relationship("Comment", back_populates="phrases")



    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "media_url": self.media_url,
            "user_id": self.user_id
        }
