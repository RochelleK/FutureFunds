class User < ApplicationRecord
    has_secure_password    
    has_many :lists 
    has_many :items, through: :lists 

     def sum_items
        items.all.sum(:price)
     end 




end
