module Request
  module RequestsHelpers
    def set_authentication_headers_for(user)
      user_headers = user.create_new_auth_token
      @request.headers.merge!(user_headers)
    end
  end
end

# Usage...
# before do
#   set_authentication_headers_for(user)
#   post :create, user_id: user.id
# end