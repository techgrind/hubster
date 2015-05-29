class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  respond_to :json

  before_filter :set_default_response_format

  private
  def set_default_response_format
    request.format = :json
  end
end
