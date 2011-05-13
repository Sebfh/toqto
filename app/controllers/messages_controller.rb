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
  
  def new
    @message = Message.new
    
     respond_to do |format|
        format.html # new.html.erb
        format.xml  { render :xml => @message }
      end
  end
  
  def create
    @message = Message.new(params[:message])
    @user = User.find_by_name("Seb")
    @message.sender = @user
    
    respond_to do |format|
      if @message.save
        format.html { redirect_to home_index_path(), :notice => 'Flirt added! Good luck!' }
      else
        format.html { render :action => "new" }
      end
    end
  end
end
