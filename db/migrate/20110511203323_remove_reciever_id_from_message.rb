class RemoveRecieverIdFromMessage < ActiveRecord::Migration
  def self.up
    remove_column :messages, :reciever_id
  end

  def self.down
     add_column :messages, :reciever_id, :integer
  end
end
