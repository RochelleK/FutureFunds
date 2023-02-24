class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :password_digest
end
