class User < ActiveRecord::Base
  validates :name,  :presence => true
  
  has_many :messages, :foreign_key => "sender_id"
  #has_and_belongs_to_many :recieved_messages, :class_name => "Message", :foreign_key => "reciever_id"
end
