class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :total
  has_one :item
  has_one :user
end
