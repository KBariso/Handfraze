from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import DataRequired


class NewPhrase(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    media_url = StringField("media_url")
    category_id = SelectField("category", choices=[(1, "Basic Phrase"),(2, "Greeting"), (3, "Food"), (4, "Shopping"), (5, "Location")])
    submit = SubmitField("Submit")
