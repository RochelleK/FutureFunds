class Item < ApplicationRecord
    has_many :lists
    has_many :items, through: :lists 
end
