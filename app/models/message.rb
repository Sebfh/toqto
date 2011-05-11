class Message < ActiveRecord::Base
  validates :content,  :presence => true
  
  belongs_to :sender, :class_name => "User" # picked up by the sender_id
  #has_and_belongs_to_many :recievers, :class_name => "User" # picked up by the reciever_id	
end
