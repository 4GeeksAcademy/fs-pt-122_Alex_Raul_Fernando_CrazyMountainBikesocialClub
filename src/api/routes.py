from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from src.api.models import db, User
from src.api.utils import is_valid_email

api = Blueprint("api", __name__)

@api.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


@api.route("/signup", methods=["POST"])
def signup():
    body = request.get_json(silent=True) or {}
    email = (body.get("email") or "").strip().lower()
    password = body.get("password") or ""

    if not is_valid_email(email):
        return jsonify({"msg": "Invalid email"}), 400
    if len(password) < 8:
        return jsonify({"msg": "Password must be at least 8 characters"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 409

    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User created"}), 201


@api.route("/login", methods=["POST"])
def login():
    body = request.get_json(silent=True) or {}
    email = (body.get("email") or "").strip().lower()
    password = body.get("password") or ""

    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Bad credentials"}), 401

    token = create_access_token(identity=user.id)
    return jsonify({"token": token, "user": user.serialize()}), 200


@api.route("/home", methods=["GET"])
@jwt_required()
def home():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({"msg": "user not found"}), 404
    
    home_data = {
        "user": user.serialize(),
        "weekly_kms": 42,
        "featured_routes": [
            { 
                "id": 1,
                "name": "Ruta del Bosque", 
                "Kms": 12 
            },
            { 
                "id": 2, 
                "name": "Costa Norte", 
                "Kms": 18 
            },
        ],
        "friends_activity": [
            { 
                "user": "Alex", 
                "kms": 10 
            },
            { 
                "user": "Pablo", 
                "kms": 25 
            }
        ]
    }
    return jsonify(home_data), 200

@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    return jsonify({"msg": "Access granted", "user": user.serialize()}), 200
