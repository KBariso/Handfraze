from flask import Blueprint, jsonify
from app.models import db, Category


categories = Blueprint(
    'categories',__name__, url_prefix='/categories'
)


@categories.route('/', methods=['GET'])
def get_all_categories():
    categories = [category.to_dict() for category in Category.query.all()]
    return jsonify(categories)
