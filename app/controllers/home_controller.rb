class HomeController < ApplicationController
  def index
    @test = "Hoi"
    @messages = Message.all
    #.map(&:attributes).to_json
  end
  
  def about
    @page = "About"
  end

end
