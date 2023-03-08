class User < ApplicationRecord
    has_secure_password    
    has_many :lists 
    has_many :items, through: :lists 

     def sum_items
        items.all
     end 

    def sum_items_with_interest
    end 



end
