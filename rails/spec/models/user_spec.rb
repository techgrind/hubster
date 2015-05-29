require 'rails_helper'

RSpec.describe User, type: :model do
  describe User do
    before do
      @user = FactoryGirl.build(:user)
    end

    it "gets a uid assigned" do
      @user.save!
      expect(@user.uid).not_to be_blank
    end

    it "uid should be email address" do
      @user.save!
      expect(@user.uid).to eql(@user.email)
    end

    it "should have provider" do
      @user.save!
      expect(@user.provider).to eql("email")
    end
  end
end
