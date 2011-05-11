class MessagesController < ApplicationController
  respond_to :html, :xml, :json
  
  def index
    @messages = Message.all
    
    respond_with @messages
  end
end
