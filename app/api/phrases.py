from flask import Blueprint, jsonify, request
from app.models import db, Phrase
from flask_login import current_user


phrases = Blueprint(
    'phrases',__name__, url_prefix='/phrases'
)


# ---------------GET ONE PHRASE -------------------
@phrases.route('/<int:id>')

def phrase(id):
    phrase = Phrase.query.get(id)
    return phrase.to_dict()


# ---------------GET ALL PHRASES -------------------
@phrases.route('/', methods=['GET'], strict_slashes=False)
def get_all_phrases():
    # phrases = Phrase.query.all()
    phrases = [phrase.to_dict() for phrase in Phrase.query.all() ]
    # return {'phrases': [phrase.to_dict() for phrase in phrases]}
    return jsonify(phrases)
