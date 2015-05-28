require 'jwt'

class TokenProvider
  class << self
    def encode(payload)
      payload['exp'] = 365.days.from_now.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def decode(token)
      begin
        payload = JWT.decode(token, Rails.application.secrets.secret_key_base)
        AuthToken.new(payload)
      rescue
        nil
      end
    end
  end
end