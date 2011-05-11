class HomeController < ApplicationController
  def index
    @test = "Hoi"
  end
  
  def about
    @page = "About"
  end

end
