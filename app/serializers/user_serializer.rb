class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :password_digest
  # has_many :lists 
  # has_many :items, through: :lists

 

end
