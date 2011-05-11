class AddLatAndLongToMessage < ActiveRecord::Migration
  def self.up
    add_column :messages, :lat, :string
    add_column :messages, :long, :string
  end

  def self.down
    remove_column :messages, :long
    remove_column :messages, :lat
  end
end
