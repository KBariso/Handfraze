from .db import db
# from sqlalchemy import ForeignKey
# from sqlalchemy.orm import backref

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(256), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    phrase_id = db.Column(db.Integer, db.ForeignKey("phrases.id"), nullable=False)

    user = db.relationship("User", back_populates="comment")
    phrases = db.relationship("Phrase", back_populates="comments")



    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "user_id": self.user_id,
            "phrase_id": self.phrase_id
        }
