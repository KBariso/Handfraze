from flask import Blueprint, jsonify
from app.models import db, Category


categories = Blueprint(
    'categories',__name__, url_prefix='/categories'
)


@categories.route('/', methods=['GET'], strict_slashes=False)
def get_all_categories():
    # phrases = Phrase.query.all()
    categories = [category.to_dict() for category in Category.query.all() ]
    # return {'phrases': [phrase.to_dict() for phrase in phrases]}
    return jsonify(categories)
