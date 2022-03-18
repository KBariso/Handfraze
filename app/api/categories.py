from flask import Blueprint, jsonify
from app.models import db, Category


categories = Blueprint(
    'categories',__name__, url_prefix='/categories'
)


@categories.route('/', methods=['GET'])
def get_all_categories():
    
    categories = [category.to_dict() for category in Category.query.all()]
    return jsonify(categories)


# # ---------------GET ALL PHRASES THAT MATCH WITH CATEGORY -------------------
# @phrases.route('/', methods=['GET'])
# def category_phrases():

#     phrases = [phrase.to_dict() for phrase in Phrase.query.all() ]
#     categories = [category.to_dict() for category in Category.query.all()]
#     category_phrases = [phrase for phrase in phrases if phrase.category_id in categories]

#     print(category_phrases)

#     return jsonify(category_phrases)
