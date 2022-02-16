from this import d
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import DataRequired


class NewPhrase(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    media_url = StringField("media_url")
    category_id = SelectField("category", [DataRequired()], coerce=int)
    submit = SubmitField("Submit")
