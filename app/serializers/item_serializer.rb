class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image
end
