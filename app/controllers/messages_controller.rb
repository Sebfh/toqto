class MessagesController < ApplicationController
  respond_to :html, :xml, :json
  
  def index
    @messages = Message.all
    respond_with @messages
    # respond_to do |format|
    #  format.html
    #   format.json { render :json => @messages.map(&:attributes) }
    # end
  end
  
  def show
    @message = Message.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @message.to_xml(:except => [:id, :sender_id, :email], :include => :sender) }
    end
  end
end
