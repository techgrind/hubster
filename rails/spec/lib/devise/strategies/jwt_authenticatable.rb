require 'devise/strategies/authenticatable'

module Devise
  module Strategies
    class JwtAuthenticatable < Authenticatable
      def valid? 
        request.headers['Authorization'].present? && token.present?
      end 

      def authenticate! 
        failure_message = "Authentication on JSON Web Token was unsuccessful"

        klass = mapping.to
        begin
          user = klass.find(token[:user_id])

          if user.nil? || user.class != klass
            fail!(failure_message)
          else
            success!(user)
          end
          
        rescue
          fail!(failure_message)
        end
      end 

      protected

      def token
        begin
          TokenProvider.decode(request.headers['Authorization'].split(' ').last)
        rescue
          nil
        end
      end
    end
  end
end
