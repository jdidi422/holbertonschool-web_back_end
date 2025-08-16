#!/usr/bin/env python3
"""Module that inserts a new document into a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in the collection using keyword arguments.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
