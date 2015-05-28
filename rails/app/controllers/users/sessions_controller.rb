class Users::SessionsController < Devise::SessionsController
  respond_to :json

  # POST /resource/sign_in
  def create    
    # https://github.com/plataformatec/devise/blob/master/app/controllers/devise/sessions_controller.rb#L16
    self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_flashing_format?
    sign_in(resource_name, resource)
    yield resource if block_given?

    # Sign them in...
    token = TokenProvider.encode({ user_id: resource.id })
    respond_with resource, location: after_sign_in_path_for(resource) do |format|
      format.json { render json: {user: resource.email, token: resource.generate_token} }
    end
  end

end