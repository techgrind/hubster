class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  before_filter :debugger_bleh
  before_action :authenticate_user!

  private
  def debugger_bleh
    byebug
  end
end
