class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :total
end
