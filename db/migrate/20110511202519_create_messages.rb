class CreateMessages < ActiveRecord::Migration
  def self.up
    create_table :messages do |t|
      t.string :content, :null => false
      t.integer :sender_id, :null => false
      t.integer :reciever_id

      t.timestamps
    end
  end

  def self.down
    drop_table :messages
  end
end
